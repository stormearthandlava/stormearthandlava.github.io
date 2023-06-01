---
layout: page
title: "Aberrus, the Shadowed Crucible Guide"
last_update: 01/06/2023
game_version: 10.1.0 Dragonflight
toc: true
big_article: true
---

# Introduction
This guide was made possible by:

- Altenna (Discord: JudgeJames#0001 \| [Twitch](https://www.twitch.tv/judgejames) \| [Twitter](https://twitter.com/_judgejames_))
- Amani (Discord: Amani#0001 \| [Discord Server (RU)](https://discord.gg/vodovorot) \| [Twitch](https://www.twitch.tv/amanizandalari))
- Bloodmallet (Discord: Bloodmallet(EU)#8246 \| [Website](https://bloodmallet.com/))
- Elivrio (Discord: Elivrio#1450, in-game : Tyrindra-Ysondre)
- Eokira (Discord: Eokira#7823)
- Gaka (Discord: Gaka#7410)
- HawkCorrigan (Discord: HawkCorrigan#1811)
- Kaldeak (Discord: Kaldeak#1394)
- Sheffy (Discord: Sheffy#4928 \| [Twitch](https://www.twitch.tv/sheffywow) \| [Twitter](https://twitter.com/SheffyWoW))

The tips and recommendations listed here are based on educated opinions from PTR raid testing and reviewing logs and videos, so strategies can change as we develop a better understanding of each fight or as the spec and bosses are tuned. If you have any disagreements, feedback, or questions, please feel welcome to reach out to the team.

<hr>

# Miscellaneous Tips
- Recommendations that include {{ site.data.talent.if }} are written with the assumption that you have access to {{ site.data.spell.frs }}, the same applies to {{ site.data.talent.lmt }}, {{ site.data.talent.totemic_recall }} and {{ site.data.talent.call_of_the_elements }}.

- GCDs spent on healing and utilities are GCDs not spent on damage, but both are necessary to down a raid boss. Find the balance to optimize your contributions to your raid team.

- Time spent in {{ site.data.spell.ghost_wolf }} is time spent not doing damage. Practice proactive movement and utilize {{ site.data.talent.spiritwalkers_grace }}, {{ site.data.talent.gust_of_wind }} and instant casts as much as you can for movement heavy encounters.

- Planning and using {{ site.data.talent.ee }} on a particular phase can alleviate the difficulty of whole parts of a fight. It will increase your maximum health by an additional 15 % and can give you {{ site.data.talent.primordial_bond }} for the whole duration. Be careful and remember that it could interfere with your Primal Fire/Storm Elemental usage when {{ site.data.talent.pe }} is talented.

- Recall that {{ site.data.externals.stampeding_roar }} is now more potent than {{ site.data.talent.wind_rush_totem }}. Depending on your raid comp, it may be better to spend that talent point somewhere else.

- Remember to buy {{ site.data.externals.gateway_control_shard }} in Valdrakken. It will allow you to use {{ site.data.externals.demonic_gateway }} easily.

<hr>

# Bosses

<p style="color:red" align="center">Click on a boss banner to expand it.</p>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="kazzara">
<div data-toggle="collapse" data-target="#kazzara-collapse" aria-expanded="true" aria-controls="kazzara-collapse" class="raid-header aberrus_the_shadowed_crucible1"><h2>Kazzara, the Hellforged</h2></div>
</div>
<div id="kazzara-collapse" class="collapse" aria-labelledby="kazzara" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target

### Talents

#### Fire:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpUSCAJlkUoEUSSSEAAAAAgSAJlkgmASLJpFCIkIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

#### Lightning:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkgmASLJpFCIRIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* There are no phases / add spawns that require you to plan your cooldowns around.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.hellbeam }}, {{ site.data.raid.aberrus.dread_rift }} and {{ site.data.raid.aberrus.rays_of_anguish }}.

#### Defensives:
* Use {{ site.data.talent.as }} or healing consumables for {{ site.data.raid.aberrus.infernal_fusion }} (Mythic-only) and {{ site.data.raid.aberrus.dread_rift }}, especially in later stages of the fight when {{ site.data.raid.aberrus.infernal_heart }} becomes more potent.
* If talented, use {{ site.data.talent.earth_shield }} and {{ site.data.talent.healing_stream_totem }} as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
* Use {{ site.data.talent.wrt }} to help players that are targeted by {{ site.data.raid.aberrus.rays_of_anguish }} repositioning.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="the_amalgamation_chamber">
<div data-toggle="collapse" data-target="#the_amalgamation_chamber-collapse" aria-expanded="true" aria-controls="the_amalgamation_chamber-collapse" class="raid-header aberrus_the_shadowed_crucible2"><h2>The Amalgamation Chamber</h2></div>
</div>
<div id="the_amalgamation_chamber-collapse" class="collapse" aria-labelledby="the_amalgamation_chamber" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / Spread Cleave

### Talents:

#### Fire:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpUSCAJlkUoEUSSSEAAAAAgSAJlkgmASLJpFCIkIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

#### Lightning:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkgmASLJpFCIRIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown

#### Damage:
* Keep {{ site.data.spell.fs }} up on both {{ site.data.raid.aberrus.essence_of_shadow }} and {{ site.data.raid.aberrus.eternal_blaze }} during Phase 1 as long as you don't accumulate too many stacks of {{ site.data.raid.aberrus.corrupting_shadow }} and {{ site.data.raid.aberrus.blazing_heat }}.
* Ensure to have {{ site.data.talent.fe }} / {{ site.data.talent.se }} ready for Phase 2.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.umbral_detonation }}, {{ site.data.raid.aberrus.blistering_twilight }} and {{ site.data.raid.aberrus.coalescing_void }}.

#### Defensives:
* Use {{ site.data.talent.as }} or healing consumables whenever you accumulate high stacks of {{ site.data.raid.aberrus.corrupting_shadow }}, {{ site.data.raid.aberrus.blazing_heat }} or {{ site.data.raid.aberrus.shadowflame_contamination }}, especially when affected by {{ site.data.raid.aberrus.lingering_shadows }} (Mythic-only) or {{ site.data.raid.aberrus.lingering_flames }} (Mythic-only).
* If talented, use {{ site.data.talent.earth_shield }} and {{ site.data.talent.healing_stream_totem }} as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
* Use {{ site.data.talent.wrt }} to help players that are targeted by {{ site.data.raid.aberrus.blistering_twilight }} during Phase 1.
* If available, use {{ site.data.externals.demonic_gateway }} and {{ site.data.talent.wrt }} to deal with {{ site.data.raid.aberrus.coalescing_void }} during Phase 2.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="the_forgotten_experiments">
<div data-toggle="collapse" data-target="#the_forgotten_experiments-collapse" aria-expanded="true" aria-controls="the_forgotten_experiments-collapse" class="raid-header aberrus_the_shadowed_crucible3"><h2>The Forgotten Experiments</h2></div>
</div>
<div id="the_forgotten_experiments-collapse" class="collapse" aria-labelledby="the_forgotten_experiments" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / Cleave / AoE

### Talents:

#### Fire:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpUSCAJlkUoEUSSSEAAAAAgSASJJoJQSLJpFQhkkAI?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

#### Lightning:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkgmASLJpFCIRIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown

#### Damage:
* Focus down {{ site.data.raid.aberrus.erratic_remnant }} whenever they are active to prevent damage from {{ site.data.raid.aberrus.erratic_burst }}.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.massive_slam }}, {{ site.data.raid.aberrus.rending_charge }} and {{ site.data.raid.aberrus.deep_breath }}.

#### Defensives:
* Use {{ site.data.talent.as }} and {{ site.data.talent.stoneskin_totem }} or healing consumables when targeted by {{ site.data.raid.aberrus.rending_charge }}.
* If talented, use {{ site.data.talent.healing_stream_totem }} as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
* Use {{ site.data.talent.wrt }} to help players dodging {{ site.data.raid.aberrus.massive_slam }} in Phase 1, {{ site.data.raid.aberrus.unstable_essence }} upon removal in Phase 2 and {{ site.data.raid.aberrus.deep_breath }} in Phase 3.

#### Additional Notes:
* Having access to both {{ site.data.talent.go_with_the_flow }} and {{ site.data.externals.blessing_of_the_bronze }} provides the option of having {{ site.data.talent.gow }} ready for every single {{ site.data.raid.aberrus.massive_slam }}.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="assault_of_the_zaqali">
<div data-toggle="collapse" data-target="#assault_of_the_zaqali-collapse" aria-expanded="true" aria-controls="assault_of_the_zaqali-collapse" class="raid-header aberrus_the_shadowed_crucible4"><h2>Assault of the Zaqali</h2></div>
</div>
<div id="assault_of_the_zaqali-collapse" class="collapse" aria-labelledby="assault_of_the_zaqali" data-parent="#accordion">
<div class="card-body" markdown="1">
## Boss Fight Profile: Cleave / AoE

### Talents:

#### Lightning:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSJJJlDk0S0QQDJSAAAAAAKBIlkQaCItkkWKBkQEgA?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown

#### Damage:
* Always focus down {{ site.data.raid.aberrus.magma_mystic }} as fast as possible to limit the damage income of {{ site.data.raid.aberrus.molten_barrier }}.
* Ensure to have {{ site.data.talent.sk }} ready and preferably prepare an {{ site.data.talent.eogs }} buff when {{ site.data.raid.aberrus.zaqali_wallclimber }} are about to spawn.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.vigorous_gale }}, {{ site.data.raid.aberrus.cave_rubble }} and {{ site.data.raid.aberrus.renewed_hatchling }} (Mythic-only).

#### Defensives:
* Use {{ site.data.talent.as }} or healing consumables for {{ site.data.raid.aberrus.flaming_cudgel }} and while {{ site.data.raid.aberrus.molten_barrier }} is up.
* Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
* Use {{ site.data.talent.capacitor_totem }}, {{ site.data.spell.earthbind_totem }} and {{ site.data.talent.thunderstorm }} to gather and stun as many adds as possible, but especially to keep {{ site.data.raid.aberrus.renewed_hatchling }} (Mythic-only) away from players.
* Use {{ site.data.talent.wrt }} to help players dealing with {{ site.data.raid.aberrus.cave_rubble }}.

#### Additional Notes:
- {{ site.data.raid.aberrus.renewed_hatchling }} (Mythic-only) are CC-able. There's potential for a strategy where you would perma CC them, which would make {{ site.data.talent.earthgrab_totem }} and {{ site.data.talent.hex }} viable options. It's unlikely since the boss is one of the first ones, which means it probably won't require this level of micro management (logs seem to indicate this as well)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="rashok">
<div data-toggle="collapse" data-target="#rashok-collapse" aria-expanded="true" aria-controls="rashok-collapse" class="raid-header aberrus_the_shadowed_crucible5"><h2>Rashok, the Elder</h2></div>
</div>
<div id="rashok-collapse" class="collapse" aria-labelledby="rashok" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target

### Talents

#### Fire:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpUSCAJlkUoEUSSSEAAAAAgSAJlkgmASLJpFCIkIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

#### Lightning:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkgmASLJpFCIRIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown

#### Damage:
* There are no phases / add spawns that require you to plan your cooldowns around.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.doom_flames }} or {{ site.data.raid.aberrus.searing_slam }}.

#### Defensives:
* Use {{ site.data.talent.as }} or healing consumables for {{ site.data.raid.aberrus.scorching_heatwave }} or overlaps of {{ site.data.raid.aberrus.charged_smash }}, {{ site.data.raid.aberrus.overcharged }} (Mythic-only) and {{ site.data.raid.aberrus.conduit_flare }} (Mythic-only).
* If talented, use {{ site.data.talent.earth_shield }} and {{ site.data.talent.healing_stream_totem }} as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
* Use {{ site.data.talent.wrt }} to help players dealing with {{ site.data.raid.aberrus.searing_slam }} or {{ site.data.raid.aberrus.doom_flames }}.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="zskarn">
<div data-toggle="collapse" data-target="#zskarn-collapse" aria-expanded="true" aria-controls="zskarn-collapse" class="raid-header aberrus_the_shadowed_crucible6"><h2>Zskarn, the Vigilant Steward</h2></div>
</div>
<div id="zskarn-collapse" class="collapse" aria-labelledby="zskarn" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / AoE

### Talents

#### Fire:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpIJtkAJtIFKBNJJBAAAAAgSASJJkmASLJplSACJBI?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

#### Lightning:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkgmASJJpFCIRIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown

#### Damage:
* Ensure to have {{ site.data.talent.sk }} ready and preferably prepare an {{ site.data.talent.eogs }} buff when {{ site.data.raid.aberrus.dragonfire_golem }} are about to spawn.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.blast_wave }} or {{ site.data.raid.aberrus.tactical_destruction }}.

