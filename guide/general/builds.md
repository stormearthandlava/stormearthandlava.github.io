---
layout: page
title: Builds
last_update: 29/03/2023
game_version: 10.0.7 Dragonflight
toc: true
big_article: true
---

# Welcome, read First

This page aims to display and discuss the recommended and most widely-used Builds available to Elemental. This is not an exhaustive list of all options and *does not imply that any build **not** shown here is automatically terrible/unplayable*.  
In practical terms we cannot account for every build variation and effort has been largely focused on the highest performing / most popular builds. If you find something that you feel works or performs better than what is listed here feel free to contact the team on [Storm, Earth & Lava Discord](https://discord.gg/y5dUf3PWrU) or [Earthshrine #Elemental Channel](https://discord.gg/earthshrine)

<hr>

# Class Tree

It is also important to note that Shamans's class tree does not include DPS increase except for:
- {{ site.data.talent.fire_and_ice }} and {{ site.data.talent.natures_fury }}
- {{ site.data.talent.totemic_recall }} and {{ site.data.talent.call_of_the_elements }} with {{ site.data.talent.lmt }} talented in the spec tree.
- {{ site.data.spell.frs }} with {{ site.data.talent.if }} talented in the spec tree. {{ site.data.spell.frs }} is recommended in all builds anyway just as a movement global.

That's it. All other talent are purely defensively and utility oriented, making our tree very flexible in the actual choices we get.

Here is a list of some talents that are recommended to get in every situation :
- {{ site.data.talent.as }} and {{ site.data.talent.planes_traveler }}, our defensive CD.
- {{ site.data.talent.swg }} and {{ site.data.talent.graceful_spirit }} for movement.
- {{ site.data.talent.gust_of_wind }} or {{ site.data.talent.spirit_walk }} for movement.
- {{ site.data.talent.ag }} for party wide healing support.

More situational talents picks:
* Defensive:
  - {{ site.data.talent.natures_guardian }} and {{ site.data.talent.ancestral_defence }} and {{ site.data.talent.elemental_warding }} are good sustain passives.
  - {{ site.data.talent.ee }} is a bad defensive since its CD is so long, but it's a defensive CD nonetheless and has good value in many situation.
  - {{ site.data.talent.earth_shield }} is a good sustain talent, just remember to refresh it when it falls off. It's also annoying to get since we almost never press {{ site.data.talent.chain_heal }}.
  - {{ site.data.talent.brimming_with_life }} is a terribly designed talent that incites us to save {{ site.data.spell.ankh }} for more max HP. It is still better than nothing for an increase in survivability and overall {{ site.data.spell.ankh }} uses.
  - {{ site.data.talent.healing_stream_totem }}, paired with {{ site.data.talent.swirling_currents }}, is a fire and forget heal assistance on the GCD. It's not bad but certainly not great.
* Movement:
  - {{ site.data.talent.thunderous_paws }} is great for small burst of mobility and slow dispel, {{ site.data.talent.spirit_wolf }} is a great "long-distance" movement tool.
  - {{ site.data.talent.wind_rush_totem }} is a good group movement talent.
  - {{ site.data.talent.natures_swiftness }} is great to get an extra movement Global. Best used on {{ site.data.talent.eb }} in ST, {{ site.data.spell.cl }} in AoE and {{ site.data.spell.healing_surge }} when low on health.
* Utility:
  - {{ site.data.talent.totemic_focus }} is great for both {{ site.data.talent.wrt }} duration and {{ site.data.talent.lmt }} width.
  - {{ site.data.talent.mana_spring_totem }} is better in raid content than it is in party, but good nonetheless.
  - {{ site.data.talent.purge }} and {{ site.data.talent.cleanse_spirit }} are perfect examples of good talents that are purely situational and can be skipped in many builds, and picked only when needed.
  - {{ site.data.talent.capacitor_totem }}, {{ site.data.talent.hex }}, {{ site.data.talent.earthgrab_totem }} or {{ site.data.talent.thunderstorm }} are situational Crowd Control talents.

<hr>

# Hotfixes applied on 28/02/23 (NA) and 01/03/23 (EU):
First and foremost, they do not appear to have any impact on rotational priority from initial testing. This includes but is not limited to:
   - {{ site.data.talent.icefury }} buffed {{ site.data.spell.frs }}s in AoE and Single target, for the builds that take {{ site.data.talent.flux_melting }} you should continue to treat it like a filler only. (Note: when playing {{ site.data.talent.e_shocks }} it produces the same result in single target to care or not care about {{ site.data.talent.icefury }} buffs, this was consistent across the most popular build types that include it)
   - {{ site.data.talent.sk }} usage. Despite the buff to {{ site.data.spell.lb }} there has been no change to how we consume {{ site.data.talent.sk }} buffs on varying target counts.
   - For those using {{ site.data.talent.mwf }} builds remember the priority has not changed, the build just has less sources of {{ site.data.talent.lvs }} procs relative to the alternative {{ site.data.talent.wlr }} build.
   - Some players were already including {{ site.data.talent.icefury }} with {{ site.data.talent.e_shocks }} into the Wildfire builds (trading {{ site.data.talent.fop }} for them), this choice gained some ground with the buff to baseline {{ site.data.spell.frs }} damage and the maelstrom gains of {{ site.data.talent.if }} buffs.

<hr>

# Primordial Surge Builds

Most notably aimed more at the Single Target profiles these variants are used when you need to focus on boss damage by using the inherent strength of combining {{ site.data.talent.ps }} and tools like {{ site.data.talent.dre }} and/or {{ site.data.talent.wlr }} to increase the value and frequency of {{ site.data.talent.lvs }}. Turning your {{ site.data.talent.eb }} and {{ site.data.spell.lvb }} into powerhouses.

<p align="center" style="color:red">Click on a build banner to expand it.</p>

<div class="accordion dungeon-accordion" id="accordion-psurge">
<div class="card">
<div class="card-header" id="pswlr">
<div data-toggle="collapse" data-target="#pswlr-collapse" aria-expanded="false" aria-controls="pswlr-collapse" class="builds-header pswlr"><h2>Primordial Surge with Windspeakers</h2></div>
</div>
<div id="pswlr-collapse" class="collapse" aria-labelledby="pswlr" data-parent="#accordion-psurge">
<div class="card-body" markdown="1">

## What does this build do?

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.talent.eb }}, supported by the idea of {{ site.data.talent.pw }} 'windows'.
As the name suggests this is predominately aimed at single target but due to taking {{ site.data.talent.lvs }}, {{ site.data.talent.magma_chamber }} and {{ site.data.talent.pw }} it will naturally benefit from a couple of additional targets.

## What does it look like?

### Standard build
{{ site.data.talent.eeq }} is *usually* the best single point to get for a Single Target fight. Be sure to sim for your best option.
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCgDkUSShSUikQEAAAAAgSAJlkgmASLJpBCCJJBC?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### LMT Variant
{{ site.data.talent.lmt }} can be used on fight with some adds to gain some cleave but where the only thing that matters is Single Target (such as Sennarth).
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCAJlkUoEl0SCRAAAAAAKBIlkgmASLJppECSkEgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

<hr>

## Stats

