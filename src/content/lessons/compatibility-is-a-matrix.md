---
title: "Compatibility is a matrix"
date: 2026-09-16
when: "Sep 2026"
area: personal
project: "Salvaged PC build"
summary: "A pile of good parts from a teardown looked like most of a PC. It wasn't a build plan. The build lives in the relationships between parts, not in the parts list."
rule: "Validate the relationships before buying the missing pieces."
---

I ended up with a pile of good parts from a teardown: an older i7, a mid-range GPU, 32 GB of DDR4, and both NVMe and SATA storage. Laid out on a table, it looks like most of a computer. The temptation was to figure out what was "missing" and buy it.

Instead I reconstructed the compatibility graph before shopping:

- The CPU fixes the socket and the board generation. That one part decides which motherboards are even candidates.
- The board constrains the memory type. The DDR4 is only useful if the board takes it.
- The GPU needs a slot, enough power, and physical clearance in whatever case this ends up in.
- The storage has interface needs of its own, and the board has to have the right connections for both kinds.
- The goal changes the priorities. If this is a NAS or home server, I care about drive bays, redundancy, and idle power far more than GPU performance.

Once I drew it out, the realization was that a parts inventory is not a build plan. The build lives in the relationships. A part is only "good" relative to the parts it has to connect to and the job the machine is for.

This is the same shape as software dependencies. Fix the interfaces first. Mark what is already locked by the parts I own. Find the unresolved edges, the constraints nothing on the table satisfies yet. Then shop for exactly those, and nothing else.
