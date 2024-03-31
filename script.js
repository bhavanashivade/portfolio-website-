$(document).ready(function () {
    $('#menu').click(function () {

        $(this).toggleClass('fa-times'); y
        $('header').toggleClass('toggle');

    });


    $(window).on('scroll load', function () {


        $('#menu').removeClass('fa-times'); y
        $('header').removeClass('toggle');





    })





});