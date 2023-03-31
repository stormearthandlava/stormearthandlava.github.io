---
layout: page
title: "Mythic+ DF Season 1"
last_update: 29/03/2023
game_version: 10.0.7 Dragonflight
authors: Elivrio
toc: true
big_article: true
---

# Introduction

This guide was made possible by:

* Altenna (Discord: JudgeJames#0001 \| [Twitch](https://www.twitch.tv/judgejames) \| [Twitter](https://twitter.com/_judgejames_))
* Amani (Discord: Amani#0001 \| [Discord Server](https://discordapp.com/invite/zTQhBn8) \| [YouTube](https://www.youtube.com/channel/UC5IikzgR1TeED-DxPLqISHg))
* Elivrio (Discord: Elivrio#1450, in-game : Tyrindra-Ysondre)
* Eokira (Discord: Eokira#7823)
* Gaka (Discord: Gaka#7410)
* HawkCorrigan (Discord: HawkCorrigan#1811)

Information on this page is written with the assumption that you understand the new priority list and talents in Dragonflight Season 1. If you have not done so, we highly recommend reading our other resources to learn about them!

This guide is intended to help you identify critical mobs and abilities as well as improve your mechanical literacy in using your toolkit as an Elemental Shaman in each dungeon. If you have suggestions to improve the information in this guide please contact Eokira#7823 using the [Earthshrine Elemental channel](https://discord.gg/pGkPDzh7rP) or the [Storm, Earth & Lava discord](https://discord.gg/y5dUf3PWrU).

<hr>

# Talents

There are two main build that will be used in Dragonflight Season one : Wildfire and Lightning. You can find variation on each of them in the [build page](https://stormearthandlava.com/guide/general/builds.html).

This page will only note the important utility options that are available to you as an Elemental Shaman. Those remain suggestions and depending on your group, you might not need some of the talent suggested in this guide.

### Standard Class tree for S1 Dungeons:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoEgUSChog0ikmSACRAC?width=530&level=70" frameborder="0" width="800px" height="100%"></iframe>
</div>

### A few remarks on this tree:
- It has {{ site.data.talent.totemic_recall }} and points leading up to it. This is due to {{ site.data.talent.lmt }} being a staple in dungeon builds, making {{ site.data.talent.totemic_recall }} a required DPS node. If you are not playing {{ site.data.talent.lmt }}, you can remove the 4 points below {{ site.data.talent.gust_of_wind }} and allocate them elsewhere.
- {{ site.data.talent.ee }} could be flexed around into another utility option but I believe it is the best single all rounder node to get to 20 points.
- {{ site.data.talent.purge }} is recommended in all dungeon because of its high value this season.
- Some people spec out of {{ site.data.spell.frs }}. It is still a very useful movement global, even without {{ site.data.talent.if }}.

### The Last 4 Points
Depending on the dungeon you are running and the group you're in, here is a list of good options to pick from:
- {{ site.data.talent.earth_shield }} is a 2 points investments as you have to pick {{ site.data.talent.chain_heal }} to get it but it gives pretty good sustain.
- {{ site.data.talent.thunderous_paws }} gives you a slow dispel and a burst of mobility that is often useful.
- {{ site.data.talent.spirit_wolf }} is better mobility on a long distance, and can be used as a defensive.
- {{ site.data.talent.healing_stream_totem }} and {{ site.data.talent.swirling_currents }} are good off-healing CDs. But the fact that you cannot predict who it will heal, paired with the GCD loss each time you use it make it very suboptimal and situational.
- {{ site.data.talent.tremor_totem }} has a lot of minor uses this season but nothing... groundbreaking.
- {{ site.data.talent.static_charge }} will allow you to have {{ site.data.talent.capacitor_totem }} on every packs. Very useful to complement another Class AoE CC.
- {{ site.data.talent.guardians_cudgel }} on the other hand, will be best used when you are the only AoE CC of the group, or if you need successive interrupts on a pack ({{ site.data.dungeon.cos.blazing_imp }} in Court of Stars for example).
- {{ site.data.talent.brimming_with_life }} is still a 8% max HP, even if it has the worst design in our whole tree.
- {{ site.data.talent.cleanse_spirit }} is used only in Temple of the Jade Serpent this season, you can spend that point elsewhere when you're not in it. Note that the healers that cannot remove Curses are: Discipline Priest, Holy Priest, Holy Paladin, and Mistweaver Monk.
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

The affixes {{ site.data.affixes.necrotic }} and {{ site.data.affixes.inspiring }} were removed at the end of Shadowlands.

**Level 2:**
* {{ site.data.affixes.fortified }}: Consider using {{ site.data.spell.bl }} on hard mob pulls.
* {{ site.data.affixes.tyrannical }}: Boss fights turn into a battle of endurance.

*Note:* Unlike many of the previous extensions, the balance between these two affixes is quite good. As normal mobs are generally easier to navigate than bosses, keys during {{ site.data.affixes.fortified }} weeks will usually be easier to finish but also harder to do in time, since 60% to 70% of the timer in a key is spent doing mobs. On the contrary, hard bosses during a {{ site.data.affixes.tyrannical }} week can be huge walls that will stop you from finishing the key. But the timer will often be more lenient.

**Level 4:**

* {{ site.data.affixes.bolstering }}: Damage trash packs down as evenly as you can. Swap to priority damage rotation for any lethal mobs or if mob health within trash packs are uneven.
* {{ site.data.affixes.bursting }}: Support your party members and use your healing abilities to mitigate the {{ site.data.affixes.burst }} debuff. Use {{ site.data.talent.as }} as needed if stacks are high.
* {{ site.data.affixes.raging }}: Be ready to use your kiting toolkit to support your tank when needed. Consider using {{ site.data.talent.capacitor_totem }} and {{ site.data.talent.sk }} to finish {{ site.data.affixes.enrage }} mobs more safely and quickly.
* {{ site.data.affixes.sanguine }}: Damage trash packs down as evenly as you can to lessen time spent in Sanguine, but be sure to not slow or stun mobs dying unevenly. Use {{ site.data.talent.thunderstorm }} as needed to knock mobs out of {{ site.data.affixes.sanguine_ichor }}.
* {{ site.data.affixes.spiteful }}: As mobs are dying, be ready to use your kiting toolkit to support your melee players. Consider taking advantage of {{ site.data.affixes.spiteful_shade }} as additional {{ site.data.spell.cl }} or {{ site.data.spell.fs }} targets.

**Level 7:**

* {{ site.data.affixes.explosive }}: {{ site.data.affixes.explosives }} orbs can be destroyed in a single {{ site.data.spell.frs }} global. This will be your most efficient tool to deal with them as your other abilities are more valuable for trash.
* {{ site.data.affixes.grievous }}: Remember that direct heals remove one stack of {{ site.data.affixes.grievous_wound }}. Support your party members with {{ site.data.spell.healing_surge }} and {{ site.data.talent.ag }} as needed.
* {{ site.data.affixes.quaking }}: Maintain your distance from party members, and be mindful about canceling casts if {{ site.data.affixes.quake }} overlaps with {{ site.data.talent.swg }}.
* {{ site.data.affixes.storming }}: Maintain your distance from mobs to avoid {{ site.data.affixes.storming }}. Use {{ site.data.talent.swg }} as needed in tight spaces or when maneuvering any mechanics.
* {{ site.data.affixes.volcanic }}: Watch your feet. Use {{ site.data.talent.swg }} as needed to maintain your damage uptime while avoiding {{ site.data.affixes.volcanic_plume }}.

**Seasonal Affix:**

* {{ site.data.affixes.thundering }} is the new Seasonal Affix for Season one of Dragonflight!
   - Every 60 seconds that your group is in combat, players will be marked with a debuff, either {{ site.data.affixes.mark_of_lightning }} or {{ site.data.affixes.mark_of_wind }} (plus or minus).
   - While the debuff is on you, you deal 30% bonus damage and healing.
   - There will be 3 {{ site.data.affixes.mark_of_wind }} and 2 {{ site.data.affixes.mark_of_lightning }}.
   - The tank always gets a {{ site.data.affixes.mark_of_wind }}. Don't pair with him during packs with many frontals.
   - When the debuff expires, you will be affected by {{ site.data.affixes.primal_overload }} which will stun you for a long period of time and deal a lot of damage.
   - Remove the debuff by running into a player with the opposite mark.
   - You are not affected by {{ site.data.affixes.primal_overload }} if no player with the opposite mark is within 100 yards.

* The goal of this affix is to have high uptime on the debuff to benefit from the 30% bonus damage and healing, but not to be too greedy as you never want to suffer the penalty.
* Try to always identify with whom you can clear your mark.
* If possible, communicate your partner as soon as possible. In PUGs, move close to a player with the opposite mark to easily get rid of it later.
* Use {{ site.data.talent.swg }} to keep uptime while finding your partner.
* During high stress situation, it might be best to clear the marks as soon as possible to avoid bad overlaps.
* When running back after dying, consider waiting a bit before entering the 100 yards range of your party if they are still in battle. If you have the debuff on you, you would most likely kill your party and yourself.

<hr>

# Dungeons

<p style="color:red" align="center">Click on a dungeon banner to expand it.</p>

<div class="dungeon-accordion">

<div id="accordion">
<div class="card">
<div class="card-header" id="aa">
<div data-toggle="collapse" data-target="#aa-collapse" aria-expanded="true" aria-controls="aa-collapse" class="dungeon-header aa"><h2>Algeth'ar Acedemy</h2></div>
</div>
<div id="aa-collapse" class="collapse" aria-labelledby="aa" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices

* {{ site.data.talent.tremor_totem }} can be used to reduce the amount of kicks needed in {{ site.data.dungeon.aa.vexamus }}' area.
* {{ site.data.talent.poison_cleansing_totem }} can be used to help the tank and the healer in {{ site.data.dungeon.aa.overgrown_ancient }}'s area.
* {{ site.data.talent.purge }} has some uses in the area before the last boss.
* {{ site.data.talent.stoneskin_totem }} can be used in higher key for {{ site.data.dungeon.aa.crawth }}'s {{ site.data.dungeon.aa.savage_peck }} and {{ site.data.dungeon.aa.overgrown_ancient }}'s {{ site.data.dungeon.aa.splinterbark }} and {{ site.data.dungeon.aa.barkbreaker }}.

<hr>

### Dungeon buffs

* {{ site.data.dungeon.aa.bronze_dragonflight_pledge_pin }} will be the default choice for most runs.
* {{ site.data.dungeon.aa.black_dragonflight_pledge_pin }} is the alternative if you want more AoE damage.
* {{ site.data.dungeon.aa.red_dragonfligh_pledge_pin }} is also an option in higher keys for survivability gain.
* Do not pick {{ site.data.dungeon.aa.blue_dragonflight_pledge_pin }}. It gives rating and as such, it will be impacted by diminishing return.

<hr>

### {{ site.data.dungeon.aa.vexamus }} trash

**{{ site.data.dungeon.aa.spellbound_scepter }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.aa.mystic_blast }} in priority.
* Make sure to dodge {{ site.data.dungeon.aa.arcane_rain }} purple swirlies.

**{{ site.data.dungeon.aa.unruly_textbook }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.aa.monotonous_lecture }}. You can also ignore the cast and just use {{ site.data.talent.tremor_totem }} to dispel its effects.

**{{ site.data.dungeon.aa.corrupted_manafiend }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.aa.mana_void }} in priority and {{ site.data.dungeon.aa.surge }} if you have extra kicks.

**{{ site.data.dungeon.aa.arcane_ravager }}**
* {{ site.data.dungeon.aa.arcane_ravager }} will jump on a random player with {{ site.data.dungeon.aa.vicious_ambush }} and cast a {{ site.data.dungeon.aa.riftbreath }} frontal. Beware of it at all times and use {{ site.data.talent.swg }} to reposition as needed.

<hr>

### {{ site.data.dungeon.aa.vexamus }}

* Soak the {{ site.data.dungeon.aa.arcane_orbs }} but try to let the {{ site.data.dungeon.aa.oversurge }} debuff fall off before soaking another. Use {{ site.data.talent.as }} at higher stacks.
* Spread with {{ site.data.dungeon.aa.mana_bombs }} and try to drop pools along the walls.
* Beware of {{ site.data.dungeon.aa.arcane_fissure }}, it does a lot of direct damage. Use {{ site.data.talent.as }} as needed. {{ site.data.talent.swg }} will allow you to keep uptime while dodging the swirlies.

<hr>

### {{ site.data.dungeon.aa.crawth }} trash

**{{ site.data.dungeon.aa.guardian_sentry }}**
* Get out or line of sight the big {{ site.data.dungeon.aa.expel_intruders }} cast.
* Dodge {{ site.data.dungeon.aa.deadly_winds }} swirlies and tornadoes. In higher keys, a single tick can kill you. Move straight away even if you have to cancel your cast.
* Use {{ site.data.talent.swg }} to keep uptime while dodging.

**{{ site.data.dungeon.aa.alpha_eagle }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.aa.call_of_the_flock }}.
* Dodge the {{ site.data.dungeon.aa.gust }} frontal.

<hr>

### {{ site.data.dungeon.aa.crawth }}

* Try to keep your offensive CDs and {{ site.data.spell.bl }} for when you trigger {{ site.data.dungeon.aa.firestorm }}. The boss will take 75% more damage for 12 seconds.
* Dodge the {{ site.data.dungeon.aa.firestorm }} swirlies and the {{ site.data.dungeon.aa.overpowering_gust }} frontal.
* Fight back against the wind during {{ site.data.dungeon.aa.gale_force }} and dodge the {{ site.data.dungeon.aa.roving_cyclone }}.
* Pick up wind orbs for 45% haste and a "cast while moving" buff for 20s. Do not overlap the orb buff with {{ site.data.talent.swg }}.
* Try to be at full health before {{ site.data.dungeon.aa.deafening_screech }} or use {{ site.data.talent.as }}, especially at high {{ site.data.dungeon.aa.sonic_vulnerability }} stacks.

<hr>

### {{ site.data.dungeon.aa.overgrown_ancient }} trash

**{{ site.data.dungeon.aa.hungry_lasher }}**
* Use {{ site.data.talent.poison_cleansing_totem }} if talented to help the tank with the {{ site.data.dungeon.aa.lasher_toxin }} stacks.

**{{ site.data.dungeon.aa.vile_lasher }}**
* Dodge the big {{ site.data.dungeon.aa.detonation_seeds }} green swirlies. Use {{ site.data.talent.swg }} to keep uptime while dodging.

**{{ site.data.dungeon.aa.aggravated_skitterfly }}**
* These mobs will charge on you with {{ site.data.dungeon.aa.darting_sting }}, do not be at max range to keep them near melees for uptime.
* Consider using {{ site.data.talent.as }} at low health.

<hr>

### {{ site.data.dungeon.aa.overgrown_ancient }}

* The boss will use {{ site.data.dungeon.aa.burst_forth }} after two {{ site.data.dungeon.aa.germinate }} casts. Keep AoE CDs such as {{ site.data.talent.sk }} or {{ site.data.talent.lmt }} to quickly burst down the adds after the second {{ site.data.dungeon.aa.germinate }} cast.
* Move with your group during {{ site.data.dungeon.aa.germinate }} to keep adds stacked for cleave. Use {{ site.data.talent.swg }} to start ramping when a {{ site.data.dungeon.aa.burst_forth }} is coming soon.
* Use CC such as {{ site.data.talent.capacitor_totem }} or {{ site.data.talent.thundershock }} to reduce the group damage when the adds spawn.
* Use {{ site.data.talent.poison_cleansing_totem }} if talented to help the tank with the {{ site.data.dungeon.aa.lasher_toxin }} stacks.
* Hard switch on the {{ site.data.dungeon.aa.ancient_branch }} whenever it spawns.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.aa.healing_touch }} from {{ site.data.dungeon.aa.ancient_branch }}.

<hr>

### {{ site.data.dungeon.aa.echo_of_doragosa }} trash

**{{ site.data.dungeon.aa.algethar_echoknight }}**
* Don't be in melee range when {{ site.data.dungeon.aa.algethar_echoknight }} uses {{ site.data.dungeon.aa.astral_whirlwind }}.

**{{ site.data.dungeon.aa.spectral_invoker }}**
* Spread with {{ site.data.dungeon.aa.astral_bomb }}. It does minor damage if it explodes on enemies. Don't die from an {{ site.data.dungeon.aa.astral_whirlwind }} while trying to use it on the pack, it's not worth it.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.aa.arcane_missiles }}.

