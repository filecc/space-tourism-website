console.log(document.body.offsetWidth);

function openNav() {
    document.getElementById("sideNav").classList.remove("hidden");
}

function closeNav() {
    document.getElementById("sideNav").classList.add("hidden");
}

var speed = 'slow';

$('body').hide();


$(window).on("load", function () {
    $('body').fadeIn(speed, function () {
        $('a[href], button[href]').on("click", function (event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;

            $('body').fadeOut(speed, function () {
                window.location = url;
            });
        });
    });
});


$(function ($) {
    let url = window.location.href;

    if (url.split("/")[3] === "") {
        $('nav ul li a').each(function () {
            if (url.includes(this.href)) {
                $(this).addClass('active');
            }
        });
    } else {
        $('nav ul li a').each(function () {
            if (url.includes(this.href)) {
                $(this).addClass('active');
                $("#homeLink").removeClass('active');
            }
        });
    }
});

