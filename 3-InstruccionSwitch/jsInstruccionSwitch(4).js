function mostrar()
{
//tomo el mes  
var mesDelAño = document.getElementById('mes').value;

var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Febrero":
            alert("Este mes tiene 28 o 29 dias, según si el año es bisiesto o no.")
            break;
        case "Abril":
            alert("Este mes tiene 30 dias.")
            break;           
        case "Junio":
            alert("Este mes tiene 30 dias.")
            break;
        case "Septiembre":
            alert("Este mes tiene 30 dias.")
            break;
        case "Noviembre":
            alert("Este mes tiene 30 dias.")
            break;
        default:
            alert("Este mes tiene 31 dias.")
            break;
    }


}//FIN DE LA FUNCIÓN