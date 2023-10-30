---
layout: page
title: Builds
last_update: 02/05/2023
game_version: 10.1.0 Dragonflight
toc: true
big_article: true
---

# Welcome, read First

This page aims to display and discuss the recommended and most widely-used Builds available to Elemental. This is not an exhaustive list of all options and *does not imply that any build **not** shown here is automatically terrible/unplayable*.  
In practical terms we cannot account for every build variation and effort has been largely focused on the highest performing / most popular builds. If you find something that you feel works or performs better than what is listed here feel free to contact the team on [Storm, Earth & Lava Discord](https://discord.gg/y5dUf3PWrU) or [Earthshrine #Elemental Channel](https://discord.gg/earthshrine)

<hr>

# Class Tree

It is also important to note that Shamans's class tree does not include DPS increase except for:
- {{ site.data.spell.fire_and_ice }} and {{ site.data.spell.natures_fury }}.
- {{ site.data.spell.totemic_recall }} and {{ site.data.spell.call_of_the_elements }} with {{ site.data.spell.lmt }} talented in the spec tree.
- {{ site.data.spell.frs }} with {{ site.data.spell.if }} talented in the spec tree. {{ site.data.spell.frs }} is recommended in all builds anyway just as a movement global.

That's it. All other talent are purely defensively and utility oriented, making our tree very flexible in the actual choices we get.

Here is a list of some talents that are recommended to get in every situation :
- {{ site.data.spell.as }} and {{ site.data.spell.planes_traveler }}, our defensive CD.
- {{ site.data.spell.swg }} and {{ site.data.spell.graceful_spirit }} for movement.
- {{ site.data.spell.gust_of_wind }} or {{ site.data.spell.spirit_walk }} for movement.
- {{ site.data.spell.ag }} for group healing support.

More situational talents picks:
#### Defensive:
  - {{ site.data.spell.natures_guardian }} and {{ site.data.spell.ancestral_defence }} and {{ site.data.spell.elemental_warding }} are good sustain passives.
  - {{ site.data.spell.ee }} is both a good and a bad defensive. It has a very long CD, making it hard to get reliable uses from it, but also has a very long uptime giving you great tankyness while it's up.
  - {{ site.data.spell.earth_shield }} is a good sustain talent, just remember to refresh it when it falls off. It's also annoying to get since we almost never press {{ site.data.spell.chain_heal }}.
  - {{ site.data.spell.brimming_with_life }} is a terribly designed talent that incites us to save {{ site.data.spell.ankh }} for more max HP. It is still better than nothing for an increase in survivability and overall {{ site.data.spell.ankh }} uses.
  - {{ site.data.spell.healing_stream_totem }}, paired with {{ site.data.spell.swirling_currents }}, is a fire and forget heal assistance on the GCD. It's not bad but certainly not great.

#### Movement:
  - {{ site.data.spell.thunderous_paws }} is great for small burst of mobility and slow dispel, {{ site.data.spell.spirit_wolf }} is a great "long-distance" movement tool.
  - {{ site.data.spell.wind_rush_totem }} is a good group movement talent.
  - {{ site.data.spell.natures_swiftness }} is great to get an extra movement Global. Best used on {{ site.data.spell.eb }} in ST, {{ site.data.spell.cl }} in AoE and {{ site.data.spell.healing_surge }} when low on health.

#### Utility:
  - {{ site.data.spell.totemic_focus }} is great for both {{ site.data.spell.wrt }} duration and {{ site.data.spell.lmt }} width.
  - {{ site.data.spell.mana_spring }} is better in raid content than it is in party, but good nonetheless.
  - {{ site.data.spell.purge }} and {{ site.data.spell.cleanse_spirit }} are perfect examples of good talents that are purely situational and can be skipped in many builds, and picked only when needed.
  - {{ site.data.spell.capacitor_totem }}, {{ site.data.spell.hex }}, {{ site.data.spell.earthgrab_totem }} or {{ site.data.spell.thunderstorm }} are situational Crowd Control talents.

<hr>

# Primordial Surge Builds

Most notably aimed more at the Single Target profiles these variants are used when you need to focus on boss damage by using the inherent strength of combining {{ site.data.spell.ps }} and tools like {{ site.data.spell.dre }} and/or {{ site.data.spell.wlr }} to increase the value and frequency of {{ site.data.spell.lvs }}. Turning your {{ site.data.spell.eb }} and {{ site.data.spell.lvb }} into powerhouses.

<p align="center" style="color:red">Click on a build banner to expand it.</p>

<div class="accordion dungeon-accordion" id="accordion-psurge">
<div class="card">
<div class="card-header" id="pswlr">
<div data-toggle="collapse" data-target="#pswlr-collapse" aria-expanded="false" aria-controls="pswlr-collapse" class="builds-header pswlr"><h2>Primordial Surge with Windspeakers</h2></div>
</div>
<div id="pswlr-collapse" class="collapse" aria-labelledby="pswlr" data-parent="#accordion-psurge">
<div class="card-body" markdown="1">

## What does this build do?

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.spell.eb }}, supported by the idea of {{ site.data.spell.pw }} 'windows'.
As the name suggests this is predominately aimed at single target but due to taking {{ site.data.spell.lvs }}, {{ site.data.spell.magma_chamber }} and {{ site.data.spell.pw }} it will naturally benefit from a couple of additional targets.

## What does it look like?

### Standard build
{{ site.data.spell.eeq }} is *usually* the best single point to get for a Single Target fight. Be sure to sim for your best option.
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCgDkUSShSUikQEAAAAAgSAJlkgmASLJpBCCJJBC?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### LMT Variant
{{ site.data.spell.lmt }} can be used on fight with some adds to gain some cleave but where the only thing that matters is Single Target (such as Sennarth).
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
 - Straightforward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.spell.eb }}, {{ site.data.spell.if }} and {{ site.data.spell.frs }} become improved filler spells.
 - Don't forget that {{ site.data.spell.wlr }} provides a {{ site.data.spell.lvs }} proc after each {{ site.data.spell.eb }}! Use these immediately afterwards in all cases!
 - {{ site.data.spell.if }} and {{ site.data.spell.frs }} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.spell.ps }} and its supporting talents you should continue to utilize {{ site.data.spell.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.spell.eb }} at 4 or more targets.
 - {{ site.data.spell.dre }} procs do not impact rotation priority and should be read the same regardless. In practice this means 'filler' spells like {{ site.data.spell.if }} and buffed {{ site.data.spell.frs }} are eliminated when {{ site.data.spell.dre }} procs happen *unless you have to move* because {{ site.data.spell.lvb }} will always be available during them. You will also continue to spend maelstrom on {{ site.data.spell.eb }} as usual.
 - If talented, use {{ site.data.spell.lmt }} on CD if no adds are going to spawn soon.

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
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.spell.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.frs }} if you have {{ site.data.spell.if }} buff active
 - {{ site.data.spell.icefury }}
 - {{ site.data.spell.lb }}

### 2 Targets Priority
If you find yourself using this build on 2 or more targets it is less than ideal.
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 3 Targets Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 4 Targets Priority
If you find yourself using this build on 4 or more targets it is less than ideal
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 5+ Targets Priority
If you find yourself using this build on 5 or more targets it is less than ideal
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
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

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.spell.eb }}, supported by the idea of {{ site.data.spell.pw }} 'windows'.
As this build takes {{ site.data.spell.dre }} and extends to {{ site.data.spell.fb }} a fair amount of its power comes from maximizing {{ site.data.spell.lvb }} usage, particularly {{ site.data.spell.lvs }}, to have the most chances at gambling {{ site.data.spell.dre }} which {{ site.data.spell.ps }} naturally assists with.

## What does it look like?

### Standard build
{{ site.data.spell.eeq }} is *usually* the best single point to get for a Single Target fight. Be sure to sim for your best option.
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCgDkUSSJpEIJEBAAAAAoEQSJJoJg0SSaggQSSgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### LMT Variant
{{ site.data.spell.lmt }} can be used on fight with some adds to gain some cleave but where the only thing that matters is Single Target (such as Sennarth).
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
 - This variant includes {{ site.data.spell.fb }} which will inevitably increase the pull-to-pull variance in your damage that you see in-game *and* is not simulated with movement in mind when using default Patchwerk sims, this means it may not be the proper choice in real raid scenarios if you're looking to do the most damage and more importantly if you need to do that damage consistently and reliably! It is however extremely fun to manage procs and highroll, best of luck to you!
 - Straightforward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.spell.eb }}, {{ site.data.spell.if }} and {{ site.data.spell.frs }} become improved filler spells.
 - {{ site.data.spell.if }} and {{ site.data.spell.frs }} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.spell.ps }} and {{ site.data.spell.dre }} with its supporting talents you should continue to utilize {{ site.data.spell.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.spell.eb }} at 4 or more targets.
 - {{ site.data.spell.lvbm }} replaces {{ site.data.spell.lvb }} at 4 or more targets.
 - {{ site.data.spell.fb }} makes you value maelstrom generation very highly during AoE, which displaces regular {{ site.data.spell.lvb }} casts entirely at 4+ targets. This is predominately a single-target build so AoE is not its main function.
 - If talented, use {{ site.data.spell.lmt }} on CD if no adds are going to spawn soon.

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
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.spell.eb }} if you have {{ site.data.spell.dre }} proc active to extend duration
 - {{ site.data.spell.eb }} if you are approaching ~135 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.frs }} if you have {{ site.data.spell.if }} buff active
 - {{ site.data.spell.icefury }}
 - {{ site.data.spell.lb }}
    *  {{ site.data.spell.eb }} is only listed when {{ site.data.spell.dre }} proc or maelstrom overcap would happen because you want to enter these procs with as high maelstrom as possible due to {{ site.data.spell.fb }}, in an ideal world you would only spend during {{ site.data.spell.dre }} procs but inevitably you will need to avoid overcapping outside of these procs as well.

### 2 Targets Priority
If you find yourself using this build on 2 or more targets it is less than ideal.
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eb }} if you have {{ site.data.spell.dre }} proc active to extend duration
 - {{ site.data.spell.eb }} if you are approaching ~135 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}
 - {{ site.data.spell.frs }} if you have {{ site.data.spell.if }} buff active *and* need to move
 - {{ site.data.spell.if }} if you expect to move soon and {{ site.data.spell.swg }} is not available, otherwise do not use.

### 3 Targets Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eb }} if you have {{ site.data.spell.dre }} proc active to extend duration
 - {{ site.data.spell.eb }} if you are approaching ~135 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 4 Targets Priority
If you find yourself using this build on 4 or more targets it is less than ideal
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.dre }} proc is active and you will finish the cast
 - {{ site.data.spell.cl }}

### 5+ Targets Priority
If you find yourself using this build on 5 or more targets it is less than ideal
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.dre }} proc is active and you will finish the cast
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

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.spell.eb }}, supported by the idea of {{ site.data.spell.pw }} 'windows'.
This build effectively swaps {{ site.data.spell.wlr }} or {{ site.data.spell.fb }} for {{ site.data.spell.mwf }}, which reduces the perceived complexity from this build allowing you to focus more completely on the {{ site.data.spell.lvs }} provided by {{ site.data.spell.ps }} and effective spending of maelstrom.

## What does it look like?

### Standard build
{{ site.data.spell.eeq }} is *usually* the best single point to get for a Single Target fight. Be sure to sim for your best option.
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCgDkUSShSgkkEBAAAAAoEQSJJoJg0SSaggQSSgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### LMT Variant
{{ site.data.spell.lmt }} can be used on fight with some adds to gain some cleave but where the only thing that matters is Single Target (such as Sennarth).
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
 - Straightforward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.spell.eb }}, {{ site.data.spell.if }} and {{ site.data.spell.frs }} become improved filler spells.
 - {{ site.data.spell.if }} and {{ site.data.spell.frs }} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.spell.ps }} and {{ site.data.spell.dre }} with its supporting talents you should continue to utilize {{ site.data.spell.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.spell.eb }} at 4 or more targets.
 - {{ site.data.spell.dre }} procs do not impact rotation priority and should be read the same regardless. In practice this means 'filler' spells like {{ site.data.spell.if }} and buffed {{ site.data.spell.frs }} are eliminated when {{ site.data.spell.dre }} procs happen *unless you have to move* because {{ site.data.spell.lvb }} will always be available during them. You will also continue to spend maelstrom on {{ site.data.spell.eb }} as usual.
 - If talented, use {{ site.data.spell.lmt }} on CD if no adds are going to spawn soon.
 - {{ site.data.spell.lmt }}’s periodic damage scales dynamically with haste, therefore it can be used to setup a pull by applying {{ site.data.spell.fs }} before gaining the {{ site.data.spell.splinter }} haste buff without losing out on too much potential damage. You should still aim to use {{ site.data.spell.lmt }} while having the {{ site.data.spell.splinter }} haste buff or {{ site.data.spell.bl }} if possible, but don't lose setup time for it.

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
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.spell.eb }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.frs }} if you have {{ site.data.spell.if }} buff active
 - {{ site.data.spell.icefury }}
 - {{ site.data.spell.lb }}

### 2 Targets Priority
If you find yourself using this build on 2 or more targets it is less than ideal.
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eb }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}
 - {{ site.data.spell.frs }} if you have {{ site.data.spell.if }} buff active *and* need to move
 - {{ site.data.spell.if }} if you expect to move soon and {{ site.data.spell.swg }} is not available, otherwise do not use.

### 3 Targets Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eb }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 4 Targets Priority
If you find yourself using this build on 4 or more targets it is less than ideal
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.dre }} proc is active and you will finish the cast (if you will not, revert to {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 5+ Targets Priority
If you find yourself using this build on 5 or more targets it is less than ideal
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.dre }} proc is active and you will finish the cast (if you will not, revert to {{ site.data.spell.lvb }}
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

This is a Single Target build that allows Regular AoE Burst. It is best used on fights like Eranog or Dungeon like {{ site.data.dungeon.cos.cos }}.
This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.spell.eb }}, supported by the idea of {{ site.data.spell.pw }} 'windows'. But it also uses {{ site.data.spell.sk }} and {{ site.data.spell.sop }} to empower our burst potential, both in ST and in AoE.
This build can be harder to play effectively as it requires you to play around both {{ site.data.spell.pw }} 'windows' and the combination of  {{ site.data.spell.sop }} with {{ site.data.spell.sk }}.

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
 - Mastery has very good synergy with both {{ site.data.spell.mwf }} and {{ site.data.spell.lvb }}.

<hr>

## Rotation

### Key Notes
- This build is best used on single target fights with regular Adds spawns or burst windows.
- {{ site.data.spell.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy, whilst it is appreciable that {{ site.data.spell.eb }} reduces the value gained from {{ site.data.spell.sop }} due to being more expensive and producing less buffs overall - this is only true for the 1-4 target range and the value added is still positive, AoE value from {{ site.data.spell.sop }} is unaffected at 6+ targets.
    * 1-2 Targets = {{ site.data.spell.lb }} (or {{ site.data.spell.lvb }} on {{ site.data.spell.dre }} procs)
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to move and {{ site.data.spell.sop }} buff happens to be up and no {{ site.data.spell.if }} buffs remain
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible
    * {{ site.data.spell.sop }} will also make you want to delay casting {{ site.data.spell.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.
- Due to elements like {{ site.data.spell.ps }} and {{ site.data.spell.dre }} with its supporting talents you should continue to utilize {{ site.data.spell.lvs }} procs even if you end up facing multiple targets.
- {{ site.data.spell.eq }} replaces {{ site.data.spell.eb }} at 4 or more targets.
- {{ site.data.spell.lmt }} is included for its raw damage, don't start to spread {{ site.data.spell.fs }} unless you have to move - in which case it remains a good movement global.

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
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon. (using {{ site.data.spell.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - {{ site.data.spell.sk }} if you have an active {{ site.data.spell.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.spell.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.spell.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.pw }} if it is available (maintain {{ site.data.spell.fs }} at all time)
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.eb }} if you are approaching ~85 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.eb }}, preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.lb }} if {{ site.data.spell.sk }} is active
 - {{ site.data.spell.lb }}

### 2 Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon. (using {{ site.data.spell.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - {{ site.data.spell.sk }} if you have an active {{ site.data.spell.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.spell.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.spell.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.pw }} if it is available (maintain {{ site.data.spell.fs }} on both target at all times)
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.eb }} if you are approaching ~85 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.eb }}, preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.spell.sk }} is active
 - {{ site.data.spell.cl }}
  Note:
 - Playing around {{ site.data.spell.potm }} procs is dps neutral, but generally it will be easier and less likely to negatively impact your performance if you ignore them - sometimes you will get lucky and have one during your {{ site.data.spell.sk }} burst though!

