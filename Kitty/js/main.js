$(document).ready(function(){

  // $('.food').click(function(){
  //   $('.cat').css('width','200px');
  // });

  $('.food').click(function() {
    $(this).hide();
    $('.cat').animate({
      width: "+=50px",
    });

  });

  $('.cat').click(function() {
    $('.food').show();
    $('.cat').animate({
      width: "83px",
    });

  });






// .animate( properties [, duration ] [, easing ] [, complete ] )

  // $( "#clickme" ).click(function() {
  //   $( "#book" ).animate({
  //     opacity: 0.25,
  //     left: "+=50",
  //     height: "toggle"
  //   }, 5000, function() {
  //     // Animation complete.
  //   });
  // });

  // 1
  // 2
  // 3
  // $( window ).resize(function() {
  //   $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
  // });


});
