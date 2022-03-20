function mostrar()
{
	var numeroIngresado
	var contador = 0;
	var acumulador = 0;
	var promedio;

	do 
	{
		numeroIngresado = prompt("Ingrese un número entero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador ++;
			
	} while (contador < 5);

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = contador;
	document.getElementById("txtIdPromedio").value = promedio;
}