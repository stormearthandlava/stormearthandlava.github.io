---
layout: page
title: "Aberrus, The Shadowed Crucible Guide"
last_update: 21/04/2023
game_version: 10.1.0 Dragonflight
author: Sheffy, Elivrio
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

- The final boss [Scalecommander Sarkareth](https://www.wowhead.com/ptr/npc=205319/scalecommander-sarkareth) was not tested on PTR so no footage for those bosses exists.

- GCDs spent on healing and utilities are GCDs not spent on damage, but both are necessary to down a raid boss. Find the balance to optimize your contributions to your raid team.

- Time spent in {{ site.data.spell.ghost_wolf }} is time spent not doing damage. Practice proactive movement and utilize {{ site.data.talent.spiritwalkers_grace }}, {{ site.data.talent.gust_of_wind }} and instant casts as much as you can for movement heavy encounters.

- Always remember that you can increase your maximum health by an additional 15 % and the uptime of {{ site.data.talent.primordial_bond }} by using {{ site.data.talent.ee }} provided it does not interfere with your Primal Fire/Storm Elemental usage when {{ site.data.talent.pe }} is talented which also gives access to an additional single target stun ({{ site.data.spell.pulverize }}).

- Recall that {{ site.data.externals.stampeding_roar }} is now more potent than {{ site.data.talent.wind_rush_totem }}. Depending on your raid comp, it may be better to spend that talent point somewhere else.

- Remember to buy {{ site.data.externals.gateway_control_shard }} in Valdrakken. It will allow you to use {{ site.data.externals.demonic_gateway }} easily.

<hr>

# Bosses

<p style="color:red" align="center">Click on a boss banner to expand it.</p>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="kazzara">
<div data-toggle="collapse" data-target="#kazzara-collapse" aria-expanded="true" aria-controls="kazzara-collapse" class="raid-header aberrus_the_shadowed_crucible1"><h2>Kazzara, The Hellforged</h2></div>
</div>
<div id="kazzara-collapse" class="collapse" aria-labelledby="kazzara" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target

### Talents

#### T29/T30 2-piece:

<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpUSCAJlkUoEUSSSEAAAAAgSAJlkgmASLJpFASSCBC?width=530&level=70" frameborder="0" width="530px" height="100%">
  </iframe>
</div>

#### T30 4-piece:

<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkgmASLJpFASSCBC?width=530&level=70" frameborder="0" width="530px" height="100%">
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

#### T29/T30 2-piece:
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpUSCAJlkUoEUSSSEAAAAAgSAJlkgmASLJpFASSCBC?width=530&level=70" frameborder="0" width="530px" height="100%">
  </iframe>
</div>

#### T30 4-piece:
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJUSSLRDRJQiEAAAAAgSAJlkgmASLJpFASSCBC?width=530&level=70" frameborder="0" width="530px" height="100%">
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

#### T29/T30 2-piece:
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSpUSCAJlkUoEUSSSEAAAAAgSASJJoJQSLJpFQhkkAI?width=530&level=70" frameborder="0" width="530px" height="100%">
  </iframe>
</div>

#### T30 4-piece:
<div class="iframe-holder">
  <iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoVSSLJSRSLRDRJQiEAAAAAgSASJJoJQSLJpFQhkkAI?width=530&level=70" frameborder="0" width="530px" height="100%">
  </iframe>
</div>

<hr>

## Fight Breakdown

#### Damage:
• Focus down {{ site.data.raid.aberrus.erratic_remnant }} whenever they are active to prevent damage from {{ site.data.raid.aberrus.erratic_burst }}.
• Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with {{ site.data.raid.aberrus.massive_slam }}, {{ site.data.raid.aberrus.rending_charge }} and {{ site.data.raid.aberrus.deep_breath }}.

#### Defensives:
• Use {{ site.data.talent.as }} and {{ site.data.talent.stoneskin_totem }} or healing consumables when targeted by {{ site.data.raid.aberrus.rending_charge }}.
• If talented, use {{ site.data.talent.healing_stream_totem }} as a movement filler throughout the fight.
• Use {{ site.data.spell.healing_surge }} if necessary.

#### Utilities:
• Use {{ site.data.talent.wrt }} to help players dodging {{ site.data.raid.aberrus.massive_slam }} in Phase 1, {{ site.data.raid.aberrus.unstable_essence }} upon removal in Phase 2 and {{ site.data.raid.aberrus.deep_breath }} in Phase 3.

Optional Notes:
• Having access to both {{ site.data.talent.go_with_the_flow }} and {{ site.data.externals.blessing_of_the_bronze }} provides the option of having {{ site.data.talent.gow }} ready for every single {{ site.data.raid.aberrus.massive_slam }}.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="assault_of_the_zaqali">
<div data-toggle="collapse" data-target="#assault_of_the_zaqali-collapse" aria-expanded="true" aria-controls="assault_of_the_zaqali-collapse" class="raid-header aberrus_the_shadowed_crucible4"><h2>Assault of the Zaqali</h2></div>
</div>
<div id="assault_of_the_zaqali-collapse" class="collapse" aria-labelledby="assault_of_the_zaqali" data-parent="#accordion">
<div class="card-body" markdown="1">

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="rashok">
<div data-toggle="collapse" data-target="#rashok-collapse" aria-expanded="true" aria-controls="rashok-collapse" class="raid-header aberrus_the_shadowed_crucible5"><h2>Rashok, the Elder</h2></div>
</div>
<div id="rashok-collapse" class="collapse" aria-labelledby="rashok" data-parent="#accordion">
<div class="card-body" markdown="1">

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="zskarn">
<div data-toggle="collapse" data-target="#zskarn-collapse" aria-expanded="true" aria-controls="zskarn-collapse" class="raid-header aberrus_the_shadowed_crucible6"><h2>The Vigilant Steward, Zskarn</h2></div>
</div>
<div id="zskarn-collapse" class="collapse" aria-labelledby="zskarn" data-parent="#accordion">
<div class="card-body" markdown="1">

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="magmorax">
<div data-toggle="collapse" data-target="#magmorax-collapse" aria-expanded="true" aria-controls="magmorax-collapse" class="raid-header aberrus_the_shadowed_crucible7"><h2>Magmorax</h2></div>
</div>
<div id="magmorax-collapse" class="collapse" aria-labelledby="magmorax" data-parent="#accordion">
<div class="card-body" markdown="1">


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

* [Wowhead Elemental Shaman Mythic+ Guide](https://www.wowhead.com/guide/classes/shaman/elemental/aberrus-the-shadowed-crucible-raid-tips) by HawkCorrigan
* [Icy-Veins Elemental Shaman Mythic+ Tips](https://www.icy-veins.com/wow/elemental-shaman-pve-dps-aberrus-the-shadowed-crucible-raid-guide) by Stormy
- [Warcraft Logs](https://www.warcraftlogs.com/)
- [Aberrus, The Shadowed Crucible Loot Overview](https://www.wowhead.com/guide/raids/aberrus-the-shadowed-crucible/overview#loot)
