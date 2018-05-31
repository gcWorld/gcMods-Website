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
        <input type="hidden" name="options[reCaptcha][secret]" value="bAXGfgfTTWCfeYSClX9Y/YOZjU5EuJw91aTqjTw7BtIpy8v0SUFreLmD/ZGYjAmmElWiNYqAhENyiyum5JH3bGyrGOyynEmtMbUxlXbL8GoxJrrCMaHBTj8QHTPeBFIuzbjbcaAbdinR1d5oLkh9YKI3kT0F60LAIfamGkEoIps=">
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
