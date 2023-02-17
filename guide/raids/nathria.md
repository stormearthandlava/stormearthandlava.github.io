---
layout: page
title: "Castle Nathria Guide"
last_update: 2022-08-02
game_version: 9.2.5 Shadowlands
authors: Altenna, Eokira
toc: false
---
# Introduction
This guide was made possible by:

- Altenna (Discord: JudgeJames#0001 \| [Twitch](https://www.twitch.tv/judgejames) \| [Twitter](https://twitter.com/_judgejames_))
- Amani (Discord: Amani#0001 \| [Discord Server](https://discordapp.com/invite/zTQhBn8) \| [YouTube](https://www.youtube.com/channel/UC5IikzgR1TeED-DxPLqISHg))
- Cayna (Discord: cayna#0103 \| [Twitch](https://www.twitch.tv/cayna))
- HawkCorrigan (Discord: HawkCorrigan#1811)
- Sheffy (Discord: Sheffy#4928 \| [Twitch](https://www.twitch.tv/sheffywow) \| [Twitter](https://twitter.com/SheffyWoW))
- Eokira (Discord: Eokira#7823)

This guide has been updated to reflect [Season Four](https://stormearthandlava.com/guide/raids/season_4.html). This includes assuming you have an active {{ site.data.item.t28_4 }} bonus, for the bosses where it is most relevant we will include notes for those who do **not** have this bonus active.

If you have suggestions to improve the information in this guide please contact Eokira#7823 using the [Earthshrine Elemental channel](https://discord.gg/pGkPDzh7rP) or the [Storm, Earth & Lava discord](https://discord.gg/y5dUf3PWrU).

# Miscellaneous Tips
- GCDs spent on healing and utilities are GCDs not spent on damage, but both are necessary to down a raid boss. Find the balance to optimize your contributions to your raid team.

- Time spent in {{ site.data.spell.ghost_wolf }} is time spent not doing damage. Practice proactive movement and utilizing {{ site.data.spell.spiritwalkers_grace }} and instant casts as much as you can for movement heavy encounters.
- Any Single Target orientated fights where you choose to use {{ site.data.legendary.wlr }} please note that using {{ site.data.spell.eq }} on 2 or more targets is **still a net damage gain** despite ignoring your Legendary's effect. So if adds are present for short periods of time and you are not fully committed to single target then using {{ site.data.spell.eq }} for those short periods is preferred. 

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
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.elemental_blast }}
* **30**: {{ site.data.talent.spirit_wolf }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}            

**Recommended Covenant:**
- Night Fae with Dreamweaver
- Necrolord with Plague-Deviser Marileth

**Recommended Legendaries:**
- {{ site.data.legendary.windspeaker }}

**Damage:**
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts if targeted with {{ site.data.nathria.echolocation }}.
- If possible, pool Maelstrom on Shriekwing during Phase 2, but do not be reckless for it.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} for {{ site.data.nathria.reverberating_scream }} as needed.

**Healing:**
- Phase 2 is a great opportunity to support your raid with off-healing through {{ site.data.talent.healing_stream_totem }}, {{site.data.talent.chain_heal }}, and {{ site.data.spell.healing_surge }} as needed.

**Utilities:**
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members with {{ site.data.nathria.echolocation }}, {{ site.data.nathria.echoing_screech }}, or throughout Phase 2.

**Notes:**
- Because {{ site.data.nathria.earsplitting_shriek }} is a Horrify and not a Fear, you cannot use {{ site.data.talent.tremor_totem }} to dispel players.
        
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
* **25**: {{ site.data.talent.elemental_blast }} or {{ site.data.talent.afs }}
* **30**: {{ site.data.talent.spirit_wolf }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }} or {{ site.data.talent.asc }}
  
**Recommended Covenant**
- Necrolord with Plague-Deviser Marileth, if **not** using {{ site.data.legendary.eogs }} the value of {{ site.data.conduit.shake_the_foundations }} rises considerably.

**Recommended Legendaries:**
- {{ site.data.legendary.dre }} the setup of the fight synergises well with this Legendary's requirements to perform better than our other options on average. 
- {{ site.data.legendary.eogs }} a more consistent option if you dislike RNG.
- {{ site.data.legendary.wlr }} is still a viable choice although the other options will outperform it in overall value.
- {{ site.data.legendary.sfd }} if you have an active {{ site.data.item.t28_2 }} but **not** {{ site.data.item.t28_4 }}, the increase in {{ site.data.talent.fe }} uptime will be incredibly valuable for you. Similarly, consider using {{ site.data.talent.sop }} to further increase {{ site.data.talent.fe }} uptime.

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on the boss and the active pet.
- Use {{ site.data.spell.earthquake }} when the boss and active pet are stacked together (if not using {{ site.data.legendary.windspeaker }}).
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts for {{ site.data.nathria.sinseeker }}, {{ site.data.nathria.vicious_lunge }} and {{ site.data.nathria.petrifying_howl }}.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} for {{ site.data.nathria.vicious_lunge }} and {{ site.data.nathria.shattering_stone }} as needed.
- If talented, {{ site.data.talent.spirit_wolf }} can help your survivability against {{ site.data.nathria.sinseeker }} as needed as well as navigating {{ site.data.nathria.petrifying_howl }}.

**Healing:**
- On Mythic difficulty, utilize your healing abilities as needed to keep yourself and nearby members healthy for the impending {{ site.data.nathria.pierce_soul }} adds when soaking {{ site.data.nathria.sinseeker }} during {{ site.data.nathria.bargast }}.

**Utilities:**
- Use {{ site.data.talent.hex }} and {{ site.data.talent.capacitor_totem }} on {{ site.data.nathria.shades_of_bargast }} as assigned.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="salvation">
<div data-toggle="collapse" data-target="#salvation-collapse" aria-expanded="true" aria-controls="salvation-collapse" class="raid-header castle_nathria"><h2>Sun King's Salvation</h2></div>
</div>
<div id="salvation-collapse" class="collapse" aria-labelledby="salvation" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** Single-Target / AoE / Cleave

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.elemental_blast }} or {{ site.data.talent.afs }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }} or {{ site.data.talent.se }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}
  
