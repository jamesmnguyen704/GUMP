---
title: "Fail closed before QuickBooks"
date: 2026-06-01
when: "Apr – Aug 2026"
area: work
project: "QuickBooks import automation"
summary: "Every rule in my import checklist came from a failed import. Writing them down didn't stop the mistakes. Putting them in code did."
rule: "A written rule is a request. A rule enforced on the output path is a gate."
---

I generate import files for our accounting software instead of typing transactions by hand. The software is strict. A stray end-of-file marker fails the import. A field one character too long fails it. An item that doesn't exist yet fails it.

Every rule on my list came from a failed import. For a while those rules lived in a document I read before generating a file, and I still broke them. Duplicates were worse: a duplicate import *succeeds*, and then you spend the afternoon cleaning it up.

My first instinct was to make the generator smart enough to handle every case. I changed the goal instead:

- When the evidence is good, generate a valid file.
- When a source is missing, a value exceeds a known limit, an identifier is ambiguous, or a duplicate check fails, **stop**.
- A person always does the final import. The automation stages the work; it never quietly posts it.

The checks moved out of the document and into code that runs before a file is allowed out: look up what already exists, validate, then hand it to a human.

The closer automation gets to money, the more useful it is for it to refuse. Failing closed feels slow when everything works. It's the reason you trust the system when something doesn't.
