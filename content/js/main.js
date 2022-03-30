"use strict";

$(function () {
  // 進場
  AOS.init({
    offset: 200,
    duration: 800,
    once: true
  }); // // goTop鈕
  // $('.gotop').on('click', function (e) {
  //     e.preventDefault();
  //     $('html, body').animate({
  //         scrollTop: 0
  //     }, 500);
  // });

  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  $('[data-btn]').on('click', function (e) {
    if (!isMobile) {
      return;
    } else {
      e.preventDefault();
      window.open('https://mobilebank.yuantabank.com.tw/YuantaBank-MobileBank-Gateway/getServ/openNewMobilebankApp', '_blank');
    }

    ;
  });
});