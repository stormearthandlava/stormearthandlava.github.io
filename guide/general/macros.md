---
layout: page
title: Macros
last_update: 11/11/2022 
game_version: 10.0 Dragonflight
toc: true
---

# Macros for Elemental Shaman

This page lists useful macros for playing as an Elemental Shaman in Dragonflight. It is sorted into Rotational Abilities, Cooldowns, Utility and Talent Tree Swap.
If you have suggestions to improve macros found on this page, or additional macros that are missing, please use the [Storm, Earth & Lava Discord Server to report issues](https://discord.gg/y5dUf3PWrU), alternatively seek out an Elemental MVP or Moderator on the [Earthshrine Discord Server](https://discord.gg/pGkPDzh7rP).

## Rotational Abilities

### Flame Shock
```
#showtooltip 
/use [@mouseover,harm,nodead][]Flame Shock
```

### Frost Shock
```
#showtooltip 
/use [@mouseover,harm,nodead][]Frost Shock
```

## Cooldowns

### Primal Elementalist / Liquid Magma Totem
- This macro will use either {{ site.data.spell.tempest }} or {{ site.data.spell.meteor }} when {{ site.data.talent.pe }} is talented, or {{ site.data.talent.lmt }} at your Cursor location if it is talented.
```
#showtooltip
/use [known:Liquid Magma Totem,@cursor]Liquid Magma Totem;[noknown:Liquid Magma Totem,known:Storm Elemental]Tempest;[noknown:Liquid Magma Totem,known:Fire Elemental]Meteor
```

## Utility and Talent Tree Swap

### Wind Shear - There are many ways to macro interrupt abilities, below are some examples only use whichever setup enables you to play most reliably!

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

### Healing Surge
```
#showtooltip
/use [@mouseover,help,nodead][]Healing Surge
```

### Hex
```
#showtooltip
/use [@focus,harm,exists,nodead][@mouseover,harm,nodead][]Hex
```

### Earthbind totem
```
#showtooltip
/use [@cursor]Earthbind Totem
```

### Capacitor Totem
```
#showtooltip
/use [@cursor]Capacitor Totem
```


