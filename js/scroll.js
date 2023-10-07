(function ($) {
   $(function () {
      $(window).scroll(function(){
         if ($(this).scrollTop() > 800) {
            $('.scroll-up').fadeIn();
         } else {
            $('.scroll-up').fadeOut();
         }
      });
      $("a[href^='#']").click(function(){
         const _href = $(this).attr("href");
         $("html, body").animate({scrollTop: $(_href).offset().top +"px"});
         return false;
      });
   });
})(jQuery);