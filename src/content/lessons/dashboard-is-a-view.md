---
title: "The dashboard is a view, not the truth"
date: 2026-08-01
when: "Aug 2026"
area: work
project: "Finance & operations platform"
summary: "The same fact lived in accounting software, spreadsheets, a local database, and a dashboard. I had to decide which one was allowed to be right."
rule: "Derived outputs never become sources of truth. Disagreements become exceptions, not silent picks."
---

I used to think the hard part of a dashboard was getting all the data onto one screen. The harder problem was deciding which version of the data was allowed to be right.

I was working with accounting records, spreadsheets, a local database, source documents, and generated reports. Two of them disagreeing was normal. The dangerous response would have been to quietly pick whichever value looked most reasonable.

So I wrote a rule: **derived outputs do not become sources of truth.**

The accounting system owns the accounting record. Source documents own the facts they document. My data layer can represent operational reality and flag conflicts. Dashboards sit on top. They are useful because they make information understandable, not because they have authority of their own.

A related rule came out of project cost reporting: only one script is allowed to calculate cost per project, and everything else reads its output. "Source of truth" isn't about where a file lives. It's about who is allowed to write it. A file with five writers is five sources.

Now when two sources disagree, I don't hide it. The disagreement becomes an exception someone has to resolve. The dashboard is where I show what the evidence says, not where I decide what's true.
