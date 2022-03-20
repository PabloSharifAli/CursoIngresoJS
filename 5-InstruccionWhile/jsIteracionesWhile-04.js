/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un número entero entre 0 y 9 inclusive.");
	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado < 0 || numeroIngresado > 9) 
	{
		numeroIngresado = prompt("Ingrese un número entero entre 0 y 9 inclusive.");
		numeroIngresado = parseInt(numeroIngresado);
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
}