### Always remember to sim your current options appropriately
 - [Raidbots](https://www.raidbots.com/simbot/topgear)
 - For more information [How Does Elemental Sim?]({{ site.baseurl }}{% link blog/_posts/2023-01-02-simming.md %})

### Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Mastery / Haste >> Versatility = Crit
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

<hr>

## Rotation

### Key Notes
 - Straightforward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.talent.eb }}, {{ site.data.talent.if }} and {{ site.data.spell.frs}} become improved filler spells.
 - Don't forget that {{ site.data.talent.wlr }} provides a {{ site.data.talent.lvs }} proc after each {{ site.data.talent.eb }}! Use these immediately afterwards in all cases!
 - {{ site.data.talent.if }} and {{ site.data.spell.frs}} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.talent.ps }} and its supporting talents you should continue to utilize {{ site.data.talent.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.talent.eb }} at 4 or more targets.
 - {{ site.data.talent.dre }} procs do not impact rotation priority and should be read the same regardless. In practice this means 'filler' spells like {{ site.data.talent.if }} and buffed {{ site.data.spell.frs }} are eliminated when {{ site.data.talent.dre }} procs happen *unless you have to move* because {{ site.data.spell.lvb }} will always be available during them. You will also continue to spend maelstrom on {{ site.data.talent.eb }} as usual.
 - If talented, use {{ site.data.talent.lmt }} on CD if no adds are going to spawn soon.

### Opener
Follow the cast sequence below for your opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

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

### 1 Target Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.talent.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active
 - {{ site.data.talent.icefury }}
 - {{ site.data.spell.lb }}

### 2 Targets Priority
If you find yourself using this build on 2 or more targets it is less than ideal.
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 3 Targets Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 4 Targets Priority
If you find yourself using this build on 4 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 5+ Targets Priority
If you find yourself using this build on 5 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="psfb">
<div data-toggle="collapse" data-target="#psfb-collapse" aria-expanded="false" aria-controls="psfb-collapse" class="builds-header psfb"><h2>Primordial Surge with Further Beyond</h2></div>
</div>
<div id="psfb-collapse" class="collapse" aria-labelledby="psfb" data-parent="#accordion-psurge">
<div class="card-body" markdown="1">

## What does this build do?

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.talent.eb }}, supported by the idea of {{ site.data.talent.pw }} 'windows'.
As this build takes {{ site.data.talent.dre }} and extends to {{ site.data.talent.fb }} a fair amount of its power comes from maximizing {{ site.data.spell.lvb }} usage, particularly {{ site.data.talent.lvs }}, to have the most chances at gambling {{ site.data.talent.dre }} which {{ site.data.talent.ps }} naturally assists with.

## What does it look like?

### Standard build
{{ site.data.talent.eeq }} is *usually* the best single point to get for a Single Target fight. Be sure to sim for your best option.
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCgDkUSSJpEIJEBAAAAAoEQSJJoJg0SSaggQSSgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### LMT Variant
{{ site.data.talent.lmt }} can be used on fight with some adds to gain some cleave but where the only thing that matters is Single Target (such as Sennarth).
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCAJlkUSKBtkQEAAAAAgSASJJoJg0SSaKhgEJBI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

<hr>

## Stats

### Always remember to sim your current options appropriately
 - [Raidbots](https://www.raidbots.com/simbot/topgear)
 - For more information [How Does Elemental Sim?]({{ site.baseurl }}{% link blog/_posts/2023-01-02-simming.md %})

### Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Haste >> Mastery > Versatility = Crit
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

<hr>

## Rotation

### Key Notes
 - This variant includes {{ site.data.talent.fb }} which will inevitably increase the pull-to-pull variance in your damage that you see in-game *and* is not simulated with movement in mind when using default Patchwerk sims, this means it may not be the proper choice in real raid scenarios if you're looking to do the most damage and more importantly if you need to do that damage consistently and reliably! It is however extremely fun to manage procs and highroll, best of luck to you!
 - Straightforward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.talent.eb }}, {{ site.data.talent.if }} and {{ site.data.spell.frs}} become improved filler spells.
 - {{ site.data.talent.if }} and {{ site.data.spell.frs}} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.talent.ps }} and {{ site.data.talent.dre }} with its supporting talents you should continue to utilize {{ site.data.talent.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.talent.eb }} at 4 or more targets.
 - {{ site.data.spell.lvbm }} replaces {{ site.data.spell.lvb }} at 4 or more targets.
 - {{ site.data.talent.fb }} makes you value maelstrom generation very highly during AoE, which displaces regular {{ site.data.spell.lvb }} casts entirely at 4+ targets. This is predominately a single-target build so AoE is not its main function.
 - If talented, use {{ site.data.talent.lmt }} on CD if no adds are going to spawn soon.

### Opener
Follow the cast sequence below for your opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

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

### 1 Target Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.talent.eb }} if you have {{ site.data.talent.dre }} proc active to extend duration
 - {{ site.data.talent.eb }} if you are approaching ~135 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active
 - {{ site.data.talent.icefury }}
 - {{ site.data.spell.lb }}
    *  {{ site.data.talent.eb }} is only listed when {{ site.data.talent.dre }} proc or maelstrom overcap would happen because you want to enter these procs with as high maelstrom as possible due to {{ site.data.talent.fb }}, in an ideal world you would only spend during {{ site.data.talent.dre }} procs but inevitably you will need to avoid overcapping outside of these procs as well.

### 2 Targets Priority
If you find yourself using this build on 2 or more targets it is less than ideal.
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} if you have {{ site.data.talent.dre }} proc active to extend duration
 - {{ site.data.talent.eb }} if you are approaching ~135 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active *and* need to move
 - {{ site.data.talent.if }} if you expect to move soon and {{ site.data.talent.swg }} is not available, otherwise do not use.

### 3 Targets Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} if you have {{ site.data.talent.dre }} proc active to extend duration
 - {{ site.data.talent.eb }} if you are approaching ~135 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 4 Targets Priority
If you find yourself using this build on 4 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.dre }} proc is active and you will finish the cast
 - {{ site.data.spell.cl }}

### 5+ Targets Priority
If you find yourself using this build on 5 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.dre }} proc is active and you will finish the cast
 - {{ site.data.spell.cl }}

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="psmwf">
<div data-toggle="collapse" data-target="#psmwf-collapse" aria-expanded="false" aria-controls="psmwf-collapse" class="builds-header psmwf"><h2>Primordial Surge with Mountains will Fall</h2></div>
</div>
<div id="psmwf-collapse" class="collapse" aria-labelledby="psmwf" data-parent="#accordion-psurge">
<div class="card-body" markdown="1">

## What does this build do?

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.talent.eb }}, supported by the idea of {{ site.data.talent.pw }} 'windows'.
This build effectively swaps {{ site.data.talent.wlr }} or {{ site.data.talent.fb }} for {{ site.data.talent.mwf }}, which reduces the perceived complexity from this build allowing you to focus more completely on the {{ site.data.talent.lvs }} provided by {{ site.data.talent.ps }} and effective spending of maelstrom.

## What does it look like?

### Standard build
{{ site.data.talent.eeq }} is *usually* the best single point to get for a Single Target fight. Be sure to sim for your best option.
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCgDkUSShSgkkEBAAAAAoEQSJJoJg0SSaggQSSgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### LMT Variant
{{ site.data.talent.lmt }} can be used on fight with some adds to gain some cleave but where the only thing that matters is Single Target (such as Sennarth).
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCAJlkUoE0SSSEAAAAAgSASJJoJg0SSaKhgEJBI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

<hr>

## Stats