**{{ site.data.dungeon.aa.ethereal_restorer }}**
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.aa.celestial_shield }} as soon as possible.

<hr>

### {{ site.data.dungeon.aa.echo_of_doragosa }}

* Stay close to the boss but be spreaded to avoid {{ site.data.dungeon.aa.astral_breath }} and drop {{ site.data.dungeon.aa.energy_bomb }}.
* When at two stacks of {{ site.data.dungeon.aa.overwhelming_power }}, stand close to wall to create the {{ site.data.dungeon.aa.arcane_rift }} in a nice spot.
* Watch out for the {{ site.data.dungeon.aa.uncontrolled_energy }} coming from the {{ site.data.dungeon.aa.arcane_rift }}.
* Use {{ site.data.talent.swg }} during {{ site.data.dungeon.aa.power_vacuum }} to keep uptime and quickly get out.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="cos">
<div data-toggle="collapse" data-target="#cos-collapse" aria-expanded="true" aria-controls="cos-collapse" class="dungeon-header cos"><h2>Court of Stars</h2></div>
</div>
<div id="cos-collapse" class="collapse" aria-labelledby="cos" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices

* Court of Stars is a dungeon with many small packs and many mini-bosses. Depending your group composition, Single Target Oriented build that does good on demand AoE will perform better on average than a full AoE build. I recommend using the "Primordial Surge with Stormkeeper" from the [Build Page](https://stormearthandlava.com/guide/general/builds.html#primordial-surge-builds).
* {{ site.data.talent.hex }} is a good option in this dungeon to control patrols, adds on first boss and hard CC breaks in general.
* {{ site.data.talent.spirit_walk }} and {{ site.data.talent.thunderous_paws }} can be used to cleanse the debuff on the first boss.
* {{ site.data.talent.purge }} has some uses in the area before the first boss.
* {{ site.data.talent.guardians_cudgel }} and {{ site.data.talent.thunderstorm }} are very good hard CC to deal with the {{ site.data.dungeon.cos.blazing_imp }} packs.
* {{ site.data.talent.stoneskin_totem }} can be used in higher key for {{ site.data.dungeon.cos.imacutya }}'s damage on the tank and {{ site.data.dungeon.cos.advisor_melandrus }}'s {{ site.data.dungeon.cos.slicing_maelstrom }}.

<hr>

### {{ site.data.dungeon.cos.patrol_captain_gerdo }} trash

**{{ site.data.dungeon.cos.duskwatch_guard }}**
* Dodge the {{ site.data.dungeon.cos.quelling_strike }} frontal.
* Use {{ site.data.spell.wind_shear }} or {{ site.data.talent.purge }} on {{ site.data.dungeon.cos.fortification }}.

**{{ site.data.dungeon.cos.guardian_construct }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.cos.charging_station }} and {{ site.data.dungeon.cos.suppress }}. These interrupts are always a priority to get.

**{{ site.data.dungeon.cos.duskwatch_sentry }}**
* Do not pull {{ site.data.dungeon.cos.duskwatch_sentry }} first. It will use {{ site.data.dungeon.cos.throw_torch_cos }} on its first target that will leave a nasty DoT on you. Use {{ site.data.talent.as }} if needed.
* It can be useful to use {{ site.data.talent.hex }} to stop the {{ site.data.dungeon.cos.duskwatch_sentry }} patrols.
* Do not let them cast {{ site.data.dungeon.cos.sound_alarm }}, use {{ site.data.spell.wind_shear }} to interrupt it or CC the mob while it's going toward the Arcane Beacons.

**{{ site.data.dungeon.cos.mana_saber }}**
* They jump on you with {{ site.data.dungeon.cos.mana_fang }} and leave a nasty DoT around you. Stay spreaded and use {{ site.data.talent.as }} if needed.

