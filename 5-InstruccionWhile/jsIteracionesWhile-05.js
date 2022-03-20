/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	do
	{
		sexoIngresado = prompt("ingrese su sexo: f o m");
		sexoIngresado = sexoIngresado.toLowerCase();
	} while (sexoIngresado != "f" && sexoIngresado != "m");

	if (sexoIngresado == "f")
	{
		sexoIngresado = "Femenino";
	}
	else
	{
		"Masculino";
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}