**Recommended Covenants**
- Night Fae with Korayn for {{ site.data.soulbinds.first_strike }} for overall value.
- Necrolord with Plague-Deviser Marileth for {{ site.data.soulbinds.preemptive_strike }} for value on [Rockbound Vanquishers](https://www.wowhead.com/npc=165764/rockbound-vanquisher)

**Recommended Legendaries:**
- {{ site.data.legendary.eogs }} best paired with Night Fae for overall value.
- {{ site.data.legendary.wlr }} used with either Night Fae or Necrolord to focus on the single target portions of the fight like [Cloak of Flames](https://www.wowhead.com/spell=343026/cloak-of-flames) on Mythic difficulty.

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on priority targets.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed for {{ site.data.nathria.ember_blast }}.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} for {{ site.data.nathria.crimson_flurry }} (from {{ site.data.nathria.bleakwing_assassin }}) and {{ site.data.nathria.ember_blast }} (from {{site.data.nathria.shade_of_kaelthas}}) as needed.
- If talented, {{ site.data.talent.spirit_wolf}} allows you to mitigate damage from {{ site.data.nathria.soul_pedestal }}.

**Healing:**
- If there is any downtime between add phases, support your raid with off-healing through {{ site.data.talent.healing_stream_totem }}, {{site.data.talent.chain_heal }}, and {{ site.data.spell.healing_surge }}. You can heal {{ site.data.nathria.essence_font }} as well.
- If talented, you can use {{ site.data.talent.earth_shield}} on {{ site.data.nathria.kaelthas_sunstrider }} for additional healing.
- On Mythic difficulty, support healing through {{ site.data.nathria.cloak_of_flames }} with {{ site.data.spell.healing_surge }} as needed.

**Utilities:**
- Interrupt {{ site.data.nathria.vulgar_brand }} and {{ site.data.nathria.scornful_blast }} from {{ site.data.nathria.vile_occultist }} as assigned.
- Use {{ site.data.spell.earthbind_totem }} and {{ site.data.talent.thunderstorm }} on {{ site.data.nathria.reborn_phoenix }} as needed.
- Use {{ site.data.spell.earthbind_totem }} and {{ site.data.talent.capacitor_totem}} on {{ site.data.nathria.soul_infuser }} as needed.
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help kite away from {{ site.data.nathria.reborn_phoenix }}.

**Notes:**
- This encounter has various phases of priority and AoE damage, with priority damage even moreso on Mythic difficulty. Determine how you need to prioritize your damage to serve your raid team.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="artificer">
<div data-toggle="collapse" data-target="#artificer-collapse" aria-expanded="true" aria-controls="artificer-collapse" class="raid-header castle_nathria"><h2>Artificer Xy'mox</h2></div>
</div>
<div id="artificer-collapse" class="collapse" aria-labelledby="artificer" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**Boss Fight Profile:** Single-Target

**Talents:**
* **15**: {{ site.data.talent.echo_of_the_elements }}
* **25**: {{ site.data.talent.elemental_blast }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}
  
**Recommended Covenants**
- Night Fae with Dreamweaver (Note: some players may find Niya more forgiving as the fight contains a lot of movement)
- Necrolord with Plague-Deviser Marileth

**Recommended Legendaries:**
- {{ site.data.legendary.windspeaker }}

**Damage:**
- This is a very movement heavy fight, so be proactive with your instant casts and use {{ site.data.spell.spiritwalkers_grace }} liberally.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.withering_touch }}.
- {{ site.data.talent.spirit_wolf}} allows you to better navigate the mechanics from each relic. {{ site.data.talent.earth_shield}} can offer HPS against constant damage (i.e. {{ site.data.nathria.hyperlight_spark }}, {{ site.data.nathria.glyph_of_destruction }}, {{ site.data.nathria.withering_touch }}, and {{ site.data.nathria.aura_of_dread }}).

