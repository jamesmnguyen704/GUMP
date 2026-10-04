---
title: "Two drive letters, one disk"
date: 2026-09-14
when: "Sep 2026"
area: personal
project: "Hardware inventory"
summary: "Building a storage inventory, Windows showed more drives than I owned. Two letters were partitions on one external disk, which changes what they're good for."
rule: "Inventory the physical device first, then map partitions and drive letters onto it."
---

I was building an inventory of my storage: what drives I have, how big they are, how fast they are, and what each one is for.

Windows showed me a list of drive letters, and the list made it look like I owned more drives than I did. When I pulled the hardware IDs and serial numbers, two of those letters turned out to be partitions on the same physical external drive. One disk, two volumes, two letters.

That matters more than it sounds. Two volumes on one disk are not independent backup targets. If I put a copy on each, I have two copies in one failure domain. When the drive dies, both letters go with it. The inventory was supposed to tell me where my copies are safe, and the drive-letter view was quietly wrong about that.

Benchmarks reinforced the point:

- The internal NVMe ran at multi-GB/s.
- The older USB drives ran at roughly 100 MB/s.
- One USB drive was noticeably slower than its twin, which gave me a concrete device to investigate instead of a vague sense that backups are slow.

The operating system's view is a convenience layer. Drive letters are labels on volumes, and volumes are slices of devices. Failure, redundancy, and speed are properties of the device. If I want to reason about any of them, I have to start there.

Inventory the physical device first, then map partitions and drive letters onto it.
