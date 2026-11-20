Piletirakenduse backend

Ehitad selle rakenduse ise, samm-sammult.

👉 Alusta siit: ALUSTA.md

Sammus 2 kirjutad selle README üle oma projekti kirjeldusega.

Event Management API

Event Management API on Node.js, TypeScripti ja Expressi abil loodav ürituste haldamise rakendus.

Käivitamine
Eeldused

- Node.js

- npm

Paigaldamine

    npm install

Serveri käivitamine

    npm run server

Käivita ja paranda

    npm run format
    npm run lint
    npm run typecheck

Haru nimed ja commit'ide kujud

    Eesliide    Millal
    feate:      uus võimalus
    fix:        vea parandus
    refactor:   koodi ümber korraldus ilma käituist muutmata
    chore:      seadistus, paketid
    docs:       README, dokumentatsioon
    test:       testid

ehita konteiner

    docker compose up -d

Võta konteiner maha

    docker compose down

kustuta konteiner

    docker compose down -v
