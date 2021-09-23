$(function(){
  $('#topul li').click(function(){
    $(this).addClass('on').siblings().removeClass('on')
  });
});
