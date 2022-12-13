---
layout: page
title: F.A.Q.
last_update: 13/12/2022
game_version: 10.0.2 Dragonflight
toc: true
---

This page has the answers to some frequently asked questions for Elemental Shamans.

### Q: "Will Elemental be viable in <Expansion name> <game version>?"
Firstly, no spec in the game is unviable. Certain specs may be favoured for certain bosses in a raid, but this is only relevant to the very highest end of raiding (ie, competing for world first). Elemental (and every other spec) will remain competitive for 99.9% of the playerbase.
### Q: "Is there a point where I don't cast {{site.data.spell.es}} with {{site.data.talent.eogs}} talented?"
**No**, unless you have {{ site.data.talent.eb }} talented this part of the rotation remains the same as Shadowlands: always alternate!

### Q: "Okay, so what about {{ site.data.talent.eb }} and/or {{ site.data.talent.eogs }} then?!"
**Yes**, these talent choices do impact your spender use
   - If you have taken {{ site.data.talent.eb }} and *not* {{ site.data.talent.eogs }} then you will use {{ site.data.talent.eb }} instead of {{ site.data.spell.eq }} until 4 targets are present.
   - If you have taken {{ site.data.talent.eb }} *and* {{ site.data.talent.eogs }} then you will ignore {{ site.data.talent.eogs }}'s effect until 2 targets are present.
 
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

### Q: "When is the best time to use Primal Fire Elemental's {{ site.data.spell.meteor }} and Primal Storm Elemental's {{ site.data.spell.tempest }}?"
When they would hit the most targets, for {{ site.data.spell.tempest }} specifically you need to ensure it is also fully buffed by {{ site.data.spell.call_lightning }}.
*Note: This only applies when talented into {{ site.data.talent.pe }}. Both abilities can be macro'd. See useful macros further down.*

### Q: "Is there a way to enable/disable Earth Elemental taunt without screwing up my autocast settings of the DPS Elemental?"
*Note: This only applies when talented into {{ site.data.talent.pe }}.*

Not that we're aware of. The Elementals' autocast settings are shared between the Elemental pets. If you deactivate or activate it on one button, the matching button of the other Elementals will share that setting. We hope that this will be changed.

### Q: "Do I use {{ site.data.spell.lvb }} during {{ site.data.talent.se }}?"
{{ site.data.talent.se }} does not alter the rotation for the builds that use it during its duration, you will typically behave the same regardless of it being active.

### Q: "What is funnelling?"
Funneling is the act of casting {{ site.data.spell.fs }} on multiple targets in order to generate {{ site.data.spell.ls }} procs with the intention of increasing your damage on one target.

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

- Covenant Ability Macro - Swaps between {{ site.data.spell.primordial_wave }}, {{ site.data.spell.fae_transfusion }}, and {{ site.data.spell.vesper_totem }} depending on current Covenant.
```
#showtooltip
/use [@cursor]Vesper Totem
/use [@cursor]Fae Transfusion
/use [@mouseover,harm,nodead][harm]Primordial Wave
/run local G=GetSpellInfo SetMacroSpell(GetRunningMacro(), G"Primordial Wave" or G"Vesper Totem" or G"Fae Transfusion")
```
 
 - Covenant Signature Ability Macro - Swaps between {{ site.data.spell.fleshcraft }}, {{ site.data.spell.soulshape }}, and {{ site.data.spell.summon_steward }} depending on current Covenant.
```
#showtooltip
/use [@cursor]Door of Shadows
/use Soulshape
/use Fleshcraft
/use Summon Steward
/run local G=GetSpellInfo SetMacroSpell(GetRunningMacro(), G"Door of Shadows" or G"Soulshape" or G"Fleshcraft" or "Summon Steward") 
```
 
