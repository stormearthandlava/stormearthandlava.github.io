---
layout: page
title: "Sepulcher of the First Ones Guide"
last_update: 02/05/2022
game_version: 9.2 Shadowlands
author: Eokira
toc: false
---

# Introduction
This guide was made possible by:

- Altenna (Discord: JudgeJames#0001 \| [Twitch](https://www.twitch.tv/judgejames) \| [Twitter](https://twitter.com/_judgejames_))
- Amani (Discord: Amani#0001 \| [Discord Server (RU)](https://discord.gg/vodovorot) \| [Twitch](https://www.twitch.tv/amanizandalari))
- Bloodmallet (Discord: Bloodmallet(EU)#8246 \| [Website](https://bloodmallet.com/))
- Eokira (Discord: Eokira#7823)
- Gaka (Discord: Gaka#7410)
- HawkCorrigan (Discord: HawkCorrigan#1811)
- Kaldeak (Discord: Kaldeak#1394)
- Sheffy (Discord: Sheffy#4928 \| [Twitch](https://www.twitch.tv/sheffywow) \| [Twitter](https://twitter.com/SheffyWoW))

The tips and recommendations listed here are based on educated opinions from PTR raid testing and reviewing logs and videos, so strategies can change as we develop a better understanding of each fight or as the spec and bosses are tuned. If you have any disagreements, feedback, or questions, please feel welcome to reach out to the team.

# Miscellaneous Tips
- Recommendations on Single-Target profile bosses may include {{ site.data.talent.icefury }}, this only applies **if you do not have an active 4-piece bonus** so will impact your choices on early progression only.

- Talent recommendations cover either with or without {{ site.data.item.t28_4 }}, for advice specific to {{ site.data.item.t28_2 }} see {{ site.data.talent.sop }} indepth discussion on our [Talents page](https://stormearthandlava.com/guide/general/talents.html).

- The final three bosses (Lords of Dread, Rygelon, and The Jailer, Zovaal) were not tested on PTR so no footage for those bosses exists.

- GCDs spent on healing and utilities are GCDs not spent on damage, but both are necessary to down a raid boss. Find the balance to optimize your contributions to your raid team.

- Time spent in {{ site.data.spell.ghost_wolf }} is time spent not doing damage. Practice proactive movement and utilize {{ site.data.talent.swg }} and instant casts as much as you can for movement heavy encounters.

- When talenting {{ site.data.talent.pe }}, always remember that you have an additional defensive ({{ site.data.spell.harden_skin}}) and single target stun ({{ site.data.spell.pulverize }}) through {{ site.data.talent.earth_elemental }}.

- Recall that [Stampeding Roar](https://www.wowhead.com/spell=106898/stampeding-roar) is now a baseline Druid ability. Depending on your raid comp, it may not be necessary to talent {{ site.data.talent.wind_rush_totem }}.

- Additional Resources:
       - [Warcraft Logs](https://www.warcraftlogs.com/)
       - [Sepulcher of the First Ones Loot Table](https://www.wowhead.com/guides/sepulcher-of-the-first-ones-raid-loot-item-levels)


# Bosses
<p style="color:red">Click on a boss banner to expand it.</p>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="vigilant_guardian">
<div data-toggle="collapse" data-target="#vigilant_guardian-collapse" aria-expanded="true" aria-controls="vigilant_guardian-collapse" class="raid-header sepulcher_of_the_first_ones1"><h2>Vigilant Guardian</h2></div>
</div>
<div id="vigilant_guardian-collapse" class="collapse" aria-labelledby="vigilant_guardian" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** Single-Target with Cleave/AoE

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }} or {{ site.data.talent.afs }}
* **30:** {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35:** {{ site.data.talent.master_of_the_elements }}
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }} or {{ site.data.talent.ancestral_guidance }}
* **45:** {{ site.data.talent.icefury }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo }}       
* **25:** {{ site.data.talent.eb }} or {{ site.data.talent.afs }}
* **30:** {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35:** {{ site.data.talent.mote }} or {{ site.data.talent.se }}
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wrt }} or {{ site.data.talent.ancestral_guidance }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }}     

**Recommended Covenant:**

* Night Fae with Dreamweaver or Korayn to capitalise on {{site.data.expansion_feature.sl.soulbinds.first_strike}}

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.eogs }}  
* {{ site.data.expansion_feature.sl.legendary.wlr }} If your group is able to kill Adds sufficiently fast in Normal or Heroic difficulty, you may find more value focussing on Single Target.

**Damage**

* Maintain {{ site.data.spell.flame_shock }} on multiple targets
* Use {{ site.data.talent.stormkeeper }} when [Volatile Materium](https://ptr.wowhead.com/npc=181859/volatile-materium) are spawning, consider having a {{ site.data.expansion_feature.sl.legendary.eogs }} buff active!
* Use {{ site.data.talent.swg }} to help reposition before [Exposed Core!](https://ptr.wowhead.com/spell=360412/exposed-core)

**Defensives:**

* Use cooldowns as necessary throughout the fight, ensuring at least {{ site.data.talent.as }} is available for [Core Overload](https://ptr.wowhead.com/spell=364962/core-overload) once the boss reaches 15%.
* If required, consider using {{ site.data.talent.ee }} with {{ site.data.spell.harden_skin }}. This may feel worse with an active 4-piece bonus but **dying is worse**.
* Depending on your group composition and positioning your group may not need {{ site.data.talent.wrt }}, in which case take {{ site.data.talent.natures_guardian }}.

**Utilities:**

* Using {{ site.data.spell.wind_shear }} to interrupt [Point Defense Drone](https://ptr.wowhead.com/npc=181856/point-defense-drone)
* Using {{ site.data.talent.thunderstorm }} to help position Adds when necessary
* If talented, use {{ site.data.talent.wrt }} to help your raid reposition before [Exposed Core](https://ptr.wowhead.com/spell=360412/exposed-core)
* If talented, use {{ site.data.talent.ancestral_guidance }} to help with incoming damage during Add spawns

**PTR PoVs:**

* Sheffy: [Heroic](https://www.twitch.tv/videos/1236486843)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="skolex">
<div data-toggle="collapse" data-target="#skolex-collapse" aria-expanded="true" aria-controls="skolex-collapse" class="raid-header sepulcher_of_the_first_ones2"><h2>Skolex, the Insatiable Ravener</h2></div>
</div>
<div id="skolex-collapse" class="collapse" aria-labelledby="skolex" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** Single-Target

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }}
* **30:** {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35:** {{ site.data.talent.master_of_the_elements }}
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45:** {{ site.data.talent.icefury }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo }}       
* **25:** {{ site.data.talent.eb }}
* **30:** {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35:** {{ site.data.talent.mote }}       
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wrt }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }} or {{ site.data.talent.asc }}

**Recommended Covenant:**

* Night Fae with Dreamweaver
* Necrolord with Plague-Deviser Marileth

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.wlr }}

**Damage**

* Use {{ site.data.talent.swg }} to maintain uptime while avoiding [Retch](https://ptr.wowhead.com/spell=360448/retch) or when repositioning for [Ravening Burrow](https://ptr.wowhead.com/spell=359770/ravening-burrow)
* You can continue using instant-cast abilities whilst airborne from [Ravening Burrow!](https://ptr.wowhead.com/spell=359770/ravening-burrow)

**Defensives:**

* Use {{ site.data.talent.as }} and healing consumables as required to deal with additional stacks of [Ephemera Dust](https://ptr.wowhead.com/spell=359778/ephemera-dust).
* Consider using {{ site.data.talent.ee }} as an additional defensive with {{ site.data.talent.icefury }} talented, or as required if using {{ site.data.talent.pe }} talented when 4-piece is active.

**Utilities:**

* If talented, use {{ site.data.talent.wrt }} to help your raid avoid [Retch](https://ptr.wowhead.com/spell=360448/retch)

**PTR PoVs:**

* Sheffy: [Heroic](https://www.twitch.tv/videos/1223228452) \| [Mythic](https://www.twitch.tv/videos/1255340962)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="artificer_xymox">
<div data-toggle="collapse" data-target="#artificer_xymox-collapse" aria-expanded="true" aria-controls="artificer_xymox-collapse" class="raid-header sepulcher_of_the_first_ones3"><h2>Artificer Xy'mox</h2></div>
</div>
<div id="artificer_xymox-collapse" class="collapse" aria-labelledby="artificer_xymox" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** Single-Target with AoE

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.eb }} ( or {{ site.data.talent.afs }} for Add damage )
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.master_of_the_elements }} (or {{ site.data.talent.se }} for Add damage )
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45:** {{ site.data.talent.icefury }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo }}       
* **25:** {{ site.data.talent.eb }} ( or {{ site.data.talent.afs }} for Add damage )
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.mote }}      
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wrt }}
* **45:** {{ site.data.talent.pe }} (or {{ site.data.talent.se }} for Add damage )
* **50:** {{ site.data.talent.sk }}     

