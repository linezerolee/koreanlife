$(function(){

  //테블릿 화면 메뉴 버튼 효과
   $(".menu_btn").click(function(){
    $(".gnb").addClass('open');
   })

   $(".close").click(function(){
    $(".gnb").removeClass('open');
   })

   //go_to_top 버튼 애니메이션 효과
   $(window).scroll(function(){
     if($(this).scrollTop() == 0){
       $(".go_to_top").removeClass("on")
     }else{
      $(".go_to_top").addClass("on")
     }
   });

   //submenu 효과
   console.log($(window).width())
   let windowWidth = $(window).width();
   function subMenu(){
     windowWidth = $(window).width();
     if( windowWidth < 1200 ){
       $(".subclick").each(function() {
         $(this).find(" > a").on("click", function() {
           $(".subclick").removeClass("active");
           $(this).parent(".subclick").addClass("active");
           return false;
         });
       });
     };
    };
    subMenu();
    $(window).resize(function(){
      subMenu();
    });

  //submenu 닫기 효과
    function gnbClose() {
      windowWidth = $(window).width();
      if( windowWidth > 1200 ){
        $(".gnb").removeClass('open');
      }
    }
    gnbClose();
    $(window).resize(function(){
      gnbClose();
    });
  
   //아코디언효과
   $('.acc_title').on('click', function () {

    if ($(this).hasClass('acc_on')) {
        slideUp();
    } else {
        slideUp();
        $(this).addClass('acc_on').next().slideDown();
    }
    function slideUp() {
        $('.acc_title').removeClass('acc_on').next().slideUp();
    };
});

});