### Always remember to sim your current options appropriately
 - [Raidbots](https://www.raidbots.com/simbot/topgear)
 - For more information [How Does Elemental Sim?]({{ site.baseurl }}{% link blog/_posts/2023-01-02-simming.md %})

### Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Haste / Mastery > Versatility = Crit
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

 <hr>

## Rotation

### Key Notes
 - Straightforward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.talent.eb }}, {{ site.data.talent.if }} and {{ site.data.spell.frs}} become improved filler spells.
 - {{ site.data.talent.if }} and {{ site.data.spell.frs}} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.talent.ps }} and {{ site.data.talent.dre }} with its supporting talents you should continue to utilize {{ site.data.talent.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.talent.eb }} at 4 or more targets.
 - {{ site.data.talent.dre }} procs do not impact rotation priority and should be read the same regardless. In practice this means 'filler' spells like {{ site.data.talent.if }} and buffed {{ site.data.spell.frs }} are eliminated when {{ site.data.talent.dre }} procs happen *unless you have to move* because {{ site.data.spell.lvb }} will always be available during them. You will also continue to spend maelstrom on {{ site.data.talent.eb }} as usual.
 - If talented, use {{ site.data.talent.lmt }} on CD if no adds are going to spawn soon.
 - {{ site.data.talent.lmt }}’s periodic damage scales dynamically with haste, therefore it can be used to setup a pull by applying {{ site.data.spell.fs }} before gaining the {{ site.data.talent.splinter }} haste buff without losing out on too much potential damage. You should still aim to use {{ site.data.talent.lmt }} while having the {{ site.data.talent.splinter }} haste buff or {{ site.data.spell.bl }} if possible, but don't lose setup time for it.

### Opener
Follow the cast sequence below for your opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

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

### 1 Target Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.talent.eb }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active
 - {{ site.data.talent.icefury }}
 - {{ site.data.spell.lb }}

### 2 Targets Priority
If you find yourself using this build on 2 or more targets it is less than ideal.
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active *and* need to move
 - {{ site.data.talent.if }} if you expect to move soon and {{ site.data.talent.swg }} is not available, otherwise do not use.

### 3 Targets Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 4 Targets Priority
If you find yourself using this build on 4 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.dre }} proc is active and you will finish the cast (if you will not, revert to {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 5+ Targets Priority
If you find yourself using this build on 5 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.dre }} proc is active and you will finish the cast (if you will not, revert to {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="pssk">
<div data-toggle="collapse" data-target="#pssk-collapse" aria-expanded="false" aria-controls="pssk-collapse" class="builds-header pssk"><h2>Primordial Surge with Stormkeeper</h2></div>
</div>
<div id="pssk-collapse" class="collapse" aria-labelledby="pssk" data-parent="#accordion-psurge">
<div class="card-body" markdown="1">

## What does this build do?

This is a Single Target build that allows Regular AoE Burst. It is best used on fights like Eranog or Dungeon like Court of Stars.
This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.talent.eb }}, supported by the idea of {{ site.data.talent.pw }} 'windows'. But it also uses {{ site.data.talent.sk }} and {{ site.data.talent.sop }} to empower our burst potential, both in ST and in AoE.
This build can be harder to play effectively as it requires you to play around both {{ site.data.talent.pw }} 'windows' and the combination of  {{ site.data.talent.sop }} with {{ site.data.talent.sk }}.

## What does it look like?
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrIJtkEkg0oE0kkkDAAAAAAoEgUSCaCItkkmSIIRSAC?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

<hr>

## Stats

### Always remember to sim your current options appropriately
 - [Raidbots](https://www.raidbots.com/simbot/topgear)
 - For more information [How Does Elemental Sim?]({{ site.baseurl }}{% link blog/_posts/2023-01-02-simming.md %})

### Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Haste / Mastery > Versatility = Crit
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds
 - Mastery has very good synergy with both {{ site.data.talent.mwf }} and {{ site.data.spell.lvb }}.

<hr>

## Rotation

### Key Notes
- This build is best used on single target fights with regular Adds spawns or burst windows.
- {{ site.data.talent.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy, whilst it is appreciable that {{ site.data.talent.eb }} reduces the value gained from {{ site.data.talent.sop }} due to being more expensive and producing less buffs overall - this is only true for the 1-4 target range and the value added is still positive, AoE value from {{ site.data.talent.sop }} is unaffected at 6+ targets.
    * 1-2 Targets = {{ site.data.spell.lb }} (or {{site.data.spell.lvb}} on {{ site.data.talent.dre }} procs)
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to move and {{ site.data.talent.sop }} buff happens to be up and no {{ site.data.talent.if }} buffs remain
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible
    * {{ site.data.talent.sop }} will also make you want to delay casting {{ site.data.talent.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.
- Due to elements like {{ site.data.talent.ps }} and {{ site.data.talent.dre }} with its supporting talents you should continue to utilize {{ site.data.talent.lvs }} procs even if you end up facing multiple targets.
- {{ site.data.spell.eq }} replaces {{ site.data.talent.eb }} at 4 or more targets.
- {{ site.data.talent.lmt }} is included for its raw damage, don't start to spread {{ site.data.spell.fs }} unless you have to move - in which case it remains a good movement global.

### Opener
Follow the cast sequence below for your opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

~4.5 seconds from pull
<div class="opener">
    <div class="skill sk"><span>SK</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill pw"><span>PW</span></div>
    <div class="arrow"></div>...
</div>

### 1 Target Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon. (using {{ site.data.talent.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - {{ site.data.talent.sk }} if you have an active {{ site.data.talent.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.talent.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.talent.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.talent.pw }} if it is available (maintain {{ site.data.spell.fs }} at all time)
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buffs are active
 - {{ site.data.talent.eb }} if you are approaching ~85 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.talent.eb }}, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lb }} if {{ site.data.talent.sk }} is active
 - {{ site.data.spell.lb}}

### 2 Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon. (using {{ site.data.talent.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - {{ site.data.talent.sk }} if you have an active {{ site.data.talent.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.talent.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.talent.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.talent.pw }} if it is available (maintain {{ site.data.spell.fs }} on both target at all times)
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.talent.eb }} if you are approaching ~85 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.talent.eb }}, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.talent.sk }} is active
 - {{ site.data.spell.cl }}
  Note:
 - Playing around {{ site.data.talent.potm }} procs is dps neutral, but generally it will be easier and less likely to negatively impact your performance if you ignore them - sometimes you will get lucky and have one during your {{ site.data.talent.sk }} burst though!

