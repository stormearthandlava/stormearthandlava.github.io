---
layout: page
title: Talents
last_update: 06/09/2022 09:00:00
game_version: 9.2.7 Shadowlands
toc: true
---

## TL;DR Recommendations

Many more talent combinations may work. We're listing the most robust ones (for example less affected by movement). If multiple talents are shown the first one is the recommendation and the later ones are solid alternatives.

Type | Talent combination
--- | ---
Questing / Solo&nbsp;Content | 15: {{ site.data.spell.eote }}<br/> 25: {{ site.data.spell.eb }}<br/> 25: {{ site.data.spell.earth_shield }}<br/> 35: {{ site.data.spell.mote }}<br/> 40: {{ site.data.spell.natures_guardian }}<br/> 45: {{ site.data.spell.pe }}<br/> 50: {{ site.data.spell.sk }}
Mythic+ | 15: {{ site.data.spell.echo }}<br/> 25: {{ site.data.spell.afs }}<br/> 30: {{ site.data.spell.sw }} **OR** {{ site.data.spell.static_charge }}<br/> 35: {{ site.data.spell.mote }} **OR** {{ site.data.spell.se }}<br/> 40: {{ site.data.spell.natures_guardian }} **OR** {{ site.data.spell.ancestral_guidance }}<br/> 45: {{ site.data.spell.pe }}<br/> 50: {{ site.data.spell.sk }}
Raid / Single Target (Standard) | 15: {{ site.data.spell.echo }}<br/> 25: {{ site.data.spell.eb }}<br/> 30: {{ site.data.spell.sw }}<br/> 35: {{ site.data.spell.se }} **OR** {{ site.data.spell.mote }}<br/> 40: {{ site.data.spell.natures_guardian }} **OR** {{ site.data.spell.wrt }}<br/> 45: {{ site.data.spell.pe }}<br/> 50: {{ site.data.spell.sk }} **OR** {{ site.data.spell.asc }}


