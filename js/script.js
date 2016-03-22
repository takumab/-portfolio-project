$(document).ready(function(){
  
  
  //Bounce
  $(".takuma").addClass("animated bounce");   $('.welcome').hide().fadeIn(4650); 
  
  
  // about link
  $('#about').mouseover(function(){
    $(this).find('a').text('about');
  })
  .mouseout(function(){
    $(this).find('a').text('əˈbaʊt');
  })
  
  // Work link
  $('#work').mouseover(function(){
    $(this).find('a').text('work');
  })
  .mouseout(function(){
    $(this).find('a').text('wɜrk');
  })
  
  // Contact link
  $('#contact').mouseover(function(){
    $(this).find('a').text('contact');
  })
  .mouseout(function(){
    $(this).find('a').text('ˈkɑnˌtækt');
  })
  
  // Smooth scrolling
    var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function() {
            window.location.hash = href;
        });
        return false;
    });
 
}); // first doc.ready

$(document).ready(function(){
  $('.back-to-top').css({"display": "none"});
  var offset = 250; //describes when button will appear.
  var duration = 300; //arrow will appear in 300 milliseconds
  $(window).scroll(function(){
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
      $('.back-to-top').fadeOut(duration);
    }
  });
  

  
  $('.back-to-top').click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: 0}, duration);
    return false;
  })
  
}); // second doc.ready

