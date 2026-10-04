---
title: "My garden needed a feedback loop, not more advice"
date: 2026-05-07
when: "May 2026"
area: personal
project: "Garden OS"
summary: "I kept asking the same plant questions. Structuring the garden as data, and writing outcomes back, made the answers get better over time."
rule: "A recommendation system is only useful when the outcome feeds the next decision."
---

Garden OS started with practical questions. What needs water? What's stressed? What changed? What should I do today?

I could have kept asking those one at a time. Instead I structured the garden itself as data: areas, zones, plants, observations, watering history, weather, and photos.

The software lesson came when I added a phone-friendly observation form backed by a small local server. The real test wasn't whether the form rendered. It was whether submitting an observation **actually wrote the right record** into the dataset and changed the next recommendation.

That turned the project into a closed loop:

**observe → record → decide → act → check the outcome → update**

One rule became the project's motto: *if the soil is wet and the plant is drooping, don't water more.* Suspect heat stress, roots, or drainage, then shade and reassess. That rule only works because the system knows the soil state and the history, not just today's symptom.

It's the same pattern I use at work, applied to tomatoes. A rule without feedback is just advice.
