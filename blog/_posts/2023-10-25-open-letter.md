---
layout: post
title: Open Letter from Elivrio
#            dd/mm/yyyy
last_update: 31/10/2023
excerpt: The state of Elemental Shaman
# author: Elivrio
toc: true
big_article: true
---

Hello Shamans,

As a recent addition to the Earthshrine MVP and Mod team, I always wanted to create some sort of Open Letter that would summarize my different takes on the spec.
Also, as a fairly new Elemental Shaman who only picked up the spec in Season 4 of Shadowlands, I might see thing somewhat differently from my peers.

The goal of this post is by no mean to give solutions but rather to point out the different pain points that you currently encounter while playing Elemental Shaman.

<hr>

## Talent tree construction

### Class Tree

I will talk more in depth about Shaman's utility and its class tree later in this letter. I just wanted to point out that I **love** the class tree of Shamans. Mostly because it has almost no damage tied in it. It gives Shamans a huge flexibility in how they can spend their Class tree's points which I find truly enjoyable. If you look at most other Class tree, you notice that the points below the third gate are heavily tied to DPS or to Major defensive CDs. This removes most of their choices sadly. Once you arrive at 20 points in the class tree, the remaining 11 are more often than not locked by what your sim tells you and you lose the Class Tree's essence.

Whatever happens to Shaman in the future, please, don't bring player power into the Class tree.

<hr>

### Elemental Spec Tree, Pathing and Limitations

With the small side note about the class tree out of the way, let's talk about the Elemental Spec Tree.

<img src="/assets/img/blog/Spec_Tree_Fire_Vs_Lightning.png" alt="Lightning vs Fire in the Spec Tree" class="center">

To function properly, Lightning builds require most of the Blue Talents. Similarly, Fire Builds require the Red Talents. What's immediately apparent is the separation between the two. Left side is Lightning, Right Side is Fire. This makes Hybrid build hard to create since you are going in opposite directions and can hardly move between the "columns" as I like to call them .

The Major issue comes from the top section that doesn't easily allow us to move around in the second part of the tree. Since the third row of the tree is mostly Utility based, it "forces" us to choose two paths out of three and stick with them all the way down to the third gate, essentially creating 3 "columns" in the spec Tree. The flexibility dies early and it's hard to grab everything you need for your builds to function properly.

<img src="/assets/img/blog/Spec_Tree_Fire_Vs_Lightning_Columns.png" alt="The Columns" class="center">

It's now worth mentioning that above the 20 points gate, there are 28 available nodes. Meaning you can get almost all the things in the columns you choose to engage into, including stuff you often don't really want. As an example, during S1, Fire builds talented into {{ site.data.spell.if }} and {{ site.data.spell.flux_melting }} only for pathing and the goal of that build was to never use them. This creates a frustration because we cannot access stuff we want without wasting points on utility or minor damage gain.

This is further amplified by the power of the later third of the tree. Our Capstone Section contains most of the things we want but doesn't allow us to get most of it. With the second to last row containing all two pointer nodes, you can only pick 10 out of the 23 possible nodes, with 14 of them being average value two pointers. There's almost as many points below the second gate as above it, with half as much points to spend in it.

Being forced into Fire or Lightning Builds wouldn't be a major issue if they didn't have their own problems. Sadly, they do have their own problems.

<hr>

## The Woes of Fire

### The Power Creeping of Lava Burst

Let's start with biggest woe of them all. We have too much access to {{ site.data.spell.lvb }}s, turning the button into a mindless spam.

Right now, there are 3 ways to get {{ site.data.spell.lvs }}s:
- {{ site.data.spell.lvs }} (obviously), giving you random proc on {{ site.data.spell.fs }}'s ticks,
- {{ site.data.spell.wlr }}, giving you a proc after each spender you use,
- {{ site.data.spell.ps }}, giving you a proc every 3 seconds for 12 seconds after using {{ site.data.spell.pw }}.

On their own, they don't give an absurd amount of {{ site.data.spell.lvb }}s. The current 10.1 Lightning Build only uses {{ site.data.spell.wlr }} as an enabler and has on average 9 casts per minute in Single Target.

However, as soon as you combine two of them and factor in {{ site.data.spell.rolling_magma }}, you become a {{ site.data.spell.lvb }} Turret. You want to only cast {{ site.data.spell.lvb }} to reduce {{ site.data.spell.pw }} and get more {{ site.data.spell.lvs }} from {{ site.data.spell.ps }}. Casting {{ site.data.spell.lvb }} becomes a priority to feed the virtuous loop.

But it's not over! We can now add {{ site.data.spell.dre }} into this whole mess! Being able to proc {{ site.data.spell.asc }} means the priority of casting {{ site.data.spell.lvb }} goes even further beyond (pun intended), and you now want to be pressing it almost all the time if it doesn't make you waste resources. Being able to proc {{ site.data.spell.asc }} also helps cover "drought" period where you are low on {{ site.data.spell.lvs }} procs, so you can cast {{ site.data.spell.lvb }} a bit more. The 10.1 change to {{ site.data.spell.dre }} giving it an ever increasing chance to proc further incentivise us to almost always be casting {{ site.data.spell.lvb }}.

Now remember when I said *"if it doesn't make you waste resources"*? What if I told you the power creeping of {{ site.data.spell.lvb }} wasn't over, and that might influence that previous statement. With the newly added 4p, we gain more free {{ site.data.spell.lvb }} after {{ site.data.spell.pw }} and {{ site.data.spell.t31_4 }} further increases the possible damage of {{ site.data.spell.lvb }} thanks to the added burn.

So yeah. With the T31 2P casting and refreshing {{ site.data.spell.eb }}'s stat buff for us, we don't really need to spend during {{ site.data.spell.asc }} anymore. {{ site.data.spell.lvb }} is the only thing you want to press in that case. Side note but {{ site.data.spell.fe }} has lower priority than {{ site.data.spell.lvb }} in that build.

With the multiple way to get {{ site.data.spell.lvb }} feeding off of each other, it's no wonder that we end up with 40 manual Cast Per Minute of {{ site.data.spell.lvb }}. Over two thirds of our casts are {{ site.data.spell.lvb }} and over 60% of our damage breakdown is tied to it as well. You waste close to 40% of the maelstrom generated and lose up to 5% damage by spending during {{ site.data.spell.asc }}, depending on the build you're running.

<hr>

### Flame Shock Management

