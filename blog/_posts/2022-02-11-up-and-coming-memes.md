---
layout: post
title: Up and coming memes
date: 2022-02-11 00:00:00 +0200
excerpt: 9.2 is bringing more than Tier and double Legendaries
author: Bloodmallet(EU)
toc: true
---
Greetings,

## Community questions
1. Will the return of Tier sets be exciting or trash for mythic plus?
1. How to optimize the double Legendary options?
1. Will Elemental Shamans see the raid or a bench?
1. What's our opener?
1. Is the opener different for Vulperas?
1. What happens if you like {{ site.data.spell.mastery }}?
1. What's up with Renown 57?
1. Does the increased max Conduit rank change anything?
1. The brother of my neighbors best friend said we'd need 33.3% haste to perform with T28.

For the sake of brevity here are the answers to these questions:
1. A cherry on top, is a cherry on top. Even if it's just half a cherry.
1. Use the Covenant one, use the best performing already known ones. Nothing new to report here.
1. Sure. If you're reading this, limitations like cutting edge performance (not the achievement) don't apply to you. If your group doesn't want Elementals that's a group issue. Ankh is very powerful. We're reliable. Be reliable.
1. The worth of a general opener for Elemental Shamans is roughly the same as a sneeze during a try. Learn the usual priority lists. Match your fight start to mechanics. That's far more important. We aren't a burst spec.
1. No.
1. You like fantasy. Tuning doesn't.
1. Rank 57 unlocks all elements of all Soubinds. Empowered Conduit slots are basically worthless for us.
1. No. Our Conduit-Rankups are worthless.
1. No.

## Existential crisis
But why am I writing this text? Just a way to passive-aggressively rant without a predetermined goal?
The answer is certainly a solid `maybe`.

What do all the questions above have in common? Curiosity! At least that's what I hope they do.
The dark alternative would be "the fear of missing out". Missing out of optimal play.
Which can either happen within a spec, but is not limited to that. It can also mean the fear to "play the wrong spec/class".
If this darkness is encroaching on you, hopefully you'll find a calm moment to ask yourself...are you still enjoying what you're doing?
Or are you just fearfully running forward?

## Combinatorial explosions
Speaking of *fear*, do you fear the vast amount of potential combinations overwhelming you? No? Lucky you. I do and here is why:

--- | ---
Races available for Shamans|12
3 Talents per row times 5 dps relevant rows|243
Covenants|4
Soulbinds|3
Conduits|2 or 3 out of 5
non-Covenant Legendaries|13

"But these are small numbers. What's the issue?" Assuming that the APL covers all combinations.
The obvious solution would be to "just simulate" all of aboves combinations. Let's ignore Conduits for the sake of my sanity.

```
12 * 243 * 4 * 3 * 13 = 454,896
```

That's roughly half a million profiles to simulate.
Let's further assume each simulation would take 10 seconds (they usually take longer).
That would be 4.5 million seconds simulation time.
What's 4.5 million seconds in an actual time we can comprehend? 5.265 days.

"That's not too bad." Is it? We would only know about patchwerk fights at that point.
AoE simulations take at least twice as long. The race to world first would have a winner before we'd even know what to use for AoE.

## Calming down
But fret not. There is a straight forward solution in plain sight. Just...don't sim'em all.

- Racials are fairly weak anyway. Race only matter if you can cheese mechanics with their off-abilities. They aren't dps factors.
- Not all talents are as strong as their companions in the same row. While we pity them, we can safely exclude them from our combinations.
- Non-Covenant Legendaries have quite a few Dead On Arrival ones. In general that leaves only the Shaman ones.
- And why simulate everything in a big pile of combinations in the first place? Correct...focus on one aspect.

## The advent of memes
And the aspect of the day? Memes. Welcome to the actual content of this post.
In the context of this post a meme is a build with a specific fantasy as a goal behind it, which will certainly not perform well enough to be used outside of informed jokes.
Or in other words, if I catch you advertising one of these as a real build, without warning people about their certain under-performance, I'll have to revoke your Elemental Shaman license.
Everyone has one, right? RIGHT?<br/>I digress.

### Ticking Hotness
> Venthyr & Skybreaker's Fiery Demise

You're Fire. With the flick of a finger (a slow flick...like a 2.5s flick) you set ablaze up to 5 targets and heal companions at the same time.
Before you know it and roughly around the time your spread fire extinguishes you can once more enkindle everyone.
Meanwhile your everburning Fire Elemental empowers your burns even further.
And what is this? A fire spewer on a stick? Count me in!

Combining {{ site.data.expansion_feature.sl.legendary.venthyr }} with {{ site.data.expansion_feature.sl.legendary.skybreakers_fiery_demise }} and multiple permanent
targets will result in pretty neat CD reductions for {{ site.data.spell.chain_harvest }} to something like 18-20s effective CD.
Your Covenant ability will spread {{ site.data.spell.fs }}.
{{ site.data.expansion_feature.sl.legendary.skybreakers_fiery_demise }} will basically enforce critical hits on your {{ site.data.spell.fs }} ticks.

