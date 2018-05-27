<div id="comments">
    <form class="form js-form" method="POST" action="https://api.staticman.net/v2/entry/gcworld/gcMods-Website/master/comments">
      <div class="form__spinner mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
      <fieldset>
        <!-- Form Name -->
        <legend>Neuer Kommentar</legend>
        <!-- e.g. "2016-01-02-this-is-a-post" -->
        <input name="options[slug]" type="hidden" value="{{ page.slug }}">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" class="form-control" name="fields[name]" type="text">
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input id="email" class="form-control" name="fields[email]" type="email">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" class="form-control" rows="4" name="fields[usermessage]"></textarea>
        </div>
        <button class="btn btn-default">Go!</button>
      </fieldset>
    </form>
</div>
