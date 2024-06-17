---
layout: post
title: "TWW: Hero Talent Overview"
#            dd/mm/yyyy
# last_update: 18/06/2024
excerpt: "The Weekly Weeping presents a Hero Talent Overview"
author: Bloodmallet
toc: false
big_article: false
---

Greetings,

`The Weekly Weeping` presents a Hero Talent Overview about their implementation state.

## Farseer

Name | 🔥DPS / ⚙️Utility | Single Target | AoE | ✅Working / 🐛Buggy / ❌NYI
--- | :---: | :---: | :---: | :---:
{{ site.data.spell.call_of_the_ancestor }} | 🔥 | ✅ | ❓[1] | 🐛[99]
{{ site.data.spell.latent_wisdom }} | 🔥 | ✅ | ❓[1] | 🐛[99]
{{ site.data.spell.ancient_fellowship }} | 🔥 | ✅ | ❓[1] | ✅
{{ site.data.spell.heed_my_call }} | 🔥 | ✅ | ❓[1] | ✅
{{ site.data.spell.routine_communication }} | 🔥 | ✅ | ❌ | ✅
{{ site.data.spell.elemental_reverb }} | 🔥 | ✅ | ❌ | ✅
{{ site.data.spell.offering_from_beyond }} | 🔥 | ❓[2] | ❓[2] | ✅
{{ site.data.spell.primordial_capacity }} | ⚙️ |  |  | ✅
{{ site.data.spell.spiritwalkers_momentum }} | ⚙️ |  |  | ✅
{{ site.data.spell.natural_harmony }} | ⚙️ |  |  | ✅
{{ site.data.spell.earthen_communion }} | ⚙️ |  |  | ✅
{{ site.data.spell.maelstrom_supremacy }} | 🔥 | ✅ | ✅ | ✅
{{ site.data.spell.final_calling }} | 🔥 | ✅ | ❌[3] | ✅
{{ site.data.spell.ancestral_swiftness }} | 🔥 | ✅ | ❓[1] | 🐛[99]

- [1] There are no incentives/supports to do AoE damage, and Ancestors Chain Lightnings hit 3 targets instead of 5 targets.
- [2] It does *something*. But weak elemental summons are weak.
- [3] Stats help in AoE, but because the whole tree doesn't support AoE this one falls short by association.
- [99] See [Bug Document](https://docs.google.com/document/d/e/2PACX-1vSbuYiea8yxCQMjUzUFptrY4cB6Hrw8fWVh1oRPy0_65FXjXMU-AkMrCT3fMZbq16drKUhGL93nKq5f/pub)

### Required Talents
- {{ site.data.spell.natures_swiftness }} class capstone talent
- {{ site.data.spell.primordial_wave }} basically a capstone spec talent & also build defining talent. If you invest into it you're very incentiviced to take all {{ site.data.spell.lvb }} talents.
- {{ site.data.spell.earth_shield}} or {{ site.data.spell.natures_guardian }}
- {{ site.data.spell.spiritwalkers_grace }}


## Stormbringer

Name | ⚡DPS / ⚙️Utility | Single Target | AoE | ✅Working / 🐛Buggy / ❌NYI
--- | :---: | :---: | :---: | :---:
{{ site.data.spell.tempest_spell }} (trigger`*` & spell) | ⚡ | ❓[4] | ✅[4] | 🐛[99]
{{ site.data.spell.unlimited_power }} | ⚡ | ✅ | ✅ | ✅
{{ site.data.spell.tempest_passive }} (passive) | ⚡ | ✅ | ✅ | 🐛[99]
{{ site.data.spell.shocking_grasp }} | ⚙️ |  |  | ✅
{{ site.data.spell.supercharge }} | ⚡ | ✅ | ✅ | 🐛[99]
{{ site.data.spell.storm_swell }} | ⚡ | ✅ | ❌ | 🐛[99]
{{ site.data.spell.arc_discharge }} | ⚡ | ❌ | ✅ | 🐛[99]
{{ site.data.spell.rolling_thunder }}`*` | ⚡ | ✅ | ✅ | ✅
{{ site.data.spell.voltaic_surge }} | ⚡ | ❌ | ✅ | 🐛[99]
{{ site.data.spell.conductive_energy }} | ⚡ |  |  | ❌
{{ site.data.spell.natures_protection }} | ⚙️ |  |  | ✅
{{ site.data.spell.surging_currents }} | ⚙️ |  |  | 🐛[99]
{{ site.data.spell.awakening_storms }}`*` | ⚡ | ❓[4] | ✅[4] | 🐛[99]

- [4] Spell does less damage than {{ site.data.spell.lb }} and has no interactions with any of our effects.
- [99] See [Bug Document](https://docs.google.com/document/d/e/2PACX-1vSbuYiea8yxCQMjUzUFptrY4cB6Hrw8fWVh1oRPy0_65FXjXMU-AkMrCT3fMZbq16drKUhGL93nKq5f/pub)

`*` requires a WeakAura to properly interact with it.

Yours sincerely,<br/>
Bloodmallet
