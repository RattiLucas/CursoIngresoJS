/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var num1;
    var num2;
    var numFinal

        num1 = document.getElementById("numeroDividendo").value;
        num2 = document.getElementById("numeroDivisor").value;
        
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        numFinal = num1 % num2;


        console.log(numFinal);


        alert("El resto de la división entre ambos numeros es " + numFinal);
}
