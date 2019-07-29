var win = $(window).width();
console.log(win);
if (win >= 1600) {
    $(".profitable").css("padding","13.4rem 0 4.4rem");
}

//              СМЕНА ЯЗЫКА
$(".lang a").click(function (e) {
    e.preventDefault();
    if ($(".lang").hasClass("active")){
        $(".lang").removeClass("active");
        $(".change").css("display","none");
    } else {
        $(".lang").addClass("active");
        $(".change").css("display","block");
        $("label.ru").click(function () {
            $(".lang").removeClass("active");
            $("a.ru").css("display","block");
            $("a.en").css("display","none");
            $(".change").css("display","none");
        });
        $("label.en").click(function () {
            $(".lang").removeClass("active");
            $("a.en").css("display","block");
            $("a.ru").css("display","none");
            $(".change").css("display","none");
        });
    }
});


//              МОБИЛЬНОЕ МЕНЮ
$(".header__menu-mob").click(function () {
    $("body").css("overflow-y","hidden");
    $(".header__menu-nav").css("display","block");
});
$("li.close").click(function () {
    $("body").css("overflow-y","scroll");
    $(".header__menu-nav").css("display","none");
});


//              СЛАЙДЕР НА MAIN PAGE
$('.slider').owlCarousel({
    loop: true,
    dots: true,
    items: 1
});


//              КНОПКА СКРОЛА ВВЕРХ
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() !=0) {
            $('#toTop').fadeIn();
        }
        else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop:0},800)
    });
});


//              СЛАЙДЕР КОММЕНТАРИЕВ
$('.comments__block').owlCarousel({
    loop: true,
    responsive: {
        0: {
            dots: true,
            items: 1
        },
        768: {
            dots: false,
            nav: true,
            items: 2
        }
    }
});


//              БЫСТРЫЙ СКРОЛЛ К БЛОКУ WINDOWS
var $root = $('html, body');
$('a.toWindows').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });
    return false;
});

//              ВЫПАДАЮЩЕЕ МЕНЮ В HEADER
// $("a.forMenu").click(function (e) {
//     e.preventDefault();
//     if($("ul.subnav").hasClass("active")){
//         $("ul.subnav").removeClass("active");
//         $("ul.subnav").css("display","none");
//     }
//     else {
//         $("ul.subnav").addClass("active");
//         $("ul.subnav").css("display","block");
//     }
// });


//              АККОРДЕОН В DOMAIN-PAGE
$("body").on('click','.question__block-block .open', function () {
    if($("img", this).hasClass("rotate")) {
        $('.question__block-block .open img').removeClass("rotate");
    }
    else {
        $('.question__block-block .open img').removeClass("rotate");
        $("img", this).addClass("rotate");
    }
    $(".question__block-block .close").not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
});


//              УВЕЛИЧЕНИЕ И УМЕНЬШЕНИЕ В OTHER SOLUTION
$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});


//              СТИЛИЗАЦИЯ INPUT ПРИ КЛИКЕ
$(".sms__block table tr input").click(function () {
    $(".sms__block table tr input").removeClass("red");
    $(this).addClass("red");
});


//              ВЫБОР КАТЕГОРИИ FAQ
$("body").on("click",".categor", function () {
    if ($(this).hasClass("act")) {
        $(this).removeClass("act");
        $("span", this).css("display","none");
        $("p", this).css("color","#808080");
        $(this).css("border","1px solid transparent");
    }
    else {
        $(this).addClass("act");
        $("span", this).css("display","block");
        $("p", this).css("color","#0aaec2");
        $(this).css("border","1px solid #0aaec2");
    }
});

$(".categor.web-hosting").click(function () {
    if ($(".categor.web-hosting").hasClass("acti")) {
        $(this).removeClass("acti");
        $(".big__block.web-hosting").css("display","none");
    }
    else {
        $(this).addClass("acti");
        $(".big__block.web-hosting").css("display","block");
    }
});

$(".categor.site-protection").click(function () {
    if ($(".categor.site-protection").hasClass("acti")) {
        $(this).removeClass("acti");
        $(".big__block.site-protection").css("display","none");
    }
    else {
        $(this).addClass("acti");
        $(".big__block.site-protection").css("display","block");
    }
});

$(".categor.domain-registration").click(function () {
    if ($(".categor.domain-registration").hasClass("acti")) {
        $(this).removeClass("acti");
        $(".big__block.domain-registration").css("display","none");
    }
    else {
        $(this).addClass("acti");
        $(".big__block.domain-registration").css("display","block");
    }
});


//              АККОРДЕОН В FAQ
$(document).ready(function () {
    $("figure span").addClass("pluss");
    $("body").on('click', '.big__block figure', function (e) {
        var figure = $(this);
        $('.big__block figure span').removeClass("minuss").addClass("pluss");
        if (figure.hasClass("active")) {
            figure.removeClass("active");
            $("span", this).removeClass("minuss").addClass("pluss");
        } else {
            $('figure').removeClass("active");
            figure.addClass("active");
            $("span", this).removeClass("pluss").addClass("minuss");
        }
        $(".big__block-block").not($(this).next()).slideUp(400);
        $(this).next().slideToggle(400);
    });
});

$("body").on('click','.visible__block-open', function () {
    if($("img", this).hasClass("rotate")) {
        $('.visible__block-open img').removeClass("rotate");
    }
    else {
        $('.visible__block-open img').removeClass("rotate");
        $("img", this).addClass("rotate");
    }
    $(".visible__block-close").not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
});
