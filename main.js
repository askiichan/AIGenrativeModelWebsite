$(document).ready(function() {

    $("input.slider").on("input change", function(event) {
        var element = $(this).parents(".img-container");
        var pos = event.target.value;

        element.find(".before").css({width: pos + "%"});
        element.find(".slider-button").css({left: "calc(" + pos + "% - 18px)"});
    });

});