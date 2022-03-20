/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador = 0; 
	var acumulador = 0;
	var promedio;
	var respuesta = "si";


	do 
	{
		numeroIngresado = prompt("Ingrese un número entero.");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;	
		contador ++;	
		respuesta = prompt("¿Quiere agregar otro número? si/no").toLowerCase();
	} while (respuesta == "si");

	promedio = acumulador / contador;


	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}