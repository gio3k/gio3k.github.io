---
layout: post
title: WRAPPING macOS Keyboard Emulation with C#
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

## Footnotes

[^eventtap0]: https://developer.apple.com/documentation/coregraphics/cgeventtaplocation