### 3 Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon. (using {{ site.data.talent.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one and {{ site.data.talent.sop }} spreads it!
 - {{ site.data.talent.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.talent.sk }} buff is active, preferably with {{ site.data.talent.mote }} buff active!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }}, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }} if {{ site.data.talent.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

## 4-5 Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon. (using {{ site.data.talent.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one and {{ site.data.talent.sop }} spreads it!
 - {{ site.data.talent.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.talent.sk }} buff is active, preferably with {{ site.data.talent.mote }} buff active!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }}, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 6+ Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon. (using {{ site.data.talent.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - Maintain {{ site.data.spell.fs }} as many targets as possible, don't forget {{ site.data.talent.pw }} applies one (Do not use {{ site.data.talent.sop }} to spread it!
 - {{ site.data.talent.sk }} if it is available and you have at least enough maelstrom to cast {{ site.data.spell.eq }} after to {{ site.data.talent.sop }} buff the charges!
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} when {{ site.data.talent.sk }} buff is active, preferably with {{ site.data.talent.sop }} buff
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

</div>
</div>
</div>
</div>

<br/>
<br/>

<hr>

# Wildfire Builds

Predominately aimed at M+ content these build variants focus on the power of {{ site.data.spell.fs }} and its supporting talents to deal AoE damage, all variants include {{ site.data.talent.dre }} by default as the build spends a lot of its time using the {{ site.data.talent.lvs }} procs it generates so it provides a lot of value on average but is not the focus of the build - if desired you can swap this point to a more consistent option.

<p align="center" style="color:red">Click on a build banner to expand it.</p>

<div class="accordion dungeon-accordion" id="accordion-wildfire">
<div class="card">
<div class="card-header" id="wfaoe">
<div data-toggle="collapse" data-target="#wfaoe-collapse" aria-expanded="false" aria-controls="wfaoe-collapse" class="builds-header wfaoe"><h2>Wildfire "Full" AoE</h2></div>
</div>
<div id="wfaoe-collapse" class="collapse" aria-labelledby="wfaoe" data-parent="#accordion-wildfire">
<div class="card-body" markdown="1">

## What does this build do?

We heard you like {{ site.data.spell.fs }} and {{ site.data.talent.lvs }} so this build is entirely committed to the idea of maintaining {{ site.data.spell.fs }} on multiple targets and utilizing all the benefits associated with consuming {{ site.data.talent.lvs }}.

Staples of wildfire as a M+ include {{ site.data.talent.sfd }}, {{ site.data.talent.splinter }}, {{ site.data.talent.sk }}. There are more swaps you could make within this archetype like {{ site.data.talent.sop }} swapped for {{ site.data.talent.afs }} which significantly simplifies your perceived gameplay, but in reality is weaker in most ways so all the variants below use {{ site.data.talent.sop }}.

## What does it look like?

There are multiple possible variants of this build that do not include rotational priority changes, these will all play similarly and you can choose between them based on personal preference and/or sim results. The 4 builds linked below are, at least in my opinion, the 'standard' setups with one taking {{ site.data.talent.imp_ftw }} with {{ site.data.talent.potm }}, another opting to go for {{ site.data.talent.flow_of_power }} and {{ site.data.talent.swelling_maelstrom }}, another one playing {{ site.data.talent.searing_flames }} instead of {{ site.data.talent.echo_chamber }} and the last one simply taking {{ site.data.talent.if }} and {{ site.data.talent.electrified_shocks }}.

### Standard build without Elemental Blast
The standard build for a non-{{ site.data.talent.eb }} build.
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkACSjS0SLJOQOAAAAAAgSASJJKpJg0SSaKhgQEgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

### Swelling Maelstrom Variant
{{ site.data.talent.swelling_maelstrom }} will give you more room to effectively use your {{ site.data.talent.sop }} and pool Maelstrom.
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0Sr0SSLJgQSjS0STCRAAAAAAKBIlkokmASLJppECCRAC?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

### Searing Flames Variant
For better overall Maelstrom generation.
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkACSjSOQLtkQOAAAAAAgSASJJKpJg0SSaKhgQEgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

### Icefury Variant
{{ site.data.talent.if }} gives use some cleave in low target count and flows nicely for Maelstrom generation.
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkASLSjS0STiDEAAAAAAKBIlkokmASLJppECCRAC?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

<hr>

## Stats

### Always remember to sim your current options appropriately
 - [Raidbots](https://www.raidbots.com/simbot/topgear)
 - For more information [How Does Elemental Sim?]({{ site.baseurl }}{% link blog/_posts/2023-01-02-simming.md %})  

### Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Haste / Crit > Mastery / Vers
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

 <hr>

## Rotation

### Key Notes
 - If targets will survive for a while you will want {{ site.data.spell.fs }} ticking on them, don't forget to monitor this particularly on higher keys where you can get real value!
 - {{ site.data.talent.lmt }}’s periodic damage scales dynamically with haste, therefore it can be used to setup a pull by applying {{ site.data.spell.fs }} before gaining the {{ site.data.talent.splinter }} haste buff without losing out on too much potential damage. You should still aim to use {{ site.data.talent.lmt }} while having the {{ site.data.talent.splinter }} haste buff or {{ site.data.spell.bl }} if possible, but don't lose setup time for it.
 - {{ site.data.talent.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy
    * 1-2 Targets = {{ site.data.spell.lb }}
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to spread {{ site.data.spell.fs }}, otherwise ignore and waste {{ site.data.talent.sop }} buffs.
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible, if you have to move then using a buff on {{ site.data.spell.fs }} is fine too
    * {{ site.data.talent.sop }} will also make you want to delay casting {{ site.data.talent.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.
 - {{ site.data.talent.dre }} procs do not really change the priority of what you're doing, they mainly act to provide value from not having to manually refresh your current {{ site.data.spell.fs }} dots and that translates into more {{ site.data.spell.cl }} casts which leads to more {{ site.data.spell.eq }} casts. Note: {{ site.data.spell.lvbm }} replaces {{ site.data.spell.cl }} in the priority when {{ site.data.talent.dre }} procs are active but you should ensure you have enough time to finish the cast inside the {{ site.data.talent.dre }} buff otherwise the cast will cancel.
 - It can be tempting to try and use every {{ site.data.talent.lvs }} proc during mass AoE but generally you're going to use them when you have to move when AoEing or when you'd have enough maelstrom to {{ site.data.spell.eq }} afterwards which benefits from {{ site.data.talent.mote }}. This strikes a better balance between fishing for {{ site.data.talent.dre }} procs and reliably good AoE damage. Feel free to prioritize {{ site.data.talent.lvs }} more if a priority target is up and needs to die fast!

### Opener
Follow the cast sequence below for your opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

~3.5 seconds from boss pull
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

AoE openers are less rigid than boss openers. Keep in mind that these will change simply based by what cooldowns you have available on a pull-by-pull basis and you should aim to maximize the value from what is available at that time. Here are some general rules:
   - Pool maelstrom at the end of a current pull to have resources available at the start of the next pull, this dramatically improves the consistent performance from pull-to-pull and eases the feeling of 'ramp' time in the rotation.
   - Though spreading {{ site.data.spell.fs }} to multiple targets is good, it should not be viewed as a requirement to reach 6 before doing damage in all cases. In cases where you have {{ site.data.talent.lmt }} and {{ site.data.talent.totemic_recall }} available, this is quite achievable, in cases where you don't you should be prepared to trigger {{ site.data.talent.splinter }}'s effect with 4-5 targets. If you have maelstrom left from a previous pack (and you should!) this process becomes more fluid and you can spread {{ site.data.spell.fs }} whilst the tank is gathering mobs.
   - On pulls that include 6+ targets it is ideal to have {{ site.data.talent.sop }} active for both charges of {{ site.data.talent.sk }} and given the maelstrom generated you can cast {{ site.data.spell.eq }} twice between them, this means that if you do not have maelstrom from a previous pack you may need to hold {{ site.data.talent.sk }} until slightly later in the pull or simply forego this value in favor of using {{ site.data.talent.sk }} without {{ site.data.talent.sop }}.
   - Avoid placing {{ site.data.talent.lmt }} prematurely, if the tank does not have sufficient aggro then its possible for it to be killed directly by mobs which greatly reduces its value

### 1 Target Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.sk }} if you have at least 83 maelstrom (without {{ site.data.talent.potm }} or 80 with {{ site.data.talent.potm }}). This ensures you can buff both charges.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.talent.pw }} if it is available and no additional targets will be available soon
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.talent.icefury }} buff is active and {{ site.data.talent.e_shocks }} debuff is not
 - {{ site.data.spell.lvb }} if {{ site.data.talent.dre }} proc is active. Note: if you have to move you will still cast {{ site.data.spell.es }} as below, and continue to follow the priorities above!
 - {{ site.data.spell.es }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.talent.if }}
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.lb }}
 - Refresh {{ site.data.spell.fs }} or cast {{ site.data.spell.frs }} when moving

  Note: You do not play around {{ site.data.talent.potm }} procs in single target.

### 2 Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.sk }} if you have at least 83 maelstrom (without {{ site.data.talent.potm }} or 80 with {{ site.data.talent.potm }}. This ensures you can buff both charges.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.talent.pw }} if it is available and no additional targets will be available soon
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.frs }} if {{ site.data.talent.icefury }} buff is active and {{ site.data.talent.e_shocks }} debuff is not
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} buff is active
 - {{ site.data.talent.if }}
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 3-5 Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.talent.sk }} buff is active, preferably with {{ site.data.talent.mote }} buff active!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.frs }} if {{ site.data.talent.icefury }} buff is active and {{ site.data.talent.e_shocks }} debuff is not (Note: do not do this against 5 or more targets unless moving)
 - {{ site.data.talent.if }} (Note: do not do this against 5 or more targets unless moving soon)
 - {{ site.data.spell.lvb }} if {{ site.data.talent.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 6+ Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.sk }} if it is available and you have at least enough maelstrom to cast {{ site.data.spell.eq }} after to {{ site.data.talent.sop }} buff the charges!
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} when {{ site.data.talent.sk }} buff is active, preferably with {{ site.data.talent.sop }} buff
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }} if {{ site.data.talent.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="wfeb">
<div data-toggle="collapse" data-target="#wfeb-collapse" aria-expanded="false" aria-controls="wfeb-collapse" class="builds-header wfeb"><h2>Wildfire with Elemental Blast</h2></div>
</div>
<div id="wfeb-collapse" class="collapse" aria-labelledby="wfeb" data-parent="#accordion-wildfire">
<div class="card-body" markdown="1">

## What does this build do?

We heard you like {{ site.data.spell.fs }} and {{ site.data.talent.lvs }} so this build is entirely committed to the idea of maintaining {{ site.data.spell.fs }} on multiple targets and utilizing all the benefits associated with consuming {{ site.data.talent.lvs }}. These variants of Wildfire also include {{ site.data.talent.eb }} for its high power in single target and low target scenarios with relatively minor impact on total AoE value.

Staples of wildfire as a M+ include {{ site.data.talent.sfd }}, {{ site.data.talent.splinter }}, {{ site.data.talent.sk }}. There are more swaps you could make within this archetype like {{ site.data.talent.sop }} swapped for {{ site.data.talent.afs }} which significantly simplifies your perceived gameplay, but in reality is weaker in most ways so all the variants below use {{ site.data.talent.sop }}.

## What does it look like?

There are multiple possible variants of this build that do not include rotational priority changes. They will all play similarly and you can choose between them based on personal preference and/or sim results. The two variants shown above are the common builds that include {{ site.data.talent.eb }} in a Wildfire setup - this is not the only way. The structure is similar to the variants without {{ site.data.talent.eb }} so learning how {{ site.data.talent.eb }} changes the rotation is the only real barrier.
You might also want to include {{ site.data.talent.ns }} in the class tree if the cast time of {{ site.data.talent.eb }} is a hindrance to you.

### Standard build
The standard {{ site.data.dungeon.eb }} build.

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkAJINKRLtkQOAAAAAAgSASJJKpJg0SSaKhgQEgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### Icefury Variant
{{ site.data.talent.if }} gives use some cleave in low target count and flows nicely for Maelstrom generation.

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkAJtINKRLNJEAAAAAAKBIlkokmASLJppECCRAC?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

<hr>

## Stats

### Always remember to sim your current options appropriately
 - [Raidbots](https://www.raidbots.com/simbot/topgear)
 - For more information [How Does Elemental Sim?]({{ site.baseurl }}{% link blog/_posts/2023-01-02-simming.md %})  

### Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Haste / Crit > Mastery / Vers
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

 <hr>

## Rotation

### Key Notes
 - If targets will survive for a while you will want {{ site.data.spell.fs }} ticking on them, don't forget to monitor this particularly on higher keys where you can get real value!
 - {{ site.data.talent.lmt }}’s periodic damage scales dynamically with haste, therefore it can be used to setup a pull by applying {{ site.data.spell.fs }} before gaining the {{ site.data.talent.splinter }} haste buff without losing out on too much potential damage. You should still aim to use {{ site.data.talent.lmt }} while having the {{ site.data.talent.splinter }} haste buff or {{ site.data.spell.bl }} if possible, but don't lose setup time for it.
 - {{ site.data.talent.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy, whilst it is appreciable that {{ site.data.talent.eb }} reduces the value gained from {{ site.data.talent.sop }} due to being more expensive and producing less buffs overall - this is only true for the 1-4 target range and the value added is still positive, AoE value from {{ site.data.talent.sop }} is unaffected at 6+ targets.
    * 1-2 Targets = {{ site.data.spell.lb }}
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to spread {{ site.data.spell.fs }}, otherwise ignore and waste {{ site.data.talent.sop }} buffs.
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible, if you have to move then using a buff on {{ site.data.spell.fs }} is fine too
    * {{ site.data.talent.sop }} will also make you want to delay casting {{ site.data.talent.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.
 - {{ site.data.talent.dre }} procs do not really change the priority of what you're doing, they mainly act to provide value from not having to manually refresh your current {{ site.data.spell.fs }} dots and that translates into more {{ site.data.spell.cl }} casts which leads to more {{ site.data.spell.eq }} casts. Note: {{ site.data.spell.lvbm }} replaces {{ site.data.spell.cl }} in the priority when {{ site.data.talent.dre }} procs are active but you should ensure you have enough time to finish the cast inside the {{ site.data.talent.dre }} buff otherwise the cast will cancel.
 - It can be tempting to try and use every {{ site.data.talent.lvs }} proc during mass AoE but generally you're going to use them when you have to move when AoEing or when you'd have enough maelstrom to {{ site.data.spell.eq }} afterwards which benefits from {{ site.data.talent.mote }}. This strikes a better balance between fishing for {{ site.data.talent.dre }} procs and reliably good AoE damage. Feel free to prioritize {{ site.data.talent.lvs }} more if a priority target is up and needs to die fast!

### Opener
Follow the cast sequence below for your opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

~3.5 seconds from boss pull
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

AoE openers are less rigid than boss openers. Keep in mind that these will change simply based by what cooldowns you have available on a pull-by-pull basis and you should aim to maximize the value from what is available at that time. Here are some general rules:
   - Pool maelstrom at the end of a current pull to have resources available at the start of the next pull, this dramatically improves the consistent performance from pull-to-pull and eases the feeling of 'ramp' time in the rotation.
   - Though spreading {{ site.data.spell.fs }} to multiple targets is good, it should not be viewed as a requirement to reach 6 before doing damage in all cases. In cases where you have {{ site.data.talent.lmt }} and {{ site.data.talent.totemic_recall }} available, this is quite achievable, in cases where you don't you should be prepared to trigger {{ site.data.talent.splinter }}'s effect with 4-5 targets. If you have maelstrom left from a previous pack (and you should!) this process becomes more fluid and you can spread {{ site.data.spell.fs }} whilst the tank is gathering mobs.
   - On pulls that include 6+ targets it is ideal to have {{ site.data.talent.sop }} active for both charges of {{ site.data.talent.sk }} and given the maelstrom generated you can cast {{ site.data.spell.eq }} twice between them, this means that if you do not have maelstrom from a previous pack you may need to hold {{ site.data.talent.sk }} until slightly later in the pull or simply forego this value in favor of using {{ site.data.talent.sk }} without {{ site.data.talent.sop }}.
   - Avoid placing {{ site.data.talent.lmt }} prematurely, if the tank does not have sufficient aggro then its possible for it to be killed directly by mobs which greatly reduces its value

### 1 Target Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon
 - {{ site.data.talent.sk }} if you have at least 75 maelstrom and did not take {{ site.data.talent.swelling_maelstrom }} *or* an active {{ site.data.talent.sop }} buff. This will enable you to buff one of your {{ site.data.talent.sk }} charges.
 - {{ site.data.talent.sk }} if you have at least 124 maelstrom with {{ site.data.talent.swelling_maelstrom }} *or* an active {{ site.data.talent.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.talent.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.talent.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.talent.pw }} if it is available and no additional targets will be available soon
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.talent.eb }} preferably with {{ site.data.talent.mote }} buff active, to avoid overcapping
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.lvb }} if {{ site.data.talent.dre }} proc is active.
 - {{ site.data.spell.frs }} if {{ site.data.talent.icefury }} buff is active and {{ site.data.talent.e_shocks }} debuff is not
 - {{ site.data.talent.if }}
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.lb }}
 - Refresh {{ site.data.spell.fs }} or cast {{ site.data.spell.frs }} when moving

  Note: You do not play around {{ site.data.talent.potm }} procs in single target.

### 2 Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon
 - {{ site.data.talent.sk }} if you have at least 75 maelstrom and did not take {{ site.data.talent.swelling_maelstrom }} *or* an active {{ site.data.talent.sop }} buff. This will enable you to buff one of your {{ site.data.talent.sk }} charges.
 - {{ site.data.talent.sk }} if you have at least 124 maelstrom with {{ site.data.talent.swelling_maelstrom }} *or* an active {{ site.data.talent.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.talent.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.talent.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.talent.pw }} if it is available and no additional targets will be available soon
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.talent.eb }} preferably with {{ site.data.talent.mote }} buff active, to avoid overcapping
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.talent.icefury }} buff is active and {{ site.data.talent.e_shocks }} debuff is not
 - {{ site.data.talent.if }}
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} buff is active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 3 Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon
 - {{ site.data.talent.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.talent.sk }} buff is active, preferably with {{ site.data.talent.mote }} buff active!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.talent.eb }} preferably with {{ site.data.talent.mote }} buff active, to avoid overcapping
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.frs }} if {{ site.data.talent.icefury }} buff is active and {{ site.data.talent.e_shocks }} debuff is not
 - {{ site.data.spell.lvb }} if {{ site.data.talent.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 4 Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon
 - {{ site.data.talent.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.talent.sk }} buff is active, preferably with {{ site.data.talent.mote }} buff active!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.frs }} if {{ site.data.talent.icefury }} buff is active and {{ site.data.talent.e_shocks }} debuff is not
 - {{ site.data.talent.if }}
 - {{ site.data.spell.lvb }} if {{ site.data.talent.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

## 5 Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon
 - {{ site.data.talent.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.talent.sk }} buff is active, preferably with {{ site.data.talent.mote }} buff active!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }} if {{ site.data.talent.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 6+ Targets Priority
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon
 - {{ site.data.talent.sk }} if it is available and you have at least enough maelstrom to cast {{ site.data.spell.eq }} after to {{ site.data.talent.sop }} buff the charges!
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} when {{ site.data.talent.sk }} buff is active, preferably with {{ site.data.talent.sop }} buff
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.talent.potm }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }} if {{ site.data.talent.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

</div>
</div>
</div>
</div>

<br/>
<br/>

<hr>

# Lightning Builds

Exactly what it says on the tin, for the friends with a penchant for Lightning! Lightning offers a great way to cater to multiple damage profiles, rarely sacrificing single target for AoE. It also plays differently to the fire builds, placing much more emphasis on {{ site.data.spell.cl }} to generate quickly at high target counts.

<p align="center" style="color:red">Click on a build banner to expand it.</p>

<div class="accordion dungeon-accordion" id="accordion-lightning">
<div class="card">
<div class="card-header" id="limwf">
<div data-toggle="collapse" data-target="#limwf-collapse" aria-expanded="false" aria-controls="limwf-collapse" class="builds-header limwf"><h2>Lightning with Mountains will Fall</h2></div>
</div>
<div id="limwf-collapse" class="collapse" aria-labelledby="limwf" data-parent="#accordion-lightning">
<div class="card-body" markdown="1">

## What does this build do?

This build focuses on the power of {{ site.data.spell.lb }}, {{ site.data.spell.cl }} and {{ site.data.talent.eb }} with {{ site.data.talent.eogs }}. It seeks to empower these effects with supporting talents like {{ site.data.talent.e_shocks }}, {{ site.data.talent.se }}, and {{ site.data.talent.lr }}. This build will be for you if you are not a fan of {{ site.data.spell.fs }} dot management or random effects that can swing your damage like {{ site.data.talent.dre }}, effectively being a solid and consistent way of dealing damage that is flexible to all target counts - the more targets the better!

## What does it look like?
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJSJJtENE0QiEAAAAAgSASJJKpJg0SSaKhgQEgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

Note:
  - You can build this without {{ site.data.talent.eb }} instead taking {{ site.data.talent.fol }}, if you do not like {{ site.data.talent.eb }}.
  - You may also prefer to include {{ site.data.talent.ns }} in the class tree if the cast time of {{ site.data.talent.eb }} is a hindrance to you.
  - {{ site.data.talent.lmt }} is preferred over {{ site.data.spell.tempest }} (gained via {{ site.data.talent.pe }}) because of its overall value being far higher over the course of a key, {{ site.data.talent.pe }} is only preferable on single target.
  - You may substitute {{ site.data.talent.sop }} for {{ site.data.talent.afs }} for comfort but it is substantially worse on single target (which is still relevant on bosses in M+!) and worse on 6+ (reliability is key, the gap alters as you add more targets in favor of {{ site.data.talent.afs }}. If you make this substitution simply ignore any line that shows {{ site.data.talent.sop }}; {{ site.data.talent.afs }} has no impact upon priority!

<hr>

## Stats

### Always remember to sim your current options appropriately
 - [Raidbots](https://www.raidbots.com/simbot/topgear)
 - For more information [How Does Elemental Sim?]({{ site.baseurl }}{% link blog/_posts/2023-01-02-simming.md %})  

### Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Haste / Crit > Mastery / Vers
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

<hr>

## Rotation

### Key Notes
 - {{ site.data.talent.mote }} is mainly to path to {{ site.data.talent.lmt }}, once you hit 3 targets any sort of gaming the {{ site.data.talent.mote }} buff becomes extremely bad, in practice this also makes the points spent in {{ site.data.talent.potm }} near worthless however they are also needed for {{ site.data.talent.echo_chamber }} & {{ site.data.talent.mwf }}
 - {{ site.data.talent.lr }} applies to your current target when it does not have an active buff. {{ site.data.spell.eq }} has *some* 'smart' applications to apply to off-targets but results can vary. It is suggested *when you are comfortable enough to do so* to incorporate target swapping after each spender to increase the value gained from {{ site.data.talent.lr }}. If done poorly (i.e. too early in the learning process) this can produce negative results, master the basics then add complexity!
 - {{ site.data.talent.lmt }} is included for its raw damage, don't start to spread {{ site.data.spell.fs }} unless you have to move - in which case it remains a good movement global when {{ site.data.talent.if }} buffed {{ site.data.spell.frs }} aren't available.
 - {{ site.data.talent.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy, whilst it is appreciable that {{ site.data.talent.eb }} reduces the value gained from {{ site.data.talent.sop }} due to being more expensive and producing less buffs overall - this is only true for the 1-4 target range and the value added is still positive, AoE value from {{ site.data.talent.sop }} is unaffected at 6+ targets.
    * 1-2 Targets = {{ site.data.spell.lb }}
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to move and {{ site.data.talent.sop }} buff happens to be up and no {{ site.data.talent.if }} buffs remain
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible
    * {{ site.data.talent.sop }} will also make you want to delay casting {{ site.data.talent.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.

### Opener
Follow the cast sequence below for your opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

~3.5 seconds from boss pull
<div class="opener">
    <div class="skill se"><span>SE</span></div>
    <div class="arrow"></div>
    <div class="skill if"><span>IF</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>...
</div>

AoE openers are less rigid than boss openers. Keep in mind that these will change simply based by what cooldowns you have available on a pull-by-pull basis and you should aim to maximize the value from what is available at that time. Here are some general rules:
   - {{ site.data.talent.lr }} is a rather significant buff to your AoE burst via {{ site.data.talent.sk }}, where possible try to ensure at least one {{ site.data.talent.lr }} buff is running on a target prior to using {{ site.data.talent.sk }} charges!
   - Pool maelstrom at the end of a current pull to have resources available at the start of the next pull, this dramatically improves the consistent performance from pull-to-pull and eases the feeling of 'ramp' time in the rotation.
   - On pulls that include 6+ targets it is ideal to have {{ site.data.talent.sop }} active for both charges of {{ site.data.talent.sk }} and given the maelstrom generated you can cast {{ site.data.spell.eq }} twice between them, this means that if you do not have maelstrom from a previous pack you may need to hold {{ site.data.talent.sk }} until slightly later in the pull or simply forego this value in favor of using {{ site.data.talent.sk }} without {{ site.data.talent.sop }}.
   - Avoid placing {{ site.data.talent.lmt }} prematurely, if the tank does not have sufficient aggro then its possible for it to be killed directly by mobs which greatly reduces its value

### 1 Target Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon. (using {{ site.data.talent.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - {{ site.data.spell.fs }} if the debuff has faded or will in ~5 seconds
 - {{ site.data.talent.sk }} if you have at least 124 maelstrom with {{ site.data.talent.swelling_maelstrom }} *or* an active {{ site.data.talent.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.talent.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.talent.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.talent.if }} buff is up and {{ site.data.talent.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.talent.if }}
 - {{ site.data.spell.lvb }} if you have 63 or more maelstrom and {{ site.data.talent.mote }} buff is *not* active
 - {{ site.data.talent.eb }} if {{ site.data.talent.mote }} buff is active
 - {{ site.data.spell.lb }}

  Note:
 - You do not play around {{ site.data.talent.potm }} procs in single target.
 - You do not play around {{ site.data.talent.eogs }} buffs in single target.

### 2 Targets Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon.
 - {{ site.data.talent.sk }} if you have at least 125 maelstrom with {{ site.data.talent.swelling_maelstrom }} *or* an active {{ site.data.talent.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.talent.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.talent.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.spell.fs }} on one target if the debuff has faded or will in ~5 seconds
 - {{ site.data.spell.frs }} if {{ site.data.talent.if }} buff is up and {{ site.data.talent.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.talent.if }}
 - {{ site.data.spell.lvb }} if you have 50 or more maelstrom, {{ site.data.talent.eogs }} buff is active but {{ site.data.talent.mote }} buff is not
 - {{ site.data.spell.eq }} if {{ site.data.talent.eogs }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvb }} if you have 63 or more maelstrom, {{ site.data.talent.eogs }} and {{ site.data.talent.mote }} buffs are not active
 - {{ site.data.talent.eb }} if {{ site.data.talent.mote }} buff is active and {{ site.data.talent.eogs }} is not
 - {{ site.data.spell.cl }}

  Note:
 - Playing around {{ site.data.talent.potm }} procs is dps neutral, but generally it will be easier and less likely to negatively impact your performance if you ignore them - sometimes you will get lucky and have one during your {{ site.data.talent.sk }} burst though!

### 3 Targets Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon.
 - {{ site.data.talent.sk }} if it is available and no additional targets soon.
 - {{ site.data.spell.eq }} if {{ site.data.talent.eogs }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.talent.if }} buff is up and {{ site.data.talent.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.talent.eb }} if {{ site.data.talent.eogs }} buff is not active
 - {{ site.data.talent.if }}
 - {{ site.data.spell.cl }}

## 4-5 Targets Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon.
 - {{ site.data.talent.sk }} if it is available and no additional targets soon.
 - {{ site.data.spell.eq }} if {{ site.data.talent.eogs }} buff is active
 - {{ site.data.talent.eb }} if {{ site.data.talent.eogs }} buff is not active
 - {{ site.data.spell.cl }}

### 6+ Targets Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon.
 - {{ site.data.talent.sk }} if you have 50 maelstrom and {{ site.data.talent.eogs }} buff is active *or* 75 maelstrom and {{ site.data.talent.eogs }} is not active
 - {{ site.data.spell.cl }} if {{ site.data.talent.sop }} is active
 - {{ site.data.spell.eq }} if {{ site.data.talent.eogs }} buff is active
 - {{ site.data.talent.eb }} if {{ site.data.talent.eogs }} buff is not active
 - {{ site.data.spell.cl }}


</div>
</div>
</div>


<div class="card">
<div class="card-header" id="lisfd">
<div data-toggle="collapse" data-target="#lisfd-collapse" aria-expanded="false" aria-controls="lisfd-collapse" class="builds-header lisfd"><h2>Lightning with Skybreaker's Fiery Demise</h2></div>
</div>
<div id="lisfd-collapse" class="collapse" aria-labelledby="lisfd" data-parent="#accordion-lightning">
<div class="card-body" markdown="1">

## What does this build do?

This build focuses on the power of {{ site.data.spell.lb }}, {{ site.data.spell.cl }} and {{ site.data.talent.eb }} with {{ site.data.talent.eogs }}. It seeks to empower these effects with supporting talents like {{ site.data.talent.e_shocks }}, {{ site.data.talent.se }}, and {{ site.data.talent.lr }}. This variant of Lightning includes {{ site.data.talent.sfd }} to further empower your {{ site.data.talent.lmt }} per-use value in addition to increasing the uptime of {{ site.data.talent.se }} which gets more relevant when pulling high target counts as the majority of your time is spent pressing {{ site.data.spell.cl }} when you hit 5 or more targets. This means that movement globals or {{ site.data.talent.sop }} buffs between 3-5 targets can be very beneficial despite {{ site.data.spell.fs }} not being the main focus.

## What does it look like?
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJJlk0S0Q0SD4ABAAAAAoEgUSiSaCItkkmSIIEBI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

Note:
 - You can build this without {{ site.data.talent.eb }} instead taking {{ site.data.talent.searing_flames }}, {{ site.data.talent.pw }} or even {{ site.data.talent.eote }} (to improve its 1-2 target profile).
 - You may also prefer to include {{ site.data.talent.ns }} in the class tree if the cast time of {{ site.data.talent.eb }} is a hindrance to you.
 - {{ site.data.talent.lmt }} is preferred over {{ site.data.spell.tempest }} (gained via {{ site.data.talent.pe }}) because of its overall value being far higher over the course of a key, {{ site.data.talent.pe }} is only preferable on single target. Whilst this build does utilize more {{ site.data.spell.fs }} than other Lightning variants it will generally not be worthwhile to run {{ site.data.talent.pe }} simply because it is opportunity costed against {{ site.data.talent.lmt }}.
 - You may substitute {{ site.data.talent.sop }} for {{ site.data.talent.afs }} for comfort but it is substantially worse on single target (which is still relevant on bosses in M+!) and worse on 6+ (reliability is key, the gap alters as you add more targets in favor of {{ site.data.talent.afs }}. If you make this substitution simply ignore any line that shows {{ site.data.talent.sop }}; {{ site.data.talent.afs }} has no impact upon priority!

<hr>

## Stats

### Always remember to sim your current options appropriately
 - [Raidbots](https://www.raidbots.com/simbot/topgear)
 - For more information [How Does Elemental Sim?]({{ site.baseurl }}{% link blog/_posts/2023-01-02-simming.md %})

### Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Haste / Crit > Mastery / Vers
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

<hr>


## Rotation

### Key Notes
 - {{ site.data.talent.mote }} is mainly to path to {{ site.data.talent.lmt }}, once you hit 3 targets any sort of gaming the {{ site.data.talent.mote }} buff becomes extremely bad.
 - {{ site.data.talent.lr }} applies to your current target when it does not have an active buff. {{ site.data.spell.eq }} has *some* 'smart' applications to apply to off-targets but results can vary. It is suggested *when you are comfortable enough to do so* to incorporate target swapping after each spender to increase the value gained from {{ site.data.talent.lr }}. If done poorly (i.e. too early in the learning process) this can produce negative results, master the basics then add complexity!
 - {{ site.data.talent.lmt }} is included for its raw damage, don't start to spread {{ site.data.spell.fs }} unless you have to move - in which case it remains a good movement global when {{ site.data.talent.if }} buffed {{ site.data.spell.frs }} aren't available.
 - {{ site.data.talent.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy, whilst it is appreciable that {{ site.data.talent.eb }} reduces the value gained from {{ site.data.talent.sop }} due to being more expensive and producing less buffs overall - this is only true for the 1-4 target range and the value added is still positive, AoE value from {{ site.data.talent.sop }} is unaffected at 6+ targets.
    * 1-2 Targets = {{ site.data.spell.lb }}
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to move and {{ site.data.talent.sop }} buff happens to be up and no {{ site.data.talent.if }} buffs remain
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible
    * {{ site.data.talent.sop }} will also make you want to delay casting {{ site.data.talent.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.

### Opener
Follow the cast sequence below for your opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

~3.5 seconds from boss pull
<div class="opener">
    <div class="skill se"><span>SE</span></div>
    <div class="arrow"></div>
    <div class="skill if"><span>IF</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>...
</div>

AoE openers are less rigid than boss openers. Keep in mind that these will change simply based by what cooldowns you have available on a pull-by-pull basis and you should aim to maximize the value from what is available at that time. Here are some general rules:
   - {{ site.data.talent.lr }} is a rather significant buff to your AoE burst via {{ site.data.talent.sk }}, where possible try to ensure at least one {{ site.data.talent.lr }} buff is running on a target prior to using {{ site.data.talent.sk }} charges!
   - Pool maelstrom at the end of a current pull to have resources available at the start of the next pull, this dramatically improves the consistent performance from pull-to-pull and eases the feeling of 'ramp' time in the rotation.
   - On pulls that include 6+ targets it is ideal to have {{ site.data.talent.sop }} active for both charges of {{ site.data.talent.sk }} and given the maelstrom generated you can cast {{ site.data.spell.eq }} twice between them, this means that if you do not have maelstrom from a previous pack you may need to hold {{ site.data.talent.sk }} until slightly later in the pull or simply forego this value in favor of using {{ site.data.talent.sk }} without {{ site.data.talent.sop }}.
   - Avoid placing {{ site.data.talent.lmt }} prematurely, if the tank does not have sufficient aggro then its possible for it to be killed directly by mobs which greatly reduces its value

### 1 Target Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon. (using {{ site.data.talent.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - {{ site.data.talent.sk }} if you have at least 124 maelstrom with {{ site.data.talent.swelling_maelstrom }} *or* an active {{ site.data.talent.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.talent.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.talent.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.spell.fs }} if the debuff has faded or will in ~5 seconds
 - {{ site.data.spell.frs }} if {{ site.data.talent.if }} buff is up and {{ site.data.talent.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.talent.if }}
 - {{ site.data.spell.lvb }} if you have 63 or more maelstrom and {{ site.data.talent.mote }} buff is *not* active
 - {{ site.data.talent.eb }} if {{ site.data.talent.mote }} buff is active
 - {{ site.data.spell.lb }}

  Note:
 - You do not play around {{ site.data.talent.potm }} procs in single target.
 - You do not play around {{ site.data.talent.eogs }} buffs in single target.

### 2 Targets Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon.
 - {{ site.data.talent.sk }} if you have at least 125 maelstrom with {{ site.data.talent.swelling_maelstrom }} *or* an active {{ site.data.talent.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.talent.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.talent.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} buffs are active
 - {{ site.data.spell.lb }} if {{ site.data.talent.sop }} buff is active
 - {{ site.data.spell.fs }} on both targets if the debuff has faded or will in ~5 seconds
 - {{ site.data.spell.frs }} if {{ site.data.talent.if }} buff is up and {{ site.data.talent.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.talent.if }}
 - {{ site.data.spell.lvb }} if you have 50 or more maelstrom, {{ site.data.talent.eogs }} buff is active but {{ site.data.talent.mote }} buff is not
 - {{ site.data.spell.eq }} if {{ site.data.talent.eogs }} and {{ site.data.talent.mote }} buffs are active
 - {{ site.data.spell.lvb }} if you have 63 or more maelstrom, {{ site.data.talent.eogs }} and {{ site.data.talent.mote }} buffs are not active
 - {{ site.data.talent.eb }} if {{ site.data.talent.mote }} buff is active and {{ site.data.talent.eogs }} is not
 - {{ site.data.spell.cl }}

  Note:
 - Playing around {{ site.data.talent.potm }} procs is dps neutral, but generally it will be easier and less likely to negatively impact your performance if you ignore them - sometimes you will get lucky and have one during your {{ site.data.talent.sk }} burst though!

### 3 Targets Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon.
 - {{ site.data.talent.sk }} if it is available and no additional targets soon.
 - {{ site.data.spell.fs }} to maintain debuffs if {{ site.data.talent.sop }} buff is active (see note below)
 - {{ site.data.spell.eq }} if {{ site.data.talent.eogs }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.talent.if }} buff is up and {{ site.data.talent.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.talent.eb }} if {{ site.data.talent.eogs }} buff is not active
 - {{ site.data.talent.if }}
 - {{ site.data.spell.cl }}

 Note:
 - {{ site.data.spell.fs }} maintenance is dps neutral on 3 targets, and only when {{ site.data.talent.sop }} buffs are utitlised for it - the opportunity cost of not casting {{ site.data.talent.if }} buffed {{ site.data.spell.frs }} or {{ site.data.spell.cl }} is high!

## 4-5 Targets Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon.
 - {{ site.data.talent.sk }} if it is available and no additional targets soon.
 - {{ site.data.spell.fs }} if {{ site.data.talent.sop }} buff is up and you can refresh/apply two
 - {{ site.data.spell.eq }} if {{ site.data.talent.eogs }} buff is active
 - {{ site.data.talent.eb }} if {{ site.data.talent.eogs }} buff is not active
 - {{ site.data.spell.cl }}

  Note:
 - {{ site.data.talent.if }} becomes a dps loss at 4 or more targets, you can use it when you know movement will be needed and it serves as a reduction in loss incurred by movement. Try to utilize {{ site.data.talent.swg }} where possible.

### 6+ Targets Priority
 - {{ site.data.talent.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.talent.lmt }} if it is available and no additional targets soon.
 - {{ site.data.talent.sk }} if you have 50 maelstrom and {{ site.data.talent.eogs }} buff is active *or* 75 maelstrom and {{ site.data.talent.eogs }} is not active
 - {{ site.data.spell.cl }} if {{ site.data.talent.sop }} is active
 - {{ site.data.spell.eq }} if {{ site.data.talent.eogs }} buff is active
 - {{ site.data.talent.eb }} if {{ site.data.talent.eogs }} buff is not active
 - {{ site.data.spell.cl }}

Note:
 - At these target counts ignoring {{ site.data.spell.fs }} was better than playing around it, given {{ site.data.talent.sop }} buffs are far stronger with {{ site.data.spell.cl }} - rely on {{ site.data.talent.lmt }} and movement globals to apply {{ site.data.spell.fs }}.

</div>
</div>
</div>
</div>
