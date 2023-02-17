---
layout: page
title: Priority List
last_update: 2022-04-13 09:00:00
game_version: 9.2 Shadowlands
toc: true
---

The elemental priority is fairly straightforward — the choice of which spell to cast next is often easy to make. The only issue you might face will be to learn the different ways the priorities shift with different talents. We have done our best to condense the SimulationCraft Action Priority List (APL) into a human-readable, easy to understand form. If you want to investigate any minor details, please refer to the APL in SimulationCraft or contact us on Discord.

After reading the APL, please pay attention to the special mentions below, because we couldn't fit all special cases and handling into the readable formated APL.


**If you have suggestions with sim evidence to back them up, please let us know on Discord.**


#### Talent selector:

15 | <input type="radio" id="er-radio" name="15" value="1"/><label for="er-radio" > Earthen Rage</label> | <input type="radio" id="eote-radio" name="15" value="2"  checked/><label for="eote-radio"> Echo of the Elements</label> | <input type="radio" id="sd-radio" name="15" value="3" /><label for="sd-radio"> Static Discharge</label>
25 | <input type="radio" id="afs-radio" name="25" value="1" /><label for="afs-radio"> Aftershock</label> | <input type="radio" id="ecs-radio" name="25" value="2" /><label for="ecs-radio"> Echoing Shock </label> | <input type="radio" id="eb-radio" name="25" value="3" checked /><label for="eb-radio"> Elemental Blast</label>
35 | <input type="radio" id="mote-radio" name="35" value="1" checked /><label for="mote-radio"> Master of the Elements</label> | <input type="radio" id="se-radio" name="35" value="2"/><label for="se-radio"> Storm Elemental</label> | <input type="radio" id="lmt-radio" name="35" value="3" /><label for="lmt-radio"> Liquid Magma Totem</label>
45 | <input type="radio" id="sop-radio" name="45" value="1" /><label for="sop-radio"> Surge of Power</label> | <input type="radio" id="pe-radio" name="45" value="2" /><label for="pe-radio"> Primal Elementalist</label> | <input type="radio" id="if-radio" name="45" value="3" checked /><label for="if-radio"> Icefury</label>
50 | <input type="radio" id="up-radio" name="50" value="1" /><label for="up-radio"> Unlimited Power</label> | <input type="radio" id="sk-radio" name="50" value="2" checked/><label for="sk-radio"> Stormkeeper</label> | <input type="radio" id="asc-radio" name="50" value="3"/><label for="asc-radio"> Ascendance</label>


#### Covenant selector:

Kyrian | Venthyr | Night Fae | Necrolords
:---: | :---: | :---: | :---:
 <input type="radio" id="vt-radio" name="cov" value="4" /><label for="vt-radio">Vesper Totem</label> | <input type="radio" id="ch-radio" name="cov" value="3" /><label for="ch-radio">Chain Harvest</label> | <input type="radio" id="ft-radio" name="cov" value="1" /><label for="ft-radio">Fae Transfusion</label> | <input type="radio" id="pw-radio" name="cov" value="2" checked/><label for="pw-radio">Primordial Wave</label> 


## Single target / two targets
---

