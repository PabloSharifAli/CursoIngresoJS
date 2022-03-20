function mostrar()
{
	var edad;
	var mensaje = ""; //ya declaramos que es un string por si más adelante hay que concatenarlo
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18)
	{
		mensaje = "Usted es mayor de edad";
	} 
	else if (edad >= 13 && edad <= 17)
	{
		mensaje = "Usted es adolesente";
	}
	else 
	{
		mensaje = "Usted es un niño";
	}

	alert(mensaje);
}