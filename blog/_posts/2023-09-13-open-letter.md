---
layout: post
title: Open Letter from Elivrio
#            dd/mm/yyyy
last_update: 13/09/2023
excerpt: The state of Elemental Shaman
# author: Bloodmallet(EU)
toc: true
---

Hello Shaman Community,

As a recent addition the Earthshrine MVP and Mod team, I always wanted to create some sort of Open Letter that would summarize my different takes on the spec.
Also, as a fairly new Elemental Shaman who only picked up the spec in Saison 4 of Shadowlands, I might see thing somewhat differently from my peers.

The goal of this post is by no mean to give solutions but rather to point out the different pain points that you currently encounter while playing Elemental Shaman.

## Talent tree construction

### Fire and lighning cannot coexist

### Most of the stuff we want is in the later third, the middle is either a drag or non-accessible
- 23 possible points below the 3rd gate, 25

<hr>

## The Woes of Fire
### FS spreading
- LMT / FS with SoP. That's it.

### Target Cleave

### The low accessibility of ST with AoE in fire builds
- It's impossible to talent both ST and AoE as fire when PSurge/SpE are a choice node and SFD is so down to the side

<hr>

## The Woes of Lightning

### Chain Lightning target scaling

### EShocks gameplay

### buffs that imply button that imply buff that imply button.

<hr>

## The Woes of Spenders

### Earthquake, EoGS

### ES & EB

<hr>

## Offensive Cooldowns

### Stormkeeper

### Storm Elemental and Fire Elemental
- Storm Elemental and Fire Elemental are the primary offensive CD. They are the equivalent of Retribution's Avenging Wrath, Demonology's Summon Tyrant or Balance's Eclipse.
- Yet their power are massively underwhelming. At the moment, they are a button you press every 2 minutes and a half that almost do not interact with our gameplay and rotation, and passively deal 5% of our damage.
- Actually, fire Elemental has the real good upside of doubling FS duration, making it possible for us to focus on CL and EQ, instead of permanently refreshing FS. But in my opinion, the only reason Fire Ele feels good, is because FS usually feels bad and is better during this CD.


### ascendance

#### Deeply Rooted Elements

- DRE in a similar style to SKB?

#### Further Beyond
- FB idea's neat but the CD sucks so it sucks

<hr>

## Utility

Shaman is known among the community as the utility beast. Whenever Shaman's utility get discussed, you always hear people say that we have so many tools for so many situations, and that their class would be happy to bring them. Let's dive into our utility, we'll see what we can make of it.

### Raid Utility

Currently, there's no real reason for a guild to want an Elemental Shaman. Our 3 main utility in raid are {{ site.data.talent.wrt }}, {{ site.data.talent.ag }} and {{ site.data.talent.mana_spring }}.

