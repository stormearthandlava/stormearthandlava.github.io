---
layout: page
title: "Castle Nathria Guide"
last_update: 2020-11-17 00:00:00
game_version: 9.0.2 Shadowlands
author: Altenna
toc: false
---
# Introduction
This guide was made possible by:

- Altenna (Discord: JudgeJames#0001 \| [Twitch](https://www.twitch.tv/judgejames) \| [Twitter](https://twitter.com/_judgejames_))
- Amani (Discord: Amani#0001 \| [Discord Server](https://discordapp.com/invite/zTQhBn8) \| [YouTube](https://www.youtube.com/channel/UC5IikzgR1TeED-DxPLqISHg))
- Cayna (Discord: cayna#0103 \| [Twitch](https://www.twitch.tv/cayna))
- HawkCorrigan (Discord: HawkCorrigan#1811)
- Sheffy (Discord: Sheffy#4928 \| [Twitch](https://www.twitch.tv/sheffywow) \| [Twitter](https://twitter.com/SheffyWoW))

Information on this page is written with the assumption that you understand the new priority list, talents, and legendary items introduced in Shadowlands. If you have not done so, we highly recommend reading our other resources to learn about them!

The tips and recommendations listed here are based on educated opinions from beta testing as well as reviewing logs and videos, so strategies can change as we develop a better understanding of each fight or as the spec and bosses are tuned. If you have any disagreements, feedback, or questions, please feel welcome to reach out to the team.

# Miscellaneous Tips
- GCDs spent on healing and utilities are GCDs not spent on damage, but both are necessary to down a raid boss. Find the balance to optimize your contributions to your raid team.

- Time spent in {{ site.data.spell.ghost_wolf }} is time spent not doing damage. Practice proactive movement and utilizing {{ site.data.spell.spiritwalkers_grace }} and instant casts as much as you can for movement heavy encounters.

- When talenting {{ site.data.talent.pe }}, always remember you have an additional defensive ({{ site.data.spell.harden_skin}}) and single target stun ({{ site.data.spell.pulverize }}) through {{ site.data.spell.earth_elemental }}.

- Recall that [Stampeding Roar](https://www.wowhead.com/spell=106898/stampeding-roar) is now a baseline Druid ability. Depending on your raid comp, it may not be necessary to talent {{ site.data.talent.wind_rush_totem }}.

- As kill times become faster on farm, {{ site.data.legendary.reminder }} may be a competitive legendary to use for some bosses.

# Bosses
<p style="color:red">Click on a boss banner to expand it.</p>

<hr>
<div class="dungeon-accordion">
  <div id="accordion">
    <div class="card">
        <div class="card-header" id="shriekwing">
            <div data-toggle="collapse" data-target="#shriekwing-collapse" aria-expanded="true" aria-controls="shriekwing-collapse" class="raid-header castle_nathria"><h2>Shriekwing</h2></div>
        </div>
        <div id="shriekwing-collapse" class="collapse" aria-labelledby="shriekwing" data-parent="#accordion">
          <div class="card-body" markdown="1">   

**Boss Fight Profile:** Single-Target

**Talents:**
* **15**: {{site.data.talent.echo_of_the_elements}}
* **25**: {{ site.data.talent.echoing_shock }} or {{ site.data.talent.elemental_blast }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.icefury }}
* **50**: {{ site.data.talent.stormkeeper }}

**Potential Legendaries:**
- {{ site.data.legendary.windspeaker }}
- {{ site.data.legendary.eeq }}

**Damage:**
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts if targeted with {{ site.data.nathria.echolocation }}.
- If possible, pool Maelstrom on Shriekwing during Phase 2, but do not be reckless for it.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} for {{ site.data.nathria.earsplitting_shriek }} and {{ site.data.nathria.reverberating_scream }} as needed.
- {{ site.data.talent.spirit_wolf }} can help your survivability during intermission. {{ site.data.talent.earth_shield }} can offer HPS against the constant damage from {{ site.data.nathria.reverberating_scream }}.

**Healing:**
- Phase 2 is a great opportunity to support your raid with off-healing through {{ site.data.spell.healing_stream_totem }}, {{site.data.spell.chain_heal }}, and {{ site.data.spell.healing_surge }} as needed.

**Utilities:**
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members with {{ site.data.nathria.echolocation }}, {{ site.data.nathria.echoing_screech }}, or throughout Phase 2.

**Notes:**
- The damage patterns for this fight are either small trickles or very lethal. As such, {{ site.data.talent.natures_guardian }} may not prove useful, and {{ site.data.talent.wind_rush_totem }} will offer better survivability for you and your raid.
- Because {{ site.data.nathria.sonar_shriek }} is a Horrify and not a Fear, you cannot use {{ site.data.spell.tremor_totem }} to dispel players.
        
</div>
</div>
</div>

<div class="card">
<div class="card-header" id="altimor">
<div data-toggle="collapse" data-target="#altimor-collapse" aria-expanded="true" aria-controls="altimor-collapse" class="raid-header castle_nathria"><h2>Huntsman Altimor</h2></div>
</div>
<div id="altimor-collapse" class="collapse" aria-labelledby="altimor" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** Cleave / Spread Cleave

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.aftershock }} or {{ site.data.talent.echoing_shock }}
* **30**: {{ site.data.talent.spirit_wolf }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}

**Potential Legendaries:**
- {{ site.data.legendary.skybreaker }}
- {{ site.data.legendary.eogs }}

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on the boss and the active pet.
- Use {{ site.data.spell.earthquake }} when the boss and active pet are stacked together.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts for {{ site.data.nathria.vicious_lunge }} and {{ site.data.nathria.petrifying_howl }}, as well as for {{ site.data.nathria.sinseeker }} and {{ site.data.nathria.shatter_shot }} on Mythic difficulty.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} and {{ site.data.spell.harden_skin }} (if {{ site.data.talent.pe }} talented) for {{ site.data.nathria.vicious_lunge }} and {{ site.data.nathria.shattering_stone }} as needed.
- If talented, {{ site.data.talent.spirit_wolf }} can help your survivability against {{ site.data.nathria.sinseeker }} as needed as well as navigating {{ site.data.nathria.petrifying_howl }}.

**Healing:**
- On Mythic difficulty, utilize your healing abilities as needed to keep yourself and nearby members healthy for the impending {{ site.data.nathria.pierce_soul }} adds when soaking {{ site.data.nathria.sinseeker }} during {{ site.data.nathria.bargast }}.

**Utilities:**
- Use {{ site.data.spell.hex}} on {{ site.data.nathria.shades_of_bargast }} as assigned.

**Notes:**
- From beta testing, {{ site.data.nathria.shades_of_bargast }} gained additional {{ site.data.nathria.destabilize }} stacks for each unique crowd control effect on them. If intended, then use {{ site.data.spell.capacitor_totem}} on them as well.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="salvation">
<div data-toggle="collapse" data-target="#salvation-collapse" aria-expanded="true" aria-controls="salvation-collapse" class="raid-header castle_nathria"><h2>Sun King's Salvation</h2></div>
</div>
<div id="salvation-collapse" class="collapse" aria-labelledby="salvation" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** AoE / Cleave

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.aftershock }} or {{ site.data.talent.echoing_shock }}
* **30**: {{ site.data.talent.spirit_wolf }}
* **35**: {{ site.data.talent.master_of_the_elements }} or {{ site.data.talent.storm_elemental }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}

