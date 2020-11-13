$(function(){
  

  let windowH
  let documentH 
  let documentW 
  let scrollTop
  let separate
  let scrollRatio

  $(window).on("scroll resize load",function(){
    windowH = $(this).height()
    documentH = $(document).height()
    documentW = $(document).width()
    scrollTop = $(this).scrollTop()
    scrollRatio = scrollTop/(documentH-windowH)
    
    separate = documentH / 3;
    
    
    console.log(windowH,documentH,scrollTop)

    $("#wave").css("background-position-x",scrollTop/10)
    $("#line").css("width",scrollRatio * documentW)

  })


  $("#btn01").on("click",function(){
    $("html, body").animate({scrollTop:0}, 1000, "swing");
  })

  $("#btn02").on("click",function(){
    $("html, body").animate({scrollTop:separate*1}, 1000, "swing");
  })

  $("#btn03").on("click",function(){
    $("html, body").animate({scrollTop:separate*2}, 1000, "swing");
  })


  $(".img_button").on("click",function(){
    let target = $(this).siblings(".content");
    target.slideToggle("slow");

    $("html, body").animate({scrollTop:target.offset().top}, "slow");
  })

  $(".close_button").on("click",function(){
    $(this).parent(".content").slideUp("slow");
  })

});