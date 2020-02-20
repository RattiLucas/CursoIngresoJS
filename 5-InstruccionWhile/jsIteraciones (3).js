function mostrar()
{

var clave = prompt("Ingrese el número clave.");
var tryCount = 0;

while (clave != "utn750" && tryCount != 2){
    tryCount+=1
    clave = prompt("Clave erronea, intente de nuevo.")
}

if(tryCount == 2){
    alert("Has agotado todos tus intentos.");
}else {
    alert("Bienvenido.");
}
    
}//FIN DE LA FUNCIÓN
