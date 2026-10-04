---
title: "Two good models, one bad pipeline"
date: 2026-06-20
when: "Jun 2026"
area: personal
project: "Local AI image lab"
summary: "Two LoRAs each worked alone. Loaded together to put two subjects in one scene, they bled into each other. Prompting didn't fix it. Changing the pipeline did."
rule: "Separate composition from refinement when models compete for the same attention."
---

I had two LoRAs, each trained separately on a different subject. Each one worked on its own. The subject came out looking right, consistently.

Then I loaded both to put the two subjects in one scene, and the identities started bleeding. One face borrowed traits from the other, or one subject went generic while the other held. I spent a while tweaking prompts. None of it fixed the problem.

It wasn't a prompt problem. It was a pipeline architecture problem. Both models were influencing the same generation pass and competing for the same conditioning. The prompt was a shared control surface, and two models were pulling on it at once. No wording resolves that.

The fix was to stage it:

- Generate the composition first. Get the scene and the placement right, without expecting either identity to be exact yet.
- Then refine each subject separately, with only its own model active.

Each model gets a pass where it is the only thing talking, and the results stopped fighting.

The broader lesson isn't about image models. Two individually correct components can interact badly when they share state or compete for the same control surface. Each one passes its own test. The failure only shows up in the combination. Adding instructions to the shared surface doesn't help, because the instructions are the thing being fought over. The fix is changing the boundaries so they stop sharing it.
