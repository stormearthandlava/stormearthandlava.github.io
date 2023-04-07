---
layout: page
title: "Mythic+ DF Season 2"
last_update: 16/02/2023
game_version: 10.0.7 Dragonflight
author: Elivrio
toc: true
big_article: true
---

# Introduction

This guide was made possible by:

* Altenna (Discord: JudgeJames#0001 \| [Twitch](https://www.twitch.tv/judgejames) \| [Twitter](https://twitter.com/_judgejames_))
* Amani (Discord: Amani#0001 \| [Discord Server](https://discordapp.com/invite/zTQhBn8) \| [YouTube](https://www.youtube.com/channel/UC5IikzgR1TeED-DxPLqISHg))
* Elivrio (Discord: Elivrio#1450, in-game: Tyrindra-Ysondre[EU])
* Eokira (Discord: Eokira#7823)
* Gaka (Discord: Gaka#7410)
* HawkCorrigan (Discord: HawkCorrigan#1811)

Information on this page is written with the assumption that you understand the new priority list and talents in Dragonflight Season 1. If you have not done so, we highly recommend reading our other resources to learn about them!

This guide is intended to help you identify critical mobs and abilities as well as improve your mechanical literacy in using your toolkit as an Elemental Shaman in each dungeon. If you have suggestions to improve the information in this guide please contact Eokira#7823 using the [Earthshrine Elemental channel](https://discord.gg/pGkPDzh7rP) or the [Storm, Earth & Lava discord](https://discord.gg/y5dUf3PWrU).

<hr>

# Talents

There are two main build that will be used in Dragonflight Season one : Wildfire and Lightning. You can find variation on each of them in the [build page](https://stormearthandlava.com/guide/general/builds.html).

This page will only note the important utility options that are available to you as an Elemental Shaman. Those remain suggestions and depending on your group, you might not need some of the talent suggested in this guide.

### Standard Class tree for S2 Dungeons:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoEgUSChog0ikmSACRAC?width=530&level=70" frameborder="0" width="800px" height="100%"></iframe>
</div>

### A few remarks on this tree:
- It has {{ site.data.talent.totemic_recall }} and points leading up to it. This is due to {{ site.data.talent.lmt }} being a staple in dungeon builds, making {{ site.data.talent.totemic_recall }} a required DPS node. If you are not playing {{ site.data.talent.lmt }}, you can remove the 4 points below {{ site.data.talent.gust_of_wind }} and allocate them elsewhere.
- {{ site.data.talent.ee }} could be flexed around into another utility option but I believe it is the best single all rounder node to get to 20 points.
- {{ site.data.talent.purge }} is recommended in all dungeon because of its high value this season.
- Some people spec out of {{ site.data.spell.frs }}. It is still a very useful movement global, even without {{ site.data.talent.if }}.
- {{ site.data.talent.ns }} could be dropped for another utility node, its value is high but isn't mandatory by any means.

### The Last 4 Points
Depending on the dungeon you are running and the group you're in, here is a list of good options to pick from:
- {{ site.data.talent.earth_shield }} is a 2 points investments as you have to pick {{ site.data.talent.chain_heal }} to get it but it gives pretty good sustain.
- {{ site.data.talent.thunderous_paws }} gives you a slow dispel and a burst of mobility that is often useful.
- {{ site.data.talent.spirit_wolf }} is better mobility on a long distance, and can be used as a defensive.
- {{ site.data.talent.healing_stream_totem }} and {{ site.data.talent.swirling_currents }} are good off-healing CDs. But the fact that you cannot predict who it will heal, paired with the GCD loss each time you use it make it very suboptimal and situational.
- {{ site.data.talent.tremor_totem }} has a lot of minor uses this season but nothing... groundbreaking.
- {{ site.data.talent.static_charge }} will allow you to have {{ site.data.talent.capacitor_totem }} on every packs. Very useful to complement another Class AoE CC.
- {{ site.data.talent.guardians_cudgel }} on the other hand, will be best used when you are the only AoE CC of the group, or if you need successive interrupts on a pack ({{ site.data.dungeon.cos.blazing_imp }} in {{ site.data.dungeon.cos.cos }} for example).
- {{ site.data.talent.brimming_with_life }} is still a 8% max HP, even if it has the worst design in our whole tree.
- {{ site.data.talent.cleanse_spirit }} is used only in Temple of the Jade Serpent this season, you can spend that point elsewhere when you're not in it. Note that the healers that cannot remove Curses are: {{ site.data.externals.monk }}, {{ site.data.externals.paladin }} and {{ site.data.externals.priest }}
- {{ site.data.talent.hex }} can be used to control Patrol's pathing and as a hard CC in general.
- {{ site.data.talent.thunderstorm }} has some niche uses to gather pulls or deal with {{ site.data.affixes.sanguine }}. It can also be used as a Hard CC but {{ site.data.talent.thundershock }} will be better in that case. It’s also not that easy to utilize for less experienced players as it requires good positioning and awareness of timings to actually interrupt casts.
- {{ site.data.talent.totemic_focus }} is a nice passive that will make it less likely for your tank to kite out of {{ site.data.talent.lmt }}'s range. The duration and width on {{ site.data.talent.wrt }} can also be nice.
- {{ site.data.talent.spirit_walk }} is sometimes used as a slow dispel instead of {{ site.data.talent.gust_of_wind }}.
- {{ site.data.talent.mana_spring_totem }} is less potent in dungeon than it is in raid. It's nice to have but doesn't really provide a lot either.
- {{ site.data.talent.poison_cleansing_totem }} has a lot of minor uses this season but nothing... incurable.
- {{ site.data.talent.stoneskin_totem }} is a very situational talent which gains a lot of value in higher keys, saving your tank and your party from big physical attacks and bleeds.

### 24 keys and higher:
When pushing in higher keys, some talents become mandatory to survive:
- {{ site.data.talent.spirit_wolf }} is used as a defensive talent, requiring you to sit and tank the damage in wolf form until it's safe to switch back.
- {{ site.data.talent.brimming_with_life }} is required for the 8% max HP. In certain dungeons at this key level, if you lose {{ site.data.spell.ankh }}, it can instantly be a deplete because you will die on other abilities later on.  

*Note: Again, these become mandatory only in higher keys and can be skipped when you are not in the hardest version of m+.*

<hr>

# Miscellaneous Tips

* Although strategies are listed for mobs and bosses, communicating with your group how each pull should be executed is more important. Some suggestions may not be applicable depending on your group's strategy. For example, plan with your group in advance on where to use {{ site.data.spell.bl }}.

* **Stop cast**, or **Hard CC**, refers to cancelling enemy casts using hard Crowd Control abilities. While some casts cannot be interrupted, they can be cancelled by other means. Regularly be mindful of lethal trash abilities. Also know what you can do to stop a cast and look for alternative ways to interrupt casts if no interrupts are available. Elemental Shaman may stop casts with {{ site.data.talent.capacitor_totem }}, {{ site.data.talent.hex }}, {{ site.data.talent.thunderstorm }} (or {{ site.data.talent.thundershock }}), {{ site.data.talent.lightning_lasso }} and {{ site.data.spell.eq }}'s knockdowns.

* **Line of Sight**, or **LoS**, refers to hiding behind a wall or structure to prevent an enemy's ability from targeting or damaging you. Like player casting, mobs must see their target for their spell to cast. Positioning behind a wall or structure breaks their line of sight and stops an enemy from casting; in other words, if you are not within line of sight of a mob, the mob is not within line of sight of you. There are many strategic uses for line of sighting mechanics, such as ({{ site.data.dungeon.cos.fel_detonation }} from {{ site.data.dungeon.cos.felbound_enforcer }} in {{ site.data.dungeon.cos.cos }} in Season 1). As you practice new dungeons, be mindful of your environmental surroundings and identify opportunities to utilize nearby structures to line of sight mobs.

* Routinely support your healer and your group with healing abilities such as {{ site.data.talent.ag }}, {{ site.data.talent.healing_stream_totem }} or even {{ site.data.talent.cleanse_spirit }}.

* Often times, your tank may need to kite. Remember the kiting tools at your disposal ({{ site.data.spell.earthbind_totem }}, {{ site.data.spell.frs }}, {{ site.data.talent.capacitor_totem }}, etc.) to distance trash packs away from your tank.

* Use your CDs. {{ site.data.talent.fe }}, {{ site.data.talent.se }}, {{ site.data.talent.sk }}, {{ site.data.talent.lmt }} or even {{ site.data.talent.ee }}, {{ site.data.talent.swg }} and {{ site.data.talent.ag }} are useless if you never press them cause you are waiting for "the right moment". Planning CDs is even better but learn to press them first and foremost.

* Try to setup pulls in advance. In Wildfire builds, try to keep maelstrom at the end of a pack to get {{ site.data.spell.eq }}, {{ site.data.talent.sop }} and {{ site.data.spell.fs }} spreading at the start of the next pull. In Lightning builds, try to get an {{ site.data.talent.eogs }} buff ready when the pull is being setup by the tank. Try to cast {{ site.data.talent.sk }} before pulls to keep uptime during it, etc.

* {{ site.data.talent.ee }} is a potent ability best used to soak damage away from the tank or as an emergency button to avoid a party wipe. Communicate with your tank on using {{ site.data.talent.ee }} for challenging trash packs as well as remind your healer to keep the {{ site.data.talent.ee }} healthy as needed. Remember that with {{ site.data.talent.primal_elementalist }}, you can manually move the pet and single-target stun with {{ site.data.spell.pulverize }}. However, keep in mind that you cannot have {{ site.data.talent.ee }} and {{ site.data.talent.fe }} summoned at the same time with {{ site.data.talent.primal_elementalist }}.

* Die and retry. You need to experience a lot of death and bad keys to know when a key is good.

* Doing m+ with Pick Up Groups (PUGs) is a pain cause they expect you to already have the experience. Take your time, mute people if you have to, the only way to get better is to play.  

* Scaling isn't linear. That means that going from 15s to 16s is way easier than going from 19s to 20s. You are not bad, the game is making it more difficult.

* [Learn to log your dungeon runs!](https://www.warcraftlogs.com/help/start) Warcraft Logs filters dungeons with pull-by-pull analyses and records replays of dungeon runs. Having logs available to share is helpful for you to receive actionable feedback.

<hr>

# Affixes

### Season 2 changes :
**There will be no seasonal affixes this season.** Some affixes around the Level 7 bracket have been updated and reworked to be more better handled.

### Level 2:

* {{ site.data.affixes.fortified }}: Consider using {{ site.data.spell.bl }} on hard mob pulls.
* {{ site.data.affixes.tyrannical }}: Boss fights turn into a battle of endurance.

*Note: Unlike many of the previous extensions, the balance between these two affixes is quite good. As normal mobs are generally easier to navigate than bosses, keys during {{ site.data.affixes.fortified }} weeks will usually be easier to finish but also harder to do in time, since 60% to 70% of the timer in a key is spent doing mobs. On the contrary, hard bosses during a {{ site.data.affixes.tyrannical }} week can be huge walls that will stop you from finishing the key. But the timer will often be more lenient.*

### Level 4:

* {{ site.data.affixes.bolstering }}: Damage trash packs down as evenly as you can. Swap to priority damage rotation for any lethal mobs or if mob health within trash packs are uneven.
* {{ site.data.affixes.bursting }}: Support your party members and use your healing abilities to mitigate the {{ site.data.affixes.burst }} debuff. Use {{ site.data.talent.as }} as needed if stacks are high.
* {{ site.data.affixes.raging }}: Be ready to use your kiting toolkit to support your tank when needed. Consider using {{ site.data.talent.capacitor_totem }} and {{ site.data.talent.sk }} to finish {{ site.data.affixes.enrage }} mobs more safely and quickly.
* {{ site.data.affixes.sanguine }}: Damage trash packs down as evenly as you can to lessen time spent in Sanguine, but be sure to not slow or stun mobs dying unevenly. Use {{ site.data.talent.thunderstorm }} as needed to knock mobs out of {{ site.data.affixes.sanguine_ichor }}.
* {{ site.data.affixes.spiteful }}: As mobs are dying, be ready to use your kiting toolkit to support your melee players. Consider taking advantage of {{ site.data.affixes.spiteful_shade }} as additional {{ site.data.spell.cl }} or {{ site.data.spell.fs }} targets.

### Level 7:

* {{ site.data.affixes.explosive }}: {{ site.data.affixes.explosives }} orbs can be destroyed in a single {{ site.data.spell.frs }} global. This will be your most efficient tool to deal with them as your other abilities are more valuable for trash.
* {{ site.data.affixes.grievous }}: Remember that direct heals remove one stack of {{ site.data.affixes.grievous_wound }}. Support your party members with {{ site.data.spell.healing_surge }} and {{ site.data.talent.ag }} as needed.
* {{ site.data.affixes.quaking }}: Maintain your distance from party members, and be mindful about canceling casts if {{ site.data.affixes.quake }} overlaps with {{ site.data.talent.swg }}.
* {{ site.data.affixes.storming }}: Maintain your distance from mobs to avoid {{ site.data.affixes.storming }}. Use {{ site.data.talent.swg }} as needed in tight spaces or when maneuvering any mechanics.
* {{ site.data.affixes.volcanic }}: Watch your feet. Use {{ site.data.talent.swg }} as needed to maintain your damage uptime while avoiding {{ site.data.affixes.volcanic_plume }}.

<hr>

# Dungeons

<p style="color:red" align="center">Click on a dungeon banner to expand it.</p>

<div class="dungeon-accordion">

<div id="accordion">
<div class="card">
<div class="card-header" id="bh">
<div data-toggle="collapse" data-target="#bh-collapse" aria-expanded="true" aria-controls="bh-collapse" class="dungeon-header bh"><h2>Brackenhide Hollow</h2></div>
</div>
<div id="bh-collapse" class="collapse" aria-labelledby="bh" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices
* {{ site.data.talent.tremor_totem }} can be very useful to prevent catastrophic situations with {{ site.data.dungeon.bh.hideous_cackle }}. It is recommended but not mandatory.
* {{ site.data.talent.purge }} is good as always in dungeon.

<hr>

### Dungeon buffs

Multiple {{ site.data.dungeon.bh.decaying_cauldron }} are located throughout the dungeon. A player with at least 25 skill in Dragon isles {{ site.data.item.alchemy }} can interact with it to purify it. This will allow players to get a {{ site.data.dungeon.bh.cleansed_rot }} buff by clicking on it. {{ site.data.dungeon.bh.cleansed_rot }} dispels one disease on the player when used as an extra button.

<hr>

### Gnolls Gang Bosses Notable Trash Mobs

**{{ site.data.dungeon.bh.claw_fighter }}**
* Use {{ site.data.talent.swg }} to kite {{ site.data.dungeon.bh.vicious_clawmangle }}. Be ready to use {{ site.data.talent.as }} if needed.

**{{ site.data.dungeon.bh.cruel_bonecrusher }}**
* Just does tank Damage.

**{{ site.data.dungeon.bh.vicious_hyena }}**
* Use {{ site.data.talent.swg }} to kite when affected by {{ site.data.dungeon.bh.scented_meat }}. Be ready to use {{ site.data.talent.as }} if needed.

**{{ site.data.dungeon.bh.bonebolt_hunter }}**
* They do a lot of unavoidable damage with {{ site.data.dungeon.bh.shoot }} and {{ site.data.dungeon.bh.bone_bolt}}. Be ready to use {{ site.data.talent.as }} as needed.
* Move out of {{ site.data.dungeon.bh.toxic_trap }}.

**{{ site.data.dungeon.bh.trickclaw_mystic }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.earth_bolt }}.
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.bh.focus_earth }}.

**{{ site.data.dungeon.bh.decay_speaker }}**
* Always prio focus this mob.
* Dodge the green {{ site.data.dungeon.bh.withering_burst }} swirlies. Getting hit by one will apply {{ site.data.dungeon.bh.withering }}, and that sucks.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.decay_surge }}.
* Quickly nuke {{ site.data.dungeon.bh.rotchanting_totem }} whenever it's summoned or it will buff nearby {{ site.data.dungeon.bh.trickclaw_mystic }}.

**{{ site.data.dungeon.bh.bracken_warscourge }}**
* {{ site.data.dungeon.bh.pack_tactics }} will buff its nearby ally. Do not do this mob in large pulls or kill it quickly.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.hideous_cackle }}. Use {{ site.data.talent.tremor_totem }} if a cast is going through to avoid a catastrophe.
* Stay farther than 5 yards away to ignore {{ site.data.dungeon.bh.ragestorm }}.

<hr>

## {{ site.data.dungeon.bh.rira_hackclaw }}'s War Band
* Have {{ site.data.spell.fs }} active on all targets for {{ site.data.talent.splinter }} and {{ site.data.talent.sfd }} value.
* Cleave them down at the same time, they will gain {{ site.data.dungeon.bh.bloodfrenzy }} whenever one of them drops below 15% HP.
* The bosses gain haste with {{ site.data.dungeon.bh.prey_on_the_weak }} whenever players are below 90% HP. If needed, use {{ site.data.talent.ag }}, or even {{ site.data.talent.hst }} and {{ site.data.spell.healing_surge }} to help the healer remove the {{ site.data.dungeon.bh.predatory_instincts }} stacks.
* Each Gnoll also its own abilities, making this fight hard to learn.

### {{ site.data.dungeon.bh.rira_hackclaw }}
  - Never be on the tank, {{ site.data.dungeon.bh.cleave }} cleaves (duh).
  - Hide behind the Tank when targeted by {{ site.data.dungeon.bh.savage_charge }}.
  - Kite and stay farther than 8 yards away during {{ site.data.dungeon.bh.bladestorm }}. Use {{ site.data.talent.swg }} to keep uptime while kiting.

### {{ site.data.dungeon.bh.tricktotem }}
  - Assign a party member to always interrupt {{ site.data.dungeon.bh.greater_healing_rapids }}. Interrupt {{ site.data.dungeon.bh.earth_bolt_boss }} with the group other kicks.
  - Nuke {{ site.data.dungeon.bh.hextrick_totem }} to help your critterised party members.

### {{ site.data.dungeon.bh.gashtooth }}
  - Use {{ site.data.talent.ag }} to help your healer during {{ site.data.dungeon.bh.gash_frenzy}}.
  - Use {{ site.data.talent.as }}, {{ site.data.talent.ee }}, {{ site.data.item.potion_rhp }} and {{ site.data.externals.hs }} as needed to survive {{ site.data.dungeon.bh.marked_for_butchery}}.

<hr>

### Hyena Lover Notable Trash Mobs

**{{ site.data.dungeon.bh.fleshripper_vulture }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.screech }}.

