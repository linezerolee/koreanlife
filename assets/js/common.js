$(function(){
  //fullpage 
  $('#fullpage').fullpage({
    anchors:['section01','section02','section03','section04','section05'],
    autoScrolling : true,
    scrollHorizontally : true,
    verticalCentered : true,
    menu : '#fullpage_nav',
    fitToSection: true,
    fitToSectionDelay: 0,
    scrollBar: false,
  });
    
  //드롭다운 메뉴
  let $firstMenu = $('.gnb > li');
  let $header = $('#header');
  let $headerHeight = $header.outerHeight();

  $firstMenu.mouseenter(function(){
    let subHeight = $(this).find('ul').outerHeight();
    $header.stop();
    $header.animate({height : $headerHeight + subHeight + 'px'}, 500);
    $(this).find('ul').addClass('on');
  })
  .mouseleave(function(){
    $header.stop();
    $header.animate({height : $headerHeight + 'px'}, 300);
    $(this).find('ul').removeClass('on');
  });

  //sitemap toggle
  $(".top_sitemap").click(function(){
    if($("#sitemap").hasClass('open')){
        $("#sitemap").removeClass('open');
    }else {
        $("#sitemap").addClass('open');
    }
   });

   $(".sitemap_btn_close").click(function(){
    if($("#sitemap").hasClass('open')){
        $("#sitemap").removeClass('open');
    }else {
        $("#sitemap").addClass('open');
    }
   });


  //subpage menu 아코디언 효과
  const child = $("#subpage").find('.child');
    child.on('click', function(){
    if ($(this).hasClass('on')){
      slideUp();
    }else {
      slideUp();
      $(this).addClass('on').children('ul').slideDown();
    }
    function slideUp(){
      child.removeClass('on').children('ul').slideUp();
    }
  });

  

  //footer slide 
  const widthNum = 178;
  let caInMarginLeft = $("#carousel_inner").css("margin-left");

  // ul(슬라이드)의 개수 가져오기
  let ulLeng = $("#carousel_inner ul.column li").length;

  //슬라이드 총 너비를 계산
  $("#carousel_inner ul.column").css("width", widthNum*ulLeng );

  //슬라이드 포지션 초기화
  $("#carousel_inner ul.column li:last").prependTo("#carousel_inner ul.column");
  $("#carousel_inner").css("margin-left","-"+widthNum+"px");

  // prev button script
  $("#carousel_prev").on("click",function(){
    caInMarginLeft = $("#carousel_inner").css("margin-left");
    console.log(caInMarginLeft);
    if(!$("#carousel_inner").is(":animated")){// slide animation이 실행되지않을때 아래 코드를 실행
      $("#carousel_inner").animate({ marginLeft : parseInt(caInMarginLeft) + widthNum },1500,"easeInOutSine",function(){
        // animation 실행이 끝난 후 실행 영역
        $("#carousel_inner").css("margin-left","-"+widthNum+"px");
        $("#carousel_inner ul.column li:last").prependTo("#carousel_inner ul.column");
      });
    }
  });

  // next button script
  $("#carousel_next").on("click",function(){
    caInMarginLeft = $("#carousel_inner").css("margin-left");
    if(!$("#carousel_inner").is(":animated")){// slide animation이 실행되지않을때 아래 코드를 실행
      $("#carousel_inner").animate({ marginLeft : parseInt(caInMarginLeft) - widthNum },1500,"easeInOutSine",function(){
        // animation 실행이 끝난 후 실행 영역
        $("#carousel_inner").css("margin-left","-"+widthNum+"px");
        $("#carousel_inner ul.column li:first").appendTo("#carousel_inner ul.column");
      });
    }
  });

  // auto slide
  let timerId = setInterval(function(){
    $("#carousel_next").click();
  },3000);

  // clearInterval
  $("#carousel_wrap").mouseenter(function(){
    clearInterval(timerId);
  }).mouseleave(function(){
    timerId = setInterval(function(){
      $("#carousel_next").click();
    },3000);
  });



  	
});
