---
layout: page
title: "Mythic+ DF Season 2"
last_update: 16/02/2023
game_version: 10.0.5 Dragonflight
authors: Elivrio
toc: false
---

# Introduction

This guide was made possible by:

* Altenna (Discord: JudgeJames#0001 \| [Twitch](https://www.twitch.tv/judgejames) \| [Twitter](https://twitter.com/_judgejames_))
* Amani (Discord: Amani#0001 \| [Discord Server](https://discordapp.com/invite/zTQhBn8) \| [YouTube](https://www.youtube.com/channel/UC5IikzgR1TeED-DxPLqISHg))
* Eokira (Discord: Eokira#7823)
* Gaka (Discord: Gaka#7410)
* HawkCorrigan (Discord: HawkCorrigan#1811)
* Tyrindra [EU-Ysondre] (Discord: Elivrio#1450)

Information on this page is written with the assumption that you understand the new priority list and talents in Dragonflight Season 1. If you have not done so, we highly recommend reading our other resources to learn about them!

This guide is intended to help you identify critical mobs and abilities as well as improve your mechanical literacy in using your toolkit as an Elemental Shaman in each dungeon. If you have suggestions to improve the information in this guide please contact Eokira#7823 using the [Earthshrine Elemental channel](https://discord.gg/pGkPDzh7rP) or the [Storm, Earth & Lava discord](https://discord.gg/y5dUf3PWrU).

# Talents

There are two main build that will be used in Dragonflight Season Two : Wildfire and Lightning. You can find variation on each of them in the [build page](https://stormearthandlava.com/guide/general/builds.html).

# Miscellaneous Tips

* Although strategies are listed for mobs and bosses, communicating with your group how each pull should be executed is more important. Some suggestions may not be applicable depending on your group's strategy.

* {{ site.data.talent.ee }} is a potent ability best used to soak damage away from the tank or as an emergency button to avoid a party wipe. Communicate with your tank on using {{ site.data.talent.ee }} for challenging trash packs as well as remind your healer to keep the {{ site.data.talent.ee }} healthy as needed. Remember that with {{ site.data.talent.primal_elementalist }}, you can manually move the pet and single-target stun with {{ site.data.spell.pulverize }}. However, keep in mind that you cannot have {{ site.data.talent.ee }} and {{ site.data.talent.fe }} summoned at the same time with {{ site.data.talent.primal_elementalist }}.

* Often times, your tank may need to kite. Remember the kiting tools at your disposal ({{ site.data.spell.earthbind_totem }}, {{ site.data.spell.frs }}, {{ site.data.talent.capacitor_totem }}, {{ site.data.talent.thunderstorm }}, {{ site.data.talent.thundershock }}, {{ site.data.talent.earthgrab_totem }}) to distance trash packs away from your tank.

* Routinely support your healer and your group with healing abilities and {{ site.data.talent.cleanse_spirit }}. Note that the healers that cannot remove Curses are: Discipline Priest, Holy Priest, Holy Paladin, and Mistweaver Monk.

* Plan with your group in advance on where to use {{ site.data.spell.bl }}.

* Some dungeons do not require {{ site.data.talent.purge }} or {{ site.data.talent.cleanse_spirit }}. You can spend that talent point somewhere else in the tree.

* Try to keep maelstrom at the end of a pack to get {{ site.data.spell.eq }}, {{ site.data.talent.sop }} and {{ site.data.spell.fs }} spreading at the start of the next pull.

* Use your CDs. {{ site.data.talent.fe }}, {{ site.data.talent.se }}, {{ site.data.talent.sk }}, {{ site.data.talent.lmt }} or even {{ site.data.talent.ee }}, {{ site.data.talent.swg }} and {{ site.data.talent.ag }} are useless if you never press them cause you are waiting for "the right moment". Planning CDs is even better but learn to press them first.

* Die and retry. You need to experience a lot of death and bad keys to know when a key is good.

* Doing m+ with Pick Up Groups (PUGs) is a pain cause they expect you to already have the experience. Take your time, mute people if you have to, the only way to get better is to play.  

* Scaling isn't linear. That means that going from 15s to 16s is way easier than going from 19s to 20s. You are not bad, the game is making it more difficult.

* [Learn to log your dungeon runs!](https://www.warcraftlogs.com/help/start) Warcraft Logs filters dungeons with pull-by-pull analyses and records replays of dungeon runs. Having logs available to share is helpful for you to receive actionable feedback.

# Affixes

**Level 2:**
* {{ site.data.affixes.fortified }}: Consider using {{ site.data.spell.bl }} on hard mob pulls.
* {{ site.data.affixes.tyrannical }}: Boss fights turn into a battle of endurance.

*Note:* Unlike many of the previous extensions, the balance between these two affixes is quite good. As normal mobs are generally easier to navigate than bosses, keys during {{ site.data.affixes.fortified }} weeks will usually be easier to finish but also harder to do in time, since 60% to 70% of the timer in a key is spent doing mobs. On the contrary, hard bosses during a {{ site.data.affixes.tyrannical }} week can be huge walls that will stop you from finishing the key. But the timer will often be more lenient.

**Level 4:**

* {{ site.data.affixes.bolstering }}: Damage trash packs down as evenly as you can. Swap to priority damage rotation for any lethal mobs or if mob health within trash packs are uneven.
* {{ site.data.affixes.bursting }}: Support your party members and use your healing abilities to mitigate the {{ site.data.affixes.burst }} debuff. Use {{ site.data.talent.as }} as needed if stacks are high.
* {{ site.data.affixes.raging }}: Be ready to use your kiting toolkit to support your tank when needed. Consider using {{ site.data.talent.capacitor_totem }} and {{ site.data.talent.sk }} to finish {{ site.data.affixes.enrage }} mobs more safely and quickly.
* {{ site.data.affixes.sanguine }}: Damage trash packs down as evenly as you can to lessen time spent in Sanguine, but be sure to not slow or stun mobs dying unevenly. Use {{ site.data.talent.thunderstorm }} as needed to knock mobs out of {{ site.data.affixes.sanguine_ichor }}.
* {{ site.data.affixes.spiteful }}: As mobs are dying, be ready to use your kiting toolkit to support your melee players. Consider taking advantage of {{ site.data.affixes.spiteful_shade }} as additional {{ site.data.spell.cl }} or {{ site.data.spell.fs }} targets.

**Level 7:**

* {{ site.data.affixes.explosive }}: {{ site.data.affixes.explosives }} orbs can be destroyed in a single {{ site.data.spell.frs }} global. This will be your most efficient tool to deal with them as your other abilities are more valuable for trash.
* {{ site.data.affixes.grievous }}: Remember that direct heals remove one stack of {{ site.data.affixes.grievous_wound }}. Support your party members with {{ site.data.spell.healing_surge }} and {{ site.data.talent.ag }} as needed.
* {{ site.data.affixes.quaking }}: Maintain your distance from party members, and be mindful about canceling casts if {{ site.data.affixes.quake }} overlaps with {{ site.data.talent.swg }}.
* {{ site.data.affixes.storming }}: Maintain your distance from mobs to avoid {{ site.data.affixes.storming }}. Use {{ site.data.talent.swg }} as needed in tight spaces or when maneuvering any mechanics.
* {{ site.data.affixes.volcanic }}: Watch your feet. Use {{ site.data.talent.swg }} as needed to maintain your damage uptime while avoiding {{ site.data.affixes.volcanic_plume }}.

**Seasonal Affix:**


# Dungeons
<p style="color:red">Click on a dungeon banner to expand it.</p>

<hr>
<div class="dungeon-accordion">

<div id="accordion">
<div class="card">
<div class="card-header" id="bh">
<div data-toggle="collapse" data-target="#bh-collapse" aria-expanded="true" aria-controls="bh-collapse" class="dungeon-header bh"><h2>Brackenhide Hollow</h2></div>
</div>
<div id="bh-collapse" class="collapse" aria-labelledby="bh" data-parent="#accordion">
<div class="card-body" markdown="1">

## Talent

### Notable talent choices
* {{ site.data.talent.tremor_totem }} can be very useful to prevent catastrophic situations with {{ site.data.dungeon.bh.hideous_cackle }}. It is recommended but not mandatory.

### Wildfire

<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkAJINaRLtkQOAAAAAAAUCQKJJCRBIRSTJJQSSA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

---

## {{ site.data.dungeon.bh.rira_hackclaw }}'s War Band trash

**{{ site.data.dungeon.bh.claw_fighter }}**
* Use {{ site.data.talent.swg }} to kite {{ site.data.dungeon.bh.vicious_clawmangle }}. Be ready to use {{ site.data.talent.as }} if needed.

**{{ site.data.dungeon.bh.cruel_bonecrusher }}**
* Just does tank Damage.

**{{ site.data.dungeon.bh.vicious_hyena }}**
* Use {{ site.data.talent.swg }} to kite when affected by {{ site.data.dungeon.bh.scented_meat }}. Be ready to use {{ site.data.talent.as }} if needed.

**{{ site.data.dungeon.bh.bonebolt_hunter }}**
* They do a lot of unavoidable damage with {{ site.data.dungeon.bh.shoot }} and {{ site.data.dungeon.bh.bone_bolt}}. Be ready to use {{ site.data.talent.as }} as needed.
* Move out of {{ site.data.dungeon.bh.toxic_trap }}.

**{{ site.data.dungeon.bh.trickclaw_mystic }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.earth_bolt }}.
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.bh.focus_earth }}.

**{{ site.data.dungeon.bh.decay_speaker }}**
* Always prio focus this mob.
* Dodge the green {{ site.data.dungeon.bh.withering_burst }} swirlies. Getting hit by one will apply {{ site.data.dungeon.bh.withering }}, and that sucks.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.decay_surge }}.
* Quickly nuke {{ site.data.dungeon.bh.rotchanting_totem }} whenever it's summoned or it will buff nearby {{ site.data.dungeon.bh.trickclaw_mystic }}.

**{{ site.data.dungeon.bh.bracken_warscourge }}**
* {{ site.data.dungeon.bh.pack_tactics }} will buff its nearby ally. Do not do this mob in large pulls or kill it quickly.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.hideous_cackle }}. Use {{ site.data.talent.tremor_totem }} if a cast is going through to avoid a catastrophe.
* Stay farther than 5 yards away to ignore {{ site.data.dungeon.bh.ragestorm }}.

---

## {{ site.data.dungeon.bh.rira_hackclaw }}'s War Band
* Have {{ site.data.spell.fs }} active on all targets for {{ site.data.talent.splinter }} and {{ site.data.talent.sfd }} value.
* Cleave them down at the same time, they will gain {{ site.data.dungeon.bh.bloodfrenzy }} whenever one of them drops below 15% HP.
* The bosses gain haste with {{ site.data.dungeon.bh.prey_on_the_weak }} whenever players are below 90% HP. If needed, use {{ site.data.talent.ag }}, or even {{ site.data.talent.hst }} and {{ site.data.spell.healing_surge }} to help the healer remove the {{ site.data.dungeon.bh.predatory_instincts }} stacks.
* Each Gnoll also its own abilities, making this fight hard to learn.
* {{ site.data.dungeon.bh.rira_hackclaw }}
  - Never be on the tank, {{ site.data.dungeon.bh.cleave }} cleaves (duh).
  - Hide behind the Tank when targeted by {{ site.data.dungeon.bh.savage_charge }}.
  - Kite and stay farther than 8 yards away during {{ site.data.dungeon.bh.bladestorm }}. Use {{ site.data.talent.swg }} to keep uptime while kiting.
* {{ site.data.dungeon.bh.tricktotem }}
  - Assign a party member to always interrupt {{ site.data.dungeon.bh.greater_healing_rapids }}. Interrupt {{ site.data.dungeon.bh.earth_bolt_boss }} with the group other kicks.
  - Nuke {{ site.data.dungeon.bh.hextrick_totem }} to help your critterised party members.
* {{ site.data.dungeon.bh.gashtooth }}
  - Use {{ site.data.talent.ag }} to help your healer during {{ site.data.dungeon.bh.gash_frenzy}}.
  - Use {{ site.data.talent.as }}, {{ site.data.talent.ee }}, {{ site.data.item.potion_rhp }} and {{ site.data.item.hs }} as needed to survive {{ site.data.dungeon.bh.marked_for_butchery}}.

---

## {{ site.data.dungeon.bh.gutshot }} trash

**{{ site.data.dungeon.bh.fleshripper_vulture }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.screech }}.

