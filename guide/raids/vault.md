---
layout: page
title: "Vault of the Incarnates Guide"
last_update: 22/03/2023
game_version: 10.0.7 Dragonflight
author: Sheffy, Elivrio
toc: false
big_article: false
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

- The final boss [Raszageth](https://www.wowhead.com/npc=199031/raszageth) was not tested on PTR so no footage for those bosses exists.

- GCDs spent on healing and utilities are GCDs not spent on damage, but both are necessary to down a raid boss. Find the balance to optimize your contributions to your raid team.

- Time spent in {{ site.data.spell.ghost_wolf }} is time spent not doing damage. Practice proactive movement and utilize {{ site.data.talent.spiritwalkers_grace }}, {{ site.data.talent.gust_of_wind }} and instant casts as much as you can for movement heavy encounters.

- Always remember that you can increase your maximum health by an additional 15 % and the uptime of {{ site.data.talent.primordial_bond }} by using {{ site.data.talent.ee }} provided it does not interfere with your Primal Fire/Storm Elemental usage when {{ site.data.talent.pe }} is talented which also gives access to an additional single target stun ({{ site.data.spell.pulverize }}).

- Recall that [Stampeding Roar](https://www.wowhead.com/spell=106898/stampeding-roar) is now more potent than {{ site.data.talent.wind_rush_totem }}. Depending on your raid comp, it may be better to spend that talent point somewhere else.

- Additional Resources:
  - [Warcraft Logs](https://www.warcraftlogs.com/)
  - [Vault of the Incarnates Loot Overview](https://www.wowhead.com/guide/raids/vault-of-the-incarnates/overview#loot)

<hr>

# Bosses

<p style="color:red" align="center">Click on a boss banner to expand it.</p>

<div class="dungeon-accordion">
<div id="accordion">
<div class="card">
<div class="card-header" id="eranog">
<div data-toggle="collapse" data-target="#eranog-collapse" aria-expanded="true" aria-controls="eranog-collapse" class="raid-header vault_of_the_incarnates1"><h2>Eranog</h2></div>
</div>
<div id="eranog-collapse" class="collapse" aria-labelledby="eranog" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** Single-Target with AoE

**Talents:**
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrIJtkAJINKBtkkkDAAAAAAoEQSJJgASLJppECCJRgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
  </div>

**Damage:**

* Maintain {{ site.data.spell.flame_shock }} on multiple targets.
* Use {{ site.data.talent.stormkeeper }} when [Flamescale Tarasek](https://www.wowhead.com/npc=187638/flamescale-tarasek) are spawning, consider having a {{ site.data.talent.sop }} buff active!
* Prioritize killing [Flamescale Captain](https://www.wowhead.com/npc=199233/flamescale-captain) (Mythic) during Phase 1 and [Primal Flame](https://www.wowhead.com/npc=195584/primal-flame) during Phase 2.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with [Flamerift](https://www.wowhead.com/spell=390715/flamerift).

**Defensives:**

* Use {{ site.data.talent.as }} and healing consumables as required whenever you accumulate more stacks of [Incinerating Roar](https://www.wowhead.com/spell=396023/incinerating-roar).
* Use {{ site.data.spell.healing_surge }} if necessary.

**Utilities:**

* Use {{ site.data.spell.wind_shear }} to interrupt [Pyroblast](https://www.wowhead.com/spell=396040/pyroblast) from [Flamescale Captain](https://www.wowhead.com/npc=199233/flamescale-captain) (Mythic).
* Use {{ site.data.talent.thunderstorm }} if necessary to keep distance when chased by [Kill Order](https://www.wowhead.com/spell=370597/kill-order) from [Flamescale Tarasek](https://www.wowhead.com/npc=187638/flamescale-tarasek).
* Use {{ site.data.talent.capacitor_totem }} and {{ site.data.spell.earthbind_totem }} to keep [Flamescale Tarasek](https://www.wowhead.com/npc=187638/flamescale-tarasek) stacked as soon as they spawn.

**PTR PoVs:**

* Amani: [Heroic](https://youtu.be/qnvqqgGroso) \| [Mythic](https://youtu.be/pxqXqAcuatE)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="terros">
<div data-toggle="collapse" data-target="#terros-collapse" aria-expanded="true" aria-controls="terros-collapse" class="raid-header vault_of_the_incarnates2"><h2>Terros</h2></div>
</div>
<div id="terros-collapse" class="collapse" aria-labelledby="terros" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** Single-Target

**Talents:**

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCgDkUSShSUikQEAAAAAgSAJlkACItkkWggQSEI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

**Damage:**

* There are no phases or timings that require you to plan your cooldowns around.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst repositioning for either [Rock Blast](https://www.wowhead.com/spell=380487/rock-blast) or [Infused Fallout](https://www.wowhead.com/spell=391592/infused-fallout) (Mythic).
* Preemptive movement is very important. Many abilities demand you to move quickly in a certain direction so optimizing your positioning in advance will give you the opportunity to use {{ site.data.talent.gow }} for more difficult situations.

**Defensives:**

* Use {{ site.data.talent.as }} and healing consumables as required whenever you accumulate more stacks of [Seismic Assault](https://www.wowhead.com/spell=381576/seismic-assault).
* If talented, keep {{ site.data.talent.earth_shield }} up, use it as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

**Utilities:**

* If talented, use {{ site.data.talent.wrt }} to help your raid repositioning for [Rock Blast](https://www.wowhead.com/spell=380487/rock-blast).

**Added Notes:**

* Both {{ site.data.talent.swg }} and {{ site.data.talent.gow }} are not necessarly needed for [Resonating Annihilation](https://www.wowhead.com/spell=377166/resonating-annihilation) since [Demonic Gateway](https://www.wowhead.com/spell=111771/demonic-gateway) will be ready for it.

**PTR PoVs:**

* Amani: [Heroic](https://youtu.be/Vl5s3-beatk)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="the_primal_council">
<div data-toggle="collapse" data-target="#the_primal_council-collapse" aria-expanded="true" aria-controls="the_primal_council-collapse" class="raid-header vault_of_the_incarnates3"><h2>The Primal Council</h2></div>
</div>
<div id="the_primal_council-collapse" class="collapse" aria-labelledby="the_primal_council" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** AoE

**Talents:**

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkASLSjS0SLJEAAAAAAKBkUSCIg0SSaKhgQSEI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

**Damage:**

* Maintain {{ site.data.spell.fs }} on all targets to utilize {{ site.data.talent.splinter }}, {{ site.data.talent.magma_chamber }} and {{ site.data.talent.sfd }}.
* There are no phases or timings that require you to plan your cooldowns around.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with [Primal Blizzard](https://www.wowhead.com/spell=371836/primal-blizzard)

**Defensives:**

* Use {{ site.data.talent.as }} and healing consumables as required for overlaps of [Meteor Axe](https://www.wowhead.com/spell=374043/meteor-axe) and [Conductive Mark](https://www.wowhead.com/spell=391686/conductive-mark).
* If talented, keep {{ site.data.talent.earth_shield }} up, use it as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

**Utilities:**

* Use {{ site.data.spell.wind_shear }} to interrupt [Frost Spike](https://www.wowhead.com/spell=372315/frost-spike) from [Kadros Icewrath](https://www.wowhead.com/npc=187771/kadros-icewrath) and [Lightning Bolt](https://www.wowhead.com/spell=372394/lightning-bolt) from [Dathea Stormlash](https://www.wowhead.com/npc=187768/dathea-stormlash).
* If talented, use {{ site.data.talent.wrt }} to help your raid dealing with [Meteor Axe](https://www.wowhead.com/spell=374043/meteor-axe) and [Conductive Mark](https://www.wowhead.com/spell=391686/conductive-mark).

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="sennarth">
<div data-toggle="collapse" data-target="#sennarth-collapse" aria-expanded="true" aria-controls="sennarth-collapse" class="raid-header vault_of_the_incarnates4"><h2>Sennarth,  The Cold Breath</h2></div>
</div>
<div id="sennarth-collapse" class="collapse" aria-labelledby="sennarth" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** Single-Target, with priority target focus

**Talents:**

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCAJlkUoEl0SCRAAAAAAKBkUSCIg0SSaKhgQSEI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>
**Damage:**

* Always focus down [Frostbreath Arachnids](https://www.wowhead.com/npc=199333/frostbreath-arachnid) as fast as possible to limit the damage income by [Chilling Aura](https://www.wowhead.com/spell=373817/chilling-aura).
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with [Gossamer Burst](https://www.wowhead.com/spell=373405/gossamer-burst) and other movement heavy portions of the fight.

**Defensives:**

* Use {{ site.data.talent.as }} and healing consumables as required whenever [Frostbreath Arachnids](https://www.wowhead.com/npc=199333/frostbreath-arachnid) are up to mitigate overlaps of [Chilling Blast](https://www.wowhead.com/spell=371976/chilling-blast) and [Chilling Aura](https://www.wowhead.com/spell=373817/chilling-aura).
* Use {{ site.data.talent.stoneskin_totem }} for [Gossamer Burst](https://www.wowhead.com/spell=373405/gossamer-burst).
* Use {{ site.data.spell.healing_surge }} if necessary.

**Utilities:**

* Use {{ site.data.talent.capacitor_totem }} and {{ site.data.talent.thunderstorm }} to gather and stun [Caustic Spiderlings](https://www.wowhead.com/npc=189233/caustic-spiderling) if necessary.
* If talented, use {{ site.data.talent.wrt }} to help your raid repositioning during intermissions.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="dathea">
<div data-toggle="collapse" data-target="#dathea-collapse" aria-expanded="true" aria-controls="dathea-collapse" class="raid-header vault_of_the_incarnates5"><h2>Dathea, Ascended</h2></div>
</div>
<div id="dathea-collapse" class="collapse" aria-labelledby="dathea" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** Single-Target, with spread Cleave and AoE

**Talents:**

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrIJtkAJINKBtkkkDAAAAAAoEQSJJECItkkmSgSQSEI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>
**Damage:**

* Use {{ site.data.talent.sk }} optimally with {{ site.data.talent.sop }} active to burst down [Thunder Caller](https://www.wowhead.com/npc=194647/thunder-caller).
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst dealing with [Conductive Mark](https://www.wowhead.com/spell=391686/conductive-mark) and [Cyclone](https://www.wowhead.com/spell=376943/cyclone).

**Defensives:**

* Use {{ site.data.talent.as }} and healing consumables as required for [Conductive Mark](https://www.wowhead.com/spell=391686/conductive-mark) and [Cyclone](https://www.wowhead.com/spell=376943/cyclone).
* Use {{ site.data.spell.healing_surge }} if necessary.

**Utilities:**

* Use {{ site.data.spell.wind_shear }} to interrupt [Diverted Essence](https://www.wowhead.com/spell=387943/diverted-essence) from [Volatile Infuser](https://www.wowhead.com/npc=197671/volatile-infuser) and [Storm Bolt](https://www.wowhead.com/spell=384292/storm-bolt) from [Thunder Caller](https://www.wowhead.com/npc=194647/thunder-caller).
* Use {{ site.data.talent.capacitor_totem }} and {{ site.data.talent.thunderstorm }} to gather and stun [Thunder Caller](https://www.wowhead.com/npc=194647/thunder-caller) if necessary.
* If talented, use {{ site.data.talent.wrt }} to help your raid dealing with [Cyclone](https://www.wowhead.com/spell=376943/cyclone).

**Added Notes:**

* {{ site.data.talent.gow }} can also be used to jump back to the boss after dealing with the adds on the platforms.

**PTR PoVs:**

* Amani: [Heroic](https://youtu.be/7gtHGKZFJWY)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="kurog_grimtotem">
<div data-toggle="collapse" data-target="#kurog_grimtotem-collapse" aria-expanded="true" aria-controls="kurog_grimtotem-collapse" class="raid-header vault_of_the_incarnates6"><h2>Kurog Grimtotem</h2></div>
</div>
<div id="kurog_grimtotem-collapse" class="collapse" aria-labelledby="kurog_grimtotem" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** Priority-Target-Cleave, occasional AoE

**Talents:**

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrUSCAJtk0oEt0SCRAAAAAAKBkUSCIg0SSaKhgQSEI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>
**Damage:**

* If talented, use {{ site.data.talent.sk }} when [Earth Breakers](https://www.wowhead.com/npc=190586/earth-breaker) are spawning.
* Focus down [Flamewrought Eradicator](https://www.wowhead.com/npc=198311/flamewrought-eradicator) (Mythic), [Frostwrought Dominator](https://www.wowhead.com/npc=198308/frostwrought-dominator) (Mythic), [Earthwrought Smasher](https://www.wowhead.com/npc=197595/earthwrought-smasher) (Mythic) and [Stormwrought Despoiler](https://www.wowhead.com/npc=198326/stormwrought-despoiler) (Mythic) whenever they are active.
* Use {{ site.data.talent.spiritwalkers_grace }} and {{ site.data.talent.gust_of_wind }} to maintain uptime whilst dealing with [Searing Carnage](https://www.wowhead.com/spell=374023/searing-carnage) (Mythic) and [Thunder Strike](https://www.wowhead.com/spell=374217/thunder-strike).

**Defensives:**

* Use {{ site.data.talent.as }} and healing consumables as required whenever [Kurog Grimtotem](https://www.wowhead.com/npc=181378/kurog-grimtotem) accumulates high stacks of either [Flame Dominance](https://www.wowhead.com/spell=396106/flame-dominance), [Frost Dominance](https://www.wowhead.com/spell=396109/frost-dominance), [Earth Dominance](https://www.wowhead.com/spell=374917/earth-dominance) or [Storm Dominance](https://www.wowhead.com/spell=396113/storm-dominance) in combination with other abilities, when soaking [Thunder Strike](https://www.wowhead.com/spell=374217/thunder-strike) or when targeted by [Lethal Current](https://www.wowhead.com/spell=391696/lethal-current).
* Use {{ site.data.spell.healing_surge }} if necessary.

**Utilities:**

* Use {{ site.data.spell.wind_shear }} to interrupt [Frost Binds](https://www.wowhead.com/spell=374623/frost-binds) from [Frozen Destroyer](https://www.wowhead.com/npc=190686/frozen-destroyer) and [Flame Bolt](https://www.wowhead.com/spell=376063/flame-bolt) from [Smoldering Hellion](https://www.wowhead.com/npc=191510/smoldering-hellion).
* If talented, use {{ site.data.talent.wrt }} to help your raid repositioning whenever you are switching altars.

**PTR PoVs:**

* Amani: [Heroic](https://youtu.be/_NcuuaTVxlg)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="broodkeeper_diurna">
<div data-toggle="collapse" data-target="#broodkeeper_diurna-collapse" aria-expanded="true" aria-controls="broodkeeper_diurna-collapse" class="raid-header vault_of_the_incarnates7"><h2>Broodkeeper Diurna</h2></div>
</div>
<div id="broodkeeper_diurna-collapse" class="collapse" aria-labelledby="broodkeeper_diurna" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss Fight Profile:** Single-Target or AoE, depending on assignment

**Talents for boss damage:**

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSr0SCAJlkUoEl0SCRAAAAAAKBkUSCaCItkkSKhAkQgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

**Talents for Adds damage:**

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrIJtkAJtINKRLNJEAAAAAAKBkUSCaCItkkSKhAkQgA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

**Damage:**

* Use {{ site.data.talent.sk }} to burst down add waves during Phase 1.
* Focus down [Juvenile Frost Proto-Dragon](https://www.wowhead.com/npc=191222/juvenile-frost-proto-dragon) whenever they are active.
* Use {{ site.data.talent.swg }} and {{ site.data.talent.gow }} to maintain uptime whilst targeted by [Empowered Greatstaff's Wrath](https://www.wowhead.com/spell=380483/empowered-greatstaffs-wrath).

**Defensives:**

* Use {{ site.data.talent.as }} and healing consumables as required for overlaps of [Chilling Tantrum](https://www.wowhead.com/spell=375457/chilling-tantrum), [Icy Shroud](https://www.wowhead.com/spell=388716/icy-shroud) and potentially [Clutchwatcher's Rage](https://www.wowhead.com/spell=375829/clutchwatchers-rage).
* If talented, keep {{ site.data.talent.earth_shield }} up, use it as a movement filler throughout the fight.
* Use {{ site.data.spell.healing_surge }} if necessary.

**Utilities:**

* Use {{ site.data.spell.wind_shear }} to interrupt [Ice Barrage](https://www.wowhead.com/spell=375716/ice-barrage) from [Primalist Mage](https://www.wowhead.com/npc=191206/primalist-mage) and [Static Jolt](https://www.wowhead.com/spell=375653/static-jolt) from [Drakonid Stormbringer](https://www.wowhead.com/npc=191232/drakonid-stormbringer).
* Use {{ site.data.talent.capacitor_totem }} and {{ site.data.talent.thunderstorm }} to gather and stun adds waves if necessary.
* Use {{ site.data.talent.spirit_walk }} to free yourself from [Frozen Shroud](https://www.wowhead.com/spell=388918/frozen-shroud).
* If talented, use {{ site.data.talent.wrt }} to help your raid reposition when new add waves are about to spawn.

**PTR PoVs:**

* Amani: [Heroic](https://youtu.be/fsYS1ZYz9MQ)

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="raszageth">
<div data-toggle="collapse" data-target="#raszageth-collapse" aria-expanded="true" aria-controls="raszageth-collapse" class="raid-header vault_of_the_incarnates8"><h2>Raszageth, the Storm-Eater</h2></div>
<div class=""></div>
</div>
<div id="raszageth-collapse" class="collapse" aria-labelledby="raszageth" data-parent="#accordion">
<div class="card-body" markdown="1">

**Boss fight profile:** Single Target, occasional Burst and AoE

**Talents:**
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgUSrIJtkAJINKBtkkkDAAAAAAoEQSJJoJg0SSapEQCJEI?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

**Damage:**
* During intermissions, use {{ site.data.talent.sk }} and {{ site.data.talent.lmt }} to burst the adds.
* In P2, keep offensive CDs for [Stormsurge](https://www.wowhead.com/spell=387261/stormsurge), notably {{ site.data.talent.sk }}.
* Use {{ site.data.talent.swg }} to maintain uptime whilst dealing with [Static Charge](https://www.wowhead.com/spell=381615/static-charge) (P1 bomb) and [Fulminating Charge](https://www.wowhead.com/spell=377467/fulminating-charge) (P2 & P3 Bomb).

**Defensives:**
* Use {{ site.data.talent.as }}, or even {{ site.data.item.potion_rhp }} and {{ site.data.externals.hs }} if needed, when away from the raid to drop [Static Charge](https://www.wowhead.com/spell=381615/static-charge) (P1 bomb) and [Fulminating Charge](https://www.wowhead.com/spell=377467/fulminating-charge) (P2 & P3 bomb).
* Use {{ site.data.spell.healing_surge }} if necessary.
* If talented, use {{ site.data.talent.ag }} to help healers, notably during [Stormsurge](https://www.wowhead.com/spell=387261/stormsurge) (P2).

**Utilities:**

* Use {{ site.data.talent.capacitor_totem }}, {{ site.data.talent.thunderstorm }}, {{ site.data.spell.wind_shear }} and {{ site.data.talent.purge }} to destroy [Volatile Spark](https://www.wowhead.com/npc=194999/volatile-spark) rapidly.
* In P2, {{ site.data.talent.thunderous_paws }} dispels [Fulminating Charge](https://www.wowhead.com/spell=377467/fulminating-charge) slow, allowing you to quickly move out. Try to not use {{ site.data.spell.ghost_wolf }} during P2 and P3, except if you get that debuff.
* In P2, {{ site.data.externals.demonic_gateway }} can be used to trivialize the 1st and the 4th [Tempest Wing](https://www.wowhead.com/spell=385574/tempest-wing). Remember to buy {{ site.data.externals.gateway_control_shard }} in Valdrakken.
* In P2 and P3, use {{ site.data.talent.gust_of_wind }} to rapidly go through [Tempest Wing](https://www.wowhead.com/spell=385574/tempest-wing).
* If talented, use {{ site.data.talent.wrt }} to help your raid repositioning during intermissions, [Hurricane Wing](https://www.wowhead.com/spell=377612/hurricane-wing) (P1) and [Tempest Wing](https://www.wowhead.com/spell=385574/tempest-wing) (P2 & P3).
* {{ site.data.spell.bl }} usage :
  - During Normal and Heroic progress, consider using it on the 2nd [Stormsurge](https://www.wowhead.com/spell=387261/stormsurge) shield in P2.
  - If your fight is longer than 10 minutes, use {{ site.data.spell.bl }} on pull and whenever available in P3.
  - Otherwise, use it on the 2nd [Stormsurge](https://www.wowhead.com/spell=387261/stormsurge) shield in P2 (preferred) or on pull (fire and forget).

**How to deal with [Hurricane Wing](https://www.wowhead.com/spell=377612/hurricane-wing) in Mythic**

In mythic mode, [Static Charge](https://www.wowhead.com/spell=381615/static-charge) does not drop a thunder pool that can be used to counter the push back of [Hurricane Wing](https://www.wowhead.com/spell=377612/hurricane-wing). It means that you need to counter the winds yourself. Here is a way to counter the mechanic.  
*Note: {{ site.data.talent.gust_of_wind }} is best used once the wind is over to quickly come back into melee range or even to jump back onto the platform.*
1. {{ site.data.talent.swg }} before, {{ site.data.talent.gust_of_wind }} after.
2. {{ site.data.externals.demonic_gateway }} during, {{ site.data.talent.gust_of_wind }} after.
3. - With an Evoker's {{ site.data.externals.time_spiral }}: {{ site.data.talent.swg }} before, {{ site.data.spell.ghost_wolf }} if needed during, {{ site.data.talent.gust_of_wind }} after.
   - Without {{ site.data.externals.time_spiral }}: {{ site.data.spell.ghost_wolf }} before, {{ site.data.talent.gust_of_wind }} after.
4. {{ site.data.talent.swg }} and {{ site.data.spell.ghost_wolf }} before, {{ site.data.talent.gust_of_wind }} after.
5. {{ site.data.spell.ghost_wolf }} before, {{ site.data.externals.demonic_gateway }} during, {{ site.data.talent.gust_of_wind }} after.

Of course, this is just a way to do it. Feel free to experiment with your movement CDs to find the most suitable way to beat it.
</div>
</div>
</div>
