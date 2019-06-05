---
layout: page
title: Priority List
last_update: 2019-06-02 09:00:00
game_version: 8.1.5 Battle for Azeroth
toc: true
---

The elemental priority is fairly straightforward — the choice of which spell to cast next is often easy to make. The only issue you might face will be to learn the different ways the priorities shift with different talents. We have done our best to condense the SimulationCraft Action Priority List (APL) into a human-readable, easy to understand form. If you want to investigate any minor details, please refer to the APL in SimulationCraft or contact us on Discord.

After reading the APL, please pay attention to the special mentions below, because we couldn't fit all special cases and handling into the readable formated APL.


**If you have suggestions with sim evidence to back them up, please let us know on Discord.**

## Single target / two targets


#### Talent selector:


15 | <input type="radio" id="er-radio" name="15" value="1"/><label for="er-radio" > Earthen Rage</label> | <input type="radio" id="eote-radio" name="15" value="2"  checked/><label for="eote-radio"> Echo of the Elements</label> | <input type="radio" id="eb-radio" name="15" value="3" /><label for="eb-radio"> Elemental Blast</label>
30 | <input type="radio" id="afs-radio" name="30" value="1" /><label for="afs-radio"> Aftershock</label> | <input type="radio" id="ctt-radio" name="30" value="2" /><label for="ctt-radio"> Call the Thunder</label> | <input type="radio" id="tm-radio" name="30" value="3" checked /><label for="tm-radio"> Totem Mastery</label>
60 | <input type="radio" id="mote-radio" name="60" value="1" checked /><label for="mote-radio"> Master of the Elements</label> | <input type="radio" id="se-radio" name="60" value="2"/><label for="se-radio"> Storm Elemental</label> | <input type="radio" id="lmt-radio" name="60" value="3" /><label for="lmt-radio"> Liquid Magma Totem</label>
90 | <input type="radio" id="sop-radio" name="90" value="1" /><label for="sop-radio"> Surge of Power</label> | <input type="radio" id="pe-radio" name="90" value="2" /><label for="pe-radio"> Primal Elementalist</label> | <input type="radio" id="if-radio" name="90" value="3" checked /><label for="if-radio"> Icefury</label>
100 | <input type="radio" id="up-radio" name="100" value="1" /><label for="up-radio"> Unlimited Power</label> | <input type="radio" id="sk-radio" name="100" value="2" checked/><label for="sk-radio"> Stormkeeper</label> | <input type="radio" id="asc-radio" name="100" value="3"/><label for="asc-radio"> Ascendance</label>