**{{ site.data.dungeon.bh.gutchewer_bear }}**
* Just does tank Damage.

**{{ site.data.dungeon.bh.rotbow_stalker }}**
* {{ site.data.dungeon.bh.pack_tactics }} will buff its nearby ally. Do not do this mob in large pulls or kill it quickly.
* They do a lot of unavoidable damage with {{ site.data.dungeon.bh.shoot }} and {{ site.data.dungeon.bh.bone_bolt}}. Be ready to use {{ site.data.talent.as }} as needed.
* Get out of their {{ site.data.dungeon.bh.bone_bolt_volley }} frontal.
* {{ site.data.dungeon.bh.scented_meat }} is a debuff that will make any {{ site.data.dungeon.bh.vicious_hyena }}, {{ site.data.dungeon.bh.fleshripper_vulture }} and {{ site.data.dungeon.bh.gutchewer_bear }} in the area attack the targeted player. Stay attentive on who the debuff goes, use {{ site.data.spell.earthbind_totem }} and {{ site.data.talent.capacitor_totem }} to help the focused player kite. Use {{ site.data.talent.swg }} to keep uptime while kiting.

**{{ site.data.dungeon.bh.gutstabber }}**
* This mobs use {{ site.data.dungeon.bh.stealth }} and are scattered in the area. Try to learn their position to avoid running randomly into them.
* Be ready to use {{ site.data.talent.as }} if you body pull or are targeted by {{ site.data.dungeon.bh.withering_poison }}.

<hr>

## {{ site.data.dungeon.bh.gutshot }}
* Have {{ site.data.spell.fs }} active on all targets for {{ site.data.talent.splinter }} and {{ site.data.talent.sfd }} value.
* Dodge {{ site.data.dungeon.bh.bounding_leap }} brown swirly and {{ site.data.dungeon.bh.ensnaring_trap }} grey swirly.
* Kill the {{ site.data.dungeon.bh.rotfang_hyena }} as soon as possible.
* {{ site.data.dungeon.bh.meat_toss }} will make the {{ site.data.dungeon.bh.rotfang_hyena }} attack the targeted player. Kite them into the {{ site.data.dungeon.bh.ensnaring_trap }} for free damage and CC. Use {{ site.data.talent.swg }} to keep uptime while kiting.
* Beware of {{ site.data.dungeon.bh.masters_call }} freeing the trapped {{ site.data.dungeon.bh.rotfang_hyena }} and giving them movement speed. Be ready to get away.
* Do not bait {{ site.data.dungeon.bh.ensnaring_trap }} behind the tank, they will get knocked back by {{ site.data.dungeon.bh.gut_shot }}.

<hr>

### Rotten Tree Notable Trash Mobs

Going straight from {{ site.data.dungeon.bh.gutshot }} to {{ site.data.dungeon.bh.treemouth }} area, you should only encounter one new type of mob (a mini-boss).

## {{ site.data.dungeon.bh.stinkbreath }}
* Stay relatively close, but not closer than 7 yards to ignore {{ site.data.dungeon.bh.violent_whirlwind }}.
* Quickly move to the side when targeted by the {{ site.data.dungeon.bh.stink_breath }} frontal or you will be {{ site.data.dungeon.bh.disoriented }}. Be careful, the cast time is short. Use {{ site.data.talent.swg }} to keep uptime while dodging.
* Be careful not to fall off the bridge if you plan to use {{ site.data.talent.gust_of_wind }} to dodge {{ site.data.dungeon.bh.stink_breath }}.

Taking a detour, it's also possible to encounter new mobs. They shouldn't be in most route, but here are some advices on how to handle them.

## {{ site.data.dungeon.bh.treemouth }} optional trash

**{{ site.data.dungeon.bh.decaying_slime }}**
* It will {{ site.data.dungeon.bh.burst }} on death, move out of it.

**{{ site.data.dungeon.bh.infected_lasher }}**
* Just does tank damage.

