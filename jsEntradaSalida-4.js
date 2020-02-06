/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
    var username;
	
		username = prompt("Buenas, cómo te llamas?");

			document.getElementById("FormIngreso").innerHTML = "Hola, " + username;
}

