$(function(){

  // banner slider 
  $('.banner_slider').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 8000,
    // arrows:false,
    // // cssEase: 'ease-in-out',
    // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    // // draggable: true,
    // // arrows: false,
    // // dots: true,
    // // fade: true,
    // // speed: 900,
    // // infinite: true,
    // // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    // // touchThreshold: 100
    draggable: true,
    arrows: false,
    dots: false,
    fade: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100
  });
  // review slider 
  $('.review_silder').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    prevArrow: 
    `  <svg class="slide-arrow prev-arrow fa fa-arrow-left " width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9584 9.14476C20.9584 9.47908 20.8256 9.79971 20.5892 10.0361C20.3528 10.2725 20.0321 10.4053 19.6978 10.4053H5.09312L10.5059 15.8156C10.6231 15.9328 10.7161 16.0719 10.7795 16.225C10.8429 16.3782 10.8756 16.5423 10.8756 16.708C10.8756 16.8738 10.8429 17.0379 10.7795 17.191C10.7161 17.3442 10.6231 17.4833 10.5059 17.6005C10.3887 17.7177 10.2496 17.8107 10.0964 17.8741C9.94331 17.9375 9.77919 17.9702 9.61344 17.9702C9.4477 17.9702 9.28357 17.9375 9.13044 17.8741C8.97731 17.8107 8.83817 17.7177 8.72097 17.6005L1.15769 10.0372C1.0403 9.92014 0.94716 9.78103 0.883612 9.62789C0.820064 9.47474 0.787354 9.31057 0.787354 9.14476C0.787354 8.97896 0.820064 8.81478 0.883612 8.66164C0.94716 8.50849 1.0403 8.36939 1.15769 8.25229L8.72097 0.689008C8.95767 0.452311 9.2787 0.319336 9.61344 0.319336C9.94818 0.319336 10.2692 0.452311 10.5059 0.689008C10.7426 0.925706 10.8756 1.24674 10.8756 1.58148C10.8756 1.91622 10.7426 2.23725 10.5059 2.47394L5.09312 7.88421H19.6978C20.0321 7.88421 20.3528 8.01702 20.5892 8.25342C20.8256 8.48982 20.9584 8.81044 20.9584 9.14476Z" fill="#1B1A19"/>
    </svg>`,
    nextArrow: 
    `
    <svg  class="slide-arrow next-arrow fa fa-arrow-right " width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.04175 9.14476C0.04175 9.47908 0.174557 9.79971 0.410955 10.0361C0.647354 10.2725 0.967979 10.4053 1.3023 10.4053H15.907L10.4942 15.8156C10.377 15.9328 10.284 16.0719 10.2206 16.225C10.1572 16.3782 10.1245 16.5423 10.1245 16.708C10.1245 16.8738 10.1572 17.0379 10.2206 17.191C10.284 17.3442 10.377 17.4833 10.4942 17.6005C10.6114 17.7177 10.7505 17.8107 10.9037 17.8741C11.0568 17.9375 11.2209 17.9702 11.3867 17.9702C11.5524 17.9702 11.7166 17.9375 11.8697 17.8741C12.0228 17.8107 12.1619 17.7177 12.2791 17.6005L19.8424 10.0372C19.9598 9.92014 20.053 9.78103 20.1165 9.62789C20.1801 9.47474 20.2128 9.31057 20.2128 9.14476C20.2128 8.97896 20.1801 8.81478 20.1165 8.66164C20.053 8.50849 19.9598 8.36939 19.8424 8.25229L12.2791 0.689008C12.0425 0.452311 11.7214 0.319336 11.3867 0.319336C11.0519 0.319336 10.7309 0.452311 10.4942 0.689008C10.2575 0.925706 10.1245 1.24674 10.1245 1.58148C10.1245 1.91622 10.2575 2.23725 10.4942 2.47394L15.907 7.88421H1.3023C0.967979 7.88421 0.647354 8.01702 0.410955 8.25342C0.174557 8.48982 0.04175 8.81044 0.04175 9.14476Z" fill="#1B1A19"/>
    </svg>`
    ,
    arrows:true,
    responsive:[{
      breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplaySpeed: 8000,
              dots: true,
              arrows:false,
            }
    }, {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,

            }
          }]

  });

  // Cafe menu slider

  // review slider

  function sliderInit(){
    $('.manu_slider_items').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });
  }
  sliderInit();













  // gall slider 
  $('.gal_silder_main').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    prevArrow: $('.glb'),
    nextArrow: $('.grb'),
    arrows:true,
    responsive:[{
      breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            }
    }, {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
      
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
      
            }
          }]
  });
  $('.slide22').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    prevArrow: $('.glb'),
    nextArrow: $('.grb'),
    arrows:true,
  });
  // for animiton 
  new WOW().init();
  // venobox
  $('.venobox').venobox(); 
  // venobox 2
  $('.venobox2').venobox();
  $(document).ready(function(){
    $('.venobox4').venobox();
  });
});

// ---- gallery icon click active 
// First we detect the click event
$('.fa-heart-o').click(function () {
  // Using an if statement to check the class
  if ($(this).hasClass('fa-heart-o')) {
   
   $(this).addClass('fa-heart');
   $(this).removeClass('fa-heart-o');
  }
});

// -----back to top btn----
var btn = $('.back_up_bnt');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body, #header_area').animate({scrollTop:0}, '500');
});


jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 600) {
      $('.gal_silder_main ').removeClass('slide22');
    } else if (ww >= 601) {
      $('.gal_silder_main ').addClass('slide22');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});



function valueChanged1() {
  if($('.coupon_question').is(":checked"))   
    $(".answer").show();
  else
    $(".answer").hide();
};

function valueChanged11() {
  if($('.coupon_question').is(":checked"))   
    $(".cdshow").show();
  else
    $(".cdshow").hide();
};

function valueChangedtwo() {
  if($('.coupon_question').is(":checked"))   
    $(".cdshowtwo").show();
  else
    $(".cdshowtwo").hide();
};

function valueChangedtin() {
  if($('.coupon_question').is(":checked"))   
    $(".cdshowtin").show();
  else
    $(".cdshowtin").hide();
};

function valueChangedcar() {
  if($('.coupon_question').is(":checked"))   
    $(".cdshowcar").show();
  else
    $(".cdshowcar").hide();
};



// Back to top

// ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 4000) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
    scrollTop : 0                       // Scroll to top of body
  }, 500);
});