**{{ site.data.dungeon.bh.gutchewer_bear }}**
* Just does tank Damage.

**{{ site.data.dungeon.bh.rotbow_stalker }}**
* {{ site.data.dungeon.bh.pack_tactics }} will buff its nearby ally. Do not do this mob in large pulls or kill it quickly.
* They do a lot of unavoidable damage with {{ site.data.dungeon.bh.shoot }} and {{ site.data.dungeon.bh.bone_bolt}}. Be ready to use {{ site.data.talent.as }} as needed.
* Get out of their {{ site.data.dungeon.bh.bone_bolt_volley }} frontal.
* {{ site.data.dungeon.bh.scented_meat }} is a debuff that will make any {{ site.data.dungeon.bh.vicious_hyena }}, {{ site.data.dungeon.bh.fleshripper_vulture }} and {{ site.data.dungeon.bh.gutchewer_bear }} in the area attack the targeted player. Stay attentive on who the debuff goes, use {{ site.data.spell.earthbind_totem }} and {{ site.data.talent.capacitor_totem }} to help the focused player kite. Use {{ site.data.talent.swg }} to keep uptime while kiting.

**{{ site.data.dungeon.bh.gutstabber }}**
* This mobs use {{ site.data.dungeon.bh.stealth }} and are scattered in the area. Try to learn their position to avoid running randomly into them.
* Be ready to use {{ site.data.talent.as }} if you body pull or are targeted by {{ site.data.dungeon.bh.withering_poison }}.

