$(function () {
  // 進場
  AOS.init({
    offset: 10,
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
    loop: true,
    spaceBetween: 115,
    loopAdditionalSlides: 3,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1024: {
        spaceBetween: 20
      }
    }
  }); // tab

  $('[data-tab]').on('click', function (e) {
    e.preventDefault();
    var val = $(this).data('tab');
    $('[data-tab], [data-tab-content]').removeClass('-active');
    $(this).addClass('-active');
    $('[data-tab-content="' + val + '"]').addClass('-active');
    AOS.refreshHard();
  });
  $(window).on('scroll', function () {
    var scrollTop = $('[data-header]').offset().top + $('[data-header]').outerHeight(),
        comTop = $('[data-nav]').offset().top,
        $fixed = $('[data-fixed]');

    if (scrollTop > comTop) {
      $fixed.addClass('-fixed');
    } else {
      $fixed.removeClass('-fixed');
    }
  }).trigger('scroll'); // bar

  var bar = document.querySelector('[data-bar-main]'),
      barMb = document.querySelector('[data-bar-main-mb]');
  noUiSlider.create(bar, {
    start: 1,
    behaviour: 'drag-smooth-steps-tap',
    connect: [true, false],
    step: 10,
    range: {
      'min': [0, 1],
      '10%': [1, 2],
      '30%': [3, 2],
      '50%': [5, 5],
      'max': [10]
    },
    pips: {
      mode: 'values',
      values: [1, 3, 5, 10],
      density: 100,
      format: wNumb({
        suffix: '年'
      })
    }
  });
  noUiSlider.create(barMb, {
    orientation: 'vertical',
    start: 1,
    behaviour: 'drag-smooth-steps-tap',
    connect: [true, false],
    step: 10,
    range: {
      'min': [0, 1],
      '10%': [1, 2],
      '30%': [3, 2],
      '50%': [5, 5],
      'max': [10]
    },
    pips: {
      mode: 'values',
      values: [1, 3, 5, 10],
      density: 100,
      format: wNumb({
        suffix: '年'
      })
    }
  });
  bar.noUiSlider.on('update', function (val) {
    var val = parseInt(val);
    $('[data-bar]').removeClass().addClass('bar -pc is-' + val);
  });
  barMb.noUiSlider.on('update', function (val) {
    var val = parseInt(val);
    $('[data-bar-mb]').removeClass().addClass('bar -mb is-' + val);
  });
});