**Potential Legendaries:**
- {{ site.data.legendary.skybreaker }}
- {{ site.data.legendary.eogs }}

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on priority targets.
- Use {{ site.data.spell.earthquake }} when 2+ targets are together. Use {{ site.data.spell.chain_lightning }} when 3+ targets are together.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts for {{ site.data.nathria.ember_blast }}.
- If talented, hold {{ site.data.talent.storm_elemental }}'s {{ site.data.spell.eye_of_the_storm }} for incoming add waves.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} and {{ site.data.spell.harden_skin}} (if {{ site.data.talent.primal_elementalist }} talented) for {{ site.data.nathria.crimson_flurry }} (from {{ site.data.nathria.bleakwing_assassin }}) and {{ site.data.nathria.ember_blast }} (from {{site.data.nathria.shade_of_kaelthas}}) as needed.
- If talented, {{ site.data.talent.spirit_wolf}} allows you to mitigate damage from {{ site.data.nathria.soul_pedestal }}.

**Healing:**
- If there is any downtime between add phases, support your raid with off-healing through {{ site.data.spell.healing_stream_totem }}, {{site.data.spell.chain_heal }}, and {{ site.data.spell.healing_surge }}.
- If talented, you can use {{ site.data.talent.earth_shield}} on {{ site.data.nathria.kaelthas_sunstrider }} for additional healing.
- On Mythic difficulty, support healing through {{ site.data.nathria.cloak_of_flames }} with {{ site.data.spell.healing_surge }} as needed.

