(function() {
    $(document).ready(function() {
        $("#about-link").click(function () {
            $(this).find("#hidden-about").show("slow", function () {
                // Complete animation
            });
        });
    });
}());
