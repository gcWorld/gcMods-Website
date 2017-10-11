---
title: IBISdroid
lang: de
section: Downloads
released: 2013-12-03 22:30:28 Z
updated: 2013-12-03 22:30:28 Z
copyright: '2013'
website: false
link: http://ibis-droid.gcmods.de/
ams: false
zip: https://github.com/gcWorld/IBISdroid/releases/download/v1.0/IBISdroid.zip
zip-alt:
exe: 
android: http://play.google.com/store/apps/details?id=de.gcworld.ibisdroid
homepage: false
image_big: ibis.png
version: 1.3.2
omsi_version: 1
author: seeadler
link_forum:
wip:

beta:
beta-format: zip
beta-version: 1.3.2

introduction: IBISdroid für Android ermöglicht die Steuerung vom IBIS, der Kasse, sowie dem Ticketdrucker mittels Smartphone oder Tablet.

image_list:
- filename: ibis.png
  title:
- filename: ibis2.png
  title:
- filename: map.png
  title: Kartenauswahl
- filename: tablet.png
  title: Tablet
- filename: tablet2.png
  title: Tablet Zahltisch und IBIS
- filename: zahltisch.png
  title: Zahltisch
video_list:
- yt: xkfjqIJlz4E


---
#### IBIS
Mit dem IBIS können alle IBIS-Funktionen direkt mit dem Smartphone gesteuert werden. Hierzu zählen unter anderem: Linie und Route einstellen, Haltestelle weiterschalten, etc.


#### Zahltisch
Der Zahltisch ermöglicht es, Wechselgeld bequem über den Touchscreen auszugeben. Es werden ausserdem derzeit die Währungen DM und Euro unterstützt.


#### Ticketdrucker
Tickets können auf Knopfdruck in OMSI ausgedruckt werden. Sollte mal ein falsches Ticket ausgewählt oder gedruckt worden sein, so kann dies mit der Abbrechen-Taste schnell wieder entfernt werden.

<table class="table">
							<tbody>
								<tr>
									<th>Betriebssysteme</th>
									<td>Android (ab 2.1)</td>					
								</tr>
								<tr>
									<th>Omsi Version</th>
									<td>1.x</td>					
								</tr>
								<tr>
									<th>Funktionen</th>
									<td>IBIS, Zahltisch und Ticketdrucker</td>			
								</tr>
								<tr>
									<th>Unterstützte Karten</th>
									<td>Grundorf, Spandau 1989, Rheinhausen, R&ouml;merberg, Bad Kinzau, Teltow, Langbach, Landkreis Wehlen und weitere <a href="http://s.gcmods.de/karten">(neue vorschlagen)</a></td>			
								</tr>
								<tr>
									<th>Unterstützte Busse</th>
									<td>D92</td>			
								</tr>
								<tr>
									<th>Unterstütze Währungen</th>
									<td>DM, <a href="http://www.gcmods.de/de/downloads/euro-mod/">Euro</a></td>			
								</tr>
								<tr>
									<th>Unterstütze Ticketpacks</th>
									<td>Berlin, Berlin_euro, Römerberg, Bad Kinzau, Langbach</td>			
								</tr>
								<tr>
									<th>Version</th>
									<td>1.3.4 <span>(veröffentlicht: 27. Dezember 2013)</span></td>			
								</tr>
							</tbody>
						</table>

<br>

<div class="bg bg-danger" markdown="block">
<h2>Systemanforderungen</h2>
<h3>Android</h3>
<table>
				<tbody>
					<tr>
						<th>OS Version</th>
						<td>mindestens 2.1</td>					
					</tr>
					<tr>
						<th>Speicherplatz</th>
						<td>etwa 800 KB</td>					
					</tr>

				</tbody>
			</table>

<h3>Windows</h3>
<table>
<tbody>
<tr>
<th>Benötigt</th>
<td>funktionierende OMSI 1.x Installation</td>					
</tr>
<tr>
<th>Speicherplatz</th>
<td>etwa 500 KB</td>					
</tr>

