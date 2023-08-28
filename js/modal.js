(function ($) {

   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn();
   });

   $('.button_mini').on('click', function () {
      $('.overlay, #order').fadeIn();
   });

   $('.button_mini').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      });
   });
//close modal
   $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #order,thanks').fadeOut();
   });
   function validForm(form) {
      $(form).validate({
         rules: {
            name: 'required',
            phone: 'required',
            email: {
               required: 'true',
               email: 'true'
            }
         },
         messages: {
            name: "Пожалуйста, введите своё имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email :{
               required: "Пожалуйста, введите свою электронную почту",
               email: "Неправильно введен адрес почты"
            }
            
         }
   
      });
   };

   validForm('#consultation-form');
   validForm('#consultation form');
   validForm('#order form');
   $('input[name=phone]').mask('+7 (999) 999-99-99');
})(jQuery);

