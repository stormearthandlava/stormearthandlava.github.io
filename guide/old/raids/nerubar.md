---
layout: page
title: "Nerub'ar Palace"
last_update: 10/09/2024
game_version: 11.0.0 The War Within
toc: true
big_article: true
---

# Introduction
This guide was made possible by:

- Amani (Discord: amanizandalari \| [Discord Server (RU)](https://discord.gg/vodovorot) \| [Twitch](https://www.twitch.tv/amanizandalari))
- Bloodmallet (Discord: bloodmallet \| [Website](https://bloodmallet.com/))
- Elivrio (Discord: elivrio, in-game: Tyrindra-Ysondre)
- Eokira (Discord: eokira)
- Gaka (Discord: gakamoment)
- HawkCorrigan (Discord: hawkcorrigan)
- Kaldeak (Discord: kaldeak)
- Sheffy (Discord: sheffy \| [Twitch](https://www.twitch.tv/sheffywow) \| [Twitter](https://twitter.com/SheffyWoW))

The tips and recommendations listed here are based on educated opinions from Beta raid testing and reviewing logs and videos, so strategies can change as we develop a better understanding of each fight or as the spec and bosses are tuned. If you have any disagreements, feedback, or questions, please feel welcome to reach out to the team.

<hr>

# Miscellaneous Tips
- Recommendations that include {{ site.data.spell.if }} are written with the assumption that you have access to {{ site.data.spell.frs }}, the same applies to {{ site.data.spell.lmt }}, {{ site.data.spell.totemic_recall }} and {{ site.data.spell.call_of_the_elements }}.

- GCDs spent on healing and utilities are GCDs not spent on damage, but both are necessary to down a raid boss. Find the balance to optimize your contributions to your raid team.

- Time spent in {{ site.data.spell.ghost_wolf }} is time spent not doing damage. Practice proactive movement and utilize {{ site.data.spell.spiritwalkers_grace }}, {{ site.data.spell.gust_of_wind }} and instant casts as much as you can for movement heavy encounters.

- Planning and using {{ site.data.spell.ee }} on a particular phase can alleviate the difficulty of whole parts of a fight. It will increase your maximum health by an additional 15 % and can give you {{ site.data.spell.primordial_bond }} for the whole duration. Be careful and remember that it could interfere with your Primal Fire/Storm Elemental usage when {{ site.data.spell.pe }} is talented.

- With the addition of {{ site.data.spell.seasoned_winds }} we now have a good reason to volunteer for interrupt assignments, as they can potentially offer you a noticeable reduction in damage income.

- Now that {{ site.data.spell.inundate }} has become baseline, keep in mind that not only successful interrupts are being rewarded with Maelstrom, but also {{ site.data.spell.hst }} is a decent alternative to make the best out of movement globals if you neither have {{ site.data.spell.lava_surge }} nor {{ site.data.spell.if }} available.

- Remember to buy {{ site.data.externals.gateway_control_shard }}. It will allow you to use {{ site.data.externals.demonic_gateway }} easily.

<hr>

# Bosses

<p style="color:red" align="center">Click on a boss banner to expand it.</p>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="ulgrax">
<div data-toggle="collapse" data-target="#ulgrax-collapse" aria-expanded="true" aria-controls="ulgrax-collapse" class="raid-header nerubar_palace1"><h2>Ul'grax the Devourer</h2></div>
</div>
<div id="ulgrax-collapse" class="collapse" aria-labelledby="ulgrax" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / AoE

### Talents

#### Farseer - Lightning:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAMbzy2MjZGmZjxYwMzAAAAAgNzsBDYAzCTIzCAY2mmZwstYmZaMjZmNsMDDGDzyYmZmZGmhB?width=630&level=80" frameborder="0" width="630px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Use {{ site.data.spell.pw }} and {{ site.data.spell.sk }} to focus down {{ site.data.raid.nerubar.ravenous_spawn }} and {{ site.data.raid.nerubar.bile_soaked_spawn }} [Mythic-only] whenever they are active.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime whilst soaking {{ site.data.raid.nerubar.carnivorous_contest }} and to dodge {{ site.data.raid.nerubar.juggernaut_charge }}.

#### Defensives:
* Use {{ site.data.spell.as }} or healing consumables during {{ site.data.raid.nerubar.hungering_bellows }} or when targeted by {{ site.data.raid.nerubar.digestive_acid }}.
* Use {{ site.data.spell.sbt }} and {{ site.data.spell.ag }} for {{ site.data.raid.nerubar.juggernaut_charge }}.
* Use {{ site.data.spell.healing_surge }} if necessary and keep up {{ site.data.spell.earth_shield }} as much as possible.

#### Utilities:
* Use {{ site.data.spell.wrt }} and potentially {{ site.data.externals.demonic_gateway }} to avoid {{ site.data.raid.nerubar.devour }} when soaking {{ site.data.raid.nerubar.carnivorous_contest }}.
* Use {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.earthbind_totem }} to control {{ site.data.raid.nerubar.ravenous_spawn }} as much as possible.

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="bloodbound_horror">
<div data-toggle="collapse" data-target="#bloodbound_horror-collapse" aria-expanded="true" aria-controls="bloodbound_horror-collapse" class="raid-header nerubar_palace2"><h2>The Bloodbound Horror</h2></div>
</div>
<div id="bloodbound_horror-collapse" class="collapse" aria-labelledby="bloodbound_horror" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / Cleave

### Talents

#### Farseer - Lightning:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAMbzy2MjZGmZjxYwMzAAAAAgNzsBDYAzCTIzCAY2mmZwstYmZaMjZGYZGzgxwsMmZmZMjZYA?width=630&level=80" frameborder="0" width="630px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Focus down {{ site.data.raid.nerubar.lost_watcher }}, {{ site.data.raid.nerubar.forgotten_harbinger }} and {{ site.data.raid.nerubar.blood_horror }} when affected by {{ site.data.raid.nerubar.the_unseeming }}.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime whilst dealing with {{ site.data.raid.nerubar.grasp_from_beyond }} and {{ site.data.raid.nerubar.spewing_hemorrhage }}.

#### Defensives:
* Use {{ site.data.spell.as }} or healing consumables for {{ site.data.raid.nerubar.goresplatter }} but especially during overlaps with other abilities like {{ site.data.raid.nerubar.crimson_rain }} or {{ site.data.raid.nerubar.bloodcurdle }} [Mythic-only].
* Use {{ site.data.spell.sbt }} and {{ site.data.spell.ag }} for {{ site.data.raid.nerubar.gruesome_disgorge }}.
* Use {{ site.data.spell.healing_surge }} if necessary and keep up {{ site.data.spell.earth_shield }} as much as possible.

#### Utilities:
* Use {{ site.data.spell.wrt }} and potentially {{ site.data.externals.demonic_gateway }} to dodge {{ site.data.raid.nerubar.goresplatter }} or {{ site.data.raid.nerubar.spewing_hemorrhage }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.raid.nerubar.black_bulwark }} from {{ site.data.raid.nerubar.lost_watcher }}.
* Use {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.earthbind_totem }} to control {{ site.data.raid.nerubar.blood_horror }} as much as possible.

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="sikran">
<div data-toggle="collapse" data-target="#sikran-collapse" aria-expanded="true" aria-controls="sikran-collapse" class="raid-header nerubar_palace3"><h2>Sikran, Captain of the Sureki</h2></div>
</div>
<div id="sikran-collapse" class="collapse" aria-labelledby="sikran" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target

### Talents

#### Farseer - Lightning:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAMbzy2MjZGmZjxYwMzAAAAAgNzsBDYAzCTIzCAw20MDmtFzMTjZMzshlZGDGDzyYmZmZGmhB?width=630&level=80" frameborder="0" width="630px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* There are no phases or add spawns that require you to plan your offensive cooldowns around.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime whilst repositioning yourself for {{ site.data.raid.nerubar.decimate }} or {{ site.data.raid.nerubar.phase_blades }}.

#### Defensives:
* Use {{ site.data.spell.as }} or healing consumables for {{ site.data.raid.nerubar.decimate }} especially when accumulating high stacks of {{ site.data.raid.nerubar.cosmic_shards }}.
* Use {{ site.data.spell.sbt }} when targeted by {{ site.data.raid.nerubar.phase_blades }} to not just mitigate the initial damage but also the damage-over-time effect of {{ site.data.raid.nerubar.phase_blades_dot }}.
* Use {{ site.data.spell.ag }} for {{ site.data.raid.nerubar.shattering_sweep}}.
* Use {{ site.data.spell.healing_surge }} if necessary and keep up {{ site.data.spell.earth_shield }} as much as possible.

#### Utilities:
* Use {{ site.data.spell.wrt }} to help players dodge {{ site.data.raid.nerubar.rain_of_arrows }}.

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="rashanan">
<div data-toggle="collapse" data-target="#rashanan-collapse" aria-expanded="true" aria-controls="rashanan-collapse" class="raid-header nerubar_palace4"><h2>Rasha'nan</h2></div>
</div>
<div id="rashanan-collapse" class="collapse" aria-labelledby="rashanan" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / AoE

### Talents

#### Farseer - Lightning:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAMbzy2MjZGmZjxYwMzAAAAAgNzsBDYAzCTIzCAY2mmZwstwMTjZMzshlZMDGDzyYmZmxMmhB?width=630&level=80" frameborder="0" width="630px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Focus down {{ site.data.raid.nerubar.infested_spawn_npc }} whenever they are active.
* Ensure to have {{ site.data.spell.lmt }}, {{ site.data.spell.pw }} and {{ site.data.spell.sk }} ready when {{ site.data.raid.nerubar.infested_spawn_npc }} are about to spawn.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime whilst dealing with {{ site.data.raid.nerubar.rolling_acid }}, {{ site.data.raid.nerubar.spinnerets_strands }} or {{ site.data.raid.nerubar.infested_spawn }}.

#### Defensives:
* Use {{ site.data.spell.as }} or healing consumables when targeted by {{ site.data.raid.nerubar.spinnerets_strands }} due to potential overlaps of {{ site.data.raid.nerubar.tacky_threads }}, {{ site.data.raid.nerubar.infested_spawn }} and {{ site.data.raid.nerubar.infested_bite }}.
* Use {{ site.data.spell.sbt }} when targeted by {{ site.data.raid.nerubar.infested_spawn }} to not just mitigate the initial damage but also the damage-over-time effect of {{ site.data.raid.nerubar.infested_bite }}.
* Use {{ site.data.spell.ag }} for {{ site.data.raid.nerubar.spinnerets_websnap }}.
* Use {{ site.data.spell.healing_surge }} if necessary and keep up {{ site.data.spell.earth_shield }} as much as possible.

#### Utilities:
* Use {{ site.data.spell.wrt }} to help players to follow {{ site.data.raid.nerubar.rashanan }} whenever she repositions herself. {{ site.data.spell.wrt }} will be ready for every "intermission" in builds that utilize {{ site.data.spell.fol }} or if you talent into {{ site.data.spell.ascending_air }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.raid.nerubar.acidic_eruption }} from {{ site.data.raid.nerubar.rashanan }}.
* Use {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.earthbind_totem }} to control {{ site.data.raid.nerubar.infested_spawn_npc }} as much as possible.

#### Additional Notes:
* You can use {{ site.data.externals.demonic_gateway }} for every single "intermission".

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="ovinax">
<div data-toggle="collapse" data-target="#ovinax-collapse" aria-expanded="true" aria-controls="ovinax-collapse" class="raid-header nerubar_palace5"><h2>Broodtwister Ovi'nax</h2></div>
</div>
<div id="ovinax-collapse" class="collapse" aria-labelledby="ovinax" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / AoE

### Talents

#### Farseer - Lightning:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAMbzy2MjZGmZjxYwMzAAAAAgNzsBDYAzCTIzCAY2mmZwstwMTjZMzshlZMDGDzyYmZmxMmhB?width=630&level=80" frameborder="0" width="630px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Focus down {{ site.data.raid.nerubar.blood_parasite }}, {{ site.data.raid.nerubar.voracious_worm }} and {{ site.data.raid.nerubar.colossal_spider }} whenever they are active.
* Ensure to have {{ site.data.spell.lmt }}, {{ site.data.spell.pw }} and {{ site.data.spell.sk }} ready when {{ site.data.raid.nerubar.blood_parasite }} are about to spawn.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime whilst repositioning for {{ site.data.raid.nerubar.experimental_dosage }}, spreading for {{ site.data.raid.nerubar.sticky_web }} or when targeted by {{ site.data.raid.nerubar.fixate }}.

#### Defensives:
* Use {{ site.data.spell.as }} when targeted by {{ site.data.raid.nerubar.experimental_dosage }}.
* Use {{ site.data.spell.sbt }} for {{ site.data.raid.nerubar.ingest_black_blood }}.
* Use {{ site.data.spell.ag }} or healing consumables for {{ site.data.raid.nerubar.experimental_dosage }}.
* Use {{ site.data.spell.healing_surge }} if necessary and keep up {{ site.data.spell.earth_shield }} as much as possible.

#### Utilities:
* Use {{ site.data.spell.wrt }} to help players targeted by {{ site.data.raid.nerubar.experimental_dosage }} to reposition or to remove the root from {{ site.data.raid.nerubar.web_eruption }} if you have {{ site.data.spell.jet_stream }} talented.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.raid.nerubar.poison_burst }} from {{ site.data.raid.nerubar.voracious_worm }}.
* Use {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.earthbind_totem }} to control {{ site.data.raid.nerubar.blood_parasite }} as much as possible.

