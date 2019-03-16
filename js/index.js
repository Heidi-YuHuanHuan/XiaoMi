$(document).ready(function() {
    $(".topbar-minicart").mouseover(function(e) {
        $(".on").css('display', 'none');
        $(".onp").css('color', '#f60');
    }).mouseout(function(e) {
        $(".on").css('display', 'block');
        $(".onp").css('color', '#b0b0b0');
    });;

    $(".icon-search").mouseover(function(e) {
        $(this).css('background-color', ' #ff7f27');
        $(".on-search").css('display', 'none');
    }).mouseout(function(e) {
        $($(this)).css('background-color', '#fff');
        $(".on-search").css('display', 'block');
    });

    /*$("input").hover(function() {
        $(this).css('border-color', '#b0b0b0');
        $(".icon-search").css('border-color', '#b0b0b0');
    }, function() {
        $(this).css('border-color', '#e0e0e0');
        $(".icon-search").css('border-color', '#e0e0e0');
    });*/
/*-------------头部输入框提示字的功能-----------------*/
$("input").click(function(event) {
    event.stopPropagation();
    $(".keywordTable").show();
    $(this).css('border-color', '#f60');
    $(".icon-search").css('border-color', '#f60');
    $(".serach-hot-words").hide();
});
$(document).click(function(e) {
    var target=$(e.target);
    if(target.closest('.in-search').length!=0) return;
    $(".keywordTable").hide();
    $(".serach-hot-words").show();
    $(".in-search").css('border-color', '#e0e0e0');
    $(".icon-search").css('border-color', '#e0e0e0');
});
/*-------------头部隐藏框-----------------*/

$(".extend").hover(function() {
     $("#header-nav-menu").fadeIn();
});
/*$(".extend").on('mouseleave',function(event) {
    event.preventDefault();
    $("#header-nav-menu").fadeOut();
});*/
$("#header-nav-menu").hover(function(e) {
    $(this).fadeIn();
}, function() {
    $(this).fadeOut();

});
/*-------------site-category-Info-----------------*/
$("#site-category .category-item .info").each(function(){
        var $li = $(this).find("li");//获取到所有info下面的li
        var length =$li.length;//得到info下面所有li的数量
        var width = $li.width();//获取li的宽度
        var height = $li.height();//获取li的高度
        var col = Math.ceil(length/6);//向上取整
        $(this).width(col*width);
        $li.each(function(i){
            var x = Math.floor(i/6);//向下取整
            var y = i%6;//取余数
            $(this).css({
                left:x*width + "px",
                top:y*height + "px"
            });
        });
    });
    $("#site-category .category-item").hover(function(){
        $(this).find(".info").show();
    },function(){
        $(this).find(".info").hide();
    });
/*-----------------------------------轮播图前后切换图标鼠标经过背景---------------------*/
    $(".arrow-wrapper-prev").hover(function() {
        $(this).css('background-color', 'rgba(51, 51, 51, 0.7)');
    }, function() {
       $(this).css('background-color', 'transparent');
       $(".swiper-button-prev").css('color', '#fff');
    });
    $(".arrow-wrapper-next").hover(function() {
        $(this).css('background-color', 'rgba(51, 51, 51, 0.7)');
    }, function() {
       $(this).css('background-color', 'transparent');
    });

    $(".exposure-images1").hover(function() {
        $($(this)).css('display', 'none');
    }, function() {
        $($(this)).css('display', 'block');
    });
    $(".more").hover(function() {
        $(".more-image2").css('display', 'none');
        $(".more-text").css('color', '#ff5700');
    }, function() {
        $(".more-image2").css('display', 'block');
        $(".more-text").css('color', '#333');
    });
    $(".col-contact-box").hover(function() {
        $(this).css('background-color', '#ff5700');
        $(".col-contact-image1").css('display', 'none');
        $(".col-contact-text").css('color', '#fff');
    }, function() {
        $(this).css('background-color', '#fff');
        $(".col-contact-image1").css('display', 'block');
        $(".col-contact-text").css('color', '#ff5700');
    });


});


/*--------------------------------------------swiper插件-----------------------------------------------*/
$(document).ready(function() {
    var mySwiper = new Swiper('.swiper-container',{
        autoplay:{
          stopOnLastSilde:false,
          disableOnInteraction:false,
        },
        effect:"fade",

        pagination: {
          el: '.swiper-pagination',
          bulletElement:"li",
          clickable:true,

        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },

});
mySwiper.el.onmouseover=function(){
    mySwiper.navigation.$prevEl.removeClass('hide');
    mySwiper.navigation.$nextEl.removeClass('hide');
}




});