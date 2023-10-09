---
layout: post
title: Open Letter from Elivrio
#            dd/mm/yyyy
last_update: 13/09/2023
excerpt: The state of Elemental Shaman
# author: Bloodmallet(EU)
toc: true
big_article: true
---

Hello Shamans,

As a recent addition to the Earthshrine MVP and Mod team, I always wanted to create some sort of Open Letter that would summarize my different takes on the spec.
Also, as a fairly new Elemental Shaman who only picked up the spec in Season 4 of Shadowlands, I might see thing somewhat differently from my peers.

The goal of this post is by no mean to give solutions but rather to point out the different pain points that you currently encounter while playing Elemental Shaman.

<hr>

## Talent tree construction

### Class Tree

I will talk more in depth about Shaman's utility and its class tree later in this letter. I just wanted to point out that I **love** the class tree of Shamans. Mostly because it has almost no damage tied in it. It gives Shamans a huge flexibility in how they can spend their Class tree's points which I find truly enjoyable. If you look at most other Class tree, you notice that the points below the third gate are heavily tied to DPS or to Major defensive CDs. This removes most of their choices sadly. Once you arrive at 20 points in the class tree, the remaining 11 are more often than not locked by what your sim tells you and you lose the Class Tree's essence.

Whatever happens to Shaman in the future, please, don't bring player power into the Class tree.

<hr>

### Elemental Spec Tree, Pathing and Limitaions

With the small side note about the class tree out of the way, let's talk about the Elemental Spec Tree.

<img src="/assets/img/blog/Spec_Tree_Fire_Vs_Lightning.png" alt="Lightning vs Fire in the Spec Tree" class="center">

In this image, we can see in blue the talents that are really strong for lightning builds and in red the talents for fire builds. What's immediately apparent is the separation between the two. Left side is Lightning, Right Side is Fire. This makes Hybrid build hard to create since you are going in opposite directions and can hardly move between the "columns" as I like to call them .

The Major issue comes from the top section that doesn't easily allow us to move around in the second part of the tree. Since the third row of the tree is mostly Utility based, it "forces" us to choose two paths out of three and stick with them all the way down to the third gate, essentially creating 3 "columns" in the spec Tree. The flexibility dies early and it's hard to grab everything you need for your builds to function properly.

<img src="/assets/img/blog/Spec_Tree_Fire_Vs_Lightning_Columns.png" alt="The Columns" class="center">

It's now worth mentioning that above the 20 points gate, there are 28 available nodes. Meaning you can get almost all the things in the columns you choose to engage into, including stuff you often don't really want. As an example, during S1, Fire builds talented into {{ site.data.talent.if }} and {{ site.data.talent.flux_melting }} only for pathing and the goal of that build was to never use them. This creates a frustration because we cannot access stuff we want without wasting points on utility or minor damage gain.

This frustration is further amplified by the power of the later third of the tree. Our Capstone Section of the tree contains most of the things we want but doesn't allow us to get most of it. With the second to Last Row containing all two pointer nodes, you can only pick 10 out of the 23 possible nodes, with 14 of them being average value two pointers. There's almost as many points below the second gate as above it, with half as much points to spend in it.

Being forced into Fire or Lightning Builds wouldn't be a major issue if they didn't have their own problems. Sadly, they do have their own problems.

<hr>

## The Woes of Fire

### The Power Creeping of Lava Burst

Let's start with biggest woe of them all. We have too many {{ site.data.talent.lvb }}s, turning the button into a mindless spam.

Right now, there are 3 ways to get {{ site.data.talent.lvs }}s from the spec tree:
- {{ site.data.talent.lvs }} (obviously), giving you random proc on {{ site.data.spell.fs }}'s ticks,
- {{ site.data.talent.wlr }}, giving you a proc after each spender you use,
- {{ site.data.talent.ps }}, giving you a proc every 3 seconds for 12 seconds after using {{ site.data.talent.pw }}.

On their own, they don't give an absurd amount of {{ site.data.spell.lvb }}s. The current 10.1 Lightning Build uses {{ site.data.talent.wlr }} as an enabler and has on average 8.3 casts per minute in Single Target.

