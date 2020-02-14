function mostrar()
{
//tomo la hora  
var laHora = document.getElementById('hora').value;

if (laHora >= 0 && laHora <=23) {
    switch (laHora) {
        case "7":
        case "8":
        case "9": 
        case "10":
        case "11":
            alert("Es de mañana")
            break;
        default:
            alert("No es de mañana.")
            break;
    }
}
else{
    alert("Por favor ingrese la hora en números y en formato de 0 a 23, sin minutos ni segundos.")
}

}//FIN DE LA FUNCIÓN