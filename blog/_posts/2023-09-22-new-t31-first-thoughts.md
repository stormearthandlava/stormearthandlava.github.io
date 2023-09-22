---
layout: post
title: T31 redesign first thoughts
#            dd/mm/yyyy
last_update: 22/09/2023
excerpt: How is the new 4p looking?
author: Elivrio
toc: true
---

This post will have some overlapping sections with the [previous T31 post](https://stormearthandlava.com/blog/2023/09/10/t31-first-thoughts.html), notably about the 2p which didn't change.

## T31 effects
> (2) Set Bonus: {{ site.data.talent.primordial_wave }} also casts an {{ site.data.talent.eb }} at the target at 100% effectiveness, and grants you all three {{ site.data.talent.eb }} bonus effects for 15.0 seconds.

> (4) Set Bonus: When consuming {{ site.data.talent.primordial_wave }} and for 10 seconds afterwards, {{ site.data.spell.lvb }} burns your target for 25% additional damage over 4 seconds, and for 10 seconds each cast of {{ site.data.spell.cl }} causes your next {{ site.data.spell.lvb }} to hit up to 3 additional targets affected by your {{ site.data.spell.fs }} for 100% of normal damage.

First things first. Without being talented into {{ site.data.talent.primordial_wave }} these bonuses do nothing.
Which means, we're forced into taking this talent for the next tier.

<hr>

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

<hr>

## The new 4p

The redesigned 4p kind of keeps the idea of weaving different spell schools but weirdly doesn't include {{ site.data.spell.lb }}.

At the moment, using {{ site.data.spell.cl }} in Single Target makes it so your next {{ site.data.spell.lvb }} will echo on your main target, which doesn't seem to be the goal, at least from the wording of the tier.
We'll have to wait and see if that's what they want us to do, because we might be using {{ site.data.spell.cl }} in Single Target during the 4p duration in that case. (*emphasis on might, this is highly unlikely*)

Concerning the burn added to {{ site.data.spell.lvb }}, it functions similarly to Mage's [ignite](https://www.wowhead.com/spell=12654/ignite). It stacks and extends itself if another {{ site.data.spell.lvb }} is used while the target is burning. That's pretty neat and you don't have to play around the debuff duration.

In AoE, the 4p seems strong enough to warrant overcapping resources, simply alternating {{ site.data.spell.lvb }} and {{ site.data.spell.cl }} to no end.

It is also worth mentioning that the 4p works with {{ site.data.spell.lvbm }} during {{ site.data.talent.asc }}.

This bonus seems both very strong and riddled with design issues, but we'll see how it turns out.

<hr>

## Further Beyond in Single Target
Currently, {{ site.data.talent.fb }} is still a huge issue in Single Target build. For those that didn't follow, here is why:

By combining {{ site.data.talent.dre }}, {{ site.data.talent.primordial_surge }}, {{ site.data.talent.afs }}, and {{ site.data.talent.fb }} we can go for infinite {{ site.data.talent.asc }}.

While we normally moan that {{ site.data.talent.asc }} isn't very strong, this build generates a lot more value than baseline {{ site.data.talent.asc }} could generate.
This value is driven by the free {{ site.data.spell.lvb }}s and {{ site.data.spell.fs }} refreshes from {{ site.data.talent.dre }} procs,
while {{ site.data.talent.pw }} also refreshes {{ site.data.spell.fs }} between {{ site.data.talent.dre }} procs and also extends {{ site.data.talent.asc }} thanks to {{ site.data.talent.fb }}.

This might sounds cool, but it deteriorates the gameplay loop to pure spam-casting {{ site.data.spell.lvb }} into {{ site.data.talent.eb }} with the occasional (once every ~25s) {{ site.data.talent.pw }}.
Any talent points invested in e.g. Lightning or {{ site.data.talent.icefury }} are wasted while {{ site.data.talent.asc }} is active.

With the redesign, this build is further pushed to the front scene since {{ site.data.spell.lvb }}'s burn working like [ignite](https://www.wowhead.com/spell=12654/ignite) incites us to use it as much as possible, and the fact that the 4p doesn't work with {{ site.data.spell.lb }} discourage any sort of weave.

The problem? It looks like these builds are going to be the strongest by far. With a similar distinction in power as current Lightning versus everything else.

<hr>

## Overcapping and skipping Spenders in AoE

With the current tuning of our spenders, it's currently a damage loss to use {{ site.data.spell.eq }} in AoE.

Overcapping allows us to only use {{ site.data.talent.pw }}, {{ site.data.spell.lvb }} and {{ site.data.spell.cl }}, getting immense value from the 4p and thanks to {{ site.data.talent.rolling_magma }}. With enough targets, it's possible to reduce {{ site.data.talent.pw }}'s CD to around 12s, and immediately enter a new 4p window as soon as we leave it.

However this has been historically very disliked by Blizzard so we don't expect it to stay.


<hr>

## Issues
- The 2p {{ site.data.talent.eb }} starts to fly at our target once the {{ site.data.talent.primordial_wave }} bullet hits. This delay is noticeable and slightly disconnecting.

- The 2p stat buff durations are overwritten by follow-up {{ site.data.talent.eb }} cast or the Overload of the initial effec. Which means their uptime can accidentally get reduced.

- During the 4p duration, {{ site.data.spell.cl }} acts a {{ site.data.talent.primordial_wave }} and overrides/refreshes your {{ site.data.talent.splinter }} stacks. Let's say you have 6 {{ site.data.spell.fs }} active, and you use {{ site.data.talent.primordial_wave }} > {{ site.data.spell.lvb }} > {{ site.data.spell.cl }} > {{ site.data.spell.lvb }}.
    - The first {{ site.data.spell.lvb }} will activate {{ site.data.talent.primordial_wave }} on 6 targets and you will gain 60% haste from {{ site.data.talent.splinter }}.
    - The second {{ site.data.spell.lvb }} will activate the 4p thanks to {{ site.data.spell.cl }} being cast, casting {{ site.data.spell.lvb }} on 3 targets, giving you 30% haste from {{ site.data.talent.splinter }} and overriding your current 60% buff.  

<br>

- In case the permanent {{ site.data.talent.asc }} stays, we'll get tuned around being in it at all times.
But mechanics will force us out of it, and while we wait for the next proc, we'll quickly fall off the expected target dps.
I imagine this to be a balancing nightmare, so I hope this won't go live as is.

- The exact same argument can be made to skipping spenders. Casting enough {{ site.data.spell.cl }} and {{ site.data.spell.lvb }} during the 4p window is pretty tight, and movement/mechanics will most certainly impact the resulting DPS.

- As a broad scale issue, returning to a Fire build means we'll once again have to chose between single target damage and AoE damage.
This is due to the way the Fire focused talents are setup and their effects.
Lightning on the other hand isn't facing this issue at all, because all Lightning talents combine single target and AoE.
This might be somewhat lessened since the 4p changes, since we will now "cleave" by combining {{ site.data.spell.cl }} and {{ site.data.spell.lvb }}


<hr>

## Conclusion

This new 4p definetely brings the heat to 10.2, but further deeps into the glaring issues of the spec.
Infinite {{ site.data.talent.asc }} needs to get removed and spenders shouldn't be skipped. It deteriorates the gameplay and invalidates many talents.
This way I hope multiple different flavors of weaving talent combinations will emerge.

Yours sincerely,<br/>
Elivrio, copying Bloodmallet's style.
