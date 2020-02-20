function mostrar()
{

var sexo = prompt("ingrese f ó m .");
var tryCount = 0;

while (sexo != "f" && sexo != "m" && tryCount != 3){
    tryCount += 1;
    sexo = prompt("Por favor, ingrese la inicial de su sexo");
}

if(tryCount == 3){
    alert("Has agotado todos tus intentos para demostrar algo de comprensión lectora...");
} else {
    document.getElementById('Sexo').value = sexo;
    alert("Gracias.");
}

}//FIN DE LA FUNCIÓN