Enough talk about the Meatballs, let's discuss the other parts of fire build. Let's start with {{ site.data.spell.fs }} and spreading it.

Having a high count of {{ site.data.spell.fs }} active gives us more {{ site.data.spell.lvs }} procs, more stats from {{ site.data.spell.splinter }} and, during S1, more damage overall thanks to {{ site.data.spell.fe }}, {{ site.data.spell.sfd }} and {{ site.data.spell.flames_of_the_cauldron }}. In Season 3 however, {{ site.data.spell.fs }}'s damage becomes secondary and you mostly care about it for the duplicated {{ site.data.spell.lvb }} it will create. That's why the current S3 builds spec out of {{ site.data.spell.sfd }} and get {{ site.data.spell.wlr }} instead.

In any case, you want to get to 6 active {{ site.data.spell.fs }} as quickly as possible. To do that, you have three methods:
- Use {{ site.data.spell.fs }},
- Use {{ site.data.spell.pw }},
- Use {{ site.data.spell.lmt }}.

It's worth to note that all of these methods will benefit from {{ site.data.spell.sop }} and generate another {{ site.data.spell.fs }} smartly on hit. The problem lies in the Cooldown of those buttons. Even with {{ site.data.spell.flames_of_the_cauldron }}, {{ site.data.spell.fs }} has a 4.5s cd, preventing us from spreading it quickly. {{ site.data.spell.lmt }} has 1 minute cd and might not be ready from pack to pack in m+ or you will need to save it for an add wave on a boss. Lastly, {{ site.data.spell.pw }} is a false ally to spread {{ site.data.spell.fs }}. Since you want to benefit from {{ site.data.spell.splinter }} with as many stacks as possible, you want to cast it at the end of your spreading when you can ensure you will have 6 {{ site.data.spell.fs }} out before using {{ site.data.spell.lvb }}.

