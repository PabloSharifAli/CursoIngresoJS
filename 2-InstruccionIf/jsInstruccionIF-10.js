function mostrar()
{
var nota;
var mensaje = "";

nota = Math.floor(Math.random() * 10) + 1;

if(nota >= 9)
{
    mensaje = "Excelente";
}
else if(nota >= 4)
{
    mensaje = "Aprobó";
}
else
{
    mensaje = "Vamos, la proxima se puede";
}

alert(mensaje);
}