/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    resultado = precioUno + precioDos + precioTres;

    alert(resultado);
}
function Promedio() 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    resultado = (precioUno + precioDos + precioTres) / 3;

    alert(resultado.toFixed(2));
}

function PrecioFinal() 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var porcentaje
    var resultado;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);
    
    porcentaje = (precioUno + precioDos + precioTres) * 21 / 100
    resultado = precioUno + precioDos + precioTres + porcentaje;

    alert(resultado.toFixed(2));	
}