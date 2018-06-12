$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});

$(document).ready(function(){

// Wow animation
// https://github.com/matthieua/WOW

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

// **

// Slider
// http://kenwheeler.github.io/slick/

$('.single-item').slick();
// **

});


//Media landscape

// var mql = window.matchMedia('all and (orientation:landscape) and (max-width : 768px)');
// if (mql.matches) {
//     var pixie = document.getElementById("pixie");
//     var landScapeSection = document.getElementById("landscape");

//     pixie.remove();

//     landScapeSection.insertBefore(pixie, landScapeSection.firstChild);
//     console.log(pixie,landScapeSection);
// } else {
//     console.log('Correct'); 
// }

$(window).resize(function(){
  window.setTimeout('location.reload()', 0);
  });
