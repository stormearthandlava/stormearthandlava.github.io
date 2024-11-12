---
layout: post
title: Grandpa, are you scaling?
#            dd/mm/yyyy
last_update: 12/11/2024
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

Legend:
- ✅ ... affected by
- ❌ ... not affected by
- `-` ... both are affected equally by

| Talent | Farseer | Stormbringer |
| --- | :---: | :---: |
| {{ site.data.spell.fire_and_ice }} | - | - |
| {{ site.data.spell.natures_fury }} | ❌ | ✅ |
| {{ site.data.spell.enhanced_imbues }} | ❌ | ✅ |
| {{ site.data.spell.totemic_surge }} | - | - |
| {{ site.data.spell.totemic_recall }} | - | - |
| {{ site.data.spell.natures_swiftness }} | ✅ | ✅ |
| {{ site.data.spell.call_of_the_elements }} | - | - |
| {{ site.data.spell.elemental_fury }} | ❌ | ✅ |
| {{ site.data.spell.fire_elemental }} | - | - |
| {{ site.data.spell.storm_elemental }} | ✅ | ✅ |
| {{ site.data.spell.flash_of_lightning }} | ❌ | ✅ |
| {{ site.data.spell.aftershock }} | ❌ | ✅ |
| {{ site.data.spell.surge_of_power }} | ❌ | ✅ |
| {{ site.data.spell.echo_of_the_elements }} | - | - |
| {{ site.data.spell.icefury }} | - | - |
| {{ site.data.spell.stormkeeper }} | ❌ | ✅* |
| {{ site.data.spell.master_of_the_elements }} | ❌ | ✅ |
| {{ site.data.spell.fusion_of_elements }} | - | - |
| {{ site.data.spell.storm_frenzy }} | ✅ | ✅ |
| {{ site.data.spell.swelling_maelstrom }} | - | - |
| {{ site.data.spell.primordial_fury }} | ❌ | ✅ |
| {{ site.data.spell.fury_of_the_storms }} | - | - |
| {{ site.data.spell.herald_of_the_storms }} | - | - |
| {{ site.data.spell.elemental_unity }} | ❌ | ✅ |
| {{ site.data.spell.flux_melting }} | - | - |
| {{ site.data.spell.lightning_capacitor }} | ❌ | ✅ |
| {{ site.data.spell.power_of_the_maelstrom }} | ❌ | ✅ |
| {{ site.data.spell.improved_flametongue_weapon }} | - | - |
| {{ site.data.spell.everlasting_elements }} | - | - |
| {{ site.data.spell.earthshatter }} | - | - |
| {{ site.data.spell.thunderstrike_ward }} | - | - |
| {{ site.data.spell.echo_chamber }} | ❌ | ✅ |
| {{ site.data.spell.searing_flames }} | ❌ | ✅ |
| {{ site.data.spell.earthen_rage }} | - | - |
| {{ site.data.spell.flames_of_the_cauldron }} | - | - |
| {{ site.data.spell.elemental_equilibrium }} | ❌ | ✅ |
| {{ site.data.spell.eye_of_the_storm }} | - | - |
| {{ site.data.spell.ascendance }} | ❌ | ✅ |
| {{ site.data.spell.echo_of_the_elementals }} | - | - |
| {{ site.data.spell.primordial_wave }} | - | - |
| {{ site.data.spell.lightning_rod }} | ❌ | ✅ |
| {{ site.data.spell.mountains_will_fall }} | - | - |
| {{ site.data.spell.first_ascendant }} | ❌ | ✅ |
| {{ site.data.spell.preeminence }} | ✅ | ✅ |
| {{ site.data.spell.erupting_lava }} | - | - |
| {{ site.data.spell.magma_chamber }} | - | - |
| {{ site.data.spell.splintered_elements }} | ✅ | ✅ |
| {{ site.data.spell.charged_conduit }} | ❌ | ✅ |
| {{ site.data.spell.echoes_of_great_sundering }} | - | - |
| {{ site.data.spell.deeply_rooted_elements }} | ❌ | ✅ |
| {{ site.data.spell.primal_elementalist }} | - | - |
| {{ site.data.spell.liquid_magma_totem }} | - | - |

*Arc Discharge Bug. Wait for the `Secret Techs` blogpost...

Well. I guess `Stormbringer` wins the scaling battle hands down. This is noticeable downside for the whole `Farseer` hero tree.

Also finally: {{ site.data.spell.routine_communication }} dislikes spending Maelstrom.

So yeah...do our Ancestors scale? They sure do. But worse than `Stormbringer` and they clearly dislike quite a few talents.

Yours sincerely,<br/>
Bloodmallet
