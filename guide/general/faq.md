---
layout: page
title: F.A.Q.
last_update: 29/03/2023
game_version: 10.0.7 Dragonflight
toc: true
big_article: false
---

This page has the answers to some frequently asked questions for Elemental Shamans.

### Q: "Will Elemental be viable in Dragonflight 10.0.7?"
* Firstly, no spec in the game is unviable. Certain specs may be favored for certain bosses in a raid, but this is only relevant to the very highest end of raiding (ie, competing for world first). Elemental (and every other spec) will remain competitive for 99.9% of the player base.

### Q: "What do all these abbreviations mean? I can't understand other Elemental Shaman!"
* It can be tough trying to learn all of them at once but there is a handy resource to help you! [Elemental Abbreviations]({{ site.baseurl }}{% link blog/_posts/2023-01-23-ele101.md %}).

### Q: "What does {{ site.data.talent.fol }} actually reduce?"
* For a complete list, see [Flash of Lightning]({{ site.baseurl }}{%link blog/_posts/2023-01-23-fol.md %}).

### Q: "Is there a point where I don't cast {{site.data.spell.es}} with {{site.data.talent.eogs}} talented?"
* **No**, unless you have {{ site.data.talent.eb }} talented this part of the rotation remains the same as Shadowlands: always alternate!

### Q: "Okay, so what about {{ site.data.talent.eb }} and/or {{ site.data.talent.eogs }} then?!"
* **Yes**, these talent choices do impact your spender use
   - If you have taken {{ site.data.talent.eb }} and *not* {{ site.data.talent.eogs }} then you will use {{ site.data.talent.eb }} instead of {{ site.data.spell.eq }} until 4 targets are present.
   - If you have taken {{ site.data.talent.eb }} *and* {{ site.data.talent.eogs }} then you will ignore {{ site.data.talent.eogs }}'s effect until 2 targets are present.

### Q: "What Pots/Food/Phials should I use?"
* See the [Consumables]({{ site.baseurl }}{% link guide/general/consumables.md %}) section of the guide.

### Q: "How many targets should I cast {{ site.data.spell.fs }} on?"
* See the Priority List for each build in the [Build]({{ site.baseurl }}{% link guide/general/builds.md %}) section of the guide.

### Q: "When do I cast {{ site.data.spell.cl }}?"
* {{ site.data.spell.cl }} replaces {{ site.data.spell.lb }} as a filler from 2 or more targets.

### Q: "What about with {{ site.data.talent.sk }}?"
* With {{ site.data.talent.sop }} talented:
  - 1-2 targets = {{ site.data.spell.lb }} with {{ site.data.talent.sop }} buff active.
  - 3-5 targets = {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} with {{ site.data.talent.mote }} buff active.
  - 6+ targets = {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} with {{ site.data.talent.sop }} buff active.
* Without {{ site.data.talent.sop }}:
  - 1 target = {{ site.data.spell.lb }} with {{ site.data.talent.mote }} buff active.
  - 2+ targets {{ site.data.spell.cl }} or {{ site.data.spell.lvbm }} with {{ site.data.talent.mote }} buff active.

### Q: "Does {{ site.data.spell.eq }} stack?"
* Yes, {{ site.data.spell.eq }} stacks and has no stack limit. Also Haste doesn't affect its tick rate.

### Q: "When should I stop using {{ site.data.spell.es }} and use {{ site.data.spell.eq }}?"
* In general, stop using {{ site.data.spell.es }} against two targets or more. But check out the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) page for more information.

### Q: "When is the best time to use Primal Fire Elemental's {{ site.data.spell.meteor }} and Primal Storm Elemental's {{ site.data.spell.tempest }}?"
* When they would hit the most targets. For {{ site.data.spell.tempest }} specifically, you need to ensure it is also fully buffed by {{ site.data.spell.call_lightning }}.  
*Note: This only applies when talented into {{ site.data.talent.pe }}. Both abilities can be macro'd. See useful macros further down.*

### Q: "Is there a way to enable/disable {{ site.data.talent.ee }} taunt without screwing up my autocast settings of the DPS Elemental?"
* Not that we're aware of. The Elementals' autocast settings are shared between the Elemental pets. If you deactivate or activate it on one button, the matching button of the other Elementals will share that setting. We hope that this will be changed.  
*Note: This only applies when talented into {{ site.data.talent.pe }}.*

### Q: "Do I use {{ site.data.spell.lvb }} during {{ site.data.talent.se }}?"
* {{ site.data.talent.se }} does not alter the rotation for the builds that use it during its duration, you will typically behave the same regardless of it being active.

### Q: "What is funnelling?"
* Funneling is the act of casting {{ site.data.spell.fs }} on multiple targets in order to generate {{ site.data.talent.lvs }} procs with the intention of increasing your damage on one target.

### Q: "Do you have any recommendation on how to sim and profiles to use while simming?"
* For a complete guide about Elemental's sim, see [this post]({{ site.baseurl }}{%link blog/_posts/2023-01-02-simming.md %}).

### Q: "What are some useful Macros?"
* See the [Macros]({{ site.baseurl }}{% link guide/general/macros.md %}) section of the guide.