<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
        <li class="pe-apl" style="display: none;"> Cast {{ site.data.spell.meteor }} / {{ site.data.spell.eye_of_the_storm }} if no multi-target will happen soon. Make sure {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }} before you activate {{ site.data.spell.eye_of_the_storm }}.</li>
        <li> Cast {{ site.data.talent.fe }} / {{ site.data.talent.se }} on cooldown.</li>
        <li> Cast {{ site.data.spell.fs }} when any of the following are true:
            <ul>
                <li>It is not active on the target.</li>
                <li class="asc-apl" style="display:none;">You are about to enter {{site.data.talent.asc}}.</li>
                <li>The debuff's duration is at or below 6 seconds remaining.</li>
            </ul>
        <li> Cast {{ site.data.spell.lvb }} with {{ site.data.spell.ls }} active.</li>
        <li> Cast {{ site.data.spell.eq }} if you're fighting 2 or more enemies and your next cast would take you above 100 Maelstrom.</li>
        <li class="asc-apl" style="display:none;">Cast {{ site.data.spell.lvb }} with {{ site.data.talent.asc }} active. </li>
        <li> Cast {{ site.data.spell.es }} if your next cast would take you above 100 Maelstrom and fighting 1 target.  Note: if {{ site.data.legendary.ws }} is equipped and {{ site.data.talent.asc }} is active, you should avoid overcapping Maelstrom. </li>
        </li>
        <!-- covenant abilities -->
        <li class="pw-apl" style="display: list-item;">Cast {{ site.data.talent.primordial_wave}} on a target without {{ site.data.spell.fs }} or the target with the lowest duration remaining. Delay it if adds are gonna spawn, if it doesn't lead to you losing a use.</li>
        <li class="vt-apl" style="display: none;">Cast {{ site.data.spell.vesper_totem}} on cooldown. </li>
        <li class="ft-apl" style="display: none;">Cast {{ site.data.spell.fae_transfusion}} on cooldown (buff it with {{site.data.talent.master_of_the_elements}} if talented into that). </li>
        <!-- covenant abilities end -->
        <li class="ecs-apl" style="display:none;">Cast {{ site.data.spell.es }} while affected by {{site.data.talent.ecs}}.</li>
        <li class="ecs-apl" style="display:none;">Cast {{ site.data.talent.ecs }}.</li>
        <li class="if-apl" style="display:none;">Cast {{site.data.spell.frs}} if {{site.data.talent.if}} buffs would run out.</li>
        <li class="eb-apl" style="display: list-item;">Cast {{ site.data.talent.eb }} on cooldown, if {{ site.data.talent.asc }} is not active and ideally with less than 70 maelstrom.</li>
        <li class="sk-apl" style="display: list-item;"> Cast {{ site.data.talent.sk }} on cooldown.</li>
        <li class="lmt-apl" style="display:none;" >Cast {{ site.data.talent.lmt }} on cooldown.</li>
        <li class="asc-apl" style="display:none;">Cast {{ site.data.talent.asc }} on cooldown, if neither {{ site.data.talent.se }} is active, nor {{ site.data.spell.lvb }} is available, nor {{ site.data.talent.if }} is active.</li>
        <li class="sk-apl" style="display: list-item;">Cast {{ site.data.spell.lb }} if {{ site.data.talent.sk }} is active and when any of the following are true (if you don't see any following conditions, ignore this line):
            <ul>
                <li class="mote-apl" style="display: list-item;">{{ site.data.talent.mote }} is active and {{ site.data.talent.sop }} is NOT selected.</li>
                <li class="sop-apl" style="display: none;">{{ site.data.talent.sop }} is active.</li>
            </ul>
        </li>
        <li>Cast {{ site.data.spell.es }}. But read the <a href="#master-of-the-elements">special cases about delaying</a> {{ site.data.spell.es }} casts because of {{ site.data.talent.mote }}.</li>
        <li class="if-apl" style="display: list-item;">Cast {{ site.data.spell.frs }} with the {{ site.data.talent.if }} buff and {{ site.data.talent.mote }} buff active.</li>
        <li class="asc-apl" style="display:none;">Cast {{ site.data.spell.lvb }} if {{ site.data.talent.asc }} is active.</li>
        <li class="sop-apl" style="display: none;">Cast {{ site.data.spell.lvb }} with {{ site.data.talent.sop }} if you could get another use out of {{ site.data.talent.se }}/{{ site.data.talent.fe }} or lengthen its last possible duration within the fight.</li>
        <li class="sop-apl" style="display: none;">Cast {{ site.data.spell.lb }} with {{ site.data.talent.sop }} buff active.</li>
        <li>Cast {{site.data.spell.lvb }}.</li>
        <li class="if-apl" style="display: list-item;">Cast {{ site.data.spell.frs }} with the {{ site.data.talent.if }} buff active.</li>
        <li class="if-apl" style="display: list-item;">Cast {{ site.data.talent.if }} on cooldown.</li>
        <li class="ch-apl" style="display: none;">Cast {{ site.data.spell.chain_harvest}}.</li>
        <li class="sd-apl" style="display: none;">Cast {{ site.data.spell.sd}}.</li>
        <li>Cast {{ site.data.spell.lb }} versus one target and {{ site.data.spell.cl }} versus two and more targets as a filler.</li>
        <li>Cast {{ site.data.spell.frs }} while moving, if you don't have any other instants, even if you do not have {{ site.data.talent.if }}.</li>
    </ol>
</div>



## AoE (3 or more targets)
---
<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
        <li class="ch-apl" style="display:none;">Cast {{ site.data.spell.chain_harvest }} on cooldown.</li>
        <li class="vt-apl" style="display:none;">Cast {{ site.data.spell.vesper_totem }} on cooldown.</li>
        <li class="pw-apl">Cast {{ site.data.talent.primordial_wave }} on cooldown. Making sure to apply a fresh {{ site.data.spell.fs }} to a target if possible. See Special Mention below for furher information. </li>
        <li> Cast {{ site.data.spell.meteor }} / {{ site.data.spell.eye_of_the_storm }} against as many targets as possible. Make sure {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }} before you activate {{ site.data.spell.eye_of_the_storm }}.</li>
        <li>Cast {{ site.data.talent.fe }} / {{ site.data.talent.se }} on cooldown.</li>
        <li class="ft-apl" style="display:none;">Cast {{ site.data.spell.fae_transfusion }} on any number of targets when {{ site.data.legendary.night_fae }} is equipped.</li>
        <li class="sk-apl">Cast {{ site.data.talent.sk }} on cooldown.</li>
        <li class="lmt-apl" style="display:none;">Cast {{ site.data.talent.lmt }} on cooldown.</li>
        <li>Maintain 3 {{ site.data.spell.fs }}s if there are 3 targets, maintain 1 if there are 4 or more and you're forced to move.</li>
        <li>Cast {{ site.data.spell.eq }} when available. (On less than 5 targets try gaming {{ site.data.talent.mote }}.)</li>
        <li>Cast {{ site.data.spell.lvb }} to consume {{ site.data.talent.lava_surge }} procs when either less than 3 targets present, or when moving and more than 4 targets present</li>
        <li class="eb-apl" style="display:none;">Cast {{ site.data.talent.eb }} if there are 3 targets.</li>
        <li class="ft-apl" style="display:none;">Cast {{ site.data.spell.fae_transfusion }} on 2 targets or less when {{ site.data.legendary.night_fae }} is not equipped.</li>
        <li>Cast {{ site.data.spell.cl }}.</li>
    </ol>
