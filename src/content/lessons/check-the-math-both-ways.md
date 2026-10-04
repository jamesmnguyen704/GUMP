---
title: "Check the math both ways"
date: 2026-09-18
when: "Sep 2026"
area: work
project: "Procurement checks"
summary: "An equipment order where every figure looked reasonable on its own, and two of them were wrong. Computing the same total two independent ways is what caught it."
rule: "Compute every money total two independent ways. 'Looks right' is not 'agrees with itself.'"
---

Part of my job is checking equipment purchases against system designs. The order says what we're buying. The design says what we need. They should agree.

On one order they didn't, and it took two different calculations to see it. The designed system size didn't match the panel count times the panel wattage. Separately, a quantity had a transposed digit. Each figure looked reasonable sitting alone on the page. If I had checked each number against my sense of "about right," I would have passed it.

What caught it was computing the same total two independent ways:

- Unit price times quantity.
- Price per watt times total watts.

Those should land on the same number. When they don't, something upstream is wrong. It could be a typo, a substituted part, or a partial order. The disagreement doesn't tell me which, but it tells me to stop and find out before anything gets paid.

The reason this works is that the two paths depend on different inputs. A transposed quantity moves one total and not the other. A wattage mismatch moves one and not the other. A single check can be fooled by a single error. Two independent checks have to be fooled by two errors that happen to cancel, which is far rarer.

This is now my default on anything with money attached. It costs almost nothing, and "looks right" turned out to be a much weaker test than I thought.

Compute every money total two independent ways. "Looks right" is not "agrees with itself."
