(function ($) {
  $(document).ready(function () {
    // Create modal element
    var $modal = $('<div id="zoom-modal"></div>');
    var $modalImg = $('<img>');
    var $modalVideo = $('<video controls autoplay style="display:none; max-width: 90%; max-height: 90%;"></video>');
    var $closeBtn = $('<span class="close">&times;</span>');

    $modal.append($closeBtn);
    $modal.append($modalImg);
    $modal.append($modalVideo);
    $('body').append($modal);

    // Open modal on image click
    $('.zoom').on('click', function () {
      var videoSrc = $(this).attr('data-video');
      var imageSrc = $(this).attr('data-image');

      if (videoSrc) {
        $modalImg.hide();
        $modalVideo.attr('src', videoSrc).show();
        $modal.addClass('active');
        // Play video after modal is shown to ensure it works
        $modalVideo[0].play();
      } else if (imageSrc) {
        $modalVideo.hide();
        $modalVideo[0].pause();
        $modalVideo.attr('src', '');
        $modalImg.attr('src', imageSrc).show();
        $modal.addClass('active');
      } else {
        var src = $(this).attr('src');
        $modalVideo.hide();
        $modalVideo[0].pause();
        $modalVideo.attr('src', '');
        $modalImg.attr('src', src).show();
        $modal.addClass('active');
      }
    });

    // Close modal on click outside or close button
    $modal.on('click', function (e) {
      if (e.target !== $modalImg[0] && e.target !== $modalVideo[0]) {
        $modal.removeClass('active');
        $modalImg.attr('src', '');
        $modalVideo[0].pause();
        $modalVideo.attr('src', '');
        $modalVideo.hide(); // Hide video on close
      }
    });
  });
})(jQuery);
