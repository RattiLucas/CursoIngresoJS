function mostrar()
{

	var contador = 0;
	var suma = 0;
	var producto = 1;
	var positivo = false;
	var respuesta = prompt("Quiere introducir un numero?(Por favor, responda con un si o no).");	
	
	while (respuesta == "si") {
		
		numeroIngresado = parseInt(prompt("Por favor, introduzca un numero"));		
		
		if(numeroIngresado>0) {
			positivo=true;
		}else{
			positivo=false;
		}
		if (isNaN(numeroIngresado)){
			alert("Por favor, solo introduzca numeros.")
			respuesta = prompt("Quiere seguir introducir otro numero?.");			
		}else{
			if (positivo){
				suma += numeroIngresado;
				contador += 1;
				respuesta = prompt("Quiere seguir introducir otro numero?.");
			}else{
				producto *= numeroIngresado;
				contador += 1;
				respuesta = prompt("Quiere seguir introducir otro numero?.");
			}
		}
	}

	document.getElementById('suma').value=suma;
	document.getElementById('producto').value=producto;

}//FIN DE LA FUNCIÓN