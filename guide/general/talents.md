---
layout: page
title: Talents
last_update: 2018-07-15 09:00:00
game_version: 8.0.1 Pre-patch
---


## TL;DR Recommendations

**These suggestions are for the Legion 8.0 Pre-patch!**

Type | Talent combination
--- | ---
Questing / Solo&nbsp;Content | 15: {{ site.data.talent.eote }}<br> 30: {{ site.data.talent.mote }}<br> 45: {{ site.data.talent.earth_shield }}<br> 60: {{ site.data.talent.hv }}<br> 75: {{ site.data.talent.natures_guardian }}<br> 90: {{ site.data.talent.er }}<br> 100: {{ site.data.talent.up }}
Mythic+ | 15: {{ site.data.talent.ee }} **OR** {{site.data.talent.eb}}<br> 30: {{ site.data.talent.tm }}<br> 45: {{ site.data.talent.sw }} **OR** {{site.data.talent.static_charge}}<br> 60: {{ site.data.talent.hv }}<br> 75: {{ site.data.talent.natures_guardian }} **OR** {{site.data.talent.ancestral_guidance}}<br> 90: {{ site.data.talent.pe }}<br> 100: {{ site.data.talent.up }} **OR** {{site.data.talent.sk}}
Raid / Single&nbsp;Target | 15: {{ site.data.talent.ee }}<br> 30: {{ site.data.talent.tm }}<br> 45: {{ site.data.talent.sw }}<br> 60: {{ site.data.talent.hv }}<br> 75: {{ site.data.talent.natures_guardian }}<br> 90: {{ site.data.talent.pe }}<br> 100: {{ site.data.talent.up }}

## In depth discussion

The sections below are geared towards those looking to understand the essence of a talent and any interactions it may add to the spec. If you are just looking for a quick suggestion with no explanation, see the above TL;DR recommendations.

### Talent rows

Click the talent row text to expand.