</div>

**Special mention** When playing **Necrolord** in AoE scenarios with {{ site.data.legendary.necrolord }} active, you should attempt to increase the number of {{ site.data.spell.fs }} active shortly before {{ site.data.talent.primordial_wave }} is available and for the duration of the {{ site.data.talent.primordial_wave }} buff ensuring to cast {{ site.data.spell.lvb }} before it runs out! This is not maintained otherwise.

**Special mention** There are many caveats with {{ site.data.talent.mote }} when in AoE situations. It is generally worth using {{ site.data.talent.lava_surge }} procs to empower {{ site.data.spell.eq }}s, even on 4+ targets. On more than 4 targets, only apply {{ site.data.spell.fs }} to one of the targets, ideally a target with higher health than the rest. Use {{ site.data.talent.lava_surge }} procs on the afflicted target in order to empower {{ site.data.spell.eq }}. With this in mind, be careful not to overdo it; it will very likely result in a loss of DPS if enemies die before your {{ site.data.spell.eq }} finishes ticking when you could have used the spell earlier. 

**Special mention** When {{ site.data.item.t28_4 }} is active using {{ site.data.talent.lvs }} procs in AoE becomes DPS neutral, this does assume that you will benefit from the extra duration provided however so the default behaviour remains the same as above - use {{ site.data.talent.lvs }} when you are forced to move, no active {{ site.data.spell.fs }} is required but it remains an excellent movement global when no {{ site.data.spell.ls }} is active!
## Openers
---