**{{ site.data.dungeon.bh.brackenhide_shaper }}**
* use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.touch_of_decay }}.
* Don't pull aggro on the new {{ site.data.dungeon.bh.infected_lasher }} summoned by {{ site.data.dungeon.bh.summon_lashers }}.

**{{ site.data.dungeon.bh.decayed_elder }}**
* Don't pull aggro on the new {{ site.data.dungeon.bh.infected_lasher }} summoned by {{ site.data.dungeon.bh.summon_lasher }}.
* Use {{ site.data.talent.thunderous_paws }} to get out of {{ site.data.dungeon.bh.decaying_roots }}.

**{{ site.data.dungeon.bh.wilted_oak }}**
* This is the most dangerous enemy in the area, be sure to focus it.
* Don't pull aggro on the new {{ site.data.dungeon.bh.infected_lasher }} summoned by {{ site.data.dungeon.bh.essence_of_decay }}.
* Stay away from it to ignore {{ site.data.dungeon.bh.stomp }}.
* Dodge the {{ site.data.dungeon.bh.necrotic_breath }} frontal.

<hr>

## {{ site.data.dungeon.bh.treemouth }}
* Don't be on the tank, {{ site.data.dungeon.bh.vine_whip }} and {{ site.data.dungeon.bh.decay_spray }} cleave!
* {{ site.data.dungeon.bh.decay_spray }} will summon 4 {{ site.data.dungeon.bh.decaying_slime }}. Cleave them and use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.gushing_ooze }}.
* Spread {{ site.data.spell.fs }} to all targets for {{ site.data.talent.splinter }} value!
* Use {{ site.data.talent.swg }} to kite away while {{ site.data.dungeon.bh.grasping_vines }} is pulling you. Don't walk into {{ site.data.dungeon.bh.withering_away }} puddles.
* {{ site.data.dungeon.bh.treemouth }} will {{ site.data.dungeon.bh.consume }} any target within 10 yards after casting {{ site.data.dungeon.bh.grasping_vines }}.
If no player is consumed, it will gain {{ site.data.dungeon.bh.starving_frenzy }}. You need to rotate one player to be eaten.
* You can still cast while consumed. Use {{ site.data.talent.as }}, {{ site.data.talent.ee }}, {{ site.data.item.potion_rhp }} and {{ site.data.spell.healing_surge }} to stay alive at all cost.

<hr>

### Old Gnoll Witch Notable Trash Mobs

**{{ site.data.dungeon.bh.filth_caller }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.decay_surge }}.
* Move out of {{ site.data.dungeon.bh.rotting_surge }} green swirly. Use {{ site.data.talent.swg }} to keep uptime while moving.

**{{ site.data.dungeon.bh.disease_slasher }} and {{ site.data.dungeon.bh.wither_biter }}**
* They just do tank damage.

**{{ site.data.dungeon.bh.fetid_rotsinger }}**
* {{ site.data.dungeon.bh.pack_tactics }} will buff its nearby ally. Do not do this mob in large pulls or kill it quickly.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.burst_of_decay}}.
* **IMMMEDIATELY** swap on the {{ site.data.dungeon.bh.decay_totem }} whenever it's spawned by {{ site.data.dungeon.bh.summon_totem }}.

**{{ site.data.dungeon.bh.vile_rothexer }}**
* Stay spreaded at 5 yards to avoid spreading {{ site.data.dungeon.bh.withering_contagion }} to your party.
* If you can, stay farther than 30 yards to avoid {{ site.data.dungeon.bh.siphon_decay }}.
* {{ site.data.spell.wind_shear }} has a 30 yards range. You might want to sit at 25-30 yards to be able to interrupt spells and move out when {{ site.data.dungeon.bh.siphon_decay }} is being casted. Use {{ site.data.talent.swg }} to keep uptime while moving.

<hr>

## {{ site.data.dungeon.bh.decatriarch_wratheye }}
* The room is really small and there are many area denials in the fight. Be ready to move at all time and use {{ site.data.talent.swg }} when needed.
* {{ site.data.dungeon.bh.choking_rotcloud }} is an AoE that rotates around the room. You want to dodge it at all cost to avoid getting {{ site.data.dungeon.bh.withering_rot }} stacks.
* Instantly swap on the {{ site.data.dungeon.bh.rotburst_totem }} whenever it spawns. Use {{ site.data.talent.ag }} to help the healer as needed.
* {{ site.data.dungeon.bh.decaying_strength }} will apply {{ site.data.dungeon.bh.withered_eruption }} to everyone on your team. The more stacks of {{ site.data.dungeon.bh.withering_rot }} you have, the larger the size of the bomb you get. Make sure to spread accordingly!
Use {{ site.data.talent.as }} as needed to survive the initial hit.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="fh">
<div data-toggle="collapse" data-target="#fh-collapse" aria-expanded="true" aria-controls="fh-collapse" class="dungeon-header fh"><h2>Freehold</h2></div>
</div>
<div id="fh-collapse" class="collapse" aria-labelledby="fh" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices
* {{ site.data.talent.purge }} has some uses but could be skipped for other utilities..
* {{ site.data.talent.hex }} has some uses for patrol control, hard CC break and add control on the last boss.

<hr>

### Shitting Parrot Notable Trash Mobs

* Until you engage the first boss, {{ site.data.dungeon.fh.sharkbait }} will send {{ site.data.dungeon.fh.vile_bombardment}} on random party member. Do not stay in melee to bait it away and move out of it.

**{{ site.data.dungeon.fh.irontide_enforcer }}**
* Don't be on the tank, {{ site.data.dungeon.fh.brutal_backhand }} is a frontal on them.

**{{ site.data.dungeon.fh.irontide_mastiff }}**
* Just does tank damage, Sheeesh....

**{{ site.data.dungeon.fh.irontide_corsair }}**
* {{ site.data.talent.poison_cleansing_totem }} can be used to help your tank in higher keys.

**{{ site.data.dungeon.fh.irontide_crackshot }}**
* This mob is immobile, be careful not to get aggro if the tank is not in range of it.
* Dodge {{ site.data.dungeon.fh.azerite_grenade }} swirly.

**{{ site.data.dungeon.fh.irontide_bonesaw }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.fh.healing_balm }}.

<hr>

## {{ site.data.dungeon.fh.skycapn_kragg }}

### Phase 1: {{ site.data.dungeon.fh.sharkbait }}
* Phase ends at 75% of the boss.
* Dodge {{ site.data.dungeon.fh.charrrrrge }} swirly.
* {{ site.data.dungeon.fh.pistol_shot }} can deal huge damage to a random target. Try to never be low on health or use a {{ site.data.talent.as }} when it's coming and you're low on health.

### Phase 2: {{ site.data.dungeon.fh.skycapn_kragg }}
* Bait {{ site.data.dungeon.fh.vile_bombardment }} puddles far from your melees.
* Be farther than 30yds to avoid all damage from {{ site.data.dungeon.fh.azerite_powder_shot }}.
* Dodge {{ site.data.dungeon.fh.dive_bomb }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.fh.revitalizing_brew }}.
<hr>

### Captain Eudora (the others don't matter) Notable Trash Mobs

**{{ site.data.dungeon.fh.blacktooth_brute }}**
* Stay farther than 5 yds away to ignore {{ site.data.dungeon.fh.earth_shaker }}.

**{{ site.data.dungeon.fh.cutwater_duelist }}**
* Move to the side to dodge {{ site.data.dungeon.fh.duelist_dash }} swirly, you will be stun if you are between the mob and his charge point.

**{{ site.data.dungeon.fh.irontide_oarsman }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.fh.sea_spout }}. Move away from the blue swirlies if the cast goes through.

**{{ site.data.dungeon.fh.bilge_rat_padfoot }}**
* They will jump on a random target with {{ site.data.dungeon.fh.plague_step }}. Stay close to melee for cleave purposes.

**{{ site.data.dungeon.fh.bilge_rat_brinescale }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.fh.frost_blast }} in priority and {{ site.data.dungeon.fh.water_bolt }} if possible.

**{{ site.data.dungeon.fh.bilge_rat_buccaneer }}**
* Stay farther than 5 yds away to ignore {{ site.data.dungeon.fh.going_bananas }}.

**{{ site.data.dungeon.fh.bilge_rat_swabby }}**
* This. Is. The. Worst. Mob. In. The. Game. Albeit it's better for caster, {{ site.data.dungeon.fh.slippery_suds }} will stun you if you jump with the debuff. THESE ARE AN ABOMINATION.

**{{ site.data.dungeon.fh.cutwater_knife_juggler }}**
* Stay spreaded from your teammates to avoid sharing {{ site.data.dungeon.fh.ricocheting_throw }} damage.

**{{ site.data.dungeon.fh.vermin_trapper }}**
* Move out of {{ site.data.dungeon.fh.rat_traps }} before it harms. Use {{ site.data.talent.spirit_walk }} to move out if you get rooted.

**{{ site.data.dungeon.fh.soggy_shiprat }}**
* Just does tank damage, Sheeesh....

**{{ site.data.dungeon.fh.blacktooth_knuckleduster }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.fh.shattering_bellow }}. Be careful not to get spell-locked if the cast goes through.

**{{ site.data.dungeon.fh.blacktooth_scrapper }}**
* Kite away when focused by {{ site.data.dungeon.fh.blind_rage }}.

<hr>
## Join a Crew
* Depending on the week, one of the three captains will be your ally. Be sure to do the event in the area before the bossess or they will be buffed by {{ site.data.dungeon.fh.under_one_banner }}.

### Joining the Cutwater
* You will need to get a key by clicking 4 times on {{ site.data.dungeon.fh.murphy }}, a dog pug. A stealthed player can solo this event, or you will need to do packs in the area to be able to click on {{ site.data.dungeon.fh.murphy }}.
* You will gain {{ site.data.dungeon.fh.cutwater_regalia }} by freing {{ site.data.dungeon.fh.otis }} from his cage with the key {{ site.data.dungeon.fh.murphy }} gives you.
* {{ site.data.dungeon.fh.cutwater_knife_juggler }}, {{ site.data.dungeon.fh.cutwater_duelist }}, {{ site.data.dungeon.fh.cutwater_harpooner }} and {{ site.data.dungeon.fh.captain_jolly }} will become friendly toward you.

### Joining the Bilge Rats
* Drink some {{ site.data.dungeon.fh.bilge_rat_brew }} to gain {{ site.data.dungeon.fh.cutwater_regalia }}.
* {{ site.data.dungeon.fh.bilge_rat_padfoot }}, {{ site.data.dungeon.fh.bilge_rat_brinescale }}, {{ site.data.dungeon.fh.bilge_rat_swabby }}, {{ site.data.dungeon.fh.bilge_rat_buccaneer }} and {{ site.data.dungeon.fh.captain_eudora }} will become friendly toward you.

### Joining the Blacktooth
* You need to kill a pack of 6 mobs in a brawl to gain {{ site.data.dungeon.fh.blacktooth_regalia }}.
* {{ site.data.dungeon.fh.blacktooth_brute }}, {{ site.data.dungeon.fh.blacktooth_scrapper }}, {{ site.data.dungeon.fh.blacktooth_knuckleduster }} and {{ site.data.dungeon.fh.captain_raoul }} will become friendly toward you.

<hr>