<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
        <li class="pe-apl" style="display: none;"> Cast {{ site.data.spell.meteor }} / {{ site.data.spell.eye_of_the_storm }} if no multi-target will happen soon. Make sure {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }} before you activate {{ site.data.spell.eye_of_the_storm }}.</li>
        <li class="tm-apl" style="display: list-item;">Cast {{ site.data.talent.tm }} when any of the following are true:
            <ul>
                <li>It is not active or you are out of range of the existing totems.</li>
                <li class="asc-apl" style="display:none;">You are about to enter {{site.data.talent.asc}}, and the buff would expire during {{site.data.talent.asc}}.</li>
            </ul>
        </li>
        <li> Cast {{ site.data.spell.fe }} / {{ site.data.talent.se }} / {{site.data.spell.ee}} on cooldown (see <a href="#pe">the warning</a> about Primal Elementalist).</li>
        <li> Cast {{ site.data.spell.fs }} when any of the following are true:
            <ul>
                <li>It is not active on the target.</li>
                <li class="asc-apl" style="display:none;">You are about to enter {{site.data.talent.asc}}.</li>
                <li>The debuff's duration is at or below 7 seconds remaining.</li>
                <li class="se-apl" style="display: none;"><strong>Special warning:</strong> Don't refresh {{ site.data.spell.fs }} if you have 14 stacks or more of {{ site.data.spell.wind_gust }} during {{ site.data.talent.se }}. </li>
            </ul>
        </li>
        <li class="asc-apl" style="display:none;">Cast {{ site.data.talent.asc }} on cooldown, if neither {{ site.data.talent.se }} is active, nor {{ site.data.spell.lvb }} is available, nor {{ site.data.talent.if }} is active.</li>
        <li class="eb-apl" style="display:none;">Cast {{ site.data.talent.eb }} on cooldown, if neither {{ site.data.talent.se }} is active nor you could cast a {{ site.data.talent.mote }} empowered {{ site.data.spell.es }} instead.</li>
        <li class="sk-apl" style="display: list-item;"> Cast {{ site.data.talent.sk }} on cooldown and ideally game it with {{ site.data.talent.sop }} if you selected this talent. See special cases below for more information.</li>
        <li class="lmt-apl" style="display:none;">Cast {{ site.data.talent.lmt }} on cooldown.</li>
        <li>Cast {{ site.data.spell.eq }} if you're fighting 2 or more enemies.</li>
        <li class="sk-apl" style="display: list-item;">Cast {{ site.data.spell.lb }} if {{ site.data.talent.sk }} is active and when any of the following are true (if you don't see any following conditions, ignore this line):
            <ul>
                <li class="mote-apl" style="display: list-item;">{{ site.data.talent.mote }} is active and {{ site.data.talent.sop }} is NOT selected.</li>
                <li class="sop-apl" style="display: none;">{{ site.data.talent.sop }} is active.</li>
            </ul>
        </li>
        <li>Cast {{ site.data.spell.es }}. But read the special cases about delaying {{ site.data.spell.es }} casts.</li>
        <li class="se-apl" style="display: none;">Cast {{ site.data.spell.lb }} if {{ site.data.talent.se }} is active.</li>
        <li class="if-apl" style="display: list-item;">Cast {{site.data.spell.frs}} with the {{site.data.talent.if}} buff and {{ site.data.talent.mote }} buff active.</li>
        <li class="asc-apl" style="display:none;">Cast {{ site.data.spell.lvb }} if {{ site.data.talent.asc }} is active.</li>
        <li class="se-apl" style="display: none;">Cast {{ site.data.spell.lvb }} with {{ site.data.talent.sop }} if you could get another use out of {{ site.data.talent.se }} or lengthen its last possible duration within the fight.</li>
        <li class="sop-apl" style="display: none;">Cast {{ site.data.spell.lb }} with {{ site.data.talent.sop }} buff active.</li>
        <li>Cast {{site.data.spell.lvb }}.</li>
        <li class="if-apl" style="display: list-item;">Cast {{site.data.spell.frs}} with the {{site.data.talent.if}} buff active.</li>
        <li class="if-apl" style="display: list-item;">Cast {{ site.data.talent.if }} on cooldown.</li>
        <li class="tm-apl" style="display: list-item;">Refresh {{ site.data.talent.tm }} if its duration is at or below 9 seconds remaining.</li>
        <li>Cast {{ site.data.spell.lb }} as a filler.</li>
        <li>Cast {{site.data.spell.frs}} in place of {{site.data.spell.lb}} while moving, even if you do not have {{site.data.talent.if}}.</li>
    </ol>
</div>

### Special cases

#### {{ site.data.talent.mote }}
- Change: Delay {{ site.data.spell.es }} to cast it with {{ site.data.talent.mote }} instead.
- Priority of casts you want to empower with {{ site.data.talent.mote }} from best to worst:
    1. {{ site.data.spell.eq }} if two or more targets are in its effect
    1. {{ site.data.spell.lb }} with {{ site.data.talent.sk }}
    1. {{ site.data.spell.es }}
    1. {{ site.data.spell.frs }} with {{ site.data.talent.if }}
    1. {{ site.data.spell.lb }}
    1. {{ site.data.talent.if }}
    1. {{ site.data.spell.frs }}

#### {{ site.data.talent.se }} + {{ site.data.talent.eb }}
- Active Azerite: 3x {{ site.data.azerite.natural_harmony }}
- Change: You keep casting {{ site.data.talent.eb }} until you reach 14 stacks of {{ site.data.spell.wind_gust }}


#### {{ site.data.talent.sk }} + {{ site.data.talent.sop }}
- Change: You pool Maelstrom before casting {{ site.data.talent.sk }} to combo both empowered {{ site.data.spell.lb }} with {{ site.data.talent.sop }}
- Example cast sequence:
    - Pool to 96+MS
    - {{ site.data.spell.es }}
    - {{ site.data.talent.sk }}
    - {{ site.data.spell.lb }}
    - {{ site.data.spell.lvb }}
    - {{ site.data.spell.es }}
    - {{ site.data.spell.lb }}

#### {{ site.data.talent.sop }} + 2 targets
- Change: as long as both targets don't have {{ site.data.spell.fs }} or are in refreshable duration and spread range, use {{ site.data.spell.es }} once to spread {{ site.data.spell.fs }} to both with {{ site.data.talent.sop }}.


## AoE (3 or more targets)
<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
        <li> Cast {{ site.data.spell.meteor }} / {{ site.data.spell.eye_of_the_storm }} against as many targets as possible. Make sure {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }} before you activate {{ site.data.spell.eye_of_the_storm }}.</li>
        <li>Cast {{ site.data.talent.tm }} when any of the following are true:
            <ol>
                <li>It is not active.</li>
                <li>The buff's duration is at or below 9 seconds remaining.</li>
            </ol>
        </li>
        <li>Cast {{ site.data.spell.fe }} / {{ site.data.talent.se }} / {{site.data.spell.ee}} on cooldown (see <a href="#pe">the warning</a> about Primal Elementalist).</li>
        <li class="sk-apl">Cast {{ site.data.talent.sk }} on cooldown.</li>
        <li class="lmt-apl" style="display:none;">Cast {{ site.data.talent.lmt }} on cooldown.</li>
        <li>Maintain 3 {{ site.data.spell.fs }}s if there are 3 targets.</li>
        <li>Cast {{ site.data.spell.eq }} when available. (Try gaming {{ site.data.talent.mote }} if fighting 3 stacked targets.)</li>
        <li>Cast {{ site.data.spell.lvb }} to consume {{site.data.spell.lava_surge}} procs when {{ site.data.talent.se }} is not active and you're fighting only 3 targets.</li>
        <li class="eb-apl" style="display:none;">Cast {{ site.data.talent.eb }} if there are 3 targets.</li>
        <li>Cast {{ site.data.spell.cl }}.</li>
    </ol>