**{{ site.data.dungeon.cos.bound_energy }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.cos.charged_blast }}.

**{{ site.data.dungeon.cos.duskwatch_arcanist }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.cos.seal_magic }} in priority and {{ site.data.dungeon.cos.nightfall_orb }} if possible.

**{{ site.data.dungeon.cos.arcane_manifestation }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.cos.drain_magic }}.

<hr>

### {{ site.data.dungeon.cos.patrol_captain_gerdo }}

* Don't forget to add poison to the {{ site.data.dungeon.cos.flask_of_the_solemn_night }} if you're an Alchemist, it will kill the boss at 25%.
* Gerdo will cast {{ site.data.dungeon.cos.signal_beacon }} at 75% HP, spawning {{ site.data.dungeon.cos.duskwatch_reinforcement }} from the remaining active Arcane Beacons.
* {{ site.data.dungeon.cos.duskwatch_reinforcement }} will cast {{ site.data.dungeon.cos.subdue }} periodically. It needs to be interrupted at all cost. You can also use {{ site.data.talent.hex }} to CC them far away.
* {{ site.data.dungeon.cos.arcane_lockdown }} is a 90% slow that can either be dispelled or removed by jumping 3 times. You can use {{ site.data.talent.thunderous_paws }} or {{ site.data.talent.spirit_walk }} to instantly dispel it, or use {{ site.data.talent.swg }} to keep uptime while jumping.
* {{ site.data.dungeon.cos.streetsweeper }} will spawn orbs that do damage in a line after 3 seconds. Beware of {{ site.data.dungeon.cos.arcane_lockdown }} potentially slowing you.
* Stay farther than 20 yards away to ignore {{ site.data.dungeon.cos.resonant_slash }}.

<hr>

### Dungeon Buffs

The area before the second boss is full of items that players can interact with based upon race, profession choice, class, or even role.
Shamans can interact with the {{ site.data.dungeon.cos.waterlogged_scroll }} that is accessible near the fountain to give 35% movement speed to their party.
You can find a complete list of all of the accessible items and buff on [this link](https://www.wowhead.com/guide/mythic-plus-dungeons/court-of-stars-strategy#overview-dungeon-buffs).

<hr>

### {{ site.data.dungeon.cos.talixae_flamewreath }} trash

**{{ site.data.dungeon.cos.watchful_inquisitor }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.cos.searing_glare }}.
* {{ site.data.dungeon.cos.eye_storm }} needs to be cancelled with a hard CC ({{ site.data.talent.capacitor_totem }}, {{ site.data.talent.hex }} or {{ site.data.talent.thunderstorm }}) or it will deal lethal damage to your party.

**{{ site.data.dungeon.cos.blazing_imp }}**
* {{ site.data.dungeon.cos.blazing_imp }} often come in large packs and continuously cast {{ site.data.dungeon.cos.firebolt }} or {{ site.data.dungeon.cos.drifting_embers }}. Interrupt, stun and quickly burst them down. Use {{ site.data.talent.as }} if many cast are going through.

**{{ site.data.dungeon.cos.legion_hound }}**
* Get out of the puddle left after it uses {{ site.data.dungeon.cos.felblaze_leap }}.

**{{ site.data.dungeon.cos.shadow_mistress }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.cos.bewitch }}.

**{{ site.data.dungeon.cos.felbound_enforcer }}**
* {{ site.data.dungeon.cos.fel_detonation }} applies a hard hitting DoT on all player in Line of Sight. Play close to a corner and hide when it starts to cast it.
* You need to kill 3 {{ site.data.dungeon.cos.felbound_enforcer }} or use the [dungeon items](https://www.wowhead.com/guide/mythic-plus-dungeons/court-of-stars-strategy#overview-dungeon-buffs) to separate the three lieutenants from {{ site.data.dungeon.cos.talixae_flamewreath }}.

### {{ site.data.dungeon.cos.talixae_flamewreath }} lieutenants

**{{ site.data.dungeon.cos.imacutya }}**
* Stay farther than 8 yards away to ignore {{ site.data.dungeon.cos.whirling_blades }}.
* Stop casting when it uses {{ site.data.dungeon.cos.scream_of_pain }}.

**{{ site.data.dungeon.cos.baalgar_the_watchful }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.cos.disintegration_beam }}.
* {{ site.data.dungeon.cos.impending_doom }} will go on two players. Be ready to use {{ site.data.talent.as }} if needed when the healer doesn't dispel you first.

**{{ site.data.dungeon.cos.jazshariu }}**
* Dodge the {{ site.data.dungeon.cos.crushing_leap_cos }} swirlies and the following {{ site.data.dungeon.cos.shockwave }} frontal.

<hr>

### {{ site.data.dungeon.cos.talixae_flamewreath }}

* Stay packed at all time on your tank. Use {{ site.data.talent.swg }} to keep uptime while moving.
* You can solo kick {{ site.data.dungeon.cos.withering_soul }}! Notify your group to avoid over-kicking. Your party will have more kicks for the {{ site.data.dungeon.cos.blazing_imp }} if needed.
* Dodge the {{ site.data.dungeon.cos.infernal_eruption }} swirlies then blast the group of {{ site.data.dungeon.cos.blazing_imp }}. Use {{ site.data.talent.capacitor_totem }} if they are about to cast.

<hr>

### Hide and Seek minigame

Good luck for the mini-game ! Remember to pick up all of the clues, especially if you have a DH in your group so that they can use [Spectral Sight](https://www.wowhead.com/spell=188501/spectral-sight) faster.

### {{ site.data.dungeon.cos.gerenth_the_vile }}

* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.cos.shadow_bolt_volley }}.
* Use {{ site.data.talent.capacitor_totem }} or {{ site.data.talent.hex }} to interrupt the {{ site.data.dungeon.cos.hypnosis_bat }} cast.

<hr>

### {{ site.data.dungeon.cos.advisor_melandrus }}

* Dodge {{ site.data.dungeon.cos.blade_surge }} swirlies. It will be casted on a player outside of melee if possible. This spell leaves a clone that will replicate {{ site.data.dungeon.cos.slicing_maelstrom }} and {{ site.data.dungeon.cos.piercing_gale }}.
* Dodge the line on the ground from {{ site.data.dungeon.cos.piercing_gale }}. They come from both {{ site.data.dungeon.cos.advisor_melandrus }} and his clones.
* {{ site.data.dungeon.cos.slicing_maelstrom }} does pulsing damage around {{ site.data.dungeon.cos.advisor_melandrus }} and his clones. You **need** to be 7 yards away from them during the channel. Use {{ site.data.talent.as }} as needed and {{ site.data.talent.ag }} to help the healer.
* Do not come into contact with a tornado from {{ site.data.dungeon.cos.enveloping_winds }}, it will stun you. You can be dispelled so soaking the tornadoes can be planned with your party.
* Remember to use {{ site.data.talent.swg }} to keep uptime while dodging.

*Note:* The fight is significantly easier if you stack all of {{ site.data.dungeon.cos.advisor_melandrus }}'s clones in the same area. Train yourself to always go back near his clones after {{ site.data.dungeon.cos.slicing_maelstrom }} and {{ site.data.dungeon.cos.piercing_gale }} to bait {{ site.data.dungeon.cos.blade_surge }} in the same area !

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="hov">
<div data-toggle="collapse" data-target="#hov-collapse" aria-expanded="true" aria-controls="hov-collapse" class="dungeon-header hov"><h2>Halls of Valor</h2></div>
</div>
<div id="hov-collapse" class="collapse" aria-labelledby="hov" data-parent="#accordion">
<div class="card-body" markdown="1">

### Miscellaneous Tips

* There are many frontals and cleaves in this dungeon. Staying away from the tank is generally a good idea.

### Notable Talent Choices
* {{ site.data.talent.purge }} has some really good uses, notably on the {{ site.data.dungeon.hov.stormforged_sentinel }}.
* Halls of Valor is a really intensive healing dungeon, {{ site.data.talent.ag }} has a lot of value, notably on bosses.
* The bosses are pretty dangerous, notably in {{ site.data.affixes.tyrannical }}. Consider running {{ site.data.talent.spirit_wolf }} and {{ site.data.talent.brimming_with_life }} for extra survivability.
* {{ site.data.talent.stoneskin_totem }} can be used in higher key for {{ site.data.dungeon.hov.hymdall }}'s {{ site.data.dungeon.hov.horn_of_valor }} and {{ site.data.dungeon.hov.fenryr }}'s {{ site.data.dungeon.hov.claw_frenzy }}.

<hr>

### {{ site.data.dungeon.hov.hymdall }} trash

**{{ site.data.dungeon.hov.valarjar_champion }}**
* Don't be on the tank, {{ site.data.dungeon.hov.power_attack }} cleaves.

**{{ site.data.dungeon.hov.valarjar_thundercaller }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hov.thunderstrike }} and {{ site.data.dungeon.hov.thunderous_bolt }}.

**{{ site.data.dungeon.hov.storm_drake }}**
* Watch out for the {{ site.data.dungeon.hov.lightning_breath }} frontal.
* Dodge the {{ site.data.dungeon.hov.crackling_storm }} swirly and the following tornado. Use {{ site.data.talent.swg }} to keep uptime while dodging.

<hr>

### {{ site.data.dungeon.hov.hymdall }}

* Stand close to the walls to bait {{ site.data.dungeon.hov.dancing_blade }} out of the way.
* Never be on the tank, {{ site.data.dungeon.hov.bloodletting_sweep }} cleaves.
* {{ site.data.dungeon.hov.horn_of_valor }} will call 3 drakes that will fill with lightning the 3 sections of the room one after the other. Always pay attention to these drakes and move to the correct spot to dodge the {{ site.data.dungeon.hov.static_field }} and the following {{ site.data.dungeon.hov.ball_lightning }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.
* {{ site.data.dungeon.hov.horn_of_valor }} also does a lot of initial damage. Use {{ site.data.talent.as }} before it if you are not confident in your current HP.

<hr>

### {{ site.data.dungeon.hov.hyrja }} trash

**{{ site.data.dungeon.hov.valarjar_runecarver }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hov.etch }} in priority and {{ site.data.dungeon.hov.shattered_rune }} if possible.
* {{ site.data.dungeon.hov.etch }} is a channeled beam on a random player. Don't hesitate to use {{ site.data.talent.as }} if you are targeted.

