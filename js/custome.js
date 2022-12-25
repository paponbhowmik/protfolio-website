var nav = document.getElementById("nav");

function showMenu(){
    nav.style.right ="0";
}
function hideMenu(){
    nav.style.right ="-300px";
}

$('.testimonial-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
  });

  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// preloder js st
    var loder = document.getElementById("preloder");
    window.addEventListener("load", function(){
        loder.style.display = "none"
        $("#preloder").delay(6000).fadeOut("slow");
})
// preloder js end

// back to top button js st
var btn = $('.top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// back to top button js end

// scroll slide js end
window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for(var i = 0; i< reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('.active');
    }
  }
}
// scroll slide js end