**Utilities:**
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members place {{ site.data.nathria.dimensional_tear }}, move {{ site.data.nathria.seed_of_extinction }}, and avoid {{ site.data.nathria.edge_of_annihilation }}.

**Notes:**
- Because the {{ site.data.nathria.possession }} from {{ site.data.nathria.fleeting_spirit }} is a mind control and not a Charm, you cannot use {{ site.data.talent.tremor_totem }} to dispel players.

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
* **25**: {{ site.data.talent.elemental_blast }}
* **30**: {{ site.data.talent.spirit_wolf }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}
  
**Recommended Covenants**
- Night Fae with Dreamweaver
- Necrolord with Plague-Deviser Marileth

**Recommended Legendaries:**
- {{ site.data.legendary.windspeaker }}

**Damage:**
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts for {{ site.data.nathria.volatile_ejection }}, {{ site.data.nathria.expunge }}, and {{ site.data.nathria.consume }}.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for any overlapping mechanics between {{ site.data.nathria.gluttonous_miasma }}, {{ site.data.nathria.expunge }}, and {{ site.data.nathria.desolate }}.
- If talented, {{ site.data.talent.spirit_wolf }} can be used to mitigate {{ site.data.nathria.consume }} when you are out of range of the boss, and the increased movement speed may improve your {{ site.data.nathria.expunge }} placements.

**Healing:**
- Make sure you are healthy before {{ site.data.nathria.expunge }} is cast. Support your raid members with off-healing if any are dangerously low.

**Utilities:**
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members position run away from {{ site.data.nathria.consume }}.

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
* **25**: {{ site.data.talent.elemental_blast }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}
  
**Recommended Covenants**
- Necrolord with Plague-Deviser Marileth, particularly if you choose to use {{ site.data.legendary.dre }}
- Night Fae with Dreamweaver 

**Potential Legendaries:**
- {{ site.data.legendary.windspeaker }}
- {{ site.data.legendary.eogs }}
- {{ site.data.legendary.dre }} (Note: this is less than ideal setup for this legendary to shine in comparison to our more reliable alternatives, but this may yield good results if you're lucky!)

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on the boss and the {{ site.data.nathria.harnessed_specter }} add.
- Pool Maelstrom for incoming add spawns. If {{ site.data.legendary.eogs }} is equipped, hold a proc for an incoming add spawn as well.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed when targeted with {{ site.data.nathria.shared_suffering }}.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.change_of_heart }} and {{ site.data.nathria.bottled_anima }} vials.
- {{ site.data.talent.spirit_wolf}} can be used to mitigate damage from {{ site.data.nathria.loose_anima }} (if channeling) or to run out and soak far away {{ site.data.nathria.bottled_anima }} vials. {{ site.data.talent.earth_shield}} can offer you HPS because of the constant damage from {{ site.data.nathria.loose_anima }}.

**Utilities:**
- Interrupt {{ site.data.nathria.condemn }} as assigned.

**Notes:**
- Because Shaman have the lowest CD interrupt, two Shaman and a tank make an ideal interrupt rotation for a {{ site.data.nathria.conjured_manifestation }} add.

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
* **25**: {{ site.data.talent.elemental_blast }} or {{ site.data.talent.afs }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }} or {{ site.data.talent.asc }}
  
**Recommended Covenants**
- Necrolord with Plague-Deviser Marileth

