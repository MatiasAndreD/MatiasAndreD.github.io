$('.custom-btn__background').on('click', function() {
    $('.custom-container').toggleClass('color');
    $('.custom-btn__background').toggleClass('color');
    $('.custom-sun-box').toggleClass('move');
    $('.custom-moon-box').toggleClass('move');
    
    $('.custom-btn__face').toggleClass('move');
    $('.custom-btn__eye-left, .custom-btn__eye-right').toggleClass(function(){
      return $(this).is('.open, .close') ? 'open close' : 'close';
    });
    $('.custom-btn__mouth').toggleClass('close');
    
    $('.custom-btn__animation').toggleClass(function(){
      return $(this).is('.move-reverse, .move') ? 'move-reverse move' : 'move';
    });
  });
  