**{{ site.data.dungeon.hov.valarjar_mystic }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hov.holy_radiance }}.
* You don't *need* to interrupt {{ site.data.dungeon.hov.rune_of_healing }}, the tank can kite out of it. Be sure to stand in the rune for free healing if the cast is successful.

**{{ site.data.dungeon.hov.valarjar_marksman }}**
* This mobs jump around with {{ site.data.dungeon.hov.leap_to_safety }} then cast {{ site.data.dungeon.hov.penetrating_shot }}, a frontal that will likely kill you. Always pay attention to their position.

**{{ site.data.dungeon.hov.valarjar_shieldmaiden }}**
* Don't be on the tank, {{ site.data.dungeon.hov.mortal_hew }} cleaves.

**{{ site.data.dungeon.hov.stormforged_sentinel }}**
* Dodge {{ site.data.dungeon.hov.crackle }} with a little side step.
* Stay farther than 15 yards away to ignore {{ site.data.dungeon.hov.charged_pulse }}.
* Be ready to instantly {{ site.data.talent.purge }} {{ site.data.dungeon.hov.protective_light }} when they reach 30% HP.

**{{ site.data.dungeon.hov.valarjar_aspirant }}**
* This mobs jumps on a player with {{ site.data.dungeon.hov.valkyras_advance }} then uses {{ site.data.dungeon.hov.blast_of_light }}, a frontal beam, on the tank. Always be aware of her position.
* You can make her reset her {{ site.data.dungeon.hov.valkyras_advance }} jump by Line of Sighting it in the stairs. It's useful to keep her in place and let the mobs packed.

**{{ site.data.dungeon.hov.solsten }}**
* Hide under the dome during {{ site.data.dungeon.hov.eye_of_the_storm }}. This is a great place to use {{ site.data.talent.ag }} and {{ site.data.talent.as }}.
* Spread after {{ site.data.dungeon.hov.eye_of_the_storm }} ends to avoid spreading {{ site.data.dungeon.hov.arcing_bolt }} to multiple players.

**{{ site.data.dungeon.hov.olmyr_the_Enlightened }}**
* Dodge the orbs of light during {{ site.data.dungeon.hov.sanctify }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hov.searing_light }}.

<hr>

### {{ site.data.dungeon.hov.hyrja }}

* This is a very intense fight healing wise. Be ready to pop {{ site.data.talent.as }}, {{ site.data.talent.ee }} or even {{ site.data.item.potion_rhp }} and {{ site.data.item.hs }}.
* Hide under the dome during {{ site.data.dungeon.hov.eye_of_the_storm }}. This is a great place to use {{ site.data.talent.ag }} and {{ site.data.talent.as }}.
* Spread fast after {{ site.data.dungeon.hov.eye_of_the_storm }} ends to avoid sharing {{ site.data.dungeon.hov.arcing_bolt }} with multiple players.
* Dodge the orbs of light during {{ site.data.dungeon.hov.sanctify }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.
* Don't be near your tank after {{ site.data.dungeon.hov.eye_of_the_storm }} and {{ site.data.dungeon.hov.sanctify }}, she will use {{ site.data.dungeon.hov.shield_of_light }}, a frontal beam on him.

<hr>

### {{ site.data.dungeon.hov.fenryr }} trash

**{{ site.data.dungeon.hov.angerhoof_bull }}**
* Stay farther than 12 yards away to ignore {{ site.data.dungeon.hov.rumbling_stomp }}.

**{{ site.data.dungeon.hov.steeljaw_grizzly }}**
* Don't be on the tank, {{ site.data.dungeon.hov.rending_claws }} cleaves.

**{{ site.data.dungeon.hov.ebonclaw_worg }}**
* These mobs are super deadly. They buff themselves while pulled together then jump on ranged players with {{ site.data.dungeon.hov.leap_for_the_throat }}. Stay close to melee but spreaded and use {{ site.data.talent.as }} as required.

<hr>

### {{ site.data.dungeon.hov.fenryr }}

* Stay near the boss to help soak {{ site.data.dungeon.hov.claw_frenzy }}.
* Stop casting to not get silenced by {{ site.data.dungeon.hov.unnerving_howl }}.
* Kite the boss if you are targeted by {{ site.data.dungeon.hov.scent_of_blood }}. Be careful not to run into the remaining {{ site.data.dungeon.hov.ebonclaw_worg }} in the area. Use {{ site.data.talent.swg }} to keep uptime while kiting.
* Spread when targeted with {{ site.data.dungeon.hov.ravenous_leap }}. Quickly come back to help soak {{ site.data.dungeon.hov.claw_frenzy }}.

<hr>

### {{ site.data.dungeon.hov.god_king_skovald }} trash

The 4 kings in the area must be defeated for {{ site.data.dungeon.hov.god_king_skovald }} to spawn. They each have a unique ability and defeating one grants his ability to the other ones. You must engage one, then another, then the last two will attack together. It's possible to speed up this proccess by picking up a {{ site.data.dungeon.hov.mug_of_mead }} in the banquet's hall. Throw the {{ site.data.dungeon.hov.mug_of_mead }} on a king, then talk to another one then kite it over the king spreaded with mead. They will start to fight allowing you to engage the second king. [This video](https://youtu.be/CdZvi8jKUMc) explains the method and [this one](https://youtu.be/eQx4c8FyrcA) explains an advanced version with all 4 kings.

**{{ site.data.dungeon.hov.king_ranulf }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hov.unruly_yell }}.

**{{ site.data.dungeon.hov.king_haldor }}**
* He does damage on the tank with {{ site.data.dungeon.hov.sever }}.

**{{ site.data.dungeon.hov.king_bjorn }}**
* He will use {{ site.data.dungeon.hov.wicked_dagger }} on a random party member for huge damage and a 50% healing debuff. In higher keys, track who is targeted and use {{ site.data.talent.as }} if needed.

**{{ site.data.dungeon.hov.king_tor }}**
* Use your CCs to help kiting the Ancestors spawned by {{ site.data.dungeon.hov.call_ancestor }}. {{ site.data.spell.earthbind_totem }}, {{ site.data.talent.capacitor_totem }}, {{ site.data.talent.earthgrab_totem }}, {{ site.data.talent.thunderstorm }}, {{ site.data.talent.thundershock }} and {{ site.data.talent.lightning_lasso }} all work !

### {{ site.data.dungeon.hov.god_king_skovald }}

* Stay spreaded, he will target a random player with {{ site.data.dungeon.hov.felblaze_rush }}, hitting everyone within 6 yards. Use {{ site.data.talent.as }} as needed.
* Stand behind {{ site.data.dungeon.hov.aegis_of_aggramar }} during {{ site.data.dungeon.hov.ragnarok }}.
* When Skovald uses the {{ site.data.dungeon.hov.aegis_of_aggramar }}, get around the shield to hit him.
* Kite the {{ site.data.dungeon.hov.flame_of_woe }}, if possible with {{ site.data.talent.swg }}. You can spread {{ site.data.spell.fs }} on the {{ site.data.dungeon.hov.flame_of_woe }} for {{ site.data.talent.splinter }} value. Be quick about it because they will burn themselves out with {{ site.data.dungeon.hov.consuming_flame }}.

### {{ site.data.dungeon.hov.odyn }}

* Focus target {{ site.data.dungeon.hov.stormforged_obliterator }} as soon as it spawns. Interrupt and CC it while kiting away from {{ site.data.dungeon.hov.radiant_tempest }}. Be careful not to be too far from {{ site.data.dungeon.hov.stormforged_obliterator }} or you will not be able to interrupt his {{ site.data.dungeon.hov.surge_hov }}.
* Avoid {{ site.data.dungeon.hov.spear_of_light }} swirlies and {{ site.data.dungeon.hov.glowing_fragment }} orbs.
* Run to the matching run when affected by {{ site.data.dungeon.hov.runic_brand }}. Use [this weekaura](https://wago.io/RunicBrandHelper) (by Jodsderechte) to find the matching run faster.
* While running to your assigned rune, you will take heavy damage. Use {{ site.data.talent.as }} to survive. {{ site.data.talent.swg }} paired with {{ site.data.spell.healing_surge }} can be clutch while moving since your healer will also be running to their matching rune.
* Keep offensive CDs for {{ site.data.dungeon.hov.branded }}. It's the best time for {{ site.data.spell.bl }} as well.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="rlp">
<div data-toggle="collapse" data-target="#rlp-collapse" aria-expanded="true" aria-controls="rlp-collapse" class="dungeon-header rlp"><h2>Ruby Life Pools</h2></div>
</div>
<div id="rlp-collapse" class="collapse" aria-labelledby="rlp" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices
* {{ site.data.talent.purge }} is very potent in Ruby Life Pools, allowing you to execute adds and dispel shields.
* Ruby Life Pools is a really intensive healing dungeon, {{ site.data.talent.ag }} has a lot of value, notably on bosses and minibosses.
* The bosses are pretty dangerous, notably in {{ site.data.affixes.tyrannical }}. Consider running {{ site.data.talent.spirit_wolf }} and {{ site.data.talent.brimming_with_life }} for extra survivability.
* {{ site.data.talent.stoneskin_totem }} can be used in higher key to reduce tank damage on the second and third boss.

<hr>

### {{ site.data.dungeon.rlp.melidrussa_chillworn }} trash

**{{ site.data.dungeon.rlp.flashfrost_chillweaver }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.rlp.ice_shield }}.
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.rlp.ice_shield }} on the buffed enemy.