All of those sound like minor setbacks but they accumulate in a non negligible fashion, especially when Enhancement can easily and instantly spread {{ site.data.spell.fs }} thanks to [Molten Assault](https://www.wowhead.com/spell=334033/molten-assault?def=106863&rank=2). It just begs the question "why not us?". It's even more hard to swallow when we know we used to have a similar tool with {{ site.data.spell.path_of_flame }}.

Side note but even {{ site.data.spell.path_of_flame }} used to be way worse than [Molten Assault](https://www.wowhead.com/spell=334033/molten-assault?def=106863&rank=2). It spread the exact {{ site.data.spell.fs }} duration of the active one, when [Molten Assault](https://www.wowhead.com/spell=334033/molten-assault?def=106863&rank=2) instead applies fresh {{ site.data.spell.fs }} on all targets, even the primary one.

<hr>

### Single Target or AoE

Let's now talk about the versatility of Fire build and their possibilities to do AoE while talented into ST and vice versa.

The problem mostly comes from two choice nodes:
- {{ site.data.spell.ps }} (ST) VS {{ site.data.spell.splinter }} (AoE),
- {{ site.data.spell.wlr }} (ST) VS {{ site.data.spell.sfd }} (AoE).

Each of them actually really improve their respective damage profile and having to choose between them, without any sort of compensation in the other profile, is really pretty damning.

Before the recent change, {{ site.data.spell.splinter }} gave up to 60% haste in AoE, down to 10% in ST. It will now, {{ site.data.spell.splinter }} will grant more haste in ST (20%) but less in AoE (40%). Meanwhile, {{ site.data.spell.ps }} gives a decent number of {{ site.data.spell.lvs }} which is almost be useless in AoE. This change will boosts the ST of the builds using {{ site.data.spell.splinter }} without harming their AoE too much. {{ site.data.spell.ps }} stays the single target talent while {{ site.data.spell.splinter }} covers all of the other damage profiles. This choice node is now way less of a problem than it used to be.

On the other hand, {{ site.data.spell.wlr }} and {{ site.data.spell.sfd }} are still an issue, only alleviated by the new tier set. Similarly to {{ site.data.spell.ps }}, {{ site.data.spell.wlr }} gives a decent number of {{ site.data.spell.lvs }} which is bad in AoE. On the flip side {{ site.data.spell.sfd }} scales quadratically as you add more target, which is real good at 6 targets and real bad with a single one.

Thanks to the new tier set, {{ site.data.spell.fs }}'s damage became secondary and {{ site.data.spell.lvb }} picked up the stage thanks to the amount of duplicated ones we can throw out on multiple targets. It became quite easy to skip {{ site.data.spell.sfd }} in favor of {{ site.data.spell.wlr }}. In fact, since we spec out of {{ site.data.spell.ps }} in AoE situations, we would be relying on random {{ site.data.spell.lvs }} procs if it weren't for {{ site.data.spell.wlr }}. Having a reliable way to get {{ site.data.spell.lvb }} when we need it is very important. So yeah, the choice node became "better" because {{ site.data.spell.sfd }} isn't really an option anymore.

It's very important to understand that the 31 tier set fixes problems that are bad and omnipresent when it's not there. It could be a good idea to consider incorporating some of the things done by the tier into talents when the next expansion starts rolling in.

<hr>

## Lightning's Struggles

### Aura Buffing to Victory

Lightning ST builds center around {{ site.data.spell.lb }} and empowering for the weak maelstrom builder spell all the way to be our main source of damage.
This is achieved via a combination of buffs and debuffs that you can stack on top of each other, making {{ site.data.spell.lb }} hit like a truck. Those auras are {{ site.data.spell.sop }}, {{ site.data.spell.sk }}, {{ site.data.spell.potm }} and {{ site.data.spell.e_shocks }}.

Among them, {{ site.data.spell.sk }} is probably the most predictable, fun to play around and rewarding to play around correctly. It requires resource planning and timing to make it work perfectly. It should still be noted that the T30 tier set giving us a free {{ site.data.spell.sk }} was a nightmare to play around and to track. There was no in game visual or mechanic to prepare for an incoming proc. It procced on a static timer that we had no access to and we had to rely on a Weakaura that just started a clock whenever it **thought** the tier had procced. You just had to pray it was correct. And Awful times.

Back to the subject at hand, I should now mention that every overloads generated by a {{ site.data.spell.lb }} will fully benefit from the buffs applied to the original cast. Meaning you want to pair {{ site.data.spell.sk }} with as many reliable overloads proc as possible to buff every single one of them. This makes {{ site.data.spell.sop }} a borderline required buff when using {{ site.data.spell.sk }}. With it, you add two guaranteed overloads on top of your next {{ site.data.spell.lb }}. Pairing {{ site.data.spell.sk }} with {{ site.data.spell.sop }} is a *condition sine qua non* to do good DPS in lightning build. It's also worth to note that it's very easily to consume {{ site.data.spell.sop }} with another spell, losing a lot of potential damage in the process.

Similarly, any {{ site.data.spell.potm }} proc that happen before a {{ site.data.spell.sk }} window will add a lot of damage. Sadly, there's no real way to reliably proc {{ site.data.spell.potm }}, and you can't wait for it to proc or you might lose a potential {{ site.data.spell.sk }} cast by delaying it.

Very differently, you also want to debuff your target with {{ site.data.spell.e_shocks }} to amplify your {{ site.data.spell.lb }}'s damage. And since {{ site.data.spell.e_shocks }} is a debuff and not a buff, it's possible for the damage amp to fall off while the overloads events are still being casted. This transforms {{ site.data.spell.frs }} into a spell you need to press every 9s to maintain the debuff on your target, which does turn off a lot of players.

Among those 4 auras, 3 of them need to be actively played around, and 1 among those 3 require permanent sustain. Combining them all together certainly isn't hard but gets more and more annoying. Especially since you have to play around another aura in that build.

{{ site.data.spell.lvb }} on its own isn't very good for Lightning build. But it's very valuable to cast it nonetheless to fish for {{ site.data.spell.potm }} procs. The best way to include it in the rotation is to use it to buff {{ site.data.spell.eb }} with {{ site.data.spell.mote }}. If we could, we would probably use it to further buff {{ site.data.spell.lb }} but you cannot get {{ site.data.spell.sop }} without consuming {{ site.data.spell.mote }}. So we have to be content with buffing {{ site.data.spell.eb }}.

To get reliable {{ site.data.spell.lvs }}, we use {{ site.data.spell.wlr }} and hold {{ site.data.spell.lvs }} until your next {{ site.data.spell.eb }} cast. This more often that not implies ignoring {{ site.data.spell.lvb }} for 5 to 8 seconds, which is very unintuitive and rebuts many long time players.

In any way, it's the best way to maximize {{ site.data.spell.eb }}'s damage while efficiently fishing for {{ site.data.spell.potm }} procs. You can also guarantee that your {{ site.data.spell.potm }} will always be used alongside {{ site.data.spell.sop }}.

All of this was a lot of information, let me do a small recap:
- You want {{ site.data.spell.e_shocks }} to be active on your target as much as possible,
- You want {{ site.data.spell.fs }} to be always be active on your target (for {{ site.data.spell.lvb }} crits and {{ site.data.spell.magma_chamber }} stacks),
- You never want to cast {{ site.data.spell.lvb }} except before {{ site.data.spell.eb }},
- You **always** want to cast {{ site.data.spell.lb }} when you are buffed by {{ site.data.spell.sop }}.
- You want to pool Maelstrom to prepare {{ site.data.spell.sk }} windows and get {{ site.data.spell.sop }} during them.

Sounds easy right? It's not that hard once the get the idea going and it's clear in your head. But it's also **very easy** to mess it up or to struggle to pick up the rotation. Trying to make everything work all at once without breaking it down into simple steps is a hassle, and even when mastered, it's common to make silly mistakes. All of the auras need to perfectly align with each other which makes it very easy to feel overwhelmed rapidly.

By the way, I didn't talk about {{ site.data.spell.lightning_rod }} at all. It's mostly a passive gain always active during important damage events since {{ site.data.spell.eb }} applies it to your target. But it's also a significant part of our damage. Omitting it made everything more simple.

<hr>

### Chain Lightning Quadratic Scaling

I'm not going to detail this section too much because Bloodmallet already did an excellent analysis [in this article](https://stormearthandlava.com/blog/2023/02/06/chain-lightning-woes.html). This post is 8 months old and still accurately explains why Quadratic scaling is both nice and bad for {{ site.data.spell.cl }}.

<hr>

## More broad Design issues

### Mastery and Critical Strike

Because of our spec's design, Mastery and Critical Strike are often mutually exclusive for Elemental Shaman.

Bloodmallet's article just above explains in depth why {{ site.data.spell.cl }} isn't very effective at benefiting from {{ site.data.spell.overload }}. But it's the case for most of our kit. {{ site.data.spell.lmt }}, {{ site.data.spell.frs }} and {{ site.data.spell.fs }} do not work with our mastery, nor do spenders without {{ site.data.spell.mwf }}. This means that any build that doesn't talent into {{ site.data.spell.mwf }} and heavily relies on those spells often ignores mastery. For example, it was the case of Wildfire builds during season 1.

If you count, mastery is effective for 3 spells in ST ({{ site.data.spell.lb }}, {{ site.data.spell.lvb }} and {{ site.data.spell.if }}), and a single one in AoE ({{ site.data.spell.cl }}). To make it work with our spenders, you have to invest 3 points in our capstone section which is already overloaded with things we really want to take.

Meanwhile, because of {{ site.data.spell.rolling_magma }}, any single Target build that relies on {{ site.data.spell.pw }} will heavily lean into mastery to further reduce its CD thanks to the additional {{ site.data.spell.lvb }} overloads.

Critical Strike is works almost in a mirror fashion. It is often not wanted by build centered around {{ site.data.spell.lvb }} since a guaranteed crit is baked into its effect. Unless you find a way to get into {{ site.data.spell.asc }}, Crit is completely useless for {{ site.data.spell.lvb }} builds.
And that's really annoying, mostly because of {{ site.data.spell.elemental_fury }} which you are forced to talent into in the first gate of our spec tree ! Meaning we actually scale really good with Crit when playing any other type of build.

<hr>

### Missing Cleave

In the previous fire section, I touched upon ST vs AoE without really talking about Cleave and low target situation. In his article, Bloodmallet also explains why {{ site.data.spell.cl }} feels really bad in low target situation. This was really apparent during Season 1, notably on Mythic Kurog Grimtotem and in Mythic Plus.

 Mythic Kurog Grimtotem was mostly a 2 target fight. You had the boss and a big elemental up for the majority of the fight. Elemental was one of the classes that did the least damage on that fight simply because we don't really gain anything from a second target. You gain a second {{ site.data.spell.fs }} target, more {{ site.data.spell.lvs }} procs, double the stacking speed of {{ site.data.spell.magma_chamber }}, and additional duplicated {{ site.data.spell.lvb }} from {{ site.data.spell.pw }}. That's it. In lightning builds you use {{ site.data.spell.cl }} instead of {{ site.data.spell.lb }} at two targets unless you have {{ site.data.spell.sop }}, but since {{ site.data.spell.cl }} scales quadratically, it sucks at 2/3 targets.

The only good spell at that target range is {{ site.data.spell.frs }} when it's buffed by {{ site.data.spell.if }} while talented into {{ site.data.spell.els }}. But since you want to use it as a debuff most of the time, you cannot spam it anyway and it's not even that good.

To be completely honest, I know the cleave is a problem for Elemental but I'm not sure how to describe the problem. Elemental simply doesn't really have cleave. If you look at the damage scaling of Elemental vs Enhancement in 10.1, it's just aberrant.
I know some classes have different damage profiles and you cannot be good at everything. But there's next to nothing to say about Elemental's cleave. It's just bad, especially at 2 targets.

<img src="/assets/img/blog/low_target_ele_enh.jpg" alt="1-3 targets damage Ele vs Enh">

However, with the new T31 tier set, we get an increase access to {{ site.data.spell.pw }} on top of additional duplicated {{ site.data.spell.lvb }} on targets affected by {{ site.data.spell.fs }}. This set alone provides a 50% damage increase on 3 targets. 50%. I think it's safe to say it should be reintroduced in some shape or form after this tier is over because it plugs a hole in our design. You can also change the multiple quadratic scaling spells to be more viable at low target count.

<hr>

### Spenders

One of the things that became more and more apparent as I wrote the previous sections is how underwhelming {{ site.data.spell.es }}, {{ site.data.spell.eq }} and to a lesser extend {{ site.data.spell.eb }} feel. Which is a shame for a builder/spender design, where the expected outcome would be that spenders should feel good to press.

Currently, our spenders hit like wet noodles. Here are a few numbers (DPET = Damage per Execute Time):

Spell | DPET
:---: | :---:
{{ site.data.spell.es }} | 416
{{ site.data.spell.eb }} | 587
{{ site.data.spell.eb }} normalized to a 50 maelstrom cost |  391
{{ site.data.spell.fs }} | 410
{{ site.data.spell.lvb }} | 350
{{ site.data.spell.lb }} | 193

Of course, DPET is a very bad metric of actual damage contribution. For example, {{ site.data.spell.eb }} also gives a 6% stat buff and since it's more efficient at spending maelstrom than {{ site.data.spell.es }} is, it will also allow you to cast more efficiently in the same time frame. Still, this table shows that our spenders are almost equal to our builders, all things considered. We often think about just not pressing them. It is rarely the correct behavior, but it is sometimes correct in 10.2 builds currently. To me, that shows a major flaw in either their design or their tuning.

Additionally, I personally dislike the idea of dumping Maelstrom and spamming spenders just to avoid overcapping. In AoE builds, you are often in a situation where you quickly need to empty your maelstrom bar before filling it up again thanks to {{ site.data.spell.sk }} and {{ site.data.spell.cl }}. This leads to dumping 2 or 3 {{ site.data.spell.eq }} in quick succession, using {{ site.data.spell.cl }}, then dumping again before continuing the rotation.

More generally, the usual complaints of the community often center around three things: {{ site.data.spell.eb }}, {{ site.data.spell.eq }} and {{ site.data.spell.eogs }}.

Firstly, the gameplay of {{ site.data.spell.eb }} is often disliked. I personally enjoy it. I like having a big spell that can crits for 450k every once in a while. But it's also true that the casted gameplay of {{ site.data.spell.eb }} compared to the freedom of movement that was {{ site.data.spell.es }} for many years can feel weird for long time Elemental Shaman players.

Secondly, {{ site.data.spell.eq }} is always a contention point in the community. It does low damage per tick and you need mobs to stay in it for the full duration. Since {{ site.data.spell.eq }} visual isn't great, tanks are prone to often kite out of it, essentially negating our AoE spender. The problem is further amplified with {{ site.data.spell.eogs }}. A tank kiting out of a buffed {{ site.data.spell.eq }} just feels even worse. In my opinion, there are a lot of ways to make it less painful, but I will list a few:
- Increase the width of the effect,
- Reduce the duration of the effect for the same amount of damage.
- Mostly frontload the damage of the spell, then do residual damage while in the effect (like 80/20 split),
- Transform {{ site.data.spell.eq }} into a debuff on a target that deals damage on mobs around it (of course the debuff would need to be stackable),
- Make a choice node between normal {{ site.data.spell.eq }} and a version that deals less damage but applies a debuff on all targets in range (that way you can choose to play for more damage if you know you have a good tank).

Lastly, many people also dislike {{ site.data.spell.eogs }}, finding it non-intuive and problematic. Alas, I cannot say that I agree. I think it's mostly fine to alternate between your spenders. What I personally dislike are the different target count at which it becomes a gain and that you can make a table to illustrate it.

{{ site.data.spell.eb }} | {{ site.data.spell.eogs }} | Expected gameplay
:---: | :---: | :---:
❌ No | ❌ No | Use {{ site.data.spell.es }} in single target and {{ site.data.spell.eq }} at 2 and more.
❌ No | ✅ Yes | Always alternate.
✅ Yes | ❌ No | Use {{ site.data.spell.eb }} up to 3 targets and {{ site.data.spell.eq }} at 4 and more.
✅ Yes | ✅ Yes | Use {{ site.data.spell.eb }} in single target and always alternate at 2 and more.

In my opinion, it would make much more sense if the correct play was always to alternate when talented into {{ site.data.spell.eogs }}, or switch to {{ site.data.spell.eq }} as soon as you get to two targets without it. It would also improve the spec's passive cleave, which as we just saw, really needs it.

If you think about it, our talents mostly buff builders, and it starts to muddy the waters of what the intended purpose of our spec is. Is Maelstrom only a resource we want to dump as a last resort? Is it something we want to play around? Are our spenders actually enablers thanks to {{ site.data.spell.sop }} that cost resources? At the moment, I cannot confidently say what the intention actually is.

<hr>

### Offensive CDs

Let's continue about the disappointing talk and move on to our offensive Cooldowns. {{ site.data.spell.se }} and {{ site.data.spell.fe }} are our primary offensive CD. They are the equivalent of Retribution's [Avenging Wrath](https://www.wowhead.com/spell=31884), Demonology's [Summon Demonic Tyrant](https://www.wowhead.com/spell=265187) or Balance's [Celestial Alignment](https://www.wowhead.com/spell=194223), yet their power are massively underwhelming.

At the moment, they are mutually exclusive buttons on a 2min30 CD. They don't really interact with our gameplay or rotation, and passively deal around 3% of our damage. {{ site.data.spell.fe }} has the clear upside of making {{ site.data.spell.fs }} longer duration so we can focus on our rotation instead of {{ site.data.spell.fs }}'s Management. But as we've seen before, {{ site.data.spell.fs }} usually feels bad because its spreading isn't smooth. {{ site.data.spell.fe }} shines by making it feel less bad, but that doesn't really make it a good button all things considered.

In 10.2, we'll pick {{ site.data.spell.sop }} in a Fire build and pay close to no attention to it. Meaning that a lot of them will buff {{ site.data.spell.lvb }}, reducing {{ site.data.spell.fe }}'s cooldown. But even then, pressing {{ site.data.spell.fe }} currently has a lower priority than {{ site.data.spell.lvb }}.

The lack of power of our Elementals is also felt in our damage profile, which is very flat. The only "damage window" we have is tied to {{ site.data.spell.sk }}. But since it's a 1 minutes CD, it's not a big button either.

You might think that {{ site.data.spell.asc }} is Elemental's offensive CD, but if the Fire builds in season 1 taught me anything, it's that spamming one button just isn't fun. It might be a cool idea to imagine {{ site.data.spell.asc }} as a window where your builders aren't lightning based but lava based instead. I think that was the spell original's design.

But with the insane access to {{ site.data.spell.lvb }} we currently have, {{ site.data.spell.asc }} just becomes an afterthought that further fuels the one button gameplay. With our spenders feeling as weak as they feel, you just don't really want to press them during {{ site.data.spell.asc }}. If the spenders were buffed to let the gameplay be globally the same, but slightly altering the rotation and design to lava imbued spells, I think that would be neat.

But that could also end up creating a problematic situation with {{ site.data.spell.fb }} again. Currently, {{ site.data.spell.fb }} feels bad because it extends a CD that feels bad. But if {{ site.data.spell.asc }} was changed to be something else than just a single button mash, {{ site.data.spell.fb }} could have a very fulfilling gameplay tied to it. After all, extending a damage window by playing correctly is one of the most fun gameplay in wow. Extending it by mashing two buttons isn't.

I also would like to rapidly touch upon {{ site.data.spell.dre }} and it's design that again, further fuel the one button gameplay. Since it has an ever increasing chance to proc, you pressing something else than {{ site.data.spell.lvb }} decreases the chances to get a much needed proc. When compared to a controlled talent like [Sun King's Blessing](https://www.wowhead.com/spell=383886), it really pales. {{ site.data.spell.dre }} could be changed to proc after consuming a certain amount of {{ site.data.spell.lvb }}, making the player in control of their fate. You could potentially line the proc with an incoming {{ site.data.spell.sk }} to have insane burst with {{ site.data.spell.lvbm }} for example.

When combined, those 3 offensive CDs, {{ site.data.spell.fe }}/{{ site.data.spell.se }}, {{ site.data.spell.sk }} and {{ site.data.spell.asc }} don't really complement each other. They are just historical button that were added at one point because they were cool, didn't receive many updates and now feel thrown together for no real purposes. You don't really care if you get {{ site.data.spell.asc }} while the other are one CD, and vice versa. They don't really interact with our gameplay or with each other in any cool way, and that's really disappointing for me.

<hr>

### Gameplay's Conclusion

In my opinion, one of the strongest point of Elemental shaman is the diversity of builds and playstyles. It truly is enjoyable for me to have a different gameplay from one season to the next, and that the gameplay can really change just by changing a few talent points.

But with Fire and Lightning each having their own design flaws, all the while considering the impossibility to really mix Lightning and Fire builds to complement each other, we just have to pick one and roll with it, as it is.

The various underwhelming aspects of the Core of the spec's design can also be pretty damning and feel unrewarding in many situations. Before 10.2, Elemental's damage profile was mostly flat and we had no real damage niche. With 10.2, spread cleave will be our forte, but will it stay after the patch is over?

The build diversity can also turn down many players that do not want to re-learn the spec every patch. I have seen way too many peoples ask on Discord "Are we still playing {{ site.data.spell.es }}/{{ site.data.spell.is }}/Fire/Lightning/{{ site.data.spell.eogs }} this patch?", then never coming back to the spec for the whole patch because of a non-satisfying answer.

While I know that it's impossible to please everyone, I think a decent amount of work could be done to make the different parts of the spec more coherent as a whole, and give us some gameplay identity to go along our super cool elemental master identity.

<hr>

## Utility

Now that we've covered Elemental's gameplay and the many flaws it currently has, let's tackle its utility.

Shaman is known among the community as the utility beast. Whenever Shaman's utility get discussed, you always hear people say that we have so many tools for so many situations, and that their own class would be happy to bring them. Let's dive into our utility, we'll see what we can make of it.

### Raid Utility

Currently, there's no real reason for a guild to want an Elemental Shaman in their raid roster. Our 3 main utility in raid are {{ site.data.spell.wrt }}, {{ site.data.spell.ag }} and {{ site.data.spell.mana_spring }}.

Let's talk about {{ site.data.spell.wrt }} first. While it is nice to have, it doesn't hold a candle compared to {{ site.data.externals.stampeding_roar }}. Stampeding Roar, with the [Improved Stampeding Roar](https://www.wowhead.com/spell=288826/improved-stampeding-roar) talent, gives 20% more movement speed, has 1 minute CD and lasts longer. If your raid has two Druids, you essentially never need to press {{ site.data.spell.wrt }} and you will have a movement buff every time you need it. The small advantage that {{ site.data.spell.wrt }} holds over {{ site.data.externals.stampeding_roar }} is {{ site.data.spell.totemic_projection }}, allowing you to relocate it on your group during and after movement, extending its effect.

Second is {{ site.data.spell.ag }}, which is really strong paired with your CD. Problem is, as we said before, Elemental Shaman doesn't really have a huge CD to pair with {{ site.data.spell.ag }}. The best candidate to use with it is {{ site.data.spell.sk }}, but in Single target, it's not really anything major. It's also a CD that was recently nerfed for its power in dungeon, which was probably too good in that scenario, but leaves a bad aftertaste in raid. It's also worth mentioning that you don't control who it heals. This result in {{ site.data.spell.ag }} massively overhealing in most instances (from checking a few logs, it ranges from 40% to 75% overheal, usually around 50%).

Last is {{ site.data.spell.mana_spring }}. With the last 10.2 nerf, we now give 100 mana to 4 allies per {{ site.data.spell.lvb }}. From our early test, being in fire build, we average 40 {{ site.data.spell.lvb }} cast per minute. Which means {{ site.data.spell.mana_spring }} gives 4k mana to 4 allies in 1 minute. For reference, a Restoration Shaman's [Riptide](https://www.wowhead.com/spell=61295/riptide) costs 4k mana. We give, on average in a fire build, 1 cast per minute to each healer with {{ site.data.spell.mana_spring }}.

While all of this feels nice to have, nothing in this list feels mandatory in any way. You are just left on the bench looking at the raid buffs and raid CDs that the cool kids bring. Unless you are tuned to be the best damage in the raid, which is similar to playing the roulette every patch.

<hr>

### Dungeon utility

Let's talk about dungeon then! As said before, Shaman is one of THE utility class with their totems coverage. The biggest reasons Shamans are good in dungeon are:
1. Their Crowd Controls:
  - {{ site.data.spell.capacitor_totem }},
  - {{ site.data.spell.thundershock }} (and {{ site.data.spell.thunderstorm }}),
  - {{ site.data.spell.lightning_lasso }}.
2. Their off-healing and group defensive capabilities:
  - {{ site.data.spell.chain_heal }},
  - {{ site.data.spell.ag }},
  - {{ site.data.spell.ee }} which can supplement the tank long enough to save a pull.
  - {{ site.data.spell.hst }},
  - {{ site.data.spell.earth_shield }} on 2 persons,
  - {{ site.data.spell.stoneskin_totem }},
3. Their general very good/borderline required utility:
  - {{ site.data.spell.bl }},
  - {{ site.data.spell.purge }},
  - {{ site.data.spell.cleanse_spirit }}.
4. And their more situational utility which is always nice to have:
  - {{ site.data.spell.tremor_totem }},
  - {{ site.data.spell.pct }},
  - {{ site.data.spell.earthbind_totem }} or {{ site.data.spell.earthgrab_totem }},
  - {{ site.data.spell.wrt }}.

This list is really long, isn't it? Well, it just goes to show how good Shaman is in a dungeon environment. In a raid setting, you get 20 different player and classes, which all bring a bit of utility. Everything becomes redundant pretty quickly. But in a dungeon's setting where resource brought by each class can shine, Shaman is truly blinding.

It's still worth to note that not everything is blue in the sky, and there's still a lot of downsides to this list. Notably, Totems are for the most part of the GCD. Meaning that in higher keys, if your tank needs you to drop {{ site.data.spell.stoneskin_totem }} to survive a big incoming damage, you will lose a global. And that can happen once every 30s, which isn't a lot to save your tank but quickly becomes a burden on the player. Same cause, same effects for {{ site.data.spell.hst }} which can provide minor healing assistance to your group but you don't control the targets it heals, and it costs you time. I also don't know a single person that maintains {{ site.data.spell.earth_shield }} on an ally as Elemental. You apply it before the key then mostly refresh it during downtime, mostly on yourself, sometimes on your ally.

All in all, Shaman's utility is top notch in dungeon, but Elemental shares its utility with both Resto and Enhancement. With only 5 dungeon spots, if one of the other spec is better equipped this season, you will likely not be the most wanted.

<hr>

### Player Power in Class Tree Suck

As I said in the introduction of this letter, I **love** the class tree of Shamans, its flexibility and its low number of damage nodes.

Here are the damage nodes in the Shaman Class Tree:
- {{ site.data.spell.fire_and_ice }},
- {{ site.data.spell.natures_fury }},
- {{ site.data.spell.frs }} with {{ site.data.spell.if }} talented in the spec tree. {{ site.data.spell.frs }} is recommended in all builds anyway just as a movement global.
- {{ site.data.spell.totemic_recall }} and {{ site.data.spell.call_of_the_elements }} with {{ site.data.spell.lmt }} talented in the spec tree.

To this list, I will add the recommended nodes in all content:
- {{ site.data.spell.as }} and {{ site.data.spell.planes_traveler }}, our defensive CD.
- {{ site.data.spell.swg }} and {{ site.data.spell.graceful_spirit }} for movement.
- {{ site.data.spell.gust_of_wind }} or {{ site.data.spell.spirit_walk }} for movement.
- {{ site.data.spell.ag }} for group healing support.
- {{ site.data.spell.brimming_with_life }}, {{ site.data.spell.natures_guardian }}, {{ site.data.spell.ancestral_defence }} and {{ site.data.spell.elemental_warding }} are good sustain passives.

<img src="/assets/img/blog/Class_Tree_Breakdown.png" alt="Class Tree Breakdown">

By grabbing all of the Red and Orange nodes, you only need one of the yellow nodes to go below the 20 gate. Once you've picked all the red and orange nodes, you have 22 nodes selected and can pick from yellow, blue or green nodes depending on the content you're doing. You can do so very easily, essentially getting everything you need.

The problem comes from the purple nodes. Going down the right side to pick {{ site.data.spell.totemic_recall }} and {{ site.data.spell.call_of_the_elements }} lock 4 more points in. While this isn't always a problem in raid, it quickly becomes one in m+ where you get stuck between the many great choices, and do not enough points to get them all. Skipping {{ site.data.spell.earth_shield }} will reduce your passive tankyness, skipping {{ site.data.spell.purge }} or {{ site.data.spell.cleanse_spirit }} is not an option in some dungeons, skipping {{ site.data.spell.capacitor_totem }} would be insane, and so on and so forth.

While I admit that some classes have it way worse than us, limiting our choices in the class tree whenever we pick {{ site.data.spell.lmt }} is quickly frustrating.

By the way, I find hilarious that some people advocate for {{ site.data.spell.asc }} or {{ site.data.spell.pw }} to be in the class tree all the while complaining that {{ site.data.spell.totemic_recall }} is hard to get in fire Builds. In my opinion, anything that can be tied to player power in the class tree should either be removed from it or made baseline. It just reduces the available utility and defensive nodes we can actually pick since "you would be a fool not to pick damage nodes".

<hr>

### The "useless" utility

Shaman is so good utility wise that some of its abilities are borderline useless. There are a few talents in the class tree that might have never been picked by any Shaman players. Some of the abilities on this list might even be unknown to some of them:
- {{ site.data.spell.creation_core }}: The counter part of this choice node, {{ site.data.spell.call_of_the_elements }} is just way better as most totems do not require many use in succession. In Elemental's case, we mostly want it for {{ site.data.spell.lmt }} and that's pretty much it.
- {{ site.data.spell.tranquil_air_totem }}: This is just useless. Never been talented once since Dragonflight started. Not used in PvE. Not used in PvP. I'm not sure anyone used this once since DF started.
- {{ site.data.spell.enfeeblement }}: It's almost never a pick when pitted against {{ site.data.spell.voodoo_mastery }}. Having a shorter CD on {{ site.data.spell.hex }} has uses in both PvP and PvE, adding a slow to it rarely ever matters.
- {{ site.data.spell.astral_bulwark }}: Sadly it is not good enough to be in contention with {{ site.data.spell.planes_traveler }}. It's really really rare that a 60% DR will save you and a 40% will not. And if you NEED the 60% to survive, other members of the raid will die before you do.
- {{ site.data.spell.earthgrab_totem }}: Even if it is not a bad utility totem and has very decent uses in a variety of cases, its place in tree really holds {{ site.data.spell.earthgrab_totem }} back. The fact that you have to spec out of {{ site.data.spell.wrt }} for it is just horrendous. A few memorable uses are the small adds on Mythic Raszageth, the Golems on Zskarn and to handle the Spiteful Affix.
- With it's current tuning, unless you're playing a full fire build that throws a lot of {{ site.data.spell.lvb }}, and even then it's mid, {{ site.data.spell.mana_spring }} stands out as really bad, giving around 1% mana per minute to 4 healer in range. Outside of a fire build, this is completely useless.
- {{ site.data.spell.lightning_lasso }}: In PvE, this is almost never used outside of dungeons. And even then, it's very niche. You would much rather go into melee and get off a quick {{ site.data.spell.thundershock }} to interrupt a target rather than channeling this.
- {{ site.data.spell.wind_shear }}: Yes. This is sometimes useless. More often than not even. In Aberrus, there's a kickable mechanic in 3 out of the 9 bosses. In 10.0, you could skip {{ site.data.spell.wind_shear }} easily but at some point {{ site.data.spell.ee }} was moved behind it. I was no idea why. This forces us into playing {{ site.data.spell.wind_shear }} all the time AND restrict access to the left side of the tree. If anything, moving {{ site.data.spell.ee }} back to its previous position would negate this problem.

Does that mean all of the abilities in this list are completely useless? Of course not. Some definitively have their places but while some others are either non-choices that we never think really think about or out of touch abilities that could be updated to better match modern gameplay.

<hr>

### Ankh of Reincarnation

On the topic of out of touch utility, let's talk about {{ site.data.spell.ankh }}. This is one of the most notorious spell of Shaman but I firmly believe its history is holding it back. Mechanically, it's similar to a Cheat Death. It negates a death. But it does so with many non-enjoyable flaws, and very few upsides.

First and foremost, it has a 17 minutes CD at best with 100% uptime on {{ site.data.spell.brimming_with_life }} and 30 minutes at worse. On a boss like Rashok, it's usually available once every 5 pulls at best. Because yes, it does not reset on raid pull. It's the longest combat CD of the game and one of the only spell with more than 3 minutes CD that doesn't reset on raid pull. It feels awkward to press in raid when close to a boss kill or close to a wipe. If you don't kill the boss, next pull you've wasted that valuable resource for a potential kill. You could not press it for a whole raid night because the pulls are close, but not close enough. There are some fight where you can cast {{ site.data.spell.bloodlust }} twice or even proc [Cauterize](https://www.wowhead.com/spell=86949) as a Mage two or even three times before {{ site.data.spell.ankh }} comes off CD from the previous pull.

Similarly, it does not reset when a m+ key starts. You might want to use {{ site.data.spell.ankh }} early, but it might be on CD from your last dungeon. The long CD often implies you get a singular use for most keys, and you still get the 5 sec penalty for a death. Meanwhile, Cheat Deaths don't inflict a penalty and can "die" 5 to 6 times more often in a single key.

And since you use {{ site.data.spell.ankh }} by actually dying and not by "cheating" death, you also lose your food buff, your raid buffs, your active DPS CDs if you had any, and so on and so forth. But it's not over! You also resurrect with 20% HP meaning you can easily die from any damage or lingering AoE under your corpse. This often means that you have to wait to use {{ site.data.spell.ankh }} until you can do it safely, losing even more uptime in the process.

Of course, huge overkill hits will pass through cheats death and kill the player anyway, while you can still {{ site.data.spell.ankh }} after those same hits. So technically you could cheese soak mechanics with {{ site.data.spell.ankh }}. But even then, those mechanics are sometimes designed with immunities or battle reses in mind. Sometimes you get a debuff that stays when revived, or you will need x amount of players to soak otherwise the boss will get a buff, etc.

All in all, {{ site.data.spell.ankh }} feels outdated. It's a bad version of a cheat death that is unreliable and often not available. I don't think bringing it up to speed or just making it reset on pull would make it overpower. The drawback of wasting active CDs and buffs is already a huge loss more often than not. You could even work around the possible cheese by disabling {{ site.data.spell.ankh }} if the overkill on the player was too large.

<hr>

### Enhancement and Restoration

So Shaman's utility has ups and downs. It's really good in Dungeon and really underwhelming in raid. But this is a post that focuses on Elemental Shaman. The question I'm now asking is: Are other Shaman specs better equipped than us? Short answer, yes in both raid and dungeons. They bring all that Elemental has to offer and add an additional layer on top.

Let's talk about raid first. Enhancement brings {{ site.data.externals.wft }}, a high value party buff, and restoration brings both {{ site.data.externals.slt }} and {{ site.data.externals.apt }}, two more than decent raid Cooldowns which were made even better by the recent nerf to the overall raid utility. While Restoration's case is an entire different matter as a healer and it could be argued that both {{ site.data.externals.slt }} and {{ site.data.externals.apt }} are underwhelming in their own rights, Enhancement's massive party buff makes us pale in comparison.

One of the recurring answer when talking about Elemental Shaman Utility and how to "fix" it compared to the other specs is "just give them {{ site.data.spell.skyfury_totem }}". In my opinion, that's a terrible take. Party wide buffs that need to be refreshed every 2 minutes are a thing of the past. Having to reposition your {{ site.data.externals.wft }} with each movement is not particularly fun gameplay. If Warrior's {{ site.data.externals.battle_shout }} was 2 minutes and needed to be reapplied during the encounter, as it is in Vanilla WoW, it would be weird and feel out of date. Again, in my opinion, {{ site.data.externals.wft }} and the plausible {{ site.data.spell.skyfury_totem }} are just as outdated and need an update to match with today's gameplay.

In dungeon, Enhancement Shaman benefit more from {{ site.data.spell.chain_heal }} and {{ site.data.spell.thundershock }} than us. Thanks to {{ site.data.spell.maelstrom_weapon }}, their {{ site.data.spell.chain_heal }} provide instant group-wide burst healing which is invaluable during healing checks, and they are already in a prime position to use {{ site.data.spell.thundershock }} since it requires to be in melee.

<hr>

### Utility's Conclusion

So why do you have an Elemental Shaman in your group? Mostly two reasons: either the person playing it is an Elemental Shaman enjoyer, or Elemental Shaman is tuned really high and does the most damage. The last time the second reason was true was in Crucible of Storms, in 8.1.5, more than 4 years ago.

To be clear, I don't want to make Elemental Shaman mandatory in every raid or dungeon group. It's about altering the community perception to a point where people don’t feel terrible for bringing one. Right now, I feel terrible to be an Elemental Shaman and my guild asked me multiple times If I was okay to reroll. Because we're are lacking good players and me switching would help fill up the raid buff requirement. There are multiple ways to alter community perception. The most recent example is the change to [Hunter's Mark](https://www.wowhead.com/spell=257284/hunters-mark). This simple damage gain from being your guild's hunter is all I ask for Elemental Shaman.

It's also worth mentioning that giving all Shamans a raid buff and leaving {{ site.data.externals.wft }} as it is will change nothing in the players' mindset. Guilds will want you to reroll to Enhancement to bring {{ site.data.externals.wft }} in addition to your raid buff. Why wouldn't you, it's a free raid wide gain.


<hr>

## Defensive CDs

Almost done but not quite! We still have to talk about Shaman's defensiveness. Tankyness is a mix of many things that I would classify as:
- How many defensive CDs do you have?
- How tanky are you with your defensive CDs?
- How tanky are you without your defensive CDs?
- Do you defensive CDs have a direct impact on your DPS?

Lets answer those questions in order. Shaman has the following defensive CDs:
- A major defensive CD, {{ site.data.spell.as }},
- A very situational defensive with {{ site.data.spell.ee }},
- A horrendous defensive with {{ site.data.spell.spirit_wolf }},
- A few sustain options with notably {{ site.data.spell.natures_guardian }} and {{ site.data.spell.earth_shield }}.

Looking at this list, the first thing that comes into view is the single reliable defensive CD. {{ site.data.spell.as }} is really strong and you will almost never die when it's active. Problem is, what do you do once you used it.

In Mythic Sarkareth P1, there are two massive damage events that occur around 0:50 and at 1:35. Not having a defensive for each of them will often result in you dying during progression. As a Shaman, how do you achieve that? If you don't have a priest using {{ site.data.externals.symbol_of_hope }}, you have no way to protect yourself outside of using your 5 min CD {{ site.data.spell.ee }}, turning into {{ site.data.spell.ghost_wolf }} 4 seconds in advance and wait while doing nothing, or ask for an external.

During Sarkareth progression, P2 didn't have many threats, meaning I ended up using {{ site.data.spell.ee }} during P1 to cover both damage events. But some fight (Echo of Neltharion comes to mind) will have huge damage event every 40s during the whole fight. Shaman does not have enough tools to deal with that. It lacks a second reliable defensive CD.

Without a Defensive CD, Shaman can be decently tanky thanks to {{ site.data.spell.earth_shield }} which really stabilizes us. The only thing I don't understand is why {{ site.data.spell.earth_shield }} has stacks and needs to be re-applied during combat. I would either make it similar to Mage's barrier and make it a 30s buff that you can press when you need it, or a permanent buff on yourself. The charge system is, in my opinion, a relic of the past that hasn't been updated to modern gameplay. It might makes sense for Restoration Shaman to have to monitor their {{ site.data.spell.earth_shield }} but it makes no sense for Elemental to have to do it.

It's also worth mentioning {{ site.data.spell.healing_surge }} and the sustain it provides if you put the cast time into it. Losing a few globals to top yourself can save you in high pressure moments such as Sarkareth's {{ site.data.raid.aberrus.glittering_surge }}. I'm still a bit sad that they reworked {{ site.data.spell.swirling_currents }}. During S1, you knew that you could drop {{ site.data.spell.hst }} to further enhance that hybrid healing. Trading reliable self-heal for a marginal increase on a raid healing was a very bad trade-off in my opinion.

Finally, I don't know if you picked up on it earlier but I was a bit sarcastic concerning {{ site.data.spell.spirit_wolf }}. While the mobility portion of this talent feels great, the defensive part feels **AWFUL** to play. During S1, high key pushers had to prepare for some damage events by going into {{ site.data.spell.ghost_wolf }} 4 seconds in advance and just... sit there while waiting for the damage event to pass. And it happened multiple times per key too. This is an awful design and the Damage Reduction portion needs either to be instant or just ditch it. While this is mostly a non-issue in Season 2 thanks to Augmentation, the simple fact that the correct play is sometimes to take your hands off the Keyboard for 4 seconds is terrible.

<hr>

## Conclusion

Elemental Shaman deserves more love. It has a sick lore behind it. Most of us initially came to the spec because we thought that lightning was cool. Its animations, its mobility, its utility, its design, what's not to love? I really enjoy this spec and I hope I helped you pick up the different problems the spec currently has.

To give a quick summary to people jumping to the end: Restrict {{ site.data.spell.lvb }} access, remove/rework/fuse a few of our buffs to avoid promoting a static gameplay, buff spenders, give us an offensive CD to play around, give use some form of cleave, give us clear raid utility, throw out {{ site.data.externals.wft }} or rework it, and give us another defensive tool.

To all of you who read till the end, thank you so much. I'm pretty new to guide writing and putting all of my thoughts about the spec onto one letter was pretty hard. I hope I stayed coherent and easy to read throughout the whole article.

Thanks for your time,<br>
Elivrio.
