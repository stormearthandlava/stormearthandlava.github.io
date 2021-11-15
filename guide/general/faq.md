---
layout: page
title: F.A.Q.
last_update: 2021-05-29 14:00:00
game_version: 9.0.5 Shadowlands
toc: true
---

This page has the answers to some frequently asked questions for Elemental Shamans.

### Q: "Will Elemental be viable in <Exapansion name> <game version>?"

Firstly, no spec in the game is unviable. Certain specs may be favoured for certain bosses in a raid, but this is only relevant to the very highest end of raiding (ie, competing for world first). Elemental (and every other spec) will remain competitive for 99.9% of the playerbase.

### Q: "What Pots/Food/Flasks should I use?"

See the [Consumables]({{ site.baseurl }}{% link guide/general/consumables.md %}) section of the guide.

### Q: "How many targets should I cast Flame Shock on?"

See the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) section of the guide.

### Q: "When do I cast Chain Lightning?"

See the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) section of the guide.

### Q: "Does Earthquake stack?"

Yes, {{ site.data.spell.eq }} stacks and has no stack limit.

### Q: "When should I stop using Earth Shock and use Earthquake?"

In general, stop using {{ site.data.spell.es }} against two targets or more. But check out the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) page for more information.

### Q: "When is the best time to use Primal Fire Elemental's Meteor?"

*Note: This only applies when talented into* {{ site.data.talent.pe }}. It is also on the Primal Fire Elemental spell book and not in either your shaman spec or class spell book. Can be macro'd using /cast meteor. See useful macros further down.

Since the cooldown of {{ site.data.spell.meteor }} is the same as the duration of Primal Fire Elemental, save it for a period of AOE within the Elemental's lifetime. If there is no upcoming AOE, cast it immediately.  Make sure to bind it to a key. Check out the macro section of this page, if you need help with that.

### Q: "Is there a way to enable/disable Earth Elemental taunt without screwing up my autocast settings of the DPS Elemental?"

*Note: This only applies when talented into* {{ site.data.talent.pe }}.

Not that we're aware of. The Elementals' autocast settings are shared between the Elemental pets. If you deactivate or activate it on one button, the matching button of the other Elementals will share that setting. We hope, that this will be changed.

~~It was changed! 8.3 introduces separate toggle states for all three Elementals and their casts. This now should no longer pose an issue.~~ The fix was reverted just before 8.3 went live due to bugs introduced from the implementation.

### Q: "Do I use Lava Burst during Storm Elemental?"

Yes. No. It depends. Check out the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) and special notes on that website for in depth information.

### Q: "What are some useful Macros?"
 
### Q: "What is funnelling?"
 
Funneling is the act of casting {{ site.data.spell.fs }} on multiple targets in order to generate {{ site.data.spell.ls }} procs with the intention of increasing your damage on one target.
 
### Q: "How does {{ site.data.talent.ecs }} interact with proc to abilities?"
 
 {{ site.data.talent.ecs }} does not interact with procs to abilities; {{ site.data.talent.ecs }} will only echo an ability at its base.
 
 ###Q: "Why is my {{ site.data.spell.ls }} proc no longer instant cast?
 
 It's probably because you have the pvp talent {{ site.data.talent.col }}.

This Macro allows you to place an {{ site.data.spell.eq }} at your cursor:
 ```
#showtooltip Earthquake
/cast [@cursor] Earthquake
 ```

This macro allows you to cast the Elementals Ability or Icefury, depending on your talents. The correct icon is shown once you've loaded the ability at least once after logging in.
```
#showtooltip
/use [talent:6/3]Icefury;[pet: Primal Storm Elemental]Eye of the Storm;[pet: Primal Fire Elemental]Meteor;[pet: Primal Earth Elemental]Harden Skin
```

This macro is a handy mouseover macro for {{ site.data.spell.fs }}.
```
#showtooltip Flame Shock
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

-T2 Macro - Swaps between {{ site.data.talent.ecs }} and {{ site.data.talent.eb }} depending on selected talent.
```
 #showtooltip
/use [talent:2/2]Echoing Shock;[talent:2/3]Elemental Blast
 ```
 
 -T5 Macro - Swaps between  {{ site.data.talent.ag }} and {{ site.data.talent.wrt }} depending on selected talent. Casts {{ site.data.talent.wrt }} at your cursor.
 ```
 #showtooltip
/use [talent:2/2]Echoing Shock;[talent:2/3]Elemental Blast
 ```
 
-T5 Macro - Swaps between :ancestral_guidance: Ancestral Guidance and :wind_rush_totem: Wind Rush Totem depending on selected talent. Casts :wind_rush_totem: Wind Rush Totem at your cursor.
 ```
 #showtooltip
/use [talent:5/2]Ancestral Guidance;[@cursor,talent:5/3]Wind Rush Totem
 ```
  
-T7 Macro - Swaps between :stormkeeper: Stormkeeper and :ascendance: Ascendance depending on selected talent.
 ```
 #showtooltip
/use [talent:7/2]Stormkeeper;[talent:7/3]Ascendance
 ```
 
 -Elemental Shield Macro - Casts :earth_shield: Earth Shield on yourself if you have it talented. Casts :lightning_shield: Lightning Shield when you do not have :earth_shield: Earth Shield talented.
```
 #showtooltip
/use [@player,talent:3/2]Earth Shield;[notalent:3/2]Lightning Shield
 ```
 
 -Dispel Macro - Swaps between :purge: Purge and :cleanse_spirit: Cleanse Spirit depending on enemy or friendly target.
 ```
 #showtooltip
/use [@mouseover,harm,nodead]Purge;[@mouseover,help,nodead]Cleanse Spirit;[harm]Purge;Cleanse Spirit
```
 
 -Chain Macro - Swaps between :chain_lightning: Chain Lightning and :chain_heal: Chain Heal depending on enemy or friendly target.
 ```
 #showtooltip
/use [@mouseover,harm,nodead]Chain Lightning;[@mouseover,help,nodead]Chain Heal;[harm]Chain Lightning;Chain Heal
 ```