![Ticking Hotness Synergy Flowchart](/assets/img/blog/9_2_memes/ticking_hotness_flowchart.png)

**How to improve**: Use {{ site.data.spell.se }}. It'll serve your AoE needs better, but costs you some theme-points.

During **AoE** this build will add many critically hitting numbers to your screen.
You'll provide some off-healing and have a permanent {{ site.data.spell.se }} up even without T28 and without casting any {{ site.data.spell.lvb }}.

**Low target counts** let this build crumble.
Not having enough targets with active {{ site.data.spell.fs }} results in a long effective CD on {{ site.data.spell.chain_harvest }}.
Ignoring our Covenant ability for a second, when fighting only a few enemies T28 comes in clutch to make sure we keep {{ site.data.spell.se }} active, or get it back quickly.

**Talents**:
- {{ site.data.spell.er }}
- {{ site.data.spell.afs }}
- {{ site.data.spell.lmt }} ({{ site.data.spell.se }})
- {{ site.data.spell.pe }}
- {{ site.data.spell.asc }} ({{ site.data.spell.sk }})

**Stats**: haste >= crit > vers > mastery


### The Chainer
> Kyrian/Venthyr & Chains of Devastation

The Shadowlands posed quite a few surprises for us.
During the time we tried to recover our companions from Torghast we freed many tormented souls from their chains.
It's time to pick them up and bring the fight to the Jailer, as the Chainer.
You're casting chaining spells at enemies and friendly targets alike. You're very consistent and reliable.
Your enemies will fear the constant lightning strikes, while your buddies will receive constant watery love.
The best part? You'll be 100% mobile because everything you do are instant casts.
You come in two flavors. One is explosive and the other has even more chains!

{{ site.data.expansion_feature.sl.legendary.chains_of_devastation }} are the name of the game.
Alternate between {{ site.data.spell.cl }} and {{ site.data.spell.chain_heal }}.
As a Kyrian alternating between these casts will ensure you're using all charges of your {{ site.data.spell.vesper_totem }} and trigger both potential explosions of {{ site.data.expansion_feature.sl.legendary.kyrian }}.
As a Venthyr you'll incorporate {{ site.data.spell.chain_harvest }} as the ultimate chaining spell into your repertoire.

![The Chainer Synergy Flowchart](/assets/img/blog/9_2_memes/the_chainer_flowchart.png)

**How to improve**: Use the normal priority list to deal damage and ignore {{ site.data.expansion_feature.sl.legendary.chains_of_devastation }}. It's a meme for a reason.

During **AoE** this build is still worse than just straight up ignoring its core Legendary. But at least the Maelstrom generation is decent enough (still worse than ignoring its core Legendary).

**Low target counts** offer you the opportunity to pull more. If you can't, you better hide. You're worthless.

T28 is ignored in this build and has no effect.

**Talents**:
- {{ site.data.spell.er }}
- {{ site.data.spell.afs }}
- {{ site.data.spell.earth_shield }}
- {{ site.data.spell.se }}
- {{ site.data.spell.ancestral_guidance }}
- {{ site.data.spell.pe }}
- {{ site.data.spell.up }} ({{ site.data.spell.sk }})

**Stats**: haste >= crit > vers > mastery


### MACHINE GUN
> Night Fae/Necrolord & a surprise

Did you ever wonder how to express your hatred for your keyboard or your own fingers?
Did you ever wonder how to be very special and make sure everyone notices it?
This build presents an answer to both questions.
You're Lightning itself. And Lightning is lightning fast. The same applies to your casts.
You're constantly on the edge. Throwing Lightning twice per second at your enemies,
just to coming to a full stop when dumping your accumulated resources.
Until you lose all reason and ignore Maelstrom entirely. Which might happen. *Soon*.

