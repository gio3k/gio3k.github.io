---
layout: post
title: Post-processing IL in Unity
tags:
  - unity
  - c#
---

Me and a few members of [Small Fish](https://smallfi.sh) spent the early parts of this year prototyping a Unity version
of our
game [My Summer Cottage](https://sbox.game/fish/sauna). Coming from [s&box](https://sbox.game), which has built-in peer
to peer networking, we quickly realised that our team would need to adjust to Unity Netcode.

[Unity Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/current/about/) (or "UNGO") is the "new"
networking
solution for Unity, replacing the older "UNet" and aiming to be a suitable alternative to the dozens of other Asset
Store /
OSS networking solutions.

More than that, it's actually pretty great! It has good documentation, support for both host and
client-authoritative networking and (expected of Unity) good community support.

If UNGO is so good, why did I need to postprocess the code it compiles into?

## Copying a Perfect API

I believe UNGO feels out of place when using it in C#. Coming from s&box with its script focused approach on
networking, it initially felt a bit clunky to use.

Let's compare what a simple component would look like in both s&box and UNGO. First, s&box:

```csharp
// s&box networking (as of Mar 2025)
public class MyComponent : Component 
{
    [Sync] public int Health { get; set; } = 50;
    
    [Sync] public MyInventoryComponent Inventory { get; set; }
    
    public void Heal() 
    {
        Health += 10;
    }
}
```

This looks great. The `[Sync]` attribute is both easy to grasp and simple to use. Components, networked objects and
primitive
types are networked seamlessly.

Now, what would that look like with UNGO?

```csharp
// Unity Netcode (as of Mar 2025)
public class MyComponent : NetworkBehaviour 
{
    public NetworkVariable<int> Health = new( 50 );

    public NetworkVariable<NetworkBehaviourReference> Inventory;
    
    public void Heal() 
    {
        Health.Value += 10;
    }
}
```

Well... that's not terrible! The syntax is worse, but you can still see what's going on here - **NetworkVariable** lets
you network an INetworkSerializable or primitive type.

A good thing to note here is that you can't directly put a NetworkBehaviour in a NetworkVariable - you need a
"NetworkBehaviourReference". This is also a requirement for NetworkObject, which has a similar "NetworkObjectReference".

s&box's `[Sync]` definitely wins over UNGO in this regard, and I wanted to make migration to our Unity project easier
for our s&box team.

## Creating an ILPP plugin

This is a good time to note that I've open-sourced the plugin that I talk about in this post. Feel
free to
check it out here: [SuperSync for Unity Netcode - GitHub](https://github.com/gio3k/SuperSync).

### Why ILPP

It's also a perfect time to note that SuperSync doesn't only do IL rewriting. There's many cases where IL postprocessing
doesn't make sense, and you should weigh the pros & cons for your individual project. In fact, you might have an
easier time using
a [source generator](https://docs.unity3d.com/6000.0/Documentation/Manual/create-source-generator.html).

Source generators run before compilation, analyse code and then generate code **alongside** the existing code. They
aren't meant to **rewrite** existing code, but that compromise might be perfectly fine for your use case.

To generate extensions for NetworkBehaviours alongside the existing code, I used a source generator. `[Sync]` attributes
require **editing existing code**, which means I had to take another approach.

### Creating the Plugin Directory

Unlike a source generator or analyzer, your postprocessor plugin can be *part of your project*, inside the Assets
folder.

Make a directory somewhere in your Assets folder. We'll use this directory for our new plugin.

### Creating the Plugin Assembly

Your plugin directory needs to contain an **Assembly Definition**.

> Assemblies are individual units of compiled code that group types and resources together. Organizing scripts
> into assemblies has important advantages, especially as your codebase grows.
>
&mdash; [Organizing scripts into assemblies - Unity Manual](https://docs.unity3d.com/6000.0/Documentation/Manual/assembly-definition-files.html)

This is fairly good practice for your project's code in general, but here it's a hard requirement. Your ILPP plugin
needs to be "separated" from the rest of your project.

**Right-click** an empty space in your plugin directory and create an assembly definition by navigating to **Create** >
**Scripting** > **Assembly Definition**.

> ⚠️ **Important**
>
> Your assembly definition's name **must** start with "**Unity.**" and end with "**.CodeGen**", "**.Compiler**",
> "**.Compiler.Tests**", or "**.CodeGen.Tests**"![^1]

Naming your assembly correctly will make it reference **Unity.CompilationPipeline.Common**, which you'll need to make
your postprocessor.

## Creating an ILPP postprocessor

Using the ILPP API is fairly trivial at this point.

Create a class that derives from `ILPostProcessor`. If you can't find this class, then there's a good chance you
didn't name your assembly right! Check the previous section for an explanation.

Note that the base class has some functions to override. Just have `GetInstance` return `this` and `WillProcess`
return `true`. The important function here is Process - just leave that empty or throw an exception in there for now.

You should have something that looks like this:

```csharp
using Unity.CompilationPipeline.Common.ILPostProcessing;

namespace MyPlugin.CodeGen
{
    public class MyPostProcessor : ILPostProcessor
    {
        public override ILPostProcessor GetInstance()
        {
            return this;
        }

        public override bool WillProcess(ICompiledAssembly compiledAssembly)
        {
            return true;
        }

        public override ILPostProcessResult Process(ICompiledAssembly compiledAssembly)
        {
            throw new System.NotImplementedException();
        }
    }
}
```

You now have a postprocessor! (even if it just throws an exception)

## Debugging

If you've already tried adding more to your postprocessor, you might have noticed you don't get anything in the Console
when you use **Console.WriteLine()** or **Debug.Log()**. This is expected behaviour, and you have to use something else
to get some debug output.

This is pretty bad, but this was my way:

```csharp
public static class Logger
{
    public static void Log(string message)
    {
        // note: can't really log to a console in unity ILPP codegen, so I just log to a file
        const string path = "/Users/gio/dev/projects/gamedev/unity-projects/NetcodeTesting/log.txt";
        System.IO.File.AppendAllText(path, $"{message}\\n");
    }
}
```

Feel free to use something like that (make sure to remove it after you're done!)

I would also recommend wrapping your **Process()** function in a try block so you can log exceptions too:

```csharp
private static ILPostProcessResult ProcessUnsafe(ICompiledAssembly compiledAssembly)
{
    throw new System.NotImplementedException();
}

public override ILPostProcessResult Process(ICompiledAssembly compiledAssembly)
{
    try
    {
        return ProcessUnsafe(compiledAssembly);
    }
    catch (Exception e)
    {
        Logger.Log($"Failed to process assembly: {e}");
        
        // just return the provided assembly without changing anything
        return new ILPostProcessResult(compiledAssembly.InMemoryAssembly);
    }
}
```

## Implementation

### Don't Process Everything

You (usually) don't want your postprocessor to process every assembly being compiled, so it's best to have a real
`WillProcess` implementation:

For SuperSync, we just process assemblies that:

1. Don't start with Unity (like UnityEditor, Unity.Mathematics, etc.)
2. Reference SuperSync.Runtime and Unity.Netcode.Runtime

Your implementation doesn't have to be perfect! It's already a big improvement not having to process all assemblies.

```csharp
public override bool WillProcess(ICompiledAssembly compiledAssembly)
{
    // todo(gio): optimize
    return !compiledAssembly.Name.StartsWith("Unity");
    
    // SuperSync also checks these:
    // compiledAssembly.References.Any(v => v.EndsWith("SuperSync.Runtime.dll")) && 
    // compiledAssembly.References.Any(v => v.EndsWith("Unity.Netcode.Runtime.dll"));
}
```

### Code Editing or "Weaving"

You might notice that the `Process` function returns something called an `ILPostProcessResult` and takes an
`ICompiledAssembly` as input.

The Process function should take the input assembly data, process it, and then create an ILPostProcessResult from the
processed assembly data (or just from the input, if you don't want to process it)

ICompiledAssembly contains an object called InMemoryAssembly. This contains two byte arrays; one with DLL (PE) data and
one with debug symbol (PDB) data. You can use these arrays to create your ILPostProcessResult.

> ℹ️ **Info**
>
> If you just wanted to return the input assembly without processing it, you can do something like this:
>
> `return new ILPostProcessResult(compiledAssembly.InMemoryAssembly);`

First, we want a custom assembly resolver. We want to add all the directories that contain referenced assemblies.

```csharp
// Prepare our assembly resolver
var resolver = new DefaultAssemblyResolver();
foreach (var reference in compiledAssembly.References)
{
    var directoryName = Path.GetDirectoryName(reference);
    if (resolver.GetSearchDirectories().Contains(directoryName))
        continue;

    resolver.AddSearchDirectory(directoryName);
}
```

Here's where you'll start using **Mono.Cecil**. We want to read the input assembly (which is contained in a
byte array) so we'll use `AssemblyDefinition.ReadAssembly` and a MemoryStream.

Note that we create a ReaderParameters to use our custom assembly resolver.

After the assembly is read, you're pretty much just using normal Mono.Cecil!

```csharp
// Read assembly
var assemblyDefinition =
    AssemblyDefinition.ReadAssembly(
        new MemoryStream(compiledAssembly.InMemoryAssembly.PeData),
        new ReaderParameters { AssemblyResolver = resolver });
        
// Process assembly
foreach (var module in assemblyDefinition.Modules)
{
    // ...
}
```

Now we have to create and return an `ILPostProcessResult`. Sadly, we can't just do a simple
`assemblyDefinition.Write(...)` as ILPP requires the PDB data of the modified assembly. We need to tell *.Write()* to
write the debug symbols to our "symbol stream" - we'll use `WriterParameters` for this.

We'll use two memory streams, one for PE data and another for PDB data.

```csharp
using var peOutputStream = new MemoryStream();
using var pdbOutputStream = new MemoryStream();

var writerParameters = new WriterParameters
{
    SymbolWriterProvider = new PortablePdbWriterProvider(),
    SymbolStream = pdbOutputStream,
    WriteSymbols = true
};

assemblyDefinition.Write(peOutputStream, writerParameters);

return new ILPostProcessResult(new InMemoryAssembly(peOutputStream.ToArray(), pdbOutputStream.ToArray()));
```

After this section, your postprocessor is really just
a [Mono.Cecil](https://www.mono-project.com/docs/tools+libraries/libraries/Mono.Cecil/) project. As there's already a
lot of great tutorials for that, I'll let you work on that in your own time.

## Footnotes

[^1]: https://discussions.unity.com/t/how-does-unity-do-codegen-and-why-cant-i-do-it-myself/782372/6