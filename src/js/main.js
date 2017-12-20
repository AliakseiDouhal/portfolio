$(".nav-link").click(function(e) {
    var activeLink = $(e.target.parentNode);
    e.preventDefault();
    $(".nav-item").removeClass("active");
    activeLink.addClass("active");
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});
