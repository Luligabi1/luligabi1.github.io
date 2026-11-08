---
title: "Sabotage Game Balance: Corpse Reporting"
description: "---"
pubDate: "Sep 12 2026"
heroImage: "/blog/corpse_reports/thumb.webp"
tags: ["Sabotador", "Game Design"]
---

## The problems we wish to solve

- Games can become too


## Solution: Corpse Reporting

Inspired by the likes of *Among Us*,

### Test #1: Anonymity

Over the weekend of August 31st 2024, we realized the first corpse report test. On this iteration:
- Death messages were completely removed
- Dead players remained on the tablist until reported
- Trust votes could still be cast on them and be visible in the scoreboard to others until reported
- Once reported, the death was reported in chat and their name removed from the previous locations

<div style="display: flex; gap: 1rem; align-items: flex-start;">
<div style="flex: 1;">

| Top Compliments                                                | Votes |
|----------------------------------------------------------------|-------|
| Made the game more mysterious                                  | 19    |
| Playing as a Saboteur was more fun                             | 15    |
| As a Saboteur, it became easier to  kill without being exposed | 13    |
| Innocents were more spread out through the map                 | 7     |

</div>
<div style="flex: 1;">

| Top Complaints                                                  | Votes |
|-----------------------------------------------------------------|-------|
| It's hard to identify whether a corpse has been reported        | 21    |
| Some bodies weren't found the whole match, remaining unreported | 16    |
| Matches became too confusing                                    | 9     |
| Playing as an Innocent was less fun                             | 8     |

</div>
</div>

### Test #2: Improvements

Over the weekend of September 14-15th 2024, we realized a second corpse report test, addressing some of the feedback received:
- Unreported corpses appear as fully black with a big question mark on their chests, becoming far more recognizable
- Corpses unreported for 1m30s are automatically reported, preventing well hidden or inaccessible (i.e. void and lava) corpses remaining missing for the entire match
- Innocents and Detectives now receive 5 Karma for reporting corpses
  - Corpses were often left unreported despite have been found, this is a little incentive to go the extra mile
- When only one Innocent or Detective remains, all corpses are automatically reported and all roles revealed
  - This prevents saboteurs from ganging up on their last target, which likely is still unaware of their predicament

| Question                                                              | Yes            | No            | Neutral        |
|-----------------------------------------------------------------------|----------------|---------------|----------------|
| Compared to the normal game, did you have more fun being an Innocent? | 4 votes (18%)  | 4 votes (18%) | 14 votes (64%) |
| Compared to the normal game, did you have more fun being a Saboteur?  | 15 votes (71%) | 0 votes (0%)  | 6 votes (29%)  |
| Do you wish to see the mechanic fully implemented?                    | 14 votes (64%) | 3 votes (14%) | 5 votes (23%)  |

### Test #3: Alternative

One final test was realized on the weekend of September 28-29th 2024. Unlike the previous test, it's not a fully new iteration, but rather an alternative to the 2nd iteration, differing from it in:

- Death messages return, but are fully anonymous
- Automatic corpse report timer slashed in half to 45 seconds

| Question                                                                                      | 2nd Test      | 3rd Test       |
|-----------------------------------------------------------------------------------------------|---------------|----------------|
| Did you prefer having no death message (2nd test) or anonymous ones (3rd test)?               | 3 votes (20%) | 12 votes (80%) |
| Did you prefer the 2nd test's (longer) or 3rd test's (shorter) automatic corpse report timer? | 5 votes (33%) | 10 votes (67%) |



