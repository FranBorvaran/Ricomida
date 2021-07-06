$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $("span").dblclick(function () {
        $(this).css({
            "color": "red",
        });
    });

    $("#boton1").click(function () {
        alert("El correo fue enviado correctamente")
    });

    $(".card-title").click(function () {
        $(".card-text").css("display", "none");
        //ocultar texto de card
    });

})