**Recommended Covenant:**   

* Night Fae with Dreamweaver or Korayn to capitalise on {{site.data.expansion_feature.sl.soulbinds.first_strike}}

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.eogs }}
* {{ site.data.expansion_feature.sl.legendary.wlr }}

**Damage**

* Focus down [Xy Acolytes](https://ptr.wowhead.com/npc=184140/xy-acolyte) as fast as possible to prevent [Hyperlight Ascension](https://ptr.wowhead.com/spell=364040/hyperlight-ascension)
* Use {{ site.data.talent.sk }} when [Xy Acolytes](https://ptr.wowhead.com/npc=184140/xy-acolyte) and [Xy Spellslingers](https://ptr.wowhead.com/npc=183707/xy-spellslinger) are spawning, consider having a {{ site.data.expansion_feature.sl.legendary.eogs }} buff active!
* Use {{ site.data.talent.swg }} to maintain uptime whilst dealing with [Genesis Rings!](https://ptr.wowhead.com/spell=363413/genesis-rings)

**Defensives:**

* Use {{ site.data.talent.as }} as needed when [Gylph of Relocation](https://ptr.wowhead.com/spell=362801/glyph-of-relocation) is about to explode
* Consider using {{ site.data.talent.ee }} as necessary for [Vital Accretion](https://ptr.wowhead.com/spell=337981/vital-accretion) or {{ site.data.spell.harden_skin }}

**Utilities:**

* Use {{ site.data.spell.wind_shear }} to interrupt [Debilitating Ray](https://ptr.wowhead.com/spell=364030/debilitating-ray) from [Xy Spellslingers](https://ptr.wowhead.com/npc=183707/xy-spellslinger)
* Use {{ site.data.talent.thunderstorm }} to position [Xy Acolytes](https://ptr.wowhead.com/npc=184140/xy-acolyte) and [Xy Spellslingers](https://ptr.wowhead.com/npc=183707/xy-spellslinger) if necessary
* Use {{ site.data.talent.capacitor_totem }} to stun [Xy Acolytes](https://ptr.wowhead.com/npc=184140/xy-acolyte) and [Xy Spellslingers](https://ptr.wowhead.com/npc=183707/xy-spellslinger)
* If talented, use {{ site.data.talent.wrt }} to help your raid avoid [Genesis Rings](https://ptr.wowhead.com/spell=363413/genesis-rings)

**Added Notes:**

* Position yourself accordingly whenever [Glyph of Relocation](https://ptr.wowhead.com/spell=362801/glyph-of-relocation) is about to expire, so that a [Dimensional Tear](https://ptr.wowhead.com/spell=362721/dimensional-tear) is between you and the exploding tank. This allows you to minimize the distance moved.        

**PTR PoVs:**

* Sheffy: [Heroic](https://www.twitch.tv/videos/1229013142)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="dausegne">
<div data-toggle="collapse" data-target="#dausegne-collapse" aria-expanded="true" aria-controls="dausegne-collapse" class="raid-header sepulcher_of_the_first_ones4"><h2>Dausegne, the Fallen Oracle</h2></div>
</div>
<div id="dausegne-collapse" class="collapse" aria-labelledby="dausegne" data-parent="#accordion">
<div class="card-body" markdown="1">    

**Boss Fight Profile:** Single-Target, with limited Cleave/Funnel

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.master_of_the_elements }}
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45:** {{ site.data.talent.icefury }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo }}       
* **25:** {{ site.data.talent.eb }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.mote }}       
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wrt }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }} or {{ site.data.talent.asc }}   

**Recommended Covenant:**   

* Night Fae with Dreamweaver

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.wlr }}       

**Damage**

* [Domination Cores](https://ptr.wowhead.com/npc=181244/domination-core) can be played in more than one way from an Elemental perspective:
       - Maintain {{ site.data.spell.flame_shock }} on both Dausegne and [Domination Core](https://ptr.wowhead.com/npc=181244/domination-core), focus single-target damage into [Domination Core](https://ptr.wowhead.com/npc=181244/domination-core)
       - Maintain {{ site.data.spell.flame_shock }} on both Dausegne and [Domination Core](https://ptr.wowhead.com/npc=181244/domination-core), focus single-target damage into Dausegne
       - Maintain {{ site.data.spell.flame_shock }} on both Dausegne and [Domination Core](https://ptr.wowhead.com/npc=181244/domination-core), use {{ site.data.spell.eq }} instead of {{ site.data.spell.es }} and focus either [Domination Core](https://ptr.wowhead.com/npc=181244/domination-core) or Dausegne
       - Recommendation? Be sensible. For progression purposes it is important that [Domination Cores](https://ptr.wowhead.com/npc=181244/domination-core) die quickly because of [Encroaching Dominion](https://ptr.wowhead.com/spell=361214/encroaching-dominion) pools they spawn every 6 seconds whilst still alive, every group is different so your needs may vary but the priority should be to do what is necessary to kill the [Domination Cores](https://ptr.wowhead.com/npc=181244/domination-core) quickly and efficiently.  
* Use {{ site.data.talent.swg }} to maintain uptime whilst dealing with [Disintegration Halo](https://ptr.wowhead.com/spell=365373/disintegration-halo)
* Pool resources when Dausegne is about to cast [Siphon Reservoir!](https://ptr.wowhead.com/spell=361643/siphon-reservoir)       

**Defensives:**

* Use {{ site.data.talent.as }} as needed when [Staggering Barrage](https://ptr.wowhead.com/spell=360959/staggering-barrage), [Disintegration Halo](https://ptr.wowhead.com/spell=365373/disintegration-halo) or [Inevitable Dominion](https://ptr.wowhead.com/spell=361722/inevitable-dominion) happen
* Consider using {{ site.data.talent.ee }} as necessary for [Vital Accretion](https://ptr.wowhead.com/spell=337981/vital-accretion) or {{ site.data.spell.harden_skin }}
* {{ site.data.spell.soulshape }} is useful for dealing with [Disintegration Halo](https://ptr.wowhead.com/spell=365373/disintegration-halo) overlaps when playing as Night Fae

**Utilities:**

* Use {{ site.data.spell.wind_shear }} to interrupt [Domination Bolt](https://ptr.wowhead.com/spell=363607/domination-bolt) from [Domination Core](https://ptr.wowhead.com/npc=181244/domination-core)  
* If talented, use {{ site.data.talent.wrt }} to help your raid deal with [Disintegration Halo](https://ptr.wowhead.com/spell=365373/disintegration-halo) overlaps.  

**PTR PoVs:**

* Sheffy: [Heroic](https://www.twitch.tv/videos/1223223675) \| [Mythic](https://www.twitch.tv/videos/1255367010)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="prototype_pantheon">
<div data-toggle="collapse" data-target="#prototype_pantheon-collapse" aria-expanded="true" aria-controls="prototype_pantheon-collapse" class="raid-header sepulcher_of_the_first_ones5"><h2>Prototype Pantheon</h2></div>
</div>
<div id="prototype_pantheon-collapse" class="collapse" aria-labelledby="prototype_pantheon" data-parent="#accordion">
<div class="card-body" markdown="1">    

**Boss Fight Profile:** Cleave with spread priority Add spawn

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }} or {{ site.data.talent.afs }}
* **30:** {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35:** {{ site.data.talent.master_of_the_elements }} or {{ site.data.talent.se }}
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45:** {{ site.data.talent.icefury }} or {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.eote }}
* **25:** {{ site.data.talent.eb }} or {{ site.data.talent.afs }}
* **30:** {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35:** {{ site.data.talent.se }} or {{ site.data.talent.mote }}   
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wrt }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }} or {{ site.data.talent.asc }}

**Recommended Covenant:**   

* Necrolord with Plague Deviser Marileth, {{ site.data.expansion_feature.sl.soulbinds.preemptive_strike }} is very effective for focusing Necrotic Ritualists
* Night Fae with Dreamweaver

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.eogs }}
* {{ site.data.expansion_feature.sl.legendary.dre }}

**Damage**

* Focusing [Necrotic Rituatlists](https://ptr.wowhead.com/spell=360295/necrotic-ritual#used-by-npc) is very important, maintain {{ site.data.spell.flame_shock }} on as many targets whilst focusing one [Necrotic Ritualist](https://ptr.wowhead.com/spell=360295/necrotic-ritual#used-by-npc) down (consider positioning for this purpose)
* Use {{ site.data.talent.swg }} to maintain uptime whilst dealing with [Windswept Wings](https://ptr.wowhead.com/spell=365041/windswept-wings) and [Hand of Destruction](https://ptr.wowhead.com/spell=361788/hand-of-destruction)

**Defensives:**

* Use {{ site.data.talent.as }} (and {{ site.data.spell.fleshcraft }} if Necrolord) as needed for [Windswept Wings](https://ptr.wowhead.com/spell=365041/windswept-wings)
* Consider using {{ site.data.talent.ee }} as necessary for [Vital Accretion](https://ptr.wowhead.com/spell=337981/vital-accretion) or {{ site.data.spell.harden_skin }}

**Utilities:**

* Use {{ site.data.spell.wind_shear }} to interrupt [Gloom Bolt](https://ptr.wowhead.com/spell=360259/gloom-bolt) from [Prototype of War](https://ptr.wowhead.com/npc=181549/prototype-of-war) and [Anima Bolt](https://ptr.wowhead.com/spell=362383/anima-bolt) from [Protoype of Renewal](https://ptr.wowhead.com/npc=181546/prototype-of-renewal)  
* If talented, use {{ site.data.talent.wrt }} to help your raid deal with [Windswept Wings](https://ptr.wowhead.com/spell=365041/windswept-wings) and [Hand of Destruction](https://ptr.wowhead.com/spell=361788/hand-of-destruction)

**PTR PoVs:**

* Sheffy: [Heroic](https://www.twitch.tv/videos/1235533062)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="lihuvim">
<div data-toggle="collapse" data-target="#lihuvim-collapse" aria-expanded="true" aria-controls="lihuvim-collapse" class="raid-header sepulcher_of_the_first_ones6"><h2>Lihuvim, Principal Architech</h2></div>
</div>
<div id="lihuvim-collapse" class="collapse" aria-labelledby="lihuvim" data-parent="#accordion">
<div class="card-body" markdown="1">    

**Boss Fight Profile:** Single-Target with Cleave / AoE

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.master_of_the_elements }}
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45:** {{ site.data.talent.icefury }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.eote }}
* **25:** {{ site.data.talent.eb }} ( or {{ site.data.talent.afs }} for Add damage }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.mote }} ( or {{ site.data.talent.se }} for Add damage }}
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wrt }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }}     

**Recommended Covenant:**   

* Night Fae with Korayn for {{site.data.expansion_feature.sl.soulbinds.first_strike}}
* Necrolord with Plague-Deviser Marileth

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.wlr }}
* {{ site.data.expansion_feature.sl.legendary.eogs }}

**Damage**

* Pool resources when Lihuvim is close to 100 energy to prepare for [Synthesize](https://ptr.wowhead.com/spell=363130/synthesize)
* Focusing down [Degeneration Automa](https://ptr.wowhead.com/npc=182053/degeneration-automa), [Acquisitions Automa](https://ptr.wowhead.com/npc=184737/acquisitions-automa), [Guardian Automa](https://ptr.wowhead.com/npc=184738/guardian-automa), [Defense Matrix Automa](https://ptr.wowhead.com/npc=184126/defense-matrix-automa) is the highest priority when they are active
* Use {{ site.data.talent.swg }} to maintain uptime whilst dealing with [Manifest Mote](https://ptr.wowhead.com/spell=362624/manifest-mote) and [Deconstruction Blast](https://ptr.wowhead.com/spell=363681/deconstructing-blast)

**Defensives:**

* Use {{ site.data.talent.as }} as needed for [Cosmic Shift](https://ptr.wowhead.com/spell=363088/cosmic-shift) or [Deconstruction Blast](https://ptr.wowhead.com/spell=363681/deconstructing-blast)
* Consider using {{ site.data.talent.ee }} as necessary for [Vital Accretion](https://ptr.wowhead.com/spell=337981/vital-accretion) or {{ site.data.spell.harden_skin }}

**Utilities:**

* If talented, use {{ site.data.talent.wrt }} to help your raid reposition quickly for [Synthesize](https://ptr.wowhead.com/spell=363130/synthesize)

**PTR PoVs:**

* Sheffy: [Heroic](https://www.twitch.tv/videos/1229048431)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="halondrus">
<div data-toggle="collapse" data-target="#halondrus-collapse" aria-expanded="true" aria-controls="halondrus-collapse" class="raid-header sepulcher_of_the_first_ones7"><h2>Halondrus the Reclaimer</h2></div>
</div>
<div id="halondrus-collapse" class="collapse" aria-labelledby="halondrus" data-parent="#accordion">
<div class="card-body" markdown="1">    

**Boss Fight Profile:** Single-Target

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.master_of_the_elements }}
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wind_rush_totem }}
* **45:** {{ site.data.talent.icefury }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo }}
* **25:** {{ site.data.talent.eb }}
* **30:** {{ site.data.talent.spirit_wolf }} or {{ site.data.talent.earth_shield }}
* **35:** {{ site.data.talent.mote }}  
* **40:** {{ site.data.talent.natures_guardian }} or {{ site.data.talent.wrt }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }} or {{ site.data.talent.asc }}

**Recommended Covenant:**   

* Night Fae with Dreamweaver (consider Niya if you would otherwise have poor {{ site.data.expansion_feature.sl.soulbinds.field_of_blossom }} uptime and/or delay {{ site.data.spell.fae_transfusion }} in order to facilitate uptime)
* Necrolord with Plague Deviser Marileth (less reliant on static positioning, additional defensive never hurts!)

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.wlr }}

**Damage**

* Make use of Elemental's frequent instant cast abilities to deal with movement caused by [Earthbreaker Missiles](https://www.wowhead.com/spell=361676/earthbreaker-missiles) and [Aftershock](https://www.wowhead.com/spell=362025/aftershock)
* {{ site.data.talent.swg }} is important to use during Intermissions, and if time allows, during Phase 3.

**Defensives:**

* Using {{ site.data.talent.as }} during [Reclaim](https://www.wowhead.com/spell=360115/reclaim), and during Phase 3.
* {{ site.data.talent.earth_shield }} does a lot of healing on this fight, and is no issue to recast due to movement required in all phases.

**Utilities:**

* {{ site.data.talent.wrt }} is exceptionally useful when placed going into Intermission phases  

**PTR PoVs:**

* Remember: this footage is from before rework!  
* Sheffy: [Heroic](https://www.twitch.tv/videos/1235530886)

</div>
</div>
</div>  

<div class="card">
<div class="card-header" id="anduin_wrynn">
<div data-toggle="collapse" data-target="#anduin_wrynn-collapse" aria-expanded="true" aria-controls="anduin_wrynn-collapse" class="raid-header sepulcher_of_the_first_ones8"><h2>Anduin Wrynn</h2></div>
</div>
<div id="anduin_wrynn-collapse" class="collapse" aria-labelledby="anduin_wrynn" data-parent="#accordion">
<div class="card-body" markdown="1">   

**Boss Fight Profile:** Single-Target with Cleave / AoE

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }} or {{ site.data.talent.afs }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.se }} or {{ site.data.talent.master_of_the_elements }}
* **40:** {{ site.data.talent.wind_rush_totem }} or {{ site.data.talent.ancestral_guidance }}
* **45:** {{ site.data.talent.icefury }} or {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.eote }}
* **25:** {{ site.data.talent.eb }} (or {{ site.data.talent.afs }} for Add damage / you plan to use {{ site.data.talent.se }})
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.se }} or {{ site.data.talent.mote }}
* **40:** {{ site.data.talent.wrt }} or {{ site.data.talent.ancestral_guidance }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }}  

