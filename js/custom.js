// ------- PRELOADER -------//
$(window).load(function(){
    $('.preloader').fadeOut("slow"); // set duration in brackets    
    // 设置一个延迟时间，单位为毫秒
    window.scrollTo(0, 0);
    var delayTime = 7000; // 7秒
    setTimeout(function() {
        // 执行跳转到指定 section 的操作
        // var home = document.getElementById('home');
        // // let url = "../images/stop.gif";
        // home.style.background = 'url(../images/stop.gif)';
        // $("#GameDiv").hide();
        $("#staticImage").show();
        // window.location.href = '#intro';
    }, delayTime);
});
$(document).ready(function() {
    // 页面加载完成后，将页面滚动到顶部
    window.scrollTo(0, 0);
  });
// var canvas = document.getElementById("home");
// var sections = document.querySelectorAll('.section');
// canvas.addEventListener('scroll', function() {
//   var scrollTop = window.scrollY;
//   var windowHeight = window.innerHeight;

//   // 如果滚动到 Canvas 以上，则滚动到第一个 section
//   if (scrollTop === 0) {
//     scrollToSection();
//   }
//   function scrollToSection() {
//     var section = document.getElementById("intro");
//     var y = section.offsetTop;
//     window.scrollTo({ top: y, behavior: 'smooth' });
//   }
// });

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

   // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.smoothScroll').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

  // --------- PORTFOLIO IMAGE ----- //
  $('#serivce a').nivoLightbox({
        effect: 'fadeScale',
    });

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- GOOGLE MAP ----- //
  // loadGoogleMap();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.3);
    // $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

});

