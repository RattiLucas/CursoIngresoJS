function mostrar()
{

	var numero = parseInt(prompt("Ingrese un número entre 0 y 9."));	
	var tryCount = 0;

	while (isNaN(numero) || numero > 9 || numero < 0 && tryCount != 3){
		numero = parseInt(prompt("Por favor, ingrese un número entre 0 y 9."))
		tryCount += 1;	
	}

	if(tryCount == 3){
		alert("Has agotado todos tus intentos para demostrar algo de comprensión lectora...");
	}else {
		document.getElementById("Numero").value = numero;
		alert("Gracias.");
	}
	
}//FIN DE LA FUNCIÓN