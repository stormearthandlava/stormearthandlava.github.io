---
layout: post
title: T31 first thoughts
#            dd/mm/yyyy
last_update: 10/09/2023
excerpt: How will T31 affect us?
author: Bloodmallet
toc: true
---

Find this blogpost also on the official forums:
- US: [Elemental Shaman T31 Feedback](https://us.forums.blizzard.com/en/wow/t/elemental-shaman-t31-feedback/1668430)
- EU: [Elemental Shaman T31 Feedback](https://eu.forums.blizzard.com/en/wow/t/elemental-shaman-t31-feedback/466702)

## T31 effects
> (2) Set Bonus: {{ site.data.talent.primordial_wave }} also casts an {{ site.data.talent.eb }} at the target at 100% effectiveness, and grants you all three {{ site.data.talent.eb }} bonus effects for 15.0 seconds.

> (4) Set Bonus: For 10 seconds after using {{ site.data.talent.primordial_wave }}, whenever you consume {{ site.data.spell.lava_surge }}, your next {{ site.data.spell.lb }} or {{ site.data.spell.cl }} is instant cast and deals 25% increased damage.

First things first. Without being talented into {{ site.data.talent.primordial_wave }} these bonuses do nothing.
Which means, we're forced into taking this talent for the next tier.


## 2p
The additional damage from {{ site.data.talent.eb }} on {{ site.data.talent.primordial_wave }} is a great way to improve the immediate value and feel of the talent.
While applying {{ site.data.spell.fs }} is a good feature to have, adding the damage makes casting it so much more rewarding.

Furthermore this effect grants all three {{ site.data.talent.eb }} buffs. These present a sizeable chunk of stats.

The additional {{ site.data.talent.eb }} is cast for free. And there exist multiple talents triggered by casting {{ site.data.talent.eb }}.
Here is a table of them and whether they are triggered by the 2p effect.

Talent | 2p can trigger it
--- | ---
{{ site.data.talent.sop }} | ❌ no
{{ site.data.talent.lr }} | ✅ yes
{{ site.data.talent.mwf }} | ✅ yes
{{ site.data.talent.fb }} | ✅ yes
{{ site.data.talent.wlr }} | ✅ yes

## 4p
This bonus is a neat idea. It suggests to weave our different spell schools.
The benefit would be Lightning cast similarly empowered like with a weak {{ site.data.talent.sk }}.
Well, except the damage amplification is a lot lower in single target and no Overloads are forced.

At the time of writing it's unclear if the 4p is intended to stack and get consumed with an active {{ site.data.talent.sk }} or not.
The latter could mean we'll sit on these effects until all of them are consumed and very likely waste/overwrite stacks of the tier set.
The former would make {{ site.data.spell.lb }} hit even harder, providing yet another multiplier on top of the already existing stack of the current Lightning Build.

Sadly this bonus is currently very weak overall.
Just as a reminder, thanks to {{ site.data.talent.unrelenting_calamity }} Lightning cast change only from 1.75s casttime to a 1.5s casttime with the 4p.
Having more instants is always a great thing for movement, though.

## Synergies / Builds
Here comes the elephant in the room. {{ site.data.talent.fb }}.
By combining {{ site.data.talent.dre }}, {{ site.data.talent.primordial_surge }}, {{ site.data.talent.afs }}, and {{ site.data.talent.fb }} we can go for infinite {{ site.data.talent.asc }}.

While we normally moan that {{ site.data.talent.asc }} isn't very strong, this build generates a lot more value than baseline {{ site.data.talent.asc }} could generate.
This value is driven by the free {{ site.data.spell.lvb }}s and {{ site.data.spell.fs }} refreshes from {{ site.data.talent.dre }} procs,
while {{ site.data.talent.pw }} also refreshes {{ site.data.spell.fs }} between {{ site.data.talent.dre }} procs and also extends {{ site.data.talent.asc }} thanks to {{ site.data.talent.fb }}.

This might sounds cool, but it deteriorates the gameplay loop to pure spam-casting {{ site.data.spell.lvb }} into {{ site.data.talent.eb }} with the occasional (once every ~30s) {{ site.data.talent.pw }}.
Any talent points invested in e.g. Lightning or {{ site.data.talent.icefury }} are wasted while {{ site.data.talent.asc }} is active.

And in case the above didn't hint at it yet: the 4p bonus is absolutely useless while in {{ site.data.talent.asc }}. Making this build essentially play with only one tier bonus.

The problem? It looks like these builds are going to be the strongest by far. With a similar distinction in power as current Lightning versus everything else.


## Issues
The 2p {{ site.data.talent.eb }} starts to fly at our target once the {{ site.data.talent.primordial_wave }} bullet hits.
This delay is noticeable and slightly disconnecting.

The 2p stat buff durations are overwritten by follow-up {{ site.data.talent.eb }} cast or the Overload of the initial effect.
Which means their uptime can accidentally get reduced.

The 4p effect can easily get overwritten by itself. Introducing stacks to the buff could help a lot.

The 4p effect is not consumed.

{{ site.data.spell.lb }} and {{ site.data.spell.cl }} can neither generate Maelstrom, nor can they overload with the 4p bonus active.

{{ site.data.spell.lvbm }} is not affected by 4p.

In case the permanent {{ site.data.talent.asc }} stays, we'll get tuned around being in it at all times.
But mechanics will force us out of it, and while we wait for the next proc, we'll quickly fall off the expected target dps.
I imagine this to be a balancing nightmare, so I hope this won't go live as is.

As a broad scale issue, returning to a Fire build means we'll once again have to chose between single target damage and AoE damage.
This is due to the way the Fire focused talents are setup and their effects. 
Lightning on the other hand isn't facing this issue at all, because all Lightning talents combine single target and AoE.


## Conclusion
The tier set is a good idea. Weaving spell schools makes sense for what Elemental consists of.
The current version of 4p is too weak to actually promote this gameplay, though.
Infinite {{ site.data.talent.asc }} needs to get removed. It deteriorates the gameplay and invalidates many talents.
This way I hope multiple different flavors of weaving talent combinations will emerge.

Yours sincerely,<br/>
Bloodmallet
