/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var i

	claveIngresada = prompt("Ingrese la clave");

	i = claveIngresada;

	//var i = claveIngresada;
	//No estaba seguro de si debía declarar la variable acá y asignarle el valor, 
	//o declararla arriba, junto a la otra, y asignarle el valor después.

	while (i == "utn750")
	{
		alert("Clave correcta");
		i = i + "x"; //No sé si hay alguna convención para cuando son strings, así que solo hice esto	
	}
}
