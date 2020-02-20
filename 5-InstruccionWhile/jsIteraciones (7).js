function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta = prompt("Quiere introducir un numero?(Por favor, responda con un si o no).");	
	var numeroIngresado;

	while (respuesta == "si") {

		numeroIngresado = parseInt(prompt("Por favor, introduzca un numero"));		
		
		if (isNaN(numeroIngresado)){
			alert("Por favor, solo introduzca numeros.")
			respuesta = prompt("Quiere seguir introducir otro numero?.");			
		}else{
			acumulador += numeroIngresado;
			contador += 1;
			respuesta = prompt("Quiere seguir introducir otro numero?.");
		}
	}
	
	if (contador != 0){		
		document.getElementById('promedio').value = acumulador/contador;
	}else {
		document.getElementById('promedio').value = 0;
	}

	document.getElementById('suma').value = acumulador;

}//FIN DE LA FUNCIÓN