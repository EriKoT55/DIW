
$(document).ready(function () {

    //Seleccionar o deseleccionar cambiando el fondo
    $(".select").click(function (){

        if($(this).text()=="Deselect"){
            $(this).parent().parent().css("background-color","white"); 
            $(this).text("Select");
        }else{
            $(this).parent().parent().css("background-color","yellow"); 
            $(this).text("Deselect");
        }

    });

    //Eliminar la fila seleccionada
    $(".delete").click(function (){
        $(this).parent().parent().remove(); 
    });

    $(".update").click(function(){

        $("#insertButton").text("Update");

        let row = $(this).parent().parent().children();

        if($("#insertButton").text()=="Update"){
            
            $("#position")[0].setAttribute("value",row[0].innerHTML);
            
            $("#insertButton").click(function(){
                
                //row[0].text(valorPosition);
            
            });
        }
//        

        

    });




});


function SelectDeSelect(clase){
 

}


function Delete(clase){


}