**Recommended Covenant:**   

* Night Fae with Korayn

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.eogs }}

**Damage**

* Use {{ site.data.talent.swg }} to maintain uptime whilst dealing with [Blasphemy](https://ptr.wowhead.com/spell=361989/blasphemy)
* Pool resources, including {{ site.data.talent.sk }}, for the Intermission phase       

**Defensives:**

* Use {{ site.data.talent.as }} as needed for [Befouled Barrier](https://ptr.wowhead.com/spell=365293/befouled-barrier) or [Hopebreaker](https://ptr.wowhead.com/spell=361815/hopebreaker)

**Utilities:**

* Use {{ site.data.spell.wind_shear }} to interrupt [Psychic Terror](https://ptr.wowhead.com/spell=365008/psychic-terror) from [Grim Reflections](https://ptr.wowhead.com/spell=365120/grim-reflections)        
* Use {{ site.data.talent.tremor_totem }} before [Psychic Terror](https://ptr.wowhead.com/spell=365008/psychic-terror) cast finishes if it would finish
* Use {{ site.data.spell.fae_transfusion }} to assist with breaking [Befouled Barrier](https://ptr.wowhead.com/spell=365293/befouled-barrier)
* Use {{ site.data.talent.capacitor_totem }} to assist with controlling Adds       
* If talented, use {{ site.data.talent.ancestral_guidance }} with {{ site.data.talent.sk }} for maximum effect        

**PTR PoVs:**

* Sheffy: [Heroic](https://www.twitch.tv/videos/1236484005)

</div>
</div>
</div>   

<div class="card">
<div class="card-header" id="lords_of_dread">
<div data-toggle="collapse" data-target="#lords_of_dread-collapse" aria-expanded="true" aria-controls="lords_of_dread-collapse" class="raid-header sepulcher_of_the_first_ones9"><h2>Lords of Dread</h2></div>
</div>
<div id="lords_of_dread-collapse" class="collapse" aria-labelledby="lords_of_dread" data-parent="#accordion">
<div class="card-body" markdown="1">   

**Boss Fight Profile:** Two target Cleave with Single Add spawn

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.se }} or {{ site.data.talent.master_of_the_elements }}
* **40:** {{ site.data.talent.wind_rush_totem }} or {{ site.data.talent.natures_guardian }}
* **45:** {{ site.data.talent.icefury }} or {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.eote }}
* **25:** {{ site.data.talent.eb }} or {{ site.data.talent.afs }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.mote }}
* **40:** {{ site.data.talent.wrt }} or {{ site.data.talent.natures_guardian }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }} or {{ site.data.talent.asc }}

**Recommended Covenant:**   

* Necrolord with Plague-Deviser Marileth
* Night Fae with Dreamweaver

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.dre }} despite the RNG nature of this Legendary effect it plays well into the low target counts offered by the fight so on average should provide the most value
* {{ site.data.expansion_feature.sl.legendary.eogs }} You may consider this if you dislike the RNG nature of {{ site.data.expansion_feature.sl.legendary.dre }}

