/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroIngresado;
	var respuesta;
	var maximo;
	var minimo;
	var flag = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(flag == 0 || numeroIngresado > maximo)
		{
			maximo = numeroIngresado;
		}
		
		if(flag == 0 || numeroIngresado < minimo)
		{
			minimo = numeroIngresado;
			flag = 1;
		}

		respuesta = prompt("¿Quiere ingresar otro número? (si/no)").toLowerCase();
		
	}while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = "Número máximo: " + maximo;
	document.getElementById("txtIdMinimo").value = "Número mínimo: " + minimo;
}