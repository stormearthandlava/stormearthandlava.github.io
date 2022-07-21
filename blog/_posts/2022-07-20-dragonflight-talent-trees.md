---
layout: post
title: "Dragonflight: Talent Trees"
date: 2022-07-20 00:00:00 +0100
excerpt: "First impressions"
author: Bloodmallet(EU)
---

Greetings,

![](https://media3.giphy.com/media/yJFeycRK2DB4c/giphy.gif?cid=790b76117208ecd775855d9197917ec754464a9684863a01&rid=giphy.gif&ct=g)

Seriously. The trees are great!

But of course I have some more thoughts than that. The sections after BUGS are in no particular order.

This post was made possible by the cooperation of 
- Amani
- Eokira
- Gaka
- HawkCorrigan
- Kaldeak
- wfarr 

# Bugs

- Chain Lightning hits only 3 targets (Rank 2 or so is gone?)
- Flame Shock duration extension on Fire Elemental is missing
- Liquid Magma Totem removes Flame Shock icons from nameplates until reselection
- ~~Stormkeeper is twice in the tree, I believe the choice node Stormkeeper vs Lightning Rod is better than allowing both to be active at the same time, even though some people really really want to have both…~~ was confirmed to be intended to grant two charges on Stormkeeper
- Lightning Rod does not show up on stock UI nameplates, but is important to track
- Electrified Shocks do not show up on stock UI nameplates, but is important to track
- Master of the Elements and Power of the Maelstrom should show up on the personal bar for the player

# Electrified Shocks

Might be intended because empowered Frost Shocks hit hard, but the cleave Frost Shocks don't generate Maelstrom. Additionally the buff duration of 4 seconds is really short and allows only to empower one nature cast. (usable duration = `4s - Frost Shock GCD`)

The current selection of talents also makes it difficult to fully utilize the empowered Frost Shocks while also maximizing Master of the Elements + Power of the Maelstrom.

In particular, you want to:

1) Icefury
2) Loop
2a) Lava Burst
2b) Frost Shock
2c) Chain Lightning
2d) Lava Burst
2e) Earthquake
3) Repeat 2 until Icefury buff is exhausted

Even with constant Lava Surge procs, this is currently impossible. Even dropping the Master of the Elements/Power of the Maelstrom gaming with Lava Burst is incredibly tight to fit 8 spells into that 18s buff window.

I think Icefury desperately needs the Echoes of Great Sundering treatment with a buff extension to 30s (the same as the spell cooldown).

Alternatively Icefury could be dropped to 3 stacks. This would increase its manageability while also keeping the semi-frantic pace of the talent. There are many ways of going around making it fun and playable.

Electrified Shocks adds a lot of potential interest to the AoE rotation, but the required extra GCDs to make use of it simply do not fit within the time frame. It might almost be better to remove the nature portion and instead progressively buff frost or physical damage - making Icefury a self-contained rotational swap for aoe and cleave, or giving Icefury a way to make Earthquakes even more satisfying.

# Windspeaker's Lava Resurgence

Its location is rather weird albeit not the biggest outlier. Either one already focused on Lightning empowerments or one reached it via Icefury. That's pretty restrictive. If taken it's as powerful as it's on live. Granting movement GCDs via instant Lava Bursts that are buffed even further. It's stronk.

# Elemental Blast

I LOVE the idea of having it as a spender. But having Elemental Blast contend with Windspeaker's is very unfortunate. If I ignore for a second that this is a choice node and only focus on the worth Elemental Blast will need to provide compared to Earth Shock the issue I'm seeing might become clear. Because stats are hard to quantify at the moment for me, I want to only look at the raw damage value of Earth Shock and Elemental Blast.

- Earth Shock is instant, Elemental Blast has a longer cast time, therefore it needs to compensate for that.
- Earth Shock costs 60 (50) Maelstrom, Elemental Blast costs 90 (75) Maelstrom, therefore it needs to compensate for that.

Assuming we want to achieve that Elemental Blast is as worth it to cast as Earth Shock (ignoring its stat buffs and ignoring Earth Shocks movement value)

```
casttime_compensation = 2s / 1.5s = 1.33333

cost_compensation = 90MS / 60MS = 1.5

compensation = casttime_compensation * cost_compensation = 1.33333 * 1.5 ~=2
```

At this point of hitting twice as hard as Earth Shock, Elemental Blast's only value compared to Earth Shock would be the stats it’s providing.

This "baseline" would already hit like a truck. But there is still some more compensation to be done. It needs to be even stronger to compete with Windspeaker's. Because it needs to match another granted movement global (Lava Surge) and the damage upgrade of a Lightning Bolt compared to an empowered additional Lava Burst.

So yeah, I think having it compete with Windspeaker's is not ideal.

Another thought about this talent is that when opening a fight in m+ with left-over Maelstrom one can easily drop below the required 90 (75) MS, which will cancel the cast.

# Storm Elemental placement

