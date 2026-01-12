(function($) {
  $(document).ready(function() {
    // Create modal element
    var $modal = $('<div id="zoom-modal"></div>');
    var $modalImg = $('<img>');
    var $closeBtn = $('<span class="close">&times;</span>');

    $modal.append($closeBtn);
    $modal.append($modalImg);
    $('body').append($modal);

    // Open modal on image click
    $('.zoom').on('click', function() {
      var src = $(this).attr('src');
      $modalImg.attr('src', src);
      $modal.addClass('active');
    });

    // Close modal on click outside or close button
    $modal.on('click', function(e) {
      if (e.target !== $modalImg[0]) {
        $modal.removeClass('active');
        $modalImg.attr('src', '');
      }
    });
  });
})(jQuery);
