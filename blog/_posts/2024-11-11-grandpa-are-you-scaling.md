---
layout: post
title: Grandpa, are you scaling?
#            dd/mm/yyyy
last_update: 11/11/2024
excerpt: ""
author: Bloodmallet
toc: false
big_article: false
---

> "No."
<p style="height: 80vh;"></p>

Bummer. But let's dig into the "why".

First, some groundwork: hero trees compete with each other.
So the answer compares the hero trees.

This is basically some sort of `Farseer` versus `Stormbringer`.

Ancestors cast their own version of:
- Lava Burst, whenever the player casts a single target spell.
- Chain Lightning (hitting 1-3 targets), whenever the player casts an aoe spell.
- Elemental Blast, when they despawn.

Which stats actually affect our Ancestor casts?

| What | Affects Ancestors |
| --- | :---: |
| Crititcal strike rating - Lava Burst |  ❌ |
| Crititcal strike rating - Chain Ligthning | ✅ |
| Crititcal strike rating - Elemental Blast | ✅ |
| Haste | ❌* |
| Mastery - damage amp | ✅ |
| Mastery - Overloads | ❌ |
| Versatility | ✅ |

*Haste doesn't affect their casts, except for hard threshholds at which the player can fit a whole additional cast into their uptime **which also needs to hit the target within said uptime**.

So based on the above, do stats scale?

| Stat | Full scaling? |
| --- | :---: |
| Crititcal strike rating | ❌ |
| Haste | ❌ |
| Mastery | ❌ |
| Versatility | ✅ |

`Stormbringer` scales with all stats.

Oof.

But what about talents?
Do Ancestors benefit from our spec talents?

| Talent | Affects Ancestors |
| --- | :---: |
| {{ site.data.spell.eeq }} | ❌ |
| {{ site.data.spell.improved_flametongue_weapon }} - Lava Burst | ❌ |
| {{ site.data.spell.lr }} - Chain Lightning | ❌ |
| {{ site.data.spell.echo_chamber }} | ❌ |


Considering `Stormbringer` scales with all of the above (except {{ site.data.spell.improved_flametongue_weapon }}) this is a noticeable downside for the whole hero tree.

Also finally: {{ site.data.spell.routine_communication }} dislikes spending Maelstrom.

So yeah...do our Ancestors scale? They sure do. But worse than `Stormbringer` and they clearly dislike quite a few talents.

Yours sincerely,<br/>
Bloodmallet