#### Defensives:
* Use {{ site.data.talent.as }} or healing consumables for overlaps of {{ site.data.raid.aberrus.blast_wave }} and {{ site.data.raid.aberrus.unstable_embers }} or whenever targeted by {{ site.data.raid.aberrus.elimination_protocol }} (Mythic-only).
* If talented, use {{ site.data.talent.healing_stream_totem }} as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
* Use {{ site.data.talent.capacitor_totem }} and {{ site.data.talent.earthgrab_totem }} if talented to gather and stun as many {{ site.data.raid.aberrus.dragonfire_golem }} as possible but keep in mind that {{ site.data.raid.aberrus.reinforced_defenses }} (Mythic-only) will prevent you from applying those CCs.
* Use {{ site.data.talent.wrt }} to help players repositioning during {{ site.data.raid.aberrus.tactical_destruction }}.
</div>
</div>
</div>

<div class="card">
<div class="card-header" id="magmorax">
<div data-toggle="collapse" data-target="#magmorax-collapse" aria-expanded="true" aria-controls="magmorax-collapse" class="raid-header aberrus_the_shadowed_crucible7"><h2>Magmorax</h2></div>
</div>
<div id="magmorax-collapse" class="collapse" aria-labelledby="magmorax" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target

#### Talents:

#### Fire:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpUSCAJlkUoEUSSSEAAAAAgSAJlkgmASLJpFCIkIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

