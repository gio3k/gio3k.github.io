---
layout: post
title: macOS Keyboard Emulation with C#
created_at: 2023-12-11 21:54 +0800
---

By using the CoreGraphics API in macOS, a developer can emulate a key press without any physical interaction. Doing that
is fairly simple in Objective-C
or C++, but how can we do the same in C#?

## CoreGraphics

[CoreGraphics](https://developer.apple.com/documentation/coregraphics) is a system framework standard in macOS. It
provides access to "Quartz Event Services", which we can use to emulate a key press.

Let's take a quick look at how that works in C++:

```cpp
CGEventRef e = CGEventCreateKeyboardEvent(NULL, (CGKeyCode) 33, true);
CGEventPost(kCGHIDEventTap, e);
CFRelease(e);
```

It's fairly simple - create, post and release the event. This code snippet should type a little `[` into whatever window
you're focused on.

Before we start putting this into C#, let's examine the two important functions here.

### [CGEventCreateKeyboardEvent](https://developer.apple.com/documentation/coregraphics/1456564-cgeventcreatekeyboardevent)

This takes a source reference, virtual key code and boolean (will the key be pressed or unpressed?) and returns a
reference to the event.

Event sources are out of scope for this post, but feel free to check
out
the [documentation for CGEventSourceCreate](https://developer.apple.com/documentation/coregraphics/1408776-cgeventsourcecreate).

### [CGEventPost](https://developer.apple.com/documentation/coregraphics/1456527-cgeventpost)

This takes a `CGEventTapLocation` for the first argument, with the event reference we want to post as the second
argument.

*I'm not too sure about this, but I think* the event tap location is where the event will be placed / processed.

We'll just use `kCGHIDEventTap` for now, which will place the event tap "where HID system events enter the window
server"[^eventtap0]

## Unmanaged Interop

Let's get this into C#!

We've already established the functions we need:

1. CGEventCreateKeyboardEvent
2. CGEventPost
3. CFRelease

CoreFoundation and CoreGraphics can both be found in `/System/Library/Frameworks`. More specifically, we can find the
dynamic libraries at `/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation`
and `/System/Library/Frameworks/CoreGraphics.framework/CoreGraphics`.

Let's use DllImport to expose these functions.

```csharp
public enum CGKeyCode : ushort {
    // ...
}

// Note that these snippets use unsafe code - if you can't use that, use IntPtr instead of void*, etc.

[DllImport("/System/Library/Frameworks/CoreGraphics.framework/CoreGraphics")]
public static extern unsafe void* CGEventCreateKeyboardEvent(void* source, CGKeyCode key, bool keyDown);
```

```csharp
public enum CGEventTapLocation : ushort {
    cghidEventTap = 0,
    cgSessionEventTap = 1,
    cgAnnotatedSessionEventTap = 2
}

[DllImport("/System/Library/Frameworks/CoreGraphics.framework/CoreGraphics")]
public static extern unsafe void* CGEventPost(CGEventTapLocation tap, void* eventRef);
```

```csharp
[DllImport("/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation")]
public static extern unsafe void CFRelease(void* typeRef);
```

## Basic Usage

As a small example, let's rewrite the C++ sample from the beginning:

```csharp
var e = CGEventCreateKeyboardEvent((void*)0x0, (CGKeyCode)33, true);
CGEventPost(CGEventTapLocation.cghidEventTap, e);
CFRelease(e);
```

## Footnotes

[^eventtap0]: https://developer.apple.com/documentation/coregraphics/cgeventtaplocation
