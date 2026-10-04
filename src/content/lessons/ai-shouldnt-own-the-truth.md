---
title: "My data lake taught me that AI shouldn't own the truth"
date: 2026-06-01
when: "May – Jun 2026"
area: personal
project: "Atlas"
summary: "Copies, summaries, and AI memory kept drifting apart, so I moved the canonical data outside the AI and generated views for each tool."
rule: "Keep canonical data outside the AI. Every AI tool is a consumer of a generated view, not the database."
---

Atlas started because I had the opposite of a data shortage. I had too many copies of the same information.

Exports, notes, conversations, and tool-specific context files all held pieces of the same facts. Once several AI tools were involved, it became very easy for a convenient summary to quietly turn into "the source."

So I reversed the relationship:

- **Raw inputs stay untouched**, so I can always rebuild.
- **Parsers and transforms** turn them into structured, searchable data.
- **Canonical records** live in a local, tool-agnostic layer.
- **Each AI tool gets a generated view** based on what it needs and what it's allowed to see.

That changed how I think about AI memory. It's useful context, but it isn't a record with an owner, a source, and a known refresh path.

It also made a few data-engineering basics personal:

- **Idempotency.** Running an import twice should not create two realities.
- **Lineage.** I want to trace any curated fact back to the raw file it came from.
- **Regression tests for parsers.** An AI-assisted parser rewrite can silently change output.

These are the same problems production data teams deal with, just at a smaller scale.