There are other talent combinations that perform close to these or sometimes even better. So please make sure to sim your character if you suspect that something else is a better general choice.


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
                <h4>{{ site.data.spell.er }} (ER)</h4>
                <p>A passive talent which requires no thought or change in gameplay. In scenarios where you are not hardcasting {{ site.data.spell.lava_burst }} and therefore {{ site.data.spell.eote }} provides no value, {{ site.data.spell.er }} becomes better than it. Due to the change to {{ site.data.spell.wind_gust }} stacks, this is never the case and {{ site.data.spell.lvb }} should always be hardcasted in Single Target</p>
                <hr><br/>
                <h4>{{ site.data.spell.eote }} (EotE / Echo)</h4>
                <p> Quite a simple talent to understand, EotE / Echo just adds a charge to {{ site.data.spell.lvb }}. At face value this may not seem impactful, but once you consider that effects which reset the cooldown on {{ site.data.spell.lvb }} will now instead grant a charge, the benefits are clear. Echo adds value by allowing extra time for you to cast {{ site.data.spell.lvb }} instead of needing to cast it immediately when it comes off cooldown. This is because you'll lose no DPS by choosing to cast another spell while {{ site.data.spell.lvb }} has less than 2 charges, as the second charge "cooling down" does not translate to wasted DPS. For {{ site.data.spell.eote }} to provide its value, it requires hardcasted {{ site.data.spell.lvb }} to feature in the rotation.</p>
                <hr><br/>
                <h4>{{ site.data.spell.sd }} (SD)</h4>
                <p> Static Discharge adds a spell to our toolkit that you can only use while you have {{ site.data.spell.lightning_shield }} active. It deals damage to a nearby target with {{ site.data.spell.fs }}. Because different types of self-casted shield don't stack, you will not be able to benefit from your own {{ site.data.spell.earth_shield }}.</p>
                <hr><br/>
                <p markdown="1">**Recommendation:** {{ site.data.spell.eote }} should be taken in all scenarios because we will be hardcasting {{ site.data.spell.lvb }}. {{ site.data.spell.er }}'s only use is for raid fights where you are entirely planning around your AoE use of {{ site.data.spell.se }}, but it will be a significant loss of damage in all other parts of those fights. {{ site.data.spell.sd }} barely does any damage and is too limited in its use to ever be worth considering.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L25">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L25-collapse" aria-expanded="false" aria-controls="L25-collapse">
                <b>Level 25 talents</b>
            </button></h4>
        </div>
        <div id="L25-collapse" class="collapse" aria-labelledby="L25" data-parent="#accordion">
            <div class="card-body">
                <h4>{{ site.data.spell.afs }} (AfS)</h4>
                <p>When you cast {{ site.data.spell.eq }} or {{ site.data.spell.es }}, you have a chance to immediately refund all the Maelstrom spent. This allows for increased burst but with the caveat that at a 25% chance, it is quite random and can't be reliably used for burst damage.</p>
                <hr><br/>
                <h4>{{ site.data.spell.ecs }} (EcS)</h4>
                <p> Duplicates the next offensive spell used, after 1 second. The duplicate behaves like a normal cast. It is best to use this on {{ site.data.spell.es }} on single target *without* 4-Tier, {{ site.data.spell.lvb }} *with* 4-Tier, and {{ site.data.spell.eq }} on AoE. The echoed spell does not benefit from any buffs present when the triggering spell is cast, but will consume and benefit from them if a relevant buff is present when the echoed spell itself triggers. This spell has good flexibility between Single Target and AoE.</p>
                <hr><br/>
                <h4>{{ site.data.spell.eb }} (EB)</h4>
                <p> This is a relatively short CD (12 sec) that grants a random secondary stat buff (Critical Strike, Haste, or Mastery) for 10 seconds. It should be used on cooldown, and you should not behave differently based on which buff you get -- just treat it as a passive increase.</p>
                <hr><br/>
                <p markdown="1">**Recommendation:** {{ site.data.spell.eb }} for single target with standard build. {{ site.data.spell.afs }} is usually the clear winner for 3+ targets. {{ site.data.spell.ecs }} despite offering greater control of your damage across more than just one damage profile, it is undertuned relative to the other options in their preferred scenarios and is not chosen unless you've also chosen to use {{ site.data.expansion_feature.sl.legendary.eeq }}.</p>
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
                <h4>{{ site.data.spell.spirit_wolf }} (SW)</h4>
                <p>A fairly powerful talent that should be considered mostly for its defensive value, not the movement increase it provides. {{ site.data.spell.spirit_wolf }} is quite potent for predictable damage intake when you have the freedom to spend a few seconds in {{ site.data.spell.ghost_wolf }}, and when {{ site.data.spell.as }} is on cooldown.</p>
                <hr><br/>
                <h4>{{ site.data.spell.earth_shield }} (ESh)</h4>
                <p> For the small amount of GCDs required throughout an encounter, depending on the type of damage present and movement requirements, {{ site.data.spell.earth_shield }} can provide solid amounts of passive healing. Avoid refreshing it early unless there are breaks in combat/intermission phases. For Kyrian shamans it also triggers the healing charges of {{ site.data.spell.vesper_totem }}.</p>
                <hr><br/>
                <h4>{{ site.data.spell.static_charge }} (SC)</h4>
                <p> Very easy to understand and use. Simply put, if you stun 4+ targets with a use of {{ site.data.spell.capacitor_totem }}, its cooldown will instead be 40 seconds. </p>
                <hr><br/>
                <p markdown="1">**Recommendation:** {{ site.data.spell.spirit_wolf }} should be your default for almost every raid encounter. {{ site.data.spell.static_charge }} is quite nice in Mythic+.  {{ site.data.spell.earth_shield }} is sometimes useful for raid encounters with consistent incoming damage.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L35">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L35-collapse" aria-expanded="false" aria-controls="L35-collapse">
                <b>Level 35 talents</b>
            </button></h4>
        </div>
        <div id="L35-collapse" class="collapse" aria-labelledby="L35" data-parent="#accordion">
            <div class="card-body">
                <h4>{{ site.data.spell.mote }} (MotE)</h4>
                <p markdown="1"> Adds an interaction between {{ site.data.spell.lvb }} and {{ site.data.spell.es }} / {{ site.data.spell.eq }} / {{ site.data.spell.frs }} / {{ site.data.spell.lb }} / {{ site.data.spell.cl }} / {{ site.data.spell.eb }} / {{ site.data.spell.if }}. Note that {{ site.data.spell.mote }}'s buff is applied *immediately* on a successful {{ site.data.spell.lvb }} cast, not when the {{ site.data.spell.lvb }} projectile hits the target. This is distinct from every other interaction with {{ site.data.spell.lvb }} in the past.</p>
                <hr><br/>
                <h4>{{ site.data.spell.se }} (SE)</h4>
                <p> Subsequent casts of {{ site.data.spell.lb }} and {{ site.data.spell.cl }} reduce *both the cast time and the GCD incurred* by 3% (up to 30%) during the Elementals uptime. Therefore if you have to move instead of casting your usual spells you lose some value of this CD. This does not make {{ site.data.spell.lb }} stronger than {{ site.data.spell.lvb }}</p>
                <hr><br/>
                <h4>{{ site.data.spell.lmt }} (LMT)</h4>
                <p> Offers some nice AOE on a moderate cooldown, especially when encounter timing allows you to get high-value casts on or near cooldown. Its long duration and static location make it hard to use.</p>
                <hr><br/>
                <p markdown="1">**Recommendation:** {{ site.data.spell.mote }} is the Standard choice in raiding and is viable for M+ use. {{ site.data.spell.se }} is still the default choice for M+ despite the {{ site.data.spell.wind_gust }} change, and has specific uses in raid content where externals or burst aoe are required. When taking {{ site.data.spell.se }} you should also take {{ site.data.spell.pe }} to make use of {{ site.data.spell.tempest }}. {{ site.data.spell.lmt }} has reasonable base power however the buffs to our base AoE spells ({{ site.data.spell.cl }} and {{ site.data.spell.eq }} in [9.0.5](https://shadowlands.wowhead.com/guides/shaman-class-changes-shadowlands-patch-9-0-5) means the alternatives have increased value relative to {{ site.data.spell.lmt }} making it less appealing.
                </p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L40">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L40-collapse" aria-expanded="false" aria-controls="L40-collapse">
                <b>Level 40 talents</b>
            </button></h4>
        </div>
        <div id="L40-collapse" class="collapse" aria-labelledby="L40" data-parent="#accordion">
            <div class="card-body">
                <h4>{{ site.data.spell.natures_guardian }} (NG)</h4>
                <p markdown="1">Serves as an additional HP buffer, but does not prevent you from being one-shotted by big hits *or massive damage*.</p>
                <hr><br/>
                <h4>{{ site.data.spell.ancestral_guidance }} (AG)</h4>
                <p markdown="1"> An excellent source of utility for the spec in M+ content on large pulls, but quite underwhelming for ST. This should only be considered for use when *dealing damage*, **not when casting {{ site.data.spell.healing_surge }}**.</p>
                <hr><br/>
                <h4>{{ site.data.spell.wind_rush_totem }} (WRT)</h4>
                <p markdown="1">Raid utility that can occasionally help counter mechanics.</p>
                <hr><br/>
                <p markdown="1">**Recommendation:** {{ site.data.spell.natures_guardian }} as a default, but consider {{ site.data.spell.ancestral_guidance }} for Mythic+ dungeons where you might need an AOE healing cooldown, and {{ site.data.spell.wind_rush_totem }} for raid encounters as necessary.</p>
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
                <h4>{{ site.data.spell.sop }} (SoP)</h4>
                <p markdown="1">A highly complex talent, that adds spell interactions to {{ site.data.spell.es }}. You determine which effect to trigger by which spell you cast next after {{ site.data.spell.es }}.</p>
                <ul>
                    <li>{{ site.data.spell.fs }} - spreads {{ site.data.spell.fs }} to an additional target within 8yards (prefers targets with no {{ site.data.spell.fs }} before the target with the lowest duration remaining in range).</li>
                    <li>{{ site.data.spell.lb }} - overloads an additional 1-3 times. The chances are: 80% to get 1, 18% to get 2, and 2% to get 3 additional Overloads. These Overloads happen in addition to the baseline Overload chance, allowing this {{ site.data.spell.lb }} to overload up to 4 times if you're very lucky.</li>
                    <li>{{ site.data.spell.lvb }} - reduces the remaining cooldown of {{ site.data.spell.fe }} / {{ site.data.spell.se }} by 6 seconds.</li>
                    <li>{{ site.data.spell.frs }} - root the target in place for 6 seconds. Damage doesn't break the root.</li>
                </ul>
                <hr><br/>
                <h4>{{ site.data.spell.pe }} (PE)</h4>
                <p markdown="1"> This changes your {{ site.data.spell.fe }}, {{ site.data.spell.ee }}, and {{ site.data.spell.se }} into pets you can control instead of simple fire-and-forget guardians. The effects of {{ site.data.spell.pe }} are listed for each elemental below:</p>
                <ul>
                    <li>{{ site.data.spell.fe }} - gains {{ site.data.spell.immolate }} and {{ site.data.spell.meteor }}; a DoT and AOE attack with short cooldowns.</li>
                    <li>{{ site.data.spell.ee }} - gains {{ site.data.spell.harden_skin }}, a damage reduction cooldown that grants both the Shaman and the {{ site.data.spell.ee }} a 40% damage reduction buff for 10 seconds. Despite this being on a one minute cooldown, it is effectively a 5 minute cooldown as the {{ site.data.spell.ee }} can only cast it once in its lifetime. Also gains {{ site.data.spell.pulverize }}, a decent single target stun on a long CD -- usable twice in the {{ site.data.spell.ee }}'s lifetime. Lastly, gains {{ site.data.spell.angered_earth }}, a toggleable AOE taunt. This will not cause the elemental to get aggro on bosses, but it will generally work on trash or enemies summoned by bosses. While this can be incredibly useful at times, beware of accidentally misplacing enemies during an encounter.</li>
                    <li>{{ site.data.spell.se }} - gains {{ site.data.spell.tempest }} a long CD AoE burst cooldown and will retain {{ site.data.spell.call_lightning }} from its non primal form. {{ site.data.spell.call_lightning }} does empower {{ site.data.spell.tempest }}, dealing significant damage.</li>
                </ul>
                <hr><br/>
                <h4>{{ site.data.spell.if }} (IF)</h4>
                <p markdown="1">This is to be used on cooldown assuming you can cast all four empowered {{ site.data.spell.frs }}s. {{ site.data.spell.if }} empowered {{ site.data.spell.frs }} generate Maelstrom. This gives you more liberty in when you can use {{ site.data.spell.if }} charges, potentially for brief moments in the 15 second buff window where you will move for a few GCDs.</p>
                <hr><br/>
                <p markdown="1">**Recommendation:** {{ site.data.spell.if }} in combination with {{ site.data.spell.mote }} and {{ site.data.spell.echo }} is the Standard choice versus one target. Alternatively {{ site.data.spell.pe }} can be used as an easier version of the Standard build or if AoE is expected. {{ site.data.spell.sop }} has found a use in 9.2, with an active {{ site.data.item.t28_2 }} you may find it sims equal to or higher than the alternatives with {{ site.data.expansion_feature.sl.legendary.wlr }} equipped, this is because the {{ site.data.item.t28_2 }} increases the value of {{ site.data.spell.fe }} uptime significantly due to the increased {{ site.data.spell.lvb }} damage and {{ site.data.spell.lvs }} procs. Using the {{ site.data.spell.sop }} buff on {{ site.data.spell.lvb }} is very straightforward with {{ site.data.expansion_feature.sl.legendary.wlr }} equipped, however buffing {{ site.data.spell.lb }} with {{ site.data.spell.sk }} buff active is also good. Note: {{ site.data.spell.sop }} is no longer good when {{ site.data.item.t28_4 }} or Double Legendary are equipped.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="L50">
            <h4 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#L50-collapse" aria-expanded="false" aria-controls="L50-collapse">
                <b>Level 50 talents</b>
            </button></h4>
        </div>
        <div id="L50-collapse" class="collapse" aria-labelledby="L50" data-parent="#accordion">
            <div class="card-body">
                <h4>{{ site.data.spell.up }} (UP)</h4>
                <p markdown="1">An interesting buff that creates some *swing* in the spec, a tangible speeding up and slowing down of casts provided you're lucky with {{ site.data.spell.mastery }} procs. This is especially noticeable in AOE, where you can regularly get in excess of 10 stacks for a total of 20%+ haste for a few seconds. Regardless of its obvious dependency on our {{ site.data.spell.mastery }}, this talent works better with a lot of Haste in addition to providing more of its potential value when you aren't forced to move often.</p>
                <hr><br/>
                <h4>{{ site.data.spell.sk }} (SK)</h4>
                <p markdown="1">This ability buffs your next two {{ site.data.spell.lb }} and {{ site.data.spell.cl }}. If you decide to use {{ site.data.spell.lb }}, its damage is buffed. {{ site.data.spell.sk }} forces {{ site.data.spell.lb }} and {{ site.data.spell.cl }} to trigger their baseline Overloads. This means, that {{ site.data.spell.lb }} will be forced to overload once and {{ site.data.spell.cl }} overloads on each target hit.</p>
                <hr><br/>
                <h4>{{ site.data.spell.asc }} (Asc)</h4>
                <p markdown="1">An additional cooldown that refreshes all active {{ site.data.spell.fs }} to 18 seconds, immediately fires {{ site.data.spell.lvb }} at all targets with {{ site.data.spell.fs }}, removes the cooldown on {{ site.data.spell.lvb }}, and increases {{ site.data.spell.lvb }} damage by your Critical Strike chance. Additionally your {{ site.data.spell.cl }} gets replaced by {{ site.data.spell.lvbm }}. You should adjust your casts during {{ site.data.spell.asc }} as per the <a href="priority_list.html">priority list</a> page.</p>
                <hr><br/>
                <p markdown="1">**Recommendation:** {{ site.data.spell.sk }} for the majority of situations. {{ site.data.spell.asc }} offers some strong 15 second burst but can't compete in terms of mobility and versatility. {{ site.data.spell.up }} is typically considered weak. {{ site.data.spell.sk }} will still remain the safe default option, but there is definite potential for {{ site.data.spell.asc }} to be considered depending on Single Target fight timers.</p>
            </div>
        </div>
    </div>
</div>
<br/><br/>

### Notable talent synergies

Please note that this list will only include talent synergies with easy to explain, intuitive reasoning behind them. There may exist some mild synergies not in this list, but we have chosen to not write about them here. Many factors affect which talents benefit others, so we have narrowed it down to synergies with direct impacts on gameplay.

#### Master of the Elements and Icefury

The first talent synergy we'll discuss is that of {{ site.data.spell.mote }} and {{ site.data.spell.if }}. The connection here is easy to understand; an increased frequency of heavy hitters like the {{ site.data.spell.if }} empowered {{ site.data.spell.frs }}s allows more worth from {{ site.data.spell.mote }} buffs.

#### Echo of the Elements and Master of the Elements

While {{ site.data.spell.echo }} essentially increases the frequency of {{ site.data.spell.lvb }} {{ site.data.spell.mote }} profits from that by allowing us to buff more casts.

#### Storm Elemental and Primal Elementalist

These two talents have a direct "synergy" in that taking them together gets you access to an additional ability for {{ site.data.spell.se }} that synergizes very well with it's default abilities. As per the talent rows above: {{ site.data.spell.se }} gains {{ site.data.spell.tempest }} a long CD AoE burst cooldown. When used with the buff from {{ site.data.spell.call_lightning }} this will deal significant damage.
