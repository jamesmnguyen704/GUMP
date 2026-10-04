---
title: "44 volts into a 36-volt sensor"
date: 2026-09-08
when: "Sep 2026"
area: personal
project: "Watt in Tarnation (solar lab)"
summary: "The common sensor for my off-grid solar build was rated below what my panel can put out on a cold morning."
rule: "Design to the worst case on the datasheet, not the number on the label. Datasheets first, AI suggestions last."
---

For my off-grid solar build I needed a sensor to measure the panel's voltage and current. A common choice is rated for 36 volts. My panel's label says about 37.5 volts open-circuit, so that already looked tight.

Then I learned that a panel's open-circuit voltage **rises as it gets colder**. On a cold morning mine can reach roughly 44 volts.

So the common sensor was out, and I picked a sibling part rated well above that. While checking, I also found that my own parts list still said the panel was 30 volts or less. That was simply wrong, and it could have led to the same mistake later.

The same math killed another idea. I wanted one 250-watt panel to run an old gaming PC. One panel covers maybe a tenth to a quarter of that load. And a cheap PWM charge controller would have thrown away about half the panel's power, so the build uses MPPT.

Habits I took away:

- **Design to the worst case** the datasheet allows. Temperature, tolerance, and age all move values.
- **Rank sources.** Manufacturer datasheets first, AI suggestions last. Anything I can't trace is marked unverified.
- **No purchases until the measurements exist.** The next thing I buy is a power meter, not a battery.

I'm a beginner in electronics. This is exactly the kind of mistake beginners make, and catching it on paper was cheap.
