---
layout: post
title: Open source is great
date: 2022-02-22 00:00:00 +0100
excerpt: "Or: quicker cast go brrrrrrrr"
author: Bloodmallet(EU)
---

Greetings,

[SimulationCraft](http://simulationcraft.org/) is a simulator used by us to work on Elemental Shamans. 
It has a [public repository](https://github.com/simulationcraft/simc), therefore everything we're doing and discovering can be shared with other people quickly.

Other community tools like `raidbots` and `bloodmallet` use SimulationCraft to generate their data.
This means, whatever we find and improve will arrive at your simulating-doorsteps soon.

On the other hand this means, if anyone anywhere is working with SimulationCraft e.g. to improve our Action Priority List and notices something strange in the reports,
we can figure the issue out together and occasionally find something.

On 21.02.2022 `Amani` noticed a strangeness in Simulationcraft. 
For some at the time unknown reason spamming {{ site.data.spell.frs }} was dealing more damage than casting {{ site.data.spell.lb }} if we're ignoring {{ site.data.spell.overload }}.
This observation was quite puzzling because that math just doesn't check out.

```python
# We were working on PTR data at the time.

# Frost Shock
spell_power_mod = 0.63  # 63%
casttime = 1.5  # seconds
dpet = spell_power_mod / casttime = 0.42  # 42% spellpower per second

# Lightning Bolt
spell_power_mod = 0.95  # 95%
casttime = 2  # seconds
dpet = spell_power_mod / casttime = 0.475  # 47.5% spellpower per second
```

DPET is the abbreviation for "damage per execution time". In this case it's similar to DPS - "damage per second".
The higher the DPET of an ability usually the more important it is.
In this case we can derive, that plain {{ site.data.spell.lb }} will always deal more damage than plain {{ site.data.spell.frs }}.

The gig was up.

We scattered to check the simulation for buffs that might've just been in one of them.
Or comparing the used items to ensure similar contexts. They were similar. We were in a dead end.

But there is one additional thing we could check. Spell data used by SimulationCraft. 
When simulating locally each ability in the Abilities section offers some additional information.
Sitting down and reading that is a tad bit tedious. But coming from the above calculation we checked spell_power_mod and casttime.
We discovered SimulationCraft reported a base casttime of 2.5 seconds for {{ site.data.spell.lb }}. The body was found.

Each body has a story. Reconstructing it is necessary to figure out how to fix the underlying issue in SimulationCraft. 
Now. Are you aware about spell ranks? E.g.:
- {{ site.data.spell.lvb }} autocrit effect is the result of {{ site.data.spell.lvb_2 }}. Introduced in 7.2.0.
- {{ site.data.spell.cl }} hitting 5 targets instead of its baseline 3 is the result of {{ site.data.spell.cl_2 }}. Introduced in 7.2.0.
- {{ site.data.spell.fe }} doubling the duration of freshly applied {{ site.data.spell.fs }} is the result of {{ site.data.spell.fe_2 }}. Introduced in 9.0.1.

What if I told you {{ site.data.spell.lb }} has a Rank 2, too?
- It does. {{ site.data.spell.lb_2 }}. Introduced in 9.0.1.

It's easy to forget or overlook. You probably leveled before 9.0.1 and therefore didn't experience this.
Or you just don't remember gaining this Rank 2 at level 6.

This bares the question: didn't we know it? No. We knew. 
The topic of the tooltip showing 2.5 seconds casttime instead of the ingame observed 2.0 time occasionally popped up 
and we referred to the Rank 2 spell. 
But...during the transition to Shadowlands we forgot to implement its existence.

What does this mean?
- All Shadowlands simulations up to this point used {{ site.data.spell.lb }} with a base casttime of 2.5 seconds.
- {{ site.data.spell.eote }} was slightly overvalued. 
This talent thrives off the DPET difference between {{ site.data.spell.lb }} and {{ site.data.spell.lvb }}. The higher the difference the better this talent.
- {{ site.data.spell.afs }} was slightly undervalued in single target, 
because our baseline Maelstrom generation was slightly better than the simulation knew. 
The more Maelstrom we generate the more powerful this talent becomes.
- {{ site.data.spell.eb }} was slightly overvalued. 
It's worth is a combination of having a higher DPET than {{ site.data.spell.lb }}, 
generating more Maelstrom, and generating buffs. The DPET difference was slightly overvalued.
- {{ site.data.spell.se }} was undervalued in single target. 
A higher {{ site.data.spell.lb }} DPET value makes {{ site.data.spell.wind_gust }} buffs stronger.
- {{ site.data.spell.sop }} was slightly undervaluing its {{ site.data.spell.lb }} part.
- {{ site.data.spell.up }} was slightly undervalued because if our base cast finished quicker,
on average we can get more casts into the 10 seconds buff window gaining more benefit from it and stacking is ever so slightly higher.
- {{ site.data.spell.sk }} was slightly overvalued. 
This talent grants a damage increase and a casttime decrease by making {{ site.data.spell.lb }} instant. 
The difference between a 2.5s cast becoming instant (twice) and a 2.0s cast becoming instant is noticeable.

While this oversight is bothering it's probably nothing major for the last two tiers.

But buckle up. 9.2.0 is coming.

{{ site.data.spell.se }} will thrive even more. 
{{ site.data.spell.sop }} focusing solely on the {{ site.data.spell.lb }} part comes surprisingly close to {{ site.data.spell.pe }}.
`MACHINE GUN` gains a casual 6% in simulations that were already present in the game.

Wrapping up, SimulationCraft has the base casttime now fixed.

![Fixed Lightning Bolt casttime in SimulationCraft](/assets/img/blog/9_2_img/lightning_bolt_casttime_in_simc_fixed.png)

Thanks to it being open source we could quickly identify and fix the underlying issue.
Furthermore open source allows us to transparently work together to explore the potential of the game.

Yours sincerely,<br/>
Bloodmallet(EU)
