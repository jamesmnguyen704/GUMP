---
title: "Three copies of one export are not three confirmations"
date: 2026-09-05
when: "Sep 2026"
area: work
project: "Finance & operations platform"
summary: "Three tables agreed with each other. They were all copies of the same partial export."
rule: "Count independent origins, not copies, and check the denominator before trusting a join."
---

I found that a large share of the accounts used in my transaction data didn't exist in any account listing I had loaded. Three different tables held the same partial set, which at first looked like three sources agreeing.

It was one source copied three ways. The export itself had stopped partway. The loader was fine. Every copy inherited the same hole.

Two habits changed:

- **I count independent origins, not copies.** Agreement between tables proves much less than it seems when they share a parent.
- **I check the denominator.** Before trusting a join, I ask how many rows *should* have matched, not just how many did.

The missing accounts were exactly the kind a filtered export drops. If I had only looked at the rows that joined, everything would have looked clean.
