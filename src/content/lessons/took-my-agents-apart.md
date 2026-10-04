---
title: "I built a team of AI agents, then took most of it apart"
date: 2026-09-20
when: "May – Sep 2026"
area: work
project: "AI agent orchestration"
summary: "More specialist agents meant more coordination, and the coordination layer started becoming its own product."
rule: "Collapse lanes before adding them. Coordination infrastructure needs a budget too."
---

For a while I had a lot of AI agents. Each had a name, a lane, and rules. On paper it looked organized. In practice I spent more time deciding which agent should handle something than doing the work, and overlapping lanes gave overlapping answers that I had to reconcile.

When I measured it, most lanes sat idle for hours while still holding memory. Sessions stopped to wait for input and nobody read them for days. When a session closed mid-task its context went with it, and the redo sometimes reached a different answer.

Every coordination problem suggested a reasonable fix: another status view, another queue, another handoff format. Individually each made sense. Together they were turning into their own product, competing for time with the work they were supposed to support.

So I took most of it apart and consolidated:

- one durable place for open work
- one durable record for decisions
- fewer generated status pages
- a stricter definition of done instead of another tracker

The rule I kept: **collapse lanes before adding them.** A new lane has to own a recurring task, with a named input, a named output, and a point where it hands off to me.

More agents isn't more throughput. Every agent is state someone has to keep alive and read. Start with one. Add a second only when you can name what the first can't do.
