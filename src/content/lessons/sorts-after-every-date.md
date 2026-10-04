---
title: "The string that sorted after every date"
date: 2026-10-01
when: "Oct 2026"
area: work
project: "Data pipeline"
summary: "A date column silently held a text value instead of a date. Because text sorts after every real date, a cleanup step could never reach the rows it corrupted."
rule: "When a column can hold the wrong type, check what the wrong type sorts as, not just whether it looks wrong."
---

One of my pipeline steps replaces a date range of old records with freshly reloaded ones: delete anything in the window, then insert the new rows. It had worked for months.

Some rows had a label value where a date was supposed to go — a non-date string sitting in a date column. Nothing crashed. The column accepted it, because the database doesn't enforce that a date column only holds dates.

The part that made it dangerous: the text sorted as greater than every real date under standard string comparison. So any window-based delete, any "give me everything before this date" query, silently treated those rows as being in the future. They were never caught by the cleanup step meant to fix exactly that kind of bad data, because the comparison that should have selected them for deletion instead ranked them last.

They sat there for weeks, hiding real records behind them whenever something joined on that column, and every reload looked clean because reload success and data correctness are two different claims.

The fix was two-part: validate the column on write, so a bad value can't get in again, and separately audit for values that are already wrong, since fixing the front door doesn't clean up what already got through. The second part is the one I'd skip if I were in a hurry, and it's the one that actually mattered here.

Now when I find a type that can be wrong, my first question isn't "does it look wrong," it's "what does the wrong value sort as, relative to everything that's supposed to be there." A bad value that sorts in the middle gets noticed. A bad value that sorts off the end hides forever.

When a column can hold the wrong type, check what the wrong type sorts as, not just whether it looks wrong.
