$(".nav-link").click(function(e) {
    var activeLink = $(e.target.parentNode);
    e.preventDefault();
    $(".nav-item").removeClass("active");
    activeLink.addClass("active");
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top - 90},'slow');
});

window.onscroll = function() {
    var header = document.getElementById('header');
    $('#navbarNav').removeClass('show');
    $('.navbar-toggler').addClass('collapsed');
    if (window.pageYOffset > 90) {
        header.style.cssText="background-color: black;";
    }
    else {
        header.style.cssText="background-color: none;";
    }
};
var wow = new WOW(
    {
        offset: 50       // distance to the element when triggering the animation (default is 0)
    }
);
wow.init();