#### Lightning:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkgmASLJpFCIRIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown

#### Damage:
* There are no phases / add spawns that require you to plan your cooldowns around.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.blazing_breath }}, {{ site.data.raid.aberrus.molten_spittle }} and {{ site.data.raid.aberrus.overpowering_stomp }}.

#### Defensives:
* Use {{ site.data.talent.as }} or healing consumables for whenever you accumulate high stacks of {{ site.data.raid.aberrus.searing_heat }} but especially for overlaps with {{ site.data.raid.aberrus.igniting_roar }}.
* If talented, use {{ site.data.talent.earth_shield }} and {{ site.data.talent.healing_stream_totem }} as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
* Use {{ site.data.talent.wrt }} to help players repositioning that are targeted by {{ site.data.raid.aberrus.molten_spittle }}.

#### Optional Notes:
* You can currently use {{ site.data.externals.demonic_gateway }} to handle every {{ site.data.raid.aberrus.overpowering_stomp }} (except Mythic). Both {{ site.data.talent.swg }} and {{ site.data.talent.gow }} can then be used to handle other mechanics.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="echo_of_neltharion">
<div data-toggle="collapse" data-target="#echo_of_neltharion-collapse" aria-expanded="true" aria-controls="echo_of_neltharion-collapse" class="raid-header aberrus_the_shadowed_crucible8"><h2>Echo of Neltharion</h2></div>
<div class=""></div>
</div>
<div id="echo_of_neltharion-collapse" class="collapse" aria-labelledby="echo_of_neltharion" data-parent="#accordion">
<div class="card-body" markdown="1">
## Boss Fight Profile: Single Target / AoE