#### Additional Notes:
* You can use {{ site.data.spell.ghost_wolf }} if you have {{ site.data.spell.thunderous_paws }} talented to free yourself from {{ site.data.raid.nerubar.sticky_web }} but make sure to not root others in the process!

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="kyveza">
<div data-toggle="collapse" data-target="#kyveza-collapse" aria-expanded="true" aria-controls="kyveza-collapse" class="raid-header nerubar_palace6"><h2>Nexus Princess Ky'veza</h2></div>
</div>
<div id="kyveza-collapse" class="collapse" aria-labelledby="kyveza" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target

### Talents

#### Farseer - Lightning:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAMbzy2MjZGmZjxYwMzAAAAAgNzsBDYAzCTIzCAw20MDmtFzMTjZMzshlZGDGDzyYmZmZGmhB?width=630&level=80" frameborder="0" width="630px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* There are no phases or add spawns that require you to plan your offensive cooldowns around.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime whilst dodging {{ site.data.raid.nerubar.eclipse }} or dealing with {{ site.data.raid.nerubar.nether_rift }} or {{ site.data.raid.nerubar.twilight_massacre }}.

#### Defensives:
* Use {{ site.data.spell.as }} right before {{ site.data.raid.nerubar.assassination }} expires to additionally mitigate every damage event from {{ site.data.raid.nerubar.queensbane }}.
* Use {{ site.data.spell.sbt }} during {{ site.data.raid.nerubar.nether_rift }}.
* Use {{ site.data.spell.ag }} while {{ site.data.raid.nerubar.death_cloak }} is active.
* Use healing consumables whenever you risk dropping below 10 % health and therefore die to {{ site.data.raid.nerubar.reaper }}.
* Use {{ site.data.spell.healing_surge }} if necessary and keep up {{ site.data.spell.earth_shield }} as much as possible.