**Recommended Legendaries:**
- {{ site.data.legendary.dre}} (Note: with the high uptime of {{ site.data.spell.fs }} on multiple targets, using {{ site.data.talent.afs }} can be preferable to enable the most available GCDs for casting {{ site.data.spell.lvb }}).
- {{ site.data.legendary.windspeaker }}
- {{ site.data.legendary.sfd }} (Note: this should only be picked if you do not have an active {{ site.data.item.t28_4 }} bonus.

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on as many targets as possible, prioritizing: targeted boss > adds > other bosses.
- During the {{ site.data.nathria.danse_macabre }}, the bosses are still targetable even with 99% damage reduction. Continue maintaining {{ site.data.spell.flame_shock }}, this is more relevant if you find yourself needing to use {{ site.data.legendary.sfd }} whilst gearing.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed for {{ site.data.nathria.anima_fountain }}, {{ site.data.nathria.waltz_of_blood }}, {{ site.data.nathria.dark_recital }}, and {{ site.data.nathria.dancing_fever }} (on Mythic difficulty).

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.dark_recital }} or as mechanics become overwhelming with increasing damage from {{ site.data.nathria.oppressive_atmosphere }}.
- {{ site.data.talent.spirit_wolf}} can help you move quickly or mitigate damage from {{ site.data.nathria.scarlet_letter }}, {{ site.data.nathria.unstoppable_charge }}, {{ site.data.nathria.castellans_cadre }}, and {{ site.data.nathria.dancing_fools }}. {{ site.data.talent.earth_shield}} can offer you HPS against the constant damage from {{ site.data.nathria.oppressive_atmosphere }} alone.

**Utilities:**
- Interrupt {{ site.data.nathria.dreadbolt_volley }} from {{ site.data.nathria.baroness_frieda }} as assigned. The use of `Focus` or targeting macros can make this assignment easier to manage.
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members position for {{ site.data.nathria.danse_macabre }}, {{ site.data.nathria.anima_fountain }}, {{ site.data.nathria.waltz_of_blood }}.

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
* **25**: {{ site.data.talent.elemental_blast }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}
  
**Recommended Covenants**
- Necrolord with Plague-Deviser Marileth
- Night Fae with Dreamweaver or Niya
- Kyrian with Mikanikos (Note: The fight is designed around 1 minute windows of damage amplification, this is precisely what Kyrian provides via {{ site.data.spell.vesper_totem }} and [Mikanikos' Effusive Anima Accelerator trait](https://www.wowhead.com/spell=352188/effusive-anima-accelerator?spellModifier=137038) providing enough CDR to match comfortably.

**Potential Legendaries:**
- {{ site.data.legendary.windspeaker }}

**Damage:**
- Pool Maelstrom shortly before {{ site.data.nathria.destructive_impact }}.
- {{ site.data.nathria.destructive_impact }} occurs nearly every minute. If {{ site.data.talent.stormkeeper }} is talented, it is a good idea to line up the cast with each {{ site.data.nathria.destructive_impact }}. To aid with this, pre-cast {{ site.data.talent.sk }} earlier than usual in the opener sequence to ensure it can be pre-cast for the first {{ site.data.nathria.destructive_impact }}.
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
* **25**: {{ site.data.talent.elemental_blast }} or {{ site.data.talent.afs }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }} or {{ site.data.talent.asc }}
  
**Recommended Covenants**
- Night Fae with Korayn for {{ site.data.soulbinds.first_strike }} particularly if you choose to use {{ site.data.legendary.eogs }}
- Necrolord with Plague-Deviser Marileth particularly if you choose to use {{ site.data.legendary.dre }}

**Recommended Legendaries:**
- {{ site.data.legendary.dre }} (Note: this fight contains multiple sections of two-target cleave in Mythic difficulty which enables this Legendary to shine more than it otherwise would.
- {{ site.data.legendary.eogs }} (Note: this fight contains a fair amount of AoE where this Legendary can be utilised effectively.

**Damage:**
- Maintain {{ site.data.spell.flame_shock }} on as many targets as possible.
- If {{ site.data.legendary.eogs }} is equipped, prepare a proc for incoming waves of adds.
- Utilize {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed when targeted by {{ site.data.nathria.wicked_blade }}, {{ site.data.nathria.seismic_upheaval }}, and {{ site.data.nathria.reverberating_eruption }}.

**Defensives:**
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.heart_hemorrhage }} and {{ site.data.nathria.pulverizing_meteor }}.
- Because you may take constant damage from {{ site.data.nathria.wicked_laceration }} and {{ site.data.nathria.heart_rend }}, {{ site.data.talent.earth_shield}} is a good talent option for HPS.

**Utilities:**
- If talented, use {{ site.data.talent.wind_rush_totem }} as needed to help raid members running for {{ site.data.nathria.stonegale_effigy }} or {{ site.data.nathria.shattering_blast }}.

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
* **25**: {{ site.data.talent.elemental_blast }}
* **30**: {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35**: {{ site.data.talent.master_of_the_elements }}
* **40**: {{ site.data.talent.wind_rush_totem }}
* **45**: {{ site.data.talent.primal_elementalist }}
* **50**: {{ site.data.talent.stormkeeper }}

**Recommended Covenants**
- Necrolord with Plague-Deviser Marileth (Note: {{ site.data.spell.fleshcraft }} provides an additional defensive which may benefit players during progression here)
- Night Fae with Dreamweaver or Niya (Note: As Sire uses abilities that require movement management players may benefit from having access to {{ site.data.spell.soulshape }} ).
  
**Recommended Legendaries:**
- {{ site.data.legendary.windspeaker }}
- {{ site.data.legendary.dre }} (Note: this is mostly relevant in P2 of the encounter, where multiple targets are available to help funnel damage into the one most relevant at the time! In other phases due to the lack of sustained targets, it will fall behind on average).

**Damage:**

Phase 1:
- Pool Maelstrom for {{ site.data.nathria.echo_of_sin }} adds as needed. If talented, hold {{ site.data.talent.stormkeeper }} only if add damage is a problem.
- Use {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed when targeted by {{ site.data.nathria.feeding_time }} ({{ site.data.nathria.night_hunter }} on Heroic/Mythic).
- Use {{ site.data.spell.ghost_wolf }} before the Intermission begins to nullify the movement reduction (Note: this means Shamans do not need to soak cleaves in P1)

Intermission:
- As you will likely make it ahead of your raid during {{ site.data.nathria.march_of_the_penitent }}, it is a good opportunity to continue damaging the boss or briefly off-heal your fellow raid members after your {{ site.data.nathria.burden_of_sin }} stacks drop.

Phase 2:
- Maintain {{ site.data.spell.flame_shock }} on {{ site.data.nathria.sire_denathrius }}, {{ site.data.nathria.remornia }}, and any additional adds as you can.
- Depending on timings, you may pool Maelstrom and hold CDs to optimize the {{ site.data.nathria.wracking_pain }} debuff on enemies.

Phase 3:
- Use {{ site.data.spell.spiritwalkers_grace }} or instant casts as needed when targeted by {{ site.data.nathria.fatal_finesse }} and soaking {{ site.data.nathria.smoldering_ire }}.

**Defensives:**

Phase 1:
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.feeding_time }} ({{ site.data.nathria.night_hunter }} on Heroic/Mythic), {{ site.data.nathria.blood_price }}, or {{ site.data.nathria.cleansing_pain }}.

Phase 2:
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.impale }} or increasing {{ site.data.nathria.crimson_chorus }} stacks.

