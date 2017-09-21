---
title: Kontakt
layout: page
---


* {% if site.author %}
  {{ site.author | escape }}
{% else %}
  {{ site.title | escape }}
{% endif %}
* {% if site.email %}{{ site.email }}{% endif %}



* {% if site.github_username %}
    {% include icon-github.html username=site.github_username %}
  {% endif %}

* {% if site.twitter_username %}
    {% include icon-twitter.html username=site.twitter_username %}
  {% endif %}
