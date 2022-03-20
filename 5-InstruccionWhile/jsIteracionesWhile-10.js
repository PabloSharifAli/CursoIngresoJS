/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var promedioPositivos;
	var promedioNegativos;
	var cantidadNumerosPares = 0;
	var diferencia;
	var flagCeros = 0;
	var flagPositivo = 0;
	var flagNegativo = 0;
	var flagPares = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado == 0)
		{
			cantidadCeros++; // punto 5
			flagCeros = 1;
		}
		else if (numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado; // punto 1
			cantidadNegativos++; // punto 4
			flagNegativo = 1;
		}
		else
		{
			sumaPositivos = sumaPositivos + numeroIngresado; // punto 2
			cantidadPositivos++; // punto 3
			flagPositivo = 1;
		}

		if (numeroIngresado % 2 == 0)
		{
			cantidadNumerosPares++; // punto 6
			flagPares = 1;
		}

		respuesta = prompt("¿Quiere ingresar otro número? (s/n)").toLowerCase();
	} while (respuesta == "s");
		
	promedioPositivos = sumaPositivos / cantidadPositivos; // punto 7
	
	promedioNegativos = sumaNegativos / cantidadNegativos; // punto 8
	
	diferencia = sumaPositivos - sumaNegativos; // punto 9
	
	if (flagCeros == 1)
	{
		document.write("La cantidad de ceros es: " + cantidadCeros + "<br>");
	}
	if (flagPositivo == 1)
	{
		document.write("La cantidad de números positivos es: " + cantidadPositivos + "<br>");
		document.write("La suma de los positivos es: " + sumaPositivos + "<br>");
		document.write("El promedio de los positivos es: " + promedioPositivos.toFixed(2) + "<br>");
	}
	if (flagNegativo == 1)
	{
		document.write("La cantidad de números negativos es: " + cantidadNegativos + "<br>");
		document.write("La suma de los negativos es: " + sumaNegativos + "<br>");
		document.write("El promedio de los negativos es: "  + promedioNegativos.toFixed(2) + "<br>");
	}
	if (flagPositivo == 1 && flagNegativo == 1)
	{
		document.write("La diferencia entre positivos y negativos es: " + diferencia + "<br>");
	}
	if (flagPares == 1)
	{
		document.write("La cantidad de números pares es: " + cantidadNumerosPares + "<br>");
	}
}