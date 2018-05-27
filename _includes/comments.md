<div id="comments">
    <form class="form js-form" method="POST" action="https://api.staticman.net/v2/entry/gcworld/gcMods-Website/master/comments">
      <div class="form__spinner mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
      <fieldset>
        <!-- Form Name -->
        <legend>Neuer Kommentar</legend>
        <input name="options[redirect]" type="hidden" value="{{ page.slug }}">
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
        <button class="btn btn-default" type="submit">Go!</button>
      </fieldset>
    </form>
</div>
<script>
(function ($) {
  var $comments = $('.js-comments');

  $('.js-form').submit(function () {
    var form = this;

    $(form).addClass('form--loading');

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        showModal('Review submitted', 'Thanks for your review! It will show on the site once it has been approved. You can see the pull request <a href="https://github.com/eduardoboucas/popcorn/pulls">here</a>.');
        $(form).removeClass('form--loading');
      },
      error: function (err) {
        console.log(err);
        showModal('Error', 'Sorry, there was an error with the submission!');
        $(form).removeClass('form--loading');
      }
    });

    return false;
  });

  $('.js-close-modal').click(function () {
    $('body').removeClass('show-modal');
  });

  function showModal(title, message) {
    $('.js-modal-title').text(title);
    $('.js-modal-text').html(message);

    $('body').addClass('show-modal');
  }
})(jQuery);
</script>