### Talents:

#### Fire:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpIJtkAJINKBlkkkDAAAAAAoEQSJJoJg0SSahACJSgA?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

#### Lightning:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkgmASLJpFCIRIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown

#### Damage:
* Use {{ site.data.talent.sk }} and  {{ site.data.talent.fe }} / {{ site.data.talent.se }} to burst down {{ site.data.raid.aberrus.voice_from_beyond }}.
* If talented, prepare an {{ site.data.talent.eogs }} buff when {{ site.data.raid.aberrus.twisted_aberration }} are about to spawn.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.rushing_darkness }} and {{ site.data.raid.aberrus.volcanic_heart }}.

#### Defensives:
* Use {{ site.data.talent.as }} or healing consumables for {{ site.data.raid.aberrus.surrender_to_corruption }}, high stacks of {{ site.data.raid.aberrus.umbral_annihilation }} and whenever targeted by {{ site.data.raid.aberrus.volcanic_heart }}.
* If talented, use {{ site.data.talent.earth_shield }} and {{ site.data.talent.healing_stream_totem }} as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
* Use {{ site.data.talent.wrt }} to help players repositioning that are targeted by either {{ site.data.raid.aberrus.rushing_darkness }} or {{ site.data.raid.aberrus.volcanic_heart }}.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="scalecommander_sarkareth">
<div data-toggle="collapse" data-target="#scalecommander_sarkareth-collapse" aria-expanded="true" aria-controls="scalecommander_sarkareth-collapse" class="raid-header aberrus_the_shadowed_crucible9"><h2>Scalecommander Sarkareth</h2></div>
<div class=""></div>
</div>
<div id="scalecommander_sarkareth-collapse" class="collapse" aria-labelledby="scalecommander_sarkareth" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / AoE