</tbody>
</table>
<p>Ferner wird ein WLan Access Point benötigt. Der Computer kann wahlweise über Kabel oder Wlan mit diesem verbunden sein.</p>

<h2>Installation</h2>

<p>Die Anwendung besteht aus zwei Komponenten. Einmal der Anwendung für Android und dem Plugin für Windows.</p>
<h3>Windows</h3>
<p>Das .zip Archiv entpacken und den Inhalt des Ordners '/plugins' nach PfadzuOMSI/plugins kopieren.</p>
<p>Eine weitere Konfiguration ist nicht notwendig. Beim nächsten Start von OMSI wird das Plugin automatisch gestartet.</p>
<p>Bitte notiert euch hier die IP (zum) Beispiel 192.168.178.40). Diese wird später bei der Einrichtung der Android App benötigt.</p>
<h3>Android</h3>
<p>Der Download für die Android App befindet sich im Google Play Store (erreichbar über den grünen Button oben rechts).</p>
<p>Anschließend kann die Anwendung installiert und gestartet werden. Nach dem ersten Start müssen zunächst einige Einstellungen vorgenommen werden.</p>
<p>Dazu öffnet man die <strong>Einstellungen</strong>. Hier wird zunächst die im vorherigen Schritt notierte IP Adresse eingetragen. Anschließend können noch die Karte, Währung und das gewünschte Ticketpack eingestellt werden. Diese Einstellungen können natürlich jederzeit verändert werden. Bei der Auswahl von <strong>Default</strong> werden die Standardeinstellungen für die jeweilige Karte verwendet.</p>
<h4>IBIS Verspätungsanzeige (SD202)</h4>
<p>Um die Verspätungsanzeige korrekt angezeigt zu bekommen ist es notwendig einige OMSI-Dateien zu editieren.</p>
<p> </p>
<p>Öffnet die Datei OMSI/Vehicles/MAN_SD202/Script/IBIS-2.osc und sucht die folgenden Zeilen</p>
<pre><code>Zehntelminuten:<br /> l0 abs l0 abs trunc - 10 * " 1" $IntToStrEnh<br /> (S.$.IBIS_Delay_sec)</code></pre>
<p>und fügt darunter diese Zeile ein:</p>
<pre><code>(M.V.GetTTDelay) (S.L.TEST_delay)</code></pre>
<p> Nun öffnet die Datei OMSI/Vehicles/MAN_SD202/Script/IBIS_varlist.txt und fügt am Ende diese Zeile hinzu:</p>
<pre><code>TEST_delay</code></pre>

<!--<h2>Bekannte Probleme</h2>
<ul>
<li> In einigen Fällen kann es vorkommen, das nach dem Abbruch der Verbindung in OMSI eine Fehlermeldung erscheint. Wenn man sich nun erneut verbindet erscheint eine weitere Fehlermeldung. Beide Meldungen können mit einem Klick auf OK beendet werden und OMSI anschließend normal weiterbenutzt werden.</li>
</ul>
<div><img src="http://dl.dropbox.com/s/3pwjbuswo0w6178/async_error.png" alt="" width="300" height="201" /><img src="http://dl.dropbox.com/s/4l7ikryq6viu0oq/async_error2.png" alt="" width="300" height="112" /></div>-->
<h2>Fehler melden</h2>
<p>Fehler können entweder per Email an <em>info@gcmods.de</em> oder direkt über den <a href="http://github.com/gcWorld/ibis-droid/issues" target="_blank">Bugtracker</a> auf GitHub gemeldet werden.<br /><br /><em>Sollte die App mit einem Force Close abstürzen werde ich automatisch über den Fehler informiert. Es wäre jedoch hilfreich wenn du mir zusätzlich eine Email schreibst und kurz beschreibst wie der Fehler aufgetreten ist.</em><br /><br /></p>
<h2>Kontakt</h2>
<p>Bei Fragen oder Problemen stehe ich per Email zur Verfügung: <strong><a href="mailto:info@gcmods.de">info@gcmods.de</a></strong></p>

</div>
<br>
<div class="bg bg-success" markdown="block">

<h2>Changelog</h2>

