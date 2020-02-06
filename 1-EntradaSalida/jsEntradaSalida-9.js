/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var num1;
    var numFinal

        num1 = document.getElementById("sueldo").value;
        
        num1 = parseInt(num1);

        numFinal = num1 + num1*10/100;

        console.log(numFinal);

        document.getElementById("resultado").value = numFinal;
}