Follow the cast sequences below for your chosen opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

Standard raid opener:
<div class="opener">
    <div class="skill sk"><span>SK</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>
    <div class="skill if"><span>IF</span></div>
    <div class="arrow"></div>...
</div>

Night Fae with Standard talents:
<div class="opener">
    <div class="skill sk"><span>SK</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill ft"><span>FT</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>
    <div class="skill es"><span>ES</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>...
 </div>
 
 Night Fae with Standard talents and {{ site.data.item.t28_2 }}:
<div class="opener">
    <div class="skill sk"><span>SK</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill ft"><span>FT</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill es"><span>ES</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>...
 </div>
 
If you are using {{ site.data.talent.eb }}:
<div class="opener">
    <div class="skill sk"><span>SK</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>...
</div>

If you are using {{ site.data.talent.eb }} and {{ site.data.talent.primordial_wave }}:

<div class="opener">
    <div class="skill sk"><span>SK</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill eb"><span>EB</span></div>
    <div class="arrow pull"></div>
    <div class="skill pw"><span>PW</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>...
</div>

<br>


## Special cases
---
### {{ site.data.talent.asc }} on varying target counts.
- On single target the only part of the {{ site.data.talent.asc }} priority that changes is whether to spend Maelstrom or not and that depends on which legendary you are using:
     * With {{ site.data.legendary.wlr }} equipped you always avoid overcapping.
     * With {{ site.data.legendary.dre }} equipped you will prefer to cast {{ site.data.spell.lvb }} instead of {{ site.data.spell.es }} if you do not have to move, regardless of Maelstrom.
- As targets increase there are some changes to what you would do **with {{ site.data.talent.asc }} active** which are not related to legendary choice - the nature of {{ site.data.legendary.dre }} is that of a gambler however this advice will provide the best results on average, if you choose to commit to gambling may the RNG forever be in your favour.
     * 2 targets: {{ site.data.spell.eq }} `>` {{ site.data.spell.lvb }} `>` {{ site.data.spell.lvbm }}
     * 3 targets: {{ site.data.spell.eq }} `>` {{ site.data.spell.lvb }} `>` {{ site.data.spell.lvbm }}
     * 4 targets: {{ site.data.spell.eq }} `>` {{ site.data.spell.ls }} `>` {{ site.data.spell.lvbm }} `>` {{ site.data.spell.lvb }}
     * 5+ targets: {{ site.data.spell.eq }} `>` {{ site.data.spell.lvbm }} `>` {{ site.data.spell.ls }}
- Note: the above priority includes spells that do not have cooldowns in order to show that one spell is clearly favoured over the other i.e. {{ site.data.spell.lvbm }} is included in the 2 and 3 target lists only to show that it is **weaker** than casting a {{ site.data.spell.lvb }}.

### {{ site.data.talent.sop }} with {{ site.data.item.t28_2 }} active.
- When you are able to equip {{ site.data.item.t28_2 }}, it can be a dps increase to use {{ site.data.talent.sop }} instead of {{ site.data.talent.pe }} or {{ site.data.talent.if }}. You should sim your character to determine if this is a choice **you** should make at this specific gearing stage, and note that it is only applicable to Single Target scenarios and Covenant choice may impact this.
- You need to have {{ site.data.legendary.wlr }} equipped and the playstyle from there is straightforward. Use the {{ site.data.talent.sop }} buff on {{ site.data.spell.lvb }} after every {{ site.data.spell.es }}, which is essentially typical gameplay. Note: there is potential to increase the effectiveness of this build further by incorporating some {{ site.data.spell.lb }} usage on very strict conditions
     * When you **know** you would not get another {{ site.data.spell.fe }} usage in the current fight
     * When you have both {{ site.data.talent.sk }} and {{ site.data.talent.sop }} active - careful trying to micro-manage this beyond natural alignment
- When Double Legendary is  equipped this small niche for {{ site.data.talent.sop }} becomes neutral for Night Fae, potentially still valuable for other Covenants - consult your sims!
- When {{ site.data.item.t28_4 }} is active {{ site.data.talent.sop }} becomes useless once more, until next time! 

