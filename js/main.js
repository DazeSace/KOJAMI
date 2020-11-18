//smooth scroll function
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
};
//pack up languageBox
function packupLangs(){
    $('#langBox').addClass("hidden").removeClass("flex")
};
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
//set Language
const langIds = [
    "navHomeText", "navAboutUsText", "navPossibilitiesText", "navWhySerbiaText", "navOfferText", "navContactText", "navPartnersText",
    "navSlideHomeText", "navSlideAboutUsText", "navSlidePossibilitiesText", "navSlideWhySerbiaText", "navSlideOfferText", "navSlideContactText", "navSlidePartnersText",
    "aboutUs","aboutUs",
    "possibilitiesHead", "possibilitiesSub",
    "mobileTile1", "mobileTile2", "mobileTile3", "mobileTile4", "mobileTile5", "mobileTile6",
    "desktopTile1", "desktopTile2", "desktopTile3", "desktopTile4", "desktopTile5", "desktopTile6",
    "whySerb",
    "location", "location1", "location2",
    "freeTrade", "freeTrade1", "freeTrade2",
    "costSavings",
    "arrow",
    "contact", "contact1", "contact2",
    "contactCard1Line1", "contactCard1Line2", "contactCard2Line1", "contactCard2Line2", "contactCard3", "contactCard4",
    "partner",
    "footer"
]
function setLanguage(lang){
    packupLangs()
    if(lang === "cn"){
        for (i = 0; i <= langIds.length; i++){
            $("#"+langIds[i]+"De").addClass("hidden").removeClass("block")
            $("#"+langIds[i]+"Ru").addClass("hidden").removeClass("block")
            $("#"+langIds[i]+"En").addClass("hidden").removeClass("block")
            $("#"+langIds[i]+"Ir").addClass("hidden").removeClass("block")
            $("#"+langIds[i]+"Rs").addClass("hidden").removeClass("block")
            $("#"+langIds[i]+"Cn").addClass("block").removeClass("hidden")
        }
    }
    if(lang === "de"){
        for (id = 0; id <= langIds.length; id++){
            $("#"+langIds[id]+"Cn").addClass("hidden").removeClass("block")
            $("#"+langIds[id]+"Ru").addClass("hidden").removeClass("block")
            $("#"+langIds[id]+"En").addClass("hidden").removeClass("block")
            $("#"+langIds[id]+"Ir").addClass("hidden").removeClass("block")
            $("#"+langIds[id]+"Rs").addClass("hidden").removeClass("block")
            $("#"+langIds[id]+"De").addClass("block").removeClass("hidden")
        }
    }
    if(lang === "en"){
        for (ic = 0; ic <= langIds.length; ic++){
            $("#"+langIds[ic]+"Cn").addClass("hidden").removeClass("block")
            $("#"+langIds[ic]+"De").addClass("hidden").removeClass("block")
            $("#"+langIds[ic]+"Ru").addClass("hidden").removeClass("block")
            $("#"+langIds[ic]+"Ir").addClass("hidden").removeClass("block")
            $("#"+langIds[ic]+"Rs").addClass("hidden").removeClass("block")
            $("#"+langIds[ic]+"En").addClass("block").removeClass("hidden")
        }
    }
    if(lang === "rs"){
        for (is = 0; is <= langIds.length; is++){
            $("#"+langIds[is]+"Cn").addClass("hidden").removeClass("block")
            $("#"+langIds[is]+"De").addClass("hidden").removeClass("block")
            $("#"+langIds[is]+"En").addClass("hidden").removeClass("block")
            $("#"+langIds[is]+"Ir").addClass("hidden").removeClass("block")
            $("#"+langIds[is]+"Ru").addClass("hidden").removeClass("block")
            $("#"+langIds[is]+"Rs").addClass("block").removeClass("hidden")
        }
    }
    if(lang === "ru"){
        for (ir = 0; ir <= langIds.length; ir++){
            $("#"+langIds[ir]+"Cn").addClass("hidden").removeClass("block")
            $("#"+langIds[ir]+"De").addClass("hidden").removeClass("block")
            $("#"+langIds[ir]+"En").addClass("hidden").removeClass("block")
            $("#"+langIds[ir]+"Ir").addClass("hidden").removeClass("block")
            $("#"+langIds[ir]+"Rs").addClass("hidden").removeClass("block")
            $("#"+langIds[ir]+"Ru").addClass("block").removeClass("hidden")
        }
    }
    if(lang === "ir"){
        for (ii = 0; ii <= langIds.length; ii++){
            $("#"+langIds[ii]+"Cn").addClass("hidden").removeClass("block")
            $("#"+langIds[ii]+"De").addClass("hidden").removeClass("block")
            $("#"+langIds[ii]+"En").addClass("hidden").removeClass("block")
            $("#"+langIds[ii]+"Ru").addClass("hidden").removeClass("block")
            $("#"+langIds[ii]+"Rs").addClass("hidden").removeClass("block")
            $("#"+langIds[ii]+"Ir").addClass("block").removeClass("hidden")
        }
    }
}
//navSlide open and close functions
function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}