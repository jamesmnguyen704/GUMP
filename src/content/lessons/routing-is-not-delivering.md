---
title: "Routing work is not delivering work"
date: 2026-09-15
when: "Sep 2026"
area: work
project: "AI agent orchestration"
summary: "My multi-agent setup routed tasks perfectly. Then nothing happened, because the worker was asleep."
rule: "Sent, read, claimed, started, done, and verified are six different states. Track each one."
---

I built a routing system for AI coding agents and learned that routing was the easy part.

A task could have an owner. The message could land in the right queue. The status page could say it was sent. And nothing would happen, because the session that should pick it up was idle and never woke up.

I had been collapsing several states into one:

- sent is not read
- read is not claimed
- claimed is not started
- started is not completed
- completed is not verified

Once I saw it that way, the design changed. The loop needs to know whether a worker is actually available, whether the task was claimed, whether an artifact was produced, whether someone verified it, and whether the final state was written somewhere durable.

None of this is really about AI. It's queue semantics. Ordinary background workers deal with the same things: leases, acknowledgements, retries, dead-letter queues, worker health.

My mistake was assuming that putting a smart model on a task removed the need for basic distributed-systems discipline. It didn't.