**{{ site.data.dungeon.rlp.flashfrost_earthshaper }}**
* Watch your feet and dodge {{ site.data.dungeon.rlp.tectonic_slam }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.

**{{ site.data.dungeon.rlp.primal_juggernaut }}**
* Watch your feet and dodge {{ site.data.dungeon.rlp.excavating_blast }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.

### {{ site.data.dungeon.rlp.defier_draghar }}

* Dodge his {{ site.data.dungeon.rlp.blazing_rush }} charge on a random player. Don't make him charge into the eggs in the area or {{ site.data.dungeon.rlp.infused_whelp }} will spawn.
* Dodge the red swirlies created by {{ site.data.dungeon.rlp.steel_barrage }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.

<hr>

### {{ site.data.dungeon.rlp.melidrussa_chillworn }}

* Stay packed with your group to drop {{ site.data.dungeon.rlp.hailbombs }} in the same general area.
* Move away from the group to drop {{ site.data.dungeon.rlp.chillstorm }}. Use {{ site.data.talent.gust_of_wind }}
to quickly leave the AoE.  Use {{ site.data.talent.swg }} to keep uptime while getting pulled.
* Use {{ site.data.talent.as }} and {{ site.data.talent.ag }} during {{ site.data.dungeon.rlp.frost_overload }} to survive. Use CDs to quickly burst her shield.
* The {{ site.data.dungeon.rlp.infused_whelp }} that spawn are not a priority DPS, but it's important that they die so the tank doesn't get stunned by {{ site.data.dungeon.rlp.cold_claws }}. You can arrange with your group for a single person to do AoE and the other DPS to funnel damage into {{ site.data.dungeon.rlp.melidrussa_chillworn }}.

<hr>

### {{ site.data.dungeon.rlp.kokia_blazehoof }} trash

**{{ site.data.dungeon.rlp.primalist_cinderweaver }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.rlp.cinderbolt }}.
* You can use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.rlp.burning_ambition }}. But {{ site.data.dungeon.rlp.burning_ambition }} will also damage the caster while it's active so it's not mandatory. Make an educated choice with your group health in mind.

**{{ site.data.dungeon.rlp.primalist_flamedancer }}**
* Use {{ site.data.talent.purge }} on {{ site.data.dungeon.rlp.blaze_of_glory }} as soon as they reach 0 HP. Dodge the red swirlies that spawn while {{ site.data.dungeon.rlp.blaze_of_glory }} is active.

**{{ site.data.dungeon.rlp.blazebound_destroyer }}**
* Use {{ site.data.dungeon.rlp.living_bomb }} on the enemies to bump them and deal some damage. Use {{ site.data.talent.as }} as needed.
* Use {{ site.data.talent.ag }} to help the healer during {{ site.data.dungeon.rlp.inferno }}.

**{{ site.data.dungeon.rlp.thunderhead }}**
* Move fast when targeted by the {{ site.data.dungeon.rlp.storm_breath }} frontal. Use {{ site.data.talent.swg }} to keep uptime while dodging.
* Use {{ site.data.talent.ag }} to help the healer.
* Use {{ site.data.talent.as }} if you get the {{ site.data.dungeon.rlp.rolling_thunder }} debuff.

**{{ site.data.dungeon.rlp.flamegullet }}**
* Move fast when targeted by the {{ site.data.dungeon.rlp.flame_breath }} frontal. Use {{ site.data.talent.swg }} to keep uptime while dodging.
* {{ site.data.dungeon.rlp.molten_blood }} does ramping damage starting at 50% HP. Use {{ site.data.talent.ag }} to help the healer below that threshold.
* Use {{ site.data.talent.as }} as required.

<hr>

### {{ site.data.dungeon.rlp.kokia_blazehoof }}

* Bait the first {{ site.data.dungeon.rlp.ritual_of_blazebinding }} at 15 yards from the boss, then bait the others with your group.
* Bait {{ site.data.dungeon.rlp.molten_boulder }} into the walls or into previous magma pools. Beware of an early explosion of the boulder if you are close to a wall.
* Focus {{ site.data.dungeon.rlp.blazebound_firestorm }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.rlp.roaring_blaze }}.
* Use {{ site.data.talent.ag }} to help the healer during {{ site.data.dungeon.rlp.inferno }}.
* Move away from {{ site.data.dungeon.rlp.blazebound_firestorm }} as it dies to avoid {{ site.data.dungeon.rlp.burnout }}.
* Use {{ site.data.talent.swg }} aggressively, it's very good on this fight and should be used as soon as you need to move for maximum uptime on it.

*Note:* Learning the timings to correctly bait the {{ site.data.dungeon.rlp.molten_boulder }} and {{ site.data.dungeon.rlp.ritual_of_blazebinding }} will make this fight significantly easier.

<hr>

### {{ site.data.dungeon.rlp.kyrakka }} and {{ site.data.dungeon.rlp.erkhart_stormvein }} trash

**{{ site.data.dungeon.rlp.storm_warrior }}**
* One of the only mobs that does nothing but tank damage this season. Worth noting.

**{{ site.data.dungeon.rlp.primal_thundercloud }}**
* Use {{ site.data.talent.purge }} on {{ site.data.dungeon.rlp.tempest_barrier }} and they will suicide with {{ site.data.dungeon.rlp.crackling_detonation }}.
* **DO NOT** interrupt {{ site.data.dungeon.rlp.crackling_detonation }}. Just dodge the blue swirlies. Use {{ site.data.talent.swg }} to keep uptime while dodging.

**{{ site.data.dungeon.rlp.tempest_channeler }}**
* Use {{ site.data.talent.purge }} on {{ site.data.dungeon.rlp.primal_thundercloud }} summoned by {{ site.data.dungeon.rlp.summon_primal_thundercloud }}.
* Use {{ site.data.talent.ag }} and {{ site.data.talent.as }} to mitigate {{ site.data.dungeon.rlp.lightning_storm }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.rlp.lightning_bolt }}.

**{{ site.data.dungeon.rlp.flame_channeler }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.rlp.flashfire }}.
* You can use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.rlp.burning_veins }}. But {{ site.data.dungeon.rlp.burning_veins }} will also damage the caster while it's active so it's not mandatory. Make an educated choice with your Tank health in mind.

**{{ site.data.dungeon.rlp.high_channeler_ryvati }}**
* The shield {{ site.data.dungeon.rlp.high_channeler_ryvati }} gets from {{ site.data.dungeon.rlp.tempest_stormshield }} depends on how many {{ site.data.dungeon.rlp.tempest_barrier }} are active.
* You want to use {{ site.data.talent.purge }} on {{ site.data.dungeon.rlp.primal_thundercloud }} **in priority** to remove as many {{ site.data.dungeon.rlp.tempest_barrier }} as possible.
* Use {{ site.data.talent.ag }} and {{ site.data.talent.as }} to mitigate {{ site.data.dungeon.rlp.lightning_storm }}.

<hr>

### {{ site.data.dungeon.rlp.kyrakka }} and {{ site.data.dungeon.rlp.erkhart_stormvein }}

* {{ site.data.dungeon.rlp.kyrakka }} will **always** be the priority target in phase 1 and 2. As a ranged player, target her whenever she is in range.
* During phase 1, you want to stay between the two pillars of the room as much as possible to bait {{ site.data.dungeon.rlp.kyrakka }} into landing for better uptime.
* Keep offensive CDs and {{ site.data.spell.bl }} for phase 2.
* Dodge {{ site.data.dungeon.rlp.roaring_firebreath }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.
* Stop casting when {{ site.data.dungeon.rlp.erkhart_stormvein }} casts {{ site.data.dungeon.rlp.interrupting_cloudburst }}.
* Don't let {{ site.data.dungeon.rlp.winds_of_change }} push you into {{ site.data.dungeon.rlp.flaming_embers }}.
* Use {{ site.data.talent.as }} if you get the {{ site.data.dungeon.rlp.infernocore }} debuff and try to stand far from the group to drop {{ site.data.dungeon.rlp.flaming_embers }} in a good spot.
* {{ site.data.dungeon.rlp.infernocore }} will go on the whole group during phase 2. Use {{ site.data.talent.ag }} to help your healer.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="sbg">
<div data-toggle="collapse" data-target="#sbg-collapse" aria-expanded="true" aria-controls="sbg-collapse" class="dungeon-header sbg"><h2>Shadowmoon Burial Grounds</h2></div>
</div>
<div id="sbg-collapse" class="collapse" aria-labelledby="sbg" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices
* {{ site.data.talent.purge }} has some good uses, allowing you dispel big shields after the first boss notably.
* {{ site.data.talent.tremor_totem }} can be used on the adds after the first boss.

<hr>

### {{ site.data.dungeon.sbg.sadana_bloodfury }} trash

**{{ site.data.dungeon.sbg.shadowmoon_bone_mender }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.sbg.shadow_mend }} in priority and {{ site.data.dungeon.sbg.shadow_bolt }} with extra kicks.

**{{ site.data.dungeon.sbg.void_spawn }}**
* You can Line of sight to take no damage from {{ site.data.dungeon.sbg.void_pulse }}. Use {{ site.data.talent.as }} if you don't.
* {{ site.data.talent.ag }} is very good to help your healer during {{ site.data.dungeon.sbg.void_pulse }}.
* Use {{ site.data.talent.swg }} to dodge {{ site.data.dungeon.sbg.void_eruptions }} purple swirlies.

**{{ site.data.dungeon.sbg.shadowmoon_loyalist }}**
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.sbg.sinister_focus }}.

**{{ site.data.dungeon.sbg.defiled_spirit }}**
* Get away from them when they teleport on you and cast {{ site.data.dungeon.sbg.cry_of_anguish }}.
* Stay near the group so that they don't teleport too far.

<hr>

### {{ site.data.dungeon.sbg.sadana_bloodfury }}

* Stay packed with your group to bait {{ site.data.dungeon.sbg.daggerfall }} in the same area.
* Use {{ site.data.talent.ag }} to help healing the damage of {{ site.data.dungeon.sbg.whispers_of_the_dark_star }}. Use {{ site.data.talent.as }} to help yourself if needed.
* Immediately switch on the Defiled Soul when {{ site.data.dungeon.sbg.dark_communion_sbg }} starts. Remember to use {{ site.data.spell.fs }} on both targets. It's a good moment to gain extra value from {{ site.data.talent.splinter }}.
* Enter a {{ site.data.dungeon.sbg.lunar_purity }} rune to reduce the damage of {{ site.data.dungeon.sbg.dark_eclipse }}.

<hr>

### {{ site.data.dungeon.sbg.nhallish }} trash

