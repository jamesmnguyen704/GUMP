---
title: "The bank was ahead of the books"
date: 2026-04-15
when: "Spring 2026"
area: work
project: "Reconciliation engine"
summary: "My first reconciliation run found real cash with no accounting trail. That changed what I thought reconciliation was for."
rule: "An unattributed record stays unattributed until a document links it. Never assign by guessing."
---

One of the first useful surprises from my reconciliation work was finding money the bank knew about before the accounting system did.

The goal sounded simple: match payments to invoices using amounts, dates, references, customer names, and normalized versions of the same identifiers. Then a payment showed up that didn't fit. The cash was real. The accounting trail wasn't there yet.

That's when I stopped thinking of reconciliation as "make these two lists agree."

At a project-based contractor, the bank statement tells you cash moved. It rarely tells you why. Many deposits carry a generic memo, and the books trail the bank. So I made two rules:

1. **The bank and email are evidence of what happened. The books are a record of how it was booked.** When they disagree, that's a reconciliation item. Neither side gets overwritten.
2. **No attribution by guessing.** A deposit with no name stays unattributed until I can cite a document that links it.

That led to explicit states (confirmed, proposed, unmatched, needs review) instead of forcing every record into a match.

It's slower, and it makes dashboards look worse. But a tidy number built on a guess shows up later, in a filing or an audit, when nobody remembers making it. Sometimes the most valuable output from automation isn't an answer. It's a well-defined exception.