### {{ site.data.spell.vesper_totem }} with {{site.data.legendary.kyrian}} equipped.
- During PTR testing it was potentially a DPS increase to cast Healing Spells in order to trigger the Healing Charge explosion of {{ site.data.legendary.kyrian }} when used in conjunction with {{ site.data.talent.ag }}. 
- On live servers, casting {{ site.data.talent.ag }} is not triggering a Healing Charge of {{ site.data.spell.vesper_totem }} and so cannot be used to trigger the explosion of {{ site.data.legendary.kyrian }} more efficiently.
- As a result, on live servers this behaviour is no longer a strict increase in DPS but you can trigger the {{ site.data.spell.kyrian }} charges with {{ site.data.spell.healing_surge }} if your group needs additional healing value. Otherwise you should ignore the second charge of {{ site.data.legendary.kyrian }} as an Elemental shaman.


### {{ site.data.talent.mote }}
- Change: Delay {{ site.data.spell.es }} without wasting Maelstrom to cast it with {{ site.data.talent.mote }} instead.
- Priority of casts you want to empower with {{ site.data.talent.mote }} from best to worst:
    1. {{ site.data.spell.eq }} if four or more targets are in its effect
    1. {{ site.data.spell.fae_transfusion }} if Night Fae
    1. {{ site.data.spell.eq }} if two or more targets are in its effect
    1. {{ site.data.spell.lb }} with {{ site.data.talent.sk }}
    1. {{ site.data.spell.es }}
    1. {{ site.data.spell.frs }} with {{ site.data.talent.if }}
    1. {{ site.data.talent.eb }}
    1. {{ site.data.spell.lb }}
    1. {{ site.data.talent.if }}
    1. {{ site.data.spell.frs }}
- don't stress too much over gaming {{ site.data.talent.mote }}. It mostly happens naturally.

### {{ site.data.talent.if }} with {{site.data.legendary.windspeaker}} equipped and {{site.data.talent.eb}} talented.
- The priority with these conditions met is a little complex so this section can be used to help players learn and become more familiar with the setup.
- Use {{site.data.talent.if}} on cooldown, or as higher priority if a mechanic will force you to move in the next 5 seconds.
- {{site.data.talent.if}} charges should aim to be consumed before they expire, subject to the following priority:
    - {{site.data.spell.lvb}} (without {{site.data.talent.mote}} active), {{site.data.talent.eb}} and {{site.data.spell.es}} have higher priority when {{site.data.talent.if}} buff duration is higher than the GCDs required to spend the remaining stacks.
    - {{site.data.spell.fs}} has the highest priority when {{site.data.talent.if}} buff duration is approaching the GCDs required to spend the remaining stacks.
    - It can be helpful to stagger use of {{site.data.talent.sk}} to avoid conflict with {{site.data.talent.if}}
    - Avoid overthinking {{site.data.talent.mote}}, the buff is worth 20% of the spell it effects but losing an {{site.data.talent.if}} charge is losing 100%.
    - GCDs: Mentioned above is duration as measured by GCDs required, to clarify each {{site.data.talent.if}} charge requires one GCD to spend which is a base of 1.5s and is reduced by Haste. This means if you have three stacks of {{site.data.talent.if}} remaining you will need `3 x 1.5 = 4.5` seconds *minimum* to spend the charges, and haste will reduce this amount however for learning purposes using the base amounts is advised.
        
### {{ site.data.talent.sk }} + {{ site.data.talent.sop }}
- Change: You pool Maelstrom before casting {{ site.data.talent.sk }} to combo both empowered {{ site.data.spell.lb }} with {{ site.data.talent.sop }}
- Example cast sequence:
    - Pool to 96+ Maelstrom
    - {{ site.data.spell.es }}
    - {{ site.data.talent.sk }}
    - {{ site.data.spell.lb }}
    - {{ site.data.spell.lvb }}
    - {{ site.data.spell.es }}
    - {{ site.data.spell.lb }}

