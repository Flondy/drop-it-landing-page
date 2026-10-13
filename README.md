# DROP IT – Premium Landingpage (GitHub Pages)

Responsive, zweisprachige (Deutsch / English) statische Website für **Drop It / Stack Game**. Design: Navy, Neon-Cyan, Violett & Magenta. **Keine Build-Tools nötig.**

## Inhalt

- `index.html` – komplette Landingpage
- `style.css` – responsive Designs, Animationen, alle Farbvariablen
- `app.js` – DE/EN-Umschalter, Sprache merken, Screenshot-Großansicht, mobiles Menü
- `assets/images/` – komprimierte Website-Bilder, App-Icon, Favicon, **Google-Play-Vorstellungsgrafik als PNG in genau 1024×500**
- `assets/originals/` – hochauflösende Ursprungsbilder einschließlich der zusätzlichen Icon-Varianten
- `design-reference/` – ursprüngliches KI-Designmockup der Landingpage als Referenz
- `privacy.html` und `imprint.html` – **UNVOLLSTÄNDIGE ENTWÜRFE**, vor Veröffentlichung überarbeiten!

## GitHub Pages in fünf Schritten

1. Neues oder vorhandenes GitHub-Repository `drop-it-landing-page` öffnen.
2. **Inhalt dieses ZIP direkt ins Stammverzeichnis des Repositories hochladen** (index.html muss im Root liegen).
3. Im GitHub-Repository `Settings` → `Pages` öffnen.
4. Unter `Build and deployment` die Quelle `Deploy from a branch`, Branch `main` und Ordner `/ (root)` auswählen und speichern.
5. Nach der Veröffentlichung sollte die Website unter `https://flondy.github.io/drop-it-landing-page/` erreichbar sein.

## Bereits hinterlegte Links

- Google Play: `https://play.google.com/store/apps/details?id=dev.flondy.drop`
- Website: `https://flondy.github.io/drop-it-landing-page/`
- Entwicklerkontakt: `flondy.dev@gmail.com`

## WICHTIG – vor dem Veröffentlichen erledigen

- **`privacy.html` und `imprint.html` vervollständigen und rechtlich prüfen.** Sie enthalten Platzhalter (Name, vollständige Postanschrift, Datenschutzdetails). Gerade bei einem Spiel mit AdMob nicht die allgemeine Website-Datenschutzerklärung mit der App-Datenschutzerklärung verwechseln. Die Platzhalterseiten sind *nicht* zur unveränderten Veröffentlichung geeignet.
- Die vier grafisch erzeugten Werbemotive sind **Designvisualisierungen**, keine authentischen Ingame-Screenshots. Für Google-Play-Screenshot-Uploads echte Screenshots aus der veröffentlichten Spielversion verwenden. Keine dort nur dargestellten Features oder fiktiven Ergebnisse bewerben, wenn sie in der App nicht vorhanden sind.
- Falls du im Code keine Anfragen an Google Fonts möchtest, entferne die Google-Fonts-`link`-Elemente aus `index.html`; der Font-Fallback funktioniert weiterhin. Passe entsprechend die Datenschutzhinweise an.
- Probiere die Seite vor dem Livegang auf Handy und Desktop aus und überprüfe, ob die App-Features und Store-Links zum aktuellen Build passen.

## Sprachumschaltung

Der Schalter **DE / EN** steht in der Navigation. Er wählt beim ersten Besuch automatisch die Browsersprache (Deutsch sonst Englisch), merkt die Auswahl per localStorage und unterstützt auch `?lang=de` oder `?lang=en` in der URL.

## Bilddateien

Für Google Play unter `assets/images/feature-graphic-1024x500.png`: bereits **1024 × 500 Pixel**. Das Originalmotiv liegt in `assets/originals/feature-graphic-source.png`.

Website-Galerie nutzt kleinere `.webp` Dateien; die hochauflösenden Original-PNGs stehen unter `assets/originals/` zur Verfügung.

## Design-Änderungen

Farben direkt am Anfang von `style.css` (`:root`) ändern. Texte und Übersetzungen in `app.js` (`translations.de` / `translations.en`). Für neue Screenshots die Pfade in `index.html` bei den `.screenshot-card` Elementen ändern.

© Flondy – Websitevorlage für den eigenen Projekteinsatz.
