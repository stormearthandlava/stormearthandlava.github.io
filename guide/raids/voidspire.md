---
layout: page
title: "The Voidspire"
last_update: 12/03/2026
game_version: 12.0.1 Midnight
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

The tips and recommendations listed here are based on educated opinions from PTR raid testing and reviewing logs and videos, so strategies can change as we develop a better understanding of each fight or as the spec and bosses are tuned. If you have any disagreements, feedback, or questions, please feel welcome to reach out to the team.

<hr>

# Miscellaneous Tips
- GCDs spent on healing and utilities are GCDs not spent on damage, but both are necessary to down a raid boss. Find the balance to optimize your contributions to your raid team.

- Maintain {{ site.data.spell.earth_shield }} on one ally if both {{ site.data.spell.elemental_orbit }} and {{ site.data.spell.therazanes_resilience }} are talented.

- Time spent in {{ site.data.spell.ghost_wolf }} is time spent not doing damage. Practice proactive movement and utilize {{ site.data.spell.spiritwalkers_grace }}, {{ site.data.spell.gust_of_wind }} and instant casts as much as you can for movement heavy encounters.

- Planning and using {{ site.data.spell.ee }} on a particular phase can alleviate difficult parts of a fight by increasing your maximum health by an additional 15% if {{ site.data.spell.primordial_bond }} is talented.

- Volunteering for interrupt assignments can be especially beneficial considering {{ site.data.spell.windveil }} provides a noticeable amount of damage reduction while {{ site.data.spell.inundate }} grants additional resources.

- Remember to buy {{ site.data.externals.gateway_control_shard }}. It will allow you to use {{ site.data.externals.demonic_gateway }} easily.

<hr>

# Bosses

<p style="color:red" align="center">Click on a boss banner to expand it.</p>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="imperator_averzian">
<div data-toggle="collapse" data-target="#imperator_averzian-collapse" aria-expanded="true" aria-controls="imperator_averzian-collapse" class="raid-header voidspire1"><h2 style="margin-top: 30px;">Imperator Averzian</h2></div>
</div>
<div id="imperator_averzian-collapse" class="collapse" aria-labelledby="imperator_averzian" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / AoE

### Talents

#### Stormbringer:

<div class="iframe-holder">
<iframe src="https://raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbbzMzMzMLbbDMmZAAAAAgNzYYDWgZ0QjNAY2mZmxMbLmwMMWmZmZMsYZGLmZYmFAwMMwMDMMMA?width=575&hideHeader=1" frameborder="0" width="575px" height="100%" style="margin-left: 30px;">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Focus down adds while they are present but especially {{ site.data.raid.voidspire.abyssal_voidshaper }} and {{ site.data.raid.voidspire.abyssal_malus }}.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime during {{ site.data.raid.voidspire.void_fall }}.

#### Defensives:
* Use {{ site.data.spell.as }} for {{ site.data.raid.voidspire.lingering_darkness }} due to potential overlaps with {{ site.data.raid.voidspire.umbral_collapse }}.
* Use {{ site.data.spell.healing_surge }} as needed and utilize {{ site.data.spell.hst }} as a movement filler.

#### Utilities:
* Use {{ site.data.spell.wrt }} during {{ site.data.raid.voidspire.void_fall }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.raid.voidspire.pitch_bulwark }} from {{ site.data.raid.voidspire.voidbound_annihilator }}, {{ site.data.raid.voidspire.shadowguard_stalwart }} or {{ site.data.raid.voidspire.abyssal_malus }} and {{ site.data.raid.voidspire.black_miasma }} from {{ site.data.raid.voidspire.abyssal_malus }}.
* Use {{ site.data.spell.cleanse_spirit }} for {{ site.data.raid.voidspire.black_miasma }} from {{ site.data.raid.voidspire.abyssal_malus }} if needed.

