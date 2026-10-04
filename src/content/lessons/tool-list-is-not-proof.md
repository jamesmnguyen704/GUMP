---
title: "The server said it was connected. It was dead."
date: 2026-09-18
when: "Sep 2026"
area: personal
project: "MCP server for Claude"
summary: "Claude Desktop listed all my local server's tools, but every call hung. The tool list was never evidence the server was running."
rule: "A visible tool list proves nothing. Only a successful response does."
---

I had a small local MCP server that let Claude query a SQLite database. Claude Desktop showed all of its tools, so I assumed it was running. Every call hung for minutes and then failed.

Two things were wrong, and one hid the other.

**The tool list was misleading.** The client reads tool names from its config before it launches the server, so the tools show up even if the server process dies immediately.

**The process was dying.** The likely cause was a non-ASCII character printed during startup. On a Windows console using the cp1252 encoding, that can crash a Python script. In a stdio server there's no visible terminal, so the crash is silent.

The diagnosis was boring: run the server by hand in a terminal and read the traceback. The prevention is a rule I now use everywhere: no Unicode in print statements on Windows. No arrows, no checkmarks, no fancy dashes.

The bigger lesson is about evidence. "It shows up in the list" is a claim. "It returned a result" is proof. I only trust the second one.
