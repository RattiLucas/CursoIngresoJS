/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var username;
	var edad;
	
		username = document.getElementById("elNombre").value;

		edad = document.getElementById("laEdad").value;

		alert("Wow, " + username + ", no parece que tuvieras " + edad + " años; usas crema para la piel?");
}

