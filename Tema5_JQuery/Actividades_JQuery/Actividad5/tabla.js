//Actualiza la fila elegida y cambia el boton de insert por update
$(document).ready(function () {
    $(document).on("click", ".update", function () {
        $("#insertButton").text("Update");

        let row = $(this).parent().parent().children();

        if ($("#insertButton").text() == "Update") {

            $("#row").val(row[0].innerHTML);
            $("#position").val(row[0].innerHTML);
            $("#team").val(row[1].innerHTML);
            $("#points").val(row[2].innerHTML);

            let posRowID = $("#row").val();

            $("#insertButton").click(function () {

                let posRowVAL = $("#position").val();
                row[0].innerHTML = posRowVAL;

                let teamRowVAL = $("#team").val();
                row[1].innerHTML = teamRowVAL;

                let pointsRowVAL = $("#points").val();
                row[2].innerHTML = pointsRowVAL;

            });
        }

    });

});


//Seleccionar o deseleccionar cambiando el fondo
$(document).ready(function () {
    // ESTO ES PARA CAMBIAR EL ERROR EL CUAL HACE QUE NO FUCIONEN 
    // LOS BOTONES, si clico en select me hace la funcion
    $(document).on("click", ".select", function () {
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
    $(document).on("click", ".delete", function () {
        $(this).parent().parent().remove();
    });
});


//Insertar fila en la ultima posicion del Tbody
$(document).ready(function () {
    $("#insertButton").click(function () {
        let tBody = $("table").children();

        let posRowVAL = $("#position").val();

        let teamRowVAL = $("#team").val();

        let pointsRowVAL = $("#points").val();

        if ($("#insertButton").text() == "Insert") {

            tBody.append(`<tr>
            <td>${posRowVAL}</td>
            <td>${teamRowVAL}</td>
            <td>${pointsRowVAL}</td>
            <td>
                <button class="select">Select</button>
                <button class="delete">Delete</button>
                <button class="update">Update</button>
            </td>
            </tr>`);

        }
    });
});


//Cancela, cambia el boton y borra los inputs
$(document).ready(function () {
    $("#cancelButton").click(function () {

        if ($("#insertButton").text() == "Update") {

            $("#insertButton").text("Insert");

            $("input:text").val("");

        }

    });
});