### 3 Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon. (using {{ site.data.spell.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one and {{ site.data.spell.sop }} spreads it!
 - {{ site.data.spell.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.spell.sk }} buff is active, preferably with {{ site.data.spell.mote }} buff active!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eb }}, preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }} if {{ site.data.spell.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

## 4-5 Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon. (using {{ site.data.spell.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one and {{ site.data.spell.sop }} spreads it!
 - {{ site.data.spell.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.spell.sk }} buff is active, preferably with {{ site.data.spell.mote }} buff active!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }}, preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 6+ Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon. (using {{ site.data.spell.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - Maintain {{ site.data.spell.fs }} as many targets as possible, don't forget {{ site.data.spell.pw }} applies one (Do not use {{ site.data.spell.sop }} to spread it!
 - {{ site.data.spell.sk }} if it is available and you have at least enough maelstrom to cast {{ site.data.spell.eq }} after to {{ site.data.spell.sop }} buff the charges!
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} when {{ site.data.spell.sk }} buff is active, preferably with {{ site.data.spell.sop }} buff
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

</div>
</div>
</div>
</div>

<hr>

# Wildfire Builds

Predominately aimed at M+ content these build variants focus on the power of {{ site.data.spell.fs }} and its supporting talents to deal AoE damage, all variants include {{ site.data.spell.dre }} by default as the build spends a lot of its time using the {{ site.data.spell.lvs }} procs it generates so it provides a lot of value on average but is not the focus of the build - if desired you can swap this point to a more consistent option.

<p align="center" style="color:red">Click on a build banner to expand it.</p>

<div class="accordion dungeon-accordion" id="accordion-wildfire">
<div class="card">
<div class="card-header" id="wfaoe">
<div data-toggle="collapse" data-target="#wfaoe-collapse" aria-expanded="false" aria-controls="wfaoe-collapse" class="builds-header wfaoe"><h2>Wildfire "Full" AoE</h2></div>
</div>
<div id="wfaoe-collapse" class="collapse" aria-labelledby="wfaoe" data-parent="#accordion-wildfire">
<div class="card-body" markdown="1">

## What does this build do?

We heard you like {{ site.data.spell.fs }} and {{ site.data.spell.lvs }} so this build is entirely committed to the idea of maintaining {{ site.data.spell.fs }} on multiple targets and utilizing all the benefits associated with consuming {{ site.data.spell.lvs }}.

Staples of wildfire as a M+ include {{ site.data.spell.sfd }}, {{ site.data.spell.splinter }}, {{ site.data.spell.sk }}. There are more swaps you could make within this archetype like {{ site.data.spell.sop }} swapped for {{ site.data.spell.afs }} which significantly simplifies your perceived gameplay, but in reality is weaker in most ways so all the variants below use {{ site.data.spell.sop }}.

## What does it look like?

There are multiple possible variants of this build that do not include rotational priority changes, these will all play similarly and you can choose between them based on personal preference and/or sim results. The 4 builds linked below are, at least in my opinion, the 'standard' setups with one taking {{ site.data.spell.imp_ftw }} with {{ site.data.spell.potm }}, another opting to go for {{ site.data.spell.flow_of_power }} and {{ site.data.spell.swelling_maelstrom }}, another one playing {{ site.data.spell.searing_flames }} instead of {{ site.data.spell.echo_chamber }} and the last one simply taking {{ site.data.spell.if }} and {{ site.data.spell.electrified_shocks }}.

### Standard build without Elemental Blast
The standard build for a non-{{ site.data.spell.eb }} build.
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkACSjS0SLJOQOAAAAAAgSASJJKpJg0SSaKhgQEgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

### Swelling Maelstrom Variant
{{ site.data.spell.swelling_maelstrom }} will give you more room to effectively use your {{ site.data.spell.sop }} and pool Maelstrom.
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0Sr0SSLJgQSjS0STCRAAAAAAKBIlkokmASLJppECCRAC?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

### Searing Flames Variant
For better overall Maelstrom generation.
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkACSjSOQLtkQOAAAAAAgSASJJKpJg0SSaKhgQEgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

### Icefury Variant
{{ site.data.spell.if }} gives use some cleave in low target count and flows nicely for Maelstrom generation.
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
 - {{ site.data.spell.lmt }}’s periodic damage scales dynamically with haste, therefore it can be used to setup a pull by applying {{ site.data.spell.fs }} before gaining the {{ site.data.spell.splinter }} haste buff without losing out on too much potential damage. You should still aim to use {{ site.data.spell.lmt }} while having the {{ site.data.spell.splinter }} haste buff or {{ site.data.spell.bl }} if possible, but don't lose setup time for it.
 - {{ site.data.spell.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy
    * 1-2 Targets = {{ site.data.spell.lb }}
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to spread {{ site.data.spell.fs }}, otherwise ignore and waste {{ site.data.spell.sop }} buffs.
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible, if you have to move then using a buff on {{ site.data.spell.fs }} is fine too
    * {{ site.data.spell.sop }} will also make you want to delay casting {{ site.data.spell.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.
 - {{ site.data.spell.dre }} procs do not really change the priority of what you're doing, they mainly act to provide value from not having to manually refresh your current {{ site.data.spell.fs }} dots and that translates into more {{ site.data.spell.cl }} casts which leads to more {{ site.data.spell.eq }} casts. Note: {{ site.data.spell.lvbm }} replaces {{ site.data.spell.cl }} in the priority when {{ site.data.spell.dre }} procs are active but you should ensure you have enough time to finish the cast inside the {{ site.data.spell.dre }} buff otherwise the cast will cancel.
 - It can be tempting to try and use every {{ site.data.spell.lvs }} proc during mass AoE but generally you're going to use them when you have to move when AoEing or when you'd have enough maelstrom to {{ site.data.spell.eq }} afterwards which benefits from {{ site.data.spell.mote }}. This strikes a better balance between fishing for {{ site.data.spell.dre }} procs and reliably good AoE damage. Feel free to prioritize {{ site.data.spell.lvs }} more if a priority target is up and needs to die fast!

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
   - Though spreading {{ site.data.spell.fs }} to multiple targets is good, it should not be viewed as a requirement to reach 6 before doing damage in all cases. In cases where you have {{ site.data.spell.lmt }} and {{ site.data.spell.totemic_recall }} available, this is quite achievable, in cases where you don't you should be prepared to trigger {{ site.data.spell.splinter }}'s effect with 4-5 targets. If you have maelstrom left from a previous pack (and you should!) this process becomes more fluid and you can spread {{ site.data.spell.fs }} whilst the tank is gathering mobs.
   - On pulls that include 6+ targets it is ideal to have {{ site.data.spell.sop }} active for both charges of {{ site.data.spell.sk }} and given the maelstrom generated you can cast {{ site.data.spell.eq }} twice between them, this means that if you do not have maelstrom from a previous pack you may need to hold {{ site.data.spell.sk }} until slightly later in the pull or simply forego this value in favor of using {{ site.data.spell.sk }} without {{ site.data.spell.sop }}.
   - Avoid placing {{ site.data.spell.lmt }} prematurely, if the tank does not have sufficient aggro then its possible for it to be killed directly by mobs which greatly reduces its value

### 1 Target Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.sk }} if you have at least 83 maelstrom (without {{ site.data.spell.potm }} or 80 with {{ site.data.spell.potm }}). This ensures you can buff both charges.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.pw }} if it is available and no additional targets will be available soon
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.spell.icefury }} buff is active and {{ site.data.spell.e_shocks }} debuff is not
 - {{ site.data.spell.lvb }} if {{ site.data.spell.dre }} proc is active. Note: if you have to move you will still cast {{ site.data.spell.es }} as below, and continue to follow the priorities above!
 - {{ site.data.spell.es }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.if }}
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.lb }}
 - Refresh {{ site.data.spell.fs }} or cast {{ site.data.spell.frs }} when moving

  Note: You do not play around {{ site.data.spell.potm }} procs in single target.

### 2 Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.sk }} if you have at least 83 maelstrom (without {{ site.data.spell.potm }} or 80 with {{ site.data.spell.potm }}. This ensures you can buff both charges.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.pw }} if it is available and no additional targets will be available soon
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.frs }} if {{ site.data.spell.icefury }} buff is active and {{ site.data.spell.e_shocks }} debuff is not
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} buff is active
 - {{ site.data.spell.if }}
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 3-5 Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.spell.sk }} buff is active, preferably with {{ site.data.spell.mote }} buff active!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.frs }} if {{ site.data.spell.icefury }} buff is active and {{ site.data.spell.e_shocks }} debuff is not (Note: do not do this against 5 or more targets unless moving)
 - {{ site.data.spell.if }} (Note: do not do this against 5 or more targets unless moving soon)
 - {{ site.data.spell.lvb }} if {{ site.data.spell.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 6+ Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.sk }} if it is available and you have at least enough maelstrom to cast {{ site.data.spell.eq }} after to {{ site.data.spell.sop }} buff the charges!
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} when {{ site.data.spell.sk }} buff is active, preferably with {{ site.data.spell.sop }} buff
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }} if {{ site.data.spell.mote }} buff is not active
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

We heard you like {{ site.data.spell.fs }} and {{ site.data.spell.lvs }} so this build is entirely committed to the idea of maintaining {{ site.data.spell.fs }} on multiple targets and utilizing all the benefits associated with consuming {{ site.data.spell.lvs }}. These variants of Wildfire also include {{ site.data.spell.eb }} for its high power in single target and low target scenarios with relatively minor impact on total AoE value.

Staples of wildfire as a M+ include {{ site.data.spell.sfd }}, {{ site.data.spell.splinter }}, {{ site.data.spell.sk }}. There are more swaps you could make within this archetype like {{ site.data.spell.sop }} swapped for {{ site.data.spell.afs }} which significantly simplifies your perceived gameplay, but in reality is weaker in most ways so all the variants below use {{ site.data.spell.sop }}.

## What does it look like?

There are multiple possible variants of this build that do not include rotational priority changes. They will all play similarly and you can choose between them based on personal preference and/or sim results. The two variants shown above are the common builds that include {{ site.data.spell.eb }} in a Wildfire setup - this is not the only way. The structure is similar to the variants without {{ site.data.spell.eb }} so learning how {{ site.data.spell.eb }} changes the rotation is the only real barrier.
You might also want to include {{ site.data.spell.ns }} in the class tree if the cast time of {{ site.data.spell.eb }} is a hindrance to you.

