---
layout: post
title: Finding breakpoints
date: 2018-12-25 09:00:00
author: Bloodmallet(EU)
---

Hey ho,

first things first: **the calculated break points in this post are not meant to be reached for**.
This post ist purely about showcasing how to reach mathy conclusions for World of Warcraft.

Big thanks are directed at Sadozai and Mis for ~~correcting my shitty math~~improving this post in various ways.
Additionaly, those who frequent earthshrine (discord) might've seen the formulas there already.

To tackle these questions, I'll at first always collect all related necessary spell data.
After listing that data, I'll calculate the DPET of each part and combine them to formulas that shall answer the question.
What's DPET? Damage per execution time.
This allows to compare spells to each other regardless of their different casttimes.
You can use it to compare the worth of different speels.
Check out [this](https://www.altered-time.com/forum/viewtopic.php?t=246) additional information.



## Lava Burst vs Lightning Bolt with a lot of Crit

Question:
> Is there a point, when we would stop casting {{ site.data.spell.lvb }} in favour of {{ site.data.spell.lb }} when stacking crit?


### Spelldata

{{ site.data.spell.lvb }}
- SP: 53.125%
- 100% crit chance
- casttime: 2 sec
- 10 Maelstrom
- can overload
- Overloads generate 4 Maelstrom

{{ site.data.spell.lb }}
- SP: 70.4%
- casttime: 2 sec
- 8 Maelstrom
- can overload
- Overloads generate 3 Maelstrom

{{site.data.spell.es }}
- SP: 210%
- casttime: 1.5 sec
- cost: 60 Maelstrom

As you can see {{ site.data.spell.lb }} base spellpower coefficient is higher than {{ site.data.spell.lvb }}.
But because {{ site.data.spell.lvb }} always crits {{ site.data.spell.lvb }} generally deals more damage.
This still spawns the question for this topic.


### DPET Lava Burst

```python
# Lava Burst base damage
lava_burst = lvb_spellpower_coefficient * crit_dmg_multiplier / lvb_casttime
lava_burst = 53.125% * 2.5 / 2
lava_burst = 66.40625%
```

This part was easy. We calculated the DPET of {{ site.data.spell.lvb }}.
But we're still missing {{ site.data.spell.mastery }} and Maelstrom generation.

```python
# Adding Maelstrom
lava_burst += lvb_ms / ( es_cost + lvb_ms * es_casttime / lb_casttime ) * ( es_dmg - lvb_dmg / lvb_casttime * es_casttime ) / lvb_casttime
```

Wait a second! What're `( es_cost + lvb_ms * es_casttime / lb_casttime )` and `( es_dmg - lvb_dmg / lvb_casttime * es_casttime )` there?
The first parenthesis add the fractional Maelstrom generation loss of casting an {{ site.data.spell.es }} instead of {{ site.data.spell.lvb }}.
The second one calculates only the {{ site.data.spell.es }} gain compared to casting {{ site.data.spell.lvb }}.

```python
lava_burst += 10 / ( 60 + 10 * 1.5 / 2 ) * ( 210% - 53.125% * 2.5 / 2 * 1.5 ) / 2
lava_burst += 8.1771%

# Combined damage
lava_burst = 66.40625% + 8.1771%
lava_burst = 74.5833%
```

{{ site.data.spell.lvb }} has a combined DPET of ~ 74.6%.

You can get the same result much easier by adding up enough {{ site.data.spell.LvB }} to cast one {{ site.data.spell.es }} and then deviding the resulting spellpower by the time it took to reach that.

```python
( 6 * lvb_dmg + es_dmg ) / ( 6 * lvb_casttime + es_casttime )
( 6 * 53.125% * 2.5 + 210% ) / ( 6 * 2 + 1.5 )
1006.875% / 13.5
74.583%
```

So choose your ~~fights~~calculation approach carefully.


### DPET Lightning Bolt

```python
# ignoring crit at first
lightning_bolt = lb_spellpower_coefficient / lb_casttime
lightning_bolt = 70.4% / 2
lightning_bolt = 35.2%
```

Once again we got the DPET first. And are now adding the Maelstrom portion.

```python
# Adding Maelstrom
lightning_bolt += lb_ms / ( es_cost + lb_ms * es_casttime / lb_casttime ) * ( es_dmg - lb_dmg / lb_casttime * es_casttime ) / lb_casttime
lightning_bolt += 8 / ( 60 + 8 * 1.5 / 2 ) * ( 210% - 70.4% / 2 * 1.5 ) / 2
lightning_bolt = 9.527%

# Combined damage
lightning_bolt = 35.2% + 9.527%
lightning_bolt = 44.727%
```
{{ site.data.spell.lb }} has a combined DPET of 44.727%.

Like the {{ site.data.spell.lvb }} section showed, this calculation can be done differently, too.

```python
( 7.5 * lb_dmg + es_dmg ) / ( 7.5 * lb_casttime + es_casttime )
( 7.5 * 70.4% + 210% ) / ( 7.5 * 2 + 1.5 )
738% / 16.5
44.727%
```


### Solving for crit chance

```python
lb * (base_multi + crit_multi * crit_chance) >= lvb_base + lvb_ms_dpet * (base_multi + crit_multi * crit_chance)
lb * (base_multi + crit_multi * crit_chance) - lvb_ms_dpet * (base_multi + crit_multi * crit_chance) >= lvb_base
(lb - lvb_ms_dpet) * (base_multi + crit_multi * crit_chance) >= lvb_base
base_multi + crit_multi * crit_chance >= lvb_base / (lb - lvb_ms_dpet)
crit_multi * crit_chance >= lvb_base / (lb - lvb_ms_dpet) - base_multi
crit_chance >= (lvb_base / (lb - lvb_ms_dpet) - base_multi) / crit_multi

crit_chance >= (66.40625% / (44.727% - 8.1771%) - 1.0) / 1.5
crit_chance >= 0.5446
```

So when your crit chance reaches ~ 54.46% {{ site.data.spell.lvb }} becomes worth less than {{ site.data.spell.lb }}.
But to be exact, this calculation is not accurate yet.
No mastery is applied anywhere in this calculation. And we have talents like {{ site.data.talent.ctt }} and {{ site.data.talent.tm }} that fiddle with these numbers as well.
But it's easy enough to add.
Just look through the calculations and replace  *_spellpower_coefficient and *_ms with values that have the mastery included.


### Mastery

```python
mastery_chance = 30% = 0.3
# Lava Burst
lava_burst = lvb_spellpower_coefficient * (1.0 + 0.85 * mastery_chance) * crit_dmg_multiplier / lvb_casttime + (lvb_ms + lvb_o * mastery_chance) / ( es_cost + (lvb_ms + lvb_o * mastery_chance) * es_casttime / lb_casttime ) * ( es_dmg - lvb_spellpower_coefficient * (1.0 + 0.85 * mastery_chance) * crit_dmg_multiplier / lvb_casttime * es_casttime ) / lvb_casttime

# Lightning Bolt
lightning_bolt = lb_spellpower_coefficient * (1.0 + 0.85 * mastery_chance) / lb_casttime + (lb_ms + lb_o * mastery_chance) / ( es_cost + (lb_ms + lb_o * mastery_chance) * es_casttime / lb_casttime ) * ( es_dmg - lb_dmg * (1.0 + 0.85 * mastery_chance) / lb_casttime * es_casttime ) / lb_casttime

# solving for crit chance
crit_chance >= (lvb_spellpower_coefficient * (1.0 + 0.85 * mastery_chance) * crit_dmg_multiplier / lvb_casttime / (lightning_bolt - (lvb_ms + lvb_o * mastery_chance) / ( es_cost + (lvb_ms + lvb_o * mastery_chance) * es_casttime / lb_casttime ) * ( es_dmg - lvb_spellpower_coefficient * (1.0 + 0.85 * mastery_chance) * crit_dmg_multiplier / lvb_casttime * es_casttime ) / lvb_casttime) - base_multi) / crit_multi
crit_chance = 0.5202
```

With mastery included we need ~ 52% crit.

## Lightning Bolt during Storm Elemental vs baseline haste




[Spreadsheet with all of the above](https://docs.google.com/spreadsheets/d/1NcGxqrBb_vGMYm0TgDsWoaIIKkEtiLR-hXJFmzXvmJQ/edit#gid=0)
