---
title: "The abbreviation that lied for months"
date: 2026-06-12
when: "Jun 2026"
area: work
project: "Data warehouse"
summary: "A local database shared its name with two unrelated systems, and for months that caused real confusion about what was actually being read."
rule: "If a short name collides with something else real, rename it before you build on top of it, not after."
---

I had one local database that mirrored data from several source systems. I'd named it after the first system it mirrored, using the common abbreviation for that software.

The problem: that same abbreviation is also the name of a completely different cloud platform I started integrating with months later. For a long stretch I genuinely believed the local database was that other system, because the name matched and nobody had reason to question it. It only came apart once I sat down to build the integration and the two things that shared a name needed to coexist in the same sentence.

The fix wasn't clever. I renamed the file to something that describes what it actually is — a warehouse, not any one source system — and banned the bare abbreviation everywhere in code, docs, and conversation. Every table already carried a prefix saying exactly which source it came from, so the ambiguity that mattered (what does this number represent) was already handled. The ambiguity that wasn't handled was the file's own name.

The part that stuck with me: the confusion cost real time before anyone noticed, because a wrong belief that nobody questions doesn't announce itself. A name is a claim about what something is, and an overloaded one is a claim half the people reading it will get wrong without ever finding out.

I rank renaming cheap now. If a short name collides with something else real, even just an abbreviation, the fix is to change the name, not to hope context always disambiguates it.

If a short name collides with something else real, rename it before you build on top of it, not after.