### Standard build
The standard {{ site.data.dungeon.eb }} build.

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkAJINKRLtkQOAAAAAAgSASJJKpJg0SSaKhgQEgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### Icefury Variant
{{ site.data.spell.if }} gives use some cleave in low target count and flows nicely for Maelstrom generation.

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
 - {{ site.data.spell.lmt }}’s periodic damage scales dynamically with haste, therefore it can be used to setup a pull by applying {{ site.data.spell.fs }} before gaining the {{ site.data.spell.splinter }} haste buff without losing out on too much potential damage. You should still aim to use {{ site.data.spell.lmt }} while having the {{ site.data.spell.splinter }} haste buff or {{ site.data.spell.bl }} if possible, but don't lose setup time for it.
 - {{ site.data.spell.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy, whilst it is appreciable that {{ site.data.spell.eb }} reduces the value gained from {{ site.data.spell.sop }} due to being more expensive and producing less buffs overall - this is only true for the 1-4 target range and the value added is still positive, AoE value from {{ site.data.spell.sop }} is unaffected at 6+ targets.
    * 1-2 Targets = {{ site.data.spell.lb }}
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to spread {{ site.data.spell.fs }}, otherwise ignore and waste {{ site.data.spell.sop }} buffs.
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible, if you have to move then using a buff on {{ site.data.spell.fs }} is fine too
    * {{ site.data.spell.sop }} will also make you want to delay casting {{ site.data.spell.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.
 - {{ site.data.spell.dre }} procs do not really change the priority of what you're doing, they mainly act to provide value from not having to manually refresh your current {{ site.data.spell.fs }} dots and that translates into more {{ site.data.spell.cl }} casts which leads to more {{ site.data.spell.eq }} casts. Note: {{ site.data.spell.lvbm }} replaces {{ site.data.spell.cl }} in the priority when {{ site.data.spell.dre }} procs are active but you should ensure you have enough time to finish the cast inside the {{ site.data.spell.dre }} buff otherwise the cast will cancel.
 - It can be tempting to try and use every {{ site.data.spell.lvs }} proc during mass AoE but generally you're going to use them when you have to move when AoEing or when you'd have enough maelstrom to {{ site.data.spell.eq }} afterwards which benefits from {{ site.data.spell.mote }}. This strikes a better balance between fishing for {{ site.data.spell.dre }} procs and reliably good AoE damage. Feel free to prioritize {{ site.data.spell.lvs }} more if a priority target is up and needs to die fast!

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
   - Though spreading {{ site.data.spell.fs }} to multiple targets is good, it should not be viewed as a requirement to reach 6 before doing damage in all cases. In cases where you have {{ site.data.spell.lmt }} and {{ site.data.spell.totemic_recall }} available, this is quite achievable, in cases where you don't you should be prepared to trigger {{ site.data.spell.splinter }}'s effect with 4-5 targets. If you have maelstrom left from a previous pack (and you should!) this process becomes more fluid and you can spread {{ site.data.spell.fs }} whilst the tank is gathering mobs.
   - On pulls that include 6+ targets it is ideal to have {{ site.data.spell.sop }} active for both charges of {{ site.data.spell.sk }} and given the maelstrom generated you can cast {{ site.data.spell.eq }} twice between them, this means that if you do not have maelstrom from a previous pack you may need to hold {{ site.data.spell.sk }} until slightly later in the pull or simply forego this value in favor of using {{ site.data.spell.sk }} without {{ site.data.spell.sop }}.
   - Avoid placing {{ site.data.spell.lmt }} prematurely, if the tank does not have sufficient aggro then its possible for it to be killed directly by mobs which greatly reduces its value

### 1 Target Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon
 - {{ site.data.spell.sk }} if you have at least 75 maelstrom and did not take {{ site.data.spell.swelling_maelstrom }} *or* an active {{ site.data.spell.sop }} buff. This will enable you to buff one of your {{ site.data.spell.sk }} charges.
 - {{ site.data.spell.sk }} if you have at least 124 maelstrom with {{ site.data.spell.swelling_maelstrom }} *or* an active {{ site.data.spell.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.spell.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.spell.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.pw }} if it is available and no additional targets will be available soon
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.eb }} preferably with {{ site.data.spell.mote }} buff active, to avoid overcapping
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.lvb }} if {{ site.data.spell.dre }} proc is active.
 - {{ site.data.spell.frs }} if {{ site.data.spell.icefury }} buff is active and {{ site.data.spell.e_shocks }} debuff is not
 - {{ site.data.spell.if }}
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.lb }}
 - Refresh {{ site.data.spell.fs }} or cast {{ site.data.spell.frs }} when moving

  Note: You do not play around {{ site.data.spell.potm }} procs in single target.

