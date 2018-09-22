---
title: Luftbilder in OMSI 2
date: 2017-10-01 15:00:00 Z
categories:
- Luftbilder
- OMSI
- Editor
layout: post
menu: blog
section: Blog
image: aerials.JPG
author: seeadler
comments: true
lang: de
---

## Warnung!
Die unten beschriebenen Methoden funktionieren aktuell nicht mehr. Aufgrund des gestiegenen Interesses ist das Monatskontingent (17. Sep - 17. Okt) bereits verbraucht. Eine Alternative ist in Arbeit und sollte zeitnah verfügbar sein. Mehr dann auf der Startseite.

OMSI 2 bietet die Möglichkeit Luftbilder direkt im Editor anzeigen zu lassen. Um dies zu nutzen ist es jedoch erforderlich einige Dinge vorab einzustellen. Im Folgenden wird der notwendige Prozess beschrieben.

## Ordnerstruktur
Im Maps Ordner muss die folgende Ordnerstruktur erstellt werden

     aerials/MAPNAME

MAPNAME muss dabei durch den Namen der jeweiligen Map ersetzt werden.

## Options.cfg
Die im Hauptordner liegende options.cfg muss am Ende um den folgenden Eintrag ergänzt werden

    [Editor_LinkAerial]

Unterhalb des Editor_LinkAerial Eintrags muss dann einer der unten stehenden Links eingetragen werden.

Als Beispiel für Bilder von OpenStreetMap sieht das Ganze dann so aus

    [Editor_LinkAerial]
    http://b.tile.openstreetmap.org/~z/~x/~y.png

## Mögliche Quellen
Es gibt eine Reihe von Quellen welche für die Luftbilder verwendet werden können. Da die Qualität des Materials oft regional schwankt, hängt die geeignete Quelle vom Einsatzzweck ab.

### OpenStreetMap
    http://b.tile.openstreetmap.org/~z/~x/~y.png

### Bing
Um die Bilder von Bing verwenden zu können, wird ein API Code benötigt. Dieser kann kostenlos [hier](https://www.bingmapsportal.com/) erworben werden. [API-Code] muss in den untenstehenden Links durch den eigenen API Code ersetzt werden.

Satelliten

    http://aerial.gcmods.de/toquad.php?x=~x&y=~y&z=~z&apicode=[API-Code]

Straßen

    http://aerial.gcmods.de/toquad.php?x=~x&y=~y&z=~z&type=road&apicode=[API-Code]

### Google
Die Besonderheit hier ist, dass nur die 256px Auflösung funktioniert.

    http://aerial.gcmods.de/toquad.php?x=~x&y=~y&z=~z&service=google&hres=1

Straßen

    http://aerial.gcmods.de/toquad.php?x=~x&y=~y&z=~z&service=google&type=roadmap