Let's talk about {{ site.data.talent.wrt }} first. While it is nice to have, it doesn't hold a candle compared to {{ site.data.externals.stampeding_roar }}. Stampeding Roar, with the [Improved Stampeding Roar](https://www.wowhead.com/spell=288826/improved-stampeding-roar) talent, gives 20% more movement speed, has 1 minute CD and lasts longer. If your raid has two Druids, you essentially never need to press {{ site.data.talent.wrt }} and your raid will have a movement buff every time it needs it. The small advantage that {{ site.data.talent.wrt }} holds over {{ site.data.externals.stampeding_roar }} is {{ site.data.talent.totemic_projection }}, allowing you to relocate it on your group during and after movement, extending its effect.

Second is {{ site.data.talent.ag }}, which is really strong paired with your CD. Problem is, and we'll come back to this, Elemental Shaman doesn't really have a huge CD to pair with {{ site.data.talent.ag }}. The best candidate to use with it is {{ site.data.talent.sk }}, but in Single target, it's not really anything major. It's also a CD that was recently nerfed for its power in dungeon, which was probably too good in that scenario, but leaves a bad aftertaste in raid. It's also worth mentioning that you don't control who it heals. This result in {{ site.data.talent.ag }} massively overhealing in most instances (from checking a few logs, it ranges from 40% to 75% overheal, usually around 50%).

Last is {{ site.data.talent.mana_spring }}. With the last 10.2 nerf, we now give 100 mana to 4 allies per {{ site.data.spell.lvb }}. From our early test, being in fire build, we average 30 {{ site.data.spell.lvb }} cast per minute. Which means {{ site.data.talent.mana_spring }} gives 3k mana to 4 allies in 1 minute. For reference, a Restoration Shaman's [Riptide](https://www.wowhead.com/spell=61295/riptide) costs 4k mana. We give, on average in a fire build, less than 1 cast per minute to each healer with {{ site.data.talent.mana_spring }}.


#### Enhancement and Restoration

So Shaman's utility isn't really good when compared to other classes tools in raid. But what about the same class? Well it gets even worse. Enhancement brings {{ site.data.externals.wft }}, restoration brings both {{ site.data.externals.slt }} and {{ site.data.externals.apt }}. While Restoration's case is an entire different matter and it could be argue that both {{ site.data.externals.slt }} and {{ site.data.externals.apt }} are underwhelming, Enhancement brings a massive party buff, while also giving everything Elemental will ever bring.

One of the recurring answer when talking about Elemental Shaman Utility and how to fix it is "just give them {{ site.data.talent.skyfury_totem }}". In my opinion, that's a terrible take.

<hr>

### Dungeon utility

Let's talk about dungeon then! Shaman is THE utility class that allies powerful secondary totem with a lot of Crowd Control tools. The biggest reason shaman is good in dungeon are:
- Their crowd control,
  - {{ site.data.talent.capacitor_totem }},
  - {{ site.data.talent.thundershock }} (and {{ site.data.talent.thunderstorm }}),
  - {{ site.data.talent.lightning_lasso }}.
- Their off-healing and group defensive capabilities,
  - {{ site.data.talent.chain_heal }},
  - {{ site.data.talent.ag }},
  - {{ site.data.talent.hst }},
  - {{ site.data.talent.earth_shield }} on 2 persons,
  - {{ site.data.talent.stoneskin_totem }},
  - {{ site.data.talent.ee }} which can supplement the tank long enough to save a pull.
- Their general very good/borderline required utility:
  - {{ site.data.spell.bl }},
  - {{ site.data.talent.purge }},
  - {{ site.data.talent.cleanse_spirit }}.
- And their more situational utility which is always nice to have:
  - {{ site.data.talent.tremor_totem }},
  - {{ site.data.talent.pct }},
  - {{ site.data.spell.earthbind_totem }} or {{ site.data.talent.earthgrab_totem }},
  - {{ site.data.talent.wrt }}.

This list is really long, isn't it? Well, it just goes to show how good Shaman is in a dungeon environment. In a raid setting, you get 20 different player and classes, which all bring a bit of utility. Everything becomes redundant pretty quickly. But in a dungeon's setting where resource brought by each class can shine, Shaman is truly blinding.

It's still worth to note that not everything is blue in the sky, and there's still a lot of downsides to this list. Notably, Totems are for the most part of the GCD. Meaning that in higher keys, if your tank needs you to drop {{ site.data.talent.stoneskin_totem }} to survive a big incoming damage, you will lose a global. And that can happen once every 30s, which isn't a lot to save your tank but quickly becomes a burden on the player. Same cause, same effects for {{ site.data.talent.hst }} which can provide minor healing assistance to your group but you don't control the targets it heals, and it costs you time.

It's also worth to note that Enhancement Shaman benifit more from {{ site.data.talent.chain_heal }} and {{ site.data.talent.thundershock }} than us. Thanks to {{ site.data.talent.maelstrom_weapon }}, their {{ site.data.talent.chain_heal }} provide instant group-wide burst healing which is invaluable during healing checks, and they are already in a prime position to use {{ site.data.talent.thundershock }} since it requires to be in melee.

All in all, Shaman's utility is top notch in dungeon, but Elemental Shaman is again a bit hurt by its cousin being able to utilize our kit in a slightly easier way.

### The "useless" utility

There are a few talents in the class tree that might have never been picked by Shaman spec. Some of the abilities on this list might be unknown to some of Shamans as it just never see play:
- {{ site.data.talent.creation_core }}: The counter part of this choice node, {{ site.data.talent.call_of_the_elements }} is just way better as most totems do not require many use in succession. In Elemental's case, we mostly want it for {{ site.data.talent.lmt }} and that's pretty much it.
- {{ site.data.talent.tranquil_air_totem }}: This is just useless. Never been talented once since Dragonflight started. Not used in PvE. Not used in PvP. I'm not sure anyone used this once since DF started.
- {{ site.data.talent.enfeeblement }}: It's almost never a pick when pitted against {{ site.data.talent.voodoo_mastery }}. Having a shorter CD on {{ site.data.talent.hex }} has uses in both PvP and PvE, adding a slow to it rarely ever matters.
- {{ site.data.talent.astral_bulwark }}: Sadly it is not good enough to be in contention with {{ site.data.talent.planes_traveler }}. It's really really rare that a 60% DR will save you and a 40% will not. And if you NEED the 60% to survive, other members of the raid will die before you do.
- {{ site.data.talent.earthgrab_totem }}: Even if it is not a bad utility totem and has very decent uses in a variety of cases, its place in tree really holds {{ site.data.talent.earthgrab_totem }} back. The fact that you have to spec out of {{ site.data.talent.wrt }} for it is just horrendous. A few memorable uses are the small adds on Mythic Raszageth, the Golems on Zskarn and to handle the Spiteful Affix.
- With it's current tuning, unless you're playing a full fire build that throws a lot of {{ site.data.spell.lvb }}, and even then it's mid, {{ site.data.talent.mana_spring }} stands out as really bad, giving around 1% mana per minute to 4 healer in range. Outside of a fire build, this is completely useless.

### Utility's conclusion

So why do you have an Elemental Shaman in your group? Mostly two reasons: either the person playing it is an Elemental Shaman enjoyer, or Elemental Shaman is tuned really high and does the most damage. The last time the second reason was true was in Crucible of Storms, in 8.1.5, more than 4 years ago.

To be clear, I don't want to make Elemental Shaman mandatory in every raid. It's about altering the community perception to a point where people don’t feel terrible for bringing one. Right now, I feel terrible to be an Elemental Shaman and my guild asked me multiple times If I was okay to switch. Because we're are lacking good players and me switching would help fill up the raid buff requirement. There are multiple ways to alter community perception. The most recent example is the change to [Hunter's Mark](https://www.wowhead.com/spell=257284/hunters-mark). This simple damage gain from being your guild's hunter is all I ask for Elemental Shaman.


## Tankyness
- Spirit Wolf is a problem

## Class tree / Dead Talent Points / Earth Elemental
- Tranquil air Totem