## Council of Captains
* Depending on the week, one of the three captains will be your ally. Be sure to do the event in the area before the boss or the bosses will be buffed by {{ site.data.dungeon.fh.under_one_banner }}.

### {{ site.data.dungeon.fh.captain_raoul }}
* Free your ally by killing the {{ site.data.dungeon.fh.blackout_barrel }}.
* Stay away from melee to passively avoid {{ site.data.dungeon.fh.barrel_smash }}. This ability has an historically bad hitbox, so stay far to give yourself all chances to dodge it.
* When he is your ally, stand inside of {{ site.data.dungeon.fh.tapped_keg }} to gain 15% damage.

### {{ site.data.dungeon.fh.captain_eudora }}
* The most dangerous of the three, by far.
* {{ site.data.dungeon.fh.powder_shot }} can deal huge damage to a random target. Try to never be low on health or use a {{ site.data.talent.as }} when it's coming and you're low on health.
* {{ site.data.dungeon.fh.grapeshot }} will make her jump to a corner of the arena and shoot huge frontals into the room. Use {{ site.data.talent.swg }} and {{ site.data.spell.ghost_wolf }} to quickly reposition behind or to the side of her and avoid all damage.
* When she is your ally, she will periodically stun one of the other bosses with {{ site.data.dungeon.fh.chain_shot }}.

### {{ site.data.dungeon.fh.captain_jolly }}
* Dodge {{ site.data.dungeon.fh.cutting_surge }} swirly.
* Dodge {{ site.data.dungeon.fh.whirlpool_of_blades }} swirly and the following puddle. Be careful, it will move back toward the boss.
* When he is your ally, he will periodically buff you with {{ site.data.dungeon.fh.trade_winds_vigor }}.

### {{ site.data.dungeon.fh.rummy_mancomb }}, The Barman!
* The barman will throw brews that will do swirlies in the bosses arena. They all have the same animation but two are good and one is bad.
* {{ site.data.dungeon.fh.confidence_boosting_freehold_brew }} and {{ site.data.dungeon.fh.invigorating_freehold_brew }} will buff you and should always be soaked.
* {{ site.data.dungeon.fh.caustic_freehold_brew }} will apply a DoT to anyone who soaks it. The Tank should try to make the bosses soak it, as it will damage them.
* And the best thing is, there's no real way to know which brew is coming without a boss mod or an addon. You could watch the barman cast bar but that's more dangerous than anything as he stands pretty much outside of the arena. [This weakaura](https://wago.io/MugThrow) (by Translit) will tell you when you should soak or not.

<hr>

### ZZZ... Roleplay... Notable Trash Mobs

**{{ site.data.dungeon.fh.irontide_crusher }}**
* Stay farther than 9 yds away to ignore {{ site.data.dungeon.fh.ground_shatter }}.
* Dodge {{ site.data.dungeon.fh.boulder_throw }} swirly.

**{{ site.data.dungeon.fh.cutwater_harpooner }}**
* {{ site.data.dungeon.fh.dragging_harpoon }} can grapple you into melee, which can be very dangerous because of the multiple melee AoE ({{ site.data.dungeon.fh.ground_shatter }}, {{ site.data.dungeon.fh.going_bananas }}, {{ site.data.dungeon.fh.earth_shaker }}, ...). Be ready to move out fast if you get grappled and react with {{ site.data.talent.as }} as needed.

### Ring of Booty
**{{ site.data.dungeon.fh.lightning }}**
* There's no real trick to catch the pig, try to spam click on his spawn location, then chase it in {{ site.data.spell.ghost_wolf }} form

**{{ site.data.dungeon.fh.ludwig_von_tortollan }}**
* He will bully your tank in higher keys, consider using {{ site.data.talent.stoneskin_totem }} to help them.
* Keep your eyes open and dodge the incoming {{ site.data.dungeon.fh.shell_bounce }}. Try to keep {{ site.data.talent.swg }} for when there are multiple shells in the arena.
* Be sure sure to apply {{ site.data.spell.fs }} to the training dummies on the outskirt of the ring for funnel in fire builds.

<hr>

## {{ site.data.dungeon.fh.Trothak }}
* Be sure sure to apply {{ site.data.spell.fs }} to the training dummies on the outskirt of the ring for funnel in fire builds.
* You can completly ignore {{ site.data.dungeon.fh.ripper_punch }} and {{ site.data.dungeon.fh.shark_tornado }} by staying far from the boss.
* {{ site.data.dungeon.fh.shark_toss }} will throw a {{ site.data.dungeon.fh.flailing_shark }} on a random range. {{ site.data.dungeon.fh.flailing_shark }}s will pursue the closest target to them. It's a good thing for the healer to pick it up instead of you for damage uptime, but kiting it with {{ site.data.talent.swg }} is also fine.
* Try to kite {{ site.data.dungeon.fh.flailing_shark }}s into {{ site.data.dungeon.fh.throw_chum }} puddles to slow them and allow you to DPS freely.

<hr>

### Male Ashvane Notable Trash Mobs

**{{ site.data.dungeon.fh.irontide_officer }}**
* Just does tank damage, Sheeesh....

**{{ site.data.dungeon.fh.irontide_stormcaller }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.fh.lightning_bolt }} and {{ site.data.dungeon.fh.thundering_squall }}.

**{{ site.data.dungeon.fh.irontide_ravager }}**
* {{ site.data.dungeon.fh.painful_motivation }} will apply a buff on a enemy that will make them do more damage but also drain their HP. Unless you know your tank is paper made, do not kick it.

**{{ site.data.dungeon.fh.irontide_buccaneer }}**
* {{ site.data.dungeon.fh.blade_barrage }} is a low range frontal channel, just outrange it.

<hr>

## {{ site.data.dungeon.fh.harlan_sweete }}
* Compared to BfA where {{ site.data.dungeon.fh.swiftwind_saber }} did nothing but bump you back and you could ignore the mechanic, it will kill you if a single wind blade hits you. Stand far to see them come toward you and be sure to dodge.
* When targeted by {{ site.data.dungeon.fh.cannon_barrage }}, kite away from the group to drop the {{ site.data.dungeon.fh.fiery_debris }}. You can stutter step to reduce the number of puddles in the arena.
* Use {{ site.data.talent.hex }} or {{ site.data.spell.earthbind_totem }} to keep {{ site.data.dungeon.fh.irontide_grenadier }} far from you.
* At 66% hp, {{ site.data.dungeon.fh.loaded_dice_all_hands }} will triple all of the boss ability. Be sure to kite the {{ site.data.dungeon.fh.cannon_barrage }} in a group.
* At 33%, {{ site.data.dungeon.fh.loaded_dice_man_o_war }} will make the boss take 100% more damage. In higher keys, you want to use everything here before he kills your tank.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="hoi">
<div data-toggle="collapse" data-target="#hoi-collapse" aria-expanded="true" aria-controls="hoi-collapse" class="dungeon-header hoi"><h2>Halls of Infusion</h2></div>
</div>
<div id="hoi-collapse" class="collapse" aria-labelledby="hoi" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices
* {{ site.data.talent.purge }} has some uses but could be skipped for other utilities.
* {{ site.data.talent.spirit_walk }} has some uses but could be skipped for other utilities.
* {{ site.data.talent.earthgrab_totem }} could be used in the frog area, but {{ site.data.talent.wrt }} is quite useful with the long corridors of the dungeon.

<hr>

### Old Keeper Guy Notable Trash Mobs

**{{ site.data.dungeon.hoi.primalist_geomancer }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.earth_shield }}. Use {{ site.data.talent.purge }} to dispel it if the cast goes through.
* Stay farther than 5 yards away to ignore {{ site.data.dungeon.hoi.seismic_slam }}.

**{{ site.data.dungeon.hoi.refti_defender }}**
* Don't be on the tank, {{ site.data.dungeon.hoi.spear_flurry }} cleaves!
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.demoralizing_shout }}.

**{{ site.data.dungeon.hoi.containment_apparatus }}**
* Use hard CC such as {{ site.data.talent.capacitor_totem }} or {{ site.data.talent.thunderstorm }} to cancel {{ site.data.dungeon.hoi.expulse }} at all cost.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.containment_beam }}.  
*Note: It's highly possible that {{ site.data.talent.thunderous_paws }} or {{ site.data.talent.spirit_walk }} can be used to cancel {{ site.data.dungeon.hoi.containment_beam }}, feel free to tag @Elivrio#1450 on the Earthshrine Discord if you have evidence that it works.*

**{{ site.data.dungeon.hoi.primalist_ravager }}**
* {{ site.data.dungeon.hoi.tailwind }} will buff its nearby ally. Do not do this mob in large pulls or kill it quickly.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.blasting_gust }}. Assign a player to always kick this, it is a priority interrupt.

<hr>

## {{ site.data.dungeon.hoi.watcher_irideus }}
### Phase 1
* Dodge the {{ site.data.dungeon.hoi.spark_volley }} blue swirlies. Use {{ site.data.talent.swg }} when needed to keep uptime while dodging.
* Stay spreaded with {{ site.data.dungeon.hoi.power_overload }} debuff. Use {{ site.data.talent.as }} as needed to survive the DoT. Move out of the {{ site.data.dungeon.hoi.power_field }} that it leaves on the ground when removed.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.static_surge }}.  
*TODO: Only the dungeon journal says that {{ site.data.dungeon.hoi.static_surge }} is interrupteable, must be checked.*

### Intermission - Kill adds on shield
* Wait until {{ site.data.dungeon.hoi.nullification_device }} are dragged onto {{ site.data.dungeon.hoi.watcher_irideus }} to kill them. Stay away from their {{ site.data.dungeon.hoi.nullifying_pulse }} on death explosion.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.purifying_blast }}.
* The boss will be more deadly after its transition. Be ready to help your healer with your defensives and off-healing.

<hr>

### Big Frog Notable Trash Mobs

**{{ site.data.dungeon.hoi.primalist_shocktrooper }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.lightning_blast }} with extra kick.
* This mob only does tank damage unless you let it cast {{ site.data.dungeon.hoi.elemental_focus }}. Use hard CC to stop it ({{ site.data.talent.capacitor_totem }} or {{ site.data.talent.thunderstorm }}).  
*TODO: check if {{ site.data.dungeon.hoi.elemental_focus }} is a hard CC break or a normal one.*
* Stay spreaded if the {{ site.data.dungeon.hoi.elemental_focus }} cast is successful to avoid {{ site.data.dungeon.hoi.infused_lightning }}'s chain lightning effect.

**{{ site.data.dungeon.hoi.skulking_zealot }}**
* The mobs are using {{ site.data.dungeon.hoi.stealth }} around the area, try to learn their position to not accidently run into them.
* Kill them somewhat fast to avoid {{ site.data.dungeon.hoi.rising_squall }} scaling to infinity.

**{{ site.data.dungeon.hoi.dazzling_dragonfly }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.dazzle }}.
* {{ site.data.dungeon.hoi.dazzle }} is a 10 yards frontal, don't be in front of them in case you let it go through.

**{{ site.data.dungeon.hoi.curious_swoglet }}**
* They will focus random target and each melee will apply {{ site.data.dungeon.hoi.gulp_swog_toxin }}, which is an instant kill at 10 stacks. Consider CCing them and kiting them. {{ site.data.talent.capacitor_totem }}, {{ site.data.spell.earthbind_totem }}, {{ site.data.talent.thunderstorm }}, {{ site.data.talent.swg }} should be used to try to reset your stacks.

