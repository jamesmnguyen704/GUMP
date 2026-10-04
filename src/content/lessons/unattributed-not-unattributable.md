---
title: "Unattributed is not the same as unattributable"
date: 2026-08-12
when: "Aug 2026"
area: work
project: "AI agent workflow"
summary: "I could not find who depended on a piece of code, and reported it as if nothing did. Those are two different findings."
rule: "A null in a search is 'I couldn't find it,' never 'it doesn't exist.' Report the difference."
---

During a review of my own codebase, one finding said a large share of my old scripts were unreachable: nothing called them, so they were safe to delete. The method was a search for references to each script's name across the rest of the code.

It sounded reasonable until the search turned out not to understand a common way code gets called elsewhere, so scripts that were very much in use came back as having zero callers. That single gap in the search method accounted for most of the "unreachable" list.

I'd made the same mistake in a few other findings that same week, and so had the reviewers I was cross-checking against. A search that returns nothing gets reported as a fact: "nothing depends on this." But an empty search result really has two different meanings, and they call for opposite actions. One: I looked thoroughly and there truly is no dependency, safe to remove. Two: my search method has a blind spot and didn't find what's actually there. Those are not the same finding, and collapsing them into one sentence turns a measurement gap into false confidence.

The fix is a reporting habit, not a tool. When a search comes back empty, I say so plainly: "I could not find a caller with this method" is the honest claim. "There is no caller" is a stronger claim that needs a second, different method behind it before I'll write it down. If I can't get that second confirmation, the finding stays labeled unknown instead of getting rounded up to a conclusion.

It's a small rewording, but it's the difference between a measurement gap and a fact, and only one of those is safe to delete code over.
