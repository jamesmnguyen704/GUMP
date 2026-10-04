---
title: "The best checkpoint wasn't the last one"
date: 2026-06-15
when: "Jun 2026"
area: personal
project: "Local AI image lab"
summary: "Training a LoRA longer didn't make it better. Quality rose, peaked, and then fell as the model overfit."
rule: "Never assume the newest checkpoint is the best. Evaluate every candidate under the same conditions."
---

I went into LoRA training thinking what a lot of beginners think: more training means a better model.

That turned out to be wrong.

I was saving checkpoints every few epochs, so instead of loading the final one I generated the same evaluation images from each checkpoint. Same prompts, same seeds, same settings. I also added a similarity score so I wasn't judging only by eye.

The useful part wasn't the final score. It was the shape of the results. Quality went up, hit a peak, and then got worse as the model started memorizing its training images. A later run could also be worse than an earlier one, even with a cleaner dataset.

"Finished training" is not the same as "best model." A checkpoint is a candidate that still has to be evaluated.

My rule now: hold the evaluation conditions constant, compare every candidate, and keep the one that actually performs best. The model doesn't get credit for being newer.

That carries beyond image generation. If I can't say how I'll evaluate a change, I don't know whether I improved anything.
