$(document).ready(function() {
    $(".menu-button").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        center: true,
        dots: true,
        responsiveClass:true,
        URLhashListener:true,
        responsive:{
            0:{
                items:2,
                center: true                
            },
            600:{
                items:4,
                center: true                
            },
            1000:{
                items:5,
                center: true
            }
        }
    })
    
});