**Damage**

* Maintain {{ site.data.spell.fs }} on both bosses.
* Prepare for [Unto Darkness](https://www.wowhead.com/spell=360319/unto-darkness) when Malganis is nearing 100 Energy by getting an {{ site.data.expansion_feature.sl.legendary.eogs }} buff active if it is equipped
* All damage is now increased by [Unto Darkness](https://www.wowhead.com/spell=360319/unto-darkness) meaning no special rules apply to how you would use abilities in this phase, normal 2 target priority is used (3 targets when [Inchoate Shadow Add](https://www.wowhead.com/npc=183138/inchoate-shadow) is gripped in)

**Defensives:**

* Use {{ site.data.talent.as }} during [Unto Darkness](https://www.wowhead.com/spell=360319/unto-darkness), it should not be necessary to use defensives to deal with [Cloud of Carrion](https://www.wowhead.com/spell=360006/cloud-of-carrion) if stacks are spread appropriately

**Utilities:**

* {{ site.data.talent.tremor_totem }} can be used to remove [Bursting Dread Fears](https://www.wowhead.com/spell=360148/bursting-dread) in the event of a mistake. Be particularly mindful if your healers make this mistake, as it will typically be healers that dispel the fear from others! Can also be useful to clear [Unsettling Dreams](https://www.wowhead.com/spell=360241/unsettling-dreams)
* {{ site.data.spell.wind_shear }} is excellent for the [Inchoate Shadow Add](https://www.wowhead.com/npc=183138/inchoate-shadow) but remember **do not interrupt the casts until the Add has reached 100% hp and their buff is removed**, doing so will cause more raid damage overall via  [Ravenous Hunger](https://www.wowhead.com/spell=361923/ravenous-hunger)
* {{ site.data.talent.thunderstorm }} can be used to knock the [Inchoate Shadow Add](https://www.wowhead.com/npc=183138/inchoate-shadow) into the bosses to more efficiently cleave it down.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="rygelon">
<div data-toggle="collapse" data-target="#rygelon-collapse" aria-expanded="true" aria-controls="rygelon-collapse" class="raid-header sepulcher_of_the_first_ones10"><h2>Rygelon</h2></div>
</div>
<div id="rygelon-collapse" class="collapse" aria-labelledby="rygelon" data-parent="#accordion">
<div class="card-body" markdown="1">  

**Boss Fight Profile:** Single Target with Priority Adds

**Talents:**

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.se }} or {{ site.data.talent.master_of_the_elements }}
* **40:** {{ site.data.talent.wind_rush_totem }} or {{ site.data.talent.natures_guardian }}
* **45:** {{ site.data.talent.icefury }} or {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.eote }}
* **25:** {{ site.data.talent.eb }} or {{ site.data.talent.afs }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.mote }}
* **40:** {{ site.data.talent.wrt }} or {{ site.data.talent.natures_guardian }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }} or {{ site.data.talent.asc }}

**Recommended Covenant:**   

* Necrolord with Plague-Deviser Marileth
* Night Fae with Dreamweaver or Korayn for {{ site.data.expansion_feature.sl.soulbinds.first_strike }}

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.wlr }}
* {{ site.data.expansion_feature.sl.legendary.dre }}

