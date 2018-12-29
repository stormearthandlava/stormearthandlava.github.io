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
lava_burst += lvb_ms / es_cost * ( es_dmg - lb_dmg * es_casttime / lb_castttime )  / lvb_casttime
```

Wait a second! What's this `( es_dmg - lb_dmg * es_casttime / lb_castttime )` there?
Well, we have to somehow add the actual additional worth of an {{ site.data.spell.es }}.
Our most basic cast we can constantly spam in a stand still situation is {{ site.data.spell.lb }}.
This means that we have to compare the dmg of an {{ site.data.spell.es }} to the damage a {{ site.data.spell.lb }} would deal in the same amount of time.

```python
lava_burst += 10 / 60 * ( 210% - 70.4% * 1.5 / 2 ) / 2
lava_burst += 13.1%

# Combined damage
lava_burst = 66.40625% + 13.1%
lava_burst = 79.50625%
```

{{ site.data.spell.lvb }} has a combined DPET of ~ 79.5%.


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
lightning_bolt += lb_ms / es_cost * ( es_dmg - lb_dmg * es_casttime / lb_castttime ) / lb_casttime
lightning_bolt += 8 / 60 * ( 210% - 70.4% * 1.5 / 2 ) / 2
lightning_bolt = 10.48%

# Combined damage
lightning_bolt = 35.2% + 10.48%
lightning_bolt = 45.68%
```
{{ site.data.spell.lb }} has a combined DPET of 45.68%.


### Solving for crit chance

```python
lb * (base_multi + crit_multi * crit_chance) >= lvb_base + lvb_ms_dpet * (base_multi + crit_multi * crit_chance)
45.68% * (1.0 + 1.5 * crit_chance) >= 66.40625% + 13.1% * (1.0 + 1.5 * crit_chance)     | - 13.1% * 2.5 * crit_chance
45.68% * (1.0 + 1.5 * crit_chance)  - 13.1% * (1.0 + 1.5 * crit_chance) >= 66.40625%
( 45.68% - 13.1% ) * (1.0 + 1.5 * crit_chance) >= 66.40625%
32.58% * (1.0 + 1.5 * crit_chance) >= 66.40625%                                          | / 32.58%
1.0 + 1.5 * crit_chance >= 2.03825                                                       | - 1.0
1.5 * crit_chance >= 1.03825                                                             | / 1.5
crit_chance >= 0.6922
```

So when your crit chance reaches ~ 69.2% baseline {{ site.data.spell.lvb }} becomes worth less than {{ site.data.spell.lb }}.
Well this calculation is not accurate yet.
No mastery is applied anywhere in this calculation yet.
But it's easy enough to add.
Just look through the calculations and replace  *_spellpower_coefficient and *_ms with values that have the mastery included.

### TODO: Add mastery


## Lightning Bolt during Storm Elemental vs baseline haste
