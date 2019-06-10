$(function () {
    var menuIcon = $('.menu').find('i');
    var navigation = $('.navigation');
    var dropDownLink = $('.dropdown-link');

    menuIcon.on('click', function (event) {
        navigation.toggle(300);
    });

    dropDownLink.on('click', function (event) {
        var childDropdown = $(this).next('ul');
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
});