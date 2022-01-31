---
layout: page
title: Covenants
last_update: 2022-01-30 09:00:00
game_version: 9.1.5 Shadowlands
toc: true
---

## TL;DR Recommendations
At full Renown

------- | -------------------
Raiding | Necrolord / Night Fae / Kyrian
Mythic+ | Necrolord / Night Fae / Kyrian

With the advent of Covenant swapping in [9.1.5](https://shadowlands.wowhead.com/guides/shadowlands-patch-9-1-5-features) it is easy to achieve the minimum required level of Renown 57 in multiple Covenants and use the recommendations of the relevant specialisation resources. **Achieve Renown 80 in a single Covenant before attempting to swap!**

For increased usability here are useful Covenant macros:

Shaman Abilities:
```
#showtooltip
/use [@cursor]Vesper Totem
/use [@cursor]Fae Transfusion
/use [@mouseover,harm,nodead][harm]Primordial Wave
/run local G=GetSpellInfo SetMacroSpell(GetRunningMacro(), G"Primordial Wave" or G"Vesper Totem" or G"Fae Transfusion")
```
Note: Due to the character limit on macros in addition to 3/4 of our Covenant Abilities making use of targeting conditionals, fitting all 4 abilities in is difficult to do in a satisfying way. Venthyr's {{site.data.spell.chain_harvest}} is left out only because it benefits the least from targeting conditionals. This macro can be adapted to your 3 most-used Covenants.

Covenant Abilities:
```
#showtooltip
/use [@cursor]Door of Shadows
/use Soulshape
/use Fleshcraft
/use Summon Steward
/run local G=GetSpellInfo SetMacroSpell(GetRunningMacro(), G"Door of Shadows" or G"Soulshape" or G"Fleshcraft" or "Summon Steward")
```
Note: You can swap the 'Summon Steward' line for ```/use Phial of Serenity``` and have the Summon Steward ability bound separately, as it's typically used out of combat.

## Overview

First things first. All Covenants are relatively well balanced. The difference is usually within the single digit percentages and you should pick your Covenant depending on what you actually like to play.

Recommending "best" Covenant is a pretty impossible task.
The strength of the Covenants breaks down to the strength of the Covenant signature ability, the strength of the Covenant class ability, and the strength of their Soulbinds.

Soulbind dps information can be found [here]({{ site.baseurl }}{% link guide/general/soulbinds.md %}).

### Kyrian

![Kyrian_IMG]({{ "assets/img/guide/Kyrian_Sigil.png" | absolute_url}}) | By pledging your allegiance to the Kyrian you will gain two new abilites
{{site.data.spell.vesper_totem}} | {{site.data.spell.vesper_totem}} summons a totem that will do AoE damage around itself on the next 3 damage casts you do and heal up to 6 friendly targets on the next 3 healing casts. The totem can also be re-placed by recasting the ability which is not on the GCD. It is a very nice "set it and forget it" ability which is only slightly dependent on the tank not moving the targets out of the totem. The ability is mostly limited by targets needing to be stacked up.<br/><br/>{{site.data.spell.elysian_dirge}} is a conduit that increases the damage done by {{site.data.spell.vesper_totem}} to the closest target, increasing it's value in single target.
{{site.data.spell.summon_steward}} | {{site.data.spell.summon_steward}} does what it says on the tin. It summons a  smol, cute, fluffy swolkin, who most importantly, gives you a {{site.data.item.phial_of_serenity}} which can be used to remove Curses, Diseases, Poisons and Bleeds. After the changes to the raid, the usefulness of this is vastly more limited. It is still very useful for m+ where a lot of effects can be dispelled even if your group composition doesn't contain the appropriate counter.


### Venthyr

![Venthyr_IMG]({{ "assets/img/guide/Venthyr_Sigil.png" | absolute_url}}) | By pledging your allegiance to the Venthyr you will gain two new abilites
{{site.data.spell.chain_harvest}} | {{site.data.spell.chain_harvest}} is basically a special {{site.data.spell.cl}}. After a 2.5 second cast it deals damage to 5 targets and heals 5 friendlies. Its cooldown gets reduced by 5 seconds for every critical hit, including damage and heal.<br/><br/>{{site.data.spell.lavish_harvest}} is a conduit that increases the critical hit chance of {{site.data.spell.chain_harvest}} by 10%.
{{site.data.spell.door_of_shadows}} | {{site.data.spell.door_of_shadows}} is a short 35 yard teleport with a 1.5 second cast. It can sometimes be used to skip hard packs in mythic+ and skip over gaps that you couldn't get over normally. This is usually not as useful as we are ranged anyway and can reach most targets anyway.


### Night Fae

![NF_IMG]({{ "assets/img/guide/Fae_Sigil.png" | absolute_url}}) | By pledging your allegiance to the Night Fae you will gain two new abilites
{{site.data.spell.fae_transfusion}} | {{site.data.spell.fae_transfusion}} is a 3 second channeled ability that deals a set amount of damage either to a singular target or split between multiple targets in AoE. It is Nature damage and can thus be buffed with {{site.data.talent.master_of_the_elements}}. Because of the need to stand still while channeling it, it can sometimes be hard to get the full worth out of the ability, but you can use {{site.data.spell.swg}} to handle that more easily.<br/><br/>{{site.data.spell.essential_extraction}} is a conduit that decreases the cooldown of {{site.data.spell.fae_transfusion}}.
{{site.data.spell.soulshape}} | {{site.data.spell.soulshape}} is arguably the strongest of the covenant signature abilities. It turns you into an animal form, teleports you 15 yards forwards and increases your movespeed by 50% for 12 seconds or in rest areas until cancelled. This teleport ports you directly to the ground, meaning it can be used to cancel fall damage. Even though we have a very similar ability in {{site.data.spell.ghost_wolf}} already, the added teleport enables us to dodge abilities on a short notice.


### Necrolord

![Necrolord_IMG]({{ "assets/img/guide/Death_Lords_Sigil.png" | absolute_url}}) | By pledging your allegiance to the Necrolord you will gain two new abilites
{{site.data.spell.primordial_wave}} | {{site.data.spell.primordial_wave}} is an ability on a 45 second cooldown that puts a {{site.data.spell.fs}} onto a target and duplicates the next {{site.data.spell.lvb}} on all targets with an active {{site.data.spell.fs}}. It accelerates the speed in which we get {{site.data.spell.fs}} out and provides good damage on single target, spread cleave and low target AoE.<br/><br/>{{site.data.spell.tumbling_waves}} is a conduit that grants a chance to refresh the cooldown on use.
{{site.data.spell.fleshcraft}} | {{site.data.spell.fleshcraft}} is a channeled ability that gives you a 40% HP shield for 2 minutes. While channeling this reduces damage taken by 20%. Also passively reduces the cooldown when moving near corpses by absorbing their essence. 1 second per corpse.<br/><br/>This can be cast before entering combat. It can be useful as another defensive in our toolkit, but 20% is usually not impactful enough to cast it during combat outside of downtime.
