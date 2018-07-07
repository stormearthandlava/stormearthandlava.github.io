---
layout: post
title: Open Letter from Earthshrine Elemental Mods & MVP to Class Devs
date: 2018-07-06 09:00:00
---
Hello Class Developers,

This is a letter from the Elemental Shaman Mod & MVP team of the Earthshrine Discord Server regarding the current state of Elemental, and the present level of communication. As Battle for Azeroth has progressed through Alpha & Beta there have been a number of detailed forum posts from us that cover ongoing problems, and while there have been some fairly amazing responses on other specs/classes the responses for Shaman have been few & far between.

Currently there are very few of the Earthshrine Mods or MVPs for either spec that currently plan to “main” their Shaman for Battle for Azeroth, and even then they have backup options.

## Echo of the Elements
There are two changes to other classes with reasons that can be applied to {{ site.data.talent.echo }}:
- 7.2.5 saw a second charge added for Dire Beast: “This gives all Beast Mastery Hunters access to a Dire Beast with 2 charges playstyle that is more engaging and fun, allowing you to make decisions on when to use the buttons, instead of feeling like you should most often simply push them on cooldown.” [Source](https://us.battle.net/forums/en/wow/topic/20754537150#1)
- The BfA Beta has changes to Affliction talents to allow Nightfall + Haunt or Drain Soul + Haunt builds “which a lot of players think is fun (and is fair feedback)”.

These can be applied to {{ site.data.talent.echo }}, either for why it should not be in the same talent row as {{ site.data.talent.elemental_blast }} or justification for becoming a baseline passive.

- Both {{ site.data.spell.lvb }} and {{ site.data.talent.eb }} are on fairly short cooldowns (8 & 12 seconds respectively). Taking {{ site.data.talent.echo }} in combination with {{ site.data.talent.eb }} allows players to use both fluidly, and adds more rotational depth. Other additional rotation abilities have cooldowns of 30 seconds or more, and any other spells can be delayed until after {{ site.data.spell.lvb }} is cast.
- {{ site.data.talent.echo }} has high synergy with {{ site.data.talent.mote }}, to the point where it seems quite unlikely that {{ site.data.talent.mote }} will be taken without {{ site.data.talent.echo }}. This relates to the points made above, where the gain is not just from the additional {{ site.data.spell.lvb }} casts but the ability to delay them to make use of the frost/nature damage bonus before generating another buff.
- {{ site.data.spell.lvb }} has a CD reset proc ({{ site.data.spell.lava_surge }}) tied to it, making the ability a whack-a-mole button without any thought like Dire Beast was before the change.

## Base Spell Interactions
Currently outside of {{ site.data.spell.fs }}/{{ site.data.spell.lvb }} (generating {{ site.data.spell.lava_surge }} charges & the auto crit behaviour) there are no direct spell interactions in the base toolkit (For further discussion of the auto-crit mechanic refer to the Target Switching section). Maelstrom generation & spending can be considered an indirect interaction between generators (CL/LB/LvB) and spenders (ES/EQ) but this is fairly weak due to the low payoff feeling from using spenders. This limits the rotational depth of the spec to a “hit X when off CD, Y when resource above cost, otherwise Z”.

There are talent options for increasing the rotational depth, but currently the majority of these options are tied up in L15/30 talents which reduces options for advanced players. This leaves Elemental in an “easy to learn, easy to master” situation which some players will not enjoy.

## Area of Effect Damage
It takes longer to generate enough Maelstrom to cast {{ site.data.spell.eq }} in BfA than it did in Legion. In BfA it takes roughly 5 seconds to generate enough maelstrom for a single {{ site.data.spell.eq }} with 5 targets. However, with 2-4 targets it can take anywhere from 6.5 to 12.8 seconds to generate enough Maelstrom for a single {{ site.data.spell.eq }}.

Combine this with the 6 second duration plus the fixed area of effect and it can result in lost damage when targets (or tanks) move around. This would be mitigated somewhat by a shorter buildup & higher cast frequency for {{ site.data.spell.eq }}.

In addition to this, there are specific points that feel very poor right now in the generation of Maelstrom for AoE. When taking the {{ site.data.talent.sk }} talent, if you use it at the start of a pull on 5 targets or more your first {{ site.data.spell.cl }} will generate 65 Maelstrom. This puts you in the awkward spot of either casting the second {{ site.data.spell.cl }} and wasting 30 Maelstrom, or making sure that you avoid using {{ site.data.talent.sk }} unless you have at least 10 Maelstrom banked. No matter what choice you make in that situation, it's an awkward and frustrating one.

## Movement
The removal of Gust of Wind (taken by [91% of PvE players](https://www.worldofwargraphs.com/pve-stats/talents/shaman/elemental) & [99% of PvP players](https://www.worldofwargraphs.com/pvp-stats/talents/shaman/elemental)) means that Elemental is the only ranged spec aside from Shadow that has no burst movement ability. Elemental players will either move at normal run speed while using {{ site.data.spell.es }}/{{ site.data.spell.fs }}/{{ site.data.spell.frs }} and {{ site.data.spell.lava_surge }} procs, or in {{ site.data.spell.ghost_wolf }} form while casting nothing as {{ site.data.spell.ghost_wolf }} silences the player.

Elemental gameplay basics have remained roughly similar for several expansions, but haven't been fully adapted to the mobility pruning that occured. Being able to cast {{ site.data.spell.lb }} while moving lead to problems, and removing it was a good change. Since then Elemental lost Spiritwalker's Grace, which was the main tool for dealing with circumstances preventing you from casting for a moderate amount of time. Now, Elemental is about to lose Gust of Wind, which was already one of the less powerful blink-type abilities in the game, as well as the variety of legendaries that helped with overcoming mobility issues, notably the elemental-specific Boots & Shoulders. Elemental gameplay has always been described as "being a turret", and while this is somewhat of an exaggeration, it is still justified. So, we end up with a "turret-like" caster with bottom of the barrel mobility, and some of the worst utility of any spec in raids. The only positive change in BfA in that regard has been {{ site.data.spell.frs }} having its maelstrom cost removed and doing slightly more damage baseline, making it actually usable when you're walking around and can't do anything else, but not only is it still a severe dps loss compared to {{ site.data.spell.lb }}, most other ranged specs also have similar "backup" abilities they can spam for low damage while moving.

## Spell Ranges
A number of spells like {{ site.data.spell.wind_shear }}, {{ site.data.spell.hex }} and {{ site.data.spell.tremor_totem }} have a 30 yard range, and {{ site.data.spell.eq }} has a 35 yard range, vs the maximum 40 yard range for damage spells. Increasing these to 40 would maintain consistency across abilities without the need to inch closer in order to use them.

## Raid Utility
Functional Shaman raid utility is very low compared to other classes, especially with many of the tools we exclusively had early on in Alpha being added back to other specs in Beta. {{ site.data.spell.tremor_totem }} is a super niche ability with historically few encounters having a fear mechanic, and so far in testing the ones that do have this mechanic are immune to {{ site.data.spell.tremor_totem }}.

To expand a little bit on {{ site.data.spell.tremor_totem }}, while its effect seems to be strong historically Fear, Charm, or Sleep effects aren’t used very often in PvE encounters. This is probably because losing control over your character and dying due to otherwise easily dodgeable AoE is not fun. If such mechanics are in play they usually aren’t intended to be mitigated, and as such are not dispellable by this totem. This can already be seen in Alpha/Beta where some Uldir fights had mechanics that could be broken by {{ site.data.spell.tremor_totem }} but were either flagged immune or changed in school shortly thereafter to prevent that. This totem offers flavor but little to no utility for PvE.

## Target Switching
Elemental has had a weakness with priority target switches in the past, primarily late Warlords where it was a specific issue on Archimonde in Hellfire Citadel. This is because the majority of {{ site.data.spell.lvb }} damage comes from its auto-crit mechanic, to the point where it’s better (in terms of overall DPS) to delay casting {{ site.data.spell.lvb }} until {{ site.data.spell.fs }} is up rather than gamble on getting a “natural” crit. This was worked around in Legion by removing the {{ site.data.spell.fs }} cooldown, but the combination of returning this in Battle for Azeroth & removing then reinstating the {{ site.data.spell.fs }} requirement for {{ site.data.spell.lvb }} auto crits is taking this back to square one again.

It’s also not possible/practical to “bank” resources in anticipation of a priority target switch or burn phase. {{ site.data.spell.lvb }} needs to be used immediately to avoid wasting cooldown recharge time or surge procs, and while {{ site.data.spell.es }} fixed maelstrom cost does give the player some leeway it is also a DPS loss to generate maelstrom with a full bar.

## Spells
### Earth Shock
The {{ site.data.spell.es }} animation is easily lost among other spell animations, meaning players with their camera behind their character and/or zoomed out will often miss the visual indicator that the cast completed.

### Fire Elemental
{{ site.data.spell.fe }} is our base DPS cooldown. Currently it is not affected by {{ site.data.spell.ef }} so any crits it generates are 200% rather than 250% damage, nor is it affected by {{ site.data.spell.overload }} in any way. Combine this with the "fire and forget" nature of the ability, and you come to the conclusion Elemental has a somewhat underwhelming damage cooldown that does not interact with the rest of the toolkit.

## Talents
The talent rows generally have themes, but there are places where some talents in a row have an impact on one area while another does not.

### Level 30
- {{ site.data.talent.afs }}
> The immediate resource refund isn’t responsive and more often than not creates confusion during play. "Didn’t I cast {{ site.data.spell.es }} just now? Did I lag? Is the ability broken?" are somewhat common questions for new players in Earthshrine, and having no noticeable {{ site.data.spell.es }} animation does not help. Taking advantage of the refund to its fullest requires fast reflexes and an eye on your Maelstrom bar, as nothing else tells you whether or not it actually happened.
- {{ site.data.talent.mote }}
> This is the only talent in that row that doesn’t offer any AoE component. We don't cast {{ site.data.spell.lvb }} during AoE as it’s a DPS loss and {{ site.data.talent.mote }} doesn’t change that (as it buffs only one {{ site.data.spell.cl }}, which is a drop in the ocean). {{ site.data.talent.afs }} and {{ site.data.talent.tm }}, on the other hand,  provide strong AoE impact. Adding {{ site.data.spell.eq }} to this (which would make the spell more like the Tier 21 2-piece bonus it appears to be based on) would make it more useful at 3 targets, but for pure AoE (at 4 or more targets) it still provides no impact.

### Level 60
- {{ site.data.talent.se }}
> Does not have a direct AoE component.
> Stacking cast time buff for {{ site.data.spell.cl }}/{{ site.data.spell.lb }} does not affect the GCD, high stacks can see the cast time for either drop under the GCD.

### Level 75
- {{ site.data.talent.wind_rush_totem }}
> Does not have an effect range indicator when placed, making it difficult to be certain that you're running through it at times.

### Level 90
- {{ site.data.talent.if }}
> Offers no AoE value. {{ site.data.talent.er }} continues during AoE. {{ site.data.talent.pe }} adds an AoE ability to the Elementals. ({{ site.data.talent.se }} gets a HUGE AoE ability from this)

This letter was created by
- [Binkenstein](https://twitter.com/binkenstein)
- [Bloodmallet(EU)](https://twitter.com/bloodmallet)
- [Gistwiki](https://twitter.com/Gistwiki)
- [Slanderman](https://twitter.com/slanderman27)

Many more helped, but aren't listed here. We sincerely hope it can help to improve the future or Elemental Shamans.

Parallel posts of this open letter can be found in the official forums ([US]()/[EU]()), [StormEarthandLava](), and [Binkenstein's blog]().
