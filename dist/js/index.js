'use strict';

$(function () {
  function switchHandle(headEle, contEle, className) {
    $(headEle).each(function (i) {
      $(this).mouseenter(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(contEle)[i]).addClass(className).siblings().removeClass(className);
      });
    });
  }
  switchHandle('.tab .tab-head li', '.tab .cont-item', 'cur');

  // 弹窗
  $(".popup-btn").click(function () {
    $("#popup").show();
  });
  $('.mab-sz-close').click(function () {
    $("#popup").hide();
  });
});