**Utilities:**
- Interrupt {{ site.data.nathria.vulgar_brand }} and {{ site.data.nathria.scornful_blast }} from {{ site.data.nathria.vile_occultist }} as assigned.
- Use {{ site.data.spell.earthbind_totem }} and {{ site.data.spell.thunderstorm }} on {{ site.data.nathria.reborn_phoenix }} as needed.
- Use {{ site.data.spell.earthbind_totem }} and {{ site.data.spell.capacitor_totem}} on {{ site.data.nathria.soul_infuser }} as needed.
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help kite away from {{ site.data.nathria.reborn_phoenix }}.

**Notes:**
- This encounter has various phases of priority and AoE damage, with priority damage even moreso on Mythic difficulty. Determine how you need to prioritize your damage to serve your raid team.
- If using Primal Earth Elemental for {{ site.data.spell.harden_skin}}, make sure it is not picking up adds and interfering with your tanks.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="artificer">
<div data-toggle="collapse" data-target="#artificer-collapse" aria-expanded="true" aria-controls="artificer-collapse" class="raid-header castle_nathria"><h2>Artificer Xy'mox</h2></div>
</div>
<div id="artificer-collapse" class="collapse" aria-labelledby="artificer" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** Single-Target / Spread Cleave

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.echoing_shock }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.icefury }}
* **50**: {{ site.data.talent.stormkeeper }}

**Potential Legendaries:**
- {{ site.data.legendary.windspeaker }}
- {{ site.data.legendary.eeq }}

**Damage:**
- This is a very movement heavy fight, so be proactive with your instant casts and use {{ site.data.spell.spiritwalkers_grace }} liberally.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.glyph_of_destruction }} and {{ site.data.nathria.seed_of_extinction }}.
- {{ site.data.talent.spirit_wolf}} allows you to better navigate the mechanics from each relic. {{ site.data.talent.earth_shield}} can offer HPS against constant damage (i.e. {{ site.data.nathria.hyperlight_spark }}, {{ site.data.nathria.glyph_of_destruction }}, {{ site.data.nathria.withering_touch }}, and {{ site.data.nathria.aura_of_dread }}).

**Utilities:**
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members place {{ site.data.nathria.dimensional_tear }}, move {{ site.data.nathria.seed_of_extinction }}, and avoid {{ site.data.nathria.edge_of_annihilation }}.

**Notes:**
- Because the {{ site.data.nathria.possession }} from {{ site.data.nathria.fleeting_spirit }} is a mind control and not a Charm, you cannot use {{ site.data.spell.tremor_totem }} to dispel players.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="destroyer">
<div data-toggle="collapse" data-target="#destroyer-collapse" aria-expanded="true" aria-controls="destroyer-collapse" class="raid-header castle_nathria"><h2>Hungering Destroyer</h2></div>
</div>
<div id="destroyer-collapse" class="collapse" aria-labelledby="destroyer" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** Single-Target

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.echoing_shock }} or {{ site.data.talent.elemental_blast }}
* **30**: {{ site.data.talent.spirit_wolf }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.icefury }}
* **50**: {{ site.data.talent.stormkeeper }}

**Potential Legendaries:**
- {{ site.data.legendary.windspeaker }}
- {{ site.data.legendary.eeq }}

**Damage:**
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts when spreading for {{ site.data.nathria.volatile_ejection }} and running from {{ site.data.nathria.consume }}.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for any overlapping mechanics between {{ site.data.nathria.gluttonous_miasma }}, {{ site.data.nathria.expunge }}, and {{ site.data.nathria.desolate }}.
- If talented, {{ site.data.talent.spirit_wolf}} can be used to mitigate {{ site.data.nathria.consume }} when you are out of range of the boss, and the increased movement speed will improve your {{ site.data.nathria.expunge }} placements.