---

## {{ site.data.dungeon.bh.gutshot }}
* Have {{ site.data.spell.fs }} active on all targets for {{ site.data.talent.splinter }} and {{ site.data.talent.sfd }} value.
* Dodge {{ site.data.dungeon.bh.bounding_leap }} brown swirly and {{ site.data.dungeon.bh.ensnaring_trap }} grey swirly.
* Kill the {{ site.data.dungeon.bh.rotfang_hyena }} as soon as possible.
* {{ site.data.dungeon.bh.meat_toss }} will make the {{ site.data.dungeon.bh.rotfang_hyena }} attack the targeted player. Kite them into the {{ site.data.dungeon.bh.ensnaring_trap }} for free damage and CC. Use {{ site.data.talent.swg }} to keep uptime while kiting.
* Beware of {{ site.data.dungeon.bh.masters_call }} freeing the trapped {{ site.data.dungeon.bh.rotfang_hyena }} and giving them movement speed. Be ready to get away.
* Do not bait {{ site.data.dungeon.bh.ensnaring_trap }} behind the tank, they will get knocked back by {{ site.data.dungeon.bh.gut_shot }}.

---

## {{ site.data.dungeon.bh.treemouth }} trash

Going straight from {{ site.data.dungeon.bh.gutshot }} to {{ site.data.dungeon.bh.treemouth }} area, you should only encounter one new type of mob (a mini-boss).

