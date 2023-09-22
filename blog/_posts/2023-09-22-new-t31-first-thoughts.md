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

> (4) Set Bonus: When consuming {{ site.data.talent.primordial_wave }} and for 10 seconds afterwards, {{ site.data.spell.lvb }} burns your target for 25% additional damage over 4 seconds, and for 10 seconds each cast of {{ site.data.spell.cl }} causes your next {{ site.data.spell.lvb }} to hit up to 3 additional targets affected by your {{ site.data.spell.fs }} for 100% of normal damage.

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

## Redesigned 4p

The redesigned 4p kinds of keeps the idea of weaving different spell schools but weirdly doesn't include {{ site.data.spell.lb }}.

Putting that aside, it's important to notice that the burn damage from the tier works similarly to Mage's [ignite](https://www.wowhead.com/spell=12654/ignite). It stacks and extends itself if another {{ site.data.spell.lvb }} is used while the target is burning. That's pretty neat and you don't have to play around the debuff duration.

At the moment, using {{ site.data.spell.cl }} in Single Target makes it so your next {{ site.data.spell.lvb }} will echo on your main target, which doesn't seem to be the goal, at least from the wording of the tier.
We'll have to wait and see if that's what they want us to do, because we might be using {{ site.data.spell.cl }} in Single Target during the 4p duration in that case.

In AoE, the 4p seems strong enough to warrant overcapping resources, simply alternating {{ site.data.spell.lvb }} and {{ site.data.spell.cl }} to no end.

It is also worth mentioning that the 4p works with {{ site.data.spell.lvbm }} during {{ site.data.talent.asc }}

This bonus seems both very strong and riddled with design issues, but we'll see how it turns out.

## Synergies / Builds
Here comes the elephant in the room. {{ site.data.talent.fb }}.
By combining {{ site.data.talent.dre }}, {{ site.data.talent.primordial_surge }}, {{ site.data.talent.afs }}, and {{ site.data.talent.fb }} we can go for infinite {{ site.data.talent.asc }}.

While we normally moan that {{ site.data.talent.asc }} isn't very strong, this build generates a lot more value than baseline {{ site.data.talent.asc }} could generate.
This value is driven by the free {{ site.data.spell.lvb }}s and {{ site.data.spell.fs }} refreshes from {{ site.data.talent.dre }} procs,
while {{ site.data.talent.pw }} also refreshes {{ site.data.spell.fs }} between {{ site.data.talent.dre }} procs and also extends {{ site.data.talent.asc }} thanks to {{ site.data.talent.fb }}.

This might sounds cool, but it deteriorates the gameplay loop to pure spam-casting {{ site.data.spell.lvb }} into {{ site.data.talent.eb }} with the occasional (once every ~25s) {{ site.data.talent.pw }}.
Any talent points invested in e.g. Lightning or {{ site.data.talent.icefury }} are wasted while {{ site.data.talent.asc }} is active.

With the redesign, this build is further pushed to the front scene since {{ site.data.spell.lvb }}'s burn working like [ignite](https://www.wowhead.com/spell=12654/ignite) incites us to use it as much as possible, and the fact that the 4p doesn't work with {{ site.data.spell.lb }} discourage any sort of weave.

The problem? It looks like these builds are going to be the strongest by far. With a similar distinction in power as current Lightning versus everything else.

## Issues
- The 2p {{ site.data.talent.eb }} starts to fly at our target once the {{ site.data.talent.primordial_wave }} bullet hits. This delay is noticeable and slightly disconnecting.

- The 2p stat buff durations are overwritten by follow-up {{ site.data.talent.eb }} cast or the Overload of the initial effec. Which means their uptime can accidentally get reduced.

- During the 4p duration, {{ site.data.spell.cl }} acts a {{ site.data.talent.primordial_wave }} and overrides/refreshes your {{ site.data.talent.splinter }} stacks. Let's say you have 6 {{ site.data.spell.fs }} active, and you use {{ site.data.talent.primordial_wave }} > {{ site.data.spell.lvb }} > {{ site.data.spell.cl }} > {{ site.data.spell.lvb }}.
  - The first {{ site.data.spell.lvb }} will activate {{ site.data.talent.primordial_wave }} on 6 targets and you will gain 60% haste from {{ site.data.talent.splinter }}.
  - The second {{ site.data.spell.lvb }} will activate the 4p thanks to {{ site.data.spell.cl }} being cast, casting {{ site.data.spell.lvb }} on 3 targets, giving you 30% haste from {{ site.data.talent.splinter }} and overriding your current 60% buff.


- In case the permanent {{ site.data.talent.asc }} stays, we'll get tuned around being in it at all times.
But mechanics will force us out of it, and while we wait for the next proc, we'll quickly fall off the expected target dps.
I imagine this to be a balancing nightmare, so I hope this won't go live as is.

- With the current tuning of our spenders, it's not that surprising that we would entirely miss out on them in AoE during the set bonus. However spenders being skipped and overcapping resource is, in my opinion, a design flaw and should be avoided by all means.

- As a broad scale issue, returning to a Fire build means we'll once again have to chose between single target damage and AoE damage.
This is due to the way the Fire focused talents are setup and their effects.
Lightning on the other hand isn't facing this issue at all, because all Lightning talents combine single target and AoE.
This might be somewhat lessened since the 4p changes, since we will now "cleave" by combining {{ site.data.spell.cl }} and {{ site.data.spell.lvb }}


## Conclusion
This new 4p definetely brings the heat to 10.2, but further deeps into the glaring issues of the spec.
Infinite {{ site.data.talent.asc }} needs to get removed and spenders shouldn't be skipped. It deteriorates the gameplay and invalidates many talents.
This way I hope multiple different flavors of weaving talent combinations will emerge.

Yours sincerely,<br/>
Elivrio, stealing Bloodmallet's work
