$(function(){
  $(window).on("load",function(){
    $(".preloader").delay(1000).fadeOut(500)
  })

  $(window).scroll(function(){
    var scrolling = $(window).scrollTop()
    if(scrolling > 50){
      $(".main_bg").addClass("nav_bg")
    }else{
      $(".main_bg").removeClass("nav_bg")
    }


    if(scrolling > 30){
      $(".back_2_top").fadeIn(500)
    }else{
      $(".back_2_top").fadeOut(500)
    }
  })

  $(".back_2_top").click(function(){
    $('html, body').animate({
      scrollTop:0
    }, 2000)
  })

    $('.banner_main').slick({
        
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        speed:2000,
        nextArrow:".next",
        prevArrow:".prev",
        dots:true
      });

      $('.screenshots_inner').slick({
        
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        centerMode:true,
        centerPadding:"0px"
      });

      new VenoBox({
        selector: ".my-video-links"
    });

    $('.feed_text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.feed_img'
    });
    $('.feed_img').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.feed_text',
      dots: true,
      centerMode: true,
      centerPadding:"0px",
      arrows: false,
      focusOnSelect: true
    });
})