$(function () {
  // 進場
  AOS.init({
    offset: 50,
    duration: 800,
    once: true
  }); // tool show/hide

  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 200) {
      $('.mediaIcons').fadeIn(300);
    } else {
      $('.mediaIcons').fadeOut(300);
    }

    if (scrollTop > 600) {
      $('.gotop').fadeIn(300);
    } else {
      $('.gotop').fadeOut(300);
    }
  }).trigger('scroll'); // goTop鈕

  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 400);
  }); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open').closest('[data-collapse]').find('[data-collapse-content]').slideToggle();
  });
  var swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  $('.banner-scroll').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.sky').offset().top
    }, 300);
  });
});