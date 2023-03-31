---
layout: page
title: Macros
last_update: 31/03/2023 
game_version: 10.0.7 Dragonflight
toc: true
---

# Macros for Elemental Shaman

This page lists useful macros for playing as an Elemental Shaman in Dragonflight. It is sorted into Rotational Abilities, Cooldowns, Utility and Talent Tree Swap.
If you have suggestions to improve macros found on this page, or additional macros that are missing, please use the [Storm, Earth & Lava Discord Server to report issues](https://discord.gg/y5dUf3PWrU), alternatively seek out an Elemental MVP or Moderator on the [Earthshrine Discord Server](https://discord.gg/pGkPDzh7rP).

## Rotational Abilities

### {{ site.data.spell.fs }}
```
#showtooltip 
/use [@mouseover,harm,nodead][]Flame Shock
```

### {{ site.data.spell.frs }}
```
#showtooltip 
/use [@mouseover,harm,nodead][]Frost Shock
```

### {{ site.data.talent.pw }}
```
#showtooltip
/use [@mouseover,harm,exists][harm]Primordial Wave
```
Note: if your Covenant is set to Necrolord from Shadowlands content you may need to add (Shadowlands) immediately after Primordial Wave, or shift-click the ability from your spellbook while editing the macro.

### {{ site.data.spell.eq }}
```
#showtooltip
/use [@cursor]Earthquake
```

### {{ site.data.talent.totemic_projection }}
```
#showtooltip
/use [@cursor]Totemic Projection
```

## Cooldowns

### {{ site.data.talent.pe }} / {{ site.data.talent.lmt }}
- This macro will use either {{ site.data.spell.tempest }} or {{ site.data.spell.meteor }} when {{ site.data.talent.pe }} is talented, or {{ site.data.talent.lmt }} at your Cursor location if it is talented. Two versions include:
```
#showtooltip
/use [known:Liquid Magma Totem,@cursor]Liquid Magma Totem;[noknown:Liquid Magma Totem,known:Storm Elemental]Tempest;[noknown:Liquid Magma Totem,known:Fire Elemental]Meteor
```
```
#showtooltip
/use [pet:Primal Storm Elemental]Tempest;[pet:Primal Fire Elemental]Meteor;[nopet,@cursor]Liquid Magma Totem
```

- This macro will use your currently talented Elemental Cooldown, and when pressed again the associated {{ site.data.talent.pe }} spell for them.
```
#showtooltip
/use [pet:Primal Storm Elemental]Tempest;[pet:Primal Fire Elemental]Meteor
/use [known:Storm Elemental]Storm Elemental;[known:Fire Elemental]Fire Elemental
```

## Utility and Talent Tree Swap

### {{ site.data.spell.wind_shear }} - There are many ways to macro interrupt abilities, below are some examples only use whichever setup enables you to play most reliably!

- Will interrupt your Focus if you have one, otherwise will interrupt your current target. 
```
#showtooltip
/use [@focus,harm,exists,nodead][]Wind Shear
```
- Will interrupt your current Mouseover target if it is an enemy, otherwise will interrupt your current target. 
```
#showtooltip
/use [@mouseover,harm,nodead][]Wind Shear
```
- Will interrupt your Focus if you have one, your current Mouseover target if it is an enemy, otherwise will interrupt your current target. 
```
#showtooltip
/use [@focus,harm,exists,nodead][@mouseover,harm,nodead][]Wind Shear
```
- For specific interrupt uses, if you dislike using Focus or Mouseovers. 
```
#showtooltip
/tar *enemy name here*
/use Wind Shear
/targetlasttarget
```

### {{ site.data.spell.healing_surge }}
```
#showtooltip
/use [@mouseover,help,nodead][]Healing Surge
```

### {{ site.data.talent.hex }}
```
#showtooltip
/use [@focus,harm,exists,nodead][@mouseover,harm,nodead][]Hex
```

### {{ site.data.spell.earthbind_totem }}
```
#showtooltip
/use [@cursor]Earthbind Totem
```

### Elemental Shield Macro
```
#showtooltip
/use [mod:shift,@player]Earth Shield;[nomod]Lightning Shield
```

### {{ site.data.talent.capacitor_totem }}
```
#showtooltip
/use [@cursor]Capacitor Totem
```

### {{ site.data.talent.purge }} / {{ site.data.talent.greater_purge }} / {{ site.data.talent.cleanse_spirit }}
```
#showtooltip
/use [known:Purge,@mouseover,harm,nodead]Purge;[known:Greater Purge,@mouseover,harm,nodead]Greater Purge;[@mouseover,help,nodead]Cleanse Spirit;[known:purge,harm]Purge;[known:Greater Purge,harm]Greater Purge;[]Cleanse Spirit
```

### {{ site.data.talent.spirit_walk }} / {{ site.data.talent.gow }}
```
#showtooltip
/use [known:Spirit Walk]Spirit Walk;[known:Gust of Wind]Gust of Wind
```

### {{ site.data.talent.stoneskin_totem }} / {{ site.data.talent.tranquil_air_totem }}
```
#showtooltip
/use [known:Stoneskin Totem]Stoneskin Totem;[known:Tranquil Air Totem]Tranquil Air Totem
```

