$(document).ready(function() {
    $("#menu-button").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });
});