<h3>1.3.4 <small>27. Dezember 2013</small></h3>

<p>Neue Karten.</p>
<ul class="updates">
<li><span class="misc">Karte</span>Unterstützung für die folgende Karte hinzugefügt: Dobel (iajer), Lemmental (Sev99LC), Tannenberg Gothen (Tomdresden), Ahlheim (davidm2412). Vielen Dank an iajer für die Umsetzung.</li>
</ul>

<h3>1.3.3 <small>02. Dezember 2013</small></h3>

<p>Neue Karten und Fehlerbehebung.</p>
<ul class="updates">
					<li><span class="misc">Karte</span>Unterstützung für die folgende Karte hinzugefügt: Rhodenau (NahverkehrFan), SSB Linie 74 (doho), Gothenberg (Roland15) Danke an MarvinK</li>
					<li><span class="fixed">Behoben</span>Fehler in Weyershausen behoben.</li>
				</ul>

<h3>1.3.2 <small>12. September 2013</small></h3>

<p>Neue Karte und 7".</p>

<ul class="updates">
					<li><span class="misc">Karte</span> Unterstützung für die folgende Karte hinzugefügt: Velbert (karsten-velbert) Danke an MarvinK.</li>

					<li><span class="new">Neu</span> Unterstützung für 7"</li>
				</ul>

<h3>1.3.1 <small>17. August 2013</small></h3>

<p>Neue Karten und Fehlerbehebung.</p>

<ul class="updates">
					<li><span class="misc">Karte</span> Unterst&uuml;tzung für die folgenden Karten hinzugef&uuml;gt: Weyershausen (CCLC) -> Danke an OMSI-Report, Szczecin (mpaw82).</li>

					<li><span class="fixed">Behoben</span> Fehlende Haltestellen in Spandau (M+R) hinzugefügt.</li>
				</ul>



<h3>1.3 (Inge) <small>22. Mai 2013</small></h3>

<p>Neue Karten, neue Sprache und Fehlerbehebung.</p>

<ul class="updates">
					<li><span class="misc">Karte</span> Unterst&uuml;tzung für Teltow (Maerkertram), Landkreis Wehlen (Driver3737), Langbach (JoeE) -> Eingereicht von Steiner.</li>
					<li><span class="new">Neu</span> Neue Sprache: Polnisch (Polish). Vielen Dank an PrzemekPL für die Übersetzung.</li>
					<li><span class="fixed">Behoben</span> Und noch einen Fehler behoben, bei dem die App unter bestimmten Umständen nach dem Verbinden abstürzt.</li>
					<li><span class="fixed">Behoben</span> Kleinere Fehler behoben.</li>
				</ul>

<h3>1.2 (Pangolin) <small>06. Mai 2013</small></h3>

<p>Neue Karte und Fehlerbehebung.</p>

<ul class="updates">
					<li><span class="misc">Karte</span> Unterst&uuml;tzung für Bad Kinzau (Janniboy) hinzugef&uuml;gt.</li>
					<li><span class="fixed">Behoben</span> Fehler in der Umsetzung für Spandau behoben.</li>
					<li><span class="fixed">Behoben</span> Noch einen Fehler behoben, bei dem die App unter bestimmten Umständen nach dem Verbinden abstürzt.</li>
					<li><span class="fixed">Behoben</span> Kleinere Fehler behoben.</li>
				</ul>


<h3>1.1.1 (Gelada) <small>15. April 2013</small></h3>

<p>Fehlerbehebung</p>

<ul class="updates">
					<li><span class="fixed">Behoben</span> Fehler behoben, bei dem die App unter bestimmten Umständen nach dem Verbinden abstürzt.</li>
				</ul>

<h3>1.1 (Gelada) <small>22. M&auml;rz 2013</small></h3>

<p>Kleines Funktionsupdate.</p>

<ul class="updates">
				<li><span class="new">Neu</span> Aktive WLAN Verbindung nicht mehr notwendig.</li>
				<li><span class="misc">Karte</span> Unterst&uuml;tzung für R&ouml;merberg (nightcab) hinzugef&uuml;gt. (Danke an Lukas)</li>
					<li><span class="fixed">Behoben</span> Diverse Fehler in Kartenunterstützung behoben</li>
				</ul>