**Healing:**
- Make sure you are healthy before {{ site.data.nathria.expunge }} is cast. Support your raid members with off-healing if any are dangerously low.

**Utilities:**
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members position {{ site.data.nathria.volatile_ejection }} or run away from {{ site.data.nathria.consume }}.

**Notes:**
- Remember that when you are affected by {{ site.data.nathria.gluttonous_miasma }}, {{ site.data.talent.earth_shield}} and {{ site.data.talent.natures_guardian }} will not be useful if talented.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="darkvein">
<div data-toggle="collapse" data-target="#darkvein-collapse" aria-expanded="true" aria-controls="darkvein-collapse" class="raid-header castle_nathria"><h2>Lady Inerva Darkvein</h2></div>
</div>
<div id="darkvein-collapse" class="collapse" aria-labelledby="darkvein" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** Single-Target / AoE / Funnel

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.echoing_shock }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}

**Potential Legendaries:**
- {{ site.data.legendary.windspeaker }}
- {{ site.data.legendary.eogs }}

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on the boss and the {{ site.data.nathria.harnessed_specter }} add.
- Use {{ site.data.spell.earthquake }} when 2+ targets are together. Use {{ site.data.spell.chain_lightning }} when 3+ targets are together.
- Pool Maelstrom for incoming add spawns. If {{ site.data.legendary.eogs }} is equipped, hold a proc for an incoming add spawn as well.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed when targeted with {{ site.data.nathria.shared_suffering }}.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.change_of_heart }} and {{ site.data.nathria.bottled_anima }} vials.
- {{ site.data.talent.spirit_wolf}} can be used to mitigate damage from {{ site.data.nathria.loose_anima }} (if channeling) or to run out and soak far away {{ site.data.nathria.bottled_anima }} vials. {{ site.data.talent.earth_shield}} can offer you HPS because of the constant damage from {{ site.data.nathria.loose_anima }}.

**Utilities:**
- Interrupt {{ site.data.nathria.condemn }} as assigned.

**Notes:**
- Because Shaman have the lowest CD interrupt, two Shaman and a tank make an ideal interrupt rotation for a {{ site.data.nathria.conjured_manifestation }} add.
- If using Primal Earth Elemental for {{ site.data.spell.harden_skin}}, make sure it is not picking up adds and interfering with your tanks.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="council">
<div data-toggle="collapse" data-target="#council-collapse" aria-expanded="true" aria-controls="council-collapse" class="raid-header castle_nathria"><h2>Council Of Blood</h2></div>
</div>
<div id="council-collapse" class="collapse" aria-labelledby="council" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** Single-Target / Funnel

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.echoing_shock }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }} or {{ site.data.talent.ascendance }}

**Potential Legendaries:**
- {{ site.data.legendary.skybreaker }}
- {{ site.data.legendary.windspeaker }}

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on as many targets as possible.
- During the {{ site.data.nathria.danse_macabre }}, the bosses are still targetable even with 99% damage reduction. Continue maintaining {{ site.data.spell.flame_shock }}. If {{ site.data.legendary.skybreaker }} is equipped, this will especially be a major boon.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed for {{ site.data.nathria.anima_fountain }}, {{ site.data.nathria.waltz_of_blood }}, {{ site.data.nathria.dark_recital }}, and {{ site.data.nathria.dancing_fever }} (on Mythic difficulty).

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.dark_recital }} or as mechanics become overwhelming with increasing damage from {{ site.data.nathria.oppressive_atmosphere }}.
- {{ site.data.talent.spirit_wolf}} can help you move quickly or mitigate damage from {{ site.data.nathria.scarlet_letter }}, {{ site.data.nathria.unstoppable_charge }}, {{ site.data.nathria.castellans_cadre }}, and {{ site.data.nathria.dancing_fools }}. {{ site.data.talent.earth_shield}} can offer you HPS against the constant damage from {{ site.data.nathria.oppressive_atmosphere }} alone.

**Utilities:**
- Interrupt {{ site.data.nathria.bolt_of_power }} from {{ site.data.nathria.baroness_frieda }} as assigned.
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members position for {{ site.data.nathria.danse_macabre }}, {{ site.data.nathria.anima_fountain }}, {{ site.data.nathria.waltz_of_blood }}.

**Notes:**
- Because you will spend a lot of time in the encounter maintaining {{ site.data.spell.flame_shock }} on 2-3 targets for constant {{ site.data.spell.lava_surge }} procs, {{ site.data.talent.ascendance }} is worth considering. However, this can be dependent on fight timings.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="sludgefist">
<div data-toggle="collapse" data-target="#sludgefist-collapse" aria-expanded="true" aria-controls="sludgefist-collapse" class="raid-header castle_nathria"><h2>Sludgefist</h2></div>
</div>
<div id="sludgefist-collapse" class="collapse" aria-labelledby="sludgefist" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** Single-Target

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.echoing_shock }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.icefury }}
* **50**: {{ site.data.talent.stormkeeper }}

**Potential Legendaries:**
- {{ site.data.legendary.windspeaker }}
- {{ site.data.legendary.eeq }}

**Damage:**
- Pool Maelstrom shortly before {{ site.data.nathria.destructive_impact }}.
- {{ site.data.nathria.destructive_impact }} occurs nearly every minute. If {{ site.data.talent.stormkeeper }} is talented, it is a good idea to line up the cast with each {{ site.data.nathria.destructive_impact }}.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed for {{ site.data.nathria.destructive_stomp }}, {{ site.data.nathria.falling_rubble }}, {{ site.data.nathria.chain_slam }}, and {{ site.data.nathria.seismic_shift }} (on Mythic difficulty).

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.colossal_roar }} and {{ site.data.nathria.destructive_impact }}.
- Because you will take constant damage from {{ site.data.nathria.chain_link }} and {{ site.data.nathria.collapsing_foundation }}, {{ site.data.talent.earth_shield}} is a good talent option for HPS.

**Utilities:**
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members position out of {{ site.data.nathria.destructive_stomp }} or {{ site.data.nathria.falling_rubble }}.

**Notes:**
- Because of the {{ site.data.nathria.chain_link }} mechanic, be careful about your time spent in {{ site.data.spell.ghost_wolf }}, especially if you are paired with a player less mobile.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="generals">
<div data-toggle="collapse" data-target="#generals-collapse" aria-expanded="true" aria-controls="generals-collapse" class="raid-header castle_nathria"><h2>Stone Legion Generals</h2></div>
</div>
<div id="generals-collapse" class="collapse" aria-labelledby="ataldazar" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** AoE / Cleave

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{site.data.talent.aftershock}} or {{ site.data.talent.echoing_shock }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}

**Potential Legendaries:**
- {{ site.data.legendary.eogs }}
- {{ site.data.legendary.skybreaker }}

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on as many targets as possible.
- Use {{ site.data.spell.earthquake }} when 2+ targets are together. Use {{ site.data.spell.chain_lightning }} when 3+ targets are together.
- If {{ site.data.legendary.eogs }} is equipped, prepare a proc for incoming waves of adds.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed when targeted by {{ site.data.nathria.wicked_blade }}, {{ site.data.nathria.seismic_upheaval }}, and {{ site.data.nathria.reverberating_eruption }}.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} and {{ site.data.spell.harden_skin}} (if {{ site.data.talent.primal_elementalist }} talented) as needed for {{ site.data.nathria.pulverizing_meteor }} and {{ site.data.nathria.heart_hemorrhage }}.
- Because you may take constant damage from {{ site.data.nathria.wicked_laceration }} and {{ site.data.nathria.heart_rend }}, {{ site.data.talent.earth_shield}} is a good talent option for HPS.

**Utilities:**
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members running for {{ site.data.nathria.stonegale_effigy }} or {{ site.data.nathria.shattering_blast }}.

**Notes:**
- If using Primal Earth Elemental for {{ site.data.spell.harden_skin}}, make sure it is not picking up adds and interfering with your tanks.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="denathrius">
<div data-toggle="collapse" data-target="#denathrius-collapse" aria-expanded="true" aria-controls="denathrius-collapse" class="raid-header castle_nathria"><h2>Sire Denathrius</h2></div>
</div>
<div id="denathrius-collapse" class="collapse" aria-labelledby="denathrius" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** ST / Cleave / Spread Cleave

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.echoing_shock }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.icefury }} or {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}

