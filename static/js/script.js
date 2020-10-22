//메인 배경이미지 랜덤
$(document).ready(function () {

  var numberOfImages = 16;

  var imageNum = Math.round(Math.random() * (numberOfImages - 1)) + 1;

  var imgPath = ('img/module_bg' + imageNum + '.png');

  $('.image').css('background-image', ('url("' + imgPath + '")'));

});


