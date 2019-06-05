---
layout: page
title: Talents
last_update: 2019-06-02 09:00:00
game_version: 8.1.5 Battle for Azeroth
toc: true
---

## TL;DR Recommendations

Many more talent combinations may work. We're listing the most robust ones (for example less affected by movement).

Type | Talent combination
--- | ---
Questing / Solo&nbsp;Content | 15: {{ site.data.talent.er }}<br> 30: {{ site.data.talent.tm }}<br> 45: {{ site.data.talent.earth_shield }}<br> 60: {{ site.data.talent.se }}<br> 75: {{ site.data.talent.natures_guardian }}<br> 90: {{ site.data.talent.sop }}<br> 100: {{ site.data.talent.sk }}
Mythic+ | 15: {{ site.data.talent.echo }} **OR** {{ site.data.talent.er }}<br> 30: {{ site.data.talent.afs }}<br> 45: {{ site.data.talent.sw }} **OR** {{ site.data.talent.static_charge }}<br> 60: {{ site.data.talent.mote }} **OR** {{ site.data.talent.se }} <br> 75: {{ site.data.talent.natures_guardian }} **OR** {{ site.data.talent.ancestral_guidance }}<br> 90: {{ site.data.talent.pe }}<br> 100: {{site.data.talent.sk}}
Raid / Single&nbsp;Target | 15: {{ site.data.talent.echo }}<br> 30: {{ site.data.talent.tm }}<br> 45: {{ site.data.talent.sw }}<br> 60: {{ site.data.talent.mote }}<br> 75: {{ site.data.talent.natures_guardian }}<br> 90: {{ site.data.talent.if }} **OR** {{ site.data.talent.pe }}<br> 100: {{ site.data.talent.sk }}

**Special Mention** {{ site.data.talent.sop }} can depending on fight length surpass {{ site.data.talent.pe }} and {{ site.data.talent.if }}. The downside is: you need to figure out on the fly which effect of {{ site.data.talent.sop }} you actually need. Check out logs! Additionally, {{ site.data.talent.pe }} Is fairly close to {{ site.data.talent.if }} on single target, and is generally more powerful when multiple targets are present. We recommend inexperienced shamans use {{ site.data.talent.pe }} regardless, as {{ site.data.talent.if }} is significantly more complex.

**Special Mention** The "Raid / Single Target" talent combination assumes you have access to two or more {{ site.data.azerite.igneous_potential }}. Which should be fairly easy in Battle for Dazar'Alor. Additionally, the Mythic+ section represents combinations with and without {{ site.data.azerite.igneous_potential }}. The talents listed first for each row favor the trait, the talents listed on the right are recommended if you do not have {{ site.data.azerite.igneous_potential }}. Please view the mythic+ section of the website for more information regarding these selections!