**{{ site.data.dungeon.hoi.flamecaller_aymi }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.pyretic_burst }}.
* Dodge {{ site.data.dungeon.hoi.molten_subduction }} ground swirly, use {{ site.data.talent.spirit_walk }} to dispel its effects if hit.
* Share the damage of {{ site.data.dungeon.hoi.magma_crush }} with your party.  
*TODO: Check that magma crush is indeed a meteor that can be shared, absent from guides.*

**{{ site.data.dungeon.hoi.squallbringer_cyraz }}**
* {{ site.data.dungeon.hoi.squallbringer_cyraz }} will charge and random target with {{ site.data.dungeon.hoi.gale_force_charge }} and channel {{ site.data.dungeon.hoi.whirling_fury }} that will do damage 8 yards around him. Quickly move out if you are targeted.
* Be careful not to pull aggro on {{ site.data.dungeon.hoi.zephyrling }} whenever they are spawned by {{ site.data.dungeon.hoi.zephyrs_call }} (mind your {{ site.data.talent.sk }} timings).

<hr>

## {{ site.data.dungeon.hoi.gulping_goliath }}
* Be ready to use defensives (such as {{ site.data.talent.as }}) when {{ site.data.dungeon.hoi.gulping_goliath }} casts {{ site.data.dungeon.hoi.overpowering_croak }}. Dodge the following {{ site.data.dungeon.hoi.cave_in }} swirlies.
* Kite the {{ site.data.dungeon.hoi.curious_swoglet }}, be mindful of your {{ site.data.dungeon.hoi.gulp_swog_toxin }} stack count. {{ site.data.talent.capacitor_totem }}, {{ site.data.spell.earthbind_totem }}, {{ site.data.talent.thunderstorm }}, {{ site.data.talent.swg }} should be used to try to reset your stacks.
* Move away from {{ site.data.dungeon.hoi.belly_slam }} swirly.
* Once the boss casts {{ site.data.dungeon.hoi.gulp }}, select one player from your party to be deliberately "consumed" to prevent him from getting {{ site.data.dungeon.hoi.hangry }} Buff (cannot be dispelled). Keep in mind once you get {{ site.data.dungeon.hoi.gulp }} you will take initial damage and get 3 applications of {{ site.data.dungeon.hoi.gulp_swog_toxin }}!

<hr>

### Fanatic Elementalist Notable Trash Mobs

**{{ site.data.dungeon.hoi.primalist_galesinger }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.thunderstorm }} in priority, {{ site.data.dungeon.hoi.wind_buffet }} with extra kicks.

**{{ site.data.dungeon.hoi.primalist_icecaller }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.ice_shards }} with spares kicks.

**{{ site.data.dungeon.hoi.primalist_earthshaker }}**
* Stay farther than 8 yards to ignore {{ site.data.dungeon.hoi.rumbling_earth }}
*TODO: Check if it can be kicked*

**{{ site.data.dungeon.hoi.gusting_proto_dragon }}**
* Move aside from the {{ site.data.dungeon.hoi.gusting_breath }} frontal.
* if a {{ site.data.dungeon.hoi.primalist_galesinger }} is within 15yrds, {{ site.data.dungeon.hoi.primal_affinity_wind }} will allow the {{ site.data.dungeon.hoi.gusting_proto_dragon }} to cast {{ site.data.dungeon.hoi.binding_winds }}.
* Ask for a magic dispel if you are targeted by {{ site.data.dungeon.hoi.binding_winds }}.

**{{ site.data.dungeon.hoi.glacial_proto_dragon }}**
* Move aside from the {{ site.data.dungeon.hoi.oceanic_breath }} frontal.
* if a {{ site.data.dungeon.hoi.primalist_icecaller }} is within 15yrds, {{ site.data.dungeon.hoi.primal_affinity_ice }} will allow the {{ site.data.dungeon.hoi.glacial_proto_dragon }} to cast {{ site.data.dungeon.hoi.deep_chill }}.
* Use {{ site.data.talent.thunderous_paws }} or {{ site.data.talent.spirit_walk }} to remove {{ site.data.dungeon.hoi.deep_chill }}.

**{{ site.data.dungeon.hoi.subterranean_proto_dragon }}**
* Move aside from the {{ site.data.dungeon.hoi.tectonic_breath }} frontal.
* if a {{ site.data.dungeon.hoi.primalist_earthshaker }} is within 15yrds, {{ site.data.dungeon.hoi.primal_affinity_earth }} will allow the {{ site.data.dungeon.hoi.subterranean_proto_dragon }} to cast {{ site.data.dungeon.hoi.creeping_mold }}.
* Be mindful of your health if you get the {{ site.data.dungeon.hoi.creeping_mold }} debuff, use defensives as needed to survive.

<hr>

## {{ site.data.dungeon.hoi.khajin_the_unyielding }}
* Hide behind an {{ site.data.dungeon.hoi.ice_boulder }} during {{ site.data.dungeon.hoi.hailstorm }}. They don't break Line of Sight so be sure to keep uptime on the boss.
* An {{ site.data.dungeon.hoi.ice_boulder }} will break down into an {{ site.data.dungeon.hoi.avalanche }} after tanking 2 hits, dealing damage in a 12 yards AoE. When you hide behind the {{ site.data.dungeon.hoi.ice_boulder }}, you can do so while being farther than 12 yards away from it to take no damage. Just make sure that the {{ site.data.dungeon.hoi.ice_boulder }} is between the boss and you.
* Stay away from the {{ site.data.dungeon.hoi.ice_boulder }} outside of {{ site.data.dungeon.hoi.hailstorm }} to bait {{ site.data.dungeon.hoi.frost_cyclone }} away.
* Be ready to use defensive if you are targeted by {{ site.data.dungeon.hoi.frost_shock }}.
* Dodge the rings from {{ site.data.dungeon.hoi.glacial_surge }}.

<hr>

### Big Elemental Dude Notable Trash Mobs
The whole area to the last boss is a gauntlet where {{ site.data.dungeon.hoi.crashing_tsunami }} will constantly come into you. {{ site.data.talent.swg }} is very potent in that area to dodge the incoming waves.

**{{ site.data.dungeon.hoi.aqua_rager }}**
* Mostly does tank damage.
* At 20% hp, it will cast {{ site.data.dungeon.hoi.tidal_divergence }} that must be interrupted with {{ site.data.spell.wind_shear }} or it will spawn 4 {{ site.data.dungeon.hoi.aqualing }}.

**{{ site.data.dungeon.hoi.aqualing }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.water_bolt }}. It is not a priority to get these.

**{{ site.data.dungeon.hoi.infuser_sariya }}**
* When you engage this mini-boss, the {{ site.data.dungeon.hoi.crashing_tsunami }} gauntlet will stop.
* {{ site.data.dungeon.hoi.inundate }} does party-wide unavoidable damage. Use {{ site.data.talent.ag }} to help your healer.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.aqueous_barrier }}.
* Stay farther than 12 yards away to ignore {{ site.data.dungeon.hoi.flash_flood }}.

<hr>

## {{ site.data.dungeon.hoi.primal_tsunami }}
### Phase 1
* Avoid the swirlies and spheres created by {{ site.data.dungeon.hoi.infused_globules }}. Use {{ site.data.talent.thunderous_paws }} or {{ site.data.talent.spirit_walk }} to remove the {{ site.data.dungeon.hoi.waterlogged }} debuff if you ever run into one.
* Avoid the incoming {{ site.data.dungeon.hoi.rogue_waves }}.
* Help your healer with {{ site.data.talent.ag }} during {{ site.data.dungeon.hoi.tempests_fury }}.

### Intermission - Run back to the boss
* You will be sent at the end of the bridge by {{ site.data.dungeon.hoi.cast_away }}.
* Dodge the incoming {{ site.data.dungeon.hoi.crashing_tsunami }} and {{ site.data.dungeon.hoi.infused_globules }} to quickly run back. This is great time to use {{ site.data.talent.wrt }} and {{ site.data.talent.spirit_walk }}.
* Kill the {{ site.data.dungeon.hoi.primalist_infuser }} to end this phase.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.infuse }} from {{ site.data.dungeon.hoi.primalist_infuser }}.
* {{ site.data.dungeon.hoi.inundate }} does party-wide unavoidable damage. Use {{ site.data.talent.ag }} to help your healer.

</div>
</div>
</div>


<div class="card">
<div class="card-header" id="nl">
<div data-toggle="collapse" data-target="#nl-collapse" aria-expanded="true" aria-controls="nl-collapse" class="dungeon-header nl"><h2>Neltharion's Lair</h2></div>
</div>
<div id="nl-collapse" class="collapse" aria-labelledby="nl" data-parent="#accordion">
<div class="card-body" markdown="1">

## Notable Talent Choices
*

<hr>

### Rocky Dude Notable Trash Mobs

**{{ site.data.dungeon.nl.rockback_gnasher }}**
* Use {{ site.data.spell.wind_shear }} to interrupt { site.data.dungeon.nl.stone_gaze }}.

**{{ site.data.dungeon.nl.embershard_scorpion }}**
* Just does Tank damage!

**{{ site.data.dungeon.nl.understone_drudge }}**
* These can easily be skipped by running in the water to the side (see this video). They only do tank damage anyway.

**{{ site.data.dungeon.nl.vileshard_crawler }}**
* {{ site.data.dungeon.nl.acid_splatter }} will spawn an acid pool on death.

**{{ site.data.dungeon.nl.vileshard_chunk }}**
* Stay farther than 10 yds away to passively dodge {{ site.data.dungeon.nl.crush }}, but don't be too far out of melee if a {{ site.data.dungeon.nl.tarspitter_lurker }} is in the pack (see below).

**{{ site.data.dungeon.nl.tarspitter_lurker }}**
* They will teleport behind a random player with {{ site.data.dungeon.nl.submerge }} then cast the {{ site.data.dungeon.nl.viscid_bile }} frontal. Don't be too far from melee for cleave purposes.
* {{ site.data.dungeon.nl.rancid_ooze }} will spawn an acid pool on death.

**{{ site.data.dungeon.nl.vileshard_hulk }}**
* Sidestep the {{ site.data.dungeon.nl.piercing_shards }} frontal. It's a 45 yds frontal and that must be dodged to the side.

<hr>

## {{ site.data.dungeon.nl.rokmora }}
* {{ site.data.dungeon.nl.brittle }} will cause {{ site.data.dungeon.nl.blightshard_skitter }} to spawn periodically. They will drop a {{ site.data.dungeon.nl.choking_dust }} on death, try to kill them out of way.
* {{ site.data.dungeon.nl.shatter }} is a party wide AoE that will also cause {{ site.data.dungeon.nl.rupturing_skitter }}, meaning you have to kill the {{ site.data.dungeon.nl.blightshard_skitter }}s before it is cast. Use {{ site.data.talent.as }} (and {{ site.data.}})
* After each {{ site.data.dungeon.nl.shatter }}, the ground will be covered by {{ site.data.dungeon.nl.crystalline_ground }} for a few seconds, damaging you on movement.
* Sidestep the {{ site.data.dungeon.nl.razor_shards }} frontal. It's a 45 yds frontal cone and that must be dodged to the side.

<hr>