#### Utilities:
* Use {{ site.data.spell.wrt }} to help players run away from {{ site.data.raid.nerubar.nether_rift }}.

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="silken_court">
<div data-toggle="collapse" data-target="#silken_court-collapse" aria-expanded="true" aria-controls="silken_court-collapse" class="raid-header nerubar_palace7"><h2>The Silken Court</h2></div>
</div>
<div id="silken_court-collapse" class="collapse" aria-labelledby="silken_court" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / Cleave

### Talents

#### Farseer - Fire:

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAMbzy2MjZGmZjxYwMzAAAAAgNzsBDYAzCTIzCAY2mmBmtFzMTjZMzsZsMDDGDzyYmZmxMmhB?width=630&level=80" frameborder="0" width="630px" height="100%">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Try to pool as much damage as possible for when {{ site.data.raid.nerubar.anubarash }} is affected by {{ site.data.raid.nerubar.entangled }}.
* Ensure to have {{ site.data.spell.lmt }}, {{ site.data.spell.pw }} and {{ site.data.spell.sk }} ready when {{ site.data.raid.nerubar.shattershell_scarab }} are about to spawn, but keep in mind that {{ site.data.raid.nerubar.harden_carapace }} will force you to delay most of that damage.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime whilst repositioning for {{ site.data.raid.nerubar.binding_webs }}, spreading for {{ site.data.raid.nerubar.venomous_rain }} or dodging {{ site.data.raid.nerubar.impaling_eruption }}.

