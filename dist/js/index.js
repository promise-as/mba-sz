'use strict';

$(function () {
  theaMsForm($('.sign-in'));

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
  $(".popup-btn2").click(function () {
    $("#popup2").show();
  });
  $('.mab-sz-close').click(function () {
    $("#popup").hide();
    $("#popup2").hide();
  });

  // 锚点加过渡
  $(".oz").bind("click touch", function () {
    //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    }, 500);
  });
});