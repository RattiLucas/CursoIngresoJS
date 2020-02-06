/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var numFinal

        num1 = document.getElementById("numeroUno").value;
        num2 = document.getElementById("numeroDos").value;
        
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        numFinal = num1 + num2;

        alert("El resultado de la suma de ambos numeros es " + numFinal);
}

function restar()
{
    var num1;
    var num2;
    var numFinal

        num1 = document.getElementById("numeroUno").value;
        num2 = document.getElementById("numeroDos").value;
        
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        numFinal = num1 - num2;

        alert("El resultado de la resta de ambos numeros es " + numFinal);
}

function multiplicar()
{ 
    var num1;
    var num2;
    var numFinal

        num1 = document.getElementById("numeroUno").value;
        num2 = document.getElementById("numeroDos").value;
        
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        numFinal = num1 * num2;

        alert("El resultado de la multiplicación de ambos numeros es " + numFinal);
}

function dividir()
{
    var num1;
    var num2;
    var numFinal

        num1 = document.getElementById("numeroUno").value;
        num2 = document.getElementById("numeroDos").value;
        
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        numFinal = num1 / num2;

        alert("El resultado de la división de ambos numeros es " + numFinal);
}

