---
layout: post
title: Starting the IDEA plugin journey
tags: 
  - IDEA 
  - godot
  - kotlin
created_at: 2023-09-29 01:00 +0800
---

I've been using JetBrains Rider for a year now, and I love it.
It has great code styling, fast code completion, and context actions that taught me more (by far) about C# than
anything else I've ever used.

I've only started having a problem with Rider after trying Godot[^godot] — an open-source game engine that uses the
GDScript
scripting
language.

### About GDScript

> GDScript is a high-level, object-oriented, imperative, and gradually typed programming language built for Godot. It
> uses an indentation-based syntax similar to languages like Python.
>
&mdash; [GDScript Reference](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html)

While it looks similar to Python, GDScript is mainly purpose-made for use around Godot's scene tree, making
development with it actually pretty different in practice.

GDScript definitely isn't the only supported language, and even with
a [huge list](https://github.com/Vivraan/godot-lang-support) of community-supported languages, there's still another
officially supported language I haven't mentioned...

### A Quick Note About C#

Godot actually *does* support C#! Even more than that, it's actually a great
alternative to GDScript — it's way faster (~4x), and it has more features (like interfaces!), with great IDE support and
the
full
library of NuGet packages.

So... why not just use C#? Well, it's simple — I just don't like using it for Godot. Being desktop-only and having
annoying build times when pressing play are a few reasons I don't really want to use it.

It's not for me right now, but I'm still excited to see where it ends up.

### The Problem

Let's cut to the chase. Rider, along with all other IDEA-based IDEs[^idea], doesn't have official support for GDScript.
While
there *are* a few community-created plugins, I haven't found one (yet) that gives me a similar experience to the C#
support in Rider.

So what's the solution? Simple — write a plugin for Rider (and the other JetBrains IDEs) with awesome GDScript support.

## The Plugin

Creating the plugin is actually pretty simple. Open up IntelliJ IDEA, make a new project, and select *IDE Plugin*. At
this point, it seems like making the plugin might not be too hard! (More on this later)

### The Parser and You

Many IDEA extensions / plugins are [open-source](https://github.com/JetBrains/intellij-community). These are, of course,
great resources to use when creating a plugin, but now the first roadblock is visible — the API.

> The Program Structure Interface, commonly referred to as just PSI, is the layer in the IntelliJ Platform responsible
> for parsing files and creating the syntactic and semantic code model that powers so many of the platform's features.
>
&mdash; [Part IV - PSI](https://plugins.jetbrains.com/docs/intellij/psi.html)

So... how do I use that?

If you looked at the open-source plugins, you might've noticed a pattern — there are a few files ending in `.bnf`[^bnf]
and `.flex` which, at some point in the process, get converted into Java code.

> While coding [a] parser manually is quite possible, we highly recommend generating parser and corresponding PSI
> classes
> from grammars using [the] Grammar-Kit plugin.
>
&mdash; [Parser Implementation](https://plugins.jetbrains.com/docs/intellij/implementing-parser-and-psi.html#parser-implementation)

`.bnf` and `.flex` files can be used to generate a lexer[^lexer] (using JFlex), which gets
converted into
Java code (`class ?? implements FlexLexer`) that can be used pretty painlessly with PSI.

This does make sense — it's not as much code as writing a full lexer, and the generator *does* seem pretty helpful,
especially
if you had to make hundreds of language plugins. Small problem though...

### My Own Tokenizer

I really don't want to use a generated lexer. I have a few reasons. (whether you think they're good or not is up to
you)

1. I already have a GDScript lexer that I made and tested in Kotlin
2. I don't find it as fun to write generated parsers
3. I'm not great at BNF and similar formats — I don't want to maintain something I'm clueless about

Now there's a problem — how do I get my lexer to work alongside PSI? There's really not much documentation about using a
custom lexer...

## Thoughts

Your language plugin needs a class deriving from *ParserDefinition*. It's the starting point for (as you would think)
most of the plugin's parsing.

Let's take a look at one of ParserDefinition's abstract functions. We'll look at more of them later (and also find out
where PSI comes in)

**createLexer**, returns *Lexer*, takes *Project?* \
This is where you should instantiate your lexer and return it. Let's talk about that — how do you make the lexer?

### LexerBase

Your lexer needs to derive from *LexerBase*. It's a tokenizer.

The name LexerBase is a bit misleading. You don't really want to do much work or analysis here — you just need to output
token types and positions. Don't parse anything, don't read any values! Implement things like that in the next stages,
where you
can have proper error management.

The *start()* function will be called, providing your lexer with a buffer to read and a boundary (*startOffset*,
*endOffset*) to stay inside.

`*edit:* getTokenType()` needs to return null eventually, or bad things will happen and the heap will fill up! When you're
out of tokens, return null!

## What's Next

The next step is to parse the tokens into a syntax tree — this seems to be a mixture of PsiBuilder (which holds the AST
while it's built)
and PsiParser, which parses the tokens, using PsiBuilder as storage.

More on that soon (when I get to it!)

## Footnotes

[^godot]: [https://godotengine.org/](https://godotengine.org/)
[^idea]: IDEA-based refers to a JetBrains IDE originally based on IntelliJ IDEA.
[^bnf]: [https://en.wikipedia.org/wiki/Backus–Naur_form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)
[^lexer]: [https://en.wikipedia.org/wiki/Lexical_analysis](https://en.wikipedia.org/wiki/Lexical_analysis)