#### Talents:

#### Fire:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpIJtkAJtINKBNJJBAAAAAgSASJJkmASLJplSACJBI?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

#### Lightning:
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkQaCItkkWIgQIBC?width=530&level=70" frameborder="0" width="530px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown

#### Damage:
* Use {{ site.data.talent.sk }} to burst down {{ site.data.raid.aberrus.null_glimmer }}.
* Focus down {{ site.data.raid.aberrus.empty_recollection }} whenever they are active (Mythic-only).
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.scorching_bomb }} and {{ site.data.raid.aberrus.drifting_embers }}.

#### Defensives:
* Use {{ site.data.talent.as }} or healing consumables for whenever you accumulate high stacks of {{ site.data.raid.aberrus.oblivion }} but especially during overlaps of {{ site.data.raid.aberrus.echoing_howl }} and {{ site.data.raid.aberrus.glittering_surge }}.
* If talented, use {{ site.data.talent.earth_shield }} and {{ site.data.talent.healing_stream_totem }} as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
* Use {{ site.data.talent.capacitor_totem }} and {{ site.data.spell.wind_shear }} to interrupt {{ site.data.raid.aberrus.blasting_scream }} from {{ site.data.raid.aberrus.null_glimmer }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.raid.aberrus.cosmic_volley }} from {{ site.data.raid.aberrus.empty_recollection }} (Mythic-only).
* Use {{ site.data.talent.wrt }} to help players collect {{ site.data.raid.aberrus.astral_flare }} and {{ site.data.raid.aberrus.mind_fragment }} during {{ site.data.raid.aberrus.emptiness_between_stars }}.
</div>
</div>
</div>

<br>

<hr>

# Useful WeakAuras
* [Aberrus, the Shadowed Crucible ](https://wago.io/DF-Dungeons) by Causese
* [Aberrus Co-Tank Auras](https://wago.io/dfcotank2) by Causese
* [Kaze ERT Timers Icons](https://wago.io/n7l5uN3YM) by KazeShinu#2330 (requires [Method (Exorsus) Raid Tools)](https://www.curseforge.com/wow/addons/method-raid-tools) Addon)
* [Interrupt Anchor - All Bosses](https://wago.io/InterruptAnchor) by Reloe (Requires [Method (Exorsus) Raid Tools](https://www.curseforge.com/wow/addons/method-raid-tools) Addon)

<hr>

# Additional Resources

* [Wowhead Elemental Shaman Aberrus Guide](https://www.wowhead.com/guide/classes/shaman/elemental/aberrus-the-shadowed-crucible-raid-tips) by HawkCorrigan
* [Icy-Veins Elemental Shaman Aberrus Tips](https://www.icy-veins.com/wow/elemental-shaman-pve-dps-aberrus-the-shadowed-crucible-raid-guide) by Stormy
- [Warcraft Logs](https://www.warcraftlogs.com/)
- [Aberrus, the Shadowed Crucible Loot Overview](https://www.wowhead.com/guide/raids/aberrus-the-shadowed-crucible/loot)
* [Raid Subcreation](https://raid.subcreation.net/aberrus-elemental-shaman.html)