There are other talent combinations that peform close to these or sometimes even better. So please make sure to sim your character if you suspect that something else is a better general choice.


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
                <h4>{{site.data.talent.er}} (ER)</h4>
                <p markdown="1">A passive talent which requires no thought or change in gameplay.</p>
                <hr><br>
                <h4>{{site.data.talent.eote}} (EotE / Echo)</h4>
                <p markdown="1"> Quite a simple talent to understand, EotE / Echo just adds a charge to {{ site.data.spell.lvb }}. At face value this may not seem impactful, but once you consider that effects which reset the cooldown on {{ site.data.spell.lvb }} will now instead grant a charge, the benefits are clear. Echo adds value by allowing extra time for you to cast {{ site.data.spells.lvb }} instead of needing to cast it immediately when it comes off cooldown. This is because you'll lose no DPS by choosing to cast another spell while {{ site.data.spell.lvb }} has less than 2 charges, as the second charge "cooling down" does not translate to wasted DPS. This makes this talent helpful for any kind of movement compared to {{ site.data.talent.eb }}.</p>
                <hr><br>
                <h4>{{site.data.talent.eb}} (EB)</h4>
                <p markdown="1"> This is a relatively short CD (12 sec) that grants a random secondary stat buff (Critical Strike, Haste, or Mastery) for 10 seconds. It should be used on cooldown, and you should not behave differently based on which buff you get -- just treat it as a passive increase.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{site.data.talent.er}} should be taken for virtually all situations unless you have {{ site.data.azerite.igneous_potential }} twice in which case you should use {{ site.data.talent.eote }} for anything up to and including 2 targets. {{ site.data.talent.eote }} synergises well with {{site.data.talent.mote}} (if taken) but due to the buff to {{ site.data.spell.lb }} this talent lost a lot of its value. {{site.data.talent.eb}} is too weak in all regards unless you stack {{ site.data.azerite.natural_harmony }} three times. But even then it would fall behind the other choices.</p>
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
                <h4>{{site.data.talent.ctt}} (CtT)</h4>
                <p markdown="1"> Reduces the required Maelstrom for {{ site.data.spell.es }} and {{ site.data.spell.eq }}. This talent smoothes out our playstyle via increasing the frequency at which our spenders are available. Additionaly the increase maximum Maelstrom prevents {{ site.data.talent.sk }} from overcaping versus 5 targets.</p>
                <hr><br>
                <h4>{{site.data.talent.tm}} (TM)</h4>
                <p markdown="1"> A set of stationary buffing totems which provide small but effective bonuses while within their 40 yard range. Ideally you want to use this every 2 minutes, or whenever you're forced to move out of the buff radius.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{site.data.talent.tm}} for most content. {{site.data.talent.afs}} is competitive with {{site.data.talent.tm}} for 2+ targets , but is only strictly superior in AoE situations once you have 5 or more targets. {{site.data.talent.ctt}} is currently under-tuned & is effectively a substantially weaker form of {{site.data.talent.afs}}. It is not recommended in any situation.</p>
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
                <h4>{{site.data.talent.static_charge}} (SC)</h4>
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
                <h4>{{site.data.talent.mote}} (MotE)</h4>
                <p markdown="1"> Adds an interaction between {{ site.data.spell.lvb }} and {{ site.data.spell.es }} / {{ site.data.spell.eq }} / {{ site.data.spell.frs }} / {{ site.data.spell.lb }} / {{ site.data.spell.cl }}. Note that {{ site.data.talent.mote }}'s buff is applied *immedately* on a successful {{ site.data.spell.lvb }} cast, not when the {{ site.data.spell.lvb }} projectile hits the target. This is distinct from every other interaction with {{ site.data.spell.lvb }} in the past. For more than 3 targets you still should ideally not cast {{ site.data.spell.lvb }}. This talent is a trap when 4 or more targets are present.</p>
                <hr><br>
                <h4>{{site.data.talent.se}} (SE)</h4>
                <p markdown="1"> Subsequent casts of {{ site.data.spell.lb }} and {{ site.data.spell.cl }} reduce *both the cast time and the GCD incurred* by 3% (up to 60%) during the Elementals uptime. Therefore if you have to move instead of casting your usual spells you lose some value of this CD.</p>
                <hr><br>
                <h4>{{site.data.talent.lmt}} (LMT)</h4>
                <p markdown="1"> Offers some nice burst AOE on a moderate cooldown, especially when encounter timing allows you to get high-value casts on or near cooldown.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** {{ site.data.talent.mote }} is now the default choice if you have {{ site.data.azerite.igneous_potential }} twice and use {{ site.data.talent.echo }}. Outside of that case {{ site.data.talent.se }} is the default choice, this talent is extremely strong and versatile. It offers the highest single-target throughput when used in combination with either {{ site.data.talent.pe }} or {{ site.data.talent.sop }} as well as extremely potent AoE burst damage especially when used in conjunction with {{ site.data.talent.pe }}. The other talents on this row are more situational; {{ site.data.talent.mote }} when used in combination with {{ site.data.talent.if }} offers a viable alternative to the {{ site.data.talent.se }} based talent combinations. This may be useful on raid bosses where there are frequent high priority targets swaps or for bosses where it may not be possible to consistently utilize {{ site.data.talent.se }} due to a large amount of movement being required. {{ site.data.talent.lmt }} is a multi-target talent that may occasionally pull ahead of {{ site.data.talent.se }}. It is generally strong when either the fight or instance timings are unfavorable for {{ site.data.talent.se }} but optimal for {{ site.data.talent.lmt }} and additionally {{ site.data.talent.lmt }} tends to pull ahead for 2/3 target sustained cleave.</p>
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
                <h4>{{site.data.talent.wind_rush_totem}} (WRT)</h4>
                <p markdown="1">Raid utility that can occasionally help counter mechanics. Has an actual effect range indication since 8.1.</p>
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
                <h4>{{ site.data.talent.sop }} (SoP)</h4>
                <p markdown="1">A highly complex talent, that adds spell interactions to {{ site.data.spell.es }}. You determine which effect to trigger by which specc you cast next after {{ site.data.spell.es }}.</p>
                <ul>
                    <li>{{ site.data.spell.fs }} - spreads {{ site.data.spell.fs }} to a target within 8yards.</li>
                    <li>{{ site.data.spell.lb }} - overloads an additional 1-3 times. The chances are: 80% to get 1, 18% to get 2, and 2% to get 3 additional Overloads. These Overloads happen in addition to the baseline Overload chance, allowing this {{ site.data.spell.lb }} to overload up to 4 times if you're very lucky.</li>
                    <li>{{ site.data.spell.lvb }} - reduces the remaining cooldown of {{ site.data.spell.fe }} / {{ site.data.talent.se }} by 6 seconds.</li>
                    <li>{{ site.data.spell.frs }} - freeze the target in place for 6 seconds. Damage doesn't break the freeze</li>
                </ul>
                <hr><br>
                <h4>{{site.data.talent.pe}} (PE)</h4>
                <p markdown="1"> This changes your {{site.data.spell.fe}}, {{site.data.spell.ee}}, and {{site.data.talent.se}} into pets you can control instead of simple fire-and-forget guardians. The effects of {{site.data.talent.pe}} are listed for each elemental below:</p>
                <ul>
                    <li>{{site.data.spell.fe}} - gains {{site.data.spell.immolate}} and {{site.data.spell.meteor}}; a DoT and AOE attack with short cooldowns.</li>
                    <li>{{site.data.spell.ee}} - gains {{site.data.spell.harden_skin}}, a damage reduction cooldown that grants both the Shaman and the {{site.data.spell.ee}} a 40% damage reduction buff for 10 seconds. Despite this being on a one minute cooldown, it is effectively a 5 minute cooldown as the {{site.data.spell.ee}} can only cast it once in its lifetime. Also gains {{site.data.spell.pulverize}}, a decent single target stun on a long CD -- usable twice in the {{ site.data.spell.ee }}'s lifetime. Lastly, gains {{site.data.spell.angered_earth}}, a toggleable AOE taunt. This will not cause the elemental to get aggro on bosses, but it will generally work on trash or enemies summoned by bosses. While this can be incredibly useful at times, beware of accidentally misplacing enemies during an encounter.</li>
                    <li>{{site.data.talent.se}} - gains {{site.data.spell.eye_of_the_storm_damage}} a long CD AoE burst cooldown and will retain {{site.data.spell.call_lightning}} from its non primal form. {{site.data.spell.call_lightning}} does empower {{site.data.spell.eye_of_the_storm_damage}}, dealing significant damage.</li>
                </ul>
                <hr><br>
                <h4>{{site.data.talent.if}} (IF)</h4>
                <p markdown="1">Since the removal of the Maelstrom cost from {{ site.data.spell.frs }} in Patch 8.0, {{ site.data.talent.if }} has become much less complex to manage. This is to be used on cooldown assuming you can cast all four empowered {{ site.data.spell.frs }}s. {{ site.data.talent.if }} empowered {{ site.data.spell.frs }} generate Maelstrom now. This gives you more liberty in when you can use {{ site.data.talent.if }} charges, potentially for brief moments in the 15 second buff window where you will move for a few GCDs.</p>
                <hr><br>
                <p markdown="1">**Recommendation:** If you have {{ site.data.azerite.igneous_potential }} twice {{ site.data.talent.if }} in combinations with {{ site.data.talent.mote }} and {{ site.data.talent.echo }} is the default choice versus one and two targets. Outside of that {{ site.data.talent.pe }} becomes the default choice. {{ site.data.talent.sop }} is very powerful on *single target* encounters but is significantly more complex to utilize than {{ site.data.talent.pe }} or {{ site.data.talent.if }} and is only a gain under specific circumstances. {{ site.data.talent.if }} offers much improved mobility, but is very slightly weaker than the other two options if no movement is involved. {{ site.data.talent.if }} may perform better than the other alternatives on 1 or 2 target encounters when used with {{ site.data.talent.mote }}(single target) or {{ site.data.talent.lmt }} (2 target cleave).</p>
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
                <p markdown="1">An interesting buff that creates some *swing* in the spec, a tangible speeding up and slowing down of casts provided you're lucky with {{site.data.spell.mastery}} procs. This is especially noticeable in AOE, where you can regularly get in excess of 10 stacks for a total of 20%+ haste for a few seconds.</p>
                <hr><br>
                <h4>{{site.data.talent.sk}} (SK)</h4>
                <p markdown="1">A different version of the artifact ability from Legion. This ability buffs your next two {{ site.data.spell.lb }} and {{ site.data.spell.cl }}. If you decide to use {{ site.data.spell.lb }}, its dmg is buffed. In case of both possible usages all possible baseline Overloads are enforced. This means, that {{ site.data.spell.lb }} will be forced to overload once and {{ site.data.spell.cl }} overloads on each target hit. This is primarily useful for burst single target damage and AOE, such as in Mythic+ dungeons.</p>
                <hr><br>
                <h4>{{site.data.talent.asc}} (Asc)</h4>
                <p markdown="1">An additional cooldown with a few requirements for its use. First, you must ensure you'll have {{ site.data.spell.fs }} active for {{site.data.talent.asc}}' full duration. Second, you want to get high value out of {{site.data.talent.asc}} with high (optimally 100%) uptime of casts during the buff. You should adjust your casts during {{site.data.talent.asc}} as per the <a href="priority_list.html">priority list</a> page.</p>
                <hr><br>
                <p markdown="1">**Recommendation:**{{ site.data.talent.sk }} for all situations. {{ site.data.talent.asc }} took a big hit from the damage reshuffle between {{ site.data.spell.lb }} and {{ site.data.spell.es }} and is no longer an option under any circumstances. {{ site.data.talent.up }} is just weak and even if it were possible to sim identically to {{ site.data.talent.sk }} it requires constant casting and no movement to provide its dps. Because this isn't possible this talent can be considered non-existant too.</p>
            </div>
        </div>
    </div>
