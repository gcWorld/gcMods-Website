---
title: Kontakt
layout: main
section: Kontakt
lang: de
ref: contact
menu: /kontakt.html
---
<div class="row">
<div class="col-md-8">

<h2>Kontaktformular</h2>

<form name="contact" action="/thanks" netlify-honeypot="bot-name" netlify>
    <p hidden>
    <label>Bitte nicht ausfüllen: <input name="bot-name" /></label>
    </p>
    <div class="form-group">
    <label>Name: <input class="form-control" type="text" name="name"></label>   
    </div>
    <div class="form-group">
    <label>Email: <input class="form-control" type="email" name="email"></label>
    </div>
    <div class="form-group">
    <label for="message">Nachricht:</label><textarea rows="8" class="form-control" name="message"></textarea>
    </div>
    <button class="mb-2 btn btn-success" type="submit">Senden</button>
</form>

</div>
<div class="col-md-4">

<h3>Kontaktmöglichkeiten</h3>

<ul>
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
