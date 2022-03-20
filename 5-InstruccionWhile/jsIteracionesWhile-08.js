/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var respuesta = "si";
	var sumaPositivo = 0;
	var multiplicacionNegativo = 1;
	var flag = 0;


	do 
	{
		numeroIngresado = prompt("Ingrese un número entero.");
		numeroIngresado = parseInt(numeroIngresado);		
		if (numeroIngresado >= 0)
		{
			sumaPositivo = sumaPositivo + numeroIngresado;
		}
		else
		{
			multiplicacionNegativo = multiplicacionNegativo * numeroIngresado;
			flag = 1;
		}
		respuesta = prompt("¿Quiere agregar otro número? si/no").toLowerCase();
	} while (respuesta == "si");

	if (flag == 0)
	{
		multiplicacionNegativo = 0;
	}

	document.getElementById("txtIdSuma").value = sumaPositivo;
	document.getElementById("txtIdProducto").value = multiplicacionNegativo;
}