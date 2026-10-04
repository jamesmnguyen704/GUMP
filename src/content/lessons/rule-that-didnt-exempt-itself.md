---
title: "The rule that didn't exempt itself"
date: 2026-09-16
when: "Sep 2026"
area: work
project: "AI agent workflow"
summary: "My own operating rules explicitly banned bloating the rules file with incident stories. The day I added that rule, the file grew by about a quarter anyway."
rule: "A rule against a failure mode doesn't protect the person writing the rule. Measure the file, don't trust the intent."
---

The instruction file that governs how my AI agents behave has an explicit rule in it: don't let this file grow by stuffing it with incident stories, dated status, or one-off examples. Keep it small, keep it current, keep it a contract, not a diary.

The same day that rule got written into the file, the file itself grew by roughly a quarter. The person adding the discipline didn't follow it in the act of adding it. Nobody was lying or cutting corners on purpose; it's just genuinely hard to notice your own file growing while you're the one editing it, one reasonable-looking addition at a time.

What caught it wasn't a feeling that the file felt long. It was measuring the actual byte size of the file, commit by commit, across one day, and watching the number climb in a way no single edit looked responsible for. I went back later and checked the exact commit history myself rather than trust anyone's memory of what happened, including my own — and the number held up almost exactly.

The habit I took from this: a rule that exists to prevent a failure mode in other people's work needs to be checked against the work of the person who wrote it, not assumed exempt. Intent doesn't show up in a diff. Size does.
