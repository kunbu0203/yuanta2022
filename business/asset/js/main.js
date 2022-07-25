$(function () {
  // 進場
  AOS.init({
    offset: 10,
    duration: 800,
    once: true,
    delay: 300
  }); // tool show/hide

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 500) {
      $('.gotop').fadeIn(300);
    } else {
      $('.gotop').fadeOut(300);
    } // 錨點


    var headerTop = $('[data-header]').offset().top + $('[data-header]').outerHeight();
    var tabTop = $('[data-anchor]').offset().top,
        $fixed = $('[data-anchor-fixed]');

    if (headerTop > tabTop) {
      $fixed.addClass('-fixed');
    } else {
      $fixed.removeClass('-fixed');
    } // 滾到區塊亮相對應按鈕


    $('[data-anchor-block]').each(function (index) {
      var triggerTop = $(this).offset().top - $(window).height() / 4,
          triggerBottom = triggerTop + $(this).outerHeight(),
          comBottom = $('[data-anchor-fixed]').offset().top + $('[data-header]').outerHeight();

      if (comBottom > triggerTop && comBottom < triggerBottom) {
        var val = $(this).data('anchor-block');
        $('[data-anchor-btn]').removeClass('-active');
        $('[data-anchor-btn="' + val + '"]').addClass('-active');
      }
    });
  }).trigger('scroll'); // goTop鈕

  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 400);
  }); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
  }); // 漢堡

  $('[data-burger]').on('click', function () {
    $('body').toggleClass('is-menuOpen');
  }); // 錨點

  $('[data-anchor-btn]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('[data-anchor-block="' + $(this).data('anchor-btn') + '"]').offset().top - 80
    }, 300);
  });

  if (location.href.indexOf('?') != -1) {
    var paramAry = location.href.split('?')[1].split('&'),
        tabStr = '';
    paramAry.forEach(function (item) {
      if (item.indexOf('anchor') != -1) {
        tabStr = item;
      }
    });
    var name = tabStr.split('=')[1];
    $('html, body').scrollTop($('[data-anchor-block="' + name + '"]').offset().top - 80);
  } // 頁籤


  $('[data-tab-btn]').on('click', function (e) {
    e.preventDefault();
    var val = $(this).data('tab-btn');
    $('[data-tab-btn], [data-tab-content]').removeClass('-active');
    $(this).addClass('-active');
    $('[data-tab-content="' + val + '"]').addClass('-active');
  });
  $('[data-more-btn]').on('click', function (e) {
    e.preventDefault();
    $('[data-more]').addClass('is-open');
  });
});