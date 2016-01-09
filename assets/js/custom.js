// jQuery to Collapse Navbar on Scroll:
$(window).scroll(function () {
    if ($(".navbar").offset().top > 20) {
        $(".navbar-fixed-top").addClass("navbar-pad-original");
    } else {
        $(".navbar-fixed-top").removeClass("navbar-pad-original");
    }
});