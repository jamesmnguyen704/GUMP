---
title: "Don't ask the LLM to count"
date: 2026-08-20
when: "Aug 2026"
area: personal
project: "Atlas"
summary: "My local RAG pipeline answered 'what does this say' well and 'how many' badly. Retrieval gives the model a sample, not the dataset, and models are bad at arithmetic."
rule: "If the answer is a number, it should come from code."
---

I built a local RAG pipeline over my own documents: BM25 keyword retrieval in front of a local model. Questions like "what does this say" worked well. Questions like "how many" and "what's the total" were unreliable.

Two things were going wrong at once:

- Retrieval hands the model a sample of chunks, not the dataset. If the answer depends on every record, the model never sees every record. It counts what it was given and presents that as the total.
- LLMs are bad at exact arithmetic. Even with the right chunks in front of it, summing a column is not something I want done in natural language.

Neither problem is fixed by a better prompt. The model is doing what it can with what it has, and what it has is incomplete.

The fix was routing. Aggregation questions go to plain code that queries the data directly, with assertions on the results. The model only gets used where language matters: summarize this, explain that, find the passage that says this.

Two smaller lessons from the same build:

- BM25 worked well on identifier-heavy text, so I didn't need embeddings first. Keyword matching is a fine baseline when the queries are full of codes and names.
- Chunk by document structure, sections and records, not every N characters. A chunk that splits a record in half is a chunk the model can't use.

If the answer is a number, it should come from code.
