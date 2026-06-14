---
layout: page
title: "Raid Guides"
last_update: 14/06/2026
game_version: 12.0.7 Midnight
toc: true
big_article: true
---

<style>
.raid-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 4px;
    margin-top: 28px;
    margin-bottom: 60px;
}

.raid-card {
    display: block;
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    border-radius: 6px;
}

.raid-card:hover {
    border-color: #00a8ff;
    box-shadow: 0 0 0 3px #00a8ff inset;
    transform: none;
}

.raid-grid.tight {
    gap: 0px;
}

.raid-grid.tight .raid-card {
    border-radius: 0;
}

.raid-card img {
    width: 100%;
    height: 245px;
    object-fit: cover;
    transition: transform 0.4s ease;
}
.raid-card:hover img {
    transform: scale(1.04);
}

.raid-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 38px 20px 22px 20px;
    text-align: center;
    color: white;
    font-size: 1.45rem;
    font-weight: 600;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4) 55%, transparent);
}

h1[id^="12"] {
    color: #00d0ff;
    font-size: 2.1rem;
    font-weight: 700;
    margin-top: 45px;
    margin-bottom: 12px;
    padding-bottom: 16px;
    border-bottom: 3px solid #0066aa;
    letter-spacing: 0.5px;
}

.raid-grid .raid-card:only-child,
.raid-grid .raid-card:last-child:nth-child(odd) {
    grid-column: 1 / -1;
}
.raid-grid .raid-card:only-child img,
.raid-grid .raid-card:last-child:nth-child(odd) img {
    height: 305px;
}
</style>

# Patch 12.0.7
<div class="raid-grid">
<a class="raid-card" href="/guide/raids/sporefall">
    <img src="/assets/img/guide/raids/sporefall/sporefall.png" alt="Sporefall">
    <div class="raid-title">Sporefall</div>
</a>
</div>

# Patch 12.0.1
<div class="raid-grid tight">
<a class="raid-card" href="/guide/raids/dreamrift">
    <img src="/assets/img/guide/raids/dreamrift/dreamrift.png" alt="Dreamrift">
    <div class="raid-title">The Dreamrift</div>
</a>
<a class="raid-card" href="/guide/raids/voidspire">
    <img src="/assets/img/guide/raids/voidspire/voidspire.png" alt="Voidspire">
    <div class="raid-title">The Voidspire</div>
</a>
<a class="raid-card" href="/guide/raids/MQD">
    <img src="/assets/img/guide/raids/MQD/mqd.png" alt="March on Quel'Danas">
    <div class="raid-title">March on Quel'Danas</div>
</a>
</div>
