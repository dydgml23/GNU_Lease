$(function(){
  $('#topul li').click(function(){
    $(this).addClass('on').siblings().removeClass('on')
  });
  $('#mdul li').click(function(){
    $(this).addClass('on').siblings().removeClass('on')
  });
});