#### Defensives:
* Use {{ site.data.spell.as }} for {{ site.data.raid.nerubar.burrowed_eruption }} as it will cover the entire duration of it but especially due to potential overlaps with {{ site.data.raid.nerubar.binding_webs }}, {{ site.data.raid.nerubar.venomous_rain }} and {{ site.data.raid.nerubar.void_degeneration }} [Mythic-only] or {{ site.data.raid.nerubar.burning_rage }} [Mythic-only].
* Use {{ site.data.spell.sbt }} for {{ site.data.raid.nerubar.venomous_rain }} since it will once again cover the entire duration of the debuff.
* Use {{ site.data.spell.ag }} and healing consumables as needed during crucial overlaps as described above.
* Use {{ site.data.spell.healing_surge }} if necessary and keep up {{ site.data.spell.earth_shield }} as much as possible.

#### Utilities:
* Use {{ site.data.spell.wrt }} to help players affected by {{ site.data.raid.nerubar.binding_webs }} or to soak {{ site.data.raid.nerubar.mote_of_overwrought_paranoia }} [Mythic-only] or {{ site.data.raid.nerubar.mote_of_unreleting_rage }} [Mythic-only].
* Use {{ site.data.spell.pct }} whenever tanks accumulate multiple stacks of {{ site.data.raid.nerubar.poison_bolt }}.
* Use {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.earthbind_totem }} to control {{ site.data.raid.nerubar.shattershell_scarab }} as much as possible.

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="ansurek">
<div data-toggle="collapse" data-target="#ansurek-collapse" aria-expanded="true" aria-controls="ansurek-collapse" class="raid-header nerubar_palace8"><h2>Queen Ansurek</h2></div>
</div>
<div id="ansurek-collapse" class="collapse" aria-labelledby="ansurek" data-parent="#accordion">
<div class="card-body" markdown="1">

## Soon™

</div>
</div>
</div>
