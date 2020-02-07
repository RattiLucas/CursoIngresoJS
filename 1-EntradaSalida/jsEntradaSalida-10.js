/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var num1;
    var numFinal;

        num1 = document.getElementById("importe").value;
        num1 = parseInt(num1);

        if (isNaN(num1) == true){
            alert("Escribe un número, genio");
            document.getElementById("importe").value = "";
        } else {
            numFinal = num1 - num1*0.25;
            //numFinal = num1 - num1*25/100;
            //numFinal = num1 - num1*.25;
            document.getElementById("resultado").value = numFinal;
        }       
}