<h3>1.0 (Grison) <small>16. Dezember 2012</small></h3>

<p>Erste öffentliche Version. Verfügbar im Google Play Store.</p>

<ul class="updates">
				<li><span class="new">Neu</span> Ausgedruckte Tickets können abgerissen werden.</li>
				<li><span class="misc">Karte</span> Rheinhausen (Roland15) integriert</li>
				<li><span class="fixed">Behoben</span> Diverse Fehler behoben</li>

				</ul>

<h3>0.9 (Xiphias) <small>10. November 2012</small></h3>

<p>Beta</p>

<ul class="updates">
					<li><span class="new">Neu</span> Updatebenachrichtigung integriert.</li>
					<li><span class="new">Neu</span> Kartenauswahl vor dem Verbinden.</li>
					<li><span class="new">Neu</span> Standardwerte für Währung und Ticketpacks je nach gewählter Map.</li>
					<li><span class="new">Neu</span> IBIS nur angeschaltet wenn Elektrik in OMSI aktiviert wurde.</li>
					<li><span class="fixed">Behoben</span> Diverse Fehler behoben</li>
				</ul>

<h3>0.8b2 (Bandicoot) <small>05. Oktober 2012</small></h3>

<p>Diverse Fehler wurden mithilfe der Betatester behoben. Die Anwendung läuft nun erheblich stabiler.</p>

<ul class="updates">
					<li><span class="fixed">Behoben</span> Verspätungsanzeige korrigiert</li>
					<li><span class="fixed">Behoben</span> Diverse Bugs</li>
				</ul>

<h3>0.8b1 <small>23. September 2012</small></h3>

<p></p>

<ul class="updates">
					<li><span class="new">Neu</span> Erste Betaversion</li>
				</ul>

<h2>Betatester</h2>

<p>Ein besonderer Dank geht an die Betatester, welche die Entwicklung der Anwendung unterstützt haben:</p>
<ul>
<li>BastiDE</li>

				<li>Flo2012</li>
				<li>GermanNavy04</li>
				<li>Yufa</li>
				<li></li>
				<li>AkatiTheFox</li>
				<li>BahnFan2014</li>
				<li>Desrupter</li>
				<li>Eric2405</li>
					<li>fLoU</li>
					<li>irizarcentury_oms</li>
					<li>louis121</li>
					<li>Solaris Urbino</li>
					<li>zavage</li>
</ul>
</div>

<h2>Häufige Fragen</h2>
<p>Hier befinden sich häufig gestellte Fragen. Die Liste wird mit der Zeit erweitert.</p>
<div id="faqs">

<h3>Fehlermeldung "Komponente mit der Bezeichnung Form1 existiert bereits"</h3>
<div><p>Dieser Fehler tritt auf, wenn das Addon "Hamburg Tag & Nacht verwendet wird. Das Problem ist bekannt und wird mit Veröffentlichung von IBIS droid v2.0 behoben sein.</p><p>
<u>Die vorübergehende Lösung:</u> Im Ordner "OMSI/plugins" die Datei "hamburg.opl" in "hamburg.txt" umbenennen.
				Dies deaktiviert das Plugin vom Hamburger Addon. Die Karte kann aber trotzdem ohne Probleme verwendet werden</p></div>

<h3>Unterstützung für Map X</h3>
<div>
<p>Eine Erweiterung für weitere Karten ist nicht mehr geplant. Für eine größere Auswahl an Karten bitte OMSI 2 und das IBIScontrol Plugin nutzen.</p>
</div>

<h3>Was hat es mit <u>IBIS droid v2.0</u> auf sich?</h3>
<div>
<p>Hierbei handelte es sich um den Nachfolger der Version 1.0. Mittlerweile ist hieraus IBIScontrol für OMSI 2 geworden.</p>
</div>

<h3>Gibt es auch eine Version für iOS Geräte?</h3>
<div>
<p>Es gibt keine Version für iOS.</p>
</div>
</div>