Positioning a dead talent for any Lava build in the middle of Lava talents is worrisome. To focus on Lightning one has to move through Fire talents to reach Storm Elemental. This feels bad. Having to dodge this talent when focusing on Lava feels equally bad. It would be great if this talent  would be a lot further to the left. Two spots pop up right away: ~~the sole Stormkeeper node or~~ Windspeaker's in the choice node.

Additionally the loss of Flame Shock extension from Fire Elemental made Storm Elemental relatively more powerful. Especially it conveniently located next to Primal Elementalist. Could Primal Elementalist and Storm Elemental be a choice node? And if they are, that node could be located more middle-ish of the tree.

Or…who needs Primal Elementalist anyway?

# Flames of the Firelord

Reducing the cooldown of Flame Shock seems cool. But this talent unlocks Liquid Magma Totem as a real Flame Shock spreader. Additionally no significant value comes from spreading Flame Shock. Sure there are multiple talents that add quirks to it, but I doubt that’s enough. Therefore I think this talent will only be picked to dodge Storm Elemental.

When playing Deeply Rooted Elements with Primordial Wave we’ll be able to keep Flame Shock up anyway, which will diminish this talent further.

A Skybreaker oriented build, where Flame Shock’s missing extension is a bug, won’t need the CR reduction either.

Neither build accessed through this node benefit from this CDR, and taking it as "free" points for another build doesn't really net you much, since the only "synergy" is more Lava Surges in AOE, but you're better off casting more Chain Lightnings and Earthquakes than Flame Shocks in those situations if you're not playing a DRE/Skybreaker build anyway.

# Aftershock and Lightning Rod

Just wanted to point out that depending on how successful one is at refunding spent Maelstrom one will "waste" applied Lightning Rod time. It's a cost I'm willing to pay, but a cost one should be aware of.

We need to be on the lookout to make sure Earthquake is always worth more than just casting Chain Lightning. E.g. a fix could be to let Earthquake casts extend existing Lightning Rods by 1.5s.

# AoE distribution

The left side of the tree is very AoE heavy with very strong talents:

- Stormkeeper
- Lightning Rod
- Echoes of Great Sundering

The right side of the tree has Storm Elemental...inside the otherwise Lava focused talents.

AoE talents on the right side:

- Liquid Magma Totem
- Magma Chamber (undertuned, and not funnelable therefore not a niche)
- maybe Searing Flames & Skybreaker's Fiery Demise

but these rely on the power of Flame Shock and so far this spell wasn't able to compete with Chain Lightning and Earthquake spam.

It's great to see some additional Flame Shock spread. Some worth was put on having Flame Shocks up for a long time too. (Maelstrom generation and Spender scaling) But I fear without an actual button that benefits from having multiple Flame Shocks up it'll still be lacking. Extra button idea: Fire Nova (replaces Earthquake, if you commit to it, you commit).

Flame shock spreading is a neat mechanic in theory, as it adds a new layer to our aoe rotation. But any clashes with wanting to cast flame shocks and not wanting to do anything with those extra flame shocks feels bad. Magma Chamber is a great start - anything that makes us want to do something different in AoE is good - but alone it's not enough. At the very least, the current iteration of Magma Chamber removes the funnel effect from BFA and instead turns it into a general AoE damage increaser.

That's.. fine, but I think there can be more interest there.

# Searing Flames

I'm not sure if this talent can be tuned at all. 1 Earth Shock or Earthquake per active Flame Shock per minute as a baseline sounds underwhelming (ignoring haste). It'll help smooth out our generation for sure, but during actual AoE (Chain Lightning) it's a drop in the bucket and I believe will not be worth it. On single target you'll probably not notice it anyway.

# Swelling Maelstrom

Except for with Elemental Blast this increase to max Maelstrom seems pointless and will be something I'll probably always skip.

HawkCorrigan: statement here

# Gib more points - Superficial comparison to other trees

When trying to create builds I quickly got the feeling that I'm missing 3-4 points in the lower section of the tree to really combine what I want. This either shows that the tree is brilliantly created or that there might be an issue. So I went ahead and counted how many points are available in that section for each spec.

Coincidentally we're leading this ranking by 3 points.

Spec | Points in the last section
--- | ---
Elemental Shaman | 23
Shadow Priest | 20
Discipline Priest | 19
Holy Priest | 19
Preservation Evoker | 19
Restoration Druid | 19
Restoration Shaman | 18
Balance Druid | 17
Devastation Evoker | 17
Assassination Rogue | 17
Feral Druid | 17
Beast Mastery Hunter | 16
Blood Death Knight | 16
Enhancement Shaman | 16
Survival Hunter | 16
Guardian Druid | 15
Marksmanship Hunter | 15
Frost Death Knight | 14
Outlaw Rogue | 14
Subtlety Rogue | 14
Unholy Death Knight | 14

In particular, the middle section of the tree feels strangely out of reach. There doesn't seem to be any real incentives to path that way unless you want Mastery effects on your spenders specifically, in which case you're making tradeoffs in other areas for that one thing.

Combined with a lack of decisions to make in the lower tree, it feels strange.

---

Well I'm surprised myself about how long this post became even though I'm very happy about the trees in general.

Yours sincerely,<br>
Bloodmallet(EU)
