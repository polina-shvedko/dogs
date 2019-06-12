$(function () {
    var menuIcon = $('.menu').find('i');
    var navigation = $('.mobile-navigation').find('.navigation');
    var dropDownLink = $('.dropdown-link');

    menuIcon.on('click', function (event) {
        navigation.toggle(300);
        if($(this).hasClass('fa-bars')){
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
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".logo").offset().top-32
        }, 500);
    });

    var envelope = $('.mobile-contact').find('.fa-envelope-open');

    envelope.on('click', function (event) {
        var modalForm = $('.contact-form');
        modalForm.fadeIn(300);
    });

    var closeModal = $('.contact-form').find('.fa-times');

    closeModal.on('click', function (event) {
        var modalForm = $('.contact-form');
        modalForm.fadeOut(300);
    });
});
