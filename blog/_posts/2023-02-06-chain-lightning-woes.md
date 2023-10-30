---
layout: post
title: The woes of Chain Lightning
#            dd/mm/yyyy
last_update: 06/02/2023
excerpt: Quadratic scaling is nice and bad
author: Bloodmallet(EU)
---

Greetings,

Have you ever wondered why Elemental Shamans' damage against 2-4 targets feels like a slog? The answer is pretty simple: {{ site.data.spell.cl }}.
On the surface, this spell is simple. Hit up to 5 targets. Deal damage to them and generate Maelstrom for each target hit.
However, this also means that, depending on target count, the amount of Maelstrom generated varies.


## Effects without Overloads

Spell | 1 target | 2 target | 3 target | 4 target | 5 target
--- | :---: | :---: | :---: | :---: | :---:
Damage | 100% | 200% | 300% | 400% | 500%
Maelstrom | 100% | 200% | 300% | 400% | 500%

Why the above table? Because we'll add {{ site.data.spell.overload }} to it now.

Like our other generator spells, {{ site.data.spell.cl }} can overload.
While the tooltip states that there is a specific "chance to trigger **a second cast on the same target**", which can be understood as "one cast, one potential Overload", this is not the case for {{ site.data.spell.cl }}.
Instead, it has a 1/3 of the usual overload chance to overload on each target hit. Each rolled independently.
This means that if {{ site.data.spell.cl }} hits 5 targets, 1/3 of our mastery is rolled 5 times.
If, for example, the first 4 targets don't succeed on the roll but the last one does, you'll see a {{ site.data.spell.cl_o }} with its primary target being your fifth hit.
Of course, {{ site.data.spell.cl_o }} hits up to 5 targets too, which allows its damage and Maelstrom generation to scale like the base spell's does.

(The 1/3 multiplier is hidden and not communicated in game.
It can be verified by excessive {{ site.data.spell.cl }} casting against different counts of target dummies.
E.g. start with 1 target dummy for 3h, then add one, and so forth.
After collecting data, compare your Overload chances across different target dummy counts.)


## Calculating Overloads

So what are the chances, assuming 50% {{ site.data.spell.overload }}, to:

Scenario | 1 target | 2 target | 3 target | 4 target | 5 target
--- | :---: | :---: | :---: | :---: | :---:
No Overload | 83% | 69% | 57% | 48% | 40%
Overload at least once | 16% | 30% | 42% | 51% | 59%
Overload on all targets | 16% | 2.7% | 0.4% | 0.07% | 0.001%
Average Overloads | 0.16 | 0.33 | 0.5 | 0.66 | 0.83

Scenario | Formula
--- | :---:
No Overload | `(1 - overload_chance / 3) ^ target_count`
Overload at least once | `1 - (1 - overload_chance / 3) ^ target_count`
Overload on all targets |  `(overload_chance / 3) ^ target_count`
Average Overloads | `(overload_chance / 3) * target_count`


So let's add this knowledge to the first table (ignoring {{ site.data.spell.echo_chamber }}).


## Effects with Overloads

Spell | 1 target | 2 target | 3 target | 4 target | 5 target
--- | :---: | :---: | :---: | :---: | :---:
Damage | 114% | 256% | 427% | 626% | 854%
Maelstrom | 112% | 250% | 412% | 600% | 812%

Scenario | Formula
--- | :---:
Damage | `base_damage * (0.85 * average_overloads)`
Maelstrom | `base_maelstrom * (3 / 4 * average_overloads)`

As you can see, the damage and Maelstrom generation difference between 5 targets and 2 or 3 is quite big.
With 2 targets, we would expect to generate 2/5 (40%) of the damage and Maelstrom that we would on 5 targets.
However, we only do ~3/10 (30%).
In other words: our Maelstrom generation more than triples going from 2 to 5 targets and more than doubles from 3 to 5 targets.

Based on this incredible increase in Maelstrom generation, I believe our spenders can't be tuned up, otherwise we'd ramp up too much against 5+ targets.
Therefore, I believe {{ site.data.spell.cl }}'s Maelstrom generation or Overload capabilities need to be changed.


## Alternatives

If {{ site.data.spell.cl }} would generate Maelstrom per cast like {{ site.data.spell.lb }} or {{ site.data.spell.lvb }}, instead of per hit, our generation during AoE would only scale off Overloads.
This would tremendously reduce the frequency of spenders, which in turn would allow tuning those up.
A drawback of this approach would be that {{ site.data.spell.cl }} and {{ site.data.spell.lb }} would become very similar, which could raise the question of why do we even need both spells.
One with slightly more single target damage, and one that hits multiple enemies and has a hidden Overload multiplier.

Alternatively, overloading {{ site.data.spell.cl }} could be changed to {{ site.data.spell.cl }} being allowed to only overload once.
This would also reduce the amount of Maelstrom generated, but would keep the noticeable ramp from 1 to 5 targets.
This change would have a smaller impact on resource generation than the former, but it would be a noticeable visual cut.
Such a change would allow other sources to "unlock" Chain Lightning to once more overload multiple times. E.g. {{ site.data.spell.sk }}, {{ site.data.spell.potm }} or {{ site.data.spell.sop }} come to mind.


## Conclusion

{{ site.data.spell.cl }} is one of the reasons why our damage against 2-4 targets isn't great.
Considering that a lot of time in M+ is spent fighting smaller groups now, this weakness is sorely felt.
{{ site.data.spell.if }} with {{ site.data.spell.electrified_shocks }} could be a way to handle this problematic target count.
However, {{ site.data.spell.if }} is a single target cast which is terrible by itself, and {{ site.data.spell.frost_shock }} doesn't generate enough Maelstrom against multiple enemies.
Additionally, the debuff suggests you should use {{ site.data.spell.cl }} which doesn't fit the {{ site.data.spell.lvb }} playstyle, which makes this talent combination uninteresting for at least half the builds.
The alternative {{ site.data.spell.flux_melting }} is only good enough as a fall-back cast during movement, or in the rare occurances of no {{ site.data.spell.lvb }}s being available.
Furthermore, using either {{ site.data.spell.electrified_shocks }} or {{ site.data.spell.flux_melting }} introduces two additional buttons and therefore complexity to the playstyle, which many don't enjoy.
But I digress.

Yours sincerely,<br/>
Bloodmallet(EU)
