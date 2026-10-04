---
title: "A fresh timestamp can hide stale data"
date: 2026-09-10
when: "Sep 2026"
area: work
project: "Reporting pipeline"
summary: "A report regenerated on schedule and looked healthy every day, but the data underneath had stopped moving."
rule: "Freshness belongs to the data, not to the job that touched it."
---

One of my reports regenerated on schedule. Every run gave it a new timestamp, so it looked healthy. The underlying data had stopped moving. The report was fresh. The information was stale.

A related one: I dropped new exports into a folder and assumed the next matching run would use them. It didn't. The matcher read a table fed by a *different* report, and that one was weeks old. The output looked completely normal.

Stale data doesn't announce itself. It returns confident answers.

That forced me to separate two things I had been treating as one:

- **Pipeline freshness**: when did the job run?
- **Data freshness**: what is the newest real business record in this dataset?

The second one is what matters, so it belongs in the health check. "Updated today" only tells you when software touched the file. It doesn't tell you whether the file contains current information.

The same goes for API syncs, spreadsheets, cached reports, and AI context packs. Before trusting a number, find out where it was loaded from and when. If the system can't tell you, it shouldn't be answering.
