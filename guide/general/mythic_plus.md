---
layout: page
title: "Mythic+ Guide"
last_update: 2019-07-06 09:00:00
game_version: 8.3.0 Battle for Azeroth
author: Naesam
---

Information on this page is written with the assumption that the rest of the guide has been read in full. If you haven't, we highly recommend reading the priority list, talents, and traits section of the guide before continuing here.

### Talents

There are a few viable builds for Mythic+ that you might consider, taking into account that your group composition, the dungeon, and the week's affixes will all play a role in determining the build that you'll want.

#### "Standard" Build

The standard build offers a good balance between strong single target damage and good AOE, with minimal reliance on cooldowns to do damage outside of {{ site.data.talent.stormkeeper }} and/or {{ site.data.azerite.essence_of_the_focusing_iris }}. The recent buffs to {{ site.data.azerite.worldvein_resonance }} make it a potential contender for the major slot, with its ability to buff both {{ site.data.talent.stormkeeper }} and {{ site.data.talent.liquid_magma_totem }} each use.

**Talents**:

* **15**: {{ site.data.talent.echo_of_the_elements }}
* **30**: {{ site.data.talent.aftershock }}
* **45**: {{ site.data.talent.spirit_wolf }} OR {{ site.data.talent.static_charge }}
* **60**: {{ site.data.talent.master_of_the_elements }} OR {{ site.data.talent.liquid_magma_totem }}
* **75**: {{ site.data.talent.natures_guardian }} OR {{ site.data.talent.ancestral_guidance }}
* **90**: {{ site.data.talent.primal_elementalist }}
* **100**: {{ site.data.talent.stormkeeper }}

**Major Essences**: {{ site.data.azerite.worldvein_resonance }} / {{ site.data.azerite.essence_of_the_focusing_iris }}

**Minor Essences**: {{ site.data.azerite.conflict_and_strife }} / {{ site.data.azerite.essence_of_the_focusing_iris }} / {{ site.data.azerite.purification_protocol }} / {{ site.data.azerite.breath_of_the_dying }}

#### Storm Elemental / BotE / VoP

This build offers extremely strong burst AOE every 2 minutes, while still being fairly solid single target. This build optimizes around lining up {{ site.data.talent.storm_elemental }}'s {{ site.data.spell.eye_of_the_storm }} with {{ site.data.azerite.blood_of_the_enemy }} and {{ site.data.talent.stormkeeper }}. Your damage profile will be a bit more reliant on cooldowns overall, but this build shines when your group can pull large packs of mobs planned around your cooldowns.


* **15**: {{ site.data.talent.echo_of_the_elements }}
* **30**: {{ site.data.talent.aftershock }}
* **45**: {{ site.data.talent.spirit_wolf }} OR {{ site.data.talent.static_charge }}
* **60**: {{ site.data.talent.storm_elemental }}
* **75**: {{ site.data.talent.natures_guardian }} OR {{ site.data.talent.ancestral_guidance }}
* **90**: {{ site.data.talent.primal_elementalist }}
* **100**: {{ site.data.talent.stormkeeper }}

**Major Essences**: {{ site.data.azerite.blood_of_the_enemy }}

**Minor Essences**: {{ site.data.azerite.vision_of_perfection}} / {{ site.data.azerite.conflict_and_strife }} / {{ site.data.azerite.essence_of_the_focusing_iris }} / {{ site.data.azerite.purification_protocol }} / {{ site.data.azerite.breath_of_the_dying }}

### Azerite

Always take 3x {{ site.data.azerite.igneous_potential }}. It's our best trait for 1-4 targets.

Any combination of the following traits will do very well in general:

- {{ site.data.azerite.natural_harmony }}
- {{ site.data.azerite.heart_of_darkness }}
- {{ site.data.azerite.blightborne_infusion }}
- {{ site.data.azerite.swirling_sands }}

It can be beneficial to run a single copy of {{ site.data.azerite.ancestral_resonance }} for the increased duration of {{ site.data.spell.bloodlust }}, especially for Tyrannical weeks on the more challenging bosses. You should avoid stacking this trait.

Additionally, {{site.data.azerite.tectonic_thunder}} is a controversial trait. It can be quite powerful for frequent heavy AoE, but it provides nothing for single target. For Fortified this trait will do quite well. However, the main issue with this trait is there are very few pieces of gear with both {{site.data.azerite.igneous_potential}} and {{site.data.azerite.tectonic_thunder}} available at the same time, and there aren't many situations in which you would want to drop an {{site.data.azerite.igneous_potential}} in favor of a {{site.data.azerite.tectonic_thunder}}. The only situation that comes to mind would be a Fortified Motherlode.

