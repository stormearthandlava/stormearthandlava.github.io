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

* **15:** {{ site.data.talent.echo_of_the_elements }}
* **25:** {{ site.data.talent.aftershock }}
* **30:** {{ site.data.talent.spirit_wolf }} **or** {{ site.data.talent.static_charge }}
* **35:** {{ site.data.talent.master_of_the_elements }} **or** {{ site.data.talent.storm_elemental }}
* **40:** {{ site.data.talent.ancestral_guidance }} **or** {{ site.data.talent.natures_guardian }}
* **45:** {{ site.data.talent.primal_elementalist }}
* **50:** {{ site.data.talent.stormkeeper }}
* **Legendary:** {{ site.data.legendary.eogs }} **or** {{ site.data.legendary.night_fae }}

**Double Legendary**
When [Unity](https://www.wowhead.com/spell=364738/unity) is equipped you will be able to utilise 2 Legendary effects, one of them will be your current Covenant's specific Legendary:
* Night Fae gains {{ site.data.legendary.night_fae }}
* Venthyr gains {{ site.data.legendary.venthyr }}
* Kyrian gains {{ site.data.legendary.kyrian }}
* Necrolord gains {{ site.data.legendary.necrolord }}
This opens up some opportunities for M+ in conjuction with the {{ site.data.item.t28_4 }} centred around the uptime of {{ site.data.talent.se }}.
* Necrolord with {{ site.data.legendary.skybreaker }}
* Venthyr with {{ site.data.legendary.skybreaker }}
* Kyrian with {{ site.data.legendary.eogs }} judging Legendaries by their raw strength, {{ site.data.legendary.eogs }} and {{ site.data.legendary.kyrian }} are our strongest choices. Being able to use them both together is promising.

**Which setup to use?**
The default suggestion when you have both [Unity](https://www.wowhead.com/spell=364738/unity) and [Tier Set](https://www.wowhead.com/item-set=1499/theurgic-starspeakers-regalia) will be to use:
* Night Fae with {{ site.data.legendary.eogs }} and {{ site.data.talent.se }}

This serves as a solid baseline without relying too much on how your dungeons are routed. The performance will vary between the setups on a variety of factors so it is **very** valuable to experiment!

* Necrolord with {{ site.data.legendary.eogs }} and {{ site.data.talent.se }} **or** {{ site.data.legendary.dre }} with *either* {{ site.data.talent.mote }} (easier to play) or {{ site.data.talent.se }} (which remains better at AoE'ing). Any {{ site.data.legendary.dre }} setup will be subject to RNG, you will also have to decide how much you like to gamble as technically speaking the highest expected value when AoE'ing (read: 5+ targets) is to completely ignore this legendary outside of {{ site.data.spell.primordial_wave }} windows and movement globals. If you choose to gamble during AoE thats your business.

* Necrolord with {{ site.data.legendary.sfd }} and {{ site.data.talent.se }}. Doing well as key levels go up, {{ site.data.legendary.sfd }} allows for 100% uptime on {{ site.data.talent.se }} which is potent for AoE and single target. At least some of the uptime increase will be overkill however, so if you could have also achieved 100% uptime by other means then the value of this choice goes down - mainly its core strength is the consistency and flexibility it offers.

With most of the dungeon pool consisting of low-target pulls in the early stages of the season (expect this to change a bit as people become more knowledgeable about how to handle specific mobs and strategies are formed allowing larger pulls in some dungeons/areas of dungeons), using {{ site.data.legendary.dre }} has become more attractive. It is important to note that {{ site.data.legendary.dre }} builds continue to use {{ site.data.talent.sk }} in dungeons, although you may consider swapping your third potency conduit slot to {{ site.data.conduit.shake_the_foundations }} as it performs at full power in aoe when not using {{ site.data.legendary.eogs }}.

The recommended Covenant choices for M+ content are Night Fae and Necrolord:

* Night Fae remains the default choice for overall value across key levels and dungeon routes, the value provided is easy to capitalise on.
   - Your Soulbind choices for Night Fae are:
      * Korayn for {{ site.data.soulbinds.first_strike }}. This provides a large amount of value across an entire dungeon.
      * Dreamweaver for {{ site.data.soulbinds.field_of_blossom }}. This provides additional power directly after using {{ site.data.spell.fae_transfusion }} and has synergy with {{ site.data.legendary.night_fae }} allowing for more frequent burst windows applicable to both AoE and Single Target.

* Necrolord remains competitive and lends itself to the {{ site.data.legendary.dre }} setup well.
   - Your Soulbind choices for Necrolord are:
      * Plague-Deviser Marileth for increased benefits surrounding {{ site.data.spell.fleshcraft }}, the strength of {{ site.data.soulbinds.preemptive_strike }} should not go unnoticed although when using {{ site.data.legendary.dre }} it would be traded for {{ site.data.conduit.shake_the_foundations }}.
      * Bonesmith Heirmir for passive Intellect buff {{ site.data.soulbinds.forgeborn_reveries }} and {{ site.data.soulbinds.marrowed_gemstone }}. (Note: generally you would find yourself using Marileth, this is mostly here for reference.)

To assist those experimenting with other Covenant options:
* Kyrian
    - Forgelite Prime Mikanikos for {{ site.data.soulbinds.hammer_of_genesis }} and [Effusive Anima Accelerator](https://www.wowhead.com/spell=352188/effusive-anima-accelerator?spellModifier=137038).
* Venthyr
    - When using {{ site.data.legendary.skybreakers }} the value of {{ site.data.soulbind.wasteland_propriety }} increases making it worthwhile to experiment with Theotar the Mad Duke!
    - Otherwise using Nadja the Mistblade.

For additional information, please visit our [Talents](https://stormearthandlava.com/guide/general/talents.html) and [Legendaries](https://stormearthandlava.com/guide/general/legendaries.html) pages.
Don't forget to check out Additional Resources at the bottom of this page!

# Miscellaneous Tips

* Although strategies are listed for mobs and bosses, communicating with your group how each pull should be executed is more important. Some suggestions may not be applicable depending on your group's strategy.

* {{ site.data.talent.earth_elemental }} is a potent ability best used to soak damage away from the tank or as an emergency button to avoid a party wipe. Communicate with your tank on using {{ site.data.talent.earth_elemental }} for challenging trash packs as well as remind your healer to keep the {{ site.data.talent.earth_elemental }} healthy as needed. Remember that with {{ site.data.talent.primal_elementalist }}, you can manually move the pet, and you have access to an additional defensive with {{ site.data.spell.harden_skin}} and single-target stun with {{ site.data.spell.pulverize }}. However, keep in mind that you cannot have {{ site.data.talent.earth_elemental }} and {{ site.data.talent.fire_elemental }} summoned at the same time with {{ site.data.talent.primal_elementalist }}.

* Often times, your tank may need to kite. Remember the kiting tools at your disposal ({{ site.data.spell.earthbind_totem }}, {{ site.data.spell.frost_shock }}, {{ site.data.talent.capacitor_totem }}, {{ site.data.talent.thunderstorm }}) to distance trash packs away from your tank.

* Routinely support your healer and your group with healing abilities and {{ site.data.talent.cleanse_spirit }}. Note that the healers that cannot remove Curses are: Discipline Priest, Holy Priest, Holy Paladin, and Mistweaver Monk.

* Plan with your group in advance on where to use {{ site.data.spell.bloodlust }}.

* [Learn to log your dungeon runs!](https://www.warcraftlogs.com/help/start) Warcraft Logs filters dungeons with pull-by-pull analyses and records replays of dungeon runs. Having logs available to share are helpful for you to receive actionable feedback.

# Affixes

**Level 4:**

* [Bolstering](https://shadowlands.wowhead.com/affix=7/bolstering): Damage trash packs down as evenly as you can. Swap to priority damage rotation for any lethal mobs or if mob health within trash packs are uneven.
* [Bursting](https://shadowlands.wowhead.com/affix=11/bursting): Support your party members and use your healing abilities to mitigate the [Bursting](https://shadowlands.wowhead.com/affix=11/bursting) debuff. Use {{ site.data.spell.astral_shift }} as needed if stacks are high.
* [Inspiring](https://shadowlands.wowhead.com/affix=122/inspiring): Crowd control mobs with [Inspiring Presence](https://shadowlands.wowhead.com/spell=343502/inspiring-presence) with {{ site.data.talent.hex }} as needed and when possible.
* [Raging](https://shadowlands.wowhead.com/affix=6/raging): Be ready to use your kiting toolkit to support your tank when needed. Consider using {{ site.data.talent.capacitor_totem }} and {{ site.data.talent.stormkeeper }} to finish [Raging](https://shadowlands.wowhead.com/affix=6/raging) mobs more safely and quickly.
* [Sanguine](https://shadowlands.wowhead.com/affix=8/sanguine): Damage trash packs down as evenly as you can to lessen time spent in Sanguine, but be sure to not slow or stun mobs dying unevenly. Use {{ site.data.talent.thunderstorm }} as needed to knock mobs out of [Sanguine](https://shadowlands.wowhead.com/affix=8/sanguine).
* [Spiteful](https://shadowlands.wowhead.com/affix=123/spiteful): As mobs are dying, be ready to use your kiting toolkit to support your melee players. Consider taking advantage of [Spiteful Shade](https://shadowlands.wowhead.com/npc=174773/spiteful-shade) as additional {{ site.data.spell.chain_lightning }} or {{ site.data.spell.flame_shock }} targets.

**Level 7:**

* [Explosive](https://shadowlands.wowhead.com/affix=13/explosive): [Explosive](https://shadowlands.wowhead.com/affix=13/explosive) orbs can be destroyed in a single {{ site.data.spell.frost_shock }} global. This will be your most efficient tool to deal with them as your other abilities are more valuable for trash.
* [Grievous](https://shadowlands.wowhead.com/affix=12/grievous): Remember that direct heals remove one stack of [Grievous Wound](https://shadowlands.wowhead.com/spell=240559/grievous-wound). Support your party members with {{ site.data.spell.healing_surge }} and {{ site.data.talent.chain_heal }} as needed.
* [Necrotic](https://shadowlands.wowhead.com/affix=4/necrotic): Be ready to use your kiting toolkit to support your tank when needed. {{ site.data.talent.earth_elemental }} is also helpful to help your tank control [Necrotic Wound](https://shadowlands.wowhead.com/spell=209858/necrotic-wound) stacks.
* [Quaking](https://shadowlands.wowhead.com/affix=14/quaking): Maintain your distance from party members, and be mindful about canceling casts if [Quake](https://shadowlands.wowhead.com/spell=240447/quake) overlaps with {{ site.data.spell.spiritwalkers_grace }}.
* [Storming](https://shadowlands.wowhead.com/affix=124/storming): Maintain your distance from mobs to avoid [Storming](https://shadowlands.wowhead.com/affix=124/storming). Use {{ site.data.spell.spiritwalkers_grace }} as needed in tight spaces or when maneuvering any mechanics.
* [Volcanic](https://shadowlands.wowhead.com/affix=3/volcanic): Watch your feet. Use {{ site.data.spell.spiritwalkers_grace }} as needed to maintain your damage uptime while avoiding [Volcanic](https://shadowlands.wowhead.com/affix=3/volcanic) plumes.

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
         - [Nightmare Cloud](https://www.wowhead.com/spell=373370/nightmare-cloud) try to avoid the cloud or you will be sent to [sleep!](https://www.wowhead.com/spell=373391/nightmare) If your group members could not resist the temptation of the clouds, {{ site.data.talent.tremor_totem }} should come in handy!

* One Dreadlord in every dungeon will turn into [Zul'gamux](https://www.wowhead.com/npc=190128/zulgamux) whom grants three stacks of your chosen stat buff when defeated. In addition, you will receive a [100% Health and Mana restore](https://www.wowhead.com/spell=374300/restoration) over 5 seconds.
     - [Zul'gamux](https://www.wowhead.com/npc=190128/zulgamux) has the following abilities:
          - [Shadow Claws](https://www.wowhead.com/spell=373509/shadow-claws) this is a magic debuff applied to the main target of the Dreadlord, make sure it isn't you! Your healer can dispel it.
          - [Blood Barrier](https://www.wowhead.com/spell=373724/blood-barrier) generates a shield which is increased by damage dealt to the players, deal damage to break the shield as early as possible! Interrupts do **not** work whilst the shield is active!
          - [Shadow Eruption](https://www.wowhead.com/spell=373513/shadow-eruption) is a ground-effect that will deal large damage and apply a 70% healing received reduction at the end of the cast if you are still within its range!
          - [Hypnosis Bats](https://www.wowhead.com/spell=373552/hypnosis-bat) will spawn periodically and begin channelling a [Hypnosis](https://www.wowhead.com/spell=373570/hypnosis) effect, if the Bats are not killed before this channel is finished then the target will be placed into a [Shadowy Barrier](https://www.wowhead.com/spell=373607/shadowy-barrier) that needs to be damaged to be removed! Note: only one disrupt is required to prevent the initial [Hypnosis](https://www.wowhead.com/spell=373570/hypnosis) cast, for Elemental Shamans you can use {{ site.data.talent.hex }} or {{ site.data.talent.capacitor_totem }}. After disrupting the initial cast, the [Hypnosis Bat](https://www.wowhead.com/spell=373552/hypnosis-bat) will despawn so no further damage is required on it.

# Dungeons
<p style="color:red">Click on a dungeon banner to expand it.</p>

<hr>
<div class="dungeon-accordion">
  <div id="accordion">
    <div class="card">
        <div class="card-header" id="sow">
            <div data-toggle="collapse" data-target="#sow-collapse" aria-expanded="true" aria-controls="sow-collapse" class="dungeon-header sow"><h2>Tazavesh: Streets of Wonder</h2></div>
        </div>
        <div id="sow-collapse" class="collapse" aria-labelledby="sow" data-parent="#accordion">
          <div class="card-body" markdown="1">  

**[Customs Security](https://www.wowhead.com/npc=177807/customs-security)**

* Make sure to dodge [Disruption Grenades](https://www.wowhead.com/spell=355900/disruption-grenade) swirlies.
* Use {{ site.data.talent.purge }} to remove [Hard Light Baton](https://www.wowhead.com/spell=355888/hard-light-baton) from [Customs Security](https://www.wowhead.com/npc=177807/customs-security)

**[Armored Overseers](https://www.wowhead.com/npc=177808/armored-overseer)**

* Make sure to dodge [Beam Splicers](https://www.wowhead.com/spell=356001/beam-splicer)

**[Interrogation Specialist](https://www.wowhead.com/npc=177816/interrogation-specialist)**

* Use {{ site.data.spell.wind_shear }} to interrupt [Statis Beam](https://www.wowhead.com/spell=356031/stasis-beam)

**[Support Officer](https://www.wowhead.com/npc=177817/support-officer)**
  
* Either use {{ site.data.spell.wind_shear }} to interrupt the cast of [Hard Light Barrier](https://www.wowhead.com/spell=355934/hard-light-barrier) or use {{ site.data.talent.purge }} to remove it!

## [Zo'Phex the Sentinel](https://www.wowhead.com/npc=175616/zophex)

* Dodge the swirlies from [Armed Security](https://www.wowhead.com/spell=346204/armed-security)
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to adjust to [Rotary Body Armor](https://www.wowhead.com/spell=347992/rotary-body-armor).
* Move away from [Zo'Phex](https://www.wowhead.com/npc=175616/zophex) if [Interrogation](https://www.wowhead.com/spell=348350/interrogation) is cast on you; if you are a Necrolord with Plague-Deviser Marileth you can use {{ site.data.spell.fleshcraft }} to immune this mechanic as the cast finishes. If [Interrogation](https://www.wowhead.com/spell=348350/interrogation) is cast on a party member, make sure you are not stood between them and [Zo'Phex](https://www.wowhead.com/npc=175616/zophex), DPS the cage to break them out!
* [Impound Contraband](https://www.wowhead.com/spell=345770/impound-contraband) causes your weapon to drop to the floor, run over the weapon to pick it up again!
             
---

**[Ancient Core Hound](https://www.wowhead.com/npc=180091/ancient-core-hound#drops;mode:heroic)**

* If [Ancient Dread](https://www.wowhead.com/spell=356407/ancient-dread) cast is allowed to finish, use {{ site.data.talent.cleanse_spirit }} to dispel your group!
* Both [Ancient Dread](https://www.wowhead.com/spell=356407/ancient-dread) and [Lava Breath](https://www.wowhead.com/spell=356404/lava-breath) are interruptible with {{ site.data.spell.wind_shear }}.

**[Market Peacekeeper](https://www.wowhead.com/npc=179840/market-peacekeeper)**

* Use {{ site.data.talent.hex }} or {{ site.data.talent.capacitor_totem }} to stop [Phalanx Field](https://www.wowhead.com/spell=355640/phalanx-field).
* Stay within 10 yards of [Market Peacekeeper](https://www.wowhead.com/npc=179840/market-peacekeeper) or they can cast [Quelling Strike](https://www.wowhead.com/spell=355637/quelling-strike) on you, if this happens whilst casting you will be locked out for four seconds.

**[Veteran Sparkcaster](https://www.wowhead.com/npc=179841/veteran-sparkcaster#abilities;mode:heroic)**

* These mobs have two damaging spells:
   - [Hyperlight Salvo](https://www.wowhead.com/spell=355642/hyperlight-salvo) is the most important to prevent, make sure to coordinate with your group to prevent these!
   - [Scintillate](https://www.wowhead.com/spell=355641/scintillate) deals damage and leaves an increased arcane damage taken debuff so multiple casts going through should be prevented!
   
## The Grand Menagerie

* When afflicted with [Gluttony](https://www.wowhead.com/spell=349627/gluttony) you can soak the [Volatile Anima](https://www.wowhead.com/spell=349989/volatile-anima) created by [Venting Protocol](https://www.wowhead.com/spell=349987/venting-protocol), try not to stand next to your party members as [Gluttony](https://www.wowhead.com/spell=349627/gluttony) also causes you to pulse AoE damage around you in a small circle.
* [Flagellation Protocol](https://www.wowhead.com/spell=349933/flagellation-protocol) is easily stopped by using {{ site.data.talent.purge }} to remove the shield and {{ site.data.spell.wind_shear }} to instantly interrupt the cast!
* [Whirling Annihilation](https://www.wowhead.com/spell=350086/whirling-annihilation) run away from [Venza](https://www.wowhead.com/npc=176705/venza-goldfuse)
* When afflicted by [Chains of Damnation](https://www.wowhead.com/spell=350101/chains-of-damnation) it must be either killed or removed by effects like [Hand of Freedom](https://www.wowhead.com/spell=66115/hand-of-freedom) or [Tiger's Lust](https://www.wowhead.com/spell=116841/tigers-lust).
      
---

## Myza's Oasis

**[Brawling Patrons](https://www.wowhead.com/npc=180159/brawling-patron)**
   - Aim to kill these before they reach 100 rage to avoid [Rowdy](https://www.wowhead.com/spell=353706/rowdy)

**[Disruptive Patrons](https://www.wowhead.com/npc=176565/disruptive-patron)**
   - Aim to kill these before they reach 100 rage to avoid [Rowdy](https://www.wowhead.com/spell=353706/rowdy)
   - Use {{ site.data.spell.wind_shear }} to interrupt [Teleport](https://www.wowhead.com/spell=353783/teleport), [Hyperlight Bolt](https://www.wowhead.com/spell=353836/hyperlight-bolt), and [Suppression](https://www.wowhead.com/spell=353835/suppression)
             
**[Oasis Security](https://www.wowhead.com/npc=179269/oasis-security)**
   - Aim to kill these before they reach 100 rage to avoid [Rowdy](https://www.wowhead.com/spell=353706/rowdy)
   - Use {{ site.data.spell.wind_shear }} to interrupt [Menacing Shout](https://www.wowhead.com/spell=350922/menacing-shout)

* Make sure to avoid the green swirly from [Rotten Food](https://www.wowhead.com/spell=356482/rotten-food), it hurts!
             
**[Zo'gron](https://www.wowhead.com/npc=176564/zogron)**
   - Run away from [Suppression Spark](https://www.wowhead.com/spell=355438/suppression-spark) when cast. {{ site.data.spell.ghost_wolf }} or the Extra Action Button from your instrument can be useful!
   - Use {{ site.data.spell.wind_shear }} to interrupt [Menacing Shout](https://www.wowhead.com/spell=350922/menacing-shout)
   - Avoid standing in-front of [Zo'gron](https://www.wowhead.com/npc=176564/zogron) when they are casting [Crowd Control](https://www.wowhead.com/spell=350919/crowd-control) as it deflects damage and the end of the cast is a frontal attack!
           
---
            
**[Overloaded Mailemental](https://www.wowhead.com/npc=176395/overloaded-mailemental)**

* Interrupt or dispel [Spam Filter](https://www.wowhead.com/spell=347775/spam-filter)
* When [Overloaded Mailementals](https://www.wowhead.com/npc=176395/overloaded-mailemental) die they leave behind a purple zone of Haste you can stand in!
             
**[Defective Sorter](https://www.wowhead.com/npc=176396/defective-sorter)**
 
* Prevent these enemies from casting [Open Cage](https://www.wowhead.com/spell=347721/open-cage) by using {{ site.data.talent.hex }} or {{ site.data.talent.capacitor_totem }}.
             
## [P.O.S.T. Master](https://www.wowhead.com/npc=175646/p-o-s-t-master)

* [Unstable Goods[(https://www.wowhead.com/spell=346947/unstable-goods)
   - Pick up the Unstable Goods and throw them into an active Delivery Chute (Denoted by the wind animation!). {{ site.data.spell.ghost_wolf }} can make this easier.
             
* Use {{ site.data.spell.astral_shift }} as needed when [Fan Mail](https://www.wowhead.com/spell=346742/fan-mail) or [Money Order](https://www.wowhead.com/spell=346962/money-order) are cast.
             
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to position for soaking [Hazardous Liquids](https://www.wowhead.com/spell=346286/hazardous-liquids) or [Money Order](https://www.wowhead.com/spell=346962/money-order).
            
---

**[Commander Zo'far](https://www.wowhead.com/npc=179821/commander-zofar)**

* Ranged and healer party members should try to split on either side of the low walls present where [Commander Zo'far](https://www.wowhead.com/npc=179821/commander-zofar) is positioned. This will make keeping distance between the two people afflicted with [Lethal Force](https://www.wowhead.com/spell=355479/lethal-force) easier. If you do this without the wall, do not forget to use {{ site.data.spell.spiritwalkers_grace }}. If you fail to avoid it, the damage is high enough to warrant using {{ site.data.spell.astral_shift }}.
* Dodge [Shock Mines](https://www.wowhead.com/spell=355476/shock-mines) that are placed around you.

## [So'azmi](https://www.wowhead.com/npc=175806/soazmi)

* Surviving is more important than dealing damage, if you are going to struggle moving to the correct [Relocator](https://www.wowhead.com/spell=347392/deploy-relocators) then do not hesitate to use {{ site.data.spell.ghost_wolf }} or {{ site.data.spell.soulshape }} to successfully avoid [Shuri](https://www.wowhead.com/spell=347610/shuri).
             
* Two interrupts are required to deal with [Double Technique](https://www.wowhead.com/spell=357188/double-technique), the first can be done near instantly, the second should wait until close to the end of the cast to buy time to dps.
     
* Staying loosely spread can help reduce the group damage taken from [Quickblade](https://www.wowhead.com/spell=347623/quickblade), but be aware of remaining in the same section as your group when [Divide](https://www.wowhead.com/spell=347414/divide) is being cast.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="sg">
<div data-toggle="collapse" data-target="#sg-collapse" aria-expanded="true" aria-controls="sg-collapse" class="dungeon-header sg"><h2>Soleah's Gambit</h2></div>
</div>
<div id="sg-collapse" class="collapse" aria-labelledby="sg" data-parent="#accordion">
<div class="card-body" markdown="1"> 

**[Murkbrine Scalebinder](https://www.wowhead.com/npc=178141/murkbrine-scalebinder)**

* You can use {{ site.data.talent.capacitor_totem }}, {{ site.data.talent.hex }}, or {{ site.data.talent.thunderstorm }} to *stop* [Invigorating Fish Stick](https://www.wowhead.com/spell=355132/invigorating-fish-stick#summons).

**[Murkbrine Shellcrusher](https://www.wowhead.com/npc=178139/murkbrine-shellcrusher)**

* You can use {{ site.data.talent.capacitor_totem }}, {{ site.data.talent.hex }}, or {{ site.data.talent.thunderstorm }} to *stop* [Cry of Mrrggllrrgg](https://www.wowhead.com/spell=355057/cry-of-mrrggllrrgg).

**[Coastwalker Goliath](https://www.wowhead.com/npc=178165/coastwalker-goliath)**

* Use {{ site.data.spell.astral_shift }} as appropriate to your key level and current affixes on the second stack of [Undertow](https://www.wowhead.com/spell=355451/undertow). If your group will take more casts of [Undertow](https://www.wowhead.com/spell=355451/undertow) its important to note that you cannot have more than two stacks, so the damage will not scale higher however they can be large hits!

**[Stormforged Guardian](https://www.wowhead.com/npc=178171/stormforged-guardian)**

* Stand at max range to avoid [Charged Pulse](https://www.wowhead.com/spell=355584/charged-pulse) area of effect.
* You can easily sidestep [Crackle](https://www.wowhead.com/spell=355577/crackle) if you notice them aimed at you.

## [Hylbrande](https://www.wowhead.com/npc=175663/hylbrande)

* Use {{ site.data.spell.spiritwalkers_grace }} during [Purged by Fire](https://www.wowhead.com/spell=346959/purged-by-fire).
* Use {{ site.data.talent.thunderstorm }} to group spawned [Vault Purifiers](https://www.wowhead.com/npc=176551/vault-purifier) with the boss to more easily deal with them.
* Interrupt or Stop [Valorous Bolts](https://www.wowhead.com/spell=352347/valorous-bolt) and [Empowered Defense](https://www.wowhead.com/spell=346980/empowered-defense).
* There is a very useful Weakaura for this fight that makes the colour match game simple even when pugging! [Find it here!](https://wago.io/TazaveshConsole)
---

**[Hourglass Tidesage](https://www.wowhead.com/npc=179388/hourglass-tidesage)**

* Interrupt [Brackish Bolt](https://www.wowhead.com/spell=356843/brackish-bolt). 
* Sidestep [Tidal Burst](https://www.wowhead.com/spell=356260/tidal-burst) allowing more interrupts for [Brackish Bolt](https://www.wowhead.com/spell=356843/brackish-bolt)
   
**[Burly Deckhand](https://www.wowhead.com/npc=180015/burly-deckhand)**
   
* Stop [Super Saison](https://www.wowhead.com/spell=356133/super-saison) where possible, particularly if your group comp does not carry an Enrage Dispel!
* Avoid being close to them during [Haymaker](https://www.wowhead.com/spell=368662/haymaker) casts, this can hit non-tank targets if they are out of range!

## [Timecap'n Hooktail](https://www.wowhead.com/npc=175546/timecapn-hooktail)

* Use {{ site.data.spiritwalkers_grace }} to continue DPS while affected by [Anchor Shot](https://www.wowhead.com/spell=352345/anchor-shot)
* Particularly for {{ site.data.legendary.dre }} and/or Necrolord builds you *can* use the spawned adds to increase your {{ site.data.spell.fs }} count however dps to the adds themselves is pointless when the tank is able to catch them in the [Infinite Breath](https://www.wowhead.com/spell=347149/infinite-breath) (this also reduces the funnel benefit as the adds tend to die very quickly).

---

**[Devoted Accomplice](https://www.wowhead.com/npc=180432/devoted-accomplice)**

* Interrupt [Reinvigorate](https://www.wowhead.com/spell=357284/reinvigorate)
   
**[Focused Ritualist](https://www.wowhead.com/npc=180431/focused-ritualist)
   
* Interrupt [Unstable Rift](https://www.wowhead.com/spell=357260/unstable-rift). If no intterupts are available, Stopping the ability via other CC abilities like {{ site.data.spell.capactior_totem }}, {{ site.data.talent.hex }} will also put this cast on cooldown.

**[Adorned Starseer](https://www.wowhead.com/npc=180429/adorned-starseer]
   
* Pay attention to which direction they are facing when [Drifting Star](https://www.wowhead.com/spell=357226/drifting-star) is cast.
* Ensuring {{ site.data.spell.fs }} is available to use when [Wandering Pulsar](https://www.wowhead.com/spell=357238/wandering-pulsar) is cast can help facilitate quick swapping!

## [So'leah](https://www.wowhead.com/npc=177269/soleah)

* Use {{ site.data.spell.astral_shift }} for [Hyperlight Jolt](https://www.wowhead.com/spell=350875/hyperlight-jolt) as needed. 
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to help trigger controlled soaks of [Collapsing Stars](https://www.wowhead.com/spell=353635/collapsing-star). As key level increases this can be very beneficial for your healer for you to assist with, but soaking more than one stack at a time can be deadly so communicate prior to pulling if you intend to do this and keep an eye on how others are positioning!

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

* {{ site.data.talent.purge }} {{ site.data.mythic_plus.dying_breath }}. If these are not {{ site.data.talent.purge }}d and players are affected by {{ site.data.mythic_plus.dying_breath }}, you can dispel them with {{ site.data.talent.cleanse_spirit }}.

**Drust Harvester**

* Rotate interrupts between {{ site.data.mythic_plus.harvest_essence }} and {{ site.data.mythic_plus.spirit_bolt }}.

**Drust Boughbreaker**

* When these mobs reach 50% health, they will channel {{ site.data.mythic_plus.furious_thrashing }} which is dangerous when Fortified. Use {{ site.data.spell.astral_shift }} or healing abilities as needed.
* If you move as the {{ site.data.mythic_plus.bramble_burst }} cast finishes, you can avoid the initial damage.

## Ingra Maloch

* Maintain {{ site.data.spell.flame_shock }} on both Ingra Maloch and Droman Oulfarran.
* Hold your cooldowns for when Ingra is vulnerable with {{ site.data.mythic_plus.dromans_wrath }}.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to avoid {{ site.data.mythic_plus.tears_of_the_forest }}.
* Use {{ site.data.spell.astral_shift }} for {{ site.data.mythic_plus.death_shroud }} as needed.
* Stay alert for Ingra's {{ site.data.mythic_plus.repulsive_visage }}. This is a 3 second cast that will Fear all players around him and cannot be interrupted, so pre-cast {{ site.data.talent.tremor_totem }}.

---

**Mistveil Shaper**

* Interrupt {{ site.data.mythic_plus.bramblethorn_coat }}. If this cast goes off, {{ site.data.talent.purge }} it.

**Mistveil Guardian**

* {{ site.data.mythic_plus.bucking_rampage }} is a knock back ability that will affect tank and melee players. You can hard cancel this ability with {{ site.data.talent.hex }} or {{ site.data.talent.capacitor_totem }}.

**Mistveil Tender**

* Interrupt {{ site.data.mythic_plus.nourish_the_forest }}. If this cast goes off, {{ site.data.talent.purge }} it.

## Mistcaller

* During {{ site.data.mythic_plus.guessing_game }}, maintain {{ site.data.spell.flame_shock }} on the correct Illusionary Clone but also any other Illusions you can. Mistcaller takes 100% reduced damage during this phase.
* {{ site.data.mythic_plus.penalizing_burst }} during {{ site.data.mythic_plus.guessing_game }} will be the highest source of damage taken. Use {{ site.data.spell.astral_shift }} as needed during this phase.
* {{ site.data.talent.hex }} the Illusionary Vulpin. If cleave damage is breaking the CC, you can also use {{ site.data.spell.earthbind_totem }} or {{ site.data.talent.capacitor_totem }} as needed to kite.
* Use {{ site.data.spell.spiritwalkers_grace }} for {{ site.data.mythic_plus.dodge_ball }} as needed.

---

**Spinemaw Staghorn**

* Rotate interrupts for {{ site.data.mythic_plus.stimulate_regeneration }} and {{ site.data.mythic_plus.stimulate_resistance }}. If a {{ site.data.mythic_plus.stimulate_resistance }} cast goes off, {{ site.data.talent.purge }} it.

## Tred'ova

* Rotate interrupts for {{ site.data.mythic_plus.parasitic_pacification }}, {{ site.data.mythic_plus.parasitic_incapacitation }}, and {{ site.data.mythic_plus.parasitic_domination }}.
* {{ site.data.mythic_plus.consumption }} can also be interrupted after the {{ site.data.mythic_plus.gorging_shield }} is broken, but your party may opt to not interrupt so the boss doesn't cast any other mechanics. 
* Use {{ site.data.spell.earthbind_totem }}, {{ site.data.talent.capacitor_totem }}, and potentially {{ site.data.talent.hex }} as needed to control the Gormling Larvae.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed for {{ site.data.mythic_plus.acid_expulsion }}, {{ site.data.mythic_plus.consumption }}, {{ site.data.mythic_plus.mind_link }}, or for kiting away from Gormling Larvae.

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

* Interrupt {{ site.data.mythic_plus.creepy_crawlers }}.

**Fungalmancer**

* Rotate interrupts between {{ site.data.mythic_plus.wonder_grow }} and {{ site.data.mythic_plus.binding_fungus }}. If a {{ site.data.mythic_plus.wonder_grow }} cast goes off, {{ site.data.talent.purge }} it.

**Fungi Stormer**

* {{ site.data.mythic_plus.fungistorm }} is dangerous when Fortified. You can hard cancel this ability with {{ site.data.talent.hex }} or {{ site.data.talent.capacitor_totem }}.

**Pestilent Harvester**

* Rotate interrupts between {{ site.data.mythic_plus.doom_shroom }} and {{ site.data.mythic_plus.hurl_spores }}.

**Gushing Slime**

* {{ site.data.talent.purge }} {{ site.data.mythic_plus.slime_coated }} as needed to minimize pools of {{ site.data.mythic_plus.putrid_bile }}.

## Globgrog

* Position yourself close to the boss to quickly avoid {{ site.data.mythic_plus.slime_wave }}.
* Use {{ site.data.spell.spiritwalkers_grace }} for {{ site.data.mythic_plus.plaguestomp }}. Use {{ site.data.spell.astral_shift }} as needed for both {{ site.data.mythic_plus.plaguestomp }} and {{ site.data.mythic_plus.debilitating_plague }}.
* Use {{ site.data.spell.earthbind_totem }}, {{ site.data.talent.capacitor_totem }}, and {{ site.data.talent.thunderstorm }} as needed to control the Slimy Morsels.

---

**Blighted Spinebreaker**

* When these mobs die, they will spawn Slithering Ooze which will cast {{ site.data.mythic_plus.metamorphosis }}. Kill these by instantly stepping on them, and use {{ site.data.spell.astral_shift }} as needed.

**Plaguebinder**

* Rotate interrupts between {{ site.data.mythic_plus.gripping_infection }} and {{ site.data.mythic_plus.pestilence_bolt }}.

**Rotmarrow Slime**

* Interrupt {{ site.data.mythic_plus.corrosive_gunk }}.
* {{ site.data.talent.purge }} {{ site.data.mythic_plus.slime_coated }} as needed to minimize pools of {{ site.data.mythic_plus.putrid_bile }}.

**Pestilence Slime**

* Interrupt {{ site.data.mythic_plus.viral_globs }}.

**Virulax Blightweaver**

* Interrupt {{ site.data.mythic_plus.pestilence_bolt }}.

**Congealed Slime**

* Because of {{ site.data.mythic_plus.congealed_contagion }}, funnel more priority damage on the Congealed Slime by casting {{ site.data.spell.flame_shock }} on the mobs around it.

## Doctor Ickus

* Funnel more priority damage to the Plague Bomb by casting {{ site.data.spell.flame_shock }} on the boss and Congealed Slime. If your group is planning to CC the Congealed Slime, do not {{ site.data.spell.flame_shock }} it. Consider holding cooldowns for the Plague Bomb as well if needed.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to avoid {{ site.data.mythic_plus.slime_lunge }}.
* Interrupt {{ site.data.mythic_plus.burning_strain }} if no targets are within melee range of the boss.

---

**Defender of Many Eyes**

* Use {{ site.data.talent.capacitor_totem }} to hard cancel {{ site.data.mythic_plus.bulwark_of_maldraxxus }}.

**Brood Ambusher**

* Interrupt {{ site.data.mythic_plus.enveloping_webbing }}.
* {{ site.data.talent.hex }} and {{ site.data.talent.capacitor_totem }} can be used to hard cancel {{ site.data.mythic_plus.stealthlings }}.

**Venomous Sniper**

* Interrupt {{ site.data.mythic_plus.call_venomfang }}.

## Domina Venomblade

* Use {{ site.data.spell.spiritwalkers_grace }} to avoid {{ site.data.mythic_plus.solitary_prey }} when moving with your group and revealing Brood Assassins.
* {{ site.data.talent.capacitor_totem }} can be used to reveal Brood Assassins, but you may consider using {{ site.data.talent.capacitor_totem }} for when they're grouped up instead.
* Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.mythic_plus.shadow_ambush }}.

---

**Ickor Bileflesh**

* Interrupt {{ site.data.mythic_plus.pestilence_bolt }}.

## Margrave Stradama

* Use {{ site.data.spell.spiritwalkers_grace }} as needed to avoid {{ site.data.mythic_plus.plague_crash }}.
* {{ site.data.mythic_plus.infectious_rain }} will be the highest source of damage taken, so use {{ site.data.spell.astral_shift }}.
* Use {{ site.data.spell.frost_shock }}, {{ site.data.spell.earthbind_totem }}, {{ site.data.talent.capacitor_totem }}, and {{ site.data.talent.thunderstorm }} as needed to kite the Plaguebound Devoted adds.

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

* Interrupt {{ site.data.mythic_plus.engorge }}.
* Keep your distance from these mobs as they will cast {{ site.data.mythic_plus.gluttonous_burst }} when they die.

## Kryxis

* Pay attention to Kryxis' {{ site.data.mythic_plus.severing_smash }} cast, and be as far away as possible to stagger the damage taken from {{ site.data.mythic_plus.essence_absorption }}. If necessary, you can also out-range {{ site.data.mythic_plus.severing_smash }} at 100 yards to prevent dropping a {{ site.data.mythic_plus.living_essence }} orb at all.
* {{ site.data.mythic_plus.essence_absorption }} and {{ site.data.mythic_plus.juggernaut_rush }} will be the highest sources of damage taken. Use {{ site.data.spell.astral_shift }} as needed.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to position for {{ site.data.mythic_plus.severing_smash }} or {{ site.data.mythic_plus.juggernaut_rush }}.
* Interrupt {{ site.data.mythic_plus.hungering_drain }}.

---

**Wicked Oppressor**

* Rotate interrupts between {{ site.data.mythic_plus.curse_of_suppression }} and {{ site.data.mythic_plus.wrack_soul }}. If a {{ site.data.mythic_plus.curse_of_suppression }} cast goes off on a party member, dispel with {{ site.data.talent.cleanse_spirit }}.

**Dark Acolyte**

* Interrupt {{ site.data.mythic_plus.dark_bolt_sd }}.

**Grand Overseer**

* Interrupt {{ site.data.mythic_plus.gloom_burst }}.
* Stand at max range to completely negate {{ site.data.mythic_plus.dread_bindings }}.

**Chamber Sentinel**

* Interrupt {{ site.data.mythic_plus.stoneskin }}. If this cast goes off, {{ site.data.talent.purge }} it.

**Depths Warden**

* Interrupt {{ site.data.mythic_plus.barbed_shackles }}.

**Remnant of Fury**

* {{ site.data.mythic_plus.explosive_anger }} can be interrupted, but it is a damage buff with a DoT. It may be helpful to let this cast go off on a party member for a few seconds before dispelling with {{ site.data.talent.cleanse_spirit }}.

**Infused Quill-feather**

* Interrupt {{ site.data.mythic_plus.fiery_cantrip }}.

## Executor Tarvold

* Fleeting Manifestation's {{ site.data.mythic_plus.growing_pride }} will be the highest source of damage taken during this encounter. Focus these down quickly, and use {{ site.data.talent.capacitor_totem }} and {{ site.data.spell.astral_shift }} as needed.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to avoid {{ site.data.mythic_plus.castigate }}, {{ site.data.mythic_plus.sintouched_anima }}, or {{ site.data.mythic_plus.residue }}. {{ site.data.spell.astral_shift }} may be used for {{ site.data.mythic_plus.castigate }} as well.
* If any party members are hit by {{ site.data.mythic_plus.sintouched_anima }}, dispel with {{ site.data.talent.cleanse_spirit }}.

---

## Grand Proctor Beryllia

* {{ site.data.mythic_plus.rite_of_supremacy }} and {{ site.data.mythic_plus.agonize }} will be the highest sources of damage taken. Use {{ site.data.spell.astral_shift }} as needed.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to avoid {{ site.data.mythic_plus.endless_torment }}.

---

## General Kaal

* If targeted by {{ site.data.mythic_plus.wicked_rush }}, you can avoid this entirely if you move quickly enough as the boss is dashing towards you. Otherwise, use {{ site.data.spell.astral_shift }} as needed for {{ site.data.mythic_plus.wicked_gash }}.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed when positioning for {{ site.data.mythic_plus.wicked_rush }} or to avoid {{ site.data.mythic_plus.piercing_blur }}.

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

* Interrupt {{ site.data.mythic_plus.burden_of_knowledge }}.

**Forsworn Goliath**

* Interrupt {{ site.data.mythic_plus.rebellious_fist }}. Consider this the highest priority interrupt in any pack you see this mob in.

**Forsworn Mender**

* Interrupt {{ site.data.mythic_plus.forsworn_doctrine }}.
* {{ site.data.talent.purge }} {{ site.data.mythic_plus.imbue_weapon }}.

## Kin-Tara

* Maintain {{ site.data.spell.flame_shock }} on both Kin-Tara and Azules.
* Position yourself behind Azules to avoid {{ site.data.mythic_plus.attenuated_barrage }}. Use {{ site.data.spell.spiritwalkers_grace }} to follow Azules when it moves.
* Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.mythic_plus.charged_spear }}.

---

**Forsworn Stealthclaw**

* These mobs stealth, but if you know their position, you can use {{ site.data.spell.earthbind_totem }} to aggro and bait them out.

**Forsworn Champion**

* Interrupt {{ site.data.mythic_plus.forsworn_doctrine }}.
* {{ site.data.talent.purge }} {{ site.data.mythic_plus.imbue_weapon }}.

**Forsworn Inquisitor**

* Rotate interrupts between {{ site.data.mythic_plus.internal_strife }} and {{ site.data.mythic_plus.dark_lash }}.

**Forsworn Squad-Leader**

* Because of {{ site.data.mythic_plus.inspiring_presence }}, funnel more priority damage on the Forsworn Squad-Leader by casting {{ site.data.spell.flame_shock }} on the mobs around it.

## Ventunax

* {{ site.data.mythic_plus.dark_stride }} will be the highest source of damage taken, assuming you are avoiding {{ site.data.mythic_plus.dark_bolt_soa }}. Use {{ site.data.spell.astral_shift }} as needed.
* Use {{ site.data.spell.spiritwalkers_grace }} to avoid {{ site.data.mythic_plus.dark_bolt_soa }} from {{ site.data.mythic_plus.shadowhirl }}. {{ site.data.mythic_plus.shadowhirl }} will always fire out {{ site.data.mythic_plus.dark_bolt_soa }} counterclockwise until Ventunax casts {{ site.data.mythic_plus.recharge }}, which will trigger all {{ site.data.mythic_plus.shadowhirl }}s to fire 9 {{ site.data.mythic_plus.dark_bolt_soa }} at the same time.

---

**Forsworn Warden**

* Interrupt {{ site.data.mythic_plus.greater_mending }}.
* {{ site.data.talent.purge }} {{ site.data.mythic_plus.bless_weapon }}.

**Forsworn Justicar**

* Rotate interrupts between {{ site.data.mythic_plus.forced_confession }} and {{ site.data.mythic_plus.dark_lash }}.

## Oryphrion

* Consider holding cooldowns for when the boss is {{ site.data.mythic_plus.drained }}.
* Use {{ site.data.spell.spiritwalkers_grace }} to position and avoid the {{ site.data.mythic_plus.anima_field }} from {{ site.data.mythic_plus.empyreal_ordnance }}.
* Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.mythic_plus.purifying_blast }} or Anima Surge. However, {{ site.data.mythic_plus.purifying_blast }} will be the higher source of damage taken.

---

## Devos, Paragon of Doubt

* Use {{ site.data.spell.spiritwalkers_grace }} as needed to position the pool of {{ site.data.mythic_plus.lingering_doubt }} from {{ site.data.mythic_plus.lost_confidence }} or to stand in {{ site.data.mythic_plus.archons_bastion }}.
* {{ site.data.mythic_plus.lingering_doubt }} will be the highest source of damage taken, so use {{ site.data.spell.astral_shift }} as needed during Phase 2 when transporting {{ site.data.mythic_plus.raw_anima }}.
* If using {{ site.data.legendary.eogs }}, be mindful of {{ site.data.mythic_plus.run_through }} when placing {{ site.data.spell.eq }}.

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

* These mobs will {{ site.data.mythic_plus.leap }} at ranged players. Position yourself close so tank and melee players don't have to chase far.

**Corpse Harvester**

* Interrupt {{ site.data.mythic_plus.drain_fluids }}.

**Stitched Vanguard**

* Interrupt {{ site.data.mythic_plus.meat_shield }}.

**Blight Bag**

* These mobs will {{ site.data.mythic_plus.leap }} at ranged players. Position yourself close so tank and melee players don't have to chase far.

**Zolramus Gatekeeper**

* {{ site.data.mythic_plus.wrath_of_zolramus }} is dangerous when Fortified. Use {{ site.data.spell.astral_shift }} or healing abilities as needed.
* Interrupt {{ site.data.mythic_plus.necrotic_bolt }}.

## Blightbone

* Use {{ site.data.spell.astral_shift }} as needed if targeted by {{ site.data.mythic_plus.heaving_retch }}. Use {{ site.data.spell.spiritwalkers_grace }} as needed to avoid or re-position after {{ site.data.mythic_plus.heaving_retch }}.
* Use {{ site.data.spell.earthbind_totem }}, {{ site.data.talent.capacitor_totem }}, and {{ site.data.talent.thunderstorm }} as needed to control the Carrion Worm adds.

---

**Zolramus Bonemender**

* Rotate interrupts between {{ site.data.mythic_plus.bonemend }} and {{ site.data.mythic_plus.necrotic_bolt }}.
* {{ site.data.mythic_plus.final_bargain }} is a massive heal that cannot be interrupted. You can hard cancel this ability with {{ site.data.talent.hex }} or {{ site.data.talent.capacitor_totem }}.

**Zolramus Sorcerer**

* Interrupt {{ site.data.mythic_plus.necrotic_bolt }}.

**Zolramus Necromancer, Brittlebone Mage**

* Prioritze interrupting Brittlebone Mage's {{ site.data.mythic_plus.frostbolt_volley }}; interrupt the Necromancer's {{ site.data.mythic_plus.necrotic_bolt }} otherwise.
* Focus down Zolramus Necromancer by casting {{ site.data.spell.flame_shock }} on the Brittlebone mobs around it to funnel more priority damage.

**Skeletal Marauder**

* Interrupting {{ site.data.mythic_plus.rasping_scream }} and stay ranged to avoid it. If a cast goes off, cast {{ site.data.talent.tremor_totem }} to dispel any Feared party members.

**Nar'zudah**

* Interrupt {{ site.data.mythic_plus.necrotic_bolt }}.
* {{ site.data.talent.purge }} {{ site.data.mythic_plus.dark_shroud }}.
* Use {{ site.data.spell.astral_shift }} and {{ site.data.spell.spiritwalkers_grace }} for {{ site.data.mythic_plus.grim_fate }} as needed.

**Skeletal Monstrosity**

* Use {{ site.data.spell.spiritwalkers_grace }} as needed for {{ site.data.mythic_plus.reaping_winds }}. Stay ranged to avoid {{ site.data.mythic_plus.chill_scythe }}.

## Amarth, The Harvester

* Stay near the boss in anticipation for {{ site.data.mythic_plus.necrotic_breath }} to quickly avoid it.
* Prioritize interrupting the Reanimated Mage's {{ site.data.mythic_plus.frostbolt_volley }}; interrupt Amarth's {{ site.data.mythic_plus.necrotic_bolt }} otherwise.
* Use {{ site.data.talent.thunderstorm }} and {{ site.data.talent.capacitor_totem }} as needed to control the Reanimated adds.
* {{ site.data.mythic_plus.tortured_echoes }} will be the highest source of damage taken, starting after the first {{ site.data.mythic_plus.final_harvest }}. Use {{ site.data.spell.astral_shift }} as needed.

---

**Corpse Collector**

* Rotate interrupts between {{ site.data.mythic_plus.goresplatter }} and {{ site.data.mythic_plus.drain_fluids }}.

**Flesh Crafter**

* Interrupt {{ site.data.mythic_plus.repair_flesh }}.
* Be sure {{ site.data.mythic_plus.throw_cleaver }} hits an enemy mob. Use {{ site.data.spell.astral_shift }} as needed otherwise.

**Stitching Assistant, Separation Assistant**

* Interrupt Stitching Assistant's {{ site.data.mythic_plus.drain_fluids }}.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to ensure {{ site.data.mythic_plus.throw_cleaver }} is targeted at the other mob or to kite away from Separation Assistant's {{ site.data.mythic_plus.morbid_fixation }}. 

## Surgeon Stitchflesh

* Hold cooldowns for when Surgeon Stitchflesh is active.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed to target {{ site.data.mythic_plus.meat_hook }} at the boss or to kite away from the boss's {{ site.data.mythic_plus.morbid_fixation }}.
* Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.mythic_plus.stitchneedle }}.

---

## Nalthor the Rimebinder

* Use {{ site.data.spell.spiritwalkers_grace }} for {{ site.data.mythic_plus.comet_storm }}.
* {{ site.data.mythic_plus.icebound_aegis }} will be the highest source of damage taken when this is active on the boss. Use {{ site.data.spell.astral_shift }} as needed.

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

* Rotate interrupts between {{ site.data.mythic_plus.unholy_fervor }} and {{ site.data.mythic_plus.necrotic_bolt }}. If an {{ site.data.mythic_plus.unholy_fervor }} cast goes off, {{ site.data.talent.purge }} it.

**Raging Bloodhorn**

* {{ site.data.mythic_plus.raging_tantrum }} is dangerous when Fortified. If your group does not have an enrage dispel, use {{ site.data.spell.astral_shift }} or healing abilities as needed.

## An Affront of Challengers

* Maintain {{ site.data.spell.flame_shock }} on each boss.
* Determine if you can cast {{ site.data.spell.cl }} and {{ site.data.spell.eq }} when the bosses are stacked together, or if a particular boss needs to be focused down.
* Rotate interrupts for Sathel the Accursed's {{ site.data.mythic_plus.searing_death }} and {{ site.data.mythic_plus.necromantic_bolt }}, as well as for Paceran's {{ site.data.mythic_plus.plague_bolt }}.
* {{ site.data.talent.purge }} {{ site.data.mythic_plus.spectral_transference }}.
* Use {{ site.data.spell.astral_shift }} as needed for {{ site.data.mythic_plus.searing_death }} or any spells targeted at you.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed if fixated by Dessia.

---

**Blighted Sludge-Spewer**

* Rotate interrupts between {{ site.data.mythic_plus.withering_discharge }} and {{ site.data.mythic_plus.decaying_filth }}.
* These mobs will leap at ranged players with {{ site.data.mythic_plus.leaping_thrash }}. Position yourself close so tank and melee players don't have to chase far.

**Disgusting Refuse**

* These mobs will leap at ranged players with {{ site.data.mythic_plus.leaping_thrash }}. Position yourself close so tank and melee players don't have to chase far.

**Putrid Butcher**

* Hard cancel {{ site.data.mythic_plus.devour_flesh }} with {{ site.data.talent.capacitor_totem }}.

**Diseased Horror**

* Interrupt {{ site.data.mythic_plus.meat_shield }}.

## Gorechop

* Maintain {{ site.data.spell.flame_shock }} on the boss and Oozing Leftovers.
* {{ site.data.mythic_plus.tenderizing_smash }} and {{ site.data.mythic_plus.meat_hooks }} often overlap, but you will not be caught by {{ site.data.mythic_plus.tenderizing_smash }} if you are in melee range of the boss. Use {{ site.data.spell.spiritwalkers_grace }} as needed to avoid {{ site.data.mythic_plus.meat_hooks }}.
* {{ site.data.mythic_plus.leaping_thrash }} from Oozing Leftovers will be the highest source of damage taken. Use {{ site.data.spell.astral_shift }} as needed when they spawn.

---

**Dokigg the Brutalizer, Nekthara the Mangler**

Only one of these duelists will be active in a run.

When Dokigg is active:

* {{ site.data.mythic_plus.brutal_leap }} will target a ranged player. Position yourself close so tank and melee players don't have to chase far.
* Interrupt {{ site.data.mythic_plus.battle_trance }}.

When Nekthara is active:

* Stay ranged to avoid {{ site.data.mythic_plus.whirlwind }}.
* Don't be caught casting when Nekthara is casting {{ site.data.mythic_plus.interrupting_roar }}.

**Harugia the Bloodthirsty, Heavin the Breaker**

Only one of these duelists will be active in a run.

When Harugia is active:

* {{ site.data.mythic_plus.bloodthirsty_charge }} will target a ranged player. Make sure you are spread out and able to avoid it.
* Avoid {{ site.data.mythic_plus.ricocheting_blade }} through line-of-sight when possible.
* Interrupt {{ site.data.mythic_plus.battle_trance }}.

When Heavin is active:

* Stay ranged to avoid {{ site.data.mythic_plus.ground_smash }}.
* Don't be caught casting when Heavin is casting {{ site.data.mythic_plus.interrupting_roar }}.

**Rek the Hardened, Advent Nevermore**

Only one of these duelists will be active in a run.

When Rek is active:

* Stay ranged to avoid {{ site.data.mythic_plus.whirlwind }}.

When Advent Nevermore is active:

* Position yourself close to move quickly and maintain damage uptime during {{ site.data.mythic_plus.unbreakable_guard }}.
* Avoid {{ site.data.mythic_plus.ricocheting_blade }} through line-of-sight when possible.

**Ancient Captain**

* Interrupt {{ site.data.mythic_plus.demoralizing_shout }}.

**Shambling Arbalest**

* {{ site.data.mythic_plus.jagged_quarrel }} is dangerous when Fortified, and these are the most lethal mobs in the packs they're in. Use {{ site.data.spell.astral_shift }} as needed if targeted by {{ site.data.mythic_plus.jagged_quarrel }}.

## Xav the Unfallen

* Xav always does {{ site.data.mythic_plus.seismic_leap }} prior to {{ site.data.mythic_plus.might_of_maldraxxus }}, which will be the highest source of damage taken. Use {{ site.data.spell.astral_shift }} as needed.
* As you may not be pulled down for {{ site.data.mythic_plus.blood_and_glory }}, consider refreshing {{ site.data.spell.flame_shock }} early to ensure the boss has {{ site.data.spell.flame_shock }} uptime before an {{ site.data.mythic_plus.oppressive_banner }} spawns.
* Use {{ site.data.spell.spiritwalkers_grace }} as needed when dodging the mechanics from {{ site.data.mythic_plus.might_of_maldraxxus }} ({{ site.data.mythic_plus.crushing_slam }}, {{ site.data.mythic_plus.massive_cleave }}, {{ site.data.mythic_plus.deafening_crash }}). Don't be caught casting when Xav is casting {{ site.data.mythic_plus.deafening_crash }}; the interrupt effect still applies even when you are out of the circle.

---

**Portal Guardian**

* {{ site.data.mythic_plus.soulstorm }} is dangerous when Fortified. Use {{ site.data.spell.astral_shift }} or healing abilities as needed.
* Dispel {{ site.data.mythic_plus.shadow_vulnerability }} with {{ site.data.talent.cleanse_spirit }}. If this is not dispelled, players will take increased damage from {{ site.data.mythic_plus.soulstorm }}.

**Maniacal Soulbinder**

* Rotate interrupts between {{ site.data.mythic_plus.necrotic_bolt_volley }} and {{ site.data.mythic_plus.necrotic_bolt }}.

**Bone Magus**

* Rotate interrupts between {{ site.data.mythic_plus.bone_spear }} and {{ site.data.mythic_plus.grave_spike }}.
* {{ site.data.talent.purge }} {{ site.data.mythic_plus.bone_shield }}.

**Nefarious Darkspeaker**

* Use {{ site.data.spell.spiritwalkers_grace }} as needed to avoid {{ site.data.mythic_plus.death_winds }}.
* Dispel {{ site.data.mythic_plus.curse_of_desolation }} with {{ site.data.talent.cleanse_spirit }}. If any players are caught by the Fear, use {{ site.data.talent.tremor_totem }}.
* Interrupt {{ site.data.mythic_plus.spirit_frost }}.

## Kul'tharok

* Use {{ site.data.spell.spiritwalkers_grace }} as needed to maneuver {{ site.data.mythic_plus.draw_soul }}. Position yourself on the {{ site.data.mythic_plus.grasping_hands }} so your Soul is rooted in it to catch it quickly.
* Use {{ site.data.spell.astral_shift }} as needed when you are Soulless or you have the {{ site.data.mythic_plus.phantasmal_parasite }} debuff.

---

## Mordretha, the Endless Empress

* Stay near the boss in anticipation for {{ site.data.mythic_plus.dark_devastation }} to quickly avoid it.
* Consider holding Stormkeeper for Deathwalkers if necessary. Use {{ site.data.talent.capacitor_totem }} as needed when they are grouped up.
* {{ site.data.mythic_plus.grasping_rift }} and {{ site.data.mythic_plus.manifest_death }} often overlap. Use {{ site.data.spell.spiritwalkers_grace }} for this combo as needed.
* If any party members fail to run away from {{ site.data.mythic_plus.grasping_rift }}, dispel {{ site.data.mythic_plus.death_grasp }} with {{ site.data.talent.cleanse_spirit }}.
* When the boss is at 50% health, she will begin casting {{ site.data.mythic_plus.echos_of_carnage }}. This ability will passively be your highest source of damage taken (even when dodging the ghost animations), so use {{ site.data.spell.astral_shift }} at this point as needed.

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