**Damage**

* Swap to [Collapsing Quasar Orbs](https://www.wowhead.com/npc=182778/collapsing-quasar) and ensure they die before reaching the boss. Pooling resources is important if your group is struggling with this!
* Maintain multiple {{ site.data.spell.fs }} using [Unstable Matter Orbs](https://www.wowhead.com/spell=363518/unstable-matter) but **do not focus them until the boss is about to start casting** [Massive Bang](https://www.wowhead.com/spell=363533/massive-bang)

**Defensives:**

* Use {{ site.data.talent.as }} as needed with [Dark Eclipse](https://www.wowhead.com/spell=361548/dark-eclipse), ideally use it before stepping into a [Collapsing Quasar Field](https://www.wowhead.com/spell=361462/collapsing-quasar-field) so it also covers the [Dark Collapse](https://www.wowhead.com/spell=361463/dark-collapse). Don't forget you need to move **out** of the raid before this goes off!


**Utilities:**

* {{ site.data.talent.wrt }} is very useful to help your group position for [Massive Bang](https://www.wowhead.com/spell=363533/massive-bang), as you need to be stood in the zones left by [Burned Out Unstable Matter](https://www.wowhead.com/spell=363518/unstable-matter) in order to avoid lethal damage.
* {{ site.data.spell.earthbind_totem }} is very useful to slow [Collapsing Quasar Orbs](https://www.wowhead.com/npc=182778/collapsing-quasar).    

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="zovaal">
<div data-toggle="collapse" data-target="#zovaal-collapse" aria-expanded="true" aria-controls="zovaal-collapse" class="raid-header sepulcher_of_the_first_ones11"><h2>The Jailer, Zovaal</h2></div>
</div>
<div id="zovaal-collapse" class="collapse" aria-labelledby="zovaal" data-parent="#accordion">
<div class="card-body" markdown="1">    

**Boss Fight Profile:** Single Target

**Talents:**

**Talents without {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.elemental_blast }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.se }} or {{ site.data.talent.master_of_the_elements }}
* **40:** {{ site.data.talent.wind_rush_totem }} or {{ site.data.talent.natures_guardian }}
* **45:** {{ site.data.talent.icefury }} or {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.stormkeeper }}

**Talents with {{ site.data.item.t28_4 }}:**

* **15:** {{ site.data.talent.eote }}
* **25:** {{ site.data.talent.eb }}
* **30:** {{ site.data.talent.spirit_wolf }}
* **35:** {{ site.data.talent.mote }}
* **40:** {{ site.data.talent.wrt }} or {{ site.data.talent.natures_guardian }}
* **45:** {{ site.data.talent.pe }}
* **50:** {{ site.data.talent.sk }} or {{ site.data.talent.asc }}

**Recommended Covenant:**   

* Night Fae with Dreamweaver (consider Niya if you would otherwise have poor {{ site.data.expansion_feature.sl.soulbinds.field_of_blossom }} uptime and/or delay {{ site.data.spell.fae_transfusion }} in order to facilitate uptime)
* Necrolord with Plague-Deviser Marileth

**Recommended Legendaries:**

* {{ site.data.expansion_feature.sl.legendary.wlr }}

**Damage**

* Pool resources to help break [Rune of Compulsion Mind Control](https://www.wowhead.com/spell=366285/rune-of-compulsion).

**Defensives:**

* Use {{ site.data.talent.as }} as needed for soaking [Martyrdom's](https://www.wowhead.com/spell=363893/martyrdom) final blow with your tank or [Desolation](https://www.wowhead.com/spell=365033/desolation)

**Utilities:**

* {{ site.data.talent.wrt }} is very useful to help your group avoid [Oppression](https://www.wowhead.com/spell=362617/oppression)
* {{ site.data.talent.tremor_totem }} can be used to break your own Mind Control by placing {{ site.data.talent.tremor_totem }} when you are targeted by [Rune of Compulsion](https://www.wowhead.com/spell=366285/rune-of-compulsion), it does not remove Mind Control from your allies and you cannot cast {{ site.data.talent.tremor_totem }} during the Mind Control itself.

**Additional Notes:**

* You can use the knock-up portion of [Rune of Damnation](https://www.wowhead.com/spell=360282/rune-of-damnation) to reposition depending on which way you face when stepping into the `Pylon Conduit`, it will push you the opposite way from where you are facing.

</div>
</div>
</div>  