### 2 Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon
 - {{ site.data.spell.sk }} if you have at least 75 maelstrom and did not take {{ site.data.spell.swelling_maelstrom }} *or* an active {{ site.data.spell.sop }} buff. This will enable you to buff one of your {{ site.data.spell.sk }} charges.
 - {{ site.data.spell.sk }} if you have at least 124 maelstrom with {{ site.data.spell.swelling_maelstrom }} *or* an active {{ site.data.spell.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.spell.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.spell.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.pw }} if it is available and no additional targets will be available soon
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.eb }} preferably with {{ site.data.spell.mote }} buff active, to avoid overcapping
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.spell.icefury }} buff is active and {{ site.data.spell.e_shocks }} debuff is not
 - {{ site.data.spell.if }}
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} buff is active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 3 Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon
 - {{ site.data.spell.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.spell.sk }} buff is active, preferably with {{ site.data.spell.mote }} buff active!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.eb }} preferably with {{ site.data.spell.mote }} buff active, to avoid overcapping
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.frs }} if {{ site.data.spell.icefury }} buff is active and {{ site.data.spell.e_shocks }} debuff is not
 - {{ site.data.spell.lvb }} if {{ site.data.spell.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 4 Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon
 - {{ site.data.spell.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.spell.sk }} buff is active, preferably with {{ site.data.spell.mote }} buff active!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.frs }} if {{ site.data.spell.icefury }} buff is active and {{ site.data.spell.e_shocks }} debuff is not
 - {{ site.data.spell.if }}
 - {{ site.data.spell.lvb }} if {{ site.data.spell.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

## 5 Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon
 - {{ site.data.spell.sk }} if it is available and there is no reason to hold its use
 - {{ site.data.spell.cl }} if {{ site.data.spell.sk }} buff is active, preferably with {{ site.data.spell.mote }} buff active!
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }} if {{ site.data.spell.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

### 6+ Targets Priority
 - {{ site.data.spell.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.spell.pw }} applies one!
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon
 - {{ site.data.spell.sk }} if it is available and you have at least enough maelstrom to cast {{ site.data.spell.eq }} after to {{ site.data.spell.sop }} buff the charges!
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} when {{ site.data.spell.sk }} buff is active, preferably with {{ site.data.spell.sop }} buff
 - {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.spell.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.spell.mote }} buff active
 - {{ site.data.spell.cl }} if {{ site.data.spell.potm }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvbm }} if {{ site.data.spell.mote }} buff is active and you will finish the cast
 - {{ site.data.spell.lvb }} if {{ site.data.spell.mote }} buff is not active
 - {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

</div>
</div>
</div>
</div>

<hr>

# Lightning Builds

Exactly what it says on the tin, for the friends with a penchant for Lightning! Lightning offers a great way to cater to multiple damage profiles, rarely sacrificing single target for AoE. It also plays differently to the fire builds, placing much more emphasis on {{ site.data.spell.cl }} to generate quickly at high target counts.

<p align="center" style="color:red">Click on a build banner to expand it.</p>

<div class="accordion dungeon-accordion" id="accordion-lightning">
<div class="card">
<div class="card-header" id="liwlr">
<div data-toggle="collapse" data-target="#liwlr-collapse" aria-expanded="false" aria-controls="liwlr-collapse" class="builds-header liwlr"><h2>Lightning ST with Windspeakers</h2></div>
</div>
<div id="liwlr-collapse" class="collapse" aria-labelledby="liwlr" data-parent="#accordion-lightning">
<div class="card-body" markdown="1">

## What does this build do?

This build is a Single Target one that focuses on the power of {{ site.data.spell.lb }} and {{ site.data.spell.eb }}. It seeks to empower its core spells with supporting talents like {{ site.data.spell.e_shocks }}, {{ site.data.spell.se }}, {{ site.data.spell.sop }} and {{ site.data.spell.lr }}, but also use {{ site.data.spell.lvb }} as an enabler with {{ site.data.spell.wlr }}, {{ site.data.spell.mote }} and {{ site.data.spell.potm }}.

This build rotation is fairly strict, playing around the {{ site.data.spell.e_shocks }} debuff in mostly the same way each time.

## What does it look like?
### "Standard" Build
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSCIlkgmkCSLJpFIIkAI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### FoL Variant
- This variant drops {{ site.data.spell.eb }}, taking {{ site.data.spell.fol }} instead. The focus of the build being Single Target, having a higher density of {{ site.data.spell.sop }} due to {{ site.data.spell.es }} cost being lower can somewhat compete with the raw damage of {{ site.data.spell.eb }}.
- {{ site.data.spell.fol }} will have good defensive value, allowing you to cast {{ site.data.spell.as }} more often (see [this blogpost for a list of spells affected by {{ site.data.spell.fol }}]({{ site.baseurl }}{%link blog/_posts/2023-01-23-fol.md %})).
- If you decide to play this variant, simply change {{ site.data.spell.eb }} to {{ site.data.spell.es }} in the rest of this guide.

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJRJSLRDRJQiEAAAAAgSCIlkgmkCSLJpFIIkAI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
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
- Having some amount of Vers is never bad as it will increase your passive survivability.

<hr>

## Rotation

### Key Notes
- You want to maximize the uptime of {{ site.data.spell.e_shocks }} on your target and use {{ site.data.spell.lvb }}, {{ site.data.spell.eb }} and {{ site.data.spell.lb }} in that order as much as possible during {{ site.data.spell.e_shocks }}.
- {{ site.data.spell.lvs }} gained from {{ site.data.spell.wlr }} should be held to empower your next spender (which can be in 5 to 8 seconds).
- If you are in combat with 2, 3 or more targets for an extended period of time, consider using the Lightning WLR with EoGS build just below as it's much better in cleave situations.
- Once you hit 3 targets, any sort of gaming the {{ site.data.spell.mote }} buff becomes extremely bad. In practice, this also makes the points spent in {{ site.data.spell.potm }} near worthless however they are also needed for {{ site.data.spell.echo_chamber }} and {{ site.data.spell.mwf }}.
- {{ site.data.spell.lr }} applies to your current target when it does not have an active buff. {{ site.data.spell.eq }} has *some* 'smart' applications to apply to off-targets but results can vary. It is suggested *when you are comfortable enough to do so* to incorporate target swapping after each spender to increase the value gained from {{ site.data.spell.lr }}. If done poorly (i.e. too early in the learning process) this can produce negative results, master the basics then add complexity!
- {{ site.data.spell.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy:
  * 1-2 Targets = {{ site.data.spell.lb }}
  * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to move and {{ site.data.spell.sop }} buff happens to be up and no {{ site.data.spell.if }} buffs remain
  * 6+ Targets = {{ site.data.spell.cl }} whenever possible
  * {{ site.data.spell.sop }} will also make you want to delay casting {{ site.data.spell.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.

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
    <div class="skill frs"><span>FrS</span></div>
    <div class="arrow"></div>
    <div class="text">Use {{ site.data.spell.lb }} up to 76 maelstrom and do a {{ site.data.spell.e_shocks }} with {{ site.data.spell.sk }} window (see below)</div>
</div>

<br>

### Spender Window

This cast-sequence will be your main way of dealing damage. You want:
- at least 63 maelstrom at the start to be able to cast {{ site.data.spell.eb }}.
- {{ site.data.spell.fs }} and {{ site.data.spell.e_shocks }} to both be active on your target for the next 5 seconds. Those 5 seconds ensure that all the overloads you generate will hit the target while {{ site.data.spell.e_shocks }} is active.

<div class="opener">
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
</div>

The idea is simple:
- Have {{ site.data.spell.e_shocks }} applied to the enemy.
- Use {{ site.data.spell.lvb }} (if possible with {{ site.data.spell.lvs }} from {{ site.data.spell.wlr }}) to gain {{ site.data.spell.mote }}.
- Use {{ site.data.spell.eb }} to gain {{ site.data.spell.sop }}
- Use {{ site.data.spell.lb }} to maximize the damage gain from {{ site.data.spell.sop }}, {{ site.data.spell.lr }} and {{ site.data.spell.e_shocks }} while generating Maelstrom to execute the window again.
- You want to use your CD and various enablers outside of this window.

<br>

### Stormkeeper Window

You want these pre-requisite before doing this cast-sequence:
- {{ site.data.spell.sk }} active
- {{ site.data.spell.fs }} will be active for the next 10 seconds.
- {{ site.data.spell.e_shocks }} to be active on your target for the next 5 seconds. Those 5 seconds ensure that all the overloads you generate will hit the target while {{ site.data.spell.e_shocks }} is active.
- You have at least 90 Maelstrom.
- if {{ site.data.spell.e_shocks }} is active and has more than 5 seconds remaining, you have {{ site.data.spell.if }} active with at least 1 charges and at least 5 seconds remaining.

*Note: You can refresh {{ site.data.spell.fs }} after the first {{ site.data.spell.lb }} if needed, but be careful not to let your other buffs expire.*

<div class="opener">
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>
    <div class="skill frs"><span>FrS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
</div>

<br>

### 1 Target Priority
- {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
- Outside or near the end of {{ site.data.spell.e_shocks }}, refresh {{ site.data.spell.fs }} when it's faded or will in ~5 seconds.
- {{ site.data.spell.fs }} if {{ site.data.spell.e_shocks }} debuff is not active or will fade and {{ site.data.spell.fs }} has faded or will in ~8 seconds.
- {{ site.data.spell.sk }} if you are able to fully execute the [Stormkeeper Window](https://stormearthandlava.com/guide/general/builds.html#stormkeeper-window) described above.
- {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active.
- {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and either.
  * {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast.
  * {{ site.data.spell.sk }} buff is active and {{ site.data.spell.e_shocks }} has less than 5 seconds remaining.
- {{ site.data.spell.lvb }} if you are able to fully execute the [Spender Window](https://stormearthandlava.com/guide/general/builds.html#spender-window) described above.
- {{ site.data.spell.eb }} with {{ site.data.spell.e_shocks }} and {{ site.data.spell.mote }}.
- {{ site.data.spell.if }}.
- {{ site.data.spell.lb }}.

*Note: To put it simply, use {{ site.data.spell.lb }} to generate maelstrom then execute as many spender Window and {{ site.data.spell.sk }} Window as possible (see above), all the while maintaining {{ site.data.spell.fs }} and {{ site.data.spell.e_shocks }} on your target.*

### 2 Targets Priority
- {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
- Outside or near the end of {{ site.data.spell.e_shocks }}, refresh {{ site.data.spell.fs }} on your main target when it's faded or will in ~5 seconds.
- {{ site.data.spell.fs }} if {{ site.data.spell.e_shocks }} debuff is not active or will fade and {{ site.data.spell.fs }} has faded or will in ~8 seconds.
- {{ site.data.spell.sk }} if you are able to fully execute the [Stormkeeper Window](https://stormearthandlava.com/guide/general/builds.html#stormkeeper-window) described above.
- {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active.
- {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and either:
  * {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast.
  * {{ site.data.spell.sk }} buff is active and {{ site.data.spell.e_shocks }} has less than 5 seconds remaining.
- {{ site.data.spell.lvb }} if you are able to fully execute the [Spender Window](https://stormearthandlava.com/guide/general/builds.html#spender-window) described above.
- {{ site.data.spell.eb }} with {{ site.data.spell.e_shocks }} and {{ site.data.spell.mote }}.
- {{ site.data.spell.if }}.
- {{ site.data.spell.cl }}.

*Note: If you are in combat with 2 or 3 targets for an extended period of time, consider using the Lightning WLR with EoGS build just below as it's much better in cleave situation.*


### 3 Targets Priority
- {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
- {{ site.data.spell.sk }} if it is available and there is no reason to hold its use.
- {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast.
- {{ site.data.spell.eb }} with {{ site.data.spell.e_shocks }}.
- {{ site.data.spell.if }}.
- {{ site.data.spell.cl }}.

*Note: If you are in combat with 2 or 3 targets for an extended period of time, consider using the Lightning WLR with EoGS build just below as it's much better in cleave situation*


## 4-5 Targets Priority
- {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
- {{ site.data.spell.sk }} if it is available and no additional targets soon.
- {{ site.data.spell.eq }}
- {{ site.data.spell.cl }}

*Note: This build becomes less than ideal compared to other lightning options at 4 and more targets.*

### 6+ Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.sk }} when buffed by {{ site.data.spell.sop }} if it is available and no additional targets soon.
 - {{ site.data.spell.cl }} if {{ site.data.spell.sop }} is active
 - {{ site.data.spell.eq }}
 - {{ site.data.spell.cl }}

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="listeogs">
<div data-toggle="collapse" data-target="#listeogs-collapse" aria-expanded="false" aria-controls="listeogs-collapse" class="builds-header listeogs"><h2>Lightning Hybrid with Great Sundering</h2></div>
</div>
<div id="listeogs-collapse" class="collapse" aria-labelledby="listeogs" data-parent="#accordion-lightning">
<div class="card-body" markdown="1">

## What does this build do?

This build is a Single Target build that picks {{ site.data.spell.eogs }} to gain a lot of value in Cleave and AoE situation, turning it into an hybrid build. It focuses on the power of {{ site.data.spell.lb }} and {{ site.data.spell.eb }} in ST, and {{ site.data.spell.eogs }} and {{ site.data.spell.cl }} in AoE. It seeks to empower its core spells with supporting talents like {{ site.data.spell.e_shocks }}, {{ site.data.spell.se }}, {{ site.data.spell.sop }} and {{ site.data.spell.lr }}. It also keeps {{ site.data.spell.lvb }} as an enabler in ST with {{ site.data.spell.wlr }}, {{ site.data.spell.mote }} and {{ site.data.spell.potm }}.

This build rotation is fairly strict, playing around the {{ site.data.spell.e_shocks }} debuff in mostly the same way each time.

## What does it look like?
### "Standard" Build
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJSRSLRDRJQiEAAAAAgSCIlkgmkCSLJpFIIkAI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

### FoL Variant
- This variant drops {{ site.data.spell.eb }}, taking {{ site.data.spell.fol }} instead. Having a higher density of {{ site.data.spell.sop }} and {{ site.data.spell.eogs }} due to {{ site.data.spell.es }} cost being lower can somewhat compete with the raw damage of {{ site.data.spell.eb }}.
- {{ site.data.spell.fol }} will have good defensive value, allowing you to cast {{ site.data.spell.as }} more often (see [this blogpost for a list of spells affected by {{ site.data.spell.fol }}]({{ site.baseurl }}{%link blog/_posts/2023-01-23-fol.md %})).
- If you decide to play this variant, simply change {{ site.data.spell.eb }} to {{ site.data.spell.es }} in the rest of this guide.

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJJFSLRDRJQiEAAAAAgSCIlkgmkCSLJpFIIkAI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
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
- Having some amount of Vers is never bad as it will increase your passive survivability.

<hr>

## Rotation

### Key Notes
- At 1 target, you want to maximize the uptime of {{ site.data.spell.e_shocks }} on your target, then use {{ site.data.spell.lvb }}, {{ site.data.spell.eb }} and {{ site.data.spell.lb }} in that order as much as possible during {{ site.data.spell.e_shocks }}.
- At 2 and more targets, always alternate {{ site.data.spell.eb }} and {{ site.data.spell.eq }} uses.
- At 1 and 2 targets, {{ site.data.spell.lvs }} gained from {{ site.data.spell.wlr }} should be held to empower your next spender (which can be in 5 to 8 seconds). Once you hit 4 targets, any sort of gaming the {{ site.data.spell.mote }} buff becomes very bad. We're still mathing out the 3 targets part.
- {{ site.data.spell.lmt }} is included for its raw damage, don't start to spread {{ site.data.spell.fs }} unless you have to move - in which case it remains a good movement global when {{ site.data.spell.if }} buffed {{ site.data.spell.frs }} aren't available.
- {{ site.data.spell.lr }} applies to your current target when it does not have an active buff. {{ site.data.spell.eq }} has *some* 'smart' applications to apply to off-targets but results can vary. It is suggested *when you are comfortable enough to do so* to incorporate target swapping after each spender to increase the value gained from {{ site.data.spell.lr }}. If done poorly (i.e. too early in the learning process) this can produce negative results, master the basics then add complexity!
- {{ site.data.spell.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy:
  * 1-2 Targets = {{ site.data.spell.lb }}
  * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to move and {{ site.data.spell.sop }} buff happens to be up and no {{ site.data.spell.if }} buffs remain
  * 6+ Targets = {{ site.data.spell.cl }} whenever possible
  * {{ site.data.spell.sop }} will also make you want to delay casting {{ site.data.spell.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.

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
    <div class="skill frs"><span>FrS</span></div>
    <div class="arrow"></div>
    <div class="text">Use {{ site.data.spell.lb }} up to 76 maelstrom and do a {{ site.data.spell.e_shocks }} with {{ site.data.spell.sk }} window (see below)</div>
</div>

<br>

### Spender Window

This cast-sequence will be your main way of dealing damage. You want:
- at least 63 maelstrom at the start to be able to cast {{ site.data.spell.eb }}.
- {{ site.data.spell.fs }} and {{ site.data.spell.e_shocks }} to both be active on your target for the next 5 seconds. Those 5 seconds ensure that all the overloads you generate will hit the target while {{ site.data.spell.e_shocks }} is active.

*Note: For two targets, you need only 38 maelstrom to be able to cast {{ site.data.spell.eq }} but you want the {{ site.data.spell.eogs }} buff to be active.*

<div class="opener">
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
</div>

The idea is simple:
- Have {{ site.data.spell.e_shocks }} applied to the enemy.
- Use {{ site.data.spell.lvb }} (if possible with {{ site.data.spell.lvs }} from {{ site.data.spell.wlr }}) to gain {{ site.data.spell.mote }}.
- Use {{ site.data.spell.eb }} to gain {{ site.data.spell.sop }}
- Use {{ site.data.spell.lb }} to maximize the damage gain from {{ site.data.spell.sop }}, {{ site.data.spell.lr }} and {{ site.data.spell.e_shocks }} while generating Maelstrom to execute the window again.
- You want to use your CD and various enablers outside of this window.

<br>

### Stormkeeper Window

You want these pre-requisite before doing this cast-sequence:
- {{ site.data.spell.sk }} active
- {{ site.data.spell.fs }} will be active for the next 10 seconds.
- {{ site.data.spell.e_shocks }} to be active on your target for the next 5 seconds. Those 5 seconds ensure that all the overloads you generate will hit the target while {{ site.data.spell.e_shocks }} is active.
- You have at least 90 Maelstrom.
- if {{ site.data.spell.e_shocks }} is active and has more than 5 seconds remaining, you have {{ site.data.spell.if }} active with at least 1 charges and at least 5 seconds remaining.

*Note: You can refresh {{ site.data.spell.fs }} after the first {{ site.data.spell.lb }} if needed, but be careful not to let your other buffs expire.*  

*Note: For two targets, you need 65 maelstrom and can alternate {{ site.data.spell.eb }} and {{ site.data.spell.eq }} depending on your {{ site.data.spell.eogs }} buff.*

<div class="opener">
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>
    <div class="skill frs"><span>FrS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
</div>

<br>

### 1 Target Priority
- {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
- {{ site.data.spell.lmt }} if it is available and no additional targets soon.
- Outside or near the end of {{ site.data.spell.e_shocks }}, refresh {{ site.data.spell.fs }} when it's faded or will in ~5 seconds.
- {{ site.data.spell.fs }} if {{ site.data.spell.e_shocks }} debuff is not active or will fade and {{ site.data.spell.fs }} has faded or will in ~8 seconds.
- {{ site.data.spell.sk }} if you are able to fully execute the [Stormkeeper Window](https://stormearthandlava.com/guide/general/builds.html#stormkeeper-window) described above.
- {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active.
- {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and either.
  * {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast.
  * {{ site.data.spell.sk }} buff is active and {{ site.data.spell.e_shocks }} has less than 5 seconds remaining.
- {{ site.data.spell.lvb }} if you are able to fully execute the [Spender Window](https://stormearthandlava.com/guide/general/builds.html#spender-window) described above.
- {{ site.data.spell.eb }} with {{ site.data.spell.e_shocks }} and {{ site.data.spell.mote }}.
- {{ site.data.spell.if }}.
- {{ site.data.spell.lb }}.

*Note: To put it simply, use {{ site.data.spell.lb }} to generate maelstrom then execute as many spender Window and {{ site.data.spell.sk }} Window as possible (see above), all the while maintaining {{ site.data.spell.fs }} and {{ site.data.spell.e_shocks }} on your target.*

### 2 Targets Priority
- {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
- {{ site.data.spell.lmt }} if it is available and no additional targets soon.
- Outside or near the end of {{ site.data.spell.e_shocks }}, refresh {{ site.data.spell.fs }} on your main target when it's faded or will in ~5 seconds.
- {{ site.data.spell.fs }} if {{ site.data.spell.e_shocks }} debuff is not active or will fade and {{ site.data.spell.fs }} has faded or will in ~8 seconds.
- {{ site.data.spell.sk }} if you are able to fully execute the [Stormkeeper Window](https://stormearthandlava.com/guide/general/builds.html#stormkeeper-window) described above.
- {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active.
- {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and either:
  * {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast.
  * {{ site.data.spell.sk }} buff is active and {{ site.data.spell.e_shocks }} has less than 5 seconds remaining.
- {{ site.data.spell.lvb }} if you are able to fully execute the [Spender Window](https://stormearthandlava.com/guide/general/builds.html#spender-window) described above.
- {{ site.data.spell.eq }} with {{ site.data.spell.e_shocks }} and {{ site.data.spell.mote }}.
- {{ site.data.spell.eb }} with {{ site.data.spell.e_shocks }} and {{ site.data.spell.mote }}.
- {{ site.data.spell.if }}.
- {{ site.data.spell.cl }}.

### 3 Targets Priority
- {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
- {{ site.data.spell.lmt }} if it is available and no additional targets soon.
- {{ site.data.spell.sk }} if it is available and there is no reason to hold its use.
- {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast.
- {{ site.data.spell.if }}.
- {{ site.data.spell.eq }} with {{ site.data.spell.eogs }}.
- {{ site.data.spell.eb }} with {{ site.data.spell.e_shocks }}.
- {{ site.data.spell.cl }}.

*Note: It's possible that playing around {{ site.data.spell.mote }} and {{ site.data.spell.potm }} is a damage gain at 3 (and maybe more targets) now. Until we have proof of it, this rotation guide will not include it.*

## 4-5 Targets Priority
- {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
- {{ site.data.spell.lmt }} if it is available and no additional targets soon.
- {{ site.data.spell.sk }} if it is available and no additional targets soon.
- {{ site.data.spell.eq }} with {{ site.data.spell.eogs }}.
- {{ site.data.spell.eb }}.
- {{ site.data.spell.cl }}.

### 6+ Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon.
- {{ site.data.spell.sk }} when buffed by {{ site.data.spell.sop }} if it is available and no additional targets soon.
 - {{ site.data.spell.cl }} if {{ site.data.spell.sop }} is active
 - {{ site.data.spell.eq }} with {{ site.data.spell.eogs }}
 - {{ site.data.spell.eb }}
 - {{ site.data.spell.cl }}

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="limwf">
<div data-toggle="collapse" data-target="#limwf-collapse" aria-expanded="false" aria-controls="limwf-collapse" class="builds-header limwf"><h2>Lightning AoE with Mountains will Fall</h2></div>
</div>
<div id="limwf-collapse" class="collapse" aria-labelledby="limwf" data-parent="#accordion-lightning">
<div class="card-body" markdown="1">

## What does this build do?

This build focuses on the power of {{ site.data.spell.lb }}, {{ site.data.spell.cl }} and {{ site.data.spell.eb }} with {{ site.data.spell.eogs }}. It seeks to empower these effects with supporting talents like {{ site.data.spell.e_shocks }}, {{ site.data.spell.se }}, and {{ site.data.spell.lr }}. This build will be for you if you are not a fan of {{ site.data.spell.fs }} dot management or random effects that can swing your damage like {{ site.data.spell.dre }}, effectively being a solid and consistent way of dealing damage that is flexible to all target counts - the more targets the better!

## What does it look like?
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJSJJtENE0QiEAAAAAgSASJJKpJg0SSaKhgQEgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

Note:
  - You can build this without {{ site.data.spell.eb }} instead taking {{ site.data.spell.fol }}, if you do not like {{ site.data.spell.eb }}.
  - You may also prefer to include {{ site.data.spell.ns }} in the class tree if the cast time of {{ site.data.spell.eb }} is a hindrance to you.
  - {{ site.data.spell.lmt }} is preferred over {{ site.data.spell.tempest }} (gained via {{ site.data.spell.pe }}) because of its overall value being far higher over the course of a key, {{ site.data.spell.pe }} is only preferable on single target.
  - You may substitute {{ site.data.spell.sop }} for {{ site.data.spell.afs }} for comfort but it is substantially worse on single target (which is still relevant on bosses in M+!) and worse on 6+ (reliability is key, the gap alters as you add more targets in favor of {{ site.data.spell.afs }}. If you make this substitution simply ignore any line that shows {{ site.data.spell.sop }}; {{ site.data.spell.afs }} has no impact upon priority!

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
 - {{ site.data.spell.mote }} is mainly to path to {{ site.data.spell.lmt }}, once you hit 3 targets any sort of gaming the {{ site.data.spell.mote }} buff becomes extremely bad, in practice this also makes the points spent in {{ site.data.spell.potm }} near worthless however they are also needed for {{ site.data.spell.echo_chamber }} and {{ site.data.spell.mwf }}
 - {{ site.data.spell.lr }} applies to your current target when it does not have an active buff. {{ site.data.spell.eq }} has *some* 'smart' applications to apply to off-targets but results can vary. It is suggested *when you are comfortable enough to do so* to incorporate target swapping after each spender to increase the value gained from {{ site.data.spell.lr }}. If done poorly (i.e. too early in the learning process) this can produce negative results, master the basics then add complexity!
 - {{ site.data.spell.lmt }} is included for its raw damage, don't start to spread {{ site.data.spell.fs }} unless you have to move - in which case it remains a good movement global when {{ site.data.spell.if }} buffed {{ site.data.spell.frs }} aren't available.
 - {{ site.data.spell.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy, whilst it is appreciable that {{ site.data.spell.eb }} reduces the value gained from {{ site.data.spell.sop }} due to being more expensive and producing less buffs overall - this is only true for the 1-4 target range and the value added is still positive, AoE value from {{ site.data.spell.sop }} is unaffected at 6+ targets.
    * 1-2 Targets = {{ site.data.spell.lb }}
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to move and {{ site.data.spell.sop }} buff happens to be up and no {{ site.data.spell.if }} buffs remain
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible
    * {{ site.data.spell.sop }} will also make you want to delay casting {{ site.data.spell.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.

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
   - {{ site.data.spell.lr }} is a rather significant buff to your AoE burst via {{ site.data.spell.sk }}, where possible try to ensure at least one {{ site.data.spell.lr }} buff is running on a target prior to using {{ site.data.spell.sk }} charges!
   - Pool maelstrom at the end of a current pull to have resources available at the start of the next pull, this dramatically improves the consistent performance from pull-to-pull and eases the feeling of 'ramp' time in the rotation.
   - On pulls that include 6+ targets it is ideal to have {{ site.data.spell.sop }} active for both charges of {{ site.data.spell.sk }} and given the maelstrom generated you can cast {{ site.data.spell.eq }} twice between them, this means that if you do not have maelstrom from a previous pack you may need to hold {{ site.data.spell.sk }} until slightly later in the pull or simply forego this value in favor of using {{ site.data.spell.sk }} without {{ site.data.spell.sop }}.
   - Avoid placing {{ site.data.spell.lmt }} prematurely, if the tank does not have sufficient aggro then its possible for it to be killed directly by mobs which greatly reduces its value

### 1 Target Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon. (using {{ site.data.spell.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - {{ site.data.spell.fs }} if the debuff has faded or will in ~5 seconds
 - {{ site.data.spell.sk }} if you have at least 124 maelstrom with {{ site.data.spell.swelling_maelstrom }} *or* an active {{ site.data.spell.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.spell.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.spell.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.spell.if }}
 - {{ site.data.spell.lvb }} if you have 63 or more maelstrom and {{ site.data.spell.mote }} buff is *not* active
 - {{ site.data.spell.eb }} if {{ site.data.spell.mote }} buff is active
 - {{ site.data.spell.lb }}

  Note:
 - You do not play around {{ site.data.spell.potm }} procs in single target.
 - You do not play around {{ site.data.spell.eogs }} buffs in single target.

### 2 Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon.
 - {{ site.data.spell.sk }} if you have at least 125 maelstrom with {{ site.data.spell.swelling_maelstrom }} *or* an active {{ site.data.spell.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.spell.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.spell.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.fs }} on one target if the debuff has faded or will in ~5 seconds
 - {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.spell.if }}
 - {{ site.data.spell.lvb }} if you have 50 or more maelstrom, {{ site.data.spell.eogs }} buff is active but {{ site.data.spell.mote }} buff is not
 - {{ site.data.spell.eq }} if {{ site.data.spell.eogs }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvb }} if you have 63 or more maelstrom, {{ site.data.spell.eogs }} and {{ site.data.spell.mote }} buffs are not active
 - {{ site.data.spell.eb }} if {{ site.data.spell.mote }} buff is active and {{ site.data.spell.eogs }} is not
 - {{ site.data.spell.cl }}

  Note:
 - Playing around {{ site.data.spell.potm }} procs is dps neutral, but generally it will be easier and less likely to negatively impact your performance if you ignore them - sometimes you will get lucky and have one during your {{ site.data.spell.sk }} burst though!

### 3 Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon.
 - {{ site.data.spell.sk }} if it is available and no additional targets soon.
 - {{ site.data.spell.eq }} if {{ site.data.spell.eogs }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.spell.eb }} if {{ site.data.spell.eogs }} buff is not active
 - {{ site.data.spell.if }}
 - {{ site.data.spell.cl }}

## 4-5 Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon.
 - {{ site.data.spell.sk }} if it is available and no additional targets soon.
 - {{ site.data.spell.eq }} if {{ site.data.spell.eogs }} buff is active
 - {{ site.data.spell.eb }} if {{ site.data.spell.eogs }} buff is not active
 - {{ site.data.spell.cl }}

### 6+ Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon.
 - {{ site.data.spell.sk }} if you have 50 maelstrom and {{ site.data.spell.eogs }} buff is active *or* 75 maelstrom and {{ site.data.spell.eogs }} is not active
 - {{ site.data.spell.cl }} if {{ site.data.spell.sop }} is active
 - {{ site.data.spell.eq }} if {{ site.data.spell.eogs }} buff is active
 - {{ site.data.spell.eb }} if {{ site.data.spell.eogs }} buff is not active
 - {{ site.data.spell.cl }}


</div>
</div>
</div>


<div class="card">
<div class="card-header" id="lisfd">
<div data-toggle="collapse" data-target="#lisfd-collapse" aria-expanded="false" aria-controls="lisfd-collapse" class="builds-header lisfd"><h2>Lightning AoE with Skybreaker's</h2></div>
</div>
<div id="lisfd-collapse" class="collapse" aria-labelledby="lisfd" data-parent="#accordion-lightning">
<div class="card-body" markdown="1">

## What does this build do?

This build focuses on the power of {{ site.data.spell.lb }}, {{ site.data.spell.cl }} and {{ site.data.spell.eb }} with {{ site.data.spell.eogs }}. It seeks to empower these effects with supporting talents like {{ site.data.spell.e_shocks }}, {{ site.data.spell.se }}, and {{ site.data.spell.lr }}. This variant of Lightning includes {{ site.data.spell.sfd }} to further empower your {{ site.data.spell.lmt }} per-use value in addition to increasing the uptime of {{ site.data.spell.se }} which gets more relevant when pulling high target counts as the majority of your time is spent pressing {{ site.data.spell.cl }} when you hit 5 or more targets. This means that movement globals or {{ site.data.spell.sop }} buffs between 3-5 targets can be very beneficial despite {{ site.data.spell.fs }} not being the main focus.

## What does it look like?
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJJlk0S0Q0SD4ABAAAAAoEgUSiSaCItkkmSIIEBI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

Note:
 - You can build this without {{ site.data.spell.eb }} instead taking {{ site.data.spell.searing_flames }}, {{ site.data.spell.pw }} or even {{ site.data.spell.eote }} (to improve its 1-2 target profile).
 - You may also prefer to include {{ site.data.spell.ns }} in the class tree if the cast time of {{ site.data.spell.eb }} is a hindrance to you.
 - {{ site.data.spell.lmt }} is preferred over {{ site.data.spell.tempest }} (gained via {{ site.data.spell.pe }}) because of its overall value being far higher over the course of a key, {{ site.data.spell.pe }} is only preferable on single target. Whilst this build does utilize more {{ site.data.spell.fs }} than other Lightning variants it will generally not be worthwhile to run {{ site.data.spell.pe }} simply because it is opportunity costed against {{ site.data.spell.lmt }}.
 - You may substitute {{ site.data.spell.sop }} for {{ site.data.spell.afs }} for comfort but it is substantially worse on single target (which is still relevant on bosses in M+!) and worse on 6+ (reliability is key, the gap alters as you add more targets in favor of {{ site.data.spell.afs }}. If you make this substitution simply ignore any line that shows {{ site.data.spell.sop }}; {{ site.data.spell.afs }} has no impact upon priority!

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
 - {{ site.data.spell.mote }} is mainly to path to {{ site.data.spell.lmt }}, once you hit 3 targets any sort of gaming the {{ site.data.spell.mote }} buff becomes extremely bad.
 - {{ site.data.spell.lr }} applies to your current target when it does not have an active buff. {{ site.data.spell.eq }} has *some* 'smart' applications to apply to off-targets but results can vary. It is suggested *when you are comfortable enough to do so* to incorporate target swapping after each spender to increase the value gained from {{ site.data.spell.lr }}. If done poorly (i.e. too early in the learning process) this can produce negative results, master the basics then add complexity!
 - {{ site.data.spell.lmt }} is included for its raw damage, don't start to spread {{ site.data.spell.fs }} unless you have to move - in which case it remains a good movement global when {{ site.data.spell.if }} buffed {{ site.data.spell.frs }} aren't available.
 - {{ site.data.spell.sop }} is there to amplify what you're already aiming to do at different target counts which can be quite handy, whilst it is appreciable that {{ site.data.spell.eb }} reduces the value gained from {{ site.data.spell.sop }} due to being more expensive and producing less buffs overall - this is only true for the 1-4 target range and the value added is still positive, AoE value from {{ site.data.spell.sop }} is unaffected at 6+ targets.
    * 1-2 Targets = {{ site.data.spell.lb }}
    * 3-5 Targets = {{ site.data.spell.fs }} if and only if you need to move and {{ site.data.spell.sop }} buff happens to be up and no {{ site.data.spell.if }} buffs remain
    * 6+ Targets = {{ site.data.spell.cl }} whenever possible
    * {{ site.data.spell.sop }} will also make you want to delay casting {{ site.data.spell.sk }} on 1-2 targets or 6+ targets in order to benefit from their combined effects.

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
   - {{ site.data.spell.lr }} is a rather significant buff to your AoE burst via {{ site.data.spell.sk }}, where possible try to ensure at least one {{ site.data.spell.lr }} buff is running on a target prior to using {{ site.data.spell.sk }} charges!
   - Pool maelstrom at the end of a current pull to have resources available at the start of the next pull, this dramatically improves the consistent performance from pull-to-pull and eases the feeling of 'ramp' time in the rotation.
   - On pulls that include 6+ targets it is ideal to have {{ site.data.spell.sop }} active for both charges of {{ site.data.spell.sk }} and given the maelstrom generated you can cast {{ site.data.spell.eq }} twice between them, this means that if you do not have maelstrom from a previous pack you may need to hold {{ site.data.spell.sk }} until slightly later in the pull or simply forego this value in favor of using {{ site.data.spell.sk }} without {{ site.data.spell.sop }}.
   - Avoid placing {{ site.data.spell.lmt }} prematurely, if the tank does not have sufficient aggro then its possible for it to be killed directly by mobs which greatly reduces its value

### 1 Target Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon. (using {{ site.data.spell.totemic_recall }} is dps neutral in single target, and could be considered a good movement global if none are available and it would not negatively impact the next use)
 - {{ site.data.spell.sk }} if you have at least 124 maelstrom with {{ site.data.spell.swelling_maelstrom }} *or* an active {{ site.data.spell.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.spell.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.spell.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.fs }} if the debuff has faded or will in ~5 seconds
 - {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.spell.if }}
 - {{ site.data.spell.lvb }} if you have 63 or more maelstrom and {{ site.data.spell.mote }} buff is *not* active
 - {{ site.data.spell.eb }} if {{ site.data.spell.mote }} buff is active
 - {{ site.data.spell.lb }}

  Note:
 - You do not play around {{ site.data.spell.potm }} procs in single target.
 - You do not play around {{ site.data.spell.eogs }} buffs in single target.

### 2 Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon.
 - {{ site.data.spell.sk }} if you have at least 125 maelstrom with {{ site.data.spell.swelling_maelstrom }} *or* an active {{ site.data.spell.sop }} buff and at least 46 maelstrom. This will enable you to buff both of your {{ site.data.spell.sk }} charges if you cast {{ site.data.spell.lvb }} before your second {{ site.data.spell.eb }} cast.
 - {{ site.data.spell.lb }} if both {{ site.data.spell.sk }} and {{ site.data.spell.sop }} buffs are active
 - {{ site.data.spell.lb }} if {{ site.data.spell.sop }} buff is active
 - {{ site.data.spell.fs }} on both targets if the debuff has faded or will in ~5 seconds
 - {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.spell.if }}
 - {{ site.data.spell.lvb }} if you have 50 or more maelstrom, {{ site.data.spell.eogs }} buff is active but {{ site.data.spell.mote }} buff is not
 - {{ site.data.spell.eq }} if {{ site.data.spell.eogs }} and {{ site.data.spell.mote }} buffs are active
 - {{ site.data.spell.lvb }} if you have 63 or more maelstrom, {{ site.data.spell.eogs }} and {{ site.data.spell.mote }} buffs are not active
 - {{ site.data.spell.eb }} if {{ site.data.spell.mote }} buff is active and {{ site.data.spell.eogs }} is not
 - {{ site.data.spell.cl }}

  Note:
 - Playing around {{ site.data.spell.potm }} procs is dps neutral, but generally it will be easier and less likely to negatively impact your performance if you ignore them - sometimes you will get lucky and have one during your {{ site.data.spell.sk }} burst though!

### 3 Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon.
 - {{ site.data.spell.sk }} if it is available and no additional targets soon.
 - {{ site.data.spell.fs }} to maintain debuffs if {{ site.data.spell.sop }} buff is active (see note below)
 - {{ site.data.spell.eq }} if {{ site.data.spell.eogs }} buff is active
 - {{ site.data.spell.frs }} if {{ site.data.spell.if }} buff is up and {{ site.data.spell.e_shocks }} debuff is not active or will fade before next cast
 - {{ site.data.spell.eb }} if {{ site.data.spell.eogs }} buff is not active
 - {{ site.data.spell.if }}
 - {{ site.data.spell.cl }}

 Note:
 - {{ site.data.spell.fs }} maintenance is dps neutral on 3 targets, and only when {{ site.data.spell.sop }} buffs are utitlised for it - the opportunity cost of not casting {{ site.data.spell.if }} buffed {{ site.data.spell.frs }} or {{ site.data.spell.cl }} is high!

## 4-5 Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon.
 - {{ site.data.spell.sk }} if it is available and no additional targets soon.
 - {{ site.data.spell.fs }} if {{ site.data.spell.sop }} buff is up and you can refresh/apply two
 - {{ site.data.spell.eq }} if {{ site.data.spell.eogs }} buff is active
 - {{ site.data.spell.eb }} if {{ site.data.spell.eogs }} buff is not active
 - {{ site.data.spell.cl }}

  Note:
 - {{ site.data.spell.if }} becomes a dps loss at 4 or more targets, you can use it when you know movement will be needed and it serves as a reduction in loss incurred by movement. Try to utilize {{ site.data.spell.swg }} where possible.

### 6+ Targets Priority
 - {{ site.data.spell.se }} if it is available and there is no reason to hold its use.
 - {{ site.data.spell.lmt }} if it is available and no additional targets soon.
 - {{ site.data.spell.sk }} if you have 50 maelstrom and {{ site.data.spell.eogs }} buff is active *or* 75 maelstrom and {{ site.data.spell.eogs }} is not active
 - {{ site.data.spell.cl }} if {{ site.data.spell.sop }} is active
 - {{ site.data.spell.eq }} if {{ site.data.spell.eogs }} buff is active
 - {{ site.data.spell.eb }} if {{ site.data.spell.eogs }} buff is not active
 - {{ site.data.spell.cl }}

Note:
 - At these target counts ignoring {{ site.data.spell.fs }} was better than playing around it, given {{ site.data.spell.sop }} buffs are far stronger with {{ site.data.spell.cl }} - rely on {{ site.data.spell.lmt }} and movement globals to apply {{ site.data.spell.fs }}.

</div>
</div>
</div>
</div>