The goal is pretty straight forward.
Permanent {{ site.data.spell.se }} and therefore almost 100% uptime of 20 stacks of {{ site.data.spell.wind_gust }} and benefitting from it as much as possible.
How can we benefit more than usual from {{ site.data.spell.wind_gust }}? Glad you ask.
By stacking {{ site.data.spell.mastery }} and haste. Because this implies we won't be stacking crit.
Which has a curious result: {{ site.data.spell.lb }} can deal more damage than {{ site.data.spell.es }}.
As Night Fae your Legendary {{ site.data.expansion_feature.sl.legendary.night_fae }} helps with {{ site.data.spell.se }} uptime and still provides crit.
Even though this build ignores this stat for gearing it's still a powerful stat and a great addition.
As Necrolord you have access to an empowered {{ site.data.spell.fs }} in the form of {{ site.data.spell.primordial_wave }} and {{ site.data.expansion_feature.sl.legendary.necrolord }} provides even more haste.
But you'll struggle with {{ site.data.spell.se }} uptime if you're not using {{ site.data.expansion_feature.sl.legendary.skybreakers_fiery_demise }}.
So what happens if this build reaches its goal of 20 {{ site.data.spell.wind_gust }} stacks?
{{ site.data.spell.lb }} casttime is 0.5 seconds and deals more damage per second than {{ site.data.spell.es }}.
Do you remember what else has a 0.5 seconds CD? Let me tell you: {{ site.data.expansion_feature.sl.legendary.norgannon }}.
Therefore in its climax this build will only cast {{ site.data.spell.fs }}, {{ site.data.spell.lvb }} with {{ site.data.spell.lava_surge }}, and {{ site.data.spell.lb }}.
Which are either instants or take 0.5 seconds to cast, which means that we can move 100% while casting.
Welcome back `Mists of Pandaria` and {{ site.data.spell.lb }} on the move glyph.
Another cool thing about this build: against 5 enemies, with enough {{ site.data.spell.mastery }} {{ site.data.spell.cl }} deals as much damage as {{ site.data.spell.eq }}. Nice, only one button to spam during AoE!

![MACHINE GUN Synergy Flowchart](/assets/img/blog/9_2_memes/MACHINE_GUN.png)

**How to improve**: Diverting from stacking {{ site.data.spell.mastery }} and haste and thus returning to normal priority lists would improve the performance, but this would no longer be a meme at this point.

This build deals with **AoE** worse than with single target, because while {{ site.data.spell.fs }} and {{ site.data.spell.lvb }} are required for {{ site.data.spell.se }} uptime, they are a downgrade for actual AoE damage.

T28 helps to recover from screw-up and downtimes faster.

**Legendaries**:
- {{ site.data.expansion_feature.sl.legendary.norgannon }} for free movement
- {{ site.data.expansion_feature.sl.legendary.skybreakers_fiery_demise }} to reach 100% {{ site.data.spell.se }} uptime for Necrolord
- ({{ site.data.expansion_feature.sl.legendary.elemental_equilibrium }} trigger it using {{ site.data.spell.eb }} every 30 seconds)

**Talents**:
- {{ site.data.spell.er }}
- {{ site.data.spell.eb }} (mostly ignored, except on ramp-up)
- {{ site.data.spell.se }}
- {{ site.data.spell.pe }}
- {{ site.data.spell.up }}

**Stats**: mastery = haste > vers > crit


### Hot Burps
> Necrolord & Deeply Rooted Elements

You're unwell. Something about that feast recently was unbecoming.
Since then you're struggling with keeping it together. You're trying, sure.
But every time you're seeing this Fire Elemental you're feeling it in your stomach.
It's not helpful, that this damn Elemental is now permanently next to you.
Oh boy, here we go aga...BUUUUURP: fiery balls fly towards your enemies.
Others think you're ascending. But you know the truth.
You're barely able to hold it together.

This build is all about meatballs. The more, the merrier.
With a sprinkled in chance of getting even more meatballs.
Necrolord provide some solid additional {{ site.data.spell.lvb }} via {{ site.data.spell.primordial_wave }}.
Their temporary haste increase from {{ site.data.expansion_feature.sl.legendary.necrolord }} comes in handy for quicker {{ site.data.spell.fs }} ticks, resulting in a few more {{ site.data.spell.lava_surge }} procs.
The ultimate goal for this build is to be more efficient when waiting for {{ site.data.spell.lvb }} than to cast {{ site.data.spell.lb }}.
Very frequent {{ site.data.spell.lava_surge }} procs make it possible.
The usage of {{ site.data.expansion_feature.sl.legendary.deeply_rooted_elements }} is the core of our build.
We're rewarded for every {{ site.data.spell.lvb }} with a chance to cast even more {{ site.data.spell.lvb }}.

![Hot Burps Synergy Flowchart](/assets/img/blog/9_2_memes/hot_burps.png)

**How to improve**: Use {{ site.data.expansion_feature.sl.legendary.windspeakers_lava_resurgence }} instead. This one is a lot more consistent and provides movement globals.

During **AoE** this build is useless. We generally don't want to cast {{ site.data.spell.lvb }} during AoE, and {{ site.data.expansion_feature.sl.legendary.deeply_rooted_elements }} procs are next to useless without sufficient {{ site.data.spell.fs }} spread. And we can't sufficiently spread it reliably.

**Low target counts** are exactly what this build wants. One to three targets are ideal.

T28 makes our meatballs juicier.

**Talents**:
- {{ site.data.spell.eote }}
- {{ site.data.spell.eb }} (squint hard enough and it's a triple meatball)
- {{ site.data.spell.mote }}
- {{ site.data.spell.pe }}
- {{ site.data.spell.asc }}

**Stats**: vers > haste >= mastery > crit

---
## Stay healthy
And that's it. These are all meme builds I expect to try in 9.2. Don't take the rant too much to heart.

Yours sincerely,<br/>
Bloodmallet(EU)