**{{ site.data.dungeon.sbg.shadowmoon_dominator }}**
* Try to not interrupt their initial {{ site.data.dungeon.sbg.domination }} cast as it will prevent them from casting anything else. While the initial cast is still going, {{ site.data.dungeon.sbg.subjugated_soul }} will do bonus damage and potentially target random players. Interrupt the cast with {{ site.data.spell.wind_shear }} as needed before anyone dies.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.sbg.domination }} and {{ site.data.dungeon.sbg.rending_voidlash }}.
* You can use {{ site.data.talent.tremor_totem }} to prevent any charm from {{ site.data.dungeon.sbg.domination }}.

**{{ site.data.dungeon.sbg.shadowmoon_exhumer }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.sbg.void_bolt }}.

**{{ site.data.dungeon.sbg.exhumed_spirit }}**
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.sbg.incorporeal }}.
* {{ site.data.dungeon.sbg.death_blast }} will one-shot a party member in higher keys. It's a must interrupt !!

<hr>

### {{ site.data.dungeon.sbg.nhallish }}

* Move away from {{ site.data.dungeon.sbg.nhallish }} after it uses {{ site.data.dungeon.sbg.planar_shift }} as it will cast {{ site.data.dungeon.sbg.void_vortex }} right after.
* Dodge the purple swirlies from {{ site.data.dungeon.sbg.void_devastation }}. Remember to use {{ site.data.talent.swg }} to keep uptime while moving.
* During {{ site.data.dungeon.sbg.soul_steal }}, you will be separated from your healer and take moderate damage. Use {{ site.data.talent.as }} and {{ site.data.item.potion_rhp }} as needed.
* Use offensive CDs when you get the {{ site.data.dungeon.sbg.returned_soul }} buff after {{ site.data.dungeon.sbg.soul_steal }}.  If it's available, wait for your whole group to be back before using {{ site.data.spell.bl }}.

<hr>

### {{ site.data.dungeon.sbg.bonemaw }} trash

**{{ site.data.dungeon.sbg.monstrous_corpse_spider }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.sbg.necrotic_burst }}.

**{{ site.data.dungeon.sbg.plagued_bat }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.sbg.plague_spit }}.

**{{ site.data.dungeon.sbg.carrion_worm }}**
* They will disappear at 20% health, don't use CDs at a bad timing.
* Dodge {{ site.data.dungeon.sbg.body_slam }}. Use {{ site.data.talent.swg }} if needed.

<hr>

### {{ site.data.dungeon.sbg.bonemaw }}

* Stay close to the boss to bait {{ site.data.dungeon.sbg.necrotic_pitch }} near melee.
* Stand in {{ site.data.dungeon.sbg.necrotic_pitch }} during {{ site.data.dungeon.sbg.inhale }}.
* Beware of the additional {{ site.data.dungeon.sbg.body_slam }} coming from behind after the first {{ site.data.dungeon.sbg.inhale }}.
* Use {{ site.data.spell.fs }} on all three targets when the {{ site.data.dungeon.sbg.carrion_worm }} come back. Try to use them for {{ site.data.talent.splinter }} value.

<hr>

### {{ site.data.dungeon.sbg.nerzhul }}'s Elementals

* The pack before {{ site.data.dungeon.sbg.nerzhul }} consists of two {{ site.data.dungeon.sbg.void_spawn }}, making it super deadly. You need to Line of Sight at least one of the {{ site.data.dungeon.sbg.void_pulse }} or you will likely die. You can do it either with the door at the entrance or with the altars on the side, which have small corners to hide.
* Use everything at your disposal to survive : {{ site.data.talent.as }}, {{ site.data.talent.ee }}, {{ site.data.talent.ag }}, {{ site.data.item.potion_rhp }}.

<hr>

### {{ site.data.dungeon.sbg.nerzhul }}

* {{ site.data.dungeon.sbg.nerzhul }} is a movement heavy fight that can be quite draining.
* As ranged, you need to stay far away from the boss to bait {{ site.data.dungeon.sbg.omen_of_death }}.
* Unless you preemptively move away from {{ site.data.dungeon.sbg.omen_of_death }}, you will take damage from it. Learning how to take 0 damage from it reduces the damage in the fight by a good margin.
* {{ site.data.dungeon.sbg.malevolence }} is a frontal cone that has no range limit and will require you to move a lot when far away.
* Try to spread {{ site.data.spell.fs }} on multiple skeletons {{ site.data.dungeon.sbg.ritual_of_bones }} for {{ site.data.talent.splinter }}, {{ site.data.talent.sfd }} and {{ site.data.talent.lvs }} value.
* It's possible for {{ site.data.talent.lmt }} to apply {{ site.data.spell.fs }} on two skeletons if placed correctly.
* Once a skeleton is dead, quickly move through the {{ site.data.dungeon.sbg.ritual_of_bones }} to the other side of the room to bait {{ site.data.dungeon.sbg.omen_of_death }} far from melee. Do not stay on the skeleton side of the room or you will be pincered between {{ site.data.dungeon.sbg.omen_of_death }}, {{ site.data.dungeon.sbg.malevolence }} and {{ site.data.dungeon.sbg.ritual_of_bones }}.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="tjs">
<div data-toggle="collapse" data-target="#tjs-collapse" aria-expanded="true" aria-controls="tjs-collapse" class="dungeon-header tjs"><h2>Temple of the Jade Serpent</h2></div>
</div>
<div id="tjs-collapse" class="collapse" aria-labelledby="tjs" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices
* {{ site.data.talent.cleanse_spirit }} is a mandatory talent in Temple of the Jade Serpent.
* {{ site.data.talent.tremor_totem }} has some uses, notably to counter the fear sha if people do not kick, but it could be skipped.
* {{ site.data.talent.purge }} has can be used a single time in the dungeon. Probably the best moment to drop it.

<hr>

### {{ site.data.dungeon.tjs.wise_mari }} trash

**{{ site.data.dungeon.tjs.fallen_waterspeaker }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.tjs.tidal_burst }} and {{ site.data.dungeon.tjs.hydrolance }}.

**{{ site.data.dungeon.tjs.corrupt_living_water }}**
* Get out of the huge {{ site.data.dungeon.tjs.surging_deluge }} blue swirly.
* Try to line of sight {{ site.data.dungeon.tjs.tainted_ripple }}. Use {{ site.data.talent.as }} if you get the debuff. Use {{ site.data.talent.ag }} to help your party member if any get the debuff.

<hr>

### {{ site.data.dungeon.tjs.wise_mari }}

* Stay far away from the boss to easily drop {{ site.data.dungeon.tjs.corrupted_vortex }}. Use {{ site.data.talent.as }} as needed when dropping it.
* Move around the boss to dodge {{ site.data.dungeon.tjs.wash_away }}. Use {{ site.data.talent.swg }} to keep uptime while moving.
* Time your movement to avoid the pulsing water from {{ site.data.dungeon.tjs.corrupted_geyser }}. [This weekaura](https://wago.io/RaFUBlICM) (by Absence) will tell you when {{ site.data.dungeon.tjs.corrupted_geyser }} will burst.

<hr>

### {{ site.data.dungeon.tjs.strife }} and {{ site.data.dungeon.tjs.peril }} trash

**{{ site.data.dungeon.tjs.haunting_sha }}**
* Don't be on the tank, {{ site.data.dungeon.tjs.haunting_gaze }} cleaves.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.tjs.haunting_scream }} at all cost. Use {{ site.data.talent.tremor_totem }} if you don't have kicks to spare and a cast is going through.

**{{ site.data.dungeon.tjs.jiang }}** and **{{ site.data.dungeon.tjs.xiang }}**
* You **must** use {{ site.data.talent.as }} when getting the {{ site.data.dungeon.tjs.throw_torch_tjs }} debuff.

**{{ site.data.dungeon.tjs.the_talking_fish }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.tjs.sleepy_soliloquy }}. Use {{ site.data.talent.tremor_totem }} to dispel your party if a cast goes through.

**{{ site.data.dungeon.tjs.lesser_sha }}**
* They will use {{ site.data.dungeon.tjs.sha_eruption }} when dying. Be prepared to use {{ site.data.talent.as }} or {{ site.data.item.potion_rhp }} if you are going to die.

**{{ site.data.dungeon.tjs.the_songbird_queen }}**
* Stay farther than 6 yards away to ignore {{ site.data.dungeon.tjs.territorial_display }}.

**{{ site.data.dungeon.tjs.the_crybaby_hozen }}**
* Use hard CC ({{ site.data.talent.capacitor_totem }}) to interrupt {{ site.data.dungeon.tjs.tears_of_pain }}. Dodge the blue swirlies if you don't. Use {{ site.data.talent.swg }} to keep uptime while dodging.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.tjs.fit_of_rage }}.

**{{ site.data.dungeon.tjs.the_golden_beetle }}**
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.tjs.golden_barrier }}. Be careful, dispelling it will damage the whole group.

**{{ site.data.dungeon.tjs.the_nodding_tiger }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.tjs.cat_nap }}.
* Use {{ site.data.talent.as }} if you get targeted by {{ site.data.dungeon.tjs.savage_leap }}.

<hr>

### {{ site.data.dungeon.tjs.strife }} and {{ site.data.dungeon.tjs.peril }}

* Stay in melee for healing purposes.
* Have {{ site.data.spell.fs }} up on both bosses but focus one boss at a time.
* Switch between {{ site.data.dungeon.tjs.strife }} and {{ site.data.dungeon.tjs.peril }} when {{ site.data.dungeon.tjs.intensity }} reaches 7 stacks.
* {{ site.data.dungeon.tjs.feeling_of_superiority }} is a damage buff received randomly that can be exchanged by going on the current wearer of the buff. Use {{ site.data.talent.as }} when at high stack of {{ site.data.dungeon.tjs.feeling_of_superiority }}.

<hr>

### {{ site.data.dungeon.tjs.liu_flameheart }} trash

**{{ site.data.dungeon.tjs.shambling_infester }}**
* It will periodically summon {{ site.data.dungeon.tjs.lesser_sha }} with {{ site.data.dungeon.tjs.summon_sha }}. As before, beware of their {{ site.data.dungeon.tjs.sha_eruption }} on death.
* Beware of the {{ site.data.dungeon.tjs.flames_of_doubt }} frontal breath.