<div id="accordion">
    <div class="card">
        <div class="card-header" id="L15">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L15-collapse" aria-expanded="true" aria-controls="L15-collapse">
                <b>Level 15 talents</b>
            </button></h4>
        </div>
        <div id="L15-collapse" class="collapse show" aria-labelledby="L15" data-parent="#accordion">
            <div class="card-body">
                <h4>{{site.data.talent.ee}} (EE)</h4>
                <p markdown="1">Adds an interaction between {{ site.data.spell.es }} and {{ site.data.spell.lb }} for added burst. Note that this talent applies a *debuff* to the target you cast {{ site.data.spell.es }} on, so you'll want to ensure the target will survive long enough for {{ site.data.spell.lb }} and its {{ site.data.spell.mastery }} proc to deal their damage.</p>
                <hr><br>
                <h4>{{site.data.talent.eote}} (EotE / Echo)</h4>
                <p markdown="1"> Quite a simple talent to understand, EotE just adds a charge to {{ site.data.spell.lvb }}. At face value this may not seem impactful, but once you consider that effects which reset the cooldown on {{ site.data.spell.lvb }} will now instead grant a charge, the benefits are clear. Echo adds value by allowing extra time for you to cast {{ site.data.spells.lvb }} instead of needing to cast it immediately when it comes off cooldown. This is because you'll lose no DPS by choosing to cast another spell while {{ site.data.spell.lvb }} has less than 2 charges, as the second charge "cooling down" does not translate to wasted DPS.</p>
                <hr><br>
                <h4>{{site.data.talent.eb}} (EB)</h4> <br>
                <p markdown="1"> This is a relatively short CD (12 sec) that grants a random secondary stat buff (Critical Strike, Haste, or Mastery) for 10 seconds. It should be used on cooldown, and you should not behave differently based on which buff you get -- just treat it as a passive increase.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{site.data.talent.ee}} should be taken whenever you're able to make use of the debuff on every {{site.data.spell.es}} cast. {{site.data.talent.eote}} is a decent alternative and synergises better with {{site.data.talent.mote}}.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L30">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L30-collapse" aria-expanded="false" aria-controls="L30-collapse">
                <b>Level 30 talents</b>
            </button></h4>
        </div>
        <div id="L30-collapse" class="collapse" aria-labelledby="L30" data-parent="#accordion">
            <div class="card-body">
                <h4>{{site.data.talent.afs}} (AfS)</h4>
                <p markdown="1">This functions like Legion's legendary boots, The Deceiver's Blood Pact. When you cast {{ site.data.spell.eq }} or {{ site.data.spell.es }}, you have a chance to immediately refund all the Maelstrom spent. This allows for increased burst AoE/ST but with the caveat that at a 25% chance, it is quite random and can't be reliably used for burst damage.</p>
                <hr><br>
                <h4>{{site.data.talent.mote}} (MotE)</h4>
                <p markdown="1"> Adds an interaction between {{ site.data.spell.lvb }} and {{ site.data.spell.es }} / {{ site.data.spell.frs }} / {{ site.data.spell.lb }} / {{ site.data.spell.cl }}. Note that {{ site.data.talent.mote }}'s buff is applied *immedately* on a successful cast, not when the {{ site.data.spell.lvb }} projectile hits the target. This is distinct from every other interaction with {{ site.data.spell.lvb }} in the past (and present). The benefit here is that, on bosses with very large hitboxes, you won't need to cast a filler spell between {{ site.data.spell.lvb }} and the spell you wish to empower with {{ site.data.talent.mote }}.</p>
                <hr><br>
                <h4>{{site.data.talent.tm}} (TM)</h4> <br>
                <p markdown="1"> A set of stationary buffing totems which provide small but effective bonuses while within their 40 yard range. Ideally you want to use this every 2 minutes, or whenever you're forced to move out of the buff radius.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{site.data.talent.tm}} for most content. {{site.data.talent.afs}} is a bit less powerful in the pre-patch, but can be used as an alternative. Currently, {{site.data.talent.mote}} is underwhelming.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L45">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L45-collapse" aria-expanded="false" aria-controls="L45-collapse">
                <b>Level 45 talents</b>
            </button></h4>
        </div>
        <div id="L45-collapse" class="collapse" aria-labelledby="L45" data-parent="#accordion">
            <div class="card-body">
                <h4>{{site.data.talent.spirit_wolf}} (SW)</h4>
                <p markdown="1">A fairly powerful talent that should be considered mostly for its defensive value, not the movement increase it provides. {{ site.data.talent.spirit_wolf }} is quite potent for predictable damage intake when you have the freedom to spend a few seconds in {{ site.data.spell.ghost_wolf }}, and when {{ site.data.spell.astral_shift }} is on cooldown.</p>
                <hr><br>
                <h4>{{site.data.talent.earth_shield}} (ESh)</h4>
                <p markdown="1"> An underwhelming talent that offers little value and requires additional GCDs throughout the fight. We do not recommend using this talent, but if you do decide to, ensure you do not refresh the stacks early. It is not important to stay at high stacks, and is a waste of a GCD to refresh.</p>
                <hr><br>
                <h4>{{site.data.talent.static_charge}} (SC)</h4> <br>
                <p markdown="1"> Very easy to understand and use. Simply put, if you stun 4+ targets with a use of {{ site.data.spell.capacitor_totem }}, its cooldown will instead be 40 seconds. </p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{ site.data.talent.spirit_wolf }} should be your go-to for almost every raid encounter. {{ site.data.talent.static_charge }} is quite nice in Mythic+, and {{ site.data.talent.earth_shield }} is unlikely to be useful.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L60">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L60-collapse" aria-expanded="false" aria-controls="L60-collapse">
                <b>Level 60 talents</b>
            </button></h4>
        </div>
        <div id="L60-collapse" class="collapse" aria-labelledby="L60" data-parent="#accordion">
            <div class="card-body">
                <h4>{{site.data.talent.hv}} (HV)</h4>
                <p markdown="1">Causes your {{ site.data.spell.lb }} and {{ site.data.spell.cl }} to 'roll' an additional {{ site.data.spell.mastery }} hit at a 50% reduced rate. This means if you cast {{ site.data.spell.lb }} with a 50% mastery chance, you will have a 50% chance to proc one hit of {{ site.data.spell.mastery }} and then a 25% chance to proc an additional hit. This is quite strong for sustained single target and AOE, but lacks the reliable burst of the other two choices in this tier.</p>
                <hr><br>
                <h4>{{site.data.talent.se}} (SE)</h4>
                <p markdown="1"> Subsequent casts of {{ site.data.spell.lb }} and {{ site.data.spell.cl }} reduce *both the cast time and the GCD incurred* by 3% (up to 60%). </p>
                <hr><br>
                <h4>{{site.data.talent.lmt}} (LMT)</h4> <br>
                <p markdown="1"> Offers some nice burst AOE on a moderate cooldown, especially when encounter timing allows you to get high-value casts on or near cooldown.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{site.data.talent.hv}} in almost every situation, except where you might need the burst AOE that {{site.data.talent.lmt}} offers.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L75">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L75-collapse" aria-expanded="false" aria-controls="L75-collapse">
                <b>Level 75 talents</b>
            </button></h4>
        </div>
        <div id="L75-collapse" class="collapse" aria-labelledby="L75" data-parent="#accordion">
            <div class="card-body">
                <h4>{{site.data.talent.natures_guardian}} (NG)</h4>
                <p markdown="1">Acts similarly to the Shamanistic Healing artifact weapon trait in Legion. Serves as an additional HP buffer, but does not prevent you from being one-shotted by big hits *or massive damage*.</p>
                <hr><br>
                <h4>{{site.data.talent.ancestral_guidance}} (AG)</h4>
                <p markdown="1"> A decent emergency heal when used in AoE, but quite underwhelming for ST. This should only be considered for use when *dealing damage*, **not when casting {{ site.data.spell.healing_surge }}**.</p>
                <hr><br>
                <h4>{{site.data.talent.wind_rush_totem}} (WRT)</h4> <br>
                <p markdown="1">Raid utility that requires a bit of experience to place properly. The movement speed buff radius is unclear, but with some practise and proper raid positioning it should not be an issue.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{ site.data.talent.natures_guardian }} as a default, but consider {{ site.data.talent.ancestral_guidance }} for Mythic+ dungeons where you might need an AOE healing cooldown, and {{ site.data.talent.wind_rush_totem }} for raid encounters as necessary.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L90">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L90-collapse" aria-expanded="false" aria-controls="L90-collapse">
                <b>Level 90 talents</b>
            </button></h4>
        </div>
        <div id="L90-collapse" class="collapse" aria-labelledby="L90" data-parent="#accordion">
            <div class="card-body">
                <h4>{{site.data.talent.er}} (ER)</h4>
                <p markdown="1">A passive talent which requires no thought or change in gameplay.</p>
                <hr><br>
                <h4>{{site.data.talent.pe}} (PE)</h4>
                <p markdown="1"> This changes your {{site.data.spell.fe}}, {{site.data.spell.ee}}, and {{site.data.talent.se}} into pets you can control instead of simple fire-and-forget guardians. The effects of {{site.data.talent.pe}} are listed for each elemental below:</p>
                <ul>
                    <li>{{site.data.spell.fe}} - gains {{site.data.spell.immolate}} and {{site.data.spell.meteor}}; a DoT and AOE attack with short cooldowns.</li>
                    <li>{{site.data.spell.ee}} - gains {{site.data.spell.harden_skin}}, a damage reduction cooldown that grants *both the Shaman and the {{site.data.spell.ee}} a 40% damage reduction buff for 10 seconds. Despite this being on a one minute cooldown, it is effectively a 5 minute cooldown as the {{site.data.spell.ee}} can only cast it once in its lifetime. Also gains {{site.data.spell.pulverize}}, a decent single target stun on a long CD -- usable twice in the {{ site.data.spell.ee }}'s lifetime. Lastly, gains {{site.data.spell.angered_earth}}, a toggleable AOE taunt. We recommend turning this off auto-cast unless you are looking to use {{site.data.spell.ee}} for its aggro purposes.</li>
                    <li>{{site.data.talent.se}} - gains {{site.data.spell.eye_of_the_storm_damage}} a long CD AoE burst cooldown, a short range movement speed buff with the same name ({{site.data.spell.eye_of_the_storm_movement}}). Lastly, gains {{site.data.spell.call_lightning}} to buff its own damage.</li>
                </ul>
                <hr><br>
                <h4>{{site.data.talent.if}} (IF)</h4> <br>
                <p markdown="1">Since the removal of the Maelstrom cost from {{ site.data.spell.frs }} in Patch 8.0, {{ site.data.talent.if }} has become much less complex to manage. This is to be used on cooldown assuming you can cast all four empowered {{ site.data.spell.frs }}s. The Maelstrom cost removal from {{ site.data.spell.frs }} gives you a bit more liberty in when you can use {{ site.data.talent.if }} charges, potentially for brief moments in the 15 second buff window where you will move for a few GCDs.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{site.data.talent.pe}} in all cases.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L100">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L100-collapse" aria-expanded="false" aria-controls="L100-collapse">
                <b>Level 100 talents</b>
            </button></h4>
        </div>
        <div id="L100-collapse" class="collapse" aria-labelledby="L100" data-parent="#accordion">
            <div class="card-body">
                <h4>{{site.data.talent.up}} (UP)</h4>
                <p markdown="1">An interesting buff that creates some *swing* in the spec, a tangible speeding up and slowing down of casts provided you're lucky with {{site.data.spell.mastery}} procs. This is especially noticeable in AOE with {{site.data.talent.hv}}, where you can regularly get in excess of 15 stacks for a total of 30%+ haste for a few seconds.</p>
                <hr><br>
                <h4>{{site.data.talent.sk}} (SK)</h4>
                <p markdown="1">A copy of the artifact ability from Legion with a few major changes. The first is that it no longer increases the damage done by the {{ site.data.spell.lb }} and {{site.data.spell.cl}} casts it empowers. The second difference is the reduction from three stacks of the {{site.data.talent.sk}} buff to two. This is primarily useful for burst AOE, such as in Mythic+ dungeons, but is a far cry from its original state in Legion.</p>
                <hr><br>
                <h4>{{site.data.talent.asc}} (Asc)</h4> <br>
                <p markdown="1">A potent cooldown with a few requirements for its use. First, you must ensure you refresh {{ site.data.spell.fs }} before casting {{ site.data.talent.asc }} as the reduced duration of {{site.data.spell.fs}} in BFA would likely require you to refresh it during {{site.data.talent.asc}}. Second, you want to get high value out of {{site.data.talent.asc}} with high (optimally 100%) uptime of casts during the buff. You should adjust your casts during {{site.data.talent.asc}} as per the <a href="priority_list.html">priority list</a> page.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{site.data.talent.up}} for single target and sustained AOE; {{site.data.talent.sk}} if you require burst AOE.</p>
            </div>
        </div>
    </div>