#### Additional Notes:
* If available, use {{ site.data.externals.demonic_gateway }} to simplify repositioning when soaking {{ site.data.raid.voidspire.umbral_collapse }} on top of {{ site.data.raid.voidspire.abyssal_voidshaper }}.

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="vorasius">
<div data-toggle="collapse" data-target="#vorasius-collapse" aria-expanded="true" aria-controls="vorasius-collapse" class="raid-header voidspire2"><h2 style="margin-top: 30px;">Vorasius</h2></div>
</div>
<div id="vorasius-collapse" class="collapse" aria-labelledby="vorasius" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / Cleave

### Talents

#### Stormbringer:

<div class="iframe-holder">
<iframe src="https://raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbbzMzMzMLbbDMmZAAAAAgNzYYDWgZ0QjNAY2mZmxMbLzEzMWYbmxMGMLDLmZYmFAwMMwMDMMMA?width=575&hideHeader=1" frameborder="0" width="575px" height="100%" style="margin-left: 30px;">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Focus down {{ site.data.raid.voidspire.blistercreep }} carefully to prevent overlaps of {{ site.data.raid.voidspire.blisterburst }}.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime while dodging {{ site.data.raid.voidspire.aftershock }}.

#### Defensives:
* Use {{ site.data.spell.as }} for {{ site.data.raid.voidspire.parasite_expulsion }}.
* Use {{ site.data.spell.healing_surge }} as needed and utilize {{ site.data.spell.hst }} as a movement filler.

#### Utilities:
* Use {{ site.data.spell.wrt }} to help players dodging {{ site.data.raid.voidspire.aftershock }}.
* Use {{ site.data.spell.earthbind_totem }} and {{ site.data.spell.capacitor_totem }} to help players kiting {{ site.data.raid.voidspire.blistercreep }}.

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="salhadaar">
<div data-toggle="collapse" data-target="#salhadaar-collapse" aria-expanded="true" aria-controls="salhadaar-collapse" class="raid-header voidspire3"><h2 style="margin-top: 30px;">Fallen-King Salhadaar</h2></div>
</div>
<div id="salhadaar-collapse" class="collapse" aria-labelledby="salhadaar" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Single Target / Cleave

### Talents

#### Stormbringer:

<div class="iframe-holder">
<iframe src="https://raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbbzMzMzMLbbDMmZAAAAAgNzYYDWgZ0QjNAY2mZmxMbLzEzMw2MzMjBzyMWMzwMLAADDMzADDD?width=575&hideHeader=1" frameborder="0" width="575px" height="100%" style="margin-left: 30px;">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Focus down {{ site.data.raid.voidspire.concentrated_void }} and {{ site.data.raid.voidspire.enduring_void }} [Mythic-only] while they are targetable.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime during {{ site.data.raid.voidspire.entropic_unraveling }} or when targeted by {{ site.data.raid.voidspire.despotic_command }}.

#### Defensives:
* Use {{ site.data.spell.as }} for {{ site.data.raid.voidspire.entropic_unraveling }}.
* Use {{ site.data.spell.healing_surge }} as needed and utilize {{ site.data.spell.hst }} as a movement filler.

#### Utilities:
* Use {{ site.data.spell.wrt }} for {{ site.data.raid.voidspire.entropic_unraveling }}.
* Use {{ site.data.spell.wind_shear }}, {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.thunderstorm }} to interrupt {{ site.data.raid.voidspire.shadow_fracture }} from {{ site.data.raid.voidspire.fractured_image }} after {{ site.data.raid.voidspire.nexus_shield }} [Mythic-only] has been removed.

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="vaelgor_ezzorak">
<div data-toggle="collapse" data-target="#vaelgor_ezzorak-collapse" aria-expanded="true" aria-controls="vaelgor_ezzorak-collapse" class="raid-header voidspire4"><h2 style="margin-top: 30px;">Vaelgor & Ezzorak</h2></div>
</div>
<div id="vaelgor_ezzorak-collapse" class="collapse" aria-labelledby="vaelgor_ezzorak" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Cleave / AoE

### Talents

#### Stormbringer:

