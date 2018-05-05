$(document).ready(function () {
    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        if(scrolled > 10){
            $('.icons').fadeOut();
        } else {
            $('.icons').fadeIn();
        }
        $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });

    // Display Recipe details
    // $.get("/api/recipe/1", function(data){
    // 	console.log(data);
    // });
});