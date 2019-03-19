---
title: Luftbilder in LOTUS
date: 2018-10-04 15:00:00 Z
categories:
- Luftbilder
- LOTUS
- Editor
layout: post
menu: blog
section: Blog
image: aerials_lotus.png
author: seeadler
comments: true
lang: de
ref: luftbilder-in-lotus
---

LOTUS bietet zusätzlich zu den eingebauten OSM Karten die Möglichkeit Luftbilder direkt im Editor anzeigen zu lassen. Um dies zu nutzen ist es jedoch erforderlich einige Dinge vorab einzustellen. Im Folgenden wird der notwendige Prozess beschrieben.

## Schritt 1
Das Optionsmenü über den gekennzeichneten Button (1.) öffnen.

## Schritt 2a
In das Feld "Luftbilder-Link" einen der unter "Mögliche Quellen" aufgeführten Links eintragen.

## Schritt 2b
Bei "Luftbilder-Format" "JPEG" auswählen und mit "OK" bestätigen.

## Schritt 3
Im Reiter "Umwelt" "Luftbilder" auswählen. Der Kartehintergrund wechselt zu grauen Kacheln mit der Aufschrift "Still Loading". Die Luftbilder werden nun im Hintergrund heruntergeladen. Dieser Prozess dauert aufgrund der Anzahl der herunterzuladenden Bilder mehrere Minuten.

## Mögliche Quellen
Es gibt eine Reihe von Quellen welche für die Luftbilder verwendet werden können. Da die Qualität des Materials oft regional schwankt, hängt die geeignete Quelle vom Einsatzzweck ab.

### OpenStreetMap
    http://b.tile.openstreetmap.org/~z/~x/~y.png

Dies sind die gleichen Kartenbilder wie bereits im Editor unter "Map" integriert sind.

### Bing
Um die Bilder von Bing verwenden zu können, wird ein API Code benötigt. Dieser kann kostenlos [hier](https://www.bingmapsportal.com/) erworben werden. [API-Code] muss in den untenstehenden Links durch den eigenen API Code ersetzt werden.

Satelliten

    https://aerial.gcmods.de/toquad.php?x=~x&y=~y&z=~z&apicode=[API-Code]

Straßen

    https://aerial.gcmods.de/toquad.php?x=~x&y=~y&z=~z&type=road&apicode=[API-Code]

### Google
~~Google funktioniert auch ohne API Code. Es wird jedoch dringend empfohlen einen eigenen Code anzugeben, da ohne die Zahl der Anfragen auf 5000 pro Tag begrenzt sind. Dieses Limit gilt insgesamt zusammen für alle die den Link nutzen, und ist daher schnell erreicht.~~
__Google benötigt einen API Code.__ Dieser kann [hier](https://cloud.google.com/maps-platform/#get-started) erworben werden. [API-Code] muss in den untenstehenden Links durch den eigenen API Code ersetzt werden.

Satelliten

	https://aerial.gcmods.de/toquad.php?x=~x&y=~y&z=~z&service=google&apicode=[API-Code]

Straßen

	https://aerial.gcmods.de/toquad.php?x=~x&y=~y&z=~z&service=google&type=roadmap&apicode=[API-Code]
