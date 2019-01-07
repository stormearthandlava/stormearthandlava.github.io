---
layout: post
title: Finding breakpoints
date: 2019-01-05 09:00:00
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
lava_burst += lvb_ms / ( es_cost + lvb_ms * es_casttime / lvb_casttime ) * ( es_dmg - lvb_base / lvb_casttime * es_casttime ) / lvb_casttime
```

Wait a second! What're `( es_cost + lvb_ms * es_casttime / lvb_casttime )` and `( es_dmg - lvb_base / lvb_casttime * es_casttime )` there?
The first parenthesis adds the fractional Maelstrom generation loss of casting an {{ site.data.spell.es }} instead of {{ site.data.spell.lvb }}.
The second one calculates the {{ site.data.spell.es }} gain compared to casting {{ site.data.spell.lvb }}.

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
( 6 * lvb_base + es_dmg ) / ( 6 * lvb_casttime + es_casttime )
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

Compare {{ site.data.spell.lb }} to {{ site.data.spell.lvb }} and find the necessary crit_chance to make {{ site.data.spell.lb }} at least equal if not greater than {{ site.data.spell.lvb }}. To do so we're going to use the simplyfied calculations. We need to use the full calculations, though, because we need to apply the crit_chance at all the correct places.

```python
(es_ms / lb_ms * lb_dmg + es_dmg) * (base_multi + crit_multi * crit_chance) / (es_ms / lb_ms * lb_casttime + es_casttime) >= (es_ms / lvb_ms * lvb_spellpower_coefficient * (base_multi + crit_multi) + es_dmg * (base_multi + crit_multi * crit_chance)) / (es_ms / lvb_ms * lvb_casttime + es_casttime)
(es_ms / lb_ms * lb_dmg + es_dmg) * (base_multi + crit_multi * crit_chance) / (es_ms / lb_ms * lb_casttime + es_casttime) >= es_ms / lvb_ms * lvb_spellpower_coefficient * (base_multi + crit_multi) / (es_ms / lvb_ms * lvb_casttime + es_casttime) + es_dmg * (base_multi + crit_multi * crit_chance) / (es_ms / lvb_ms * lvb_casttime + es_casttime)
(es_ms / lb_ms * lb_dmg + es_dmg) * (base_multi + crit_multi * crit_chance) / (es_ms / lb_ms * lb_casttime + es_casttime) - es_dmg * (base_multi + crit_multi * crit_chance) / (es_ms / lvb_ms * lvb_casttime + es_casttime) >= es_ms / lvb_ms * lvb_spellpower_coefficient * (base_multi + crit_multi) / (es_ms / lvb_ms * lvb_casttime + es_casttime)
(es_ms / lb_ms * lb_dmg + es_dmg) / (es_ms / lb_ms * lb_casttime + es_casttime) * (base_multi + crit_multi * crit_chance) - es_dmg / (es_ms / lvb_ms * lvb_casttime + es_casttime) * (base_multi + crit_multi * crit_chance) >= es_ms / lvb_ms * lvb_spellpower_coefficient * (base_multi + crit_multi) / (es_ms / lvb_ms * lvb_casttime + es_casttime)
((es_ms / lb_ms * lb_dmg + es_dmg) / (es_ms / lb_ms * lb_casttime + es_casttime) - es_dmg / (es_ms / lvb_ms * lvb_casttime + es_casttime)) * (base_multi + crit_multi * crit_chance) >= es_ms / lvb_ms * lvb_spellpower_coefficient * (base_multi + crit_multi) / (es_ms / lvb_ms * lvb_casttime + es_casttime)
base_multi + crit_multi * crit_chance >= es_ms / lvb_ms * lvb_spellpower_coefficient * (base_multi + crit_multi) / (es_ms / lvb_ms * lvb_casttime + es_casttime) / ((es_ms / lb_ms * lb_dmg + es_dmg) / (es_ms / lb_ms * lb_casttime + es_casttime) - es_dmg / (es_ms / lvb_ms * lvb_casttime + es_casttime))
crit_multi * crit_chance >= es_ms / lvb_ms * lvb_spellpower_coefficient * (base_multi + crit_multi) / (es_ms / lvb_ms * lvb_casttime + es_casttime) / ((es_ms / lb_ms * lb_dmg + es_dmg) / (es_ms / lb_ms * lb_casttime + es_casttime) - es_dmg / (es_ms / lvb_ms * lvb_casttime + es_casttime)) - base_multi
crit_chance >= (es_ms / lvb_ms * lvb_spellpower_coefficient * (base_multi + crit_multi) / (es_ms / lvb_ms * lvb_casttime + es_casttime) / ((es_ms / lb_ms * lb_dmg + es_dmg) / (es_ms / lb_ms * lb_casttime + es_casttime) - es_dmg / (es_ms / lvb_ms * lvb_casttime + es_casttime)) - base_multi) / crit_multi

