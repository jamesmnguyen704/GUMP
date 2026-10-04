---
title: "Authority was the bottleneck, not work"
date: 2026-09-21
when: "Sep 2026"
area: work
project: "AI agent workflow"
summary: "Most of what was waiting on me wasn't work I hadn't gotten to. It was AI agents asking permission for things that were already built, tested, and reversible."
rule: "If an action is already built, tested, reversible with one command, and not high-risk, asking me first is friction, not safety."
---

I run several AI agents on scoped jobs, and at one point I counted everything that was sitting open, waiting on me personally. Most of it wasn't work. It was permission questions: *may I turn on this thing I already built and tested?*

My first attempt at fixing this didn't work. I wrote down that a few agents should have more authority to act without asking — but I never built a mechanism for them to actually exercise it. The authority existed in a sentence. There was no command that let anyone use it. It sat there, technically granted and practically useless, until I noticed and fixed that too.

The real fix wasn't "trust them more." It was splitting actions by risk, not by which agent was asking. An agent could act on its own only if the thing was already built, already tested and passing, reversible with one command, and not in a high-risk category. It also had to report exactly what it ran, and it couldn't approve its own work — something else had to check it first.

Some categories stayed mine no matter what: anything touching money, taxes, identity, or an architecture decision; anything irreversible; anything that talked to the outside world; and any change to how strictly a safeguard gets enforced. That last one mattered most to me. A safeguard that quietly gets weakened teaches everyone to stop trusting every safeguard, not just that one.

The lesson underneath it: I'd been treating "needs my okay" as a single category. It isn't. Some of it is judgment only I should make. Most of it was just friction I'd never gotten around to removing.

If an action is already built, tested, reversible with one command, and not high-risk, asking me first is friction, not safety.