</div>

**Special mention** {{ site.data.spell.fs }} can be maintained at 4 targets and should be, if you can ensure that they all live at least 80% of the duration. Because this is usually not the case, we opted to write 3 as the maximum number of spreads. Tread carefully, as this could otherwise backfire.

**Special mention** There are many caveats with {{ site.data.talent.mote }} when in AoE situations. *IF* you have two or more {{ site.data.azerite.igneous_potential }} equipped, it is generally worth using {{ site.data.spell.lava_surge }} procs to empower {{ site.data.spell.eq }}s, even on 4+ targets. On more than 4 targets, only apply flame shock to one of the targets, ideally a target with higher health than the rest. Use {{ site.data.spell.lava_surge }} procs on the afflicted target in order to empower {{ site.data.spell.eq }}. With this in mind, be careful not to overdo it; it will very likely result in a loss of DPS if enemies die before your {{ site.data.spell.eq }} finishes ticking when you could have used the spell earlier.

## Openers

Follow the cast sequences below for your chosen opener. A <span style="color:red">red arrow</span> indicates the time the boss is pulled. Please note that openers are a *very* minor and nit-picky increase (or sometimes decrease!), and adapting to the fight is much more important.

Standard raid opener:
<div class="opener">
    <div class="skill sk"><span>SK</span></div>
    <div class="arrow"></div>
    <div class="skill tm"><span>TM</span></div>
    <div class="arrow"></div>
    <div class="skill lvb"><span>LvB</span></div>
    <div class="arrow pull"></div>
    <div class="skill fs"><span>FS</span></div>
    <div class="arrow"></div>
    <div class="skill fe"><span>FE</span></div>
    <div class="arrow"></div>
    <div class="skill lb"><span>LB</span></div>
    <div class="arrow"></div>
    <div class="skill if"><span>IF</span></div>
    <div class="arrow"></div>