### {{ site.data.dungeon.bh.stinkbreath }}
* Stay relatively close, but not closer than 7 yards to ignore {{ site.data.dungeon.bh.violent_whirlwind }}.
* Quickly move to the side when targeted by the {{ site.data.dungeon.bh.stink_breath }} frontal or you will be {{ site.data.dungeon.bh.disoriented }}. Be careful, the cast time is short. Use {{ site.data.talent.swg }} to keep uptime while dodging.
* Be careful not to fall off the bridge if you plan to use {{ site.data.talent.gust_of_wind }} to dodge {{ site.data.dungeon.bh.stink_breath }}.

Taking a detour, it's also possible to encounter new mobs. They shouldn't be in most route, but here are some advices on how to handle them.

### {{ site.data.dungeon.bh.treemouth }} optional trash

**{{ site.data.dungeon.bh.decaying_slime }}**
* It will {{ site.data.dungeon.bh.burst }} on death, move out of it.

**{{ site.data.dungeon.bh.infected_lasher }}**
* Just does tank damage.

**{{ site.data.dungeon.bh.brackenhide_shaper }}**
* use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.touch_of_decay }}.
* Don't pull aggro on the new {{ site.data.dungeon.bh.infected_lasher }} summoned by {{ site.data.dungeon.bh.summon_lashers }}.

