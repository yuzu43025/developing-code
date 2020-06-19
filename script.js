$(function(){

  $('.faq-list-item').click(function() {
  var $answer = $(this).find('.answer');
  if ($answer.hasClass('open')) {
    $answer.removeClass('open');
     $answer.slideUp();
     $(this).find('span')
     $('span').text('+');
  } else {
    $anser.addClass('open');
    $answer.slideDown();
    $(this).find('span')
    $('span').text('-');
  }
});


});
