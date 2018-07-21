---
layout: page
title: Priority List
last_update: 2018-07-15 09:00:00
game_version: 8.0.1 Pre-patch
---

The elemental priority is fairly straightforward — the choice of which spell to cast next is often easy to make. We have done our best to condense the SimulationCraft Action Priority List (APL) into a human-readable, easy to understand form. If you want to investigate any minor details, please refer to the APL or contact us on Discord.


**This priority list is a work in progress and may change in the future. If you have suggestions with sim evidence to back them up, please let us know on Discord.**

## Single target / two targets

<div class="apl" style="max-width: 100%; text-align:justify;" markdown="1">
1. Cast {{ site.data.talent.tm }}  when any of the following are true:
    1. It is not active or you are out of range of the existing totems.
    2. You are about to enter {{site.data.talent.asc}}, and the buff would expire before {{site.data.talent.asc}} is over.
1. Cast {{ site.data.spell.fs }} when any of the following are true:
    1. It is not active on the target.
    2. You are about to enter {{site.data.talent.asc}}.
    3. The debuff's duration is at or below 6 seconds remaining.
1. Cast {{ site.data.spell.fe }} / {{ site.data.talent.se }} / {{site.data.spell.ee}} on cooldown (see <a href="#pe">the warning</a> about Primal Elementalist).
1. Cast {{ site.data.talent.asc }} on cooldown.
1. Cast {{ site.data.spell.eq }} if the legendary shoulders Echoes of the Great Sundering procced.
1. Cast {{site.data.spell.lb}} if the {{site.data.talent.ee}} debuff is active on the target and you have more than 60 Maelstrom.
1. Cast {{site.data.spell.es}} if **all** of the following are true:
    1. Your Maelstrom is higher than 60.
    2. {{site.data.talent.mote}}'s buff is active.
    3. {{site.data.talent.ee}}'s debuff is not active on the target.
1. Cast {{ site.data.talent.eb }} on cooldown.
1. Cast {{ site.data.talent.sk }} on cooldown.
1. Cast {{ site.data.talent.lmt }} on cooldown.
1. Cast {{ site.data.spell.es }} if your Maelstrom is higher than 92.
1. Cast {{ site.data.spell.lvb }}.
1. Cast {{ site.data.talent.if }} on cooldown.
1. Cast {{site.data.spell.frs}} with the {{site.data.talent.if}} buff active.
1. Cast {{site.data.spell.es }}.
1. Refresh {{ site.data.talent.tm }} if its duration is at or below 9 seconds remaining.
1. Cast {{site.data.spell.cl}} if it will hit more than one target.
1. Cast {{ site.data.spell.lb }} as a filler.
1. Cast {{site.data.spell.frs}} in place of {{site.data.spell.lb}} while moving, even if you do not have {{site.data.talent.if}}.
</div>

## AoE (3 or more targets)
<div class="apl" style="max-width: 100%; text-align:justify;" markdown="1">
1. Cast {{ site.data.talent.tm }}  when any of the following are true:
    1. It is not active.
    2. The buff's duration is at or below 9 seconds remaining.
1. Cast {{ site.data.spell.fe }} / {{ site.data.talent.se }} / {{site.data.spell.ee}} on cooldown (see <a href="#pe">the warning</a> about Primal Elementalist).
1. Cast {{ site.data.talent.sk }} on cooldown.
1. Cast {{ site.data.talent.lmt }} on cooldown.
1. Maintain 3 {{ site.data.spell.fs }}s **only if there are exactly 3 targets**.
1. Cast {{ site.data.spell.es }} **only if you're using the legendary shoulders AND have <= 6 targets**.
1. Cast {{ site.data.spell.eq }} when available. (In case of the shoulders this means to cast {{ site.data.spell.eq }} only with their proc.)
1. Cast {{ site.data.spell.lvb }} to consume {{site.data.spell.lava_surge}} procs.
1. Cast {{ site.data.talent.eb }} **only if there are exactly 3 targets**.
1. Cast {{ site.data.spell.cl }}.
</div>


## Openers

Follow the cast sequences below for your chosen opener. A red arrow indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

Standard raid opener:
<div class="opener">
    <div class="skill tm"><span>TM</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>
</div>

Ascendance opener without Primal Elementalist:
<div class="opener">
    <div class="skill tm"><span>TM</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill ee"><span>EE</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill asc"><span>Asc</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
</div>

Ascendance opener with Primal Elementalist:
<div class="opener">
    <div class="skill tm"><span>TM</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill asc"><span>Asc</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
</div>
<br>
## Common misconceptions and mistakes

> "I should try and play around {{site.data.talent.mote}}!"

The only time you should adjust your gameplay for {{site.data.talent.mote}} is when you have the liberty to cast a spell *later* with a MotE buff versus *now* -- this means for a spell like {{site.data.spell.es}}, you can make the decision to wait until you have the {{site.data.talent.mote}} buff active before casting it (this is reflected in the priority above). This is thanks to the low urgency of {{site.data.spell.es}} casts, as you are not constrained by a cooldown or Maelstrom cast, since you can cast it at any point between 60 and 100 Maelstrom.

> "I should cast {{ site.data.spell.lb }} during {{ site.data.talent.asc }} if I have some powerful buffs for it active!"

During {{ site.data.talent.asc }} you only want to spend your time casting {{ site.data.spell.lvb }} and {{ site.data.spell.es }}. Yes you'll waste {{ site.data.talent.ee }} and {{ site.data.talent.mote }} but that's fine.

> "I should cast {{ site.data.talent.eb }} during {{ site.data.talent.asc }}!"

{{ site.data.talent.eb }} doesn't deal enough damage by quite a significant margin.

> "I should cast {{ site.data.talent.if }} with {{ site.data.talent.mote }} during {{ site.data.talent.asc }}!"

Your {{ site.data.talent.asc }} is ideally used when {{ site.data.talent.if }} is on cooldown and won't get ready while you're casting {{ site.data.spell.lvb }}.

> "I should only cast {{ site.data.spell.lb }} / {{ site.data.spell.cl }} during {{ site.data.talent.se }}!"

During single target you'll stick to the usual priority list. During AoE {{ site.data.spell.cl }} becomes quickly more worth than {{ site.data.spell.lvb }}. Nonetheless you should use {{ site.data.spell.eq }}

> "I should delay {{ site.data.talent.se }} / {{ site.data.talent.asc }} after each other to benefit from them more!"

Delaying either CD can easily result in an overall loss of a usage, which weights heavier during single target than not using the passive of {{ site.data.talent.se }}. During AoE you indeed want to spread out the usage, because {{ site.data.spell.lava_beam }} doesn't benefit from {{ site.data.talent.se }} passive.


## Warning about Primal Elementalist

<p id="pe">A problem that has existed for a while now is {{site.data.talent.pe}} causing {{site.data.spell.fe}} and {{site.data.spell.ee}} to be exclusive with each other (intended) but summoning one while the other is active will simply put the new elemental on cooldown and not de-summon the existing elemental.</p>

Combining {{ site.data.talent.se }} with {{ site.data.talent.pe }} enables access to {{ site.data.spell.eye_of_the_storm_damage }}. This powerful ability needs to be activated manually. Make sure to use it shortly after your {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }}. {{ site.data.spell.eye_of_the_storm_damage }} is an incredible AoE CD and very useful for single target as well.