<div class="iframe-holder">
<iframe src="https://raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbbzMzMzMLbbDMmZAAAAAgNzYYDWgZ0QjNAY2mZmxMbLz0iZGYZmZmxALzYxMDzsAAMMwMDMMMA?width=575&hideHeader=1" frameborder="0" width="575px" height="100%" style="margin-left: 30px;">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Make sure to have {{ site.data.spell.sk }} ready when {{ site.data.raid.voidspire.voidorb }} are about to spawn and focus down {{ site.data.raid.voidspire.manifestation_of_midnight }} while they are present.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime while dealing with {{ site.data.raid.voidspire.nullzone }}.

#### Defensives:
* Use {{ site.data.spell.as }} while soaking {{ site.data.raid.voidspire.nullbeam }}.
* Use {{ site.data.spell.healing_surge }} as needed and utilize {{ site.data.spell.hst }} as a movement filler.

#### Utilities:
* Use {{ site.data.spell.wrt }} to help players dealing with {{ site.data.raid.voidspire.nullzone }} while dodging {{ site.data.raid.voidspire.nullscatter }}.
* Use {{ site.data.spell.wind_shear }}, {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.thunderstorm }} to interrupt {{ site.data.raid.voidspire.voidbolt }} from {{ site.data.raid.voidspire.voidorb }}.
* Use {{ site.data.spell.tremor_totem }} to remove {{ site.data.raid.voidspire.dread_breath }} [Mythic-only].

</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="lightblinded_vanguard">
<div data-toggle="collapse" data-target="#lightblinded_vanguard-collapse" aria-expanded="true" aria-controls="lightblinded_vanguard-collapse" class="raid-header voidspire5"><h2 style="margin-top: 30px;">Lightblinded Vanguard</h2></div>
</div>
<div id="lightblinded_vanguard-collapse" class="collapse" aria-labelledby="lightblinded_vanguard" data-parent="#accordion">
<div class="card-body" markdown="1">

## Boss Fight Profile: Cleave

### Talents

#### Stormbringer:

<div class="iframe-holder">
<iframe src="https://raidbots.com/simbot/render/talents/CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbbzMzMzMLbbDMmZAAAAAgNzYYDWgZ0QjNAw2MzMmZbZmYmxCLzMzMGMLDLmZYmFAwMMwMDMMMA?width=575&hideHeader=1" frameborder="0" width="575px" height="100%" style="margin-left: 30px;">
</iframe>
</div>

<hr>

## Fight Breakdown:

#### Damage:
* Focus {{ site.data.raid.voidspire.commander_venel_lightblood }} while {{ site.data.raid.voidspire.avenging_wrath }} is active.
* Use {{ site.data.spell.swg }} and {{ site.data.spell.gow }} to maintain uptime while repositioning for {{ site.data.raid.voidspire.execution_sentence }} and dodging {{ site.data.raid.voidspire.divine_hammer }}.

#### Defensives:
* Use {{ site.data.spell.as }} when soaking {{ site.data.raid.voidspire.execution_sentence }} especially during overlaps with {{ site.data.raid.voidspire.tyrs_wrath }}.
* Use {{ site.data.spell.healing_surge }} as needed and utilize {{ site.data.spell.hst }} as a movement filler.

#### Utilities:
* Use {{ site.data.spell.wrt }} to help players reposition to soak {{ site.data.raid.voidspire.execution_sentence }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.raid.voidspire.blinding_light }} from {{ site.data.raid.voidspire.war_chaplain_senn }} after {{ site.data.raid.voidspire.sacred_shield }} has been removed.


</div>
</div>
</div>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="crown_of_the_cosmos">
<div data-toggle="collapse" data-target="#crown_of_the_cosmos-collapse" aria-expanded="true" aria-controls="crown_of_the_cosmos-collapse" class="raid-header voidspire6"><h2 style="margin-top: 30px;">Crown of the Cosmos</h2></div>
</div>
<div id="crown_of_the_cosmos-collapse" class="collapse" aria-labelledby="crown_of_the_cosmos" data-parent="#accordion">
<div class="card-body" markdown="1">

## Soon™

</div>
</div>
</div>
