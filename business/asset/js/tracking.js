'use strict';

$(function () {
  $('#yuantabank').click(function () {
    gtag('event', 'click', {
      event_category: 'B2C',
      event_label: 'yuantabank'
    });
  });
  $('#download').click(function () {
    gtag('event', 'click', {
      event_category: 'B2C',
      event_label: 'download'
    });
  });
  $('#Question').click(function () {
    gtag('event', 'click', {
      event_category: 'B2C',
      event_label: 'Question'
    });
  });
  $('.login').click(function () {
    gtag('event', 'click', {
      event_category: 'B2C',
      event_label: 'login'
    });
  });
});