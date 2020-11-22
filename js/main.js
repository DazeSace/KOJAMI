//smooth scroll function
$(function(){
    trans("en")
});
$(function () {
    $('a[href*=\\#]:not([href=\\#])').on('click', function () {
        var slide
        if (screen.width < 1028){
            slide = 150
        }
        else{
            slide = 95
        }
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - slide
            }, 1500);
            return false;
        }
    });
});
//arrays with sections
var navBoxes = ["navHomeBox", "navAboutUsBox", "navOfferBox", "navWhySerbBox", "navContactBox", "navPossibilitiesBox","navPartnerBox"];
var navElements = ["navHome", "navAboutUs", "navOffer", "navWhySerb", "navContact", "navPossibilities", "navPartner"];

//check if section is in viewport
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
//navbarElement "Home" On Start selected
$(function() {
    $("#"+navBoxes[0]).addClass("bg-kojami-blue").addClass("whiteNavbarLinks")
});
//Slideshow
$(document).ready(function(){
    $('.slideshow').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        fade: true,
        arrows: false,
        pauseOnHover: false
    });
});
//switch the selected navbarElement
$(window).on('resize scroll', function () {
    if ($('#home').isInViewport()) {
        document.getElementById(navBoxes[0]).classList.add("bg-kojami-blue");
        document.getElementById(navBoxes[0]).classList.add("whiteNavbarLinks");
    } else {
        document.getElementById(navBoxes[0]).classList.remove("bg-kojami-blue");
        document.getElementById(navBoxes[0]).classList.remove("whiteNavbarLinks");            }
    if ($('#aboutUs').isInViewport()) {
        document.getElementById(navBoxes[1]).classList.add("bg-kojami-blue");
        document.getElementById(navElements[1]).classList.add("whiteNavbarLinks");
    } else {
        document.getElementById(navBoxes[1]).classList.remove("bg-kojami-blue");
        document.getElementById(navElements[1]).classList.remove("whiteNavbarLinks");
    }
    if ($('#offer').isInViewport()) {
        document.getElementById(navBoxes[2]).classList.add("bg-kojami-blue");
        document.getElementById(navElements[2]).classList.add("whiteNavbarLinks");
    } else {
        document.getElementById(navBoxes[2]).classList.remove("bg-kojami-blue");
        document.getElementById(navElements[2]).classList.remove("whiteNavbarLinks");
    }
    if ($('#whySerb').isInViewport()) {
        document.getElementById(navBoxes[3]).classList.add("bg-kojami-blue");
        document.getElementById(navElements[3]).classList.add("whiteNavbarLinks");
    } else {
        document.getElementById(navBoxes[3]).classList.remove("bg-kojami-blue");
        document.getElementById(navElements[3]).classList.remove("whiteNavbarLinks");
    }
    if ($('#contact').isInViewport()) {
        document.getElementById(navBoxes[4]).classList.add("bg-kojami-blue");
        document.getElementById(navElements[4]).classList.add("whiteNavbarLinks");
    } else {
        document.getElementById(navBoxes[4]).classList.remove("bg-kojami-blue");
        document.getElementById(navElements[4]).classList.remove("whiteNavbarLinks");
    }
    if ($('#possibilities').isInViewport()) {
        document.getElementById(navBoxes[5]).classList.add("bg-kojami-blue");
        document.getElementById(navElements[5]).classList.add("whiteNavbarLinks");
    } else {
        document.getElementById(navBoxes[5]).classList.remove("bg-kojami-blue");
        document.getElementById(navElements[5]).classList.remove("whiteNavbarLinks");
    }
    if ($('#partner').isInViewport()) {
        document.getElementById(navBoxes[6]).classList.add("bg-kojami-blue");
        document.getElementById(navElements[6]).classList.add("whiteNavbarLinks");
    } else {
        document.getElementById(navBoxes[6]).classList.remove("bg-kojami-blue");
        document.getElementById(navElements[6]).classList.remove("whiteNavbarLinks");
    }
});
//expand languageBox
function expandLangs(){
    $('#langBox').addClass("flex").removeClass("hidden")
}
//pack up languageBox
function packupLangs(){
    $('#langBox').addClass("hidden").removeClass("flex")
}
//toggle languageBox
var expand = false
function toggleLangs(){
    if (expand === false){
        expandLangs()
        expand = true
    }
    else{
        packupLangs()
        expand = false
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}