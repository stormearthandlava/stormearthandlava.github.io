---
layout: page
title: Priority List
last_update: 2018-07-13 09:00:00
game_version: 8.0.1 Pre-patch
---

The elemental priority is fairly straightforward — the choice of which spell to cast next is often easy to make. We have done our best to condense the SimulationCraft Action Priority List (APL) into a human-readable, easy to understand form. If you want to investigate any minor details, please refer to the APL or contact us on Discord.


**This priority list is a work in progress and may change in the future. If you have suggestions with sim evidence to back them up, please let us know on Discord.**

## Single target / two targets

<div class="apl" style="max-width: 100%; text-align:justify;" markdown="1">
1. Cast {{ site.data.talent.tm }}  when any of the following are true:
    1. It is not active.
    2. You are about to enter {{site.data.talent.asc}}, and the buff would expire before {{site.data.talent.asc}} is over.
    3. The buff's duration is at or below 9 seconds remaining.
1. Cast {{ site.data.spell.fs }} when any of the following are true:
    1. It is not active on the target.
    2. You are about to enter {{site.data.talent.asc}}.
    3. The debuff's duration is at or below 6 seconds remaining.
1. Cast {{ site.data.spell.fe }} / {{ site.data.talent.se }} / {{site.data.spell.ee}} on cooldown (see <a href="#pe">the warning</a> about Primal Elementalist).
1. Cast {{ site.data.talent.asc }} on cooldown.
1. Cast {{site.data.spell.es}} if **all** of the following are true:
    1. Your Maelstrom is higher than 60.
    2. {{site.data.talent.mote}}'s buff is active.
    3. {{site.data.talent.ee}}'s debuff is not active on the target.
1. Cast {{ site.data.talent.eb }} on cooldown.
1. Cast {{ site.data.talent.sk }} on cooldown.
1. Cast {{ site.data.talent.lmt }} on cooldown.
1. Cast {{ site.data.spell.es }} if your Maelstrom is higher than 92.
1. Cast {{ site.data.spell.lvb }}.
1. Cast {{site.data.spell.es }}.
1. Cast {{site.data.spell.frs}} with the {{site.data.talent.if}} buff active.
1. Cast {{ site.data.talent.if }} on cooldown.
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
1. Cast {{ site.data.spell.eq }} when available.
1. Cast {{ site.data.spell.lvb }} to consume {{site.data.spell.lava_surge}} procs.
1. Cast {{ site.data.talent.eb }} **only if there are exactly 3 targets**.
1. Cast {{ site.data.spell.cl }}.
</div>


## Openers

Follow the cast sequences below for your chosen opener. A red arrow indicates the time the boss is pulled.

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


## Warning about Primal Elementalist

<p id="pe">A problem that has existed for a while now is {{site.data.talent.pe}} causing {{site.data.spell.fe}} and {{site.data.spell.ee}} to be exclusive with each other (intended) but summoning one while the other is active will simply put the new elemental on cooldown and not de-summon the existing elemental.</p>