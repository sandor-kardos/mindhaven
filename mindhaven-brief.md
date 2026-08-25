# Mindhaven — projekt brief (frissítve)

## Kiindulás

- A mindhaven.uk korábban Wix-en, majd WordPress-en futott; jelenleg is a WP fut élesben.
- Erika (a tulajdonos, MNCPS Acc. tanácsadó, Dalkeith/Edinburgh) nem akar saját maga tartalmat készíteni.
- Egy teljesen új, Next.js-alapú oldal épült fel egy külön projektmappában ("minhdaven v3"), amit még nem raktunk élesbe a mindhaven.uk domain alá.

## A weboldal-rebuild — elkészült, eldöntött dolgok

- **Stack**: Next.js (App Router, TypeScript, Tailwind), nincs CMS, nincs headless WP.
- **Pozicionálás**: eldőlt — **"ambiciózus szakemberek"**, nem szűk "executive/C-suite" keret. A teljes hibás "Executive Therapy" branding (logó, navigáció, footer, route-nevek, meta-adatok) vissza lett állítva az eredeti, tágabb copy-ra ("Transform Stress Into Success" / "What if you could thrive, not just survive?").
- **Árazás**: **Individual Session £85/50 perc**, **Growth Package 6x session £480 (£80/session)** — nincs külön "Executive Intake" tétel, azt kivettük.
- **Design**: világos téma, krém háttér, fenyőzöld (`#155D49`) és korall akcentek, Erika portréja lebegő animációval, EGY visszafogott "lélegző" ambient animáció (a többi, versengő animáció eltávolítva), `prefers-reduced-motion` támogatással.
- **FAQ**: 10 kérdés/válasz véglegesítve és beépítve, FAQPage JSON-LD schema-val — nincs bennük hamis "100%-ban private-pay, nulla biztosítós ügyfél" állítás (mert jelenleg is vannak biztosítós ügyfelek, ez fokozatos átállás).
- **SEO/schema**: sitemap.ts, robots.ts (GPTBot/ClaudeBot/PerplexityBot/Google-Extended engedélyezve), a pontos GSC-verifikációs tag, `llms.txt`, Person schema `sameAs` linkekkel (NCS-regisztráció, LinkedIn), biztonsági fejlécek a `next.config.ts`-ben.
- **Foglalási űrlap**: működik — `/api/book` route, **Resend**-en keresztül küld emailt a mindhavenuk@gmail.com címre (Gmail SMTP helyett, mert ahhoz nem volt hozzáférésünk).
- **Kitakarított hibák**: a hibás "Gemini blueprint"-ből bekerült kitalált cím ("6A Newmills Road... EH22 1DU"), kitalált helyszín-név ("Mysa Therapy Rooms"), túlzó "100% private-pay / no insurance" állítások (a Fees oldalon, a Privacy oldalon, a footerben), és minden em dash ki lett szedve/javítva a valós adatokra és semleges megfogalmazásra.
- A teljes ellenőrzés minden körben **kód-olvasás + tényellenőrzés** volt (grep-ek a kitalált adatokra, cím-egyeztetés a valós 6 Newmills Rd, Dalkeith EH22 2LE címmel).

## A weboldal-rebuild — még nyitott/hátralévő

