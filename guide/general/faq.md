---
layout: page
title: F.A.Q.
last_update: 2019-01-30 09:00:00
game_version: 8.1.0 Battle for Azeroth
toc: true
---

This page has the answers to some frequently asked questions for Elemental Shamans.

### Q: "Will Elemental be viable in <Exapansion name> <game version>?"

Firstly, no spec in the game is unviable. Certain specs may be favoured for certain bosses in a raid, but this is only relevant to the very highest end of raiding (ie, competing for world first). Elemental (and every other spec) will remain competitive for 99.9% of the playerbase.

### Q: "What Pots/Food/Flasks should I use?"

See the [Consumables]({{ site.baseurl }}{% link guide/general/consumables.md %}) section of the guide.

### Q: "How many targets should I cast Flame Shock on?"

See the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) section of the guide.

### Q: "When do I cast Chain Lightning?"

See the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) section of the guide.

### Q: "Does Earthquake stack?"

Yes, {{ site.data.spell.eq }} stacks and has no stack limit.

### Q: "When should I stop using Earth Shock and use Earthquake?"

In general, stop using {{ site.data.spell.es }} against two targets or more. But check out the [Priority List]({{ site.baseurl }}{% link guide/general/priority_list.md %}) page for more information.

### Q: "When is the best time to use Primal Fire Elemental's Meteor?"

*Note: This only applies when talented into* {{ site.data.talent.pe }}.

Since the cooldown of {{ site.data.spell.meteor }} is the same as the duration of Primal Fire Elemental, save it for a period of AOE within the Elemental's lifetime.  If there is no upcoming AOE, cast it immediately.  Make sure to bind it to a key. Check out the macro section of this page, if you need help with that.

### Q: "Is there a way to enable/disable Earth Elemental taunt without screwing up my autocast settings of the DPS Elemental?"

*Note: This only applies when talented into* {{ site.data.talent.pe }}.

Not that we're aware of. The Elementals' autocast settings are shared between the Elemental pets. If you deactivate or activate it on one button, the matching button of the other Elementals will share that setting. We hope, that this will be changed.

### Q: "Do I use Lava Burst during Storm Elemental?"

No. During {{ site.data.talent.se }} uptime you want to only cast {{ site.data.spell.lb }} and {{ site.data.spell.es }}. Not even {{ site.data.spell.fs }}. But make sure to refresh {{ site.data.spell.fs }} before summoning your {{ site.data.talent.se }}, though.

### Q: "What are some useful Macros?"

This Macro allows you to place an {{ site.data.spell.eq }} at your cursor:
 ```
#showtooltip Earthquake
/cast [@cursor] Earthquake
 ```

This macro will deselect the boss before casting {{ site.data.spell.fe }}, allowing you to pre-cast it without pulling the boss:
 ```
#showtooltip Fire Elemental
/target [@player, nocombat]
/cast Fire Elemental
/targetlasttarget [nocombat]
 ```

This macro allows you to cast the Elementals Ability or Icefury, depending on your talents. The correct icon is shown once you've loaded the ability at least once after logging in.
```
#showtooltip
/cast [talent:6/3]Icefury;[talent:4/2,talent:6/2]Eye of the Storm;[notalent:4/2,talent:6/2]Meteor
```

This macro is a handy mouseover macro for {{ site.data.spell.fs }}.
```
#showtooltip Flame Shock
/cast [@mouseover,harm,nodead][] Flame Shock
```

This macro allows you to summon your {{ site.data.spell.ee }} and active its defensive CD via double click. If your {{ site.data.spell.fe }} is active {{ site.data.spell.ee }} will simply go on CD and nothing else will happen, so don't try this with your DPS Elemental being active.
```
#showtooltip
/cast Earth Elemental
/cast [talent:6/2] Harden Skin
```
