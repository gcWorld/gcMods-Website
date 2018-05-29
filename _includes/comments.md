<div id="comments">
  {% if site.data.comments[page.slug] %}
    {% assign comments = site.data.comments[page.slug] | sort %}
    {% for comment in comments %}
      {% assign avatar      = comment[1].avatar %}
      {% assign email       = comment[1].email %}
      {% assign name        = comment[1].name %}
      {% assign url         = comment[1].url %}
      {% assign date        = comment[1].date %}
      {% assign usermessage     = comment[1].usermessage %}
      {% include comment.html avatar=avatar email=email name=name url=url date=date usermessage=usermessage %}
    {% endfor %}

  {% else %}
    {{site.data[page.lang].string.no_comments}}
  {% endif %}
</div>
<div class="jumbotron">
    <form class="form js-form" method="POST" action="https://api.gcmods.de:8080/v2/entry/gcworld/gcMods-Website/master/comments">
      <div class="form__spinner mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
      <fieldset>
        <!-- Form Name -->
        <legend>{{site.data[page.lang].string.new_comment}}</legend>
        <!-- e.g. "2016-01-02-this-is-a-post" -->
        <input name="options[slug]" type="hidden" value="{{ page.slug }}">
        <input type="hidden" name="options[reCaptcha][siteKey]" value="6LdfFcUSAAAAABjim_wfeAZCrDDGNbnnPLq50PJQ">
        <input type="hidden" name="options[reCaptcha][secret]" value="sXTcieaAEh+88WVNJzn0aL22o0uaEZRTAEvN8k1ph4uxbWFhScaVIg6M1XPKpdXawlGUpPrzzwCICDWdeVpI8V3CCSJjQg7IANYEFkpDl4N6MNGkFno+C0Ibj4Cb1rxWqgs+CYlc275Q1LKw1mcgQHOWjks3KG30W/4QYKzPaTp4rsgTtIGX4h1ZYRMVgg+c/6slOhoom1/JvRmDrW8za2gtzZtmH4lzv+1v1VzltEkRQM+97Ra+EPVoeosqTXSC17TLW627LP25aM0EdYcUYO9llaMe32qkRGTN8AdqvZOKhC32bkHoqSxFYU955b9mLI626PHvVC6krvFzR8EhMedQ+W+heH3pMa7p6+/PF6ZFOy8H0WpuICFGgmyHEC82/0mj5bUNxUQ1/OEsyMhoSkZJHDkREB2BBytX+wgD0zH/LiI9BcAztfJBP+biedam6lHL4L6oJjMCSS+7NhFzL/YUFHAs2iA5uIVYYyHgf8ziwABCjQS34D3BSLAKfwFphTGckrfnM8uWTgF/UTjs75EcWhQpq0prpemOysw8bazvuN/OPy6/1cnoOHWmOc1RULWyP8QJiv0HZ8NUrHCAnxQji+Y5U5DbJyXigli+jiTcYxedtYXd767Ph+exSCQdGv+1zRs3/lOO2yWlO/x74q8HIMqJEOtjpkLFrCltUwU=">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" class="form-control" name="fields[name]" type="text">
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input id="email" class="form-control" name="fields[email]" type="email">
        </div>
        <div class="form-group">
          <label for="message">{{site.data[page.lang].string.message}}</label>
          <textarea id="message" class="form-control" rows="4" name="fields[usermessage]"></textarea>
        </div>
        <div class="g-recaptcha" data-sitekey="6LdfFcUSAAAAABjim_wfeAZCrDDGNbnnPLq50PJQ"></div>
        <br />
        <button class="btn btn-primary" type="submit" id="comment-submit" data-loading-text="<i class='fas fa-cog fa-spin'></i> {{site.data[page.lang].string.loading}}...">{{site.data[page.lang].string.submit_comment}}</button>
      </fieldset>
    </form>
</div>
<!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
          </div>
          <div class="modal-body" id="myModalBody">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
