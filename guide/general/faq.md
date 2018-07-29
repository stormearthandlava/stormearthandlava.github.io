---
layout: page
title: F.A.Q.
last_update: 2018-07-17 09:00:00
game_version: 8.0.1 Pre-patch
toc: true
---

This page has the answers to some frequently asked questions for Elemental in Patch 8.0.1.

> Q: "Will Elemental be viable in Battle for Azeroth?"

Firstly, no spec in the game is unviable. Certain specs may be favoured for certain bosses in a raid, but this is only relevant to the very highest end of raiding (ie, competing for world first). Secondly, we can't say how balancing will pan out in the remaining few weeks before BFA's release. Elemental (and every other spec) will remain competitive for 99.9% of the playerbase.

> Q: "What's the deal with 8.1, are we unfinished?"

Technically the developers admitted to Elemental being a somewhat unfinished spec.  This does not mean that Elemental is unplayable, in fact it is far from it.  All this means is that Elemental might see more significant changes in 8.1 than tuning. We are not privy to any sort of design insight and we have no idea what changes are coming or if any changes are coming at all.

> Q: "Will Elemental be strong in the pre-patch?"

Yes.

> Q: "Do the Maelstrom changes in pre-patch help?"

Yes, and there's a blog coming on this on Friday the 20th of July.

> Q: "What legendaries should I use?"

See the pre-patch gear page under the General section of the guide.

> Q: "What talents should I use in Antorus?"

See the Antorus guide under the Raids section of the guide.

> Q: "What Pots/Food/Flasks should I use?"

See the Consumables section of the guide.

> Q: "How many targets should I cast {{ site.data.spell.fs }} on?"

Because of the new cooldown, it is best to only {{ site.data.spell.fs }} a maximum of three targets.

> Q: "Does {{ site.data.spell.eq }} stack?"

Yes, {{ site.data.spell.eq }} stacks and has no stack limit.

> Q: "When should I stop using {{ site.data.spell.es }} and use {{ site.data.spell.eq }}?"

Switch over to using {{ site.data.spell.eq }} on two targets or more if not talented into {{ site.data.talent.exposed_elements }}.  If talented into {{ site.data.talent.exposed_elements }}, use an {{ site.data.spell.es }} > {{ site.data.spell.lb }} combo on two targets.  If there are more than two targets and talented into {{ site.data.talent.exposed_elements }}, cast {{ site.data.spell.eq }}.

> Q: "When is the best time to use Primal Fire Elemental's {{ site.data.spell.meteor }}?"

*Note: This only applies when talented into* {{ site.data.talent.pe }}.

Since the cooldown of {{ site.data.spell.meteor }} is the same as the duration of Primal Fire Elemental, save it for a period of AOE within the Elemental's lifetime.  If there is no upcoming AOE, cast it immediately.  Make sure to bind it to a key.

> Q: "Is there a way to enable/disable {{ site.data.spell.ee }} taunt without screwing up my autocast settings of the DPS Elemental?"

*Note: This only applies when talented into* {{ site.data.talent.pe }}.

Not that we're aware of. The Elementals' autocast settings are shared between the Elemental pets. If you deactivate or activate it on one button, the matching button of the other Elementals will share that setting. We hope, that this will be changed.

> Q: "What are some useful Macros?"

 This Macro allows you to place an {{ site.data.spell.eq }} at your cursor:

 ```
#showtooltip Earthquake
/cast [@cursor] Earthquake
 ```

 This macro will deselect the boss before casting Fire Elemental, allowing you to pre-cast it without pulling the boss:

 ```
#showtooltip Fire Elemental
/target [@player, nocombat]
/cast Fire Elemental
/targetlasttarget [nocombat]
 ```

