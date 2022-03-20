/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = (largo + ancho) * 2;
    alambre = perimetro * 3;

    alert(`comprar ${alambre.toFixed(2)} de alambre`);
}

function Circulo() 
{
	var radio;
    var perimetro;
    var alambre;
    const PI = Math.PI;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    
    perimetro = 2 * PI * radio;
    alambre = perimetro * 3;

    alert(`comprar ${alambre.toFixed(2)} de alambre`);
}

function Materiales() 
{
	var largo;
    var ancho;
    var area;
    var bolsasCal;
    var bolsasCemento;
    const METRO_DE_CAL = 3;
    const METRO_DE_CEMENTO = 2;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = largo * ancho;
    bolsasCal = area * METRO_DE_CAL;
    bolsasCemento = area * METRO_DE_CEMENTO;

    alert(`Para su terreno se necesitan ${Math.ceil(bolsasCal)} bolsas de cal y ${Math.ceil(bolsasCemento)} bolsas de cemento`);
}