---
title: Kontakt
layout: main
section: Kontakt
lang: de
ref: contact
---
<div class="row">
<div class="col-md-8">

<h2>Kontaktformular</h2>

<form name="contact" action="/thanks" netlify>
<div class="form-group">
    <label>Name: <input class="form-control" type="text" name="name"></label>   
    </div>
    <div class="form-group">
    <label>Email: <input class="form-control" type="email" name="email"></label>
    </div>
    <div class="form-group">
    <label for="message">Nachricht:</label><textarea rows="8" class="form-control" name="message"></textarea>
    </div>
    <button class="btn btn-primary" type="submit">Senden</button>
</form>

</div>
<div class="col-md-4">

<h3>Kontaktmöglichkeiten</h3>

<ul>
<li><a href="https://discord.gg/tJNMaQG" aria-label="Discord">
    <i class="fab fa-discord fa-2x" aria-hidden="true"></i> Discord
</a></li>

{% if site.github_username %}
    <li>{% include icon-github.html username=site.github_username %}</li>
  {% endif %}

{% if site.twitter_username %}
    <li>{% include icon-twitter.html username=site.twitter_username %}</li>
  {% endif %}
</ul>

<a class="green" href="/impressum">Impressum</a>


</div>
</div>