<p style="color:red">Click/tap on a dungeon's header image to expand it.</p>

<hr>
<div class="dungeon-accordion">
<div id="accordion">
    <div class="card">
        <div class="card-header" id="ataldazar">
            <div data-toggle="collapse" data-target="#ataldazar-collapse" aria-expanded="true" aria-controls="ataldazar-collapse" class="dungeon-header ataldazar"><h2>Atal'Dazar</h2></div>
        </div>
        <div id="ataldazar-collapse" class="collapse show" aria-labelledby="ataldazar" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">Priestess Alun'za</span> - Pool Maelstrom for the Spirit of Gold adds, and use {{site.data.spell.capacitor_totem}} or {{site.data.spell.thunderstorm}} to keep the adds away from blood puddles.</p>
                <p markdown="1"><span class="blue">Vol'kaal</span> - Pool Maelstrom when applicable to use {{site.data.spell.es}} when you have to move, but do not cap your Maelstrom.</p>
                <p markdown="1"><span class="blue">Rezan</span> - Use {{site.data.spell.tremor_totem}} to cleanse every other Terrifying Visage fear cast. If you get eaten during Pursuit, you will be unable to cast damaging spells, so make sure you use {{site.data.spell.healing_surge}} on yourself!</p>
                <p markdown="1"><span class="blue">Yazma</span> - Save {{site.data.talent.stormkeeper}} for the Soulspawn adds, and ensure your group stacks them well to get the most value out of AOE and stuns. The adds can be stunned with {{site.data.spell.capacitor_totem}} and slowed with {{site.data.spell.earthbind_totem}}.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>For Feasting Skyscreamer packs, dump Maelstrom into {{site.data.spell.es}} on the screamers and use {{site.data.spell.cl}} on the small birds to maximize group damage. However, on higher level keys you may want to use {{site.data.spell.eq}} to minimize the danger of the saurids. If you have no interrupts available, you can use {{site.data.spell.tremor_totem}} to dispel the fear. Try to stun with {{site.data.spell.capacitor_totem}} immediately before the birds jump.</li>
                    <li>If you're going the top route to <span class="blue">Vol'kaal</span> first, make sure you have CDs up for the trash pack before the boss. </li>
                    <li>The two Zanchuli Witch-Doctors are especially dangerous. This doesn't impact your damage on <span class="blue">Vol'kaal</span> too much, because the start of the fight is simply attacking the totems.</li>
                    <li>If you're going along the top route to <span class="blue">Priestess Alun'za</span>, purge the Dazar'al Colossus and focus your Maelstrom into it with {{site.data.spell.es}} casts.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="freehold">
            <div data-toggle="collapse" data-target="#freehold-collapse" aria-expanded="true" aria-controls="freehold-collapse" class="dungeon-header freehold"><h2>Freehold</h2></div>
        </div>
        <div id="freehold-collapse" class="collapse" aria-labelledby="freehold" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">Skycap'n Kragg</span> - {{site.data.spell.ghost_wolf}} works very well for moving out of Vile Bombardment.</p>
                <p markdown="1"><span class="blue">Council o' Captains</span> - Try to pool Maelstrom for Blackout Barrel, as you will need to burst it down very quickly with {{site.data.spell.es}} . Powder Shot can be line-of-sighted with the building next to the boss (use the pillars).</p>
                <p markdown="1"><span class="blue">Ring of Booty</span> - {{site.data.spell.frs}} will be very helpful for damage while moving if you are targeted by a shark. If you have one or more {{site.data.azerite.igneous_potential}} take advantage of the training dummies just outside the boss area, apply {{site.data.spell.fs}} to them for additional {{site.data.spell.lvb}} procs.</p>
                <p markdown="1"><span class="blue">Harlan Sweete</span> - Use {{site.data.spell.earthbind_totem}} or {{site.data.spell.capacitor_totem}} on the Irontide Grenadier and he can kill himself away from your group.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>It's generally fine to use CDs on trash before every boss with the exception of <span class="blue">Council o' Captains</span>.</li>
                    <li>Consider priority damage with {{site.data.spell.es}} on the Irontide Enforcers before <span class="blue">Skycap'n Kragg</span> due to the immense tank damage these mobs put out.</li>
                    <li>If you aren't skipping the pack before <span class="blue">Harlan Sweete</span>, you should use cooldowns there as there is no (mechanical) urgency to killing <span class="blue">Harlan Sweete</span> quickly.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="kingsrest">
            <div data-toggle="collapse" data-target="#kingsrest-collapse" aria-expanded="true" aria-controls="kingsrest-collapse" class="dungeon-header kingsrest"><h2>Kings' Rest</h2></div>
        </div>
        <div id="kingsrest-collapse" class="collapse" aria-labelledby="kingsrest" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">The Golden Serpent</span> - use {{site.data.talent.stormkeeper}} + {{site.data.spell.cl}} on the slimes for extra Maelstrom.</p>
                <p markdown="1"><span class="blue">Mchimba the Embalmber</span> - Use {{site.data.spell.ghost_wolf}} if you're about to be imprisoned to gain stacks of {{site.data.talent.spirit_wolf}}.</p>
                <p markdown="1"><span class="blue">The Council of Tribes</span> - Interrupt as soon as Zanzal the Wise spawns, and purge the Earthwall Totem's shield. Pool Maelstrom before the totems spawn so you can quickly kill the Explosive Totem.</p>
                <p markdown="1"><span class="blue">Dazar, the First King</span> - use Tremor Totem to counter the fear from T'zala.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>In <span class="blue">The Golden Serpent</span>'s room, you can have one person interrupt a single mob's Shadow Bolt Volley casts assuming they have a low (~15 sec) cooldown interrupt.</li>
                    <li>On the trash before <span class="blue">Mchimba</span>, use {{site.data.talent.stormkeeper}} as the tank starts to gather slimes. Do not get hit by the swirls, no matter what. With a large pull, getting hit by a single swirl will almost certainly mean your death.</li>
                    <li>In the hallway between <span class="blue">Mchimba</span> and <span class="blue">Council</span>, make sure you use {{site.data.spell.earth_elemental}} to help the tank with damage intake.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="operation-mechagon-junkyard">
            <div data-toggle="collapse" data-target="#operation-mechagon-junkyard-collapse" aria-expanded="true" aria-controls="operation-mechagon-junkyard-collapse" class="dungeon-header operation-mechagon-junkyard"><h2>Operation: Mechagon - Junkyard</h2></div>
        </div>
        <div id="operation-mechagon-junkyard-collapse" class="collapse" aria-labelledby="operation-mechagon-junkyard" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">King Gobbamak</span> - Use {{site.data.talent.stormkeeper}} + {{site.data.spell.cl}} on the adds that spawn for extra Maelstrom.</p>
                <p markdown="1"><span class="blue">Trixie & Naeno</span> - Use {{ site.data.spell.wind_shear }} to interrupt Trixie's "Taze" spell.</p>
                <p markdown="1"><span class="blue">Gunker</span> - Try and stay inside one of the safe zones provided by the bots during this fight. Use bursty spells like {{ site.data.spell.earth_shock }} or {{ site.data.talent.stormkeeper }}-buffed {{ site.data.spell.lightning_bolt }}s to break out any bots that get gunked up quickly.</p>
                <p markdown="1"><span class="blue">HK-8 Aerial Oppression Unit</span> - Save cooldowns for the burn phase of the boss. Use {{ site.data.spell.earthbind_totem }} and {{ site.data.spell.capacitor_totem }} to help crowd-control the bots that spawn. Use {{ site.data.spell.ghost_wolf }} to run the maze during the intermission (remember: you can jump over the beams if timed correctly, but not the grates or the detector bots). </p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>Towards <span class="blue">Gunker</span> and <span class="blue">HK-8 Aerial Oppression Unit</span>'s rooms, there are mobs that can shrink your allies, allowing them to be trampled by friendlies (like the Mekkatorque encounter from Battle of Dazar'alor). Be careful not to trample your friends.</li>
                    <li>Throughout the instance, there are clickable bots that can be found and used by one person, providing a buff that should last the rest of the instance (until death). The "shock bots" are the most powerful here, contributing a significant amount of free damage if you have the buff. The "grease bots" are also beneficial, providing additional haste. Keep an eye out for where these spawn.</li>
                </ul>
            </div>
        </div>
    </div>
        <div class="card">
        <div class="card-header" id="operation-mechagon-workshop">
            <div data-toggle="collapse" data-target="#operation-mechagon-workshop-collapse" aria-expanded="true" aria-controls="operation-mechagon-workshop-collapse" class="dungeon-header operation-mechagon-workshop"><h2>Operation: Mechagon - Workshop</h2></div>
        </div>
        <div id="operation-mechagon-workshop-collapse" class="collapse" aria-labelledby="operation-mechagon-workshop" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">Tussle Tonks</span> - It is important to try and position yourself behind <span class="blue">Gnomercy 4.U.</span> when the Flame Vents ability is cast to reduce the incoming damage on this encounter. If <span class="blue">Gnomercy 4.U.</span> is chasing you during this ability, utilize {{ site.data.spell.astral_shift }}.</p>
                <p markdown="1"><span class="blue">K.U.-J.0.</span> - Use {{site.data.spell.ghost_wolf}} to quickly move behind or away from containers. If you position carefully near a corner during Venting Flames, you can pop out in between damage ticks to cast instant cast abilities.</p>
                <p markdown="1"><span class="blue">Machinist's Garden</span> - Dodge mechanics and burst down Inconspicuous Plant when it spawns.</p>
                <p markdown="1"><span class="blue">King Mechagon</span> - When targeted with Giga-Zap, it is best to remain still and let your other group members move away from you. Speed boosts like {{ site.data.spell.wind_rush_totem }} and {{ site.data.spell.ghost_wolf }} can be handy during the pull-in from Magneto Arm, especially as its damage increases the closer you get to the arm itself.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>You can utilize the energy shield some mobs spawn to negate the damage of several abilities throughout the instance. This will be particularly important on Fortified weeks.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="shrine">
            <div data-toggle="collapse" data-target="#shrine-collapse" aria-expanded="true" aria-controls="shrine-collapse" class="dungeon-header shrine"><h2>Shrine of the Storms</h2></div>
        </div>
        <div id="shrine-collapse" class="collapse" aria-labelledby="shrine" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">Aqu'sirr</span> - when the boss splits into three parts, {{site.data.spell.earth_elemental}} can tank one to prevent a Sea Blast cast. With {{site.data.talent.pe}}, your {{site.data.spell.earth_elemental}} can stun Grasp of the Depths</p>
                <p markdown="1"><span class="blue">Tidesage Council </span> - {{site.data.spell.earth_elemental}} can tank Galecaller Faye, making it significantly easier for melee to avoid cleaves and be in range for interrupts, as well as reducing damage to the tank. However, this requires micromanagement of the pet to move Faye out of the Reinforcing Ward.</p>
                <p markdown="1"><span class="blue">Lord Stormsong</span> - Using {{site.data.spell.ghost_wolf}} before the mind control allows you to run through orbs at a slightly faster pace. Pool Maelstrom for the mind control in the event it goes on your healer, as you'll want to break it faster.</p>
                <p markdown="1"><span class="blue">Vol'Zith the Whispherer</span> - During the add phase, you can interrupt two casts from Forgotten Denizens in a row with some coordination. You will need to interrupt the first one within the first four seconds of the cast and a play with a long interrupt (such as mage or boomkin) will need to interrupt the second one close to the end of the cast. If that is done correctly you will be able to interrupt the second one near the end of its second cast. You can use {{site.data.spell.capacitor_totem}}, {{site.data.spell.earthbind_totem}}, and {{site.data.spell.thunderstorm}} to keep the Manifestation of the Deep adds from reaching the boss.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>The damage taken buffer before {{site.data.spell.hex}} breaks is decent,  and using this spell on the Templars throughout the dungeon can significantly help the tank and healer.</li>
                    <li>Water Walking helps reach the final boss approximately 3 seconds faster (we didn't actually time this, sorry).</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="boralus">
            <div data-toggle="collapse" data-target="#boralus-collapse" aria-expanded="true" aria-controls="boralus-collapse" class="dungeon-header boralus"><h2>Siege of Boralus</h2></div>
        </div>
        <div id="boralus-collapse" class="collapse" aria-labelledby="boralus" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">Sergeant Bainbridge</span> - Use {{site.data.spell.hex}} on the adds where necessary.</p>
                <p markdown="1"><span class="blue">Dread Captain Lockwood</span> - Keep {{site.data.spell.earthbind_totem}} down on the boss to keep her from jumping around due to her mechanic called Evasive. The adds that appear during the fight can be CCed ({{site.data.spell.hex}}), which will cause no further adds to spawn.</p>
                <p markdown="1"><span class="blue">Hadal Darkfathom</span> - No Elemental-specific tips.</p>
                <p markdown="1"><span class="blue">Viq'Goth</span> - If you ever get stuck in the water, spam jump and Water Walking. {{site.data.spell.earth_elemental}} can tank the Demolishing Terror tentacles, allowing your tank to help damage the Gripping Terror.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>On the Demolishers before <span class="blue">Hadal Darkfathom</span>, you can use {{site.data.spell.tremor_totem}} to dispel every other fear, assuming they last long enough. You can also line-of-sight this fear.</li>
                    <li>All of the trash before <span class="blue">Hadal Darkfathom</span> deal immense tank damage, making this an excellent section of the dungeon to use {{site.data.spell.earth_elemental}}.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="temple">
            <div data-toggle="collapse" data-target="#temple-collapse" aria-expanded="true" aria-controls="temple-collapse" class="dungeon-header temple"><h2>Temple of Sethraliss</h2></div>
        </div>
        <div id="temple-collapse" class="collapse" aria-labelledby="temple" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">Adderis and Aspix</span> - You can safely {{site.data.spell.fs}} into Lightning Shield in most keys but will become increasingly dangerous on higher keys and tyrannical keys. If you decidce to {{site.data.spell.fs}} avoid using it before Static Shock. Consider going into {{site.data.spell.ghost_wolf}} with {{site.data.talent.spirit_wolf}} before Static Shock, as it deals immense damage.</p>
                <p markdown="1"><span class="blue">Merektha</span> - Never stand in the toxic pools. If you are stunned with Knot of Snakes while in a toxic pool, you will likely die. Try and be near melee so they can quickly switch and kill or CC the Knot of Snakes if it's applied to you.</p>
                <p markdown="1"><span class="blue">Galvazzt</span> - {{site.data.spell.astral_shift}} and {{site.data.spell.harden_skin}} are great for soaking a high number of stacks of the lightning beam.</p>
                <p markdown="1"><span class="blue">Avatar of Sethraliss</span> - Make sure you use {{site.data.spell.healing_surge}} on the boss between phases. Try to save mana for the use of Energy Fragments for additional healing.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>Some trash in the early parts of the dungeon apply a poison that puts you to sleep on movement. This can be dispelled with a proactive {{site.data.spell.tremor_totem}}, and greatly helps melee.</li>
                    <li>Krolusk Riders apply a lightning shield to themselves, which should be purged ASAP.</li>
                    <li>The Tenders before <span class="blue">Merektha</span> can be knocked back <em>before</em> they are start channeling. If you wait until after they start channeling, they will continue to channel from a distance.</li>
                    <li>In the orb gauntlet room, enter {{site.data.spell.ghost_wolf}} then grab the orb to prevent the slow effect.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="motherlode">
            <div data-toggle="collapse" data-target="#motherlode-collapse" aria-expanded="true" aria-controls="motherlode-collapse" class="dungeon-header motherlode"><h2>The MOTHERLODE!!</h2></div>
        </div>
        <div id="motherlode-collapse" class="collapse" aria-labelledby="motherlode" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">Coin-operated Crowd Pummeler</span> - Save cooldowns and pool Maelstrom for a few stacks of the Footbomb damage increase.</p>
                <p markdown="1"><span class="blue">Azerokk</span> - Use {{site.data.talent.stormkeeper}} and {{site.data.spell.capacitor_totem}} on the pull, stunning the 2 nearest Earthragerss. If two Earthragers fixate to the same area, you can use {{site.data.spell.thunderstorm}} to knock them closer to the boss for added cleave.</p>
                <p markdown="1"><span class="blue">Rixxa Fluxflame</span> - No elemental specific tips.</p>
                <p markdown="1"><span class="blue">Mogul Razdunk</span> - No elemental specific tips.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>Some ideal strats for The MOTHERLODE!! involve "corpse running" to skip trash. Avoid using Ankh so you can do this (and resurrect a healer for mass resurrection).</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="underrot">
            <div data-toggle="collapse" data-target="#underrot-collapse" aria-expanded="true" aria-controls="underrot-collapse" class="dungeon-header underrot"><h2>The Underrot</h2></div>
        </div>
        <div id="underrot-collapse" class="collapse" aria-labelledby="underrot" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">Elder Leaxa</span> - The boss ramps up very hard, and you will want to have cooldowns for this boss.</p>
                <p markdown="1"><span class="blue">Cragmaw the Infested</span> - There's a ton of movement in this fight, so try to pool Maelstrom to have an extra GCD of movement when soaking the larva.</p>
                <p markdown="1"><span class="blue">Sporecaller Zancha</span> - If your group is overwhelmed by spores and you desperately need to clear, just run through as many as possible and use Ankh. Upheaval does quite a bit of damage, so save {{site.data.spell.astral_shift}} and spec {{site.data.talent.spirit_wolf}} if you're afraid you might get one-shot. You can technically dodge it but without burst mobility if you are not far from the boss it will be unreliable.</p>
                <p markdown="1"><span class="blue">Unbound Abomination</span> - {{site.data.spell.cl}} is exceptional for clearing spores and generation Maelstrom.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>The fear applied by the two large mobs before <span class="blue">Unbound Abomination</span> can be cleansed with {{site.data.spell.tremor_totem}}.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="toldagor">
            <div data-toggle="collapse" data-target="#toldagor-collapse" aria-expanded="true" aria-controls="toldagor-collapse" class="dungeon-header toldagor"><h2>Tol Dagor</h2></div>
        </div>
        <div id="toldagor-collapse" class="collapse" aria-labelledby="toldagor" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">The Sand Queen</span> - {{site.data.spell.earth_elemental}} does a great job of tanking the drone adds. Upheavel can get out of control pretty quickly, so consider using {{site.data.talent.spirit_wolf}} to survive. Save {{site.data.talent.stormkeeper}} for drone spawns, and don't bother with {{site.data.spell.earthquake}} on these unless it's a Necrotic week or Tyrannical week.</p>
                <p markdown="1"><span class="blue">Jes Howlis</span> - During the second phase anyone can interrupt Bobby on his stun even before the shield is broken. Be ready to tremor totem if there are no available ranged interrupts and Bobby runs away to cast his fear.</p>
                <p markdown="1"><span class="blue">Knight Captain Valyri</span> - {{site.data.spell.ghost_wolf}} makes moving barrels quite easy. Move two of the closest barrels out of the room before pulling the boss to make the start easier.</p>
                <p markdown="1"><span class="blue">Overseer Korgus</span> - Positioning is key in this fight, but there are no elemental specific tips.</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>Purge the Looters immediately after pulling if you have no Blood Elves or no Priest.</li>
                    <li>You can do an incredibly large pull to the cannons and have {{site.data.spell.earth_elemental}} tank the mobs, as it will not take friendly fire damage from the cannon.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="waycrest">
            <div data-toggle="collapse" data-target="#waycrest-collapse" aria-expanded="true" aria-controls="waycrest-collapse" class="dungeon-header waycrest"><h2>Waycrest Manor</h2></div>
        </div>
        <div id="waycrest-collapse" class="collapse" aria-labelledby="waycrest" data-parent="#accordion">
            <div class="card-body">
                <p markdown="1"><span class="blue">Heartsbane Triad</span> - you can dispel Runic Mark, so communicate with your healer if you want to dispel it or not as it deals damage upon expiration or removal. Make sure to purge buffs from your friends if they are mind controlled, especially if it's a big cooldown like Bloodlust or Icy Veins, as they will finally admit that you play the better class.</p>
                <p markdown="1"><span class="blue">Soulbound Goliath</span> - Pool Maelstrom to kill Soul Thorns.</p>
                <p markdown="1"><span class="blue">Raal the Gluttonous</span> - {{site.data.spell.chain_lightning}} works very well on this boss, as his hitbox is very large you can reliably hit every expulsion and any servants that get close.</p>
                <p markdown="1"><span class="blue">Lord and Lady Waycrest</span> - If you have one or more {{spell.data.azerite.igneous_potential}} you can stand near the edge of the room and apply {{site.data.spell.fs}} to Lady Waycrest throughout the encounter for more {{site.data.spell.lvb}} procs. There is a barrier there so don't worry about falling off. </p>
                <p markdown="1"><span class="blue">Gorak'Tul</span> - You can interrupt every Darkened Light (unless you are stunned).</p>
                <p markdown="1"><span class="blue">Trash mobs</span> - below are some notes on how to handle the rest of the dungeon:</p>
                <ul>
                    <li>Much of the trash in this dungeon apply curses, so use your decurse liberally.</li>
                    <li>Due to the variance added with the different door openings, there are no good recommendations to be made for cooldown usage.</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
