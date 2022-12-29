---
layout: page
title: Builds
last_update: 29/12/2022
game_version: 10.0.2 Dragonflight
toc: false
---
This page aims to display and discuss the recommended and most widely-used Builds available to Elemental. This is not an exhaustive list of all options and does not imply that any build *not* shown here is automatically terrible/unplayable, in practical terms we cannot account for every build variation and effort has been largely focused on the highest performing / most popular builds. If you find something that you feel works or performs better than what is listed here feel free to contact the team on [Storm, Earth & Lava Discord](https://discord.gg/y5dUf3PWrU) or [Earthshrine #Elemental Channel](https://discord.gg/earthshrine)

Note: As the builds need to be complete to display the class tree is also filled out, these are not required choices and will not suit every situation.

<p style="color:red">Click on a build banner to expand it.</p>

# Primordial Surge Builds

Most notably aimed more at the Single Target profiles these variants are used when you need to focus on boss damage by using the inherent strength of combining {{ site.data.talent.ps }} and tools like {{ site.data.talent.dre }} and/or {{ site.data.talent.wlr }} to increase the value and frequency of {{ site.data.talent.lvs }}. Turning your {{ site.data.talent.eb }} and {{ site.data.spell.lvb }} into powerhouses.

<hr>
<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="pswlr">
<div data-toggle="collapse" data-target="#pswlr-collapse" aria-expanded="true" aria-controls="pswlr-collapse"><h2>Primordial Surge with Windspeakers</h2></div>
</div>
<div id="pswlr-collapse" class="collapse" aria-labelledby="pswlr" data-parent="#accordion">
<div class="card-body" markdown="1">

# What does this build do?

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.spell.eb }}, supported by the idea of {{ site.data.talent.pw }} 'windows'.
As the name suggests this is predominately aimed at single target but due to taking {{ site.data.talent.lvs }}, {{ site.data.talent.magma_chamber }} and {{ site.data.talent.pw }} it will naturally benefit from a couple of additional targets.

# What does it look like?
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAfcj78nJtvjmejSqe5Zhm9AAAAAAgUSpUSCAJlkUoElUSCRAAAAAAQJApkECJFiUSSSLEQAE?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

# Stats

## Always remember to sim your current options appropriately
 - For more information [link to updated sim guide post](blahblah)  

## Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Mastery / Haste >> Versatility = Crit
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

# Rotation

## Key Notes
 - Straightfoward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.talent.eb }}, {{ site.data.talent.if }} and {{ site.data.spell.frs}} become improved filler spells.
 - Don't forget that {{ site.data.talent.wlr }} provides a {{ site.data.talent.lvs }} proc after each {{ site.data.talent.eb }}! Use these immediately afterwards in all cases!
 - {{ site.data.talent.if }} and {{ site.data.spell.frs}} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.talent.ps }} and its supporting talents you should continue to utilise {{ site.data.talent.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.talent.eb }} at 4 or more targets.
 - {{ site.data.talent.dre }} procs do not impact rotation priority and should be read the same regardless. In practice this means 'filler' spells like {{ site.data.talent.if }} and buffed {{ site.data.spell.frs }} are eliminated when {{ site.data.talent.dre }} procs happen *unless you have to move* because {{ site.data.spell.lvb }} will always be available during them. You will also continue to spend maelstrom on {{ site.data.talent.eb }} as usual.

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
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.talent.eb }} if you have {{ site.data.spell.lvb }} on at least one charge, preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active
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
  
<hr>
<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="psfb">
<div data-toggle="collapse" data-target="#psfb-collapse" aria-expanded="true" aria-controls="psfb-collapse"><h2>Primordial Surge with Further Beyond</h2></div>
</div>
<div id="psfb-collapse" class="collapse" aria-labelledby="psfb" data-parent="#accordion">
<div class="card-body" markdown="1">

# What does this build do?

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.spell.eb }}, supported by the idea of {{ site.data.talent.pw }} 'windows'.
As this build takes {{ site.data.talent.dre }} and extends to {{ site.data.talent.fb }} a fair amount of its power comes from maximising {{ site.data.spell.lvb }} usage, particularly {{ site.data.talent.lvs }}, to have the most chances at gambling {{ site.data.talent.dre }} which {{ site.data.talent.ps }} naturally assists with.

# What does it look like?
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAfcj78nJtvjmejSqe5Zhm9AAAAAAgUSpUSCAJlkUSKBlkQEAAAAAAUCQKJhQShIlkk0CBEAB?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

# Stats

## Always remember to sim your current options appropriately
 - For more information [link to updated sim guide post](blahblah)  

## Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Haste >> Mastery > Versatility = Crit
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

# Rotation

## Key Notes
 - This variant includes {{ site.data.talent.fb }} which will inevitably increase the pull-to-pull variance in your damage that you see in-game *and* is not simulated with movement in mind when using default Patchwerk sims, this means it may not be the proper choice in real raid scenarios if you're looking to do the most damage and more importantly if you need to do that damage consistently and reliably! It is however extremely fun to manage procs and highroll, best of luck to you!
 - Straightfoward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.talent.eb }}, {{ site.data.talent.if }} and {{ site.data.spell.frs}} become improved filler spells.
 - {{ site.data.talent.if }} and {{ site.data.spell.frs}} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.talent.ps }} and {{ site.data.talent.dre }} with its supporting talents you should continue to utilise {{ site.data.talent.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.talent.eb }} at 4 or more targets.
 - {{ site.data.spell.lvbm }} replaces {{ site.data.spell.lvb }} at 4 or more targets. 
 - {{ site.data.talent.fb }} makes you value maelstrom generation very highly during aoe, which displaces regular {{ site.data.spell.lvb }} casts entirely at 4+ targets. This is predominately a single-target build so AoE is not its main function.

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
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.talent.eb }} if you have {{ site.data.talent.dre }} proc active to extend duration
 - {{ site.data.talent.eb }} if you are approaching ~135 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active
 - {{ site.data.talent.icefury }}
 - {{ site.data.spell.lb }}
    *  {{ site.data.talent.eb }} is only listed when {{ site.data.talent.dre }} proc or maelstrom overcap would happen because you want to enter these procs with as high maelstrom as possible due to {{ site.data.talent.fb }}, in an ideal world you would only spend during {{ site.data.talent.dre }} procs but inevitably you will need to avoid overcapping outside of these procs as well.
  
## 2 Target Priority
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
 - {{ site.data.spell.if }} if you expect to move soon and {{ site.data.talent.swg }} is not available, otherwise do not use.

## 3 Target Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} if you have {{ site.data.talent.dre }} proc active to extend duration
 - {{ site.data.talent.eb }} if you are approaching ~135 maelstrom after your current cast to avoid overcapping
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.cl }}

## 4 Target Priority
If you find yourself using this build on 4 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.dre }} proc is active and you will finish the cast 
 - {{ site.data.spell.cl }}

## 5+ Target Priority
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

<hr>
<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="psmwf">
<div data-toggle="collapse" data-target="#psmwf-collapse" aria-expanded="true" aria-controls="psmwf-collapse"><h2>Primordial Surge with Mountains will Fall</h2></div>
</div>
<div id="psmwf-collapse" class="collapse" aria-labelledby="psmwf" data-parent="#accordion">
<div class="card-body" markdown="1">

# What does this build do?

This build works around the damage of {{ site.data.spell.lvb }} and {{ site.data.spell.eb }}, supported by the idea of {{ site.data.talent.pw }} 'windows'.
This build effectively swaps {{ site.data.talent.wlr }} or {{ site.data.talent.fb }} for {{ site.data.talent.mwf }}, which reduces the perceived complexity from this build allowing you to focus more completely on the {{ site.data.talent.lvs }} provided by {{ site.data.talent.ps }} and effective spending of maelstrom.

# What does it look like?
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAfcj78nJtvjmejSqe5Zhm9AAAAAAgUSpUSCAJlkUoEUSSSEAAAAAAUCQKJhQShIlkk0CBEAB?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

# Stats

## Always remember to sim your current options appropriately
 - For more information [link to updated sim guide post](blahblah)  

## Simplified
This is quick and dirty, your sims will take priority in your gearing process.
 - Haste / Mastery > Versatility = Crit
 - Remember that generally Haste will make the rotation easier to execute and further improve your ability to adapt to movement so will always be a solid stat to go for, and more flexible than Mastery given Haste is also very good in all AoE-focused builds

# Rotation

## Key Notes
 - Straightfoward loop: cast your cooldowns, use {{ site.data.spell.lvb }}, use {{ site.data.talent.eb }}, {{ site.data.talent.if }} and {{ site.data.spell.frs}} become improved filler spells.
 - {{ site.data.talent.if }} and {{ site.data.spell.frs}} become movement-enabling globals when more than one target is present.
 - Due to elements like {{ site.data.talent.ps }} and {{ site.data.talent.dre }} with its supporting talents you should continue to utilise {{ site.data.talent.lvs }} procs even if you end up facing multiple targets.
 - {{ site.data.spell.eq }} replaces {{ site.data.talent.eb }} at 4 or more targets.
 - {{ site.data.talent.dre }} procs do not impact rotation priority and should be read the same regardless. In practice this means 'filler' spells like {{ site.data.talent.if }} and buffed {{ site.data.spell.frs }} are eliminated when {{ site.data.talent.dre }} procs happen *unless you have to move* because {{ site.data.spell.lvb }} will always be available during them. You will also continue to spend maelstrom on {{ site.data.talent.eb }} as usual.

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
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active, even if this would make you overcap maelstrom!
 - {{ site.data.talent.eb }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active
 - {{ site.data.talent.icefury }}
 - {{ site.data.spell.lb }}
  
## 2 Target Priority
If you find yourself using this build on 2 or more targets it is less than ideal.
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on both targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.cl }}
 - {{ site.data.spell.frs }} if you have {{ site.data.talent.if }} buff active *and* need to move
 - {{ site.data.spell.if }} if you expect to move soon and {{ site.data.talent.swg }} is not available, otherwise do not use.

## 3 Target Priority
If you find yourself using this build on 3 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.talent.eb }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvb }} 
 - {{ site.data.spell.cl }}

## 4 Target Priority
If you find yourself using this build on 4 or more targets it is less than ideal
 - {{ site.data.talent.fe }} if it is available and there is no reason to hold its use.
 - Maintain {{ site.data.spell.fs }} on all targets at all times, don't forget {{ site.data.talent.pw }} applies one!
 - {{ site.data.talent.pw }} if it is available
 - {{ site.data.spell.lvb }} if {{ site.data.talent.lvs }} buff is active
 - {{ site.data.spell.eq }} preferably with {{ site.data.talent.mote }} buff active
 - {{ site.data.spell.lvbm }} if {{ site.data.talent.dre }} proc is active and you will finish the cast (if you will not, revert to {{ site.data.spell.lvb }}
 - {{ site.data.spell.cl }}

## 5+ Target Priority
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
  
