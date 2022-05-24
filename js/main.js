$(function(){
  /*inview*/
    $('.inview-show').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        $(this).stop().addClass('show');
      }
    });
    $('.inview-slide').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        $(this).stop().addClass('slide');
      }
    });
    $('.inview-in').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        $(this).stop().addClass('in');
      }
    });
    
  /*スムーススクロール*/
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });
});