function mostrar()
{
	var i;
	var numero;
	var contadorPares = 0;

	numero = parseInt(prompt("Ingrese un numero"));

	for(i = 0; i <= numero; i++)
	{	
		if (i % 2 == 0 && i != 0)
		{
			contadorPares ++
			console.log(i);
		}
	}
	console.log(`Cantidad de números pares: ${contadorPares}`);
}