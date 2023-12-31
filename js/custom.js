(function ($) {
  "use strict";

  /* ..............................................
	Loader 
    ................................................. */

  $(window).on("load", function () {
    $(".preloader").fadeOut();
    $("#preloader").delay(550).fadeOut("slow");
    $("body").delay(450).css({ overflow: "visible" });
  });

  /* ..............................................
    Navbar Bar
    ................................................. */

  $(".navbar-nav .nav-link").on("click", function () {
    var toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  /* ..............................................
    Fixed Menu
    ................................................. */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".top-header").addClass("fixed-menu");
    } else {
      $(".top-header").removeClass("fixed-menu");
    }
  });

  /* ..............................................
    Gallery
    ................................................. */

  $(document).ready(function () {
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      },
    });
  });

  /* ..............................................
    Smooth Scroll
    ................................................. */

  $('a[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 65,
          },
          1000
        );
        return false;
      }
    }
  });
})(jQuery);
document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("audio");
  var playPauseButton = document.getElementById("playPauseButton");
  playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseButton.innerHTML =
        '<img src="./images/pause.png" style="width: 25px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"/>';
    } else {
      audio.pause();
      playPauseButton.innerHTML =
        '<img src="./images/play.png" style="width: 25px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);margin-left: 1.5px;"/>';
    }
  });
});

// #ea3e23
