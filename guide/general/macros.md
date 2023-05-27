---
layout: page
title: Macros
last_update: 02/05/2023
game_version: 10.1.0 Dragonflight
toc: true
---

# Macros for Elemental Shaman

This page lists useful macros for playing as an Elemental Shaman in Dragonflight. It is sorted into Rotational Abilities, Cooldowns, Utility and Talent Tree Swap.
If you have suggestions to improve macros found on this page, or additional macros that are missing, please use the [Storm, Earth & Lava Discord Server to report issues](https://discord.gg/y5dUf3PWrU), alternatively seek out an Elemental MVP or Moderator on the [Earthshrine Discord Server](https://discord.gg/pGkPDzh7rP).

**Disclaimer:** Your client must be in English for these macros to work. If you play in another language, the abilities must be translated to your client's language.

# Rotational Abilities

## Flame Shock

This macro will cast {{ site.data.spell.fs }} at your current Mouseover target if it is an enemy, otherwise will cast it on your current target.

```
#showtooltip
/use [@mouseover,harm,nodead][]Flame Shock
```

<br>

## Frost Shock

This macro will cast {{ site.data.spell.frs }} at your current Mouseover target if it is an enemy, otherwise will cast it on your current target.

```
#showtooltip
/use [@mouseover,harm,nodead][]Frost Shock
```

<br>

## Primordial Wave

This macro will cast {{ site.data.talent.pw }} at your current Mouseover target if it is an enemy, otherwise will cast it on your current target.

```
#showtooltip
/use [@mouseover,harm,exists][harm]Primordial Wave
```
*Note: If your Covenant is set to Necrolord in Shadowlands, you may need to add (Shadowlands) immediately after Primordial Wave, or shift-click the ability from your spellbook while editing the macro. You can also change your covenant in Oribos to forget about this problem forever.*

<br>

## Earthquake

This macro will cast {{ site.data.spell.eq }} at the current location of your cursor without targeting reticule.

```
#showtooltip
/use [@cursor]Earthquake
```

<hr>

# Cooldowns

## Primordial Elementalist or Liquid Magma Totem

This macro will use either {{ site.data.spell.tempest }} or {{ site.data.spell.meteor }} when {{ site.data.talent.pe }} is talented, or {{ site.data.talent.lmt }} at your Cursor location if it is talented.

```
#showtooltip
/use [known:Liquid Magma Totem,@cursor]Liquid Magma Totem;[noknown:Liquid Magma Totem,known:Storm Elemental]Tempest;[noknown:Liquid Magma Totem,known:Fire Elemental]Meteor
```

<br>

## Elemental and Primordial Elementalist

This macro will summon your currently talented Elemental, and when pressed again the associated {{ site.data.talent.pe }} spell for them.

```
#showtooltip
/use [pet:Primal Storm Elemental]Tempest;[pet:Primal Fire Elemental]Meteor
/use [known:Storm Elemental]Storm Elemental;[known:Fire Elemental]Fire Elemental
```
*Note: This macro does not include {{ site.data.talent.lmt }}.*

<hr>

# Utility

## Dismiss pet
This macro requires the [following Weakaura](https://wago.io/3fH2MR2PA) to work, and will dismiss your currently summoned elementals whenever you use it. This is mostly used on {{ site.data.talent.ee }}.

```
/click MyTotemFrame1
/click MyTotemFrame2
/click MyTotemFrame3
/click MyTotemFrame4
```

## Interrupts - Wind Shear
There are many ways to macro interrupt abilities, below are some examples only use whichever setup enables you to play most reliably:

#### Focus Kick
This macro will use {{ site.data.spell.wind_shear }} at your Focus if you have one, otherwise will interrupt your current target.

```
#showtooltip
/use [@focus,harm,exists,nodead][]Wind Shear
```

<br>

#### Mouseover Kick
This macro will use {{ site.data.spell.wind_shear }} on current Mouseover target if it is an enemy, otherwise will interrupt your current target.

```
#showtooltip
/use [@mouseover,harm,nodead][]Wind Shear
```

<br>

#### Focus + Mouseover Kick
This macro will use {{ site.data.spell.wind_shear }} at your Focus if you have one, try on your current Mouseover target if it is an enemy, otherwise will interrupt your current target.

```
#showtooltip
/use [@focus,harm,exists,nodead][@mouseover,harm,nodead][]Wind Shear
```

<br>

#### Specific target Kick

This macro works for specific interrupt uses, if you dislike using Focus or Mouseovers.

```
#showtooltip
/tar *enemy name here*
/use Wind Shear
/targetlasttarget
```

<br>

## Hex

This macro will use {{ site.data.talent.hex }} at your Focus if you have one, try on your current Mouseover target if it is an enemy, otherwise will {{ site.data.talent.hex }} your current target.

```
#showtooltip
/use [@focus,harm,exists,nodead][@mouseover,harm,nodead][]Hex
```

<br>

## Purge/Decurse single macro

This macro will use in that order:
 - {{ site.data.talent.purge }} or {{ site.data.talent.greater_purge }} on your Mouseover target if it is an enemy,
 - {{ site.data.talent.cleanse_spirit }} on your Mouseover target if it is an enemy,
 - {{ site.data.talent.purge }} or {{ site.data.talent.greater_purge }} on current target if it is an enemy,
 - {{ site.data.talent.cleanse_spirit }} on your current target if it is an ally.

```
#showtooltip
/use [known:Purge,@mouseover,harm,nodead]Purge;[known:Greater Purge,@mouseover,harm,nodead]Greater Purge;[@mouseover,help,nodead]Cleanse Spirit;[known:purge,harm]Purge;[known:Greater Purge,harm]Greater Purge;[]Cleanse Spirit
```
*Note: This macro only works for Elemental and Enhancement. Restoration Shaman have Purify Spirit for their dispel.*

<br>

## Chains Lightning/Heal single macro

This macro will use in that order:
 - {{ site.data.spell.cl }} on your Mouseover target if it is an enemy,
 - {{ site.data.talent.chain_heal }} on your Mouseover target if it is an enemy,
 - {{ site.data.spell.cl }} on current target if it is an enemy,
 - {{ site.data.talent.chain_heal }} on your current target if it is an ally.

```
#showtooltip
/use [@mouseover,harm,nodead]Chain Lightning;[@mouseover,help,nodead]Chain Heal;[harm]Chain Lightning;[]Chain Heal
```

<br>

## Healing Surge

This macro will cast {{ site.data.spell.healing_surge }} at your current Mouseover target if it is an ally, otherwise will cast it on yourself.

```
#showtooltip
/use [@mouseover,help,nodead][]Healing Surge
```

<br>

## Elemental Shields
This macro will cast {{ site.data.talent.earth_shield }} on yourself if you press Shift while using it, otherwise it will cast {{ site.data.spell.lightning_shield }} on yourself.

```
#showtooltip
/use [mod:shift,@player]Earth Shield;[nomod]Lightning Shield
```

<br>

## Earthbind Totem

This macro will cast {{ site.data.spell.earthbind_totem }} at the current location of your cursor without targeting reticule.

```
#showtooltip
/use [@cursor]Earthbind Totem
```

<br>

## Capacitor Totem

This macro will cast {{ site.data.spell.capacitor_totem }} at the current location of your cursor without targeting reticule.

```
#showtooltip
/use [@cursor]Capacitor Totem
```

<br>

## Totemic Projection

This macro will cast {{ site.data.spell.totemic_projection }} at the current location of your cursor without targeting reticule.

```
#showtooltip
/use [@cursor]Totemic Projection
```

<hr>

# Talent Tree Swap depending on talents

## Fire Elemental and Storm Elemental

This macro will cast either {{ site.data.talent.fe }} or {{ site.data.talent.se }} depending on your talent choice.

```
#showtooltip
/use [known:Storm Elemental]Storm Elemental;[known:Fire Elemental]Fire Elemental
```

<br>

## Spirit Walk / Gust of Wind

This macro will cast either {{ site.data.talent.spirit_walk }} or {{ site.data.talent.gow }} depending on your talent choices.

```
#showtooltip
/use [known:Spirit Walk]Spirit Walk;[known:Gust of Wind]Gust of Wind
```

<br>

## Stoneskin Totem / Tranquil Air Totem

This macro will cast either {{ site.data.talent.stoneskin_totem }} or {{ site.data.talent.tranquil_air_totem }} depending on your talent choices.

```
#showtooltip
/use [known:Stoneskin Totem]Stoneskin Totem;[known:Tranquil Air Totem]Tranquil Air Totem
```
