$(function(){
  $('#topul li .cmd a').click(function(){
    $('#topcmd').addClass('on');
    $('#topfree').removeClass('on');
  });
  $('#topul li .freeleas a').click(function(){
    $('#topfree').addClass('on');
    $('#topcmd').removeClass('on');
  });
  $('#mdul li .new a').click(function(){
    $('#mdnew').addClass('on');
    $('#mdhot').removeClass('on');
  });
  $('#mdul li .hot a').click(function(){
    $('#mdhot').addClass('on');
    $('#mdnew').removeClass('on');
  });
});