- **Deploy még nem történt meg.** A terv: új, dedikált **privát GitHub repo**, a `/api/book` route miatt **Node.js standalone Docker build** kell (nem statikus nginx-kiszolgálás, mint más projekteknél) — ezt még be kell állítani.
- **Coolify Domains mező**: ismert buktató (a bereljufot/ufonauta tapasztalatból), kötelező a `https://` séma-előtag, különben a Traefik routing nem működik.
- Javasolt: előbb egy ideiglenes Coolify-URL-en tesztelni élesben (foglalási űrlap, mobil nézet), csak utána átállítani a mindhaven.uk domaint, és csak ezután leállítani a WP-t.
- **Mentés**: a WP-nek már van UpdraftPlus→Google Drive automata mentése, de egy kézi mentés a váltás előtt még ajánlott.
- **Blog**: a struktúra megvan (`/blog` index + `[slug]`), de **nulla poszt van** — ez a content-pipeline projekt feladata, külön ütemben.
- **Jogi átnézés** még nem történt meg: `/privacy-and-gdpr`, `/terms-of-service`, `/legal-notice` mind AI-draft, kifejezetten "needs legal review" jelöléssel — embernek (ügyvédnek vagy legalább Erikának) kell jóváhagynia.
- **Lighthouse/PageSpeed-mérés** még nem történt meg élőben — CC nem tudta lokálisan lefuttatni, ez manuális lépés marad.
- **GTM/GSC "Google-összekötés" hiba** a bereljufot-nál: felmerült mint tanulság, de a pontos hiba oka nincs feljegyezve/tisztázva — ezt még pontosítani kell, mielőtt beépítjük a mindhaven-deploy lépéseibe.

## Content-pipeline (külön projekt, a rebuildtől független)

- Erika megoszt valamit egy Telegram-bottal (kedvelt social poszt/idézet/film, vagy egy ügyfele — **kizárólag anonimizált/kompozit formában, soha szó szerint** — mondott valami), a bot/AI ebből teljes cikket ír az ő stílusában.
- A bot **visszaküldi a teljes cikket Erikának jóváhagyásra (HITL)**, mielőtt bármi kiposztolásra kerülne.
- Jóváhagyás után a tartalom bekerül a GitHub-repóba, ami Coolify-n keresztül automatikusan deployol.
- Külön irány: az AI maga is kutathat a weben célközönséghez illő témákat, ezekből előbb komment, majd rövid/hosszú cikk születhet.
- **Social media szétosztás**: **Postiz** (self-hosted, Coolify), n8n nélkül — az orchestrálást (bot → AI-draft → HITL → publikálás) saját kód végzi, a Postiz csak az utolsó lépés (posztolás Instára/FB-re/LinkedInre).
- Későbbi, még nem részletezett ötlet: videó- vagy podcast-tartalom, arcukat nem vállaló ügyfelekkel.

## Bizalomépítés

- Erika **nem akar online fizetést** a site-on — ez végleges döntés.
- Erika valószínűleg **nem kérhet/tehet ki testimonialt** az akkreditációs szabályzata miatt.
- **Az NCPS etikai szabályzat tényleges ellenőrzése még mindig nem történt meg** — ez blokkolja bármilyen review-gyűjtési tevékenységet, akármelyik platformon.
- Elsődleges bizalomépítők jelenleg: bio/módszertan-átláthatóság a weboldalon, a blog (hosszú távon), NCS-akkreditáció linkje — nem testimonial.

## Piackutatás és növekedési stratégia

- Külön, egyesített és tényellenőrzött dokumentum készült (`mindhaven-growth-strategy-merged.md`), ami három AI-kutatást (saját, Gemini, egy harmadik) vet össze.
- Fő eredmény: **fokozatos áremelés** javasolt (jelenlegi £85/£480 → később £100-120 felé, waitlist/foglaltság alapján kiváltva), nem egy azonnali, agresszív ugrás.
- Egy negyedik, "Gemini website blueprint" nevű dokumentum **nem megbízható forrás** — ebből származott a kitalált cím és a "Mysa Therapy Rooms" is, ezt a jövőben forrásként nem szabad használni.

## Egyéb technikai instrukció a promptíráshoz

- A CC-nek szánt promptokban **ne szerepeljen más projekt neve** (pl. "ufonauta"), mert CC nem ismeri azt a kontextust.
- Nyers WordPress-export helyett a már kinyert, tömör tartalom/infó átadása bizonyult jobbnak a promptokban.
- **Kitalált adatok elleni védekezés bevett gyakorlat lett**: minden CC-jelentést külön grep-pel/vizuális ellenőrzéssel kell visszaigazolni, mielőtt "késznek" fogadjuk el — ez többször kifizetődött ebben a projektben (cím, helyszín-név, private-pay túlzások mind így derültek ki).
