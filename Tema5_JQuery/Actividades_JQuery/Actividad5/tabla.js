//Actualiza la fila elegida y cambia el boton de insert por update
$(document).ready(function () {
    $(document).on("click",".update",function () {
        $("#insertButton").text("Update");

        let row = $(this).parent().parent().children();

        if ($("#insertButton").text() == "Update") {

            $("#row")[0].setAttribute("value", row[0].innerHTML);
            $("#position")[0].setAttribute("value", row[0].innerHTML);
            $("#team")[0].setAttribute("value", row[1].innerHTML);
            $("#points")[0].setAttribute("value", row[2].innerHTML);

            let posRowID=$("#row").val();
            let posRowVAL=$("#position");
            $("#insertButton").click(function () {

                $("#position")[0].text(posRow.val());

            });
        }

    });

});

 //Seleccionar o deseleccionar cambiando el fondo
$(document).ready(function () {
    // ESTO ES PARA CAMBIAR EL ERROR EL CUAL HACE QUE NO FUCIONEN 
    // LOS BOTONES, si clico en select me hace la funcion
    // PONER ESTO EN EL RESTO DE BOTONES DE LA TABLA
    $(document).on("click",".select",function () {
        if ($(this).text() == "Deselect") {
            $(this).parent().parent().css("background-color", "white");
            $(this).text("Select");
        } else {
            $(this).parent().parent().css("background-color", "yellow");
            $(this).text("Deselect");
        }
    });
});

  //Eliminar la fila seleccionada
$(document).ready(function () {
    $(document).on("click",".delete",function () {
        $(this).parent().parent().remove();
    });
});


  //Insertar fila 
$(document).ready(function () {
    $("#insertButton").click(function () {
        if($("#insertButton").text() == "Insert"){



        }
    });
});


//Cancela, cambia el boton y borra los inputs
$(document).ready(function () {
    $("#cancelButton").click(function () {

        if ($("#insertButton").text() == "Update") {

            $("#insertButton").text("Insert");

            for (let i = 0; i < $("form").children("input").length; i++) {
                $("form").children("input")[i].setAttribute("value", "");
            }

        }

    });
});