**{{ site.data.dungeon.tjs.sha_touched_guardian }}**
* Stay farther than 6 yards away to ignore {{ site.data.dungeon.tjs.leg_sweep }}.

**{{ site.data.dungeon.tjs.depraved_mistweaver }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.tjs.defiling_mist }}.
* Use {{ site.data.talent.cleanse_spirit }} to dispel {{ site.data.dungeon.tjs.touch_of_ruin }}.

**{{ site.data.dungeon.tjs.minion_of_doubt }}**
* Dodge the {{ site.data.dungeon.tjs.shattered_resolve }} black swirlies. Use {{ site.data.talent.cleanse_spirit }} to remove the curse it casts on anyone touched.

<hr>

### {{ site.data.dungeon.tjs.liu_flameheart }}

* Keep offensive CDs for phase 2 (at 70%).
* Dodge the wave of flames from {{ site.data.dungeon.tjs.serpent_kick }} and {{ site.data.dungeon.tjs.jade_serpent_kick }}. Stop casting if you have to. Use {{ site.data.talent.swg }} as needed.
* Don't be in front of the boss when she takes {{ site.data.dungeon.tjs.yulon }}'s form to passively dodge {{ site.data.dungeon.tjs.jade_fire_breath }}.
* Dodge the green {{ site.data.dungeon.tjs.jade_fire }} swirly.

<hr>

### {{ site.data.dungeon.tjs.sha_of_doubt }} trash

The mobs before the last boss were all already present in the dungeon so they don't need additional explanations. The packs are nonetheless really difficult because of the mobs arrangement. They notably require a lot of interrupt and have many deadly mechanics. In {{ site.data.affixes.fortified }} weeks, you might want to keep {{ site.data.spell.bl }} for the last pack of the dungeon.

<hr>

### {{ site.data.dungeon.tjs.sha_of_doubt }}

* Be ready to use {{ site.data.talent.as }} and {{ site.data.item.potion_rhp }} if your healer didn't dispel {{ site.data.dungeon.tjs.touch_of_nothingness }} on you first.
* Stack with your group near a wall during {{ site.data.dungeon.tjs.bounds_of_reality }} to spawn all {{ site.data.dungeon.tjs.figment_of_doubt }} in the same area. CC, kite and burst them to quickly go out of this phase.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="av">
<div data-toggle="collapse" data-target="#av-collapse" aria-expanded="true" aria-controls="av-collapse" class="dungeon-header av"><h2>The Azure Vault</h2></div>
</div>
<div id="av-collapse" class="collapse" aria-labelledby="av" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices
* {{ site.data.talent.thunderous_paws }} is really useful to reset the slow on the last boss
* {{ site.data.talent.gust_of_wind }} gives you extra mobility in the long corridors of the dungeon and allows you to execute the jump down skips without dying.
* {{ site.data.talent.tremor_totem }} can make some packs less heavy on interrupt requirements but it isn't mandatory at all.

<hr>

### {{ site.data.dungeon.av.leymor }} trash

**{{ site.data.dungeon.av.conjured_lasher }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.av.mystic_vapors }}.

**{{ site.data.dungeon.av.shrieking_whelp }}**
* If your route doesn't plan for the crystal adds in the beginning, avoid pulling this mobs at all cost. And if you ever do, interrupt {{ site.data.dungeon.av.shriek }} at all cost.

**{{ site.data.dungeon.av.arcane_tender }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.av.erratic_growth }}.
* Dodge {{ site.data.dungeon.av.wild_eruption }} purple swirlies and puddles. Use {{ site.data.talent.swg }} to keep uptime while moving.

<hr>

### {{ site.data.dungeon.av.leymor }}

* Stay spreaded in range and dodge {{ site.data.dungeon.av.ley_line_sprouts }}. You must use {{ site.data.dungeon.av.leymor }}'s other abilities to destroy them.
* {{ site.data.dungeon.av.explosive_brand }} will knock you back and allow you transform nearby {{ site.data.dungeon.av.ley_line_sprouts }} into {{ site.data.dungeon.av.bubbling_sapling }}. Spread with your group to destroy as many as you can.
* {{ site.data.dungeon.av.erupting_fissure }} is a frontal on the tank that will transform {{ site.data.dungeon.av.ley_line_sprouts }} into {{ site.data.dungeon.av.bubbling_sapling }}. Don't be on him.
* {{ site.data.dungeon.av.consuming_stomp }} will deal huge damage, increased by the number of {{ site.data.dungeon.av.ley_line_sprouts }} active. Use {{ site.data.talent.as }} and {{ site.data.talent.ag }} as needed.

<hr>

### {{ site.data.dungeon.av.azureblade }} trash

**{{ site.data.dungeon.av.arcane_elemental }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.av.waking_bane }} in priority and {{ site.data.dungeon.av.arcane_bolt }} if possible.
* You can also use {{ site.data.talent.tremor_totem }} and let some {{ site.data.dungeon.av.waking_bane }} go through.

**{{ site.data.dungeon.av.unstable_curator }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.av.heavy_tome }} if possible but it's not a priority kick.
* Dodge the big blue {{ site.data.dungeon.av.forbidden_knowledge }} swirlies. Use {{ site.data.talent.swg }} to keep uptime while dodging.

**{{ site.data.dungeon.av.rune_seal_keeper }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.av.icy_bindings }} in priority. Use {{ site.data.talent.thunderous_paws }} to remove the root fast if the cast goes through.
* Interrupt {{ site.data.dungeon.av.condensed_frost }} if you have extra kicks.

**{{ site.data.dungeon.av.crystal_fury }}**
* Don't be on the tank, {{ site.data.dungeon.av.piercing_shards }} cleaves.

**{{ site.data.dungeon.av.crystal_thrasher }}**
* Stay father than 7 yards away to ignore {{ site.data.dungeon.av.splintering_shards }}.

**{{ site.data.dungeon.av.arcane_construct }}**
* Don't be on the tank, {{ site.data.dungeon.av.arcane_bash }} cleaves.

**{{ site.data.dungeon.av.astral_attendant }}**
* Dodge the blue {{ site.data.dungeon.av.unstable_power }} swirlies. Use {{ site.data.talent.swg }} to keep uptime while dodging.

**{{ site.data.dungeon.av.scalebane_lieutenant }}**
* Don't be on the tank, {{ site.data.dungeon.av.spellfrost_breath }} cleaves.

<hr>

### {{ site.data.dungeon.av.azureblade }}

* There will a decent number of {{ site.data.dungeon.av.draconic_image }} that will spawn during the fight. Try to have {{ site.data.spell.fs }} on all targets at all time.
* Dodge the swirlies creates on death by the {{ site.data.dungeon.av.draconic_image }}. But keep {{ site.data.talent.swg }} for the transition.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.av.illusionary_bolt }}.
* Watch out for {{ site.data.dungeon.av.ancient_orb }} when the boss turns toward you.
* Don't be on the tank, {{ site.data.dungeon.av.arcane_cleave }} cleaves.
* During {{ site.data.dungeon.av.overwhelming_energy }}, use {{ site.data.talent.swg }} to dodge the {{ site.data.dungeon.av.ancient_orb }} and burst the {{ site.data.dungeon.av.draconic_image }} as fast as possible.
* Use offensive and defensive CDs during {{ site.data.dungeon.av.overwhelming_energy }}, this phase is the hardest by far.

<hr>

### {{ site.data.dungeon.av.telash_greywing }} trash

**{{ site.data.dungeon.av.drakonid_breaker }}**
* {{ site.data.dungeon.av.shoulder_slam }} will knock you back. Be careful about your position at all time.
* {{ site.data.dungeon.av.bestial_roar }} does a moderate amount of damage to the whole group, be ready to use {{ site.data.talent.as }} and {{ site.data.talent.ag }}.

**{{ site.data.dungeon.av.nullmagic_hornswog }}**
* {{ site.data.dungeon.av.null_stomp }} will make them jump to a random location, typically preferring to jump to farther players. Stay close melee as much as possible.

<hr>

### {{ site.data.dungeon.av.telash_greywing }}

* Do not use CDs at the start of the battle, the boss will go immune after ~20 seconds.
* {{ site.data.dungeon.av.frost_bomb }} will require players to spread and let space for the group to move after it drops. Use {{ site.data.talent.gust_of_wind }} to quickly go out of the patch of ice. Use {{ site.data.talent.swg }} to keep uptime.
* Hide inside of a {{ site.data.dungeon.av.vault_rune }} during {{ site.data.dungeon.av.absolute_zero }}.
* You should already be spreaded for {{ site.data.dungeon.av.icy_devastator }}, just use {{ site.data.talent.as }} if you are targeted.

<hr>

### {{ site.data.dungeon.av.umbrelskul }}

* Try to stay still as much as possible to avoid gaining stacks of {{ site.data.dungeon.av.oppressive_miasma }}. Use {{ site.data.talent.gust_of_wind }} if you need to quickly move and {{ site.data.talent.thunderous_paws }} to reset your stacks.
* {{ site.data.dungeon.av.arcane_eruption }} will cause swirlies around the room and create {{ site.data.dungeon.av.crackling_vortex }} that will slowly move towards players that can generate healing aggro.
* Dodge if you are targeted by the {{ site.data.dungeon.av.crystalline_roar }} frontal.
* Be ready to be knocked back by {{ site.data.dungeon.av.unleashed_destruction }}. Be mindful of {{ site.data.dungeon.av.crackling_vortex }}, don't get knocked into one.
* Switch on the {{ site.data.dungeon.av.detonating_crystal }} as soon as they spawn, don't let them cast {{ site.data.dungeon.av.fracture }}.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="no">
<div data-toggle="collapse" data-target="#no-collapse" aria-expanded="true" aria-controls="no-collapse" class="dungeon-header no"><h2>The Nokhud Offensive</h2></div>
</div>
<div id="no-collapse" class="collapse" aria-labelledby="no" data-parent="#accordion">
<div class="card-body" markdown="1">

