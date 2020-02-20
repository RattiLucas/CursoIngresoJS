function mostrar()
{
	var acumulador=0;
	var numerosSolicitados = 0;	
	var numeroIngresado = parseInt(prompt("Por favor, introduzca un numero (" + numerosSolicitados + "/5)"));


	while (isNaN(numeroIngresado) || numerosSolicitados < 5) {
		numerosSolicitados += 1;
		numeroIngresado = parseInt(prompt("Por favor, introduzca un numero (" + numerosSolicitados + "/5)"));
		acumulador += numeroIngresado;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN