---
title: "My docs said one number. The disk said another."
date: 2026-10-01
when: "Aug – Oct 2026"
area: work
project: "Documentation & AI context"
summary: "Old notes, context packs, and portfolio copy kept describing versions of the system that no longer existed."
rule: "Documentation is data. Generate what can be generated, check what can't, and date every copy."
---

My instruction file said one number of tools. The disk had a different number. Small, but it was one of many drifted claims: references to scripts I had already archived, an old report still described as the main output, and a feature marked "planned" in one document after it had actually shipped.

None of those documents were badly written. They were wrong because they were stale.

So I applied the same source-of-truth thinking I use for financial data:

- Which document owns this fact?
- Is it current state, or history?
- Is it generated from something authoritative, or copied by hand?
- When was it last verified?

Two changes came out of it. A deterministic checker compares claims in the docs against the disk every day. I didn't make it an AI sweep, because anything that needs judgment also goes stale. And for context I hand to other tools, I stopped editing copies by hand: a script builds the pack from live data and stamps it with a date and a hash.

A well-written document that's out of date can be more dangerous than no document at all. (This portfolio was a good example. Rebuilding it meant checking every claim against the code.)
