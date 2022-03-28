"use strict";

$(function () {
  // 進場
  AOS.init({
    offset: 200,
    duration: 800,
    once: true
  }); // goTop鈕

  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open').closest('[data-collapse]').find('[data-collapse-content]').slideToggle();
  });
});