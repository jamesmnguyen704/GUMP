---
title: "My local model wasn't slow because of settings"
date: 2026-08-15
when: "Aug 2026"
area: personal
project: "Local LLM lab"
summary: "A 30B model ran at two tokens per second on my laptop. I started tuning flags. The real problem was arithmetic, and a wrong assumption about my own setup."
rule: "Inspect the runtime that actually exists, and find the bottleneck before you tune anything."
---

I got a 30-billion-parameter model running locally on my laptop, and it produced about two tokens per second. My instinct was to start tweaking settings: threads, backends, flags.

Several problems were stacked on top of each other:

- An **older runtime build** didn't recognize the model's architecture. Updating it fixed that.
- **Multiple model servers** were loaded at once and fighting over GPU memory. Shutting them down fixed that.
- The big one: I'd downloaded an **8-bit version far larger than my GPU's 12 GB**. Most of the model lived in system RAM, so every token meant reading weights over a much slower memory bus. No setting fixes that.

Then I checked the install itself. I had been reasoning about CUDA performance, but the build on disk used a different GPU backend entirely. Having an NVIDIA GPU doesn't mean every app is using the CUDA path.

The fix was a smaller quantization that fits more of the model on the GPU, then benchmarking one variable at a time with multiple runs each.

I also changed what the model was for. At a few tokens per second it's frustrating for chat, but fine for overnight batch jobs on data I'd never send to a cloud API.

A spec sheet isn't runtime evidence. Measure, and don't estimate. My first guess at memory bandwidth was off by about a third.
