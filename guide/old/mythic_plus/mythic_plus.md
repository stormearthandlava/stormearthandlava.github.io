---
layout: page
title: "Mythic+ Guide"
last_update: 05/09/2022
game_version: 9.2.7 Shadowlands
authors: Altenna, Eokira
toc: false
---

# Introduction

This guide was made possible by:

* Altenna (Discord: JudgeJames#0001 \| [Twitch](https://www.twitch.tv/judgejames) \| [Twitter](https://twitter.com/_judgejames_))
* Amani (Discord: Amani#0001 \| [Discord Server](https://discordapp.com/invite/zTQhBn8) \| [YouTube](https://www.youtube.com/channel/UC5IikzgR1TeED-DxPLqISHg))
* Eokira (Discord: Eokira#7823)
* Gaka (Discord: Gaka#7410)
* HawkCorrigan (Discord: HawkCorrigan#1811)

Information on this page is written with the assumption that you understand the new priority list, talents, and legendary items introduced in Shadowlands. If you have not done so, we highly recommend reading our other resources to learn about them!

This guide is intended to help you identify critical mobs and abilities as well as improve your mechanical literacy in using your toolkit as an Elemental Shaman in each dungeon. If you have suggestions to improve the information in this guide please contact Eokira#7823 using the [Earthshrine Elemental channel](https://discord.gg/pGkPDzh7rP) or the [Storm, Earth & Lava discord](https://discord.gg/y5dUf3PWrU).

# Talents and Legendaries

For novice Elemental Shamans without an active {{ site.data.item.t28_2 }}/{{ site.data.item.t28_4 }} or without [Unity](https://www.wowhead.com/spell=364738/unity), the setup below is great for players starting out as well as for +15 keys and beyond:

* **15:** {{ site.data.spell.echo_of_the_elements }}
* **25:** {{ site.data.spell.aftershock }}
* **30:** {{ site.data.spell.spirit_wolf }} **or** {{ site.data.spell.static_charge }}
* **35:** {{ site.data.spell.master_of_the_elements }} **or** {{ site.data.spell.storm_elemental }}
* **40:** {{ site.data.spell.ancestral_guidance }} **or** {{ site.data.spell.natures_guardian }}
* **45:** {{ site.data.spell.primal_elementalist }}
* **50:** {{ site.data.spell.stormkeeper }}
* **Legendary:** {{ site.data.expansion_feature.sl.legendary.eogs }} **or** {{ site.data.expansion_feature.sl.legendary.night_fae }}

**Double Legendary**
When [Unity](https://www.wowhead.com/spell=364738/unity) is equipped you will be able to utilise 2 Legendary effects, one of them will be your current Covenant's specific Legendary:
* Night Fae gains {{ site.data.expansion_feature.sl.legendary.night_fae }}
* Venthyr gains {{ site.data.expansion_feature.sl.legendary.venthyr }}
* Kyrian gains {{ site.data.expansion_feature.sl.legendary.kyrian }}
* Necrolord gains {{ site.data.expansion_feature.sl.legendary.necrolord }}
This opens up some opportunities for M+ in conjuction with the {{ site.data.item.t28_4 }} centred around the uptime of {{ site.data.spell.se }}.
* Necrolord with {{ site.data.expansion_feature.sl.legendary.skybreaker }}
* Venthyr with {{ site.data.expansion_feature.sl.legendary.skybreaker }}
* Kyrian with {{ site.data.expansion_feature.sl.legendary.eogs }} judging Legendaries by their raw strength, {{ site.data.expansion_feature.sl.legendary.eogs }} and {{ site.data.expansion_feature.sl.legendary.kyrian }} are our strongest choices. Being able to use them both together is promising.

**Which setup to use?**
The default suggestion when you have both [Unity](https://www.wowhead.com/spell=364738/unity) and [Tier Set](https://www.wowhead.com/item-set=1499/theurgic-starspeakers-regalia) will be to use:
* Night Fae with {{ site.data.expansion_feature.sl.legendary.eogs }} and {{ site.data.spell.se }}

This serves as a solid baseline without relying too much on how your dungeons are routed. The performance will vary between the setups on a variety of factors so it is **very** valuable to experiment!

* Necrolord with {{ site.data.expansion_feature.sl.legendary.eogs }} and {{ site.data.spell.se }} **or** {{ site.data.expansion_feature.sl.legendary.dre }} with *either* {{ site.data.spell.mote }} (easier to play) or {{ site.data.spell.se }} (which remains better at AoE'ing). Any {{ site.data.expansion_feature.sl.legendary.dre }} setup will be subject to RNG, you will also have to decide how much you like to gamble as technically speaking the highest expected value when AoE'ing (read: 5+ targets) is to completely ignore this legendary outside of {{ site.data.spell.primordial_wave }} windows and movement globals. If you choose to gamble during AoE thats your business.

* Necrolord with {{ site.data.expansion_feature.sl.legendary.sfd }} and {{ site.data.spell.se }}. Doing well as key levels go up, {{ site.data.expansion_feature.sl.legendary.sfd }} allows for 100% uptime on {{ site.data.spell.se }} which is potent for AoE and single target. At least some of the uptime increase will be overkill however, so if you could have also achieved 100% uptime by other means then the value of this choice goes down - mainly its core strength is the consistency and flexibility it offers.

With most of the dungeon pool consisting of low-target pulls in the early stages of the season (expect this to change a bit as people become more knowledgeable about how to handle specific mobs and strategies are formed allowing larger pulls in some dungeons/areas of dungeons), using {{ site.data.expansion_feature.sl.legendary.dre }} has become more attractive. It is important to note that {{ site.data.expansion_feature.sl.legendary.dre }} builds continue to use {{ site.data.spell.sk }} in dungeons, although you may consider swapping your third potency conduit slot to {{ site.data.conduit.shake_the_foundations }} as it performs at full power in aoe when not using {{ site.data.expansion_feature.sl.legendary.eogs }}.

The recommended Covenant choices for M+ content are Night Fae and Necrolord:

* Night Fae remains the default choice for overall value across key levels and dungeon routes, the value provided is easy to capitalise on.
   - Your Soulbind choices for Night Fae are:
      * Korayn for {{ site.data.expansion_feature.sl.soulbinds.first_strike }}. This provides a large amount of value across an entire dungeon.
      * Dreamweaver for {{ site.data.expansion_feature.sl.soulbinds.field_of_blossom }}. This provides additional power directly after using {{ site.data.spell.fae_transfusion }} and has synergy with {{ site.data.expansion_feature.sl.legendary.night_fae }} allowing for more frequent burst windows applicable to both AoE and Single Target.

* Necrolord remains competitive and lends itself to the {{ site.data.expansion_feature.sl.legendary.dre }} setup well.
   - Your Soulbind choices for Necrolord are:
      * Plague-Deviser Marileth for increased benefits surrounding {{ site.data.spell.fleshcraft }}, the strength of {{ site.data.expansion_feature.sl.soulbinds.preemptive_strike }} should not go unnoticed although when using {{ site.data.expansion_feature.sl.legendary.dre }} it would be traded for {{ site.data.conduit.shake_the_foundations }}.
      * Bonesmith Heirmir for passive Intellect buff {{ site.data.expansion_feature.sl.soulbinds.forgeborn_reveries }} and {{ site.data.expansion_feature.sl.soulbinds.marrowed_gemstone }}. (Note: generally you would find yourself using Marileth, this is mostly here for reference.)

To assist those experimenting with other Covenant options:
* Kyrian
    - Forgelite Prime Mikanikos for {{ site.data.expansion_feature.sl.soulbinds.hammer_of_genesis }} and [Effusive Anima Accelerator](https://www.wowhead.com/spell=352188/effusive-anima-accelerator?spellModifier=137038).
* Venthyr
    - When using {{ site.data.expansion_feature.sl.legendary.skybreakers }} the value of {{ site.data.soulbind.wasteland_propriety }} increases making it worthwhile to experiment with Theotar the Mad Duke!
    - Otherwise using Nadja the Mistblade.

For additional information, please visit our [Talents](https://stormearthandlava.com/guide/general/talents.html) and [Legendaries](https://stormearthandlava.com/guide/general/legendaries.html) pages.
Don't forget to check out Additional Resources at the bottom of this page!

# Miscellaneous Tips

* Although strategies are listed for mobs and bosses, communicating with your group how each pull should be executed is more important. Some suggestions may not be applicable depending on your group's strategy.

* {{ site.data.spell.earth_elemental }} is a potent ability best used to soak damage away from the tank or as an emergency button to avoid a party wipe. Communicate with your tank on using {{ site.data.spell.earth_elemental }} for challenging trash packs as well as remind your healer to keep the {{ site.data.spell.earth_elemental }} healthy as needed. Remember that with {{ site.data.spell.primal_elementalist }}, you can manually move the pet, and you have access to an additional defensive with {{ site.data.spell.harden_skin }} and single-target stun with {{ site.data.spell.pulverize }}. However, keep in mind that you cannot have {{ site.data.spell.earth_elemental }} and {{ site.data.spell.fire_elemental }} summoned at the same time with {{ site.data.spell.primal_elementalist }}.

* Often times, your tank may need to kite. Remember the kiting tools at your disposal ({{ site.data.spell.earthbind_totem }}, {{ site.data.spell.frost_shock }}, {{ site.data.spell.capacitor_totem }}, {{ site.data.spell.thunderstorm }}) to distance trash packs away from your tank.

* Routinely support your healer and your group with healing abilities and {{ site.data.spell.cleanse_spirit }}. Note that the healers that cannot remove Curses are: Discipline Priest, Holy Priest, Holy Paladin, and Mistweaver Monk.

* Plan with your group in advance on where to use {{ site.data.spell.bloodlust }}.

* [Learn to log your dungeon runs!](https://www.warcraftlogs.com/help/start) Warcraft Logs filters dungeons with pull-by-pull analyses and records replays of dungeon runs. Having logs available to share are helpful for you to receive actionable feedback.

# Affixes

**Level 4:**

* [Bolstering](https://shadowlands.wowhead.com/affix=7/bolstering): Damage trash packs down as evenly as you can. Swap to priority damage rotation for any lethal mobs or if mob health within trash packs are uneven.
* [Bursting](https://shadowlands.wowhead.com/affix=11/bursting): Support your party members and use your healing abilities to mitigate the [Bursting](https://shadowlands.wowhead.com/affix=11/bursting) debuff. Use {{ site.data.spell.as }} as needed if stacks are high.
* [Inspiring](https://shadowlands.wowhead.com/affix=122/inspiring): Crowd control mobs with [Inspiring Presence](https://shadowlands.wowhead.com/spell=343502/inspiring-presence) with {{ site.data.spell.hex }} as needed and when possible.
* [Raging](https://shadowlands.wowhead.com/affix=6/raging): Be ready to use your kiting toolkit to support your tank when needed. Consider using {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.stormkeeper }} to finish [Raging](https://shadowlands.wowhead.com/affix=6/raging) mobs more safely and quickly.
* [Sanguine](https://shadowlands.wowhead.com/affix=8/sanguine): Damage trash packs down as evenly as you can to lessen time spent in Sanguine, but be sure to not slow or stun mobs dying unevenly. Use {{ site.data.spell.thunderstorm }} as needed to knock mobs out of [Sanguine](https://shadowlands.wowhead.com/affix=8/sanguine).
* [Spiteful](https://shadowlands.wowhead.com/affix=123/spiteful): As mobs are dying, be ready to use your kiting toolkit to support your melee players. Consider taking advantage of [Spiteful Shade](https://shadowlands.wowhead.com/npc=174773/spiteful-shade) as additional {{ site.data.spell.chain_lightning }} or {{ site.data.spell.flame_shock }} targets.

**Level 7:**

* [Explosive](https://shadowlands.wowhead.com/affix=13/explosive): [Explosive](https://shadowlands.wowhead.com/affix=13/explosive) orbs can be destroyed in a single {{ site.data.spell.frost_shock }} global. This will be your most efficient tool to deal with them as your other abilities are more valuable for trash.
* [Grievous](https://shadowlands.wowhead.com/affix=12/grievous): Remember that direct heals remove one stack of [Grievous Wound](https://shadowlands.wowhead.com/spell=240559/grievous-wound). Support your party members with {{ site.data.spell.healing_surge }} and {{ site.data.spell.chain_heal }} as needed.
* [Necrotic](https://shadowlands.wowhead.com/affix=4/necrotic): Be ready to use your kiting toolkit to support your tank when needed. {{ site.data.spell.earth_elemental }} is also helpful to help your tank control [Necrotic Wound](https://shadowlands.wowhead.com/spell=209858/necrotic-wound) stacks.
* [Quaking](https://shadowlands.wowhead.com/affix=14/quaking): Maintain your distance from party members, and be mindful about canceling casts if [Quake](https://shadowlands.wowhead.com/spell=240447/quake) overlaps with {{ site.data.spell.swg }}.
* [Storming](https://shadowlands.wowhead.com/affix=124/storming): Maintain your distance from mobs to avoid [Storming](https://shadowlands.wowhead.com/affix=124/storming). Use {{ site.data.spell.swg }} as needed in tight spaces or when maneuvering any mechanics.
* [Volcanic](https://shadowlands.wowhead.com/affix=3/volcanic): Watch your feet. Use {{ site.data.spell.swg }} as needed to maintain your damage uptime while avoiding [Volcanic](https://shadowlands.wowhead.com/affix=3/volcanic) plumes.

**Seasonal Affix:**

* [Shrouded](https://www.wowhead.com/guides/shrouded-affix-shadowlands-mythic-plus-season-4-disguised-dreadlords) is the new Seasonal Affix for Season Four of Shadowlands!
   - Pick between [Critical Strike](https://www.wowhead.com/spell=373108/bounty-critical-strike), [Haste](https://www.wowhead.com/spell=373113/bounty-haste), [Versatility](https://www.wowhead.com/spell=373121/bounty-versatility), or [Mastery](https://www.wowhead.com/spell=373116/bounty-mastery) by talking to an NPC at the beginning of each dungeon, gaining one stack of the appropriate buff. Note: If no choice is made the default buff is [Versatility](https://www.wowhead.com/spell=373121/bounty-versatility).
      - Using [Haste](https://www.wowhead.com/spell=373113/bounty-haste) is more universally valuable as it maintains high contribution in all fight profiles (Single Target, Funnel, and AoE).
      - If you *only* desire AoE damage then [Critical Strike](https://www.wowhead.com/spell=373108/bounty-critical-strike) would offer the most for that particular scenario but is notably worse on Single Target.
      - Due to only really impacting single target and funnel via {{ site.data.spell.lvb }}, and {{ site.data.spell.cl }} benefits from 33% of your character sheet Mastery value, it is not recommended to choose [Mastery](https://www.wowhead.com/spell=373116/bounty-mastery). In addition, the rating granted by this buff is subject to [Diminishing Returns](https://www.wowhead.com/guides/diminishing-returns-on-secondary-stats-in-world-of-warcraft).
      - If you reach a point in your key pushes where you require additional defensive value, you may consider [Versatility](https://www.wowhead.com/spell=373121/bounty-versatility) - it is not generally recommended as the stacks provide 1% as opposed to the other stats providing 2%.
   - Stacks are gained by finding and defeating Dreadlords!
        - Certain enemies will show the [Disguised](https://www.wowhead.com/spell=373011/disguised) buff, meaning they are a Dreadlord! The locations of [Disguised](https://www.wowhead.com/spell=373011/disguised) enemies is consistent from run-to-run.

* [Nathrezim Infiltrators](https://www.wowhead.com/npc=189878/nathrezim-infiltrator) grant one stack of your chosen stat buff when defeated. In addition, you will receive a [30% Health and Mana restore](https://www.wowhead.com/spell=373981/bounty-payment) over five seconds.
    - [Nathrezim Infiltrators](https://www.wowhead.com/npc=189878/nathrezim-infiltrator) have the following abilities:
         - [Vampiric Claws](https://www.wowhead.com/spell=373364/vampiric-claws) try to make sure you are not the one tanking the [Infiltrator!](https://www.wowhead.com/npc=189878/nathrezim-infiltrator)
         - [Carrion Swarm](https://www.wowhead.com/spell=373429/carrion-swarm) try to avoid the frontal cone! It has a longer range than you would expect, standing closer to the [Nathrezim Infiltrator](https://www.wowhead.com/npc=189878/nathrezim-infiltrator) makes it easier to side-step!
         - [Nightmare Cloud](https://www.wowhead.com/spell=373370/nightmare-cloud) try to avoid the cloud or you will be sent to [sleep!](https://www.wowhead.com/spell=373391/nightmare) If your group members could not resist the temptation of the clouds, {{ site.data.spell.tremor_totem }} should come in handy!

* One Dreadlord in every dungeon will turn into [Zul'gamux](https://www.wowhead.com/npc=190128/zulgamux) whom grants three stacks of your chosen stat buff when defeated. In addition, you will receive a [100% Health and Mana restore](https://www.wowhead.com/spell=374300/restoration) over 5 seconds.
     - [Zul'gamux](https://www.wowhead.com/npc=190128/zulgamux) has the following abilities:
          - [Shadow Claws](https://www.wowhead.com/spell=373509/shadow-claws) this is a magic debuff applied to the main target of the Dreadlord, make sure it isn't you! Your healer can dispel it.
          - [Blood Barrier](https://www.wowhead.com/spell=373724/blood-barrier) generates a shield which is increased by damage dealt to the players, deal damage to break the shield as early as possible! Interrupts do **not** work whilst the shield is active!
          - [Shadow Eruption](https://www.wowhead.com/spell=373513/shadow-eruption) is a ground-effect that will deal large damage and apply a 70% healing received reduction at the end of the cast if you are still within its range!
          - [Hypnosis Bats](https://www.wowhead.com/spell=373552/hypnosis-bat) will spawn periodically and begin channelling a [Hypnosis](https://www.wowhead.com/spell=373570/hypnosis) effect, if the Bats are not killed before this channel is finished then the target will be placed into a [Shadowy Barrier](https://www.wowhead.com/spell=373607/shadowy-barrier) that needs to be damaged to be removed! Note: only one disrupt is required to prevent the initial [Hypnosis](https://www.wowhead.com/spell=373570/hypnosis) cast, for Elemental Shamans you can use {{ site.data.spell.hex }} or {{ site.data.spell.capacitor_totem }}. After disrupting the initial cast, the [Hypnosis Bat](https://www.wowhead.com/spell=373552/hypnosis-bat) will despawn so no further damage is required on it.

# Dungeons
<p style="color:red">Click on a dungeon banner to expand it.</p>

<div class="dungeon-accordion">
  <div id="accordion">
    <div class="card">
        <div class="card-header" id="streets">
            <div data-toggle="collapse" data-target="#streets-collapse" aria-expanded="true" aria-controls="streets-collapse" class="dungeon-header streets"><h2>Tazavesh: Streets of Wonder</h2></div>
        </div>
        <div id="streets-collapse" class="collapse" aria-labelledby="streets" data-parent="#accordion">
          <div class="card-body" markdown="1">

**{{ site.data.dungeon.streets.customs_security }}**
* Make sure to dodge {{ site.data.dungeon.streets.disruption_grenade }} swirlies.
* Use {{ site.data.spell.purge }} to remove {{ site.data.dungeon.streets.hard_light_baton }} from {{ site.data.dungeon.streets.customs_security }}.

**{{ site.data.dungeon.streets.armored_overseer }}**
* Make sure to dodge {{ site.data.dungeon.streets.beam_splicer }}.

**{{ site.data.dungeon.streets.interrogation_specialist }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.streets.stasis_beam }}.

**{{ site.data.dungeon.streets.support_officer }}**
* Either use {{ site.data.spell.wind_shear }} to interrupt the cast of {{ site.data.dungeon.streets.hard_light_barrier }} or use {{ site.data.spell.purge }} to remove it!

## {{ site.data.dungeon.streets.zophex }}
* Dodge the swirlies from {{ site.data.dungeon.streets.armed_security }}.
* Use {{ site.data.spell.swg }} as needed to adjust to {{ site.data.dungeon.streets.rotary_body_armor }}.
* Move away from {{ site.data.dungeon.streets.zophex }} if {{ site.data.dungeon.streets.interrogation }} is cast on you; if you are a Necrolord with Plague-Deviser Marileth you can use {{ site.data.spell.fleshcraft }} to immune this mechanic as the cast finishes. If {{ site.data.dungeon.streets.interrogation }} is cast on a party member, make sure you are not stood between them and {{ site.data.dungeon.streets.zophex }}, DPS the cage to break them out!
* {{ site.data.dungeon.streets.impound_contraband }} causes your weapon to drop to the floor, run over the weapon to pick it up again!

---

**{{ site.data.dungeon.streets.ancient_core_hound }}**
* If {{ site.data.dungeon.streets.ancient_dread }} cast is allowed to finish, use {{ site.data.spell.cleanse_spirit }} to dispel your group!
* Both {{ site.data.dungeon.streets.ancient_dread }} and {{ site.data.dungeon.streets.lava_breath }} are interruptible with {{ site.data.spell.wind_shear }}.

**{{ site.data.dungeon.streets.market_peacekeeper }}**
* Use {{ site.data.spell.hex }} or {{ site.data.spell.capacitor_totem }} to stop {{ site.data.dungeon.streets.phalanx_field }}.
* Stay within 10 yards of {{ site.data.dungeon.streets.market_peacekeeper }} or they can cast {{ site.data.dungeon.streets.quelling_strike }} on you, if this happens whilst casting you will be locked out for four seconds.

**{{ site.data.dungeon.streets.veteran_sparkcaster }}**
* {{ site.data.dungeon.streets.hyperlight_salvo }} is the most important cast to prevent, make sure to coordinate with your group to prevent these!
* {{ site.data.dungeon.streets.scintillate }} deals damage and leaves an increased arcane damage taken debuff so multiple casts going through should be prevented!

## The Grand Menagerie

* When afflicted with {{ site.data.dungeon.streets.gluttony }}, you can soak the {{ site.data.dungeon.streets.volatile_anima }} created by {{ site.data.dungeon.streets.venting_protocol }}. Try not to stand next to your party members as {{ site.data.dungeon.streets.gluttony }} also causes you to pulse AoE damage around you in a small circle.
* {{ site.data.dungeon.streets.flagellation_protocol }} is easily stopped by using {{ site.data.spell.purge }} to remove the shield and {{ site.data.spell.wind_shear }} to instantly interrupt the cast!
* Run away from {{ site.data.dungeon.streets.venza_goldfuse }} to survive {{ site.data.dungeon.streets.whirling_annihilation }}.
* When afflicted by {{ site.data.dungeon.streets.chains_of_damnation }}, it must be either killed or removed by effects like {{ site.data.externals.blessing_of_freedom }} or {{ site.data.externals.tigers_lust }}.

---

## Myza's Oasis

**{{ site.data.dungeon.streets.brawling_patron }}**
* Aim to kill these before they reach 100 rage to avoid {{ site.data.dungeon.streets.rowdy }}.

**{{ site.data.dungeon.streets.disruptive_patron }}**
* Aim to kill these before they reach 100 rage to avoid {{ site.data.dungeon.streets.rowdy }}.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.streets.teleport }}, {{ site.data.dungeon.streets.hyperlight_bolt }}, and {{ site.data.dungeon.streets.suppression }}.

**{{ site.data.dungeon.streets.oasis_security }}**
   - Aim to kill these before they reach 100 rage to avoid {{ site.data.dungeon.streets.rowdy }}.
   - Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.streets.menacing_shout }}.

**Environmental**
* Make sure to avoid the green swirly from {{ site.data.dungeon.streets.rotten_food }}, it hurts!

## {{ site.data.dungeon.streets.zogron }}
* Run away from {{ site.data.dungeon.streets.suppression_spark }} when cast. {{ site.data.spell.ghost_wolf }} or the Extra Action Button from your instrument can be useful!
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.streets.menacing_shout }}.
* Avoid standing in-front of {{ site.data.dungeon.streets.zogron }} when they are casting {{ site.data.dungeon.streets.crowd_control }} as it deflects damage and the end of the cast is a frontal attack!

---

**{{ site.data.dungeon.streets.overloaded_mailemental }}**
* Interrupt or dispel {{ site.data.dungeon.streets.spam_filter }}.
* When {{ site.data.dungeon.streets.overloaded_mailemental }} die, they leave behind a purple zone of Haste you can stand in!

**{{ site.data.dungeon.streets.defective_sorter }}**
* Prevent these enemies from casting {{ site.data.dungeon.streets.open_cage }} by using {{ site.data.spell.hex }} or {{ site.data.spell.capacitor_totem }}.

## {{ site.data.dungeon.streets.p_o_s_t_master }}
* Pick up the {{ site.data.dungeon.streets.unstable_goods }} and throw them into an active Delivery Chute (Denoted by the wind animation!). {{ site.data.spell.ghost_wolf }} can make this easier.
* Use {{ site.data.spell.as }} as needed when {{ site.data.dungeon.streets.fan_mail }} or {{ site.data.dungeon.streets.money_order }} are cast.
* Use {{ site.data.spell.swg }} as needed to position for soaking {{ site.data.dungeon.streets.hazardous_liquids }} or {{ site.data.dungeon.streets.money_order }}.

---

**{{ site.data.dungeon.streets.commander_zofar }}**
* Ranged and healer party members should try to split on either side of the low walls present where {{ site.data.dungeon.streets.commander_zofar }} is positioned. This will make keeping distance between the two people afflicted with {{ site.data.dungeon.streets.lethal_force }} easier. If you do this without the wall, do not forget to use {{ site.data.spell.swg }}. If you fail to avoid it, the damage is high enough to warrant using {{ site.data.spell.as }}.
* Dodge {{ site.data.dungeon.streets.shock_mines }} that are placed around you.

## {{ site.data.dungeon.streets.soazmi }}
* Surviving is more important than dealing damage, if you are going to struggle moving to the correct {{ site.data.dungeon.streets.relocator }} then do not hesitate to use {{ site.data.spell.ghost_wolf }} or {{ site.data.spell.soulshape }} to successfully avoid {{ site.data.dungeon.streets.shuri }}.
* Two interrupts are required to deal with {{ site.data.dungeon.streets.double_technique }}, the first can be done near instantly, the second should wait until close to the end of the cast to buy time to dps.
* Staying loosely spread can help reduce the group damage taken from {{ site.data.dungeon.streets.quickblade }}, but be aware of remaining in the same section as your group when {{ site.data.dungeon.streets.divide }} is being cast.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="gambit">
<div data-toggle="collapse" data-target="#gambit-collapse" aria-expanded="true" aria-controls="gambit-collapse" class="dungeon-header gambit"><h2>Tazavest: Soleah's Gambit</h2></div>
</div>
<div id="gambit-collapse" class="collapse" aria-labelledby="gambit" data-parent="#accordion">
<div class="card-body" markdown="1">

**{{ site.data.dungeon.gambit.murkbrine_scalebinder }}**
* You can use {{ site.data.spell.capacitor_totem }}, {{ site.data.spell.hex }}, or {{ site.data.spell.thunderstorm }} to *stop* {{ site.data.dungeon.gambit.invigorating_fish_stick }}.

**{{ site.data.dungeon.gambit.murkbrine_shellcrusher }}**
* You can use {{ site.data.spell.capacitor_totem }}, {{ site.data.spell.hex }}, or {{ site.data.spell.thunderstorm }} to *stop* {{ site.data.dungeon.gambit.cry_of_mrrggllrrgg }}.

**{{ site.data.dungeon.gambit.coastwalker_goliath }}**
* Use {{ site.data.spell.as }} as appropriate to your key level and current affixes on the second stack of {{ site.data.dungeon.gambit.undertow }}. If your group will take more casts of {{ site.data.dungeon.gambit.undertow }} its important to note that you cannot have more than two stacks, so the damage will not scale higher however they can be large hits!

**{{ site.data.dungeon.gambit.stormforged_guardian }}**
* Stand at max range to avoid {{ site.data.dungeon.gambit.charged_pulse }} area of effect.
* You can easily sidestep {{ site.data.dungeon.gambit.crackle }} if you notice them aimed at you.

## {{ site.data.dungeon.gambit.hylbrande }}
* Use {{ site.data.spell.swg }} during {{ site.data.dungeon.gambit.purged_by_fire }}.
* Use {{ site.data.spell.thunderstorm }} to group spawned {{ site.data.dungeon.gambit.vault_purifier }} with the boss to more easily deal with them.
* Interrupt or Stop {{ site.data.dungeon.gambit.valorous_bolt }} and {{ site.data.dungeon.gambit.empowered_defense }}.
* There is a very useful Weakaura for this fight that makes the colour match game simple even when pugging! [Find it here!](https://wago.io/TazaveshConsole).

---

**{{ site.data.dungeon.gambit.hourglass_tidesage }}**
* Interrupt {{ site.data.dungeon.gambit.brackish_bolt }}.
* Sidestep {{ site.data.dungeon.gambit.tidal_burst }} allowing more interrupts for {{ site.data.dungeon.gambit.brackish_bolt }}.

**{{ site.data.dungeon.gambit.burly_deckhand }}**

* Stop {{ site.data.dungeon.gambit.super_saison }} where possible, particularly if your group comp does not have an Enrage Dispel!
* Avoid being close to them during {{ site.data.dungeon.gambit.haymaker }} casts, this can hit non-tank targets if they are out of range!

## {{ site.data.dungeon.gambit.timecapn_hooktail }}

* Use {{ site.data.spell.swg }} to continue DPS while affected by {{ site.data.dungeon.gambit.anchor_shot }}
* Particularly for {{ site.data.expansion_feature.sl.legendary.dre }} and/or Necrolord builds you *can* use the spawned adds to increase your {{ site.data.spell.fs }} count however dps to the adds themselves is pointless when the tank is able to catch them in the {{ site.data.dungeon.gambit.infinite_breath }} (this also reduces the funnel benefit as the adds tend to die very quickly).

---

**{{ site.data.dungeon.gambit.devoted_accomplice }}**
* Interrupt {{ site.data.dungeon.gambit.reinvigorate }}.

**{{ site.data.dungeon.gambit.focused_ritualist }}**

* Interrupt {{ site.data.dungeon.gambit.unstable_rift }}. If no interrupts are available, Stopping the ability via other CC abilities like {{ site.data.spell.capacitor_totem }}, {{ site.data.spell.hex }} will also put this cast on cooldown.

**{{ site.data.dungeon.gambit.adorned_starseer }}**

* Pay attention to which direction they are facing when {{ site.data.dungeon.gambit.drifting_star }} is cast.
* Ensuring {{ site.data.spell.fs }} is available to use when {{ site.data.dungeon.gambit.wandering_pulsar }} is cast can help facilitate quick swapping!

## {{ site.data.dungeon.gambit.soleah }}

* Use {{ site.data.spell.as }} for {{ site.data.dungeon.gambit.hyperlight_jolt }} as needed.
* Use {{ site.data.spell.swg }} as needed to help trigger controlled soaks of {{ site.data.dungeon.gambit.collapsing_star }}. As key level increases this can be very beneficial for your healer for you to assist with, but soaking more than one stack at a time can be deadly so communicate prior to pulling if you intend to do this and keep an eye on how others are positioning!

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="dos">
<div data-toggle="collapse" data-target="#dos-collapse" aria-expanded="true" aria-controls="dos-collapse" class="dungeon-header dos"><h2>De Other Side</h2></div>
</div>
<div id="dos-collapse" class="collapse" aria-labelledby="dos" data-parent="#accordion">
<div class="card-body" markdown="1">  

**Enraged Spirit**

* {{ site.data.dungeon.dos.rage }} is dangerous when Fortified. Use {{ site.data.spell.as }} or healing abilities as needed.
* {{ site.data.dungeon.dos.enraged_mask }} can be despawned with crowd control, so utilize {{ site.data.spell.capacitor_totem }} when they appear.

**Risen Cultist**

* Rotate interrupts between {{ site.data.dungeon.dos.scribe }} and {{ site.data.dungeon.dos.dark_lotus }}.

**Death Speaker**

* Rotate interrupts between {{ site.data.dungeon.dos.deaths_embrace }} and {{ site.data.dungeon.dos.shadowcore }}. If a {{ site.data.dungeon.dos.deaths_embrace }} cast goes off, {{ site.data.spell.purge }} it.

**Atal'ai Devoted**

* Consider these mobs the priority target in any pack they're in, killing them before {{ site.data.dungeon.dos.devoted_sacrifice }} goes off. Use {{ site.data.spell.capacitor_totem }}, {{ site.data.spell.thunderstorm }}, or {{ site.data.spell.hex }} to briefly stop their cast.

**Atal'ai High Priest**

* Rotate interrupts between {{ site.data.dungeon.dos.heal }} and {{ site.data.dungeon.dos.smite }}.

**Atal'ai Hoodoo Hexxer**

* Rotate interrupts between {{ site.data.dungeon.dos.healing_wave }}, {{ site.data.dungeon.dos.hex }}, and {{ site.data.dungeon.dos.lightning_discharge }}.

**Atal'ai Deathwalker**

* Use {{ site.data.spell.capacitor_totem }} to hard cancel their {{ site.data.dungeon.dos.bladestorm }}. When these mobs die, they turn into an Atal'ai Deathwalker's Spirit with {{ site.data.dungeon.dos.spectral }}, which you can {{ site.data.spell.purge }} to instantly kill them.

## Hakkar the Soulflayer

* {{ site.data.spell.as }} has many uses cases here: for {{ site.data.dungeon.dos.blood_nova }} if the Son of Hakkar adds are out of control, for {{ site.data.dungeon.dos.corrupted_blood }}, or for {{ site.data.dungeon.dos.blood_barrier }} to minimize the value of the absorb.
* Use {{ site.data.spell.swg }} as needed to avoid {{ site.data.dungeon.dos.blood_barrage }}.

---

**Defunct Dental Drill**

* {{ site.data.dungeon.dos.haywire }} is dangerous when Fortified, but a common tactic is to just line-of-sight this.

**Headless Client**

* Interrupt {{ site.data.dungeon.dos.discharge }}.
* Hard cancel their {{ site.data.dungeon.dos.spinning_up }} with {{ site.data.spell.capacitor_totem }}.
* If no stuns are available, use {{ site.data.spell.earthbind_totem }} and {{ site.data.spell.thunderstorm }} as needed to keep these mobs away from your party. If these mobs are still too close for comfort, {{ site.data.dungeon.dos.additional_threads }} can be {{ site.data.spell.purge }}d.

**Volatile Memory**

* These mobs will self-destruct on their own with {{ site.data.dungeon.dos.volatile_capacitor }}. Use {{ site.data.spell.earthbind_totem }} as needed to keep them away from your party.

**Lubricator**

* Rotate interrupts between {{ site.data.dungeon.dos.lubricate }} and {{ site.data.dungeon.dos.self_cleaning_cycle }}.

**Sentient Oil**

* Interrupt {{ site.data.dungeon.dos.essential_oil }}.

## The Manastorms

When Millhouse is active:

* Interrupt {{ site.data.dungeon.dos.frostbolt }}.
* Use {{ site.data.spell.as }} as needed when soaking {{ site.data.dungeon.dos.power_overwhelming }} or for {{ site.data.dungeon.dos.diabolical_dooooooom }}
* Use {{ site.data.spell.swg }} as needed to position {{ site.data.dungeon.dos.echo_finger_laser_x_treme }}.

When Millificent is active:

* Use {{ site.data.spell.as }} as needed for {{ site.data.dungeon.dos.aerial_rocket_chicken_barrage }}.
* Use {{ site.data.spell.swg }} as needed to disarm {{ site.data.dungeon.dos.experimental_squirrel_bomb }}s or position {{ site.data.dungeon.dos.shadowfury }} on the boss. {{ site.data.dungeon.dos.experimental_squirrel_bomb }} can be disarmed while in motion.

---

**Weald Shimmermoth**

* Party members should be jumping to remove {{ site.data.dungeon.dos.soporific_shimmerdust }}. If your party members aren't jumping, this can be dispelled with {{ site.data.spell.cleanse_spirit }}. If your party members do end up falling asleep from this debuff, {{ site.data.spell.tremor_totem }} can also be used to dispel it.

**Spriggan Barkbinder**

* Interrupt {{ site.data.dungeon.dos.bark_armor }}. If this cast goes off, {{ site.data.spell.purge }} it.

**Mythresh, Sky's Talons**

* Cast {{ site.data.spell.tremor_totem }} for {{ site.data.dungeon.dos.wailing_grief }} to quickly dispel any players caught by the Fear.

**Bladebeak Hatchling**

* {{ site.data.dungeon.dos.frightened_cries }} will aggro nearby Bladebeak Matriarchs and Territorial Bladebeaks which may cause your pull to go out of hand. Use {{ site.data.spell.hex }} or {{ site.data.spell.capacitor_totem }} to hard cancel this ability.

## Dealer Xy'exa

* Use {{ site.data.spell.as }} as needed for {{ site.data.dungeon.dos.arcane_lightning }} or {{ site.data.dungeon.dos.localized_explosive_contrivance }}.
* Use {{ site.data.spell.swg }} when launched to the air from {{ site.data.dungeon.dos.displacement_trap }} or as needed to transfer {{ site.data.dungeon.dos.arcane_lightning }} to another party member.

---

## Mueh'zala

* Hold your cooldowns for the Shattered Visage add from {{ site.data.dungeon.dos.shatter_reality }}.
* The DoT from {{ site.data.dungeon.dos.cosmic_artifice }} will be the highest source of damage taken. Use {{ site.data.spell.as }} as needed.
* Use {{ site.data.spell.swg }} as needed to avoid Master of Death.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="hoa">
<div data-toggle="collapse" data-target="#hoa-collapse" aria-expanded="true" aria-controls="hoa-collapse" class="dungeon-header hoa"><h2>Halls of Atonement</h2></div>
</div>
<div id="hoa-collapse" class="collapse" aria-labelledby="hoa" data-parent="#accordion">
<div class="card-body" markdown="1">

**Depraved Houndmaster**

* {{ site.data.dungeon.hoa.loyal_beasts }} enrage the Vicious Gargons, and {{ site.data.dungeon.hoa.rapid_fire }} is dangerous when Fortified. You can hard cancel these abilities with {{ site.data.spell.hex }} or {{ site.data.spell.capacitor_totem }}.

**Depraved Obliterator**

* Rotate interrupts between {{ site.data.dungeon.hoa.curse_of_obliteration }} and {{ site.data.dungeon.hoa.wicked_bolt }}. If a {{ site.data.dungeon.hoa.curse_of_obliteration }} cast goes off, dispel with {{ site.data.spell.cleanse_spirit }}.

**Depraved Collector**

* Interrupt {{ site.data.dungeon.hoa.collect_sins }}.

**Shard of Halkias**

* Stand at max range to avoid {{ site.data.dungeon.hoa.thrash }} entirely. Use {{ site.data.spell.astral_shift }} if absolutely needed.

## Halkias, the Sin-Stained Goliath

* Use {{ site.data.spell.spiritwalkers_grace }} during {{ site.data.dungeon.hoa.refracted_sinlight }}.
* If any party members are outside the {{ site.data.dungeon.hoa.light_of_atonement }} aura and Feared by {{ site.data.dungeon.hoa.sinlight_visions }}, use {{ site.data.spell.tremor_totem }}.

---

**Stoneborn Reaver**

* Interrupt {{ site.data.dungeon.hoa.turn_to_stone }}. If a cast goes off, {{ site.data.spell.purge }} it.

## Echelon

* Hold {{ site.data.spell.stormkeeper }} for the Undying Stonefiend add spawn. Undying Stonefiends will not begin casting until they are hit with damage, so wait for them to congregate around the boss before engaging. Interrupt their {{ site.data.dungeon.hoa.villainous_bolt }} cast, and use {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.thunderstorm }} as needed to control them.
* Keep some distance from the Undying Stonefiends due to {{ site.data.dungeon.hoa.volatile_transformation }}.
* {{ site.data.dungeon.hoa.curse_of_stone }} can be dispelled with {{ site.data.spell.cleanse_spirit }}. Prioritize dispelling party members targeted by {{ site.data.dungeon.hoa.stone_shattering_leap }} or any other party members at risk, and dispelled players will be able to avoid damage if they run away quickly. Othrewise, use {{ site.data.spell.astral_shift }} for {{ site.data.dungeon.hoa.stone_shattering_leap }} and {{ site.data.dungeon.hoa.shattered }} as needed.

---

## High Adjudicator Aleez

* Rotate interrupts between {{ site.data.dungeon.hoa.volley_of_power }} and {{ site.data.dungeon.hoa.bolt_of_power }}.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed for {{ site.data.dungeon.hoa.anima_fountain }}.
* Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.dungeon.hoa.pulse_from_beyond }} from Ghastly Parishioner.

---

**Inquisitor Sigar**

* Interrupt {{ site.data.dungeon.hoa.wicked_bolt }}.

## Lord Chamberlain

* Use {{ site.data.spell.astral_shift }} for {{ site.data.dungeon.hoa.ritual_of_woe }} as needed.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to avoid {{ site.data.dungeon.hoa.telekinetic_toss }}, {{ site.data.dungeon.hoa.telekinetic_onslaught }}, and {{ site.data.dungeon.hoa.telekinetic_repulsion }}.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="mots">
<div data-toggle="collapse" data-target="#mots-collapse" aria-expanded="true" aria-controls="mots-collapse" class="dungeon-header mots"><h2>Mists of Tirna Scithe</h2></div>
</div>
<div id="mots-collapse" class="collapse" aria-labelledby="mots" data-parent="#accordion">
<div class="card-body" markdown="1">

**Drust Spiteclaw**

* {{ site.data.spell.purge }} {{ site.data.dungeon.mots.dying_breath }}. If these are not {{ site.data.spell.purge }}d and players are affected by {{ site.data.dungeon.mots.dying_breath }}, you can dispel them with {{ site.data.spell.cleanse_spirit }}.

**Drust Harvester**

* Rotate interrupts between {{ site.data.dungeon.mots.harvest_essence }} and {{ site.data.dungeon.mots.spirit_bolt }}.

**Drust Boughbreaker**

* When these mobs reach 50% health, they will channel {{ site.data.dungeon.mots.furious_thrashing }} which is dangerous when Fortified. Use {{ site.data.spell.as }} or healing abilities as needed.
* If you move as the {{ site.data.dungeon.mots.bramble_burst }} cast finishes, you can avoid the initial damage.

## Ingra Maloch

* Maintain {{ site.data.spell.flame_shock }} on both Ingra Maloch and Droman Oulfarran.
* Hold your cooldowns for when Ingra is vulnerable with {{ site.data.dungeon.mots.dromans_wrath }}.
* Use {{ site.data.spell.swg }} as needed to avoid {{ site.data.dungeon.mots.tears_of_the_forest }}.
* Use {{ site.data.spell.as }} for {{ site.data.dungeon.mots.death_shroud }} as needed.
* Stay alert for Ingra's {{ site.data.dungeon.mots.repulsive_visage }}. This is a 3 second cast that will Fear all players around him and cannot be interrupted, so pre-cast {{ site.data.spell.tremor_totem }}.

---

**Mistveil Shaper**

* Interrupt {{ site.data.dungeon.mots.bramblethorn_coat }}. If this cast goes off, {{ site.data.spell.purge }} it.

**Mistveil Guardian**

* {{ site.data.dungeon.mots.bucking_rampage }} is a knock back ability that will affect tank and melee players. You can hard cancel this ability with {{ site.data.spell.hex }} or {{ site.data.spell.capacitor_totem }}.

**Mistveil Tender**

* Interrupt {{ site.data.dungeon.mots.nourish_the_forest }}. If this cast goes off, {{ site.data.spell.purge }} it.

## Mistcaller

* During {{ site.data.dungeon.mots.guessing_game }}, maintain {{ site.data.spell.flame_shock }} on the correct Illusionary Clone but also any other Illusions you can. Mistcaller takes 100% reduced damage during this phase.
* {{ site.data.dungeon.mots.penalizing_burst }} during {{ site.data.dungeon.mots.guessing_game }} will be the highest source of damage taken. Use {{ site.data.spell.as }} as needed during this phase.
* {{ site.data.spell.hex }} the Illusionary Vulpin. If cleave damage is breaking the CC, you can also use {{ site.data.spell.earthbind_totem }} or {{ site.data.spell.capacitor_totem }} as needed to kite.
* Use {{ site.data.spell.swg }} for {{ site.data.dungeon.mots.dodge_ball }} as needed.

---

**Spinemaw Staghorn**

* Rotate interrupts for {{ site.data.dungeon.mots.stimulate_regeneration }} and {{ site.data.dungeon.mots.stimulate_resistance }}. If a {{ site.data.dungeon.mots.stimulate_resistance }} cast goes off, {{ site.data.spell.purge }} it.

## Tred'ova

* Rotate interrupts for {{ site.data.dungeon.mots.parasitic_pacification }}, {{ site.data.dungeon.mots.parasitic_incapacitation }}, and {{ site.data.dungeon.mots.parasitic_domination }}.
* {{ site.data.dungeon.mots.consumption }} can also be interrupted after the {{ site.data.dungeon.mots.gorging_shield }} is broken, but your party may opt to not interrupt so the boss doesn't cast any other mechanics.
* Use {{ site.data.spell.earthbind_totem }}, {{ site.data.spell.capacitor_totem }}, and potentially {{ site.data.spell.hex }} as needed to control the Gormling Larvae.
* Use {{ site.data.spell.swg }} as needed for {{ site.data.dungeon.mots.acid_expulsion }}, {{ site.data.dungeon.mots.consumption }}, {{ site.data.dungeon.mots.mind_link }}, or for kiting away from Gormling Larvae.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="pf">
<div data-toggle="collapse" data-target="#pf-collapse" aria-expanded="true" aria-controls="pf-collapse" class="dungeon-header pf"><h2>Plaguefall</h2></div>
</div>
<div id="pf-collapse" class="collapse" aria-labelledby="pf" data-parent="#accordion">
<div class="card-body" markdown="1">

**Decaying Flesh Giant**

* Interrupt {{ site.data.dungeon.pf.creepy_crawlers }}.

**Fungalmancer**

* Rotate interrupts between {{ site.data.dungeon.pf.wonder_grow }} and {{ site.data.dungeon.pf.binding_fungus }}. If a {{ site.data.dungeon.pf.wonder_grow }} cast goes off, {{ site.data.spell.purge }} it.

**Fungi Stormer**

* {{ site.data.dungeon.pf.fungistorm }} is dangerous when Fortified. You can hard cancel this ability with {{ site.data.spell.hex }} or {{ site.data.spell.capacitor_totem }}.

**Pestilent Harvester**

* Rotate interrupts between {{ site.data.dungeon.pf.doom_shroom }} and {{ site.data.dungeon.pf.hurl_spores }}.

**Gushing Slime**

* {{ site.data.spell.purge }} {{ site.data.dungeon.pf.slime_coated }} as needed to minimize pools of {{ site.data.dungeon.pf.putrid_bile }}.

## Globgrog

* Position yourself close to the boss to quickly avoid {{ site.data.dungeon.pf.slime_wave }}.
* Use {{ site.data.spell.swg }} for {{ site.data.dungeon.pf.plaguestomp }}. Use {{ site.data.spell.as }} as needed for both {{ site.data.dungeon.pf.plaguestomp }} and {{ site.data.dungeon.pf.debilitating_plague }}.
* Use {{ site.data.spell.earthbind_totem }}, {{ site.data.spell.capacitor_totem }}, and {{ site.data.spell.thunderstorm }} as needed to control the Slimy Morsels.

---

**Blighted Spinebreaker**

* When these mobs die, they will spawn Slithering Ooze which will cast {{ site.data.dungeon.pf.metamorphosis }}. Kill these by instantly stepping on them, and use {{ site.data.spell.as }} as needed.

**Plaguebinder**

* Rotate interrupts between {{ site.data.dungeon.pf.gripping_infection }} and {{ site.data.dungeon.pf.pestilence_bolt }}.

**Rotmarrow Slime**

* Interrupt {{ site.data.dungeon.pf.corrosive_gunk }}.
* {{ site.data.spell.purge }} {{ site.data.dungeon.pf.slime_coated }} as needed to minimize pools of {{ site.data.dungeon.pf.putrid_bile }}.

**Pestilence Slime**

* Interrupt {{ site.data.dungeon.pf.viral_globs }}.

**Virulax Blightweaver**

* Interrupt {{ site.data.dungeon.pf.pestilence_bolt }}.

**Congealed Slime**

* Because of {{ site.data.dungeon.pf.congealed_contagion }}, funnel more priority damage on the Congealed Slime by casting {{ site.data.spell.flame_shock }} on the mobs around it.

## Doctor Ickus

* Funnel more priority damage to the Plague Bomb by casting {{ site.data.spell.flame_shock }} on the boss and Congealed Slime. If your group is planning to CC the Congealed Slime, do not {{ site.data.spell.flame_shock }} it. Consider holding cooldowns for the Plague Bomb as well if needed.
* Use {{ site.data.spell.swg }} as needed to avoid {{ site.data.dungeon.pf.slime_lunge }}.
* Interrupt {{ site.data.dungeon.pf.burning_strain }} if no targets are within melee range of the boss.

---

**Defender of Many Eyes**

* Use {{ site.data.spell.capacitor_totem }} to hard cancel {{ site.data.dungeon.pf.bulwark_of_maldraxxus }}.

**Brood Ambusher**

* Interrupt {{ site.data.dungeon.pf.enveloping_webbing }}.
* {{ site.data.spell.hex }} and {{ site.data.spell.capacitor_totem }} can be used to hard cancel {{ site.data.dungeon.pf.stealthlings }}.

**Venomous Sniper**

* Interrupt {{ site.data.dungeon.pf.call_venomfang }}.

## Domina Venomblade

* Use {{ site.data.spell.swg }} to avoid {{ site.data.dungeon.pf.solitary_prey }} when moving with your group and revealing Brood Assassins.
* {{ site.data.spell.capacitor_totem }} can be used to reveal Brood Assassins, but you may consider using {{ site.data.spell.capacitor_totem }} for when they're grouped up instead.
* Use {{ site.data.spell.as }} as needed for {{ site.data.dungeon.pf.shadow_ambush }}.

---

**Ickor Bileflesh**

* Interrupt {{ site.data.dungeon.pf.pestilence_bolt }}.

## Margrave Stradama

* Use {{ site.data.spell.swg }} as needed to avoid {{ site.data.dungeon.pf.plague_crash }}.
* {{ site.data.dungeon.pf.infectious_rain }} will be the highest source of damage taken, so use {{ site.data.spell.as }}.
* Use {{ site.data.spell.frost_shock }}, {{ site.data.spell.earthbind_totem }}, {{ site.data.spell.capacitor_totem }}, and {{ site.data.spell.thunderstorm }} as needed to kite the Plaguebound Devoted adds.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="sd">
<div data-toggle="collapse" data-target="#sd-collapse" aria-expanded="true" aria-controls="sd-collapse" class="dungeon-header sd"><h2>Sanguine Depths</h2></div>
</div>
<div id="sd-collapse" class="collapse" aria-labelledby="sd" data-parent="#accordion">
<div class="card-body" markdown="1">

**Gluttonous Tick**

* Interrupt {{ site.data.dungeon.sd.engorge }}.
* Keep your distance from these mobs as they will cast {{ site.data.dungeon.sd.gluttonous_burst }} when they die.

## Kryxis

* Pay attention to Kryxis' {{ site.data.dungeon.sd.severing_smash }} cast, and be as far away as possible to stagger the damage taken from {{ site.data.dungeon.sd.essence_absorption }}. If necessary, you can also out-range {{ site.data.dungeon.sd.severing_smash }} at 100 yards to prevent dropping a {{ site.data.dungeon.sd.living_essence }} orb at all.
* {{ site.data.dungeon.sd.essence_absorption }} and {{ site.data.dungeon.sd.juggernaut_rush }} will be the highest sources of damage taken. Use {{ site.data.spell.as }} as needed.
* Use {{ site.data.spell.swg }} as needed to position for {{ site.data.dungeon.sd.severing_smash }} or {{ site.data.dungeon.sd.juggernaut_rush }}.
* Interrupt {{ site.data.dungeon.sd.hungering_drain }}.

---

**Wicked Oppressor**

* Rotate interrupts between {{ site.data.dungeon.sd.curse_of_suppression }} and {{ site.data.dungeon.sd.wrack_soul }}. If a {{ site.data.dungeon.sd.curse_of_suppression }} cast goes off on a party member, dispel with {{ site.data.spell.cleanse_spirit }}.

**Dark Acolyte**

* Interrupt {{ site.data.dungeon.sd.dark_bolt_sd }}.

**Grand Overseer**

* Interrupt {{ site.data.dungeon.sd.gloom_burst }}.
* Stand at max range to completely negate {{ site.data.dungeon.sd.dread_bindings }}.

**Chamber Sentinel**

* Interrupt {{ site.data.dungeon.sd.stoneskin }}. If this cast goes off, {{ site.data.spell.purge }} it.

**Depths Warden**

* Interrupt {{ site.data.dungeon.sd.barbed_shackles }}.

**Remnant of Fury**

* {{ site.data.dungeon.sd.explosive_anger }} can be interrupted, but it is a damage buff with a DoT. It may be helpful to let this cast go off on a party member for a few seconds before dispelling with {{ site.data.spell.cleanse_spirit }}.

**Infused Quill-feather**

* Interrupt {{ site.data.dungeon.sd.fiery_cantrip }}.

## Executor Tarvold

* Fleeting Manifestation's {{ site.data.dungeon.sd.growing_pride }} will be the highest source of damage taken during this encounter. Focus these down quickly, and use {{ site.data.spell.capacitor_totem }} and {{ site.data.spell.as }} as needed.
* Use {{ site.data.spell.swg }} as needed to avoid {{ site.data.dungeon.sd.castigate }}, {{ site.data.dungeon.sd.sintouched_anima }}, or {{ site.data.dungeon.sd.residue }}. {{ site.data.spell.as }} may be used for {{ site.data.dungeon.sd.castigate }} as well.
* If any party members are hit by {{ site.data.dungeon.sd.sintouched_anima }}, dispel with {{ site.data.spell.cleanse_spirit }}.

---

## Grand Proctor Beryllia

* {{ site.data.dungeon.sd.rite_of_supremacy }} and {{ site.data.dungeon.sd.agonize }} will be the highest sources of damage taken. Use {{ site.data.spell.as }} as needed.
* Use {{ site.data.spell.swg }} as needed to avoid {{ site.data.dungeon.sd.endless_torment }}.

---

## General Kaal

* If targeted by {{ site.data.dungeon.sd.wicked_rush }}, you can avoid this entirely if you move quickly enough as the boss is dashing towards you. Otherwise, use {{ site.data.spell.as }} as needed for {{ site.data.dungeon.sd.wicked_gash }}.
* Use {{ site.data.spell.swg }} as needed when positioning for {{ site.data.dungeon.sd.wicked_rush }} or to avoid {{ site.data.dungeon.sd.piercing_blur }}.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="soa">
<div data-toggle="collapse" data-target="#soa-collapse" aria-expanded="true" aria-controls="soa-collapse" class="dungeon-header soa"><h2>Spires of Ascension</h2></div>
</div>
<div id="soa-collapse" class="collapse" aria-labelledby="soa" data-parent="#accordion">
<div class="card-body" markdown="1">

**Forsworn Castigator**

* Interrupt {{ site.data.dungeon.soa.burden_of_knowledge }}.

**Forsworn Goliath**

* Interrupt {{ site.data.dungeon.soa.rebellious_fist }}. Consider this the highest priority interrupt in any pack you see this mob in.

**Forsworn Mender**

* Interrupt {{ site.data.dungeon.soa.forsworn_doctrine }}.
* {{ site.data.spell.purge }} {{ site.data.dungeon.soa.imbue_weapon }}.

## Kin-Tara

* Maintain {{ site.data.spell.flame_shock }} on both Kin-Tara and Azules.
* Position yourself behind Azules to avoid {{ site.data.dungeon.soa.attenuated_barrage }}. Use {{ site.data.spell.swg }} to follow Azules when it moves.
* Use {{ site.data.spell.as }} as needed for {{ site.data.dungeon.soa.charged_spear }}.

---

**Forsworn Stealthclaw**

* These mobs stealth, but if you know their position, you can use {{ site.data.spell.earthbind_totem }} to aggro and bait them out.

**Forsworn Champion**

* Interrupt {{ site.data.dungeon.soa.forsworn_doctrine }}.
* {{ site.data.spell.purge }} {{ site.data.dungeon.soa.imbue_weapon }}.

**Forsworn Inquisitor**

* Rotate interrupts between {{ site.data.dungeon.soa.internal_strife }} and {{ site.data.dungeon.soa.dark_lash }}.

**Forsworn Squad-Leader**

* Because of {{ site.data.dungeon.soa.inspiring_presence }}, funnel more priority damage on the Forsworn Squad-Leader by casting {{ site.data.spell.flame_shock }} on the mobs around it.

## Ventunax

* {{ site.data.dungeon.soa.dark_stride }} will be the highest source of damage taken, assuming you are avoiding {{ site.data.dungeon.soa.dark_bolt_soa }}. Use {{ site.data.spell.as }} as needed.
* Use {{ site.data.spell.swg }} to avoid {{ site.data.dungeon.soa.dark_bolt_soa }} from {{ site.data.dungeon.soa.shadowhirl }}. {{ site.data.dungeon.soa.shadowhirl }} will always fire out {{ site.data.dungeon.soa.dark_bolt_soa }} counterclockwise until Ventunax casts {{ site.data.dungeon.soa.recharge }}, which will trigger all {{ site.data.dungeon.soa.shadowhirl }}s to fire 9 {{ site.data.dungeon.soa.dark_bolt_soa }} at the same time.

---

**Forsworn Warden**

* Interrupt {{ site.data.dungeon.soa.greater_mending }}.
* {{ site.data.spell.purge }} {{ site.data.dungeon.soa.bless_weapon }}.

**Forsworn Justicar**

* Rotate interrupts between {{ site.data.dungeon.soa.forced_confession }} and {{ site.data.dungeon.soa.dark_lash }}.

## Oryphrion

* Consider holding cooldowns for when the boss is {{ site.data.dungeon.soa.drained }}.
* Use {{ site.data.spell.swg }} to position and avoid the {{ site.data.dungeon.soa.anima_field }} from {{ site.data.dungeon.soa.empyreal_ordnance }}.
* Use {{ site.data.spell.as }} as needed for {{ site.data.dungeon.soa.purifying_blast }} or Anima Surge. However, {{ site.data.dungeon.soa.purifying_blast }} will be the higher source of damage taken.

---

## Devos, Paragon of Doubt

* Use {{ site.data.spell.swg }} as needed to position the pool of {{ site.data.dungeon.soa.lingering_doubt }} from {{ site.data.dungeon.soa.lost_confidence }} or to stand in {{ site.data.dungeon.soa.archons_bastion }}.
* {{ site.data.dungeon.soa.lingering_doubt }} will be the highest source of damage taken, so use {{ site.data.spell.as }} as needed during Phase 2 when transporting {{ site.data.dungeon.soa.raw_anima }}.
* If using {{ site.data.expansion_feature.sl.legendary.eogs }}, be mindful of {{ site.data.dungeon.soa.run_through }} when placing {{ site.data.spell.eq }}.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="nw">
<div data-toggle="collapse" data-target="#nw-collapse" aria-expanded="true" aria-controls="nw-collapse" class="dungeon-header nw"><h2>The Necrotic Wake</h2></div>
</div>
<div id="nw-collapse" class="collapse" aria-labelledby="nw" data-parent="#accordion">
<div class="card-body" markdown="1">

**Patchwerk Soldier**

* These mobs will {{ site.data.dungeon.nw.leap }} at ranged players. Position yourself close so tank and melee players don't have to chase far.

**Corpse Harvester**

* Interrupt {{ site.data.dungeon.nw.drain_fluids }}.

**Stitched Vanguard**

* Interrupt {{ site.data.dungeon.nw.meat_shield }}.

**Blight Bag**

* These mobs will {{ site.data.dungeon.nw.leap }} at ranged players. Position yourself close so tank and melee players don't have to chase far.

**Zolramus Gatekeeper**

* {{ site.data.dungeon.nw.wrath_of_zolramus }} is dangerous when Fortified. Use {{ site.data.spell.as }} or healing abilities as needed.
* Interrupt {{ site.data.dungeon.nw.necrotic_bolt }}.

## Blightbone

* Use {{ site.data.spell.as }} as needed if targeted by {{ site.data.dungeon.nw.heaving_retch }}. Use {{ site.data.spell.swg }} as needed to avoid or re-position after {{ site.data.dungeon.nw.heaving_retch }}.
* Use {{ site.data.spell.earthbind_totem }}, {{ site.data.spell.capacitor_totem }}, and {{ site.data.spell.thunderstorm }} as needed to control the Carrion Worm adds.

---

**Zolramus Bonemender**

* Rotate interrupts between {{ site.data.dungeon.nw.bonemend }} and {{ site.data.dungeon.nw.necrotic_bolt }}.
* {{ site.data.dungeon.nw.final_bargain }} is a massive heal that cannot be interrupted. You can hard cancel this ability with {{ site.data.spell.hex }} or {{ site.data.spell.capacitor_totem }}.

**Zolramus Sorcerer**

* Interrupt {{ site.data.dungeon.nw.necrotic_bolt }}.

**Zolramus Necromancer, Brittlebone Mage**

* Prioritze interrupting Brittlebone Mage's {{ site.data.dungeon.nw.frostbolt_volley }}; interrupt the Necromancer's {{ site.data.dungeon.nw.necrotic_bolt }} otherwise.
* Focus down Zolramus Necromancer by casting {{ site.data.spell.flame_shock }} on the Brittlebone mobs around it to funnel more priority damage.

**Skeletal Marauder**

* Interrupting {{ site.data.dungeon.nw.rasping_scream }} and stay ranged to avoid it. If a cast goes off, cast {{ site.data.spell.tremor_totem }} to dispel any Feared party members.

**Nar'zudah**

* Interrupt {{ site.data.dungeon.nw.necrotic_bolt }}.
* {{ site.data.spell.purge }} {{ site.data.dungeon.nw.dark_shroud }}.
* Use {{ site.data.spell.as }} and {{ site.data.spell.swg }} for {{ site.data.dungeon.nw.grim_fate }} as needed.

**Skeletal Monstrosity**

* Use {{ site.data.spell.swg }} as needed for {{ site.data.dungeon.nw.reaping_winds }}. Stay ranged to avoid {{ site.data.dungeon.nw.chill_scythe }}.

## Amarth, The Harvester

* Stay near the boss in anticipation for {{ site.data.dungeon.nw.necrotic_breath }} to quickly avoid it.
* Prioritize interrupting the Reanimated Mage's {{ site.data.dungeon.nw.frostbolt_volley }}; interrupt Amarth's {{ site.data.dungeon.nw.necrotic_bolt }} otherwise.
* Use {{ site.data.spell.thunderstorm }} and {{ site.data.spell.capacitor_totem }} as needed to control the Reanimated adds.
* {{ site.data.dungeon.nw.tortured_echoes }} will be the highest source of damage taken, starting after the first {{ site.data.dungeon.nw.final_harvest }}. Use {{ site.data.spell.as }} as needed.

---

**Corpse Collector**

* Rotate interrupts between {{ site.data.dungeon.nw.goresplatter }} and {{ site.data.dungeon.nw.drain_fluids }}.

**Flesh Crafter**

* Interrupt {{ site.data.dungeon.nw.repair_flesh }}.
* Be sure {{ site.data.dungeon.nw.throw_cleaver }} hits an enemy mob. Use {{ site.data.spell.as }} as needed otherwise.

**Stitching Assistant, Separation Assistant**

* Interrupt Stitching Assistant's {{ site.data.dungeon.nw.drain_fluids }}.
* Use {{ site.data.spell.swg }} as needed to ensure {{ site.data.dungeon.nw.throw_cleaver }} is targeted at the other mob or to kite away from Separation Assistant's {{ site.data.dungeon.nw.morbid_fixation }}.

## Surgeon Stitchflesh

* Hold cooldowns for when Surgeon Stitchflesh is active.
* Use {{ site.data.spell.swg }} as needed to target {{ site.data.dungeon.nw.meat_hook }} at the boss or to kite away from the boss's {{ site.data.dungeon.nw.morbid_fixation }}.
* Use {{ site.data.spell.as }} as needed for {{ site.data.dungeon.nw.stitchneedle }}.

---

## Nalthor the Rimebinder

* Use {{ site.data.spell.swg }} for {{ site.data.dungeon.nw.comet_storm }}.
* {{ site.data.dungeon.nw.icebound_aegis }} will be the highest source of damage taken when this is active on the boss. Use {{ site.data.spell.as }} as needed.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="top">
<div data-toggle="collapse" data-target="#top-collapse" aria-expanded="true" aria-controls="top-collapse" class="dungeon-header top"><h2>Theater of Pain</h2></div>
</div>
<div id="top-collapse" class="collapse" aria-labelledby="top" data-parent="#accordion">
<div class="card-body" markdown="1">

**Battlefield Ritualist**

* Rotate interrupts between {{ site.data.dungeon.top.unholy_fervor }} and {{ site.data.dungeon.top.necrotic_bolt }}. If an {{ site.data.dungeon.top.unholy_fervor }} cast goes off, {{ site.data.spell.purge }} it.

**Raging Bloodhorn**

* {{ site.data.dungeon.top.raging_tantrum }} is dangerous when Fortified. If your group does not have an enrage dispel, use {{ site.data.spell.as }} or healing abilities as needed.

## An Affront of Challengers

* Maintain {{ site.data.spell.flame_shock }} on each boss.
* Determine if you can cast {{ site.data.spell.cl }} and {{ site.data.spell.eq }} when the bosses are stacked together, or if a particular boss needs to be focused down.
* Rotate interrupts for Sathel the Accursed's {{ site.data.dungeon.top.searing_death }} and {{ site.data.dungeon.top.necromantic_bolt }}, as well as for Paceran's {{ site.data.dungeon.top.plague_bolt }}.
* {{ site.data.spell.purge }} {{ site.data.dungeon.top.spectral_transference }}.
* Use {{ site.data.spell.as }} as needed for {{ site.data.dungeon.top.searing_death }} or any spells targeted at you.
* Use {{ site.data.spell.swg }} as needed if fixated by Dessia.

---

**Blighted Sludge-Spewer**

* Rotate interrupts between {{ site.data.dungeon.top.withering_discharge }} and {{ site.data.dungeon.top.decaying_filth }}.
* These mobs will leap at ranged players with {{ site.data.dungeon.top.leaping_thrash }}. Position yourself close so tank and melee players don't have to chase far.

**Disgusting Refuse**

* These mobs will leap at ranged players with {{ site.data.dungeon.top.leaping_thrash }}. Position yourself close so tank and melee players don't have to chase far.

**Putrid Butcher**

* Hard cancel {{ site.data.dungeon.top.devour_flesh }} with {{ site.data.spell.capacitor_totem }}.

**Diseased Horror**

* Interrupt {{ site.data.dungeon.top.meat_shield }}.

## Gorechop

* Maintain {{ site.data.spell.flame_shock }} on the boss and Oozing Leftovers.
* {{ site.data.dungeon.top.tenderizing_smash }} and {{ site.data.dungeon.top.meat_hooks }} often overlap, but you will not be caught by {{ site.data.dungeon.top.tenderizing_smash }} if you are in melee range of the boss. Use {{ site.data.spell.swg }} as needed to avoid {{ site.data.dungeon.top.meat_hooks }}.
* {{ site.data.dungeon.top.leaping_thrash }} from Oozing Leftovers will be the highest source of damage taken. Use {{ site.data.spell.as }} as needed when they spawn.

---

**Dokigg the Brutalizer, Nekthara the Mangler**

Only one of these duelists will be active in a run.

When Dokigg is active:

* {{ site.data.dungeon.top.brutal_leap }} will target a ranged player. Position yourself close so tank and melee players don't have to chase far.
* Interrupt {{ site.data.dungeon.top.battle_trance }}.

When Nekthara is active:

* Stay ranged to avoid {{ site.data.dungeon.top.whirlwind }}.
* Don't be caught casting when Nekthara is casting {{ site.data.dungeon.top.interrupting_roar }}.

**Harugia the Bloodthirsty, Heavin the Breaker**

Only one of these duelists will be active in a run.

When Harugia is active:

* {{ site.data.dungeon.top.bloodthirsty_charge }} will target a ranged player. Make sure you are spread out and able to avoid it.
* Avoid {{ site.data.dungeon.top.ricocheting_blade }} through line-of-sight when possible.
* Interrupt {{ site.data.dungeon.top.battle_trance }}.

When Heavin is active:

* Stay ranged to avoid {{ site.data.dungeon.top.ground_smash }}.
* Don't be caught casting when Heavin is casting {{ site.data.dungeon.top.interrupting_roar }}.

**Rek the Hardened, Advent Nevermore**

Only one of these duelists will be active in a run.

When Rek is active:

* Stay ranged to avoid {{ site.data.dungeon.top.whirlwind }}.

When Advent Nevermore is active:

* Position yourself close to move quickly and maintain damage uptime during {{ site.data.dungeon.top.unbreakable_guard }}.
* Avoid {{ site.data.dungeon.top.ricocheting_blade }} through line-of-sight when possible.

**Ancient Captain**

* Interrupt {{ site.data.dungeon.top.demoralizing_shout }}.

**Shambling Arbalest**

* {{ site.data.dungeon.top.jagged_quarrel }} is dangerous when Fortified, and these are the most lethal mobs in the packs they're in. Use {{ site.data.spell.as }} as needed if targeted by {{ site.data.dungeon.top.jagged_quarrel }}.

## Xav the Unfallen

* Xav always does {{ site.data.dungeon.top.seismic_leap }} prior to {{ site.data.dungeon.top.might_of_maldraxxus }}, which will be the highest source of damage taken. Use {{ site.data.spell.as }} as needed.
* As you may not be pulled down for {{ site.data.dungeon.top.blood_and_glory }}, consider refreshing {{ site.data.spell.flame_shock }} early to ensure the boss has {{ site.data.spell.flame_shock }} uptime before an {{ site.data.dungeon.top.oppressive_banner }} spawns.
* Use {{ site.data.spell.swg }} as needed when dodging the mechanics from {{ site.data.dungeon.top.might_of_maldraxxus }} ({{ site.data.dungeon.top.crushing_slam }}, {{ site.data.dungeon.top.massive_cleave }}, {{ site.data.dungeon.top.deafening_crash }}). Don't be caught casting when Xav is casting {{ site.data.dungeon.top.deafening_crash }}; the interrupt effect still applies even when you are out of the circle.

---

**Portal Guardian**

* {{ site.data.dungeon.top.soulstorm }} is dangerous when Fortified. Use {{ site.data.spell.as }} or healing abilities as needed.
* Dispel {{ site.data.dungeon.top.shadow_vulnerability }} with {{ site.data.spell.cleanse_spirit }}. If this is not dispelled, players will take increased damage from {{ site.data.dungeon.top.soulstorm }}.

**Maniacal Soulbinder**

* Rotate interrupts between {{ site.data.dungeon.top.necrotic_bolt_volley }} and {{ site.data.dungeon.top.necrotic_bolt }}.

**Bone Magus**

* Rotate interrupts between {{ site.data.dungeon.top.bone_spear }} and {{ site.data.dungeon.top.grave_spike }}.
* {{ site.data.spell.purge }} {{ site.data.dungeon.top.bone_shield }}.

**Nefarious Darkspeaker**

* Use {{ site.data.spell.swg }} as needed to avoid {{ site.data.dungeon.top.death_winds }}.
* Dispel {{ site.data.dungeon.top.curse_of_desolation }} with {{ site.data.spell.cleanse_spirit }}. If any players are caught by the Fear, use {{ site.data.spell.tremor_totem }}.
* Interrupt {{ site.data.dungeon.top.spirit_frost }}.

## Kul'tharok

* Use {{ site.data.spell.swg }} as needed to maneuver {{ site.data.dungeon.top.draw_soul }}. Position yourself on the {{ site.data.dungeon.top.grasping_hands }} so your Soul is rooted in it to catch it quickly.
* Use {{ site.data.spell.as }} as needed when you are Soulless or you have the {{ site.data.dungeon.top.phantasmal_parasite }} debuff.

---

## Mordretha, the Endless Empress

* Stay near the boss in anticipation for {{ site.data.dungeon.top.dark_devastation }} to quickly avoid it.
* Consider holding Stormkeeper for Deathwalkers if necessary. Use {{ site.data.spell.capacitor_totem }} as needed when they are grouped up.
* {{ site.data.dungeon.top.grasping_rift }} and {{ site.data.dungeon.top.manifest_death }} often overlap. Use {{ site.data.spell.swg }} for this combo as needed.
* If any party members fail to run away from {{ site.data.dungeon.top.grasping_rift }}, dispel {{ site.data.dungeon.top.death_grasp }} with {{ site.data.spell.cleanse_spirit }}.
* When the boss is at 50% health, she will begin casting {{ site.data.dungeon.top.echos_of_carnage }}. This ability will passively be your highest source of damage taken (even when dodging the ghost animations), so use {{ site.data.spell.as }} at this point as needed.

</div>
</div>
</div>


<div class="card-body" markdown="1">

# Useful WeakAuras

* [Shadowlands Dungeons Pack](https://wago.io/SL-Dungeons)
* [Shadowlands Dungeons Purgeable Buffs](https://wago.io/r2QBcOnlT)
* [Mythic+ Auto Marker](https://wago.io/1ctv3b91K)
* [Mythic+ Timer](https://wago.io/M+Timer)

# Additional Resources

* [Gistwiki's Wowhead Elemental Shaman Mythic+ Guide](https://www.wowhead.com/guides/elemental-shaman-basic-mythic-plus-keystone-dungeons)
* [Stormy's Icy-Veins Elemental Shaman Mythic+ Tips](https://www.icy-veins.com/wow/elemental-shaman-pve-dps-mythic-plus-tips)
* [Mythic+ Subcreation](https://mplus.subcreation.net/elemental-shaman.html)
* [Mythic Trap](https://mythictrap.com/home)
* [Tanknotes](https://tanknotes.com/)
</div>
