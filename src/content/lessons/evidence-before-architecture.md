---
title: "Evidence before architecture"
date: 2026-08-12
when: "Aug 2026"
area: work
project: "AI agent workflow"
summary: "Outside reviewers argued my AI agent setup was bloated and should be cut down. Every argument for cutting it turned out to be a measurement error."
rule: "A metric quoted from memory or a dashboard is a hypothesis. Re-derive it from the source before it drives a decision."
---

I was running a team of AI agents and asked outside reviewers to check whether it had grown too large and should collapse into a few general-purpose roles.

Every argument for cutting it down came with a number attached. One said the setup was expensive, driven by a pile of quick, redundant chats. Another said a single dashboard metric proved one coordination pattern beat another. A third said most of the codebase was unreachable, so the majority of it could be deleted.

Checked against the raw data, every one of those numbers was wrong. The "cost" claim turned out to be driven by a tiny fraction of long sessions; almost everything else cost next to nothing. The dashboard comparison was an artifact of a counting bug that misattributed where the work actually happened. The "unreachable code" figure came from a detector that didn't understand a common import pattern — once that was fixed, most of the codebase turned out to be connected after all.

Nothing about the system itself turned out to be the problem. What failed, repeatedly, was measurement.

I set one rule after that: no architectural change ships until the metric supposedly driving it has been re-derived from its real source, in the current session, with the source cited next to the number. A number remembered from a prior conversation or read off a dashboard is a hypothesis. It doesn't get to make a decision on its own.

I added a second rule for anything that checks a system automatically: it isn't a real safeguard unless it has a caller, a schedule, a consequence when it fails, and someone who owns it. A check nobody calls and nothing depends on is a false sense of safety, not a safeguard.

A metric quoted from memory or a dashboard is a hypothesis, not an answer. Re-derive it from the source before it drives a decision.