</div>
<br><br>
### Notable talent synergies

Please note that this list will only include talent synergies with easy to explain, intuitive reasoning behind them. There may exist some mild synergies not in this list, but we have chosen to not write about them here. Many factors affect which talents benefit others, so we have narrowed it down to synergies with direct impacts on gameplay.


#### Echo of the Elements and Master of the Elements

While {{ site.data.talent.echo }} essentially increases the frequency of {{ site.data.spell.lvb }} {{ site.data.talent.mote }} profits from that by allowing us to buff more casts.


#### Master of the Elements and Icefury

The first talent synergy we'll discuss is that of {{ site.data.talent.mote }} and {{ site.data.talent.if }}. The connection here is easy to understand; an increased frequency of heavy hitters like the {{ site.data.talent.if }} empowered {{ site.data.spell.frs }}s allows more worth from {{site.data.talent.mote}} buffs.


#### Storm Elemental and Primal Elementalist

These two talents have a direct 'synergy' in that taking them together gets you access to an additional ability for {{site.data.talent.se}} that synergizes very well with it's default abilities. As per the talent rows above: {{site.data.talent.se}} gains {{site.data.spell.eye_of_the_storm_damage}} a long CD AoE burst cooldown. When used with the buff from {{site.data.spell.call_lightning}} this will deal significant damage.

