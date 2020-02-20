var numeroIngresado;

function mostrar()
{

	var contador = 0;
	var respuesta = prompt("Quiere introducir un numero?(Por favor, responda con un si o no).");	
	var maximo = 0;
	var minimo = 0;
	var numeroIngresado;

	while (respuesta == "si") {
		
		numeroIngresado = parseInt(prompt("Por favor, introduzca un numero"));		

		if (isNaN(numeroIngresado)){
			alert("Por favor, solo introduzca numeros.")
			respuesta = prompt("Quiere seguir introducir otro numero?.");			
		}else{
			maximo = numeroMayor(numeroIngresado, maximo);
			minimo = numeroMenor(numeroIngresado, minimo);
			respuesta = prompt("Quiere seguir introducir otro numero?.");			
		}
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
	
}//FIN DE LA FUNCIÓN

function numeroMayor(numeroIngresado, maximo) {
	if (numeroIngresado > maximo){
		maximo = numeroIngresado;
	}
	return(maximo);
}


function numeroMenor(numeroIngresado, minimo) {
	if (numeroIngresado < minimo){
		minimo = numeroIngresado;
	}
	return(minimo);
}