However, as soon as you combine two of them and factor in {{ site.data.talent.rolling_magma }}, you become a {{ site.data.spell.lvb }} Turret. You want to only cast {{ site.data.spell.lvb }} to reduce {{ site.data.talent.pw }} and get more {{ site.data.talent.lvs }} from {{ site.data.talent.ps }}. Casting anything else becomes

But it's not over! We can now add {{ site.data.talent.dre }} into this whole mess! Being able to proc {{ site.data.talent.ascendance }} means the priority of casting {{ site.data.spell.lvb }} goes even further beyond, and you now want to be pressing it almost all the time if it doesn't make you waste resources. Being able to proc {{ site.data.talent.asc }} also helps cover "drought" period where you are low on {{ site.data.talent.lvs }} procs, so you can cast {{ site.data.spell.lvb }} a bit more. The 10.1 change to {{ site.data.talent.dre }} giving it an ever increasing chance to proc further incentivise us to almost always be casting {{ site.data.spell.lvb }}.

Now remember when I said *"if it doesn't make you waste resources"*? What if I told you the power creeping of {{ site.data.spell.lvb }} wasn't over, and that might influence that previous statement. With the newly added 4p, we gain more free {{ site.data.spell.lvb }} after {{ site.data.talent.pw }} and {{ site.data.spell.t31_4 }} further increases the possible damage of {{ site.data.spell.lvb }} thanks to the added burn.

So yeah. With the T31 2P casting and refreshing {{ site.data.talent.eb }}'s stat buff for us, we don't really need to spend anymore. {{ site.data.spell.lvb }} is the only thing you want to press outside of {{ site.data.talent.pw }}, {{ site.data.talent.fe }} and {{ site.data.spell.fs }}. You only spend when {{ site.data.spell.lvb }} isn't available. Side note but {{ site.data.talent.fe }} has lower priority than {{ site.data.spell.lvb }} in that build. You also pick {{ site.data.talent.sk }} and {{ site.data.talent.sop }} mostly for pathing and only use {{ site.data.spell.lb }} with both buffs actives if you get bad {{ site.data.talent.lvs }} and {{ site.data.talent.dre }} RNG.

With the multiple way to get {{ site.data.spell.lvb }} feeding off of each other, it's no wonder that we end up with 40 manual Cast Per Minute of {{ site.data.spell.lvb }} and over 100 Cast per Minute if you count overloads, free casts from {{ site.data.talent.asc }}, and duplication both from {{ site.data.talent.pw }} and {{ site.data.spell.t31_4 }}. Over two thirds of our casts are {{ site.data.spell.lvb }} and close to 75% of our damage breakdown is tied to it as well. You waste close to 50% of the maelstrom generated by it and lose 1.5% to 10% damage by spending, depending on the build you're running.

<hr>

### FS spreading

Enough talk about the Meatballs, let's discuss the other parts of fire build. Let's start with {{ site.data.spell.fs }} and spreading it.

Having a high count of {{ site.data.spell.fs }} active gives us more {{ site.data.talent.lvs }} procs, more stats from {{ site.data.talent.splinter }} and more damage overall thanks to {{ site.data.talent.fe }}, {{ site.data.talent.sfd }} and {{ site.data.talent.flames_of_the_cauldron }}.

In AoE situations, you want to get to 6 active {{ site.data.spell.fs }} as quickly as possible. To do that, you have three methods:
- Use {{ site.data.spell.fs }},
- Use {{ site.data.talent.pw }},
- Use {{ site.data.talent.lmt }}.

It's worth to note that all of these methods will benefit from {{ site.data.talent.sop }} and generate another {{ site.data.spell.fs }} smartly on hit. The problem lies in the Cooldown of those buttons. Even with {{ site.data.talent.flames_of_the_cauldron }}, {{ site.data.spell.fs }} has a 4.5s cd, preventing us from spreading it quickly. {{ site.data.talent.lmt }} has 1 minute cd and might not be ready from pack to pack in m+ or you will need to save it for an add wave on a boss. Lastly, {{ site.data.talent.pw }} is a false ally to spread {{ site.data.spell.fs }}. Since you want to benefit from {{ site.data.talent.splinter }} with as many stacks as possible, you want to cast it at the end of your spreading when you can ensure you will have 6 {{ site.data.spell.fs }} out before using {{ site.data.spell.lvb }}.

