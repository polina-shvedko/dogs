$(function(){var o=$(".menu").find("i"),n=$(".mobile-navigation").find(".navigation"),a=$(".dropdown-link");function t(){var o=$(".lightbox");o&&o.toggle(100)}o.on("click",function(o){n.toggle(300),$(this).hasClass("fa-bars")?($(this).removeClass("fa-bars"),$(this).addClass("fa-times")):($(this).addClass("fa-bars"),$(this).removeClass("fa-times"))}),a.on("click",function(o){var n=$(this).parent().find("ul.dropdown"),a=$(this).find("i");n&&a&&(n.toggle(300),$(a).hasClass("fa-chevron-right")?($(a).removeClass("fa-chevron-right"),$(a).addClass("fa-chevron-down")):($(a).addClass("fa-chevron-right"),$(a).removeClass("fa-chevron-down")))}),$("#zuruek").on("click",function(o){$([document.documentElement,document.body]).animate({scrollTop:$(".logo").offset().top-32},500)}),$(".mobile-contact").find(".fa-envelope-open").on("click",function(o){$(".contact-form").fadeIn(300),t()}),$(".contact-form").find(".fa-times").on("click",function(o){$(".contact-form").fadeOut(300),t()}),$(document).keyup(function(o){"Escape"===o.key&&($(".contact-form").fadeOut(300),t())}),$(window).on("scroll",function(){var o=$(".banner-container");320<=$(window).scrollTop()?o.css({opacity:.5}).addClass("fixed").animate({opacity:1},500):o.css({opacity:.5}).removeClass("fixed").animate({opacity:1},500)})});