</div>
<br><br>
### Notable talent synergies

Please note that this list will only include talent synergies with easy to explain, intuitive reasoning behind them. There may exist some mild synergies not in this list, but we have chosen to not write about them here. Many factors affect which talents benefit others, so we have narrowed it down to synergies with direct impacts on gameplay.

#### Master and Echo [of the Elements]

The first talent synergy we'll discuss is that of {{ site.data.talent.mote }} and {{ site.data.talent.eote }}. The connection here is easy to understand; an increased frequency of {{ site.data.spell.lvb }} from {{ site.data.talent.eote }}'s second charge would naturally lead to an increased number of {{site.data.talent.mote}} buffs. The added benefit here is from the nature of the charge system's design. While one charge is cooling down, you are free to cast {{site.data.spell.lvb}} when you wish. This enables better handling of the {{site.data.talent.mote}} buff without losing DPS to holding {{site.data.spell.lvb}}. Casting {{site.data.spell.lvb}} into {{site.data.spell.es}} or an {{site.data.talent.if}}-empowered {{site.data.spell.frs}} is much more fluid and easily achieved with this talent combination.

#### High Voltage and Unlimited Power

Due to the nature of {{site.data.talent.up}}'s buff stacking on {{site.data.spell.mastery}} procs, it is clear to see that a talent which increases the number of {{site.data.spell.mastery}} procs ({{site.data.talent.hv}}) will greatly benefit the buff stacks. Although at the mercy of "RNG", this combination allows for very high stacks of {{site.data.talent.up}} which in turn has a slight positive feedback effect; the more stacks you have the higher your haste, thus the more stacks you can potentially get from more {{site.data.spell.mastery}} procs.


#### Exposed Elements and Aftershock

The last talent synergy we'll look at is that of {{site.data.talent.ee}} and {{site.data.talent.afs}}. A combination of factors enable an interaction between these talents. Firstly, the 60 Maelstrom cost of {{site.data.spell.es}} creates an important buffer between when the spell is castable and capped (100) Maelstrom, which aids in casting multiple {{site.data.spell.es}}s close together without risk of Maelstrom overflow. This part is particularly important for {{site.data.talent.ee}}, as you will want to maintain a cast chain of {{site.data.spell.es}} -> {{site.data.spell.lb}} -> {{site.data.spell.es}} -> {{site.data.spell.lb}} so as to not overwrite the {{site.data.talent.ee}} debuff on the target.


#### Storm Elemental and Primal Elementalist

These two talents have a direct 'synergy' in that taking them together gets you access to additional abilities for {{site.data.talent.se}}. As per the talent rows above: {{site.data.talent.se}} gains {{site.data.spell.eye_of_the_storm_damage}} a long CD AoE burst cooldown, a short range movement speed buff with the same name ({{site.data.spell.eye_of_the_storm_movement}}). Lastly, gains {{site.data.spell.call_lightning}} to buff its own damage.