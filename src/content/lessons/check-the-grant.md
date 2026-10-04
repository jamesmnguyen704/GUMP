---
title: "Check the grant, not the description"
date: 2026-09-28
when: "Sep 2026"
area: work
project: "AI tools audit"
summary: "I audited the AI tools I use and found that what a tool says it can do and what it's actually allowed to do are different things."
rule: "Capability claims need execution evidence."
---

I stopped trusting the sentence "this tool can do X."

Documentation isn't useless. But during an audit of the AI tools and surfaces I work with, I found several layers that could disagree:

- a capability shown in a menu but not authenticated
- a tool that was installed but lacked the permission it needed
- a configuration that said "enabled" while the action failed
- an AI describing a file it had written that didn't exist afterward

The rule I use now: **check the grant, not the description.**

If the question is whether a tool can write, I want to see the actual permission or a harmless test write. If it says it created something, I look for it. If code is supposedly part of a workflow, I look for the call site.

This applies to ordinary software as much as AI. Configuration is a claim. Documentation is a claim. A status message is a claim. Evidence is what turns a claim into something I can build on.