### Drogbar Sorcerer Notable Trash Mobs

**{{ site.data.dungeon.nl.rockback_gnasher }}**
* Use {{ site.data.spell.wind_shear }}.
* Use {{ site.data.talent.purge }}.
* Dodge {{ site.data.dungeon.nl.crush }}

<hr>

## {{ site.data.dungeon.nl.ularogg_cragshaper }}
* Use {{ site.data.talent.ag }}
* Dodge {{ site.data.dungeon.nl.crush }}

<hr>

### Bonemaw 2 Notable Trash Mobs
**{{ site.data.dungeon.nl.rockback_gnasher }}**
* Use {{ site.data.spell.wind_shear }}.
* Use {{ site.data.talent.purge }}.
* Dodge {{ site.data.dungeon.nl.crush }}

<hr>

## {{ site.data.dungeon.nl.naraxas }}
* Use {{ site.data.talent.ag }}
* Dodge {{ site.data.dungeon.nl.crush }}

<hr>

# Big hammer to compensate Notable Trash Mobs
**{{ site.data.dungeon.nl.rockback_gnasher }}**
* Use {{ site.data.spell.wind_shear }}.
* Use {{ site.data.talent.purge }}.
* Dodge {{ site.data.dungeon.nl.crush }}

<hr>

## {{ site.data.dungeon.nl.dargrul }}
* Use {{ site.data.talent.ag }}
* Dodge {{ site.data.dungeon.nl.crush }}

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="ntr">
<div data-toggle="collapse" data-target="#ntr-collapse" aria-expanded="true" aria-controls="ntr-collapse" class="dungeon-header ntr"><h2>Neltharus</h2></div>
</div>
<div id="ntr-collapse" class="collapse" aria-labelledby="ntr" data-parent="#accordion">
<div class="card-body" markdown="1">

## Notable Talent Choices
* {{ site.data.talent.cleanse_spirit }} is a mandatory talent for the last boss if your group doesn't have a curse dispel.
* {{ site.data.talent.purge }} has some decent uses.

<hr>

### Magma Squid Mammoth Notable Trash Mobs

**{{ site.data.dungeon.ntr.qalashi_warden }}**
* Don't be on the tank, {{ site.data.dungeon.ntr.volcanic_guard }} is a frontal on them.

**{{ site.data.dungeon.ntr.qalashi_spinecrusher }}**
* Only does tank damage.

**{{ site.data.dungeon.ntr.qalashi_thaumaturge }}**
* Use {{ site.data.talent.capacitor_totem }} or another CC to hard-interrupt {{ site.data.dungeon.ntr.magma_conflagration }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ntr.molten_core }}.
* if {{ site.data.dungeon.ntr.molten_core }} isn't interrupted, hard focus the {{ site.data.dungeon.ntr.molten_elemental }} that spawns.

**{{ site.data.dungeon.ntr.ore_elemental }}**
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.ntr.granite_shell }}.

**{{ site.data.dungeon.ntr.molten_elemental }}**
* **This mob is a priority to kill at all cost**.
* {{ site.data.dungeon.ntr.molten_core_buff }} will trigger a {{ site.data.dungeon.ntr.molten_explosion }} every 3s, dealing ramping damage on the party. Use {{ site.data.talent.ag }} to help your healer and {{ site.data.talent.as }} to survive.

**{{ site.data.dungeon.ntr.qalashi_plunderer }}**
* Dodge the {{ site.data.dungeon.ntr.explosive_concoction }} orange swirly !

<hr>

## {{ site.data.dungeon.ntr.magmatusk }}
* The number of {{ site.data.dungeon.ntr.magma_tentacle }} on its back will increase whenever it reaches 100 energy, empowering every other mechanics of the fight.
* Use {{ site.data.talent.ag }} to help your healer during {{ site.data.dungeon.ntr.magma_eruption }} as needed. This is also the best time to use your defensives ({{ site.data.talent.as }}, {{ site.data.talent.ee }}, {{ site.data.item.potion_rhp }}, ...).
* Bait {{ site.data.dungeon.ntr.blazing_charge }} into a wall for uptime purposes.
* Dodge {{ site.data.dungeon.ntr.magma_lob }} red swirlies, {{ site.data.dungeon.ntr.lava_spray }} frontal cone and {{ site.data.dungeon.ntr.lava_wave }}s. Use {{ site.data.talent.swg }} as needed to keep uptime while dodging.

<hr>

### Drake Hunter Notable Trash Mobs

**{{ site.data.dungeon.ntr.tamed_phoenix }}**
* These mobs are similar to the {{ site.data.dungeon.cos.blazing_imp }} in {{ site.data.dungeon.cos.cos }}.
* They will be in packs of 8-10 mobs and constantly cast {{ site.data.dungeon.ntr.ember_reach }}.
* Use {{ site.data.talent.capacitor_totem }} or {{ site.data.talent.thundershock }} to disrupt them.
* Use {{ site.data.spell.wind_shear }} to interrupt as many as possible.

**{{ site.data.dungeon.ntr.qalashi_hunter }}**
* Dodge the {{ site.data.dungeon.ntr.binding_spear }} brown swirly at all cost. Target swap to the {{ site.data.dungeon.ntr.binding_spear_npc }} add that spawns to free your ally fast if they get hit.
* Move out of the {{ site.data.dungeon.ntr.burning_chain }} traps.
* {{ site.data.dungeon.ntr.bold_ambush }} will leave a bleed on you if you're targeted, use {{ site.data.talent.as }} as needed.

**{{ site.data.dungeon.ntr.qalashi_trainee }}**
* Don't be on the tank, {{ site.data.dungeon.ntr.magma_fist }} is a frontal on them.

**{{ site.data.dungeon.ntr.qalashi_bonetender }}**
* Will remain stationary and use {{ site.data.dungeon.ntr.bone_toss }} on random targets. Be ready to pop a defensive when you are targeted at low HP.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ntr.mending_clay }}.
* Move out of the {{ site.data.dungeon.ntr.burning_chain }} traps.

**{{ site.data.dungeon.ntr.overseer_lahar }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ntr.burning_roar }}.
* Stay farther than 15yds away to dodge most of his AoE and dodge the swirlies created by {{ site.data.dungeon.ntr.eruptive_crash }}.

<hr>

## {{ site.data.dungeon.ntr.chargath }}
* {{ site.data.dungeon.ntr.grounding_spear }} is the main mechanic of the fight. You will get chained to a spear and will need to run away to avoid getting pulled into {{ site.data.dungeon.ntr.erupted_ground }}. The tank needs to kite the boss through the chains to break them and eventually stun the boss and make him take 50% more damage.
* Breaking a chain will apply the {{ site.data.dungeon.ntr.slag_eruption }} to all group members. Assist the heal with {{ site.data.talent.ag }} as needed.
* {{ site.data.dungeon.ntr.dragon_strike }} will leave a bleed on you if you're targeted, use {{ site.data.talent.as }} as needed.
* Use {{ site.data.talent.swg }} to keep uptime while running from chain, dodging {{ site.data.dungeon.ntr.lava_splash }} swirlies and {{ site.data.dungeon.ntr.magma_wave }}s.
* Don't be on the tank, {{ site.data.dungeon.ntr.fiery_focus }} cleaves on them.

<hr>

### Wannabee Paladin Notable Trash Mobs

**{{ site.data.dungeon.ntr.qalashi_lavabearer }}**
* Dodge the red swirlies from {{ site.data.dungeon.ntr.throw_lava }} and the following magma puddles.
* Pools of magma will also be created by {{ site.data.dungeon.ntr.lava_drip }} on each melee, enjoy the tank running out of {{ site.data.spell.eq }}.

**{{ site.data.dungeon.ntr.lava_flare }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ntr.melt }}.

**{{ site.data.dungeon.ntr.qalashi_irontorch }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ntr.mote_of_combustion }} in priority.
* Don't be on the tank, {{ site.data.dungeon.ntr.scorching_breath }} cleaves on them.

**{{ site.data.dungeon.ntr.qalashi_bonesplitter }}**
* This mob does a lot of random Single target party damage with {{ site.data.dungeon.ntr.pierce_marrow }} and {{ site.data.dungeon.ntr.dragonbone_axe }}. Stay aware of your current HP and use {{ site.data.talent.as }} as needed to survive.

**{{ site.data.dungeon.ntr.irontorch_commander }}**
* Stay spreaded at 6 yds to avoid clipping your party with {{ site.data.dungeon.ntr.scorching_fusillade }}.
* Dodge the many swirls from {{ site.data.dungeon.ntr.conflagrant_battery }}.

**{{ site.data.dungeon.ntr.qalashi_blacksmith }}**
* Beware of {{ site.data.dungeon.ntr.forgestomp }} as it will spell-lock you if you cast during it.

**{{ site.data.dungeon.ntr.forgewrought_monstrosity }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ntr.example }}.
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.ntr.example }} on the buffed enemy.

<hr>

## {{ site.data.dungeon.ntr.forgemaster_gorek }}
* Never be near the Anvil at the center of the room and stay spreaded.
* While channeling {{ site.data.dungeon.ntr.might_of_the_forge }}, {{ site.data.dungeon.ntr.blazing_hammer }} will deal Party-wide damage that you can mitigate with {{ site.data.talent.ag }}.
* Use a defensive or top yourself at the end of {{ site.data.dungeon.ntr.might_of_the_forge }} to survive if {{ site.data.dungeon.ntr.blazing_aegis }} hits you.
* Dodge the orange swirlies around the room created by {{ site.data.dungeon.ntr.blazing_eruption }} and {{ site.data.dungeon.ntr.forgestorm }}.

<hr>

### Profession buffs

**{{ site.data.dungeon.ntr.qalashi_goulash }}**
* This is a {{ site.data.item.cooking }}'s buff, that will likely be used to run to the next boss once {{ site.data.dungeon.ntr.forgemaster_gorek }} dies.

**{{ site.data.dungeon.ntr.blazing_aegis_blacksmith }}**
* This is a {{ site.data.item.blacksmithing }}'s buff that is available on the Anvil of {{ site.data.dungeon.ntr.forgemaster_gorek }}'s room after the fight ends. It can be used on a big pack to deal massive damage.

<hr>

### Smaug Treasure Hoarder Notable Trash Mobs

**{{ site.data.dungeon.ntr.apex_blazewing }}**
* {{ site.data.dungeon.ntr.candescent_tempest }} will deal party wide damage and push you back. You can LoS the damage portion of the ability, but it will still push you back if you do. Use {{ site.data.talent.swg }} to counter it.

**{{ site.data.dungeon.ntr.qalashi_lavamancer }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ntr.lava_bolt }}.
* Hard focus the {{ site.data.dungeon.ntr.molten_barrier }} as soon as possible. It will deal party-wide damage upon breaking. Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ntr.molten_army }} as soon as shield drops.

<hr>

## {{ site.data.dungeon.ntr.warlord_sargha }}
### Phase 1
* {{ site.data.dungeon.ntr.molten_gold }} is a huge DoT on a random target. Be sure to use {{ site.data.talent.as }} if you get it.
* Dodge the {{ site.data.dungeon.ntr.the_dragons_kiln }} frontal cone.
* Dodge the swirly from {{ site.data.dungeon.ntr.burning_ember }}. Use {{ site.data.talent.swg }} to kite the {{ site.data.dungeon.ntr.raging_ember }} that spawns if it focuses on you.
* While {{ site.data.dungeon.ntr.magma_shield }} is active, {{ site.data.dungeon.ntr.flame_eruption }} will deal party wide ramping damage.  
*To Test: Does {{ site.data.talent.ag }} work with the curse items.*