**{{ site.data.dungeon.bh.decayed_elder }}**
* Don't pull aggro on the new {{ site.data.dungeon.bh.infected_lasher }} summoned by {{ site.data.dungeon.bh.summon_lasher }}.
* Use {{ site.data.talent.thunderous_paws }} to get out of {{ site.data.dungeon.bh.decaying_roots }}.

**{{ site.data.dungeon.bh.wilted_oak }}**
* This is the most dangerous enemy in the area, be sure to focus it.
* Don't pull aggro on the new {{ site.data.dungeon.bh.infected_lasher }} summoned by {{ site.data.dungeon.bh.essence_of_decay }}.
* Stay away from it to ignore {{ site.data.dungeon.bh.stomp }}.
* Dodge the {{ site.data.dungeon.bh.necrotic_breath }} frontal.

---

## {{ site.data.dungeon.bh.treemouth }}
* Don't be on the tank, {{ site.data.dungeon.bh.vine_whip }} and {{ site.data.dungeon.bh.decay_spray }} cleave!
* {{ site.data.dungeon.bh.decay_spray }} will summon 4 {{ site.data.dungeon.bh.decaying_slime }}. Cleave them and use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.gushing_ooze }}.
* Spread {{ site.data.spell.fs }} to all targets for {{ site.data.talent.splinter }} value!
* Use {{ site.data.talent.swg }} to kite away while {{ site.data.dungeon.bh.grasping_vines }} is pulling you. Don't walk into {{ site.data.dungeon.bh.withering_away }} puddles.
* {{ site.data.dungeon.bh.treemouth }} will {{ site.data.dungeon.bh.consume }} any target within 10 yards after casting {{ site.data.dungeon.bh.grasping_vines }}.
If no player is consumed, it will gain {{ site.data.dungeon.bh.starving_frenzy }}. You need to rotate one player to be eaten.
* You can still cast while consumed. Use {{ site.data.talent.as }}, {{ site.data.talent.ee }}, {{ site.data.item.potion_rhp }} and {{ site.data.spell.healing_surge }} to stay alive at all cost.

---

## {{ site.data.dungeon.bh.decatriarch_wratheye }} trash

**{{ site.data.dungeon.bh.filth_caller }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.decay_surge }}.
* Move out of {{ site.data.dungeon.bh.rotting_surge }} green swirly. Use {{ site.data.talent.swg }} to keep uptime while moving.

**{{ site.data.dungeon.bh.disease_slasher }} and {{ site.data.dungeon.bh.wither_biter }}**
* They just do tank damage.

**{{ site.data.dungeon.bh.fetid_rotsinger }}**
* {{ site.data.dungeon.bh.pack_tactics }} will buff its nearby ally. Do not do this mob in large pulls or kill it quickly.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.burst_of_decay}}.
* **IMMMEDIATELY** swap on the {{ site.data.dungeon.bh.decay_totem }} whenever it's spawned by {{ site.data.dungeon.bh.summon_totem }}.

**{{ site.data.dungeon.bh.vile_rothexer }}**
* Stay spreaded at 5 yards to avoid spreading {{ site.data.dungeon.bh.withering_contagion }} to your party.
* If you can, stay farther than 30 yards to avoid {{ site.data.dungeon.bh.siphon_decay }}.
* {{ site.data.spell.wind_shear }} has a 30 yards range. You might want to sit at 25-30 yards to be able to interrupt spells and move out when {{ site.data.dungeon.bh.siphon_decay }} is being casted. Use {{ site.data.talent.swg }} to keep uptime while moving.

---

