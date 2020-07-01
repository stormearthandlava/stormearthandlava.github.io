---
layout: post
title: Times change, or do they?
excerpt: A feedback post
date: 2020-06-13 08:00:00 +0200
author: Bloodmallet(EU)
---

Greetings,

after the post and release of
[these](https://us.forums.blizzard.com/en/wow/t/feedback-shaman-class-changes/490695/101)
changes, I think it's time to describe my experience with it. I spent several hours yesterday
reaffirming bugs and combining talents to hopefully find an enjoyable gameplay loop that. For
several reasons, I didn't.


## Core

Our basic damaging spells form three distinct non-interacting spell groups. As described
non-interacting means that neither of the groups cares about how well you perform at the others
nor do they support other spell groups to create something bigger.

The distinct spell groups are
- Flame Shock, Lava Burst, Fire Elemental (Lava Surge)
- Lightning Bolt, Earth Shock (Fulmination)
- Chain Lightning, Earthquake (Seismic Thunder).

In parenthesis you find the proc of that spell group.

As described
[here](https://worldofwarcraft.com/en-us/news/23310980/shadowlands-class-updates#item10) our
intended focus should be Flame Shock with Lava Burst.

<quote>
But we want the focus of the rotation to be about managing your Flame Shock debuff on multiple targets to maximize the potential of Lava Burst through Lava Surge procs. Lightning Bolt, and consequently Earth Shock, are meant to be a flavorful but secondary part of the single-target rotation. As such, we are returning to a design that relies on building stacks of Fulmination to determine when to insert Earth Shock into the rotation. Similarly, Chain Lightning and stacks of Seismic Thunder will serve to enable Earthquake.
</quote>

The decoupling of the spell groups created a feeling for me, that regardless of which spell
group I was focusing, I felt like neglecting the others and thus making a mistake. Let me try to describe this better:

Single target:
- I can't really focus on Lava Burst and Flame Shock, because with only one target present keeping
up Flame Shock and using Lava Burst when available is a no-brainer.
- On the other hand I could focus on Lightning Bolt instead, not cast Flame Shock and Lava Burst to
get more Fulminations and thus planable (worthwhile) movement GCDs earlier.

Sprinkled in additional targets:
- The more Flame Shocks I have active, the more Lava Bursts I can cast. Of course this means, that
at the same time I won't be able to cast Earthquake, because there is no time to cast Chain
Lightning. Granted, at some point I'll get some Earthquake out, but it's a noticeable downgrade in
Earthquake pace.
- On the other hand if the focus should be Chain Lightning and Earthquake, we drop Flame Shock and Lava Burst completely.

Heavy AoE:
- Chain Lightning and Earthquake. This is not even a question, right?

The removal of Chain Lightning generating Fulmination is a noticeable punch to our ability to
funnel (deal increased single target damage due to the presence of additional targets). We weren't
excelling at this niche, but it was a great feature.

In the "Sprinkled in additional targets" both spell groups feel like they are at odds with each
other. While the class update post wants us to focus on Flame Shock and Lava Burst, the question which
is used will be a math question, and even with the most obvious tuning, this is not an intuitive
choice (which it could be if mechanics would exist that point into a specific direction).

On a brighter node: I like that Flame Elemental once again has a Flame Shock interaction.

What do I hope for? I'd like some supportive interaction from our secondary spell groups to
Flame Shock and Lava Burst. So that if I'm able to do well with those, my primary spells become
even better. Something that would make me want to keep track of multiple Flame Shocks and would
make me want to cast as many Lava Bursts as possible.


## Talents

Oh boy.

The following table shows boiled down which talents support which spell group.
- F: Flame Shock and Lava Burst
- L: Lightning Bolt and Earth Shock
- C: Chain Lightning and Earthquake
- +: supports
- -: restrains
- (...): minorly affected

| Level | Left | Middle | Right |
| --- | --- | --- | --- |
| 15 | Earthen Rage<br/>None | Echo of the Elements<br/>+F, -L, -C | Elemental Blast<br/>(-L) |
| 25 | Aftershock<br/>+L, +C | Echoing Shock<br/>bugged, see below | Totem Mastery<br/>None |
| 30 | Spirit Wolf<br/>None | Earth Shield<br/>None | Static Charge<br/>None |
| 35 | Master of the Elements<br/>+C | Storm Elemental<br/>+L, +C | Liquid Magma Totem<br/>None |
| 40 | Nature's Guardian<br/>None | Ancestral Guidance<br/>None | Wind Rush Totem<br/>None |
| 45 | Surge of Power<br/>+L, -C | Primal Elementalist<br/>None | Icefury<br/>-L, Introduces another spell group |
| 50 | Unlimited Power<br/>None | Stormkeeper<br/>+L, +C | Ascendance<br/>+F, -L, (+C) |

Looks like our talent tree leans into empowering our secondary spell groups or not interacting
with any group.

Special remarks:
- Echoing Shock does not echo Fulmination.
- Echoing Shock does not echo Seismic Thunder empowered Earthquake but only echoes an unempowered
one at the same location.
- Echoing Shock does not echo Lava Burst at all.
- Echoing Shock with Elemental Blast can grant all three different buffs, if you're lucky.
(Elemental Blast Overloads always roll a different effect than their primary cast, but the echoed
Elemental Blast does not care about what you already have, which can overwrite what you already
have)
- Echoing Shock does echo Stormkeeper empowered Lightning Bolts (if you echo the first Lightning
Bolt), which increases the power of Stormkeeper at single targets by 50%.
- Echoing Shock does echo Icefury and grants fresh stacks, which allows to cast 5 empowered Frost
Shocks.
- Master of the Elements supports only Earthquake noticeably, because it's single target counter
part has a Fulmination as a separate damage event, which is not empowered by this talent. But at
the same time casting Lava Burst does not generate Seismic Thunder, making you trade more
Earthquakes for stronger ones.
- Surge of Power is a very special child. Its Lightning Bolt effect feels almost like a
positive feedback loop. And any time Lava Burst becomes ready you have to decide what's of
higher value to you: this feedback loop or keeping Lava Burst on cooldown? Or with different
wording: Lava Burst regularly prevents the positive feedback loop within Surge of Power.
- Surge of Power Lava Burst effect is as always pretty difficult to get a feeling for.
- Surge of Power Flame Shock effect feels like mockery. If I have multiple targets available Surge
of Power forces me to essentially not do any AoE at all and instead keep casting Lightning Bolts
to generate Fulminations to spread Flame Shocks, so that I can cast as many Lava Bursts as
possible, which in itself prevents me from casting Lightning Bolt, thus generating Fulmination for
the next Surge of Power, what is detrimental to my active Flame Shock count. In this situation
this whole talent feels a giant cement block at my feet. And I need to swim. Just to be clear
here: Surge of Power has two issues with the Flame Shock effect:
    1. Successfully spreading Flame Shock reduces the frequency of castable Lightning Bolts thus
    reduces the power of this talent.
    2. Wanting to use Surge of Power removes Chain Lightning and Earthquake completely.
- Surge of Power in combination with Elemental Blast is quite the wasteful experience. You either
waste Fulmination by overcapping or you waste Fulmination because you have to spend non-6+ stacks
to keep Elemental Blast on cooldown.
- Icefury adds yet another decoupled spell group. Neither Icefury nor Frost Shock care about any
other casts.
- Ascendance does not support or empower Lava Burst in general. It creates a timeframe during that
you only cast that one spell and casting anything else is a mistake.

I created some slides some time ago about our spell interactions. They are updated for these changes.
[Google Slides](https://docs.google.com/presentation/d/1Bwx87rj44dEZmSeHEOqQhP6TkjQLCBTCgmFkpjr4e2s/edit?usp=sharing)


## Conclusion

Looking at the core mechanics and talents our communicated secondary spell groups feel like the
actual focus and Flame Shock and Lava Burst exist to be kept on cooldown.

Only when taking Echo of the Elements the spec starts to feel like one could or want to actively
play around Lava Burst.

This feedback post is all over the place. If you let me know about specific topics, I could
provide more targeted feedback next time. I have some suggestions too, if they would be
appreciated.

Yours sincerely,<br/>
Bloodmallet(EU)
