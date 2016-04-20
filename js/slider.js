$(document).ready(function() {

    // menu control css
    $('#slider-control').hover(function() {
        $(this).children().each(function() {
            $(this).css('background-color', '#FFFFFF');
        });
    }, function() {
        $(this).children().each(function() {
            $(this).css('background-color', '#CCCCCC');
        });
    });

    // menu move
    $('#slider-control').click(function() {
        var content = $('#content');
        var p = content.css('left');

        if (p == '300px') {
            content.animate({ left: "0px" }, 500);
        } else {
            content.animate({ left: "300px" }, 500);
        }
    });

});