### {{ site.data.talent.se }} in Single Target
In 9.2 after the changes to {{ site.data.talent.se }} reducing {{ site.data.spell.wind_gust }} from 20 to 10 stacks, {{ site.data.talent.se }} no longer changes the single target rotation meaningfully. This means you continue to follow the basic rotational priority regardless of {{ site.data.talent.se }} being active or not. Check the priority list above for this.

### {{ site.data.talent.se }} + {{ site.data.talent.pe }}
Combining {{ site.data.talent.se }} with {{ site.data.talent.pe }} enables access to {{ site.data.spell.eye_of_the_storm_damage }}. This powerful ability needs to be activated manually. Make sure to use it regardless of target count shortly after your {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }}.

```
#showtooltip
/use [talent:6/3]Icefury;[pet: Primal Storm Elemental]Eye of the Storm;[pet: Primal Fire Elemental]Meteor;[pet: Primal Earth Elemental]Harden Skin
```


### {{ site.data.talent.sop }} and 2 targets
- Change: as long as both targets don't have {{ site.data.spell.fs }} or are in refreshable duration and spread range, use {{ site.data.spell.es }} once to spread {{ site.data.spell.fs }} to both with {{ site.data.talent.sop }}.


## Common misconceptions and mistakes
---

> "I should try and play around {{site.data.talent.mote}}!"

The only time you should adjust your gameplay for {{site.data.talent.mote}} is when you have the liberty to cast a spell *later* with a {{site.data.talent.mote}} buff versus *now* -- this means for a spell like {{site.data.spell.es}}, you can make the decision to wait until you have the {{site.data.talent.mote}} buff active before casting it (this is reflected in the priority above). This is thanks to the low urgency of {{site.data.spell.es}} casts, as you are not constrained by a cooldown or Maelstrom cost, since you can cast it at any point between 60 and 100 Maelstrom.

> "I should only cast {{ site.data.spell.lvb }} during {{ site.data.talent.asc }}!"

During {{ site.data.talent.asc }} with {{ site.data.legendary.wlr }} equipped you should continue spending maelstrom on {{ site.data.spell.es }} to trigger its effect.

> "I should cast {{ site.data.talent.eb }} during {{ site.data.talent.asc }}!"

No. {{ site.data.talent.eb }} doesn't deal enough damage by quite a significant margin.

> "I should cast {{ site.data.talent.if }} with {{ site.data.talent.mote }} during {{ site.data.talent.asc }}!"

No. Your {{ site.data.talent.asc }} is ideally used when {{ site.data.talent.if }} is on cooldown and won't get ready while you're casting {{ site.data.spell.lvb }}.

> "I should only cast {{ site.data.spell.lb }} / {{ site.data.spell.cl }} during {{ site.data.talent.se }}!"

The change to {{ site.data.spell.wind_gust }} stacks means {{ site.data.spell.lvb }} is always stronger than {{ site.data.spell.lb }}, this means {{ site.data.talent.se }} does not interfere with the standard rotational priority at all in Single Target. In AoE with active {{ site.data.item.t28_4 }} using {{ site.data.talent.lvs }} procs even without an {{ site.data.spell.fs }} active is dps neutral so is an excellent movement global. See priority list and Special mentions above for more information.

> "I should only cast {{ site.data.spell.es }} in single target or {{ site.data.spell.eq }} in high aoe counts even with  {{ site.data.legendary.eogs }} equipped!"

With {{ site.data.legendary.eogs }} you always alternate between using {{ site.data.spell.es }} and {{ site.data.spell.eq }} regardless of target count.


<script>
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
function listeners() {
    let inputs = document.getElementsByTagName("input")
    for (i of inputs) {
        if (i.type == "radio") change_listener(i);
    }
}

function change_listener(element) {
    element.addEventListener("change", function(e) {
        let siblings = document.getElementsByName(e.target.name);
        for (radio of siblings) {
            let apl_elems = document.getElementsByClassName(radio.id.split('-')[0] + "-apl");
            for (item of apl_elems) {
                if (radio.checked == true) {
                    item.style.display = "list-item";
                } else {
                    item.style.display = "none";
                }
            }
        }
    });
}

listeners()
</script>