### Intermission - Break shield with Items
* {{ site.data.dungeon.ntr.magma_shield }} is the main mechanic of the fight. After the boss casts it, multiple piles of gold will spawn around the room.
* Clicking on those piles will apply the {{ site.data.dungeon.ntr.curse_of_the_dragon_hoard }} curse that you need to dispel as soon as possible with {{ site.data.talent.cleanse_spirit }}.
* You will gain an item usable with an extra button that will deal huge damage to {{ site.data.dungeon.ntr.magma_shield }}. Here's a list of them:
  - {{ site.data.dungeon.ntr.wand_of_negation }}: Target the boss and use it.
  - {{ site.data.dungeon.ntr.anti_magic_bomb }}: Using it will give you a reticule (similar to {{ site.data.spell.eq }}) that you need to put on the boss.
  - {{ site.data.dungeon.ntr.azure_stone_of_might }}: Using it will give you a reticule and make you jump to the reticule's position. /// OR Target the boss and use it, you will be launched into the boss in the process.
  - {{ site.data.dungeon.ntr.rose_of_the_vale }}: Use within 30yds of the boss.
  - {{ site.data.dungeon.ntr.seismic_boots }}: Use within 30yds of the boss.
</div>
</div>
</div>

<div class="card">
<div class="card-header" id="ur">
<div data-toggle="collapse" data-target="#ur-collapse" aria-expanded="true" aria-controls="ur-collapse" class="dungeon-header ur"><h2>The Underrot</h2></div>
</div>
<div id="ur-collapse" class="collapse" aria-labelledby="ur" data-parent="#accordion">
<div class="card-body" markdown="1">

## Notable Talent choices
* {{ site.data.talent.purge }}, as always, has some really good uses.
* {{ site.data.talent.spirit_walk }} and {{ site.data.talent.thunderous_paws }} have some value to dispel slows and roots.
* {{ site.data.talent.cleanse_spirit }} can be used to help your party if case some kicks are missed.

<hr>

### Blood Witch Notable Trash Mobs

**{{ site.data.dungeon.ur.underrot_tick }}**
* They will use {{ site.data.dungeon.ur.blood_burst }} on death. Be prepared to use {{ site.data.talent.as }} or {{ site.data.item.potion_rhp }} if you are going to die.

**{{ site.data.dungeon.ur.fetid_maggot }}**
* Dodge or hard-CC the {{ site.data.dungeon.ur.rotten_bile }} frontal.

**{{ site.data.dungeon.ur.chosen_blood_matron }}**
* Dodge the {{ site.data.dungeon.ur.savage_cleave }} frontal when she dashes near you.
* {{ site.data.dungeon.ur.warcry }} will buff the nearby allies, making this mob a priority target.

**{{ site.data.dungeon.ur.fanatical_headhunter }}**
* Use {{ site.data.talent.spirit_walk }} or {{ site.data.talent.thunderous_paws }} to dispel {{ site.data.dungeon.ur.hooked_snare }}. This is important to be able to dodge {{ site.data.dungeon.ur.chosen_blood_matron }}'s {{ site.data.dungeon.ur.savage_cleave }}.
* {{ site.data.dungeon.ur.barbed_spear}} does damage to a random target, be ready to use a defensive if you drop low.

**{{ site.data.dungeon.ur.devout_blood_priest }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.dark_reconstitution }} in priority.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.blood_bolt }} and {{ site.data.dungeon.ur.gift_of_ghuun }} when possible.
* Use {{ site.data.talent.purge}} to dispel {{ site.data.dungeon.ur.gift_of_ghuun }} when needed.

**{{ site.data.dungeon.ur.befouled_spirit }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.harrowing_despair }} in priority.
* Hard-CC to interrupt the {{ site.data.dungeon.ur.dark_omen }} channel. Use defensives and spread from your party if you cannot.

<hr>

## {{ site.data.dungeon.ur.elder_leaxa }}
* {{ site.data.dungeon.ur.taint_of_ghuun }} will be applied whenever an ability hits you. Use defensives if you have many stacks on you.
* At 100 energy, a {{ site.data.dungeon.ur.blood_effigy }} will be summoned by {{ site.data.dungeon.ur.blood_mirror }}. The {{ site.data.dungeon.ur.blood_effigy }} will cast the same spells as {{ site.data.dungeon.ur.elder_leaxa }}. Burst it down fast to make the fight easier.
* Keep {{ site.data.spell.fs }} active on all targets at all times.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.blood_bolt_boss }}.
* Dodge the {{ site.data.dungeon.ur.creeping_rot }} frontal and the {{ site.data.dungeon.ur.sanguine_feast }} that will be cast after she teleports to a new location.

<hr>

### Tantruming Puppy Notable Trash Mobs

**{{ site.data.dungeon.ur.diseased_lasher }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.decaying_mind }} in top priority, especially if you don't have a disease dispel ({{ site.data.externals.monk }}, {{ site.data.externals.paladin }} and {{ site.data.externals.priest }}). Try to help healing the stunned player if a cast goes through.

**{{ site.data.dungeon.ur.feral_bloodswarmer }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.sonic_screech }} when possible. Be sure to stop casting if you see the cast going through or you will get spell locked.
* Use {{ site.data.talent.swg }} and your CC to kite when you're fixated by {{ site.data.dungeon.ur.thirst_for_blood }}.

**{{ site.data.dungeon.ur.living_rot }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.wave_of_decay }} in lowest priority.
* Dodge {{ site.data.dungeon.ur.foul_sludge }} swirlies.

<hr>

## {{ site.data.dungeon.ur.cragmaw }}
* Each and every of his abilities will spawn some {{ site.data.dungeon.ur.blood_tick_larva }} that will drop on the ground. You need to step on them before they finish their {{ site.data.dungeon.ur.metamorphosis }} cast. Otherwise, be prepared to use a defensive when they die because of their {{ site.data.dungeon.ur.blood_burst }} ability.
* Don't be on the tank, {{ site.data.dungeon.ur.indigestion }} is a frontal cone on them (they can side step it).
* Stand close to a wall to bait {{ site.data.dungeon.ur.charge }} into it, dropping {{ site.data.dungeon.ur.blood_tick_larva }} close to your party.
* During {{ site.data.dungeon.ur.tantrum }}, the boss will run around in the room, doing big damage on the party and dropping {{ site.data.dungeon.ur.blood_tick_larva }} everywhere in the room. Use a defensive, aid your healer with {{ site.data.talent.ag }} combined with {{ site.data.talent.swg }} and be sure to help your party stepping on the {{ site.data.dungeon.ur.blood_tick }}s.

<hr>

### Shroomed Troll Notable Trash Mobs

**{{ site.data.dungeon.ur.reanimated_guardian }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.bone_shield }} and {{ site.data.talent.purge}} to remove it.

**{{ site.data.dungeon.ur.fallen_deathspeaker }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.raise_dead }} at all cost or you will get an extra add.
* Use hard CC to delay the cast of {{ site.data.dungeon.ur.wicked_frenzy }}.

**{{ site.data.dungeon.ur.grotesque_horror }}**
* These worms hide in the blood puddles and will be body pulled whenever somebody walks near them. Be sure to follow your group to not aggro extra count.
* This mob is immobile.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.death_bolt }}.

**{{ site.data.dungeon.ur.reanimated_guardian }}**
* Move 7 yds away from the totem the totem summoned by {{ site.data.dungeon.ur.summon_spirit_drain_totem }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.ur.withering_curse }} and {{ site.data.dungeon.ur.shadow_bolt_volley }}. Both of those cast must be interrupt so try to communicate with your team to make it more consistent. Use {{ site.data.talent.cleanse_spirit }} to remove {{ site.data.dungeon.ur.withering_curse }} when needed.

<hr>

## {{ site.data.dungeon.ur.sporecaller_zancha }}
* {{ site.data.dungeon.ur.boundless_rot }} will summon {{ site.data.dungeon.ur.spore_pod }}'s mushrooms around the arena. Use the boss' abilities to destroy them before they detonate with {{ site.data.dungeon.ur.festering_harvest }}.
* Use a defensive for {{ site.data.dungeon.ur.festering_harvest }}
* Don't be on the tank, {{ site.data.dungeon.ur.shockwave }} cleaves.
* Use {{ site.data.dungeon.ur.upheaval }}'s AoE to destroy mushrooms, try to destroy as much as possible.
* Dodge the {{ site.data.dungeon.ur.volatile_pods }}' spore flying around the room.

<hr>

### Kiting hell Boss Notable Trash Mobs

**{{ site.data.dungeon.ur.faceless_corruptor }}**
* {{ site.data.dungeon.ur.abyssal_reach }} will summon tendrils that do a frontal in front of them. Look around you and move out when required.
* {{ site.data.dungeon.ur.abyssal_reach }} is a frontal that fear.

<hr>

## {{ site.data.dungeon.ur.unbound_abomination }}
* Due to {{ site.data.dungeon.ur.blood_barrier}}, damaging {{ site.data.dungeon.ur.unbound_abomination }} will fill it's energy bar until it gains 100 energy. It will then spawn 2 {{ site.data.dungeon.ur.blood_visage }}, hitting for the boss for 17% of his health on death with {{ site.data.dungeon.ur.fatal_link }}.
* Bait {{ site.data.dungeon.ur.vile_expulsion }} then move through the boss to dodge the breath. You might get a puddle under your feets but it doesn't really matter, only the breath will heavily damage you.
* The grey puddles created by {{ site.data.dungeon.ur.vile_expulsion }} will transform into {{ site.data.dungeon.ur.rotting_spore }} and will fly toward the party. You can use anything to keep them at bay, they will die in 1 hit. Dropping one {{ site.data.spell.eq }} when their number spiral out of control can be a good idea.
* {{ site.data.dungeon.ur.putrid_blood }} will be a DoT applied over time to the whole party and is the soft enrage of the boss. You need to periodically dispel it, either with your heal's dispel or with {{ site.data.dungeon.ur.cleansing_light }} that will be cast on a random party member. Use defensives and {{ site.data.talent.ag }} when the stacks start ramping up.
* If you get the {{ site.data.dungeon.ur.cleansing_light }} buff, be sure to stack in melee to help your party. Be careful, there will be no {{ site.data.dungeon.ur.cleansing_light }} cast while a {{ site.data.dungeon.ur.blood_visage }} is alive.

</div>
</div>
</div>

# The Vortex Pinnacle

<div class="card">
<div class="card-header" id="udm">
<div data-toggle="collapse" data-target="#udm-collapse" aria-expanded="true" aria-controls="udm-collapse" class="dungeon-header udm"><h2>Uldaman: The Legacy of Tyr</h2></div>
</div>
<div id="udm-collapse" class="collapse" aria-labelledby="udm" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices
* {{ site.data.talent.purge }}
* {{ site.data.talent.stoneskin_totem }}
* {{ site.data.talent.cleanse_spirit }}
* {{ site.data.talent.hex }} on the second boss?

<hr>

### Blizzard's Vikings Notable Trash Mobs

