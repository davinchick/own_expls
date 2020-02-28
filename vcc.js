// Burger- menu
$(document).ready(function () {

    $('.menu__icon').click(function (event) {
      $('.menu__icon, .menu__body').toggleClass('active');
      $('body').toggleClass('lock');
        event.preventDefault();
        }
    );


   //------------------ Слайдер фотографий
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:3,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:6000,
        pauseOnFocus:true,
        centerMode:true,
        responsive:[
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }],
        appendDots: $('.dots'),
    });

// Карусель----------------
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: ['<','>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });



// background effect---------- JQUERY
    $.each($('.ibg'), function (index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
        }
    });
    
ibg();
// // /JAVA SCRIPT/
// function ibg(){
//     document.querySelectorAll(".ibg").forEach(el => {
//         if(el.querySelector('img')){
//             el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
//         }
//     });
// }
// ibg();


});