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
    <form class="form " method="POST" action="http://159.89.10.250:8080/v2/entry/gcworld/gcMods-Website/master/comments">
      <div class="form__spinner mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
      <fieldset>
        <!-- Form Name -->
        <legend>{{site.data[page.lang].string.new_comment}}</legend>
        <!-- e.g. "2016-01-02-this-is-a-post" -->
        <input name="options[slug]" type="hidden" value="{{ page.slug }}">
        <input type="hidden" name="options[reCaptcha][siteKey]" value="6LdfFcUSAAAAABjim_wfeAZCrDDGNbnnPLq50PJQ">
        <input type="hidden" name="options[reCaptcha][secret]" value="zgCHRjuMFpxiZ5YfX6hvWRnBaVvkkaH4oex6rXU7n7EdhS1Og6SSlcEX9I0Ck/Tx1HNyvwF4m/VPthOKOzveAoLcIZ87k5JCVksZDsiy0jkxQaORsuxwXX/Fz5vZ11sLn7Enw89qu4XbfrmkUdnLe1WimwbSl500dt0ReJqiuaYynlB6WnP9iEWWu0+dYmlAXYTSc9x7j57ddIrhUEWy+GmtH/hYmkp3ulN4zeTzmdbNAdBQiwhNEll0UjDLRFOsGWUdmsiICxM9ychofAsCwHjZI/dkkG8/ypSlF3MxJM6q5anAp5QDFwpeBbcmbwApzdmwDSdmLQ9O6CEMYKlbFR49sEuIYU32QU+WEL6fe3qY2lwCj0rOLypbChcp0875NO/O7UhYPWY1ACy3NioA5L65a3PlU+hs270Qg5YLpjAg+qfbhvGIeGiAsaL2eX8V54E/NvYWok6aGtc3p9DPlntofgTJcogUnUmJT14F7mFkewq4FBYCfk+tfs4zVHYzZVY+mNCCYSsILEbkgUBNBsSgeN5KxaKmobXak6LZ7z5K2DuZdJT48MFTySWolziXQK1SZ+AGf0eHdqKBJ4Mwk6Q0TzkPqJBfw6Wog9B8uZ4iLZmjQBYZV2XsbdmxgU4cwnFP1OeT/U/g/4AIIqKgZVm47Rds5pxS5srschogkA8=">
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
        <button class="btn btn-primary" type="submit" id="comment-submit" data-loading-text="<i class='fas fa-cog fa-spin'></i> {{site.data[page.lang].string.loading}}...">{{site.data[page.lang].string.submit_comment}}</button>
        <div class="g-recaptcha" data-sitekey="6LdfFcUSAAAAABjim_wfeAZCrDDGNbnnPLq50PJQ"></div>
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
