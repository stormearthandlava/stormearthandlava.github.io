---
layout: post
title: Open Letter from Elivrio
#            dd/mm/yyyy
last_update: 13/09/2023
excerpt: The state of Elemental Shaman
# author: Bloodmallet(EU)
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

In this image, we can see in blue the talents that are really strong for lightning builds and in red the talents for fire builds. What's immediately apparent is the separation between the two. Left side is Lightning, Right Side is Fire. This makes Hybrid build hard to create since you are going in opposite directions and can hardly move between the "columns" as I like to call them .

The Major issue comes from the top section that doesn't easily allow us to move around in the second part of the tree. Since the third row of the tree is mostly Utility based, it "forces" us to choose two paths out of three and stick with them all the way down to the third gate, essentially creating 3 "columns" in the spec Tree. The flexibility dies early and it's hard to grab everything you need for your builds to function properly.

<img src="/assets/img/blog/Spec_Tree_Fire_Vs_Lightning_Columns.png" alt="The Columns" class="center">

It's now worth mentioning that above the 20 points gate, there are 28 available nodes. Meaning you can get almost all the things in the columns you choose to engage into, including stuff you often don't really want. As an example, during S1, Fire builds talented into {{ site.data.talent.if }} and {{ site.data.talent.flux_melting }} only for pathing and the goal of that build was to never use them. This creates a frustration because we cannot access stuff we want without wasting points on utility or minor damage gain.

This frustration is further amplified by the power of the later third of the tree. Our Capstone Section contains most of the things we want but doesn't allow us to get most of it. With the second to Last Row containing all two pointer nodes, you can only pick 10 out of the 23 possible nodes, with 14 of them being average value two pointers. There's almost as many points below the second gate as above it, with half as much points to spend in it.

Being forced into Fire or Lightning Builds wouldn't be a major issue if they didn't have their own problems. Sadly, they do have their own problems.

<hr>

## The Woes of Fire

### The Power Creeping of Lava Burst

Let's start with biggest woe of them all. We have too much access to {{ site.data.spell.lvb }}s, turning the button into a mindless spam.

Right now, there are 3 ways to get {{ site.data.talent.lvs }}s:
- {{ site.data.talent.lvs }} (obviously), giving you random proc on {{ site.data.spell.fs }}'s ticks,
- {{ site.data.talent.wlr }}, giving you a proc after each spender you use,
- {{ site.data.talent.ps }}, giving you a proc every 3 seconds for 12 seconds after using {{ site.data.talent.pw }}.

On their own, they don't give an absurd amount of {{ site.data.spell.lvb }}s. The current 10.1 Lightning Build only uses {{ site.data.talent.wlr }} as an enabler and has on average 9 casts per minute in Single Target.

However, as soon as you combine two of them and factor in {{ site.data.talent.rolling_magma }}, you become a {{ site.data.spell.lvb }} Turret. You want to only cast {{ site.data.spell.lvb }} to reduce {{ site.data.talent.pw }} and get more {{ site.data.talent.lvs }} from {{ site.data.talent.ps }}. Casting {{ site.data.spell.lvb }} becomes a priority to feed the virtuous loop.

But it's not over! We can now add {{ site.data.talent.dre }} into this whole mess! Being able to proc {{ site.data.talent.asc }} means the priority of casting {{ site.data.spell.lvb }} goes even further beyond (pun intended), and you now want to be pressing it almost all the time if it doesn't make you waste resources. Being able to proc {{ site.data.talent.asc }} also helps cover "drought" period where you are low on {{ site.data.talent.lvs }} procs, so you can cast {{ site.data.spell.lvb }} a bit more. The 10.1 change to {{ site.data.talent.dre }} giving it an ever increasing chance to proc further incentivise us to almost always be casting {{ site.data.spell.lvb }}.

Now remember when I said *"if it doesn't make you waste resources"*? What if I told you the power creeping of {{ site.data.spell.lvb }} wasn't over, and that might influence that previous statement. With the newly added 4p, we gain more free {{ site.data.spell.lvb }} after {{ site.data.talent.pw }} and {{ site.data.spell.t31_4 }} further increases the possible damage of {{ site.data.spell.lvb }} thanks to the added burn.

So yeah. With the T31 2P casting and refreshing {{ site.data.talent.eb }}'s stat buff for us, we don't really need to spend anymore. {{ site.data.spell.lvb }} is the only thing you want to press outside of {{ site.data.talent.pw }}, {{ site.data.talent.fe }} and {{ site.data.spell.fs }}. You only spend when {{ site.data.spell.lvb }} isn't available. Side note but {{ site.data.talent.fe }} has lower priority than {{ site.data.spell.lvb }} in that build. You also pick {{ site.data.talent.sk }} and {{ site.data.talent.sop }} mostly for pathing and only use {{ site.data.spell.lb }} with both buffs actives and if you get bad {{ site.data.talent.lvs }}/{{ site.data.talent.dre }} RNG.