All of those sound like minor setbacks but they accumulate in a non negligible fashion, especially when Enhancement can easily and instantly spread {{ site.data.spell.fs }} thanks to [Molten Assault](https://www.wowhead.com/spell=334033/molten-assault?def=106863&rank=2). It just begs the question "why not us?". It's even more hard to swallow when we know we used to have a similar tool with [Path of Flame](https://www.wowhead.com/spell=201909).

<hr>

### Single Target in AoE and AoE in Single Target

Let's now talk about the versatility of Fire build and their possibilities to do AoE while talented into ST and vice versa. Even if the this problem was decently fixed with the recent changes and the new tier set, it still exists.

The problem mostly came from the {{ site.data.talent.splinter }} and {{ site.data.talent.ps }} choice node. {{ site.data.talent.splinter }} gave up to 60% haste in AoE, down to 10% in AoE. On the flip side, {{ site.data.talent.ps }} only gives a few {{ site.data.talent.lvs }} which is almost entirely useless in AoE. In a similar fashion, the {{ site.data.talent.wlr }} and {{ site.data.talent.sfd }} choice node was typical AoE vs ST node.

Both of those actually really improve their respective damage profile and having to choose between them, without any sort of compensation in the other profile was pretty damning.

The reason I'm mostly using past tense here is the newly added tier set and the recent changes to {{ site.data.talent.splinter }}. {{ site.data.talent.splinter }} will now grant more haste in ST (24%) but less in AoE (44%). This is a really good change as it really boosts the ST of the builds using it without harming their AoE too much. In addition, the new 4p and the massive amount of {{ site.data.spell.lvb }} duplicated it will create will generate decent cleave potential, finally giving us some much need 2-5 targets damage. In S1, we used to talent into {{ site.data.talent.if }} just to benefit from its cleave.

<hr>

## The Woes of Lightning

### Chain Lightning target scaling

### EShocks gameplay

### buffs that imply button that imply buff that imply button.
Bug that sometimes makes you EShocks not affect your current target => Change Eshocks into a buff instead, better target scaling and less annoyance to monitor the debuff.



With Fire and Lightning each having their own design flaws, and the impossibility to really mix the Lightning and Fire builds to complement each other, we just have to pick one and roll with it, as it is.

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

Shaman is known among the community as the utility beast. Whenever Shaman's utility get discussed, you always hear people say that we have so many tools for so many situations, and that their own class would be happy to bring them. Let's dive into our utility, we'll see what we can make of it.

### Raid Utility

Currently, there's no real reason for a guild to want an Elemental Shaman. Our 3 main utility in raid are {{ site.data.talent.wrt }}, {{ site.data.talent.ag }} and {{ site.data.talent.mana_spring }}.

Let's talk about {{ site.data.talent.wrt }} first. While it is nice to have, it doesn't hold a candle compared to {{ site.data.externals.stampeding_roar }}. Stampeding Roar, with the [Improved Stampeding Roar](https://www.wowhead.com/spell=288826/improved-stampeding-roar) talent, gives 20% more movement speed, has 1 minute CD and lasts longer. If your raid has two Druids, you essentially never need to press {{ site.data.talent.wrt }} and your raid will have a movement buff every time it needs it. The small advantage that {{ site.data.talent.wrt }} holds over {{ site.data.externals.stampeding_roar }} is {{ site.data.talent.totemic_projection }}, allowing you to relocate it on your group during and after movement, extending its effect.

Second is {{ site.data.talent.ag }}, which is really strong paired with your CD. Problem is, and we'll come back to this, Elemental Shaman doesn't really have a huge CD to pair with {{ site.data.talent.ag }}. The best candidate to use with it is {{ site.data.talent.sk }}, but in Single target, it's not really anything major. It's also a CD that was recently nerfed for its power in dungeon, which was probably too good in that scenario, but leaves a bad aftertaste in raid. It's also worth mentioning that you don't control who it heals. This result in {{ site.data.talent.ag }} massively overhealing in most instances (from checking a few logs, it ranges from 40% to 75% overheal, usually around 50%).

Last is {{ site.data.talent.mana_spring }}. With the last 10.2 nerf, we now give 100 mana to 4 allies per {{ site.data.spell.lvb }}. From our early test, being in fire build, we average 30 {{ site.data.spell.lvb }} cast per minute. Which means {{ site.data.talent.mana_spring }} gives 3k mana to 4 allies in 1 minute. For reference, a Restoration Shaman's [Riptide](https://www.wowhead.com/spell=61295/riptide) costs 4k mana. We give, on average in a fire build, less than 1 cast per minute to each healer with {{ site.data.talent.mana_spring }}.

While all of this feels nice to have, it certainly doesn't feel mandatory in any way.

<hr>

### Dungeon utility

Let's talk about dungeon then! As said before, Shaman is one of THE utility class with their totems coverage. The biggest reasons Shamans are good in dungeon are:
1. Their Crowd Controls:
  - {{ site.data.talent.capacitor_totem }},
  - {{ site.data.talent.thundershock }} (and {{ site.data.talent.thunderstorm }}),
  - {{ site.data.talent.lightning_lasso }}.
2. Their off-healing and group defensive capabilities:
  - {{ site.data.talent.chain_heal }},
  - {{ site.data.talent.ag }},
  - {{ site.data.talent.hst }},
  - {{ site.data.talent.earth_shield }} on 2 persons,
  - {{ site.data.talent.stoneskin_totem }},
  - {{ site.data.talent.ee }} which can supplement the tank long enough to save a pull.
3. Their general very good/borderline required utility:
  - {{ site.data.spell.bl }},
  - {{ site.data.talent.purge }},
  - {{ site.data.talent.cleanse_spirit }}.
4. And their more situational utility which is always nice to have:
  - {{ site.data.talent.tremor_totem }},
  - {{ site.data.talent.pct }},
  - {{ site.data.spell.earthbind_totem }} or {{ site.data.talent.earthgrab_totem }},
  - {{ site.data.talent.wrt }}.

This list is really long, isn't it? Well, it just goes to show how good Shaman is in a dungeon environment. In a raid setting, you get 20 different player and classes, which all bring a bit of utility. Everything becomes redundant pretty quickly. But in a dungeon's setting where resource brought by each class can shine, Shaman is truly blinding.

It's still worth to note that not everything is blue in the sky, and there's still a lot of downsides to this list. Notably, Totems are for the most part of the GCD. Meaning that in higher keys, if your tank needs you to drop {{ site.data.talent.stoneskin_totem }} to survive a big incoming damage, you will lose a global. And that can happen once every 30s, which isn't a lot to save your tank but quickly becomes a burden on the player. Same cause, same effects for {{ site.data.talent.hst }} which can provide minor healing assistance to your group but you don't control the targets it heals, and it costs you time.

All in all, Shaman's utility is top notch in dungeon, but Elemental Shaman is again a bit hurt by its cousin being able to utilize our kit in a slightly easier way.

<hr>

### The "useless" utility

Shaman is so good utility wise that some of its power is just useless. There are a few talents in the class tree that might have never been picked by any Shaman players. Some of the abilities on this list might even be unknown to some of them:
- {{ site.data.talent.creation_core }}: The counter part of this choice node, {{ site.data.talent.call_of_the_elements }} is just way better as most totems do not require many use in succession. In Elemental's case, we mostly want it for {{ site.data.talent.lmt }} and that's pretty much it.
- {{ site.data.talent.tranquil_air_totem }}: This is just useless. Never been talented once since Dragonflight started. Not used in PvE. Not used in PvP. I'm not sure anyone used this once since DF started.
- {{ site.data.talent.enfeeblement }}: It's almost never a pick when pitted against {{ site.data.talent.voodoo_mastery }}. Having a shorter CD on {{ site.data.talent.hex }} has uses in both PvP and PvE, adding a slow to it rarely ever matters.
- {{ site.data.talent.astral_bulwark }}: Sadly it is not good enough to be in contention with {{ site.data.talent.planes_traveler }}. It's really really rare that a 60% DR will save you and a 40% will not. And if you NEED the 60% to survive, other members of the raid will die before you do.
- {{ site.data.talent.earthgrab_totem }}: Even if it is not a bad utility totem and has very decent uses in a variety of cases, its place in tree really holds {{ site.data.talent.earthgrab_totem }} back. The fact that you have to spec out of {{ site.data.talent.wrt }} for it is just horrendous. A few memorable uses are the small adds on Mythic Raszageth, the Golems on Zskarn and to handle the Spiteful Affix.
- With it's current tuning, unless you're playing a full fire build that throws a lot of {{ site.data.spell.lvb }}, and even then it's mid, {{ site.data.talent.mana_spring }} stands out as really bad, giving around 1% mana per minute to 4 healer in range. Outside of a fire build, this is completely useless.

Does that mean all of them are completely useless? Maybe. Some of those definitively have their places but some other are really out of touch with modern wow and could be replaced or updated to better match modern gameplay.

<hr>

#### Enhancement and Restoration

So Shaman's utility has ups and downs. It's really good in Dungeon and really underwhelming in raid. But this is a post that focuses on Elemental Shaman. The question I'm now asking is: Are other Shaman specs better equipped than us? Short answer, yes in both raid and dungeons. They bring all that Elemental has to offer and add an additional layer on top.

Let's talk about raid first. Enhancement brings {{ site.data.externals.wft }}, an high value party buff, and restoration brings both {{ site.data.externals.slt }} and {{ site.data.externals.apt }}, two more than decent raid Cooldowns which were made even better by the recent nerf to the overall raid utility. While Restoration's case is an entire different matter and it could be argue that both {{ site.data.externals.slt }} and {{ site.data.externals.apt }} are underwhelming in their own rights, Enhancement's massive party buff makes us pale in comparison.

One of the recurring answer when talking about Elemental Shaman Utility and how to "fix" it compared to the other Shaman specs is "just give them {{ site.data.talent.skyfury_totem }}". In my opinion, that's a terrible take. Party wide buffs are a thing of the past. Having to reposition your {{ site.data.externals.wft }} with each movement is not particularly fun gameplay. If Warrior's {{ site.data.externals.battle_shout }} was 2 minutes and needed to be reapplied during the encounter, it would be weird and feel out of date. In my opinion, {{ site.data.externals.wft }} and the plausible {{ site.data.talent.skyfury_totem }} are just as outdated and need pass to match with today's utility.

It's also worth to note that Enhancement Shaman benefit more from {{ site.data.talent.chain_heal }} and {{ site.data.talent.thundershock }} than us. Thanks to {{ site.data.talent.maelstrom_weapon }}, their {{ site.data.talent.chain_heal }} provide instant group-wide burst healing which is invaluable during healing checks, and they are already in a prime position to use {{ site.data.talent.thundershock }} since it requires to be in melee.

<hr>

### Utility's Conclusion

So why do you have an Elemental Shaman in your group? Mostly two reasons: either the person playing it is an Elemental Shaman enjoyer, or Elemental Shaman is tuned really high and does the most damage. The last time the second reason was true was in Crucible of Storms, in 8.1.5, more than 4 years ago.

To be clear, I don't want to make Elemental Shaman mandatory in every raid or dungeon group. It's about altering the community perception to a point where people don’t feel terrible for bringing one. Right now, I feel terrible to be an Elemental Shaman and my guild asked me multiple times If I was okay to reroll. Because we're are lacking good players and me switching would help fill up the raid buff requirement. There are multiple ways to alter community perception. The most recent example is the change to [Hunter's Mark](https://www.wowhead.com/spell=257284/hunters-mark). This simple damage gain from being your guild's hunter is all I ask for Elemental Shaman.

## Tankyness
- Spirit Wolf is a problem

## Class tree / Dead Talent Points / Earth Elemental
- Tranquil air Totem
