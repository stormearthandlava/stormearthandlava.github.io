---
layout: page
title: Priority List
last_update: 2018-08-13 09:00:00
game_version: 8.0.1 Battle for Azeroth
toc: true
---

The elemental priority is fairly straightforward — the choice of which spell to cast next is often easy to make. We have done our best to condense the SimulationCraft Action Priority List (APL) into a human-readable, easy to understand form. If you want to investigate any minor details, please refer to the APL in SimulationCraft or contact us on Discord.


**If you have suggestions with sim evidence to back them up, please let us know on Discord.**

## Single target / two targets


#### Talent selector: 


15 | <input type="radio" id="ee-radio" name="15" value="1" /><label for="ee-radio"> Exposed Elements</label> | <input type="radio" id="eote-radio" name="15" value="2" checked /><label for="eote-radio"> Echo of the Elements</label> | <input type="radio" id="eb-radio" name="15" value="3" /><label for="eb-radio"> Elemental Blast</label> 
30 | <input type="radio" id="afs-radio" name="30" value="1" /><label for="afs-radio"> Aftershock</label> | <input type="radio" id="mote-radio" name="30" value="2" /><label for="mote-radio"> Master of the Elements</label> | <input type="radio" id="tm-radio" name="30" value="3" checked /><label for="tm-radio"> Totem Mastery</label>
60 | <input type="radio" id="hv-radio" name="60" value="1" /><label for="hv-radio"> High Voltage</label> | <input type="radio" id="se-radio" name="60" value="2" /><label for="se-radio"> Storm Elemental</label> | <input type="radio" id="lmt-radio" name="60" value="3" checked /><label for="lmt-radio"> Liquid Magma Totem</label>
90 | <input type="radio" id="er-radio" name="90" value="1" /><label for="er-radio"> Earthen Rage</label> | <input type="radio" id="pe-radio" name="90" value="2" checked /><label for="pe-radio"> Primal Elementalist</label> | <input type="radio" id="if-radio" name="90" value="3" /><label for="if-radio"> Icefury</label>
100 | <input type="radio" id="up-radio" name="100" value="1" /><label for="up-radio"> Unlimited Power</label> | <input type="radio" id="sk-radio" name="100" value="2" /><label for="sk-radio"> Stormkeeper</label> | <input type="radio" id="asc-radio" name="100" value="3" checked /><label for="asc-radio"> Ascendance</label>


<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
        <li class="tm-apl" style="display: list-item;">Cast {{ site.data.talent.tm }}  when any of the following are true:
            <ol>
                <li>It is not active or you are out of range of the existing totems.</li>
                <li>You are about to enter {{site.data.talent.asc}}, and the buff would expire during {{site.data.talent.asc}}.</li>
            </ol>
        </li>
        <li> Cast {{ site.data.spell.fs }} when any of the following are true:
            <ol>
                <li>It is not active on the target.</li>
                <li class="asc-apl">You are about to enter {{site.data.talent.asc}}.</li>
                <li>The debuff's duration is at or below 6 seconds remaining.</li>
            </ol>
        </li>
        <li> Cast {{ site.data.spell.fe }} / {{ site.data.talent.se }} / {{site.data.spell.ee}} on cooldown (see <a href="#pe">the warning</a> about Primal Elementalist).</li>
        <li class="asc-apl" style="display:list-item;">Cast {{ site.data.talent.asc }} on cooldown.</li>
        <li class="ee-apl" style="display:none;">Cast {{site.data.spell.lb}} if the {{site.data.talent.ee}} debuff is active on the target and you have more than 60 Maelstrom.</li>
        <li> Cast {{site.data.spell.es}} if the following is/are true:
            <ol>
                <li>Your Maelstrom is higher than 60.</li>
                <li class="mote-apl">{{site.data.talent.mote}}'s buff is active.</li>
                <li class="ee-apl">{{site.data.talent.ee}}'s debuff is not active on the target.</li>
            </ol>
        </li>
        <li class="eb-apl" style="display:none;">Cast {{ site.data.talent.eb }} on cooldown.</li>
        <li class="sk-apl" style="display:none;"> Cast {{ site.data.talent.sk }} on cooldown.</li>
        <li class="lmt-apl" style="display:list-item;">Cast {{ site.data.talent.lmt }} on cooldown.</li>
        <li>Cast {{ site.data.spell.es }} if your Maelstrom is higher than 92.</li>
        <li>Cast {{ site.data.spell.lvb }}.</li>
        <li class="if-apl" style="display:none;">Cast {{ site.data.talent.if }} on cooldown.</li>
        <li class="if-apl" style="display:none;">Cast {{site.data.spell.frs}} with the {{site.data.talent.if}} buff active.</li>
        <li>Cast {{site.data.spell.es }}.</li>
        <li class="tm-apl">Refresh {{ site.data.talent.tm }} if its duration is at or below 9 seconds remaining.</li>
        <li>Cast {{site.data.spell.cl}} if it will hit more than one target.</li>
        <li>Cast {{ site.data.spell.lb }} as a filler.</li>
        <li>Cast {{site.data.spell.frs}} in place of {{site.data.spell.lb}} while moving, even if you do not have {{site.data.talent.if}}.</li>
    </ol>
</div>


