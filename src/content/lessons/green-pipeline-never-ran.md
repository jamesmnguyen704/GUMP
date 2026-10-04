---
title: "Built, tested, green, and never run"
date: 2026-09-21
when: "Sep 2026"
area: work
project: "Daily pipeline"
summary: "My pipeline reported success while some steps had failed, and some of my checks passed because nothing ever called them."
rule: "Completion needs evidence. Every safeguard needs a caller."
---

I had a daily pipeline that could finish "successfully" while parts of it had failed. Some steps were allowed to fail without stopping the run, which made sense. The problem was how I read the result. I saw green and thought *the system worked.* It only meant the top-level process reached the end.

Then I found something worse. Several of my checks were built, tested, green, and never run. Each worked when I invoked it by hand. Nothing in the nightly pipeline invoked them.

A check nobody runs always passes.

What changed:

- **I read the run record, not the exit code.** Which steps ran, skipped, or failed? Was the expected output actually produced? Is it current?
- **Every safeguard needs a caller.** For any check I ask: what calls it, when did that last happen, and what happens when it fails? If I can't answer from the scheduler and the logs, I treat the check as if it doesn't exist.
- **A mention is not a call site.** Finding a function name in a search proves it's mentioned, not that it's wired in.

"The script ran" is not evidence the work happened.