With the multiple way to get {{ site.data.spell.lvb }} feeding off of each other, it's no wonder that we end up with 40 manual Cast Per Minute of {{ site.data.spell.lvb }}. Over two thirds of our casts are {{ site.data.spell.lvb }} and close to 75% of our damage breakdown is tied to it as well. You waste close to 50% of the maelstrom generated by it and lose from 1.5% to 10% damage by spending, depending on the build you're running.

<hr>

### FS spreading

Enough talk about the Meatballs, let's discuss the other parts of fire build. Let's start with {{ site.data.spell.fs }} and spreading it.

Having a high count of {{ site.data.spell.fs }} active gives us more {{ site.data.talent.lvs }} procs, more stats from {{ site.data.talent.splinter }} and, during S1, more damage overall thanks to {{ site.data.talent.fe }}, {{ site.data.talent.sfd }} and {{ site.data.talent.flames_of_the_cauldron }}. In Season 3 however, {{ site.data.spell.fs }}'s damage becomes secondary and you mostly care about it for the duplicated {{ site.data.spell.lvb }} it will create. That's why the current S3 builds spec out of {{ site.data.talent.sfd }} and get {{ site.data.talent.wlr }} instead.

In any case, you want to get to 6 active {{ site.data.spell.fs }} as quickly as possible. To do that, you have three methods:
- Use {{ site.data.spell.fs }},
- Use {{ site.data.talent.pw }},
- Use {{ site.data.talent.lmt }}.

It's worth to note that all of these methods will benefit from {{ site.data.talent.sop }} and generate another {{ site.data.spell.fs }} smartly on hit. The problem lies in the Cooldown of those buttons. Even with {{ site.data.talent.flames_of_the_cauldron }}, {{ site.data.spell.fs }} has a 4.5s cd, preventing us from spreading it quickly. {{ site.data.talent.lmt }} has 1 minute cd and might not be ready from pack to pack in m+ or you will need to save it for an add wave on a boss. Lastly, {{ site.data.talent.pw }} is a false ally to spread {{ site.data.spell.fs }}. Since you want to benefit from {{ site.data.talent.splinter }} with as many stacks as possible, you want to cast it at the end of your spreading when you can ensure you will have 6 {{ site.data.spell.fs }} out before using {{ site.data.spell.lvb }}.

All of those sound like minor setbacks but they accumulate in a non negligible fashion, especially when Enhancement can easily and instantly spread {{ site.data.spell.fs }} thanks to [Molten Assault](https://www.wowhead.com/spell=334033/molten-assault?def=106863&rank=2). It just begs the question "why not us?". It's even more hard to swallow when we know we used to have a similar tool with {{ site.data.talent.path_of_flame }}.

Side note but even {{ site.data.talent.path_of_flame }} used to be way worse than [Molten Assault](https://www.wowhead.com/spell=334033/molten-assault?def=106863&rank=2). It spread the exact {{ site.data.spell.fs }} duration of the active one, when [Molten Assault](https://www.wowhead.com/spell=334033/molten-assault?def=106863&rank=2) instead applies fresh {{ site.data.spell.fs }} on all targets, even the primary one.

<hr>

### Single Target in AoE and AoE in Single Target

Let's now talk about the versatility of Fire build and their possibilities to do AoE while talented into ST and vice versa. Even if the this problem was decently fixed with the recent changes and the new tier set, it still exists.

The problem mostly came from two choice nodes:
- {{ site.data.talent.splinter }} VS {{ site.data.talent.ps }},
- {{ site.data.talent.wlr }} VS {{ site.data.talent.sfd }}.

Each of them actually really improved their respective damage profile and having to choose between them, without any sort of compensation in the other profile was pretty damning.

Before the recent change, {{ site.data.talent.splinter }} gave up to 60% haste in AoE, down to 10% in ST. On the other hand, {{ site.data.talent.ps }} only gives a few {{ site.data.talent.lvs }} which used to almost be entirely useless in AoE. But now, {{ site.data.talent.splinter }} will grant more haste in ST (24%) but less in AoE (44%). This is a really good change as it really boosts the ST of the builds using {{ site.data.talent.splinter }} without harming their AoE too much. {{ site.data.talent.ps }} becomes THE single target talent and {{ site.data.talent.splinter }} covers all of the other damage profiles.

Also, even if {{ site.data.talent.wlr }} and {{ site.data.talent.sfd }} saw no changes and are still fairly exclusive in their profile, this choice node also got better in Season 3 thanks to the new tier set. {{ site.data.spell.fs }}'s damage became secondary and {{ site.data.spell.lvb }} picked up the stage thanks to the amount of duplicated ones we can throw out on multiple targets. Also, since we spec out of {{ site.data.talent.ps }} in cleave/AoE situations, we are relying on random {{ site.data.talent.lvs }} procs. Getting {{ site.data.talent.wlr }} gives us a very reliable way to get {{ site.data.spell.lvb }} when we need it. So yeah, the choice node became better because {{ site.data.talent.sfd }} isn't really an option anymore.

Just for reference, the addition of the T31 Set and its much needed cleave gives us this chart:

Target | Build | Relative Gain from 2p | Relative Gain from 2p+4p
:---: | :---: | :---: | :---:
1 | T30 Lightning ST | 4.9% | 10%
3 | T30 Lightning ST | 4.3% | 5.9%
5 | T30 Lightning M+ | 5.9% | 9%
1 | T31 Fire ST | 20.6% | 47%
3 | T31 Fire ST | 38.8% | 90.5%
5 | T31 Fire ST | 19.7% | 108.2%
5 | T31 Hybrid M+ | 15.8% | 77.8%

The T30 Lightning builds were added for reference. Also the 1 and 3 targets builds use {{ site.data.spell.lvb }} in priority over any other spell.

In my opinion, You get such numbers when the tier set fixes problems that are very bad and omnipresent when it's not there. It could be a good idea to consider incorporating some of the things done by the tier into talents when the next expansion starts rolling in.

<hr>

## The Woes of Lightning

### The buff rotation in Single Target

Lightning ST builds center around {{ site.data.spell.lb }} and empowering for the weak maelstrom builder spell all the way to be our main source of damage.
This is achieved via a combination of buffs and debuffs that you can stack on top of each other, making {{ site.data.spell.lb }} hit like a truck. Those auras are {{ site.data.talent.sop }}, {{ site.data.talent.sk }}, {{ site.data.talent.potm }} and {{ site.data.talent.e_shocks }}.

Among them, {{ site.data.talent.sk }} is probably the most predictable and fun to play around. It was decently annoying to play around the T30 2P since you couldn't control its proc, but {{ site.data.talent.sk }} as a cast is something that I find enjoyable to play around correctly. It requires resource planning and timing to make it work perfectly.

It's now worth to mention that every overloads generated by a {{ site.data.spell.lb }} will fully benefit from the buffs applied to the original cast. Meaning you want to pair {{ site.data.talent.sk }} with as many reliable overloads proc as possible. This makes {{ site.data.talent.sop }} a borderline required buff when using {{ site.data.talent.sk }}. With it, you add two guaranteed overloads on top of your next {{ site.data.spell.lb }}. Pairing {{ site.data.talent.sk }} with {{ site.data.talent.sop }} is a condition *Sine qua non* to do good DPS in lightning build. It's also worth to note that it's very easily to consume {{ site.data.talent.sop }} with another spell, losing a lot of potential damage in the process.

Similarly, any {{ site.data.talent.potm }} proc that happen before a {{ site.data.talent.sk }} window will add a lot of damage. Sadly, there's no real way to control {{ site.data.talent.potm }} and you can't wait for it to proc or you might lose a potential {{ site.data.talent.sk }} cast by delaying it.

Very differently, you also want to debuff your target with {{ site.data.talent.e_shocks }} to amplify your {{ site.data.spell.lb }}'s damage. And since {{ site.data.talent.e_shocks }} is a debuff and not a buff, it's possible for the damage amp to fall off while the overloads events are still being casted. This transforms {{ site.data.talent.frs }} into a spell you need to press every 9s to maintain the debuff on your target, which does turn off a lot of players.

Among those 4 auras, 3 of them need to be actively played around, and 1 among those 3 require permanent sustain. Combining them all together certainly isn't hard but gets more annoying because need to track more buffs than just the ones that enhance {{ site.data.spell.lb }}.

In fact, since you get {{ site.data.talent.sop }} by using {{ site.data.talent.eb }}, you also want to buff it whenever possible. That's where {{ site.data.talent.mote }} comes into play. {{ site.data.talent.mote }} cannot be used to buff {{ site.data.spell.lb }} since {{ site.data.talent.sop }} is a more valuable buff and you cannot get {{ site.data.talent.sop }} without consuming {{ site.data.talent.mote }}.

That's why{{ site.data.spell.lvb }} on its own isn't very good, but it's very valuable to cast it nonetheless to fish for {{ site.data.talent.potm }} procs. The best way to include it in the rotation is to use it to buff {{ site.data.talent.eb }} with {{ site.data.talent.mote }}. By getting free instant casts with {{ site.data.talent.wlr }} and holding {{ site.data.talent.lvs }} until your next {{ site.data.talent.eb }} cast, you maximise {{ site.data.talent.eb }}'s damage while efficiently fishing for {{ site.data.talent.potm }} procs. You can also guarantee that your {{ site.data.talent.potm }} will be used alongside {{ site.data.talent.sop }} each time.

I'm sorry did I lose you somewhere? Let me do a small recap then:
- You want {{ site.data.talent.e_shocks }} to be active on your target as much as possible,
- You want {{ site.data.spell.fs }} to be always be active on your target (for {{ site.data.spell.lvb }} crits and {{ site.data.talent.magma_chamber }} stacks),
- You never want to cast {{ site.data.spell.lvb }} except before {{ site.data.talent.eb }},
- You **always** want to cast {{ site.data.spell.lb }} when you are buffed by {{ site.data.talent.sop }}.
- You want to pool Maelstrom to prepare {{ site.data.talent.sk }} windows and get {{ site.data.talent.sop }} during them.

Sounds easy right? It's not that hard once the get the idea going and it's clear in your head. But it's also **very easy** to mess it up or to struggle to pick up the rotation. Trying to make everything work all at once without breaking it down into simple steps is a hassle, and even when mastered, it's common to make silly mistakes. You need to cast {{ site.data.spell.frs }} on average once every 7.8s to refresh {{ site.data.talent.e_shocks }}. You often need to sit on {{ site.data.talent.lvs }} for 7-8 seconds after getting it from {{ site.data.talent.wlr }}.

All of the auras I talked about in this section need to perfectly align with each other which makes it very easy to feel overwhelmed rapidly.

By the way, I didn't talk about {{ site.data.talent.lightning_rod }} at all. It's mostly a passive gain always active during important damage events since {{ site.data.talent.eb }} applies it to your target. But it's also a significant part of our damage. Omitting it made everything more simple.

<hr>

### Chain Lightning Quadratic Scaling

I'm not going to detail this section too much because Bloodmallet already did an excellent analysis [in this article](https://stormearthandlava.com/blog/2023/02/06/chain-lightning-woes.html). This post is 8 months old and still accurately explains why Quadratic scaling is both nice and bad for {{ site.data.spell.cl }}.

<hr>

## More broad Design issues

### Mastery and Critical Strike

Because of our spec's design, Mastery and Critical Strike are often mutually exclusive for Elemental Shaman.

Bloodmallet's article just above explains in depth why {{ site.data.spell.cl }} isn't very effective at utilizing {{ site.data.spell.overload }}. But it's also the case for most of our kit. {{ site.data.talent.lmt }}, {{ site.data.spell.frs }} and {{ site.data.spell.fs }} do not trigger with our mastery, nor do spenders without {{ site.data.talent.mwf }}. This means that any build that doesn't talent into {{ site.data.talent.mwf }} and heavely relies on those spells often ignores mastery. For example, it was the case of Wildfire builds during season 1.

If you count, mastery is effective for 3 spells in ST ({{ site.data.spell.lb }}, {{ site.data.spell.lvb }} and {{ site.data.talent.if }}), and a single one in AoE ({{ site.data.spell.cl }}). To make it work with our spenders, you have to invest 3 points in our capstone section which is already overloaded with things we really want to take.

Meanwhile, because of {{ site.data.talent.rolling_magma }}, any single Target build that relies on {{ site.data.talent.pw }} will heavily lean into mastery to further reduce its CD thanks to the additional {{ site.data.spell.lvb }} overloads.

Critical Strike is works almost in a mirror fashion. It is often not wanted by build centered around {{ site.data.spell.lvb }} since a guaranteed crit is baked into its effect. Unless you find a way to get into {{ site.data.talent.asc }}, Crit is completely useless for {{ site.data.spell.lvb }} builds.
And that's really annoying, mostly because of {{ site.data.spell.elemental_fury }} which you are forced to talent into in the first gate of our spec tree ! Meaning we actually scale really good with Crit when playing any other type of build.

### Spenders

One of the things that became more and more apparent as I wrote the previous sections is how underwhelming {{ site.data.talent.es }}, {{ site.data.spell.eq }} and to a lesser extend {{ site.data.spell.eb }} feel.

First, our spenders hit like wet noodles. Here are a few numbers (DPET = Damage per Execute Time):

Spell | DPET
:---: | :---:
{{ site.data.spell.es }} | 416
{{ site.data.talent.eb }} | 587
{{ site.data.talent.eb }} normalized to a 50 maelstrom cost |  391
{{ site.data.spell.fs }} | 410
{{ site.data.spell.lvb }} | 350
{{ site.data.spell.lb }} | 193

Of course, DPET is a very bad metric of actual damage contribution. For example, {{ site.data.talent.eb }} also gives a 6% stat buff and since it's more efficient at spending maelstrom than {{ site.data.spell.es}} is, it will also allow you to cast more efficiently in the same time frame. Still, this table shows that our spenders are almost equal to our builders, all things considered. We often think about just not pressing them. It is rarely the correct behavior, but it is correct in 10.2 builds currently. To me, that shows a major flaw in either their design or their tuning.

Second, I personally dislike the idea of dumping Maelstrom and spamming spenders just to avoid overcapping. In AoE builds, you are often in a situation where you quickly need to empty your maelstrom bar before filling it up again thanks to {{ site.data.talent.sk }} and {{ site.data.spell.cl }}. This leads to dumping 2 or 3 {{ site.data.spell.eq }} in quick succession, using {{ site.data.spell.cl }}, then dumping again before continuing the rotation.

Third, many people dislike the gameplay of {{ site.data.talent.eb }}. I personally enjoy it decently, I like having a big spell that crits for 450k every once in a while. But it's also true that the casted gameplay of {{ site.data.talent.eb }} compared to the freedom of movement that was {{ site.data.spell.es }} for many years can feel weird for long time Elemental Shaman players.

Lastly, many people dislike the gameplay of {{ site.data.talent.eogs }}. Again, I cannot say that I agree. I think it's mostly fine to alternate between your spenders. What I personally dislike are the different target count at which it becomes a gain. With {{ site.data.talent.eb }} and {{ site.data.talent.eogs }}, you alternate at 2+ targets and only {{ site.data.talent.eb }} in ST. I prefer having to always alternate, even in ST. It makes the spec passively cleave while also not creating different use cases.

<hr>

### Offensive CDs

Let's continue about the disappointing talk and move on to our offensive Cooldowns. {{ site.data.talent.se }} and {{ site.data.talent.fe }} are our primary offensive CD. They are the equivalent of Retribution's [Avenging Wrath](https://www.wowhead.com/spell=31884), Demonology's [Summon Demonic Tyrant](https://www.wowhead.com/spell=265187) or Balance's [Eclipse](https://www.wowhead.com/spell=79577), yet their power are massively underwhelming.

At the moment, they are mutually exclusive buttons on a 2min30 CD. They don't really interact with our gameplay or rotation, and passively deal around 3% of our damage. {{ site.data.talent.fe }} has the clear upside of making {{ site.data.spell.fs }} longer duration so we can focus on our rotation instead of {{ site.data.spell.fs }}'s Management. But as we've seen before, {{ site.data.spell.fs }} usually feels bad because its spreading isn't smooth. {{ site.data.talent.fe }} shines by making it feel less bad, but that doesn't really make it a good button all things considered.

In 10.2, we'll pick {{ site.data.talent.sop }} in a Fire build and pay close to no attention to it. Meaning that a lot of them will buff {{ site.data.spell.lvb }}, reducing {{ site.data.talent.fe }}'s cooldown. But even then, pressing {{ site.data.talent.fe }} currently has a lower priority than {{ site.data.spell.lvb }}.

The lack of power of our Elementals is also felt in our damage profile, which is very flat. The only "damage window" we have is tied to {{ site.data.talent.sk }}. But since it's a 1 minutes CD, it's not a big button either.

You might think that {{ site.data.talent.asc }} is Elemental's offensive CD, but if the Fire builds in season 1 taught me anything, it's that spamming one button just isn't fun. It might be a cool idea to imagine {{ site.data.talent.asc }} as a window where your builders aren't lightning based but lava based instead. I think that was the spell original's design.

But with the insane access to {{ site.data.spell.lvb }} we currently have, {{ site.data.talent.asc }} just becomes an afterthought that further fuels the one button gameplay. With our spenders feeling as weak as they feel, you just don't really want to press them during {{ site.data.talent.asc }}. If the spenders were buffed to let the gameplay be globally the same, but slightly altering the rotation and design to lava imbued spells, I think that would be neat.

But that could also end up creating a problematic situation with {{ site.data.talent.fb }} again. Currently, {{ site.data.talent.fb }} feels bad because it extends a CD that feels bad. But if {{ site.data.talent.asc }} was changed to be something else than just a single button mash, {{ site.data.talent.fb }} could have a very fulfilling gameplay tied to it. After all, extending a damage window by playing correctly is one of the most fun gameplay in wow. Extending it by mashing two buttons isn't.

I also would like to rapidly touch upon {{ site.data.talent.dre }} and it's design that again, further fuel the one button gameplay. Since it has an ever increasing chance to proc, you pressing something else than {{ site.data.spell.lvb }} decreases the chances to get a much needed proc. When compared to a controlled talent like [Sun King's Blessing](https://www.wowhead.com/spell=383886), it really pales. {{ site.data.talent.dre }} could be changed to proc after consuming a certain amount of {{ site.data.talent.lvs }}, making the player in control of their fate. You could potentially line the proc with an incoming {{ site.data.talent.sk }} to have insane burst with {{ site.data.spell.lvbm }}.

When combined, those 3 offensive CDs, {{ site.data.talent.fe }}/{{ site.data.talent.se }}, {{ site.data.talent.sk }} and {{ site.data.talent.asc }} don't really complement each other. They are just historical button that were added at one point because they were cool, didn't receive many updates and now feel thrown together for no real purposes. You don't really care if you get {{ site.data.talent.asc }} while the other are one CD, and vice versa. They don't really interact with our gameplay or with each other in any cool way, and that's really disappointing for me.

### Gameplay's Conclusion

In my opinion, one of the strongest point of Elemental shaman is the diversity of builds and playstyles. It truly is enjoyable for me to have a different gameplay from one season to the next, and that the gameplay can really change just by changing a few talent points.

But with Fire and Lightning each having their own design flaws, all the while considering the impossibility to really mix Lightning and Fire builds to complement each other, we just have to pick one and roll with it, as it is.

The various underwhelming aspects of the Core of the spec's design can also be pretty damning and feel unrewarding in many situations. Before 10.2, Elemental's damage profile was mostly flat and we had no real damage niche. With 10.2, spread cleave will be our forte, but will it stay after the patch is over?

The build diversity can also turn down many players that do not want to re-learn the spec every patch. I have seen way too many peoples ask on Discord "Are we still playing {{ site.data.talent.eb}}/{{ site.data.talent.if}}/Fire/Lightning/{{ site.data.talent.eogs}} this patch?", then never coming back to the spec for the whole patch because of a non-satisfying answer.

While I know that it's impossible to please everyone, I think a decent amount of work could be done to make the different parts of the spec more coherent as a whole, and give us some gameplay identity to go along our super cool elemental master identity.

<hr>

## Utility

Now that we've covered Elemental's gameplay and the many flaws it currently has, let's tackle its utility.

Shaman is known among the community as the utility beast. Whenever Shaman's utility get discussed, you always hear people say that we have so many tools for so many situations, and that their own class would be happy to bring them. Let's dive into our utility, we'll see what we can make of it.

### Raid Utility

Currently, there's no real reason for a guild to want an Elemental Shaman in their raid roster. Our 3 main utility in raid are {{ site.data.talent.wrt }}, {{ site.data.talent.ag }} and {{ site.data.talent.mana_spring }}.

Let's talk about {{ site.data.talent.wrt }} first. While it is nice to have, it doesn't hold a candle compared to {{ site.data.externals.stampeding_roar }}. Stampeding Roar, with the [Improved Stampeding Roar](https://www.wowhead.com/spell=288826/improved-stampeding-roar) talent, gives 20% more movement speed, has 1 minute CD and lasts longer. If your raid has two Druids, you essentially never need to press {{ site.data.talent.wrt }} and you will have a movement buff every time you need it. The small advantage that {{ site.data.talent.wrt }} holds over {{ site.data.externals.stampeding_roar }} is {{ site.data.talent.totemic_projection }}, allowing you to relocate it on your group during and after movement, extending its effect.

Second is {{ site.data.talent.ag }}, which is really strong paired with your CD. Problem is, as we said before, Elemental Shaman doesn't really have a huge CD to pair with {{ site.data.talent.ag }}. The best candidate to use with it is {{ site.data.talent.sk }}, but in Single target, it's not really anything major. It's also a CD that was recently nerfed for its power in dungeon, which was probably too good in that scenario, but leaves a bad aftertaste in raid. It's also worth mentioning that you don't control who it heals. This result in {{ site.data.talent.ag }} massively overhealing in most instances (from checking a few logs, it ranges from 40% to 75% overheal, usually around 50%).

Last is {{ site.data.talent.mana_spring }}. With the last 10.2 nerf, we now give 100 mana to 4 allies per {{ site.data.spell.lvb }}. From our early test, being in fire build, we average 40 {{ site.data.spell.lvb }} cast per minute. Which means {{ site.data.talent.mana_spring }} gives 4k mana to 4 allies in 1 minute. For reference, a Restoration Shaman's [Riptide](https://www.wowhead.com/spell=61295/riptide) costs 4k mana. We give, on average in a fire build, 1 cast per minute to each healer with {{ site.data.talent.mana_spring }}.

While all of this feels nice to have, nothing in this list feels mandatory in any way. You are just left on the bench looking at the raid buffs and raid CDs that the cool kids bring. Unless you are tuned to be the best damage in the raid, which is similar to playing the roulette every patch.

<hr>

### Dungeon utility

Let's talk about dungeon then! As said before, Shaman is one of THE utility class with their totems coverage. The biggest reasons Shamans are good in dungeon are:
1. Their Crowd Controls:
  - {{ site.data.talent.capacitor_totem }},
  - {{ site.data.talent.thundershock }} (and {{ site.data.talent.thunderstorm }}),
  - {{ site.data.talent.lightning_lasso }}.
2. Their off-healing and group defensive capabilities:
  - {{ site.data.talent.chain_heal }},
  - {{ site.data.talent.ag }},
  - {{ site.data.talent.ee }} which can supplement the tank long enough to save a pull.
  - {{ site.data.talent.hst }},
  - {{ site.data.talent.earth_shield }} on 2 persons,
  - {{ site.data.talent.stoneskin_totem }},
3. Their general very good/borderline required utility:
  - {{ site.data.spell.bl }},
  - {{ site.data.talent.purge }},
  - {{ site.data.talent.cleanse_spirit }}.
4. And their more situational utility which is always nice to have:
  - {{ site.data.talent.tremor_totem }},
  - {{ site.data.talent.pct }},
  - {{ site.data.spell.earthbind_totem }} or {{ site.data.talent.earthgrab_totem }},
  - {{ site.data.talent.wrt }}.

This list is really long, isn't it? Well, it just goes to show how good Shaman is in a dungeon environment. In a raid setting, you get 20 different player and classes, which all bring a bit of utility. Everything becomes redundant pretty quickly. But in a dungeon's setting where resource brought by each class can shine, Shaman is truly blinding.

It's still worth to note that not everything is blue in the sky, and there's still a lot of downsides to this list. Notably, Totems are for the most part of the GCD. Meaning that in higher keys, if your tank needs you to drop {{ site.data.talent.stoneskin_totem }} to survive a big incoming damage, you will lose a global. And that can happen once every 30s, which isn't a lot to save your tank but quickly becomes a burden on the player. Same cause, same effects for {{ site.data.talent.hst }} which can provide minor healing assistance to your group but you don't control the targets it heals, and it costs you time. I also don't know a single person that maintains {{ site.data.talent.earth_shield }} on an ally as Elemental. You apply it before the key then mostly refresh it during downtime, mostly on yourself, sometimes on your ally.

All in all, Shaman's utility is top notch in dungeon, but Elemental shares its utility with both Resto and Enhancement. With only 5 dungeon spots, if one of the other spec is better equipped this season, you will likely not be the most wanted.

<hr>

### The "useless" utility

Shaman is so good utility wise that some of its abilities are borderline useless. There are a few talents in the class tree that might have never been picked by any Shaman players. Some of the abilities on this list might even be unknown to some of them:
- {{ site.data.talent.creation_core }}: The counter part of this choice node, {{ site.data.talent.call_of_the_elements }} is just way better as most totems do not require many use in succession. In Elemental's case, we mostly want it for {{ site.data.talent.lmt }} and that's pretty much it.
- {{ site.data.talent.tranquil_air_totem }}: This is just useless. Never been talented once since Dragonflight started. Not used in PvE. Not used in PvP. I'm not sure anyone used this once since DF started.
- {{ site.data.talent.enfeeblement }}: It's almost never a pick when pitted against {{ site.data.talent.voodoo_mastery }}. Having a shorter CD on {{ site.data.talent.hex }} has uses in both PvP and PvE, adding a slow to it rarely ever matters.
- {{ site.data.talent.astral_bulwark }}: Sadly it is not good enough to be in contention with {{ site.data.talent.planes_traveler }}. It's really really rare that a 60% DR will save you and a 40% will not. And if you NEED the 60% to survive, other members of the raid will die before you do.
- {{ site.data.talent.earthgrab_totem }}: Even if it is not a bad utility totem and has very decent uses in a variety of cases, its place in tree really holds {{ site.data.talent.earthgrab_totem }} back. The fact that you have to spec out of {{ site.data.talent.wrt }} for it is just horrendous. A few memorable uses are the small adds on Mythic Raszageth, the Golems on Zskarn and to handle the Spiteful Affix.
- With it's current tuning, unless you're playing a full fire build that throws a lot of {{ site.data.spell.lvb }}, and even then it's mid, {{ site.data.talent.mana_spring }} stands out as really bad, giving around 1% mana per minute to 4 healer in range. Outside of a fire build, this is completely useless.
- {{ site.data.talent.lightning_lasso }}: In PvE, this is almost never used outside of dungeons. And even then, it's very niche. You would much rather go into melee and get off a quick {{ site.data.talent.thundershock }} to interrupt a target rather than channeling this.

Does that mean all of them are completely useless? No. Some of those definitively have their places but some other are really out of touch with modern wow and could be replaced or updated to better match modern gameplay.

<hr>

### Enhancement and Restoration

So Shaman's utility has ups and downs. It's really good in Dungeon and really underwhelming in raid. But this is a post that focuses on Elemental Shaman. The question I'm now asking is: Are other Shaman specs better equipped than us? Short answer, yes in both raid and dungeons. They bring all that Elemental has to offer and add an additional layer on top.

Let's talk about raid first. Enhancement brings {{ site.data.externals.wft }}, a high value party buff, and restoration brings both {{ site.data.externals.slt }} and {{ site.data.externals.apt }}, two more than decent raid Cooldowns which were made even better by the recent nerf to the overall raid utility. While Restoration's case is an entire different matter as a healer and it could be argued that both {{ site.data.externals.slt }} and {{ site.data.externals.apt }} are underwhelming in their own rights, Enhancement's massive party buff makes us pale in comparison.

One of the recurring answer when talking about Elemental Shaman Utility and how to "fix" it compared to the other specs is "just give them {{ site.data.talent.skyfury_totem }}". In my opinion, that's a terrible take. Party wide buffs that need to be refreshed every 2 minutes are a thing of the past. Having to reposition your {{ site.data.externals.wft }} with each movement is not particularly fun gameplay. If Warrior's {{ site.data.externals.battle_shout }} was 2 minutes and needed to be reapplied during the encounter, as it is in Vanilla WoW, it would be weird and feel out of date. Again, in my opinion, {{ site.data.externals.wft }} and the plausible {{ site.data.talent.skyfury_totem }} are just as outdated and need an update to match with today's gameplay.

In dungeon, Enhancement Shaman benefit more from {{ site.data.talent.chain_heal }} and {{ site.data.talent.thundershock }} than us. Thanks to {{ site.data.talent.maelstrom_weapon }}, their {{ site.data.talent.chain_heal }} provide instant group-wide burst healing which is invaluable during healing checks, and they are already in a prime position to use {{ site.data.talent.thundershock }} since it requires to be in melee. They have also more Class tree point since they can skip {{ site.data.talent.swg }} and {{ site.data.talent.ns }} as they don't spend as much time casting, giving them even more utility flexibility.

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
- A major defensive CD, {{ site.data.talent.as }},
- A very situational defensive with {{ site.data.talent.ee }},
- A horrendous defensive with {{ site.data.talent.spirit_wolf }},
- A few sustain options with notably {{ site.data.talent.natures_guardian }} and {{ site.data.talent.earth_shield }}.

Looking at this list, the first thing that comes into view is the single reliable defensive CD. {{ site.data.talent.as }} is really strong and you will almost never die when it's active. Problem is, what do you do once you used it.

In Mythic Sarkareth P1, there are two massive damage events that occur around 0:50 and at 1:35. Not having a defensive for each of them will often result in you dying during progression. As a Shaman, how do you achieve that? If you don't have a priest using {{ site.data.externals.symbol_of_hope }}, you have no way to protect yourself outside of using your 5 min CD {{ site.data.talent.ee }}, turning into {{ site.data.spell.ghost_wolf }} 4 seconds in advance and wait while doing nothing, or ask for an external.

During Sarkareth progression, P2 didn't have many threats, meaning I ended up using {{ site.data.talent.ee }} during P1 to cover both damage events. But some fight (Echo of Neltharion comes to mind) will have huge damage event every 40s during the whole fight. Shaman does not have enough tools to deal with that. It lacks a second reliable defensive CD.

Without a Defensive CD, Shaman can be decently tanky thanks to {{ site.data.talent.earth_shield }} which really stabilizes us. The only thing I don't understand is why {{ site.data.talent.earth_shield }} has stacks and needs to be re-applied during combat. I would either make it similar to Mage's barrier and make it a 30s buff that you can press when you need it, or a permanent buff on yourself. The charge system is, in my opinion, a relic of the past that hasn't been updated to modern gameplay. It might makes sense for Restoration Shaman to have to monitor their {{ site.data.talent.earth_shield }} but it makes no sense for Elemental to have to do it.

Also I don't know if you picked up on it earlier but I was a bit sarcastic concerning {{ site.data.talent.spirit_wolf }}. While the mobility portion of this talent feels great, the defensive part feels **AWFUL** to play. During S1, high key pushers had to prepare for some damage events by going into {{ site.data.spell.ghost_wolf }} 4 seconds in advance and just... sit there while waiting for the damage event to pass. And it happened multiple times per key too. This is an awful design and the Damage Reduction portion needs to be instant or just ditch it. This talents promotes idle gameplay and I truly hate it. Thankfully, this is mostly a non-issue in Season 2 thanks to Augmentation.

<hr>

## Conclusion

Elemental Shaman deserves more love. It has a sick lore behind. Most of us initially came to the spec because they thought that lightning was cool. It's animations, it's mobility, it's utility, it's design, what's not to love? I really enjoy this spec and I hope I helped you pick up the different problems the spec currently has.

To give a quick summary to people jumping to the end: Restrict {{ site.data.spell.lvb }} access, remove/rework/fuse a few of our buffs to avoid promoting a static gameplay, buff spenders, give us an offensive CD to play around, give us clear raid utility, throw out {{ site.data.externals.wft }} or rework it, and give us another defensive tool.

To all of you who read till the end, thank you so much. I'm pretty new to guide writing and putting all of my thoughts about the spec onto one letter was pretty hard. I hope I stayed coherent and easy to read throughout the whole article.

Thanks for your time,<br>
Elivrio.
