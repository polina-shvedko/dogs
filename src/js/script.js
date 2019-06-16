$(window).on('load', function () {
    $('.preloader').fadeOut();
});


$(function () {
    var menuIcon = $('.menu').find('i');
    var navigation = $('.mobile-navigation').find('.navigation');
    var dropDownLink = $('.dropdown-link');

    function scrollTo(element) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(element).offset().top - 32
        }, 500);
    }

    menuIcon.on('click', function (event) {
        navigation.toggle(300);
        if($(this).hasClass('fa-bars')){
            scrollTo(".mobile-navigation");
            $(this).removeClass('fa-bars');
            $(this).addClass('fa-times');
        } else {
            $(this).addClass('fa-bars');
            $(this).removeClass('fa-times');
        }
    });

    dropDownLink.on('click', function (event) {
        var childDropdown = $(this).parent().find('ul.dropdown');
        var icon = $(this).find('i');

        if(childDropdown && icon){
            childDropdown.toggle(300);

            if($(icon).hasClass('fa-chevron-right')){
                $(icon).removeClass('fa-chevron-right');
                $(icon).addClass('fa-chevron-down');
            } else {
                $(icon).addClass('fa-chevron-right');
                $(icon).removeClass('fa-chevron-down');
            }
        }
    });

    var scrollTop = $("#zuruek");
    scrollTop.on("click", function (event) {
        scrollTo("header");
    });

    var envelope = $('.mobile-contact').find('.fa-envelope-open');

    envelope.on('click', function (event) {
        var modalForm = $('.contact-form');
        modalForm.fadeIn(300);
        toggleLightBox();
    });

    var closeModal = $('.contact-form').find('.fa-times');

    closeModal.on('click', function (event) {
        var modalForm = $('.contact-form');
        modalForm.fadeOut(300);
        toggleLightBox();
    });

    $(document).keyup(function(event) {
        if (event.key === "Escape") {
            var modalForm = $('.contact-form');
            modalForm.fadeOut(300);
            toggleLightBox();
        }
    });

    function toggleLightBox(){
        var lightBox = $('.lightbox-modal');

        if(lightBox){
            lightBox.toggle(100);
        }
    }

    $(window).on("scroll", function() {
        var header = $('.header-mobile');
        if($(window).scrollTop() >= 65){
            header.addClass('fixed');
            header.slideDown(300);
        } else {
            header.removeClass('fixed');
        }
    });
});