## {{ site.data.dungeon.bh.decatriarch_wratheye }}
* The room is really small and there are many area denials in the fight. Be ready to move at all time and use {{ site.data.talent.swg }} when needed.
* {{ site.data.dungeon.bh.choking_rotcloud }} is an AoE that rotates around the room. You want to dodge it at all cost to avoid getting {{ site.data.dungeon.bh.withering_rot }} stacks.
* Instantly swap on the {{ site.data.dungeon.bh.rotburst_totem }} whenever it spawns. Use {{ site.data.talent.ag }} to help the healer as needed.
* {{ site.data.dungeon.bh.decaying_strength }} will apply {{ site.data.dungeon.bh.withered_eruption }} to everyone on your team. The more stacks of {{ site.data.dungeon.bh.withering_rot }} you have, the larger the size of the bomb you get. Make sure to spread accordingly!
Use {{ site.data.talent.as }} as needed to survive the initial hit.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="hoi">
<div data-toggle="collapse" data-target="#hoi-collapse" aria-expanded="true" aria-controls="hoi-collapse" class="dungeon-header hoi"><h2>Halls of Infusion</h2></div>
</div>
<div id="hoi-collapse" class="collapse" aria-labelledby="hoi" data-parent="#accordion">
<div class="card-body" markdown="1">

## Talent

### Notable talent choices

### Wildfire
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkAJINaRLtkQOAAAAAAAUCgSSINRhgkkUSJAJJBA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

---

## {{ site.data.dungeon.hoi.example }} trash

**{{ site.data.dungeon.hoi.example }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.hoi.example }}.
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.hoi.example }} on the buffed enemy.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="neltharus">
<div data-toggle="collapse" data-target="#neltharus-collapse" aria-expanded="true" aria-controls="neltharus-collapse" class="dungeon-header neltharus"><h2>Neltharus</h2></div>
</div>
<div id="neltharus-collapse" class="collapse" aria-labelledby="neltharus" data-parent="#accordion">
<div class="card-body" markdown="1">

## Talents

### Notable Talent Choices

### Wildfire
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkAJINKRLtkQOAAAAAAAUCQKJh0EFgkk0SJAJJBA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

---

## {{ site.data.dungeon.neltharus.example }} trash

**{{ site.data.dungeon.neltharus.example }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.neltharus.example }}.
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.neltharus.example }} on the buffed enemy.

</div>
</div>
</div>

<div class="card">
<div class="card-header" id="uldaman">
<div data-toggle="collapse" data-target="#uldaman-collapse" aria-expanded="true" aria-controls="uldaman-collapse" class="dungeon-header uldaman"><h2>Uldaman: The Legacy of Tyr</h2></div>
</div>
<div id="uldaman-collapse" class="collapse" aria-labelledby="uldaman" data-parent="#accordion">
<div class="card-body" markdown="1">

## Talents

### Notable Talent Choices

### Wildfire
<div class="iframe-holder">
<iframe src="https://www.raidbots.com/simbot/render/talents/BYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0SrIJtkAJINKRLtkQOAAAAAAAUCQKJJCRBIJJtUCQSSA?width=530&level=70" frameborder="0" width="530px" height="100%"></iframe>
</div>

---

## {{ site.data.dungeon.uldaman.example }} trash

**{{ site.data.dungeon.uldaman.example }}**
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.uldaman.example }}.
* Use {{ site.data.talent.purge }} to dispel {{ site.data.dungeon.uldaman.example }} on the buffed enemy.

</div>
</div>
</div>

<div class="card-body" markdown="1">

# Useful WeakAuras

* [Dragonflight Season 1 Dungeons Pack](https://wago.io/DF-Dungeons) by Jodsderechte
* [Thundering Helper](https://wago.io/thunder) by Ellesmere
* [Quaking Helper](https://wago.io/QuakeInterrupt) by JackTheEgg
* [Mythic+ Auto Marker](https://wago.io/1ctv3b91K) by Megawatt
* [Mythic+ Timer](https://wago.io/M+Timer) by Reloe

# Additional Resources

* [Wowhead Elemental Shaman Mythic+ Guide](https://www.wowhead.com/guide/classes/shaman/elemental/mythic-plus-dungeon-tips) by HawkCorrigan
* [Icy-Veins Elemental Shaman Mythic+ Tips](https://www.icy-veins.com/wow/elemental-shaman-pve-dps-mythic-plus-tips) by Stormy
* [Mythic+ Subcreation](https://mplus.subcreation.net/elemental-shaman.html)
* [Mythic+ Murlok.io](https://murlok.io/shaman/elemental/mm+)
</div>
