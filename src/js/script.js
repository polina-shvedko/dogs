$(function () {
    var menuIcon = $('.menu').find('i');
    var navigation = $('.navigation');
    var dropDownLink = $('.dropdown-link');

    menuIcon.on('click', function (event) {
        navigation.toggle(300);
    });

    dropDownLink.on('click', function (event) {
        var childDropdown = $(this).next('ul');

        if(childDropdown){
            childDropdown.toggle(300);
        }
    });
});