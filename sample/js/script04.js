$(function(){
  

  let windowH
  let documentH 
  let documentW 
  let scrollTop
  let separate
  let scrollRatio

  $(window).on("scroll resize load",function(){
    windowH = $(this).height()//ウィンドウの高さ
    documentH = $(document).height()//内容の高さ
    documentW = $(document).width()//内容の幅
    scrollTop = $(this).scrollTop()//何ピクセルスクロールしたか
    scrollRatio = scrollTop/(documentH-windowH)//どれくらいスクロールされたか0から1
    
    separate = documentH / 3;//内容の高さを3分割した数値

    //３分割した数値とどれだけスクロールしたかを比較→bodyにクラスをつける。あとはCSSファイルでデザイン変更
    
    console.log(windowH,documentH,scrollTop)

    $("#wave").css("background-position-x",scrollTop/10)//右上の背景画像の位置変更(CSS)
    $("#line").css("width",scrollRatio * documentW)//グラデーションラインの幅変更(CSS)

  })

  //Menuボタンを押した時
  $("#btn01").on("click",function(){
    $("html, body").animate({scrollTop:0}, 1000, "swing");
  })

  $("#btn02").on("click",function(){
    $("html, body").animate({scrollTop:separate*1}, 1000, "swing");
  })

  $("#btn03").on("click",function(){
    $("html, body").animate({scrollTop:separate*2}, 1000, "swing");
  })



  //class="img_button"の要素をクリックした時、その要素の兄弟要素のclass="content"がスライドトグル表示/非表示される
  $(".img_button").on("click",function(){
    let target = $(this).siblings(".content");
    target.slideToggle("slow");

    $("html, body").animate({scrollTop:target.offset().top}, "slow");
  })

  //class="close_button"の要素をクリックした時、その要素の親要素のclass="content"がスライドアップ非表示される
  $(".close_button").on("click",function(){
    $(this).parent(".content").slideUp("slow");
  })

});