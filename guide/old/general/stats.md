---
title: Stats
layout: page
last_update: 2022-03-23 09:00:00
game_version: 9.2 Shadowlands
toc: true
---

Due to the fact that different Legendaries, Talents, and different Soulbinds prefer different stats, giving a "one fits all" sort of BiS gear list is a nearly impossible task.
For that reason we still recommend **simming yourself** and comparing specific pieces of gear to each other. The following Stat Ratios should give you a general idea what to go for and which items to target.

## Stat ratios

Below are our advised stat gearing strategies for talent combinations. We won’t release numbers for every single Talent, Legendary, Covenant, and Soulbind combination, but the general ratio and priority serve as a good all-round distribution. The introduced diminishing returns on secondary stats in Shadowlands does not affect the following stat ratios (we don't have enough stats yet).

Purpose | Crit | Haste | Mastery | Vers
--- | --- | --- | --- | ---
Raid / Single Target (Windspeaker with Tier) | 0.1 | 0.3 | 0.4 | 0.2
Hectic Add Cleave | 0.3 | 0.4 | 0.2 | 0.1
Dungeon / Mythic+ / AoE| 0.6 | 0.2 | 0.1 | 0.1

Expand the section below if you want more information on what these ratios are and/or how to use them:

<div class="accordion" id="accordion">
  <div class="card">
    <div class="card-header" id="statRatiosHeader">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#statRatiosCollapse" aria-expanded="false" aria-controls="statRatiosCollapse">
          Advanced Information
        </button>
      </h5>
    </div>
    <div id="statRatiosCollapse" class="collapse" aria-labelledby="statRatiosHeader" data-parent="#accordion">
      <div class="card-body" markdown="1">

#### What are stat ratios?

In Patch 7.1.5 we introduced the concept of stat ratios, a distribution of secondary stats in a ratio that will provide, fairly generally, the highest DPS. This metric differs from stat weights as it does not directly let you assess the value of an item, but instead serves as a tool for long term gearing strategy.

![chart example image]({{ "assets/img/guide/chart_example.PNG" | absolute_url }})

The above figure shows a rough example of a stat ratio — it’s a relationship between the four secondary stats, but not the inherent value of these stats. This doesn’t simply say Critical Strike is the best stat since there’s more of it, but that this particular distribution of secondaries is best, so you should do your best at balancing stats accordingly. When we release stat ratios, we give them as a simple ‘algebraic equation’ but it’s much more digestible with a visualization like the ones above and below.

#### How do I 'use' these stat ratios?

First and foremost: you cannot put these into Pawn, ratios should never be considered compatible with this addon. We saw a number of people misusing the ratios as pseudo Pawn strings, so we’re trying our best to educate our readers on proper usage with this page. The most important concept of stat ratios is that you’re comparing your secondary stat levels to the highest in each ratio. In the above single target ratio, you want your highest stat to be Haste, taking up roughly 50% of your stat budget. From here, you want your Vers rating to be roughly 30% of your secondary rating, and Critical Strike and Mastery rating to account for about 10% each. This means that if you had a secondary stat budget of 1000, you would want 500 haste, 300 vers, 100 crit and 100 mastery.

Do note that using these ratios should be a long term strategy, as they aren’t as easily used for single item comparisons. This is where we stress the value of simming yourself; there are plenty of guides on how to do it, and [Raidbots](https://raidbots.com/) has an excellent interface for this. Simming yourself will give you the most granular information, but opting to use stat ratios in favour of stat weights will result in a better overall gearset with much less variation. Without simming, the best way to determine if an item is an upgrade is to think about whether it will bring you closer to or further away from the stat ratio.

#### How are stat ratios calculated?
We make heavy use of [bloodytools](https://github.com/Bloodmallet/bloodytools), a SimulationCraft wrapper for batch simulations with a spread of different secondary stat distributions. This is used for almost every talent combination you can think of to find both a general trend in the highest DPS stat distributions and for talent comparisons. In essence, the program aids our research immensely by allowing rapid prototyping. We use a few constraints to make sure the distributions are realistically achievable. Bloodytools then generates a series of the top few best distributions for each talent/legendary setup we’ve asked for. We present either raw stat ratios (like for Windspeaker) or aggregate means for a best fit across a large number of talent/legendary setups (like the Dungeon / Mythic+ / AoE and General stat ratios).


  </div>
  </div>
  </div>
</div>
<br/>