crit_chance >= (60 / 10 * 53.125% * (1.0 + 1.5) / (60 / 10 * 2s + 1.5s) / ((60 / 8 * 70.4% + 210%) / (60 / 8 * 2s + 1.5s) - 210% / (60 / 10 * 2s + 1.5s)) - 1.0) / 1.5
crit_chance >= 0.6823
```

The cool thing about doing these kind of calculations in spreadsheets is: it allows us to verify our results with simple try and error.
This means we can just enter the calculated 68.23% crit into the crit character field at the top of [this spreadsheet](https://docs.google.com/spreadsheets/d/1NcGxqrBb_vGMYm0TgDsWoaIIKkEtiLR-hXJFmzXvmJQ/edit#gid=0) (after creating a copy of it) and see...it matches.

The first one who solved this previously wrong calculation was **HawkCorrigan#1811**. The issue was, that previously the comparison calculation applied crit to the ms dpet of {{ site.data.spell.lvb }}, which already had some {{ site.data.spell.lvb }} spellpower calculation. This double dipping on crit was wrong. You can now see the corrected formula above.

The linked spreadsheet has the old, new, and a calculation with added mastery into it. Enjoy!


## Lightning Bolt during Storm Elemental vs baseline haste

To tackle this question we first need to know how {{ site.data.talent.se }} stacks work differently than haste.
Haste reduces the casttime of a spell by division. `new_casttime = base_casttime / ( 1.0 + haste )`
{{ site.data.talent.se }} stacks on the other hand reduce the casttime directly.

Type | Value
--- | ---
Haste | 30%
SE stacks | 10 (30% casttime reduction)
Base casttime | 2 seconds
Hasted casttime | 1.538 seconds
SEed casttime | 1.4 seconds

Additionally we need to know, that the GCD during {{ site.data.talent.se }} uptime is locked at 0.5 seconds for {{ site.data.spell.lb }} and {{ site.data.spell.cl }}. So once we have a shorter cast time than 0.5 seconds we found this haste break point.

After getting this out of the way, let's head into this fairly easy calculation. First we calculate the new casttime with {{ site.data.talent.se }} 20 stacks.

```python
LB = base_casttime * ( 1.0 - se_stacks * 0.03 )
LB = 2 * ( 1.0 - 20 * 0.03 )
LB = 0.8 seconds
```
Now the last step is to calculate how much haste we need to get {{ site.data.spell.lb }} casttime to 0.5 seconds.

```python
goal_casttime >= casttime / ( 1.0 + haste )        | * ( 1.0 + haste )
goal_casttime * ( 1.0 + haste ) >= casttime
goal_casttime + goal_casttime * haste >= casttime  | - goal_casttime
goal_casttime * haste >= casttime - goal_casttime  | / goal_casttime
haste >= ( casttime - goal_casttime ) / goal_casttime

haste >= ( 0.8 - 0.5 ) / 0.5
haste >= 0.6
```

This means: once we have more than 60% haste (looking at you Bloodlust!), {{ site.data.spell.lb }} will be cast faster than our GCD with 20 stacks.
Breakpoint found.

[My spreadsheet with all of the above](https://docs.google.com/spreadsheets/d/1NcGxqrBb_vGMYm0TgDsWoaIIKkEtiLR-hXJFmzXvmJQ/edit#gid=0)

[Sadozai much better spreadsheet](https://docs.google.com/spreadsheets/d/1cyYenNF4qBuWGaYkXg17h6oBb1ReeTAIPdJI8PmFzGI) (talent checkboxes, better formatting, better structure. It's the Epic to my Uncommon spreadsheet)

**Reminder:** The breakpoints of this post aren't meant to be reached for. This post is purely a nice-to-know!

Yours sincerely,<br/>
Bloodmallet(EU)
