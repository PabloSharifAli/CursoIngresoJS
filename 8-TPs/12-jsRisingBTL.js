/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroDeLegajo;
	var nacionalidad;

	do // punto A
	{
		edadIngresada = prompt("Ingrese su edad (18 a 90)");
		edadIngresada = parseInt(edadIngresada);

	} while (edadIngresada < 17 || edadIngresada > 90);

	do // punto B
	{
		sexoIngresado = prompt("Ingrese su sexo (M/F)").toUpperCase();	
	} while (sexoIngresado != "M" && sexoIngresado != "F");

	do // punto C
	{
		estadoCivilIngresado = prompt("Ingrese su estado civil:\n1 para soltero\n 2 para casado\n 3 para divorciado\n 4 para viudo");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	} while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4);

	do // punto D
	{
		sueldoBruto = prompt("Ingrese su sueldo bruto; debe ser mayor a 8000");
		sueldoBruto = parseInt(sueldoBruto);
	} while (sueldoBruto < 8000);

	do // punto E 
	{
		numeroDeLegajo = prompt("Ingrese su número de legajo (1000 a 9999)");
		numeroDeLegajo = parseInt(numeroDeLegajo);
	} while (numeroDeLegajo < 1000 || numeroDeLegajo > 9999);

	do // punto F 
	{
		nacionalidad = prompt("Ingrese su nacionalidad:\n A para argentino\n E para extranjero\n N para nacionalizado").toUpperCase();
	} while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N");
	
	if(sexoIngresado == "F")
	{
		sexoIngresado = "Femenino";
	}
	else
	{
		sexoIngresado = "Masculino";
	}

	switch (estadoCivilIngresado) 
	{
		case 1:
			estadoCivilIngresado = "Soltero";
			break;
		case 2:
			estadoCivilIngresado = "Casado";
			break;
		case 3:
			estadoCivilIngresado = "Divorciado";
			break;
		case 4:
			estadoCivilIngresado = "Viudo";
			break;
	}

	switch (nacionalidad) {
		case "A":
			nacionalidad = "Argentino";
			break;
		case "E":
			nacionalidad = "Extranjero";
			break;
		case "N":
			nacionalidad = "Nacionalizado";
			break;
	}
	
	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numeroDeLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
