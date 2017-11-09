$(document).ready(function () {

    $('li').click(function () {

        $('li').removeClass('current');
        $(this).toggleClass('current');
    });
});