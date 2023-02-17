---
layout: page
title: "Mythic+ DF Season 1"
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
* {{ site.data.dungeon.bh.pack_tactics }} will buff its nearby ally. Do not do it in large pulls or kill it quickly.
* Use {{ site.data.spell.wind_shear }} to interrupt {{ site.data.dungeon.bh.hideous_cackle }}. Use {{ site.data.talent.tremor_totem }} if a cast is going through to avoid a catastrophe.
* Stay farther than 5 yards away to ignore {{ site.data.dungeon.bh.ragestorm }}.

---

## {{ site.data.dungeon.bh.rira_hackclaw }}'s War Band
* Cleave them down at the same time, they will gain {{ site.data.dungeon.bh.bloodfrenzy }} whenever one of them drops below 15% HP.
* The bosses gain haste with {{ site.data.dungeon.bh.prey_on_the_weak }} whenever players are below 90% HP. Use {{ site.data.talent.ag }} and even {{ site.data.talent.hst }} and {{ site.data.spell.healing_surge }} to help the healer remove their {{ site.data.dungeon.bh.predatory_instincts }} stacks.
* Each Gnoll also has 3 abilities, making this fight hard to learn.
* {{ site.data.dungeon.bh.rira_hackclaw }}
  - Never be on the tank, {{ site.data.dungeon.bh.rira_hackclaw }}'s {{ site.data.dungeon.bh.cleave }} cleaves (duh).
  - Hide behind the Tank when targeted by {{ site.data.dungeon.bh.rira_hackclaw }}'s {{ site.data.dungeon.bh.savage_charge }}.
  - Kite and stay farther than 8 yards away during  {{ site.data.dungeon.bh.rira_hackclaw }}'s {{ site.data.dungeon.bh.bladestorm }}. Use {{ site.data.talent.swg }} to keep uptime while kiting.
* {{ site.data.dungeon.bh.tricktotem }}
  - Assign a party member to always interrupt {{ site.data.dungeon.bh.tricktotem }}'s {{ site.data.dungeon.bh.greater_healing_rapids }}. Interrupt {{ site.data.dungeon.bh.tricktotem }}'s {{ site.data.dungeon.bh.earth_bolt_boss }} with the group other kicks.
  - Nuke {{ site.data.dungeon.bh.tricktotem }}'s {{ site.data.dungeon.bh.hextrick_totem }} to help your critterised party members.
* {{ site.data.dungeon.bh.gashtooth }}
  - Use {{ site.data.talent.ag }} to help your healer during {{ site.data.dungeon.bh.gashtooth }}'s {{ site.data.dungeon.bh.gash_frenzy}}.
  - Use {{ site.data.talent.as }}, {{ site.data.talent.ee }}, {{ site.data.item.potion_rhp }} and {{ site.data.item.hs }} as needed to survive {{ site.data.dungeon.bh.gashtooth }}'s {{ site.data.dungeon.bh.marked_for_butchery}}.

---


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