**{{ site.data.dungeon.udm.stonevault_geomancer }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.udm.chain_lightning }} in priority, and {{ site.data.dungeon.udm.stone_pike }} with extra kicks.

**{{ site.data.dungeon.udm.vicious_basilisk }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.udm.spiked_carapace }} but it isn't a priority.
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.udm.spiked_carapace }} if the cast goes through.

**{{ site.data.dungeon.udm.hulking_berserker }}**
* Stay farther than 7 yds away to passively dodge {{ site.data.dungeon.udm.brutal_slam }}.
* At 40% hp, it will cast {{ site.data.dungeon.udm.reckless_rage }}, buffing all nearby enemies. Be ready to use your crowd control to help the tank kite as needed.

<hr>

## The Lost Vikings
* {{ site.data.dungeon.udm.longboat_raid }} gradually fills the room with {{ site.data.dungeon.udm.searing_cannonfire }} swirls and {{ site.data.dungeon.udm.burning_pitch }} puddles. This is the best time to use {{ site.data.talent.swg }}.
* {{ site.data.dungeon.udm.fiery_surge }} will deal party-wide damage each time a cannon fires. Aid your healer with {{ site.data.talent.ag }} as needed. Focusing down one of the Dwarves is a good idea to reduce the potency of {{ site.data.dungeon.udm.hasty_rearming }}.
* Each Dwarf "dies" at 10%hp.

### {{ site.data.dungeon.udm.baelog }}
* Don't be in front of him, {{ site.data.dungeon.udm.heavy_arrow }}'s a frontal and {{ site.data.dungeon.udm.wild_cleave }} cleaves (duh).

### {{ site.data.dungeon.udm.eric_the_swift }}
* Dodge {{ site.data.dungeon.udm.skullcracker }}'s swirly or you will be disoriented.
* {{ site.data.dungeon.udm.dagger_throw }} targets a random player, try to stay outside of killing range or use defensives when needed.

### {{ site.data.dungeon.udm.olaf }}
* Stay spreaded 5yds away from your party to avoid the bounces from {{ site.data.dungeon.udm.ricocheting_shield }}.
* use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.udm.defensive_bulwark }}.


<hr>

### Another Trogg King Notable Trash Mobs

**{{ site.data.dungeon.udm.burly_rock_thrower }}**
* This mobs are immobile. They are often LoS by parties to pack them up.
* Watch your feet and dodge the {{ site.data.dungeon.udm.throw_rock }} swirlies.

**{{ site.data.dungeon.udm.stonevault_ambusher }}**
* They will jump on a random target with {{ site.data.dungeon.udm.ambush }}. Stay close to melee for cleave purposes.

<hr>

## {{ site.data.dungeon.udm.bromach }}
* {{ site.data.dungeon.udm.call_of_the_deep }} will spawn {{ site.data.dungeon.udm.stonevault_geomancer }} in the room. Try to interrupt them with {{ site.data.spell.wind_shear }} to pack them up on the boss.
* Stay farther than 12 yds away from melee to ignore {{ site.data.dungeon.udm.thundering_slam }}.
* Immediately switch on {{ site.data.dungeon.udm.quaking_totem }} whenever it spawns.
* {{ site.data.dungeon.udm.shocking_quake }} will deal party-wide damage. It's the best time to use {{ site.data.talent.ag }} and defensives.
* Wait for the boss and adds to be kited on the {{ site.data.dungeon.udm.quaking_totem_npc }} to kill it as it will apply {{ site.data.dungeon.udm.tremor }} on death.

<hr>

### Serpentine Keeper Notable Trash Mobs

**{{ site.data.dungeon.udm.earthen_custodian }}**
* Don't be on the tank, {{ site.data.dungeon.udm.cleave }} cleaves (duh).

**{{ site.data.dungeon.udm.refti_custodian }}**
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.udm.ancient_power }}.
*TODO: Check if this is indeed purgeable. Wowhead says "remove the debuff" in their guide but doesn't say how and the spell isn't flagged as a magic buff*

<hr>

## {{ site.data.dungeon.udm.sentinel_talondras }}
* Due to {{ site.data.dungeon.udm.ancient_dynamo }}, the boss must be stunned to counter {{ site.data.dungeon.udm.titanic_empowerment }} at 100 energy.
* The tank must kite the boss through {{ site.data.dungeon.udm.resonating_orb }} to get rid of {{ site.data.dungeon.udm.inexorable }} and eventually stun it.
* You must dodge {{ site.data.dungeon.udm.resonating_orb }} at all cost or you will be unable to stun the boss. Try to stay close to the tank to bait the orbs close enough.
* {{ site.data.dungeon.udm.crushing_stomp }} will deal physical damage and knock you back. Stay clear of {{ site.data.dungeon.udm.resonating_orb }} and use a defensive as needed. This is a good place to use {{ site.data.talent.stoneskin_totem }} if talented. *TODO: Check if this spelllocks or is just a knockback.*
* {{ site.data.dungeon.udm.unrelenting }} makes the fight scaling over time each time you stun the boss, be sure to use your defensives on {{ site.data.dungeon.udm.crushing_stomp }} at higher stack.

<hr>

### Fire Keeper Notable Trash Mobs

**{{ site.data.dungeon.udm.earthen_weaver }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.udm.stone_bolt }}.
* Use a hard CC to block cast {{ site.data.dungeon.udm.hail_of_stone }}, a channel that will do a lot of damage on the group.

**{{ site.data.dungeon.udm.runic_protector }}**
* {{ site.data.dungeon.udm.earthquake }} will deal unavoidable party wide damage. Use {{ site.data.talent.as }} as needed and {{ site.data.talent.ag }} or {{ site.data.talent.stoneskin_totem }} to support your party.
* Sidestep {{ site.data.dungeon.udm.fissuring_slam }} swirlies and puddles.

**{{ site.data.dungeon.udm.earthen_warder }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.udm.earthen_ward }}. You can also {{ site.data.talent.purge }} it off.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.udm.curse_of_stone }}. You must use {{ site.data.talent.cleanse_spirit }} to remove it off from your party if needed.

**{{ site.data.dungeon.udm.skittering_crawler }}**
* They will jump on a random target with {{ site.data.dungeon.udm.ambush }}. Stay close to melee for cleave purposes, but not in melee (see below).

**{{ site.data.dungeon.udm.cavern_seeker }}**
* Stay farther than 10 yds away to avoid {{ site.data.dungeon.data.udm.sonic_burst }} passively. Beware, it will spelllock you if you get hit while casting.

<hr>

## {{ site.data.dungeon.udm.emberon }}
### Phase 1
* Dodge the {{ site.data.dungeon.udm.seeking_flame }} orbs flying around the room and the {{ site.data.dungeon.udm.searing_clap }} frontal.
* Spread at 7yds with the {{ site.data.dungeon.udm.unstable_embers }} debuff.
* Be ready to use a defensive when you get the {{ site.data.dungeon.udm.burning_heat }} DoT and your healer doesn't dispel you.

### Intermission - Shield and rotating beam
* Kill the 4 {{ site.data.dungeon.udm.vault_keeper }} to end the phase.
* Boss goes immune in the middle of the room, creates a big {{ site.data.dungeon.udm.sacred_barrier }} around him.
* Rotate around the room to dodge the {{ site.data.dungeon.udm.purging_flames }} rotating beam.
* Be sure to not outrange your healer while going to the adds. {{ site.data.dungeon.udm.fire_wave }} will deal party wide damage, use {{ site.data.talent.ag }} as needed to help your party.

<hr>

### Retcon Dragonflight Herald Notable Trash Mobs

**{{ site.data.dungeon.udm.ebonstone_golem }}**
* {{ site.data.dungeon.udm.thunderous_clap }} will deal unavoidable party wide damage. Use {{ site.data.talent.as }} as needed and {{ site.data.talent.ag }} to support your party. *TO DO: check if this can be outranged by being at 40 yds, wowhead says it probably can*

**{{ site.data.dungeon.udm.earthen_guardian }}**
* Get out of the dome created by {{ site.data.dungeon.udm.blessing_of_tyr }} as it will deal damage to you. Your tank should kite the mobs out of it as they will get buffed. You can use {{ site.data.talent.thunderstorm }} if talented to help.

**{{ site.data.dungeon.udm.infinite_agent }}**
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.udm.hasten }}.

**{{ site.data.dungeon.udm.infinite_timereaver }}**
* {{ site.data.dungeon.udm.stolen_time }} is a stacking DoT that you get while in combat with an {{ site.data.dungeon.udm.infinite_timereaver }}. Don't engage too many of them at once. Use {{ site.data.talent.as }} and assist your healer with {{ site.data.talent.ag }} when needed. Also, stuns prevent the DoT from being applied and can give you a window to reset stacks.

<hr>

## {{ site.data.dungeon.udm.chrono_lord_deios }}
### Phase 1
* Dodge {{ site.data.dungeon.udm.eternity_orb }} swirlies and the following {{ site.data.dungeon.udm.eternity_zone }} puddles.
* Be prepared for {{ site.data.dungeon.udm.wing_buffet }}'s damage and knockback. Make sure that you aren't knocked into an {{ site.data.dungeon.udm.eternity_zone }}.
* Don't be on the tank, {{ site.data.dungeon.udm.sand_breath }} is a frontal on him.
* {{ site.data.dungeon.udm.time_sink }} is a DoT that will trigger {{ site.data.dungeon.udm.time_eruption }} when dispelled or on expiration. Use {{ site.data.talent.as }} as needed and make sure that you aren't knocked into an {{ site.data.dungeon.udm.eternity_zone }}.

### Intermission - Burn phase
* The boss will cast {{ site.data.dungeon.udm.rewind_timeflow }} for 12s, dealing party damage and transforming {{ site.data.dungeon.udm.eternity_orb }}s and {{ site.data.dungeon.udm.eternity_zone }}s into {{ site.data.dungeon.udm.temporal_orb }}s and {{ site.data.dungeon.udm.temporal_zone }}s.
* While {{ site.data.dungeon.udm.temporal_orb }}s do nothing, {{ site.data.dungeon.udm.temporal_zone }}s give you a 50% haste buff so be sure to stand in them as much as possible.
* This phase is the best moment to use {{ site.data.talent.ag }}.

</div>
</div>
</div>
</div>
</div>

<br>

<hr>

# Useful WeakAuras

* [Dragonflight Season 1 Dungeons Pack](https://wago.io/DF-Dungeons) by Jodsderechte
* [Thundering Helper](https://wago.io/thunder) by Ellesmere
* [Quaking Helper](https://wago.io/QuakeInterrupt) by JackTheEgg
* [Mythic+ Auto Marker](https://wago.io/1ctv3b91K) by Megawatt
* [Mythic+ Timer](https://wago.io/M+Timer) by Reloe

<hr>

# Additional Resources

* [Wowhead Elemental Shaman Mythic+ Guide](https://www.wowhead.com/guide/classes/shaman/elemental/mythic-plus-dungeon-tips) by HawkCorrigan
* [Icy-Veins Elemental Shaman Mythic+ Tips](https://www.icy-veins.com/wow/elemental-shaman-pve-dps-mythic-plus-tips) by Stormy
* [Mythic+ Subcreation](https://mplus.subcreation.net/elemental-shaman.html)
* [Mythic+ Murlok.io](https://murlok.io/shaman/elemental/mm+)