### Notable Talent Choices
* {{ site.data.talent.tremor_totem }} has some uses on the third boss but it isn't mandatory at all.
* {{ site.data.talent.purge }} is very useful on the second boss, be sure to talent it if your group doesn't have one.
* {{ site.data.talent.stoneskin_totem }} can be used in higher key for {{ site.data.dungeon.no.teera }}'s {{ site.data.dungeon.no.quick_shot }} and {{ site.data.dungeon.no.balakar_khan }}'s {{ site.data.dungeon.no.iron_spear }}.

<hr>

### {{ site.data.dungeon.no.granyth }} trash
**{{ site.data.dungeon.no.nokhud_longbow }}**
* Watch your feet to dodge {{ site.data.dungeon.no.rain_of_arrows }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.

**{{ site.data.dungeon.no.nokhud_warspear }}**
* They will charge at you and apply {{ site.data.dungeon.no.pierce }}. Consider using {{ site.data.talent.as }} if needed.
* Do not be too far out of melee. You don't want them to charge to Uganda. Don't be too close either to avoid stomp AoE of the packs.

**{{ site.data.dungeon.no.nokhud_hornsounder }}**
* Interrupt {{ site.data.dungeon.no.rally_the_clan }} with a hard CC ({{ site.data.talent.capacitor_totem }} or {{ site.data.talent.thunderstorm }}).

**{{ site.data.dungeon.no.nokhud_lancemaster }}**
* Don't be on the tank, {{ site.data.dungeon.no.cleaving_strikes }} cleaves.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.no.disruptive_shout }}, stop casting if the cast is going through or you will be spell locked.
* Stay farther than 8 yards away to ignore {{ site.data.dungeon.no.war_stomp }}.

<hr>

### {{ site.data.dungeon.no.granyth }}
* Have {{ site.data.spell.fs }} on all targets at all time.
* Switch on {{ site.data.dungeon.no.nokhud_saboteur }} as soon as it spawn. Use {{ site.data.spell.earthbind_totem }} and {{ site.data.talent.capacitor_totem }} to disrupt it. Do not let him cast {{ site.data.dungeon.no.dismantle }}.
* {{ site.data.dungeon.no.shards_of_stone }} does a lot of party damage. Use {{ site.data.talent.as }} to mitigate and {{ site.data.talent.ag }} to heal the damage.
* Stay farther than 20 yards away to ignore {{ site.data.dungeon.no.tectonic_stomp }}.
* Use {{ site.data.dungeon.no.dragonkiller_lance }} to interrupt {{ site.data.dungeon.no.eruption }}.

*Note:* Using {{ site.data.dungeon.no.dragonkiller_lance }} early will prevent the second {{ site.data.dungeon.no.shards_of_stone }} and reduce party damage by a lot.

<hr>

### {{ site.data.dungeon.no.the_raging_tempest }} trash

**{{ site.data.dungeon.no.primalist_stormspeaker }}**
* Always interrupt {{ site.data.dungeon.no.tempest }}. Assign a player to always and only kick it.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.no.stormbolt }} if you are not kicking {{ site.data.dungeon.no.tempest }}.

**{{ site.data.dungeon.no.primalist_thunderbeast }}**
* Stay spreaded at 10 yards away to not cleave your party with {{ site.data.dungeon.no.chain_lightning }}.
* Stay farther than 8 yards away to ignore {{ site.data.dungeon.no.thunder_clap }}.

**{{ site.data.dungeon.no.primal_stormshield }}**
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.no.stormshield }}.

**{{ site.data.dungeon.no.primalist_arcblade }}**
* Don't be on the tank to avoid getting cleaved by {{ site.data.dungeon.no.arcing_strike }}.

**{{ site.data.dungeon.no.stormcaller_arynga }}, {{ site.data.dungeon.no.stormcaller_boroo }}, {{ site.data.dungeon.no.stormcaller_solongo }} and {{ site.data.dungeon.no.stormcaller_zarii }}**
* {{ site.data.dungeon.no.totemic_overload }} will deal party-wide damage and a few {{ site.data.dungeon.no.uncontrollable_energy }} will spawn. Step on the lightning orbs to get a 5% damage increase stacking.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.no.stormbolt }} if you are not kicking {{ site.data.dungeon.no.tempest }}.

<hr>

### {{ site.data.dungeon.no.the_raging_tempest }}
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.no.energy_surge }}.
* You can have up to 10 stacks of {{ site.data.dungeon.no.uncontrollable_energy }}. Stack them as fast as possible then try to keep one orb to refresh the buff as late as possible. **Never** let a {{ site.data.dungeon.no.uncontrollable_energy }} reach the boss.
* Stay spreaded at 12 yards away to not cleave your party with {{ site.data.dungeon.no.lightning_strike }}.
* {{ site.data.dungeon.no.lightning_strike }} can be used to destroy {{ site.data.dungeon.no.uncontrollable_energy }} that are going to reach the boss.
* Use {{ site.data.talent.as }} and {{ site.data.talent.ag }} to survive {{ site.data.dungeon.no.electrical_storm }}.
* Don't go under the boss or {{ site.data.dungeon.no.the_raging_tempest_aoe }} will kill you.

<hr>

### {{ site.data.dungeon.no.teera }} and {{ site.data.dungeon.no.maruuk }} trash

**{{ site.data.dungeon.no.ukhel_deathspeaker }}**
* Stay farther than 10 yards away to ignore {{ site.data.dungeon.no.chant_of_the_dead }}.
* {{ site.data.dungeon.no.chant_of_the_dead }} makes the tank kite. Be mindful of it when using {{ site.data.spell.eq }} and {{ site.data.talent.lmt }}.

**{{ site.data.dungeon.no.ukhel_beastcaller }}**
* Use hard CC ({{ site.data.talent.capacitor_totem }}) to stop {{ site.data.dungeon.no.desecrating_roar }} or he will spawn 3 additional enemies.

**{{ site.data.dungeon.no.ukhel_corruptor }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.no.death_bolt }}.
* Dodge {{ site.data.dungeon.no.necrotic_eruption }} green swirlies.

**{{ site.data.dungeon.no.ukhel_willcrusher }}**
* Actually one of the only mobs that does nothing but tank damage this season. Worth noting.

**{{ site.data.dungeon.no.desecrated_ohuna }}**
* Don't be on the tank, {{ site.data.dungeon.no.rotting_wind }} cleaves.

**{{ site.data.dungeon.no.soulharvester_duuren }}, {{ site.data.dungeon.no.soulharvester_galtmaa }}, {{ site.data.dungeon.no.soulharvester_tumen }} and {{ site.data.dungeon.no.soulharvester_mandakh }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.no.death_bolt_volley }}. Assign a player to them if you have to.
* Pick up your sould when targeted by {{ site.data.dungeon.no.shatter_soul }}. Use {{ site.data.talent.swg }} to keep uptime while doing it.

<hr>

### {{ site.data.dungeon.no.teera }} and {{ site.data.dungeon.no.maruuk }}
* Have {{ site.data.spell.fs }} up on both bosses at all times.
* {{ site.data.dungeon.no.teera }} will reloacate with {{ site.data.dungeon.no.spirit_leap }}. {{ site.data.dungeon.no.spirit_leap }} doesn't do damage, do not move to dodge it.
* Stack up with your party when dropping {{ site.data.dungeon.no.gale_arrow }}. You won't take damage from other player's tornadoes on the initial hit and it becomes easy to dodge the tornadoes as they come back. You can either stack in melee or do a ranged and a melee group.
* Try to always be above 50% health to not randomly die from {{ site.data.dungeon.no.quick_shot }}. Use {{ site.data.talent.as }} or even {{ site.data.spell.healing_surge }} if needed.
* Get ready to instantly use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.no.guardian_wind }} right after {{ site.data.dungeon.no.repel }}.
* Dodge the brown swirlies during {{ site.data.dungeon.no.earthsplitter }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.

<hr>

### {{ site.data.dungeon.no.balakar_khan }} trash

A common route skip most of the trash in Nokhudon Hold, as they are very inneficient. You can find this route [here](https://youtu.be/0tIJAU-qA4M).

**{{ site.data.dungeon.no.balara }}**
* Dodge the brown swirly made by {{ site.data.dungeon.no.ravaging_spear }}. Use {{ site.data.talent.swg }} to keep uptime while dodging.

**{{ site.data.dungeon.no.batak }}**
* Dodge {{ site.data.dungeon.no.vehement_charge }}.
* Don't be on the tank, {{ site.data.dungeon.no.broad_stomp }} is a frontal on him.

<hr>

### {{ site.data.dungeon.no.balakar_khan }}
### Phase 1
* When focused by {{ site.data.dungeon.no.iron_spear }}, be a bit away from the boss and use {{ site.data.talent.as }} if needed. Move as soon as the spear hits you to dodge {{ site.data.dungeon.no.iron_stampede }}.
* Dodge the {{ site.data.dungeon.no.upheaval }} frontal.

### Intermission - 60% HP
* {{ site.data.dungeon.no.balakar_khan }} becomes immune to damage.
* The longer this phase lasts, the more damage {{ site.data.dungeon.no.stormwinds }} does, making this phase really hard in higher keys. You might want to plan offensive and defensive CDs for this.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.no.storm_bolt }}
* Assign a {{ site.data.dungeon.no.nokhud_stormcaster }} to kick per person and quickly pack them. Depending on your group, you might be asked to {{ site.data.talent.hex }} one of them.
* Dodge lightning blue swirlies during the phase.

### Phase 2
* The whole group will be pulled on the position of the target of {{ site.data.dungeon.no.static_spear }}. If targeted, be a bit away from the boss but don't pull your party into the wall. Use {{ site.data.talent.as }} if needed. Move as soon as the spear hits to dodge {{ site.data.dungeon.no.iron_stampede }}.
* Dodge the {{ site.data.dungeon.no.crackling_upheaval }} frontal and drop the {{ site.data.dungeon.no.crackling_cloud }} out of the way.
* Lightning blue swirlies will appear during the whole phase. You should have the time to finish your cast before moving in most cases.

*Note:* You can use the rock in the boss arena to block {{ site.data.dungeon.no.iron_stampede }}. Check [this video](https://youtu.be/aDXompHHGbk) for a fast guide. Be careful about dropping {{ site.data.dungeon.no.crackling_cloud }} far from the rock if you are using it.

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
