---
title: "Working correctly and reaching no one are different problems"
date: 2026-09-16
when: "Sep 2026"
area: work
project: "AI agent workflow"
summary: "A warning fired correctly every single day for months. Nobody had ever wired anything to read it."
rule: "Exists, wired, runs, produces something real, gets read, changes something — a producer is only finished at the last link."
---

One of my data checks had been firing correctly every morning for months, flagging a source that had gone stale. It was right every single time. Nobody had ever connected anything to read it, so it sat there being correct and useless in exactly equal measure.

Once I went looking, it wasn't alone. A script built on day one, to guard against a real risk, had never been called by anything, for months. A piece of data got correctly resolved early in a pipeline and then silently dropped at the very last step before it would have mattered. A message log recorded everything happening across my agents, faithfully, and nothing was reading it — so when several of them went quiet at once, nobody noticed for days. A scan of incoming documents produced thousands of extracted records, and only a handful of them ever made it into the place that was supposed to store them.

Every one of these passed a basic check: it ran, and it didn't crash. That's a low bar. I started breaking "does this work" into six separate questions instead of one: does it exist, is it wired to anything, does it actually run, does it produce something real, does anything read that output, and does reading it change what happens next. Most of the cases above failed at "does anything read it" or "does it change anything" — the two steps a passing test will never catch, because a test only checks that the producer did its job, not that the rest of the chain exists.

I also learned the mirror-image mistake: not everything without a caller is broken. Some things are supposed to run only when I ask for them. Scheduling those just produces one more file nobody opens. The fix there isn't a wire-up, it's leaving it alone.

Exists, wired, runs, produces something real, gets read, changes something — a producer is only finished at the last link.