</div>

<br>
## Common misconceptions and mistakes

> "I should try and play around {{site.data.talent.mote}}!"

The only time you should adjust your gameplay for {{site.data.talent.mote}} is when you have the liberty to cast a spell *later* with a MotE buff versus *now* -- this means for a spell like {{site.data.spell.es}}, you can make the decision to wait until you have the {{site.data.talent.mote}} buff active before casting it (this is reflected in the priority above). This is thanks to the low urgency of {{site.data.spell.es}} casts, as you are not constrained by a cooldown or Maelstrom cast, since you can cast it at any point between 60 and 100 Maelstrom.

> "I should cast {{ site.data.spell.lb }} during {{ site.data.talent.asc }} if I have some powerful buffs for it active!"

During {{ site.data.talent.asc }} you only want to spend your time casting {{ site.data.spell.lvb }} and {{ site.data.spell.es }}. Yes you'll waste {{ site.data.talent.mote }} but that's fine.

> "I should cast {{ site.data.talent.eb }} during {{ site.data.talent.asc }}!"

No. {{ site.data.talent.eb }} doesn't deal enough damage by quite a significant margin.

> "I should cast {{ site.data.talent.if }} with {{ site.data.talent.mote }} during {{ site.data.talent.asc }}!"

No. Your {{ site.data.talent.asc }} is ideally used when {{ site.data.talent.if }} is on cooldown and won't get ready while you're casting {{ site.data.spell.lvb }}.

> "I should only cast {{ site.data.spell.lb }} / {{ site.data.spell.cl }} during {{ site.data.talent.se }}!"

During single target you'll want to only cast {{ site.data.spell.lb }} and {{ site.data.spell.es }}. During AoE {{ site.data.spell.cl }} becomes quickly more worth than {{ site.data.spell.lvb }}. Nonetheless you should use {{ site.data.spell.eq }}.

> "I should cast {{ site.data.spell.fs }} at 7.2 seconds remaining or lower!"

That's correct but which human is able to accurately judge the difference between 7.2 seconds and 7 seconds. So we decided to present the easier to digest number in the priority list.

> "I should cast {{ site.data.talent.tm }} at less than 9 seconds remaining!"

Yes, the shorter the remaining duration, the less likely it is for you to need an additional cast of it over the whole fight. But because that is quite unlikely already, 9 is a good rule of thumbs. The overall dps won't budge with that change.

> "I should try to keep {{ site.data.azerite.natural_harmony }} active with {{ site.data.spell.frs }}!"

No.

## Warning about Primal Elementalist

<p id="pe">A problem that has existed for a while now is {{site.data.talent.pe}} causing {{site.data.spell.fe}} and {{site.data.spell.ee}} to be exclusive with each other (intended) but the dps Elemental has the higher Priority. Summoning the dps Elemental first will put {{site.data.spell.ee}} on CD when used without spawning it. Summoning {{site.data.spell.ee}} first will despawn it when summoning the DPS Elemental second.</p>

In addition all Elementals have autocasts. If you disable one on one Elemental all other Elementals will have that ability deactivated too. This is very annoying and we hope for a fix.

Combining {{ site.data.talent.se }} with {{ site.data.talent.pe }} enables access to {{ site.data.spell.eye_of_the_storm_damage }}. This powerful ability needs to be activated manually. Make sure to use it shortly after your {{ site.data.talent.se }} buffs itself with {{ site.data.spell.call_lightning }}. {{ site.data.spell.eye_of_the_storm_damage }} is an incredible AoE CD and very useful for single target as well. Check out our FAQ for macros if you need help with that.


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
