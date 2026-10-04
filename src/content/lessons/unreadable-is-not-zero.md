---
title: "Unreadable is not zero"
date: 2026-09-12
when: "Sep 2026"
area: work
project: "Operational metrics"
summary: "A file failed to read, became an empty result, and the dashboard proudly showed zero problems."
rule: "Unknown is a real state. Missing is not zero, and unreadable is not empty."
---

I had a parser fail in a way that looked like success.

The file couldn't be read correctly. Instead of reporting that, the failure turned into an empty result. Downstream code saw the empty value and treated it as zero.

Zero looked great. That was the bug.

The system wasn't telling me "there are zero problems." It was telling me nothing at all, and I had accidentally turned *I don't know* into *everything is fine.*

So now:

- Unreadable is not empty.
- Missing is not zero.
- Unknown is not false.

A failed source stays visibly failed until there is evidence it was read. Zero means "I checked and found nothing." Unknown means "I couldn't check." Those are completely different statements.

A dashboard with an UNKNOWN on it looks less polished than one full of green zeros. It's also honest.
