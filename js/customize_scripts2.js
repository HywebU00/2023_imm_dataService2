//自訂JS
$(document).ready(function() {
    //mpBanner
    $('.mpBanner .Responsive_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // fade:true,
        autoplay:true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    

//service-list
$('.service-list .Responsive_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrow: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            arrows: true
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        }
    }]
});

//cp-photo
$('.cp-photo .Responsive_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrow: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            arrows: true
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true
        }
    }, {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        }
    }]
});

    //Syncing_slider

    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        // $('.controls').html(i + '/' + slick.slideCount);//把目前第幾張放進html裡
    });

    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.Slider-nav',
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,

    });
    $('.Slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
    });

    // 進入內容區
    $('a.goCenter').keydown(function(e) {
        if (e.which == 13) {
            $('#aC').focus(); /*#aC 是中間定位點的id*/
        }
    });

    // IE object fit
    // 判斷 useragnet
    var userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    ie = ieReg.test(userAgent);

    if (ie) {
        $(".mpBanner .img-container").each(function() {
            var imgUrl = $(this).children('a').children('img').attr('src');
            var $container = $(this);
            $(this).has(".cover").find('a').addClass("ie-object-cover");
            $(this).has(".cover").find('a').css("backgroundImage", "url(" + imgUrl + ")");
            $(this).has(".fill").find('a').addClass("ie-object-fill");
            $(this).has(".fill").find('a').css("backgroundImage", "url(" + imgUrl + ")");
            $(this).has(".contain").find('a').addClass("ie-object-contain");
            $(this).has(".contain").find('a').css("backgroundImage", "url(" + imgUrl + ")");
        });
    }

 //cp_slider
 $('.cp_slider').find('a').focus(function(e) {
  $(this).css('outline', '1px solid RED');
});

 $('.cp_slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  pauseOnFocus: true,
  focusOnSelect: true,
  accessibility: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
  }
}, {
    breakpoint: 600,
    settings: {
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 2
  }
}, {
    breakpoint: 480,
    settings: {
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1
  }
}]
});


//end
});