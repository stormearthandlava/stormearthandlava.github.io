---
layout: page
title: F.A.Q.
last_update: 2021-11-15 09:00:00
game_version: 9.0.5 Shadowlands
toc: true
---

This page has the answers to some frequently asked questions for Elemental Shamans.

### Q: "Will Elemental be viable in <Exapansion name> <game version>?"
Firstly, no spec in the game is unviable. Certain specs may be favoured for certain bosses in a raid, but this is only relevant to the very highest end of raiding (ie, competing for world first). Elemental (and every other spec) will remain competitive for 99.9% of the playerbase.

### Q: "What Pots/Food/Flasks should I use?"
See the [Consumables]({{ site.baseurl }}{% link guide/general/consumables.md %}) section of the guide.

### Q: "How many targets should I cast {{ site.data.spell.fs }} on?"
See the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) section of the guide.

### Q: "When do I cast {{ site.data.spell.cl }}?"
See the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) section of the guide.

### Q: "Does {{ site.data.spell.eq }} stack?"
Yes, {{ site.data.spell.eq }} stacks and has no stack limit.

### Q: "When should I stop using {{ site.data.spell.es }} and use {{ site.data.spell.eq }}?"
In general, stop using {{ site.data.spell.es }} against two targets or more. But check out the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) page for more information.

### Q: "When is the best time to use Primal Fire Elemental's {{ site.data.spell.meteor }}?"
*Note: This only applies when talented into {{ site.data.talent.pe }}. It is also on the Primal Fire Elemental spell book and not in either your shaman spec or class spell book. Can be macro'd using /cast meteor. See useful macros further down.*

Since the cooldown of {{ site.data.spell.meteor }} is the same as the duration of Primal Fire Elemental, save it for a period of AoE within the Elemental's lifetime. If there is no upcoming AoE, cast it immediately. Make sure to bind it to a key. Check out the macro section of this page, if you need help with that.

### Q: "Is there a way to enable/disable Earth Elemental taunt without screwing up my autocast settings of the DPS Elemental?"
*Note: This only applies when talented into {{ site.data.talent.pe }}.*

Not that we're aware of. The Elementals' autocast settings are shared between the Elemental pets. If you deactivate or activate it on one button, the matching button of the other Elementals will share that setting. We hope, that this will be changed.

### Q: "Do I use {{ site.data.spell.lvb }} during {{ site.data.talent.se }}?"
Yes. No. It depends. Check out the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) and special notes on that website for in depth information.

### Q: "What is funnelling?"
Funneling is the act of casting {{ site.data.spell.fs }} on multiple targets in order to generate {{ site.data.spell.ls }} procs with the intention of increasing your damage on one target.
 
### Q: "How does {{ site.data.talent.ecs }} interact with procs and abilities?"
{{ site.data.talent.ecs }} does not interact with procs and abilities. It will only echo the base ability. Echoed casts may consume buffs. E.g. {{ site.data.talent.sk }} will be consumed by echoed {{ site.data.spell.lb }}.

### Q: "What are some useful Macros?"
This Macro allows you to place an {{ site.data.spell.eq }} at your cursor:
```
#showtooltip
/cast [@cursor] Earthquake
```

This macro allows you to cast the Elementals Ability or {{ site.data.talent.if }}, depending on your talents. The correct icon is shown once you've loaded the ability at least once (e.g. by summoning your Elemental) after logging in.
```
#showtooltip
/use [talent:6/3]Icefury;[pet: Primal Storm Elemental]Eye of the Storm;[pet: Primal Fire Elemental]Meteor;[pet: Primal Earth Elemental]Harden Skin
```

This macro is a handy mouseover macro for {{ site.data.spell.fs }}.
```
#showtooltip
/cast [@mouseover,harm,nodead][] Flame Shock
```

This macro allows you to summon your {{ site.data.spell.ee }} and active its defensive CD via double click. If your {{ site.data.spell.fe }} is active {{ site.data.spell.ee }} will simply go on CD and nothing else will happen, so don't try this with your DPS Elemental being active.
```
#showtooltip
/cast Earth Elemental
/cast [talent:6/2] Harden Skin
```

You can also adapt this macro to dismiss the {{site.data.spell.ee}} after getting {{site.data.spell.harden_skin}}.
```
#showtooltip
/cast Earth Elemental
/cast [talent:6/2] Harden Skin
/script PetDismiss()
```
### Talent Row Merging Macros
- Level 25 Macro - Swaps between {{ site.data.talent.ecs }} and {{ site.data.talent.eb }}.
```
#showtooltip
/use [talent:2/2]Echoing Shock;[talent:2/3]Elemental Blast
```
 
- Level 40 Macro - Swaps between {{ site.data.talent.ancestral_guidance }} and {{ site.data.talent.wind_rush_totem }}. Casts {{ site.data.talent.wind_rush_totem }} at your cursor.
```
#showtooltip
/use [talent:5/2]Ancestral Guidance;[@cursor,talent:5/3]Wind Rush Totem
```
  
- Level 50 Macro - Swaps between {{ site.data.talent.sk }} and {{ site.data.talent.asc }}.
```
#showtooltip
/use [talent:7/2]Stormkeeper;[talent:7/3]Ascendance
```
 
- Elemental Shield Macro - Casts {{ site.data.talent.earth_shield }} on yourself. Otherwise cast {{ site.data.spell.lightning_shield }}
```
#showtooltip
/use [@player,talent:3/2]Earth Shield;[notalent:3/2]Lightning Shield
```
 
- Dispel Macro - Swaps between {{ site.data.spell.purge}} and {{ site.data.spell.cleanse_spirit }} depending on enemy or friendly target.
```
#showtooltip
/use [@mouseover,harm,nodead]Purge;[@mouseover,help,nodead]Cleanse Spirit;[harm]Purge;Cleanse Spirit
```
 
- Chain Macro - Swaps between {{ site.data.spell.cl }} and {{ site.data.spell.chain_heal }} depending on enemy or friendly target.
```
#showtooltip
/use [@mouseover,harm,nodead]Chain Lightning;[@mouseover,help,nodead]Chain Heal;[harm]Chain Lightning;Chain Heal
```