## AoE (3 or more targets)
<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
        <li>Cast {{ site.data.talent.tm }}  when any of the following are true:
            <ol>
                <li>It is not active.</li>
                <li>The buff's duration is at or below 9 seconds remaining.</li>
            </ol>
        </li>
        <li>Cast {{ site.data.spell.fe }} / {{ site.data.talent.se }} / {{site.data.spell.ee}} on cooldown (see <a href="#pe">the warning</a> about Primal Elementalist).</li>
        <li class="sk-apl" style="display:none;">Cast {{ site.data.talent.sk }} on cooldown.</li>
        <li class="lmt-apl" style="display:none;">Cast {{ site.data.talent.lmt }} on cooldown.</li>
        <li>Maintain 3 {{ site.data.spell.fs }}s if there are 3 targets.</li>
        <li>Cast {{ site.data.spell.eq }} when available.</li>
        <li>Cast {{ site.data.spell.lvb }} to consume {{site.data.spell.lava_surge}} procs.</li>
        <li class="eb-apl" style="display:none;">Cast {{ site.data.talent.eb }} if there are 3 targets.</li>
        <li>Cast {{ site.data.spell.cl }}.</li>
    </ol>
</div>


## Openers

Follow the cast sequences below for your chosen opener. A red arrow indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

Standard raid opener:
<div class="opener">
    <div class="skill tm"><span>TM</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>
</div>

Ascendance opener without Primal Elementalist:
<div class="opener">
    <div class="skill tm"><span>TM</span></div>
    <div class="arrow"></div>
    <div class="skill ee"><span>EE</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill asc"><span>Asc</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
</div>

Ascendance opener with Primal Elementalist:
<div class="opener">
    <div class="skill tm"><span>TM</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
    <div class="skill asc"><span>Asc</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow"></div>
</div>
<br>
## Common misconceptions and mistakes

> "I should try and play around {{site.data.talent.mote}}!"

The only time you should adjust your gameplay for {{site.data.talent.mote}} is when you have the liberty to cast a spell *later* with a MotE buff versus *now* -- this means for a spell like {{site.data.spell.es}}, you can make the decision to wait until you have the {{site.data.talent.mote}} buff active before casting it (this is reflected in the priority above). This is thanks to the low urgency of {{site.data.spell.es}} casts, as you are not constrained by a cooldown or Maelstrom cast, since you can cast it at any point between 60 and 100 Maelstrom.

> "I should cast {{ site.data.spell.lb }} during {{ site.data.talent.asc }} if I have some powerful buffs for it active!"

During {{ site.data.talent.asc }} you only want to spend your time casting {{ site.data.spell.lvb }} and {{ site.data.spell.es }}. Yes you'll waste {{ site.data.talent.ee }} and {{ site.data.talent.mote }} but that's fine.

> "I should cast {{ site.data.talent.eb }} during {{ site.data.talent.asc }}!"

No. {{ site.data.talent.eb }} doesn't deal enough damage by quite a significant margin.

> "I should cast {{ site.data.talent.if }} with {{ site.data.talent.mote }} during {{ site.data.talent.asc }}!"

No. Your {{ site.data.talent.asc }} is ideally used when {{ site.data.talent.if }} is on cooldown and won't get ready while you're casting {{ site.data.spell.lvb }}.

> "I should only cast {{ site.data.spell.lb }} / {{ site.data.spell.cl }} during {{ site.data.talent.se }}!"

During single target you'll stick to the usual priority list. During AoE {{ site.data.spell.cl }} becomes quickly more worth than {{ site.data.spell.lvb }}. Nonetheless you should use {{ site.data.spell.eq }}.

> "I should delay {{ site.data.talent.se }} / {{ site.data.talent.asc }} after each other to benefit from them more!"

Delaying either CD can easily result in an overall loss of a usage, which weights heavier during single target than not using the passive of {{ site.data.talent.se }}. During AoE you indeed want to spread out the usage, because {{ site.data.spell.lava_beam }} doesn't benefit from {{ site.data.talent.se }} passive.

> "I should cast {{ site.data.spell.fs }} at 5.4 seconds remaining or lower!"

That's correct but which human is able to accurately judge the difference between 5.4 seconds and 6 seconds. So we decided to present the easier to digest number in the priority list.

> "I should cast {{ site.data.talent.tm }} at less than 9 seconds remaining!"

Yes, the shorter the remaining duration, the less likely it is for you to need an additional cast of it over the whole fight. But because that is quite unlikely already, 9 is a good rule of thumbs. The overall dps won't budge with that change.

## Warning about Primal Elementalist

<p id="pe">A problem that has existed for a while now is {{site.data.talent.pe}} causing {{site.data.spell.fe}} and {{site.data.spell.ee}} to be exclusive with each other (intended) but summoning one while the other is active will simply put the new elemental on cooldown and not de-summon the existing elemental.</p>

In addition all Elementals have autocasts. If you disable one on one Elemental all other Elementals will have that ability deactivated too. This is very annoying and we hope for a fix.

Combining {{ site.data.talent.se }} with {{ site.data.talent.pe }} enables access to {{ site.data.spell.eye_of_the_storm_damage }}. This powerful ability needs to be activated manually. Make sure to use it shortly after your {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }}. {{ site.data.spell.eye_of_the_storm_damage }} is an incredible AoE CD and very useful for single target as well.


<script>
function listeners() {
    let inputs = document.getElementsByTagName("input")
    for (i in inputs) {
        if (inputs[i].type == "radio") change_listener(inputs[i]);
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