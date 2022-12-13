---
layout: page
title: Primordial Surge ST
last_update: 12/12/2022
game_version: 10.0.2 Dragonflight
toc: false
---

# What does this build do?

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.spell.eb }}, supported by the idea of {{ site.data.talent.pw }} 'windows' that combine well with {{ site.data.talent.if }} and {{ site.data.talent.flux_melting }}.
As the name suggests this is predominately aimed at single target but due to taking {{ site.data.talent.lvs }}, {{ site.data.talent.magma_chamber }} and {{ site.data.talent.pw }} it will naturally benefit from a couple of additional targets.

# What does it look like?
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/DAMBBRBAFBEIgAgBANVRRRVFSJVAoQUDAAA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

# Stats

## Always remember to sim your current options appropriately
 - For more information [link to updated sim guide post](blahblah)  

## Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Mastery >>> Haste > Versatility = Crit

# Rotation

## Key Notes
 - Straightfoward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.talent.eb }}, {{ site.data.talent.if }} and {{ site.data.spell.frs}} become improved filler spells.
 - {{ site.data.talent.if }} and {{ site.data.spell.frs}} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.talent.ps }} and its supporting talents you should continue to utilise {{ site.data.talent.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.talent.eb }} at 4 or more targets.

## Opener
Follow the cast sequences below for your chosen opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

~3.5 seconds from pull
<div class="opener">
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill pw"><span>PW</span></div>
    <div class="arrow"></div>...
</div>

## 1 Target Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active and {{ site.data.talent.flux_melting }} buff is not active
 - {{ site.data.talent.icefury }}
 - {{ site.data.spell.lb }}

## 2 Target Priority
If you find yourself using this build on 2 or more targets it is less than ideal.
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.cl }}

## 3 Target Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.cl }}

## 4 Target Priority
If you find yourself using this build on 4 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.cl }}

## 5+ Target Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.cl }}
