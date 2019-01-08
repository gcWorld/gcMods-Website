---
title: Contact
layout: main
section: Contact
lang: en
ref: contact
---
<div class="row">
<div class="col-md-8">

<h2>Get in touch</h2>

<form name="contact" action="/thanks" netlify-honeypot="bot-name" netlify>
    <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-name" /></label>
    </p>
    <div class="form-group">
        <label>Name: <input class="form-control" type="text" name="name"></label>   
    </div>
    <div class="form-group">
        <label>Email: <input class="form-control" type="email" name="email"></label>
    </div>
    <div class="form-group">
        <label for="message">Message:</label><textarea rows="8" class="form-control" name="message"></textarea>
    </div>
    <button class="btn btn-primary" type="submit">Send</button>
</form>

</div>
<div class="col-md-4">

<h3>Further contact options</h3>

<ul>
{% if site.github_username %}
    <li>{% include icon-github.html username=site.github_username %}</li>
  {% endif %}

{% if site.twitter_username %}
    <li>{% include icon-twitter.html username=site.twitter_username %}</li>
  {% endif %}
</ul>

<a class="green" href="/impressum">Imprint</a>


</div>
</div>