Phase 3:
- Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.nathria.shattering_pain }}, {{ site.data.nathria.fatal_finesse }}, {{ site.data.nathria.smoldering_ire }}, or {{ site.data.nathria.hand_of_destruction }}.

<hr />
- This encounter is very movement demanding, so the additional movement from {{ site.data.talent.spirit_wolf }} can be beneficial in each phase. {{ site.data.nathria.burden_of_sin }}, {{ site.data.nathria.carnage }}, {{ site.data.nathria.crimson_chorus }}, and {{ site.data.nathria.fatal_finesse }} are all constant sources of damage that can allow HPS from {{ site.data.talent.earth_shield }}.

**Utilities:**

Phase 1:
- Use {{ site.data.talent.wind_rush_totem }} as needed to help your raid position out of {{ site.data.nathria.ravage }}.

Phase 2:
- Use {{ site.data.talent.wind_rush_totem }} as needed to help your raid avoid {{ site.data.nathria.massacre }} and {{ site.data.nathria.hand_of_destruction }}.

Phase 3:
- Use {{ site.data.talent.wind_rush_totem }} as needed to help your raid members navigate {{ site.data.nathria.shattering_pain }}, {{ site.data.nathria.hand_of_destruction }}, {{ site.data.nathria.ravage }}, and {{ site.data.nathria.massacre }}.

**Notes:**
- Because of {{ site.data.spell.ghost_wolf }}, you will not be slowed during {{ site.data.nathria.march_of_the_penitent }} in Phase 1, but you **must** be in {{ site.data.spell.ghost_wolf }} form before the phase begins. Consider not clearing any {{ site.data.nathria.burden_of_sin }} stacks during this phase.
- As P2 boss arena contains platforms, and {{ site.data.item.t28_4 }} bonuses cause our {{ site.data.talent.fe }} to be active ~100% of the time this has the potential to cause issues but perhaps not significant!

</div>
</div>
</div>
</div>
</div>