**Potential Legendaries:**
- {{ site.data.legendary.skybreaker }}
- {{ site.data.legendary.eogs }}

**Damage:**

Phase 1:
- Pool Maelstrom for {{ site.data.nathria.echo_of_sin }} adds. If talented, hold {{ site.data.talent.stormkeeper }} for them as well.
- Use {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed when targeted by {{ site.data.nathria.feeding_time }} ({{ site.data.nathria.night_hunter }} on Heroic/Mythic).

Phase 2:
- Maintain {{ site.data.spell.flame_shock }} on {{ site.data.nathria.sire_denathrius }}, {{ site.data.nathria.remornia }}, and any additional adds as you can.
- Use {{ site.data.spell.earthquake }} when 2+ targets are together. Use {{ site.data.spell.chain_lightning }} when 3+ targets are together.
- Depending on timings, you may pool Maelstrom and hold CDs to optimize the {{ site.data.nathria.wracking_pain }} debuff on enemies.

Phase 3:
- Use {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed when targeted by {{ site.data.nathria.fatal_finesse }} and soaking {{ site.data.nathria.smoldering_ire }}.

**Defensives:**

Phase 1:
- Use {{ site.data.spell.astral_shift }} and {{ site.data.spell.harden_skin}} (if {{ site.data.talent.pe }} talented) as needed for {{ site.data.nathria.feeding_time }} ({{ site.data.nathria.night_hunter }} on Heroic/Mythic), {{ site.data.nathria.blood_price }}, or {{ site.data.nathria.cleansing_pain }}.

Phase 2:
- Use {{ site.data.spell.astral_shift }} and {{ site.data.spell.harden_skin}} (if {{ site.data.talent.pe }} talented) as needed for {{ site.data.nathria.impale }} or increasing {{ site.data.nathria.crimson_chorus }} stacks.

Phase 3:
- Use {{ site.data.spell.astral_shift }} and {{ site.data.spell.harden_skin}} (if {{ site.data.talent.pe }} talented) as needed for {{ site.data.nathria.fatal_finesse }} or {{ site.data.nathria.smoldering_ire }}.

<hr />
- This encounter is very movement demanding, so the additional movement from {{ site.data.talent.spirit_wolf}} can be beneficial in each phase. {{ site.data.nathria.burden_of_sin }}, {{ site.data.nathria.carnage }}, {{ site.data.nathria.crimson_chorus }}, and {{ site.data.nathria.fatal_finesse }} are all constant sources of damage that can allow HPS from {{ site.data.talent.earth_shield}}.

**Healing:**

Intermission:
- As you will likely make it ahead of your raid during {{ site.data.nathria.march_of_the_penitent }}, it is a good opportunity to briefly off-heal your fellow raid members after your {{ site.data.nathria.burden_of_sin }} stacks drop.

**Utilities:**

Phase 1:
- Use {{ site.data.talent.wind_rush_totem }} as needed to help your raid position out of {{ site.data.nathria.ravage }}.

Phase 2:
- Use {{ site.data.talent.wind_rush_totem }} as needed to help your raid avoid {{ site.data.nathria.massacre }} and {{ site.data.nathria.hand_of_destruction }}.

Phase 3:
- Use {{ site.data.talent.wind_rush_totem }} as needed to help your raid members navigate {{ site.data.nathria.shattering_pain }}, {{ site.data.nathria.hand_of_destruction }}, {{ site.data.nathria.ravage }}, and {{ site.data.nathria.massacre }}.

**Notes:**
- Because of {{ site.data.spell.ghost_wolf }}, you will not be slowed during {{ site.data.nathria.march_of_the_penitent }} in Phase 1, but you **must** be in {{ site.data.spell.ghost_wolf }} form before the phase begins. Consider not clearing any {{ site.data.nathria.burden_of_sin }} stacks during this phase.
- If using Primal Earth Elemental for {{ site.data.spell.harden_skin}}, make sure it is not picking up adds and interfering with your tanks.

</div>
</div>
</div>
</div>
</div>
