---
layout: page
title: F.A.Q.
last_update: 2022-03-11 09:00:00
game_version: 9.2 Shadowlands
toc: true
---

This page has the answers to some frequently asked questions for Elemental Shamans.

### Q: "Will Elemental be viable in <Expansion name> <game version>?"
Firstly, no spec in the game is unviable. Certain specs may be favoured for certain bosses in a raid, but this is only relevant to the very highest end of raiding (ie, competing for world first). Elemental (and every other spec) will remain competitive for 99.9% of the playerbase.
### Q: "Is there a point where I don't cast {{site.data.spell.es}} with {{site.data.legendary.eogs}} equipped?"
**No**, the value added by the {{site.data.legendary.eogs}} buff scales with additional targets so it is **always** worthwhile to alternate spenders with {{site.data.legendary.eogs}} equipped.
 
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

### Q: "When is the best time to use Primal Fire Elemental's {{ site.data.spell.meteor }} and Storm Elemental's {{ site.data.spell.eye_of_the_storm }}?"
*Note: This only applies when talented into {{ site.data.talent.pe }}. Both abilities can be macro'd. See useful macros further down.*

In 9.2 with [Tier Set](https://www.wowhead.com/item-set=1499/theurgic-starspeakers-regalia) active, you will want to aim to keep your Elemental's abilities on cooldown to maximise uses. If delaying by a small amount will allow you to hit multiple targets then it is a gain to do so, be aware that {{ site.data.spell.eye_of_the_storm }} should also be buffed by {{ site.data.spell.call_lightning }}. 
*Without* an active [Tier Set](https://www.wowhead.com/item-set=1499/theurgic-starspeakers-regalia) you should aim to delay both {{ site.data.spell.meteor }} and {{ site.data.spell.eye_of_the_storm }} if they could hit multiple targets within the Elemental's duration. If there is no upcoming AoE, just ensure they are used before the Elemental fades. Binding these abilities to a key can be particularly helpful. Check out the macro section of this page, if you need help with that.

### Q: "Is there a way to enable/disable Earth Elemental taunt without screwing up my autocast settings of the DPS Elemental?"
*Note: This only applies when talented into {{ site.data.talent.pe }}.*

Not that we're aware of. The Elementals' autocast settings are shared between the Elemental pets. If you deactivate or activate it on one button, the matching button of the other Elementals will share that setting. We hope, that this will be changed.

### Q: "Do I use {{ site.data.spell.lvb }} during {{ site.data.talent.se }}?"
After the change to {{ site.data.spell.wind_gust }} it is **always** an increase in Single Target scenarios to hardcast {{ site.data.spell.lvb }} during {{ site.data.talent.se }}. This is true regardless of {{ site.data.item.t28_2 }} and {{ site.data.item.t28_4 }}. Check out the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) and special notes on that website for in depth information.

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
 
