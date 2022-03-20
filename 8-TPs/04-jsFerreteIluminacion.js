/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
   /* const PRECIO_POR_UNIDAD = 35;
    var cantidadLamparas;
    var marca;
    var subtotal
    var descuento
    var precioConDescuento;
    var impuesto;
    var importeFinal;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;


    if (cantidadLamparas >= 6) { // A
        subtotal = PRECIO_POR_UNIDAD * cantidadLamparas;
        descuento = subtotal * 50 / 100;
        precioConDescuento = subtotal - descuento;
    }
    else if (cantidadLamparas == 5) { // B
        if (marca == "ArgentinaLuz") {
            subtotal = PRECIO_POR_UNIDAD * cantidadLamparas;
            descuento = subtotal * 40 / 100;
            precioConDescuento = subtotal - descuento;
        } else {
            subtotal = PRECIO_POR_UNIDAD * cantidadLamparas;
            descuento = subtotal * 30 / 100;
            precioConDescuento = subtotal - descuento;
        }
    }
    else if (cantidadLamparas == 4) { // C
        if ((marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {
            subtotal = PRECIO_POR_UNIDAD * cantidadLamparas;
            descuento = subtotal * 25 / 100;
            precioConDescuento = subtotal - descuento;
        } else {
            subtotal = PRECIO_POR_UNIDAD * cantidadLamparas;
            descuento = subtotal * 20 / 100;
            precioConDescuento = subtotal - descuento;
        }
    }
    else if (cantidadLamparas == 3) { // D
        if (marca == "ArgentinaLuz") {
            subtotal = PRECIO_POR_UNIDAD * cantidadLamparas;
            descuento = subtotal * 15 / 100;
            precioConDescuento = subtotal - descuento;
        } else if (marca == "FelipeLamparas") {
            subtotal = PRECIO_POR_UNIDAD * cantidadLamparas;
            descuento = subtotal * 10 / 100;
            precioConDescuento = subtotal - descuento;
        } else {
            subtotal = PRECIO_POR_UNIDAD * cantidadLamparas;
            descuento = subtotal * 5 / 100;
            precioConDescuento = subtotal - descuento;
        }
    }
    else {
        subtotal = PRECIO_POR_UNIDAD * cantidadLamparas;
        descuento = subtotal * 0 / 100;
        precioConDescuento = subtotal - descuento
    }
    precioConDescuento = parseFloat(precioConDescuento); // E
    if (precioConDescuento > 120) {
        impuesto = precioConDescuento * 10 / 100;
        importeFinal = precioConDescuento + impuesto;
        alert("IIBB Usted pago " + impuesto);
    }
    else {
        importeFinal = precioConDescuento
    }

    document.getElementById("txtIdprecioDescuento").value = importeFinal.toFixed(2);
    */
    const PRECIO_POR_UNIDAD = 35;
    var cantidadLamparas;
    var totalLamparas;
    var marca;
    var descuento;
    var descuentoAplicado
    var precioConDescuento;
    var impuesto;
    var importeFinal;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;

    if (cantidadLamparas >= 6) // A
    {
        descuento = 50;
    }
    else
    {
        switch (cantidadLamparas) {
        
            case 5: // B
                if (marca == "ArgentinaLuz")
                {
                    descuento = 40;
                }
                else
                {
                    descuento = 30;
                }
                break;
            case 4: //C
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
                break;
            case 3: // D
                if (marca == "ArgentinaLuz")
                {
                    descuento = 15;
                }
                else if ( marca == "FelipeLamparas")
                {
                    descuento = 10;
                }
                else
                {
                    descuento = 5;
                }
                break;
            default:
                descuento = 0
                break;
        }
    }
    
    totalLamparas = PRECIO_POR_UNIDAD * cantidadLamparas;
    descuentoAplicado = totalLamparas * descuento / 100;
    precioConDescuento = totalLamparas - descuentoAplicado;

    if (precioConDescuento > 120) // E
    {
        impuesto = precioConDescuento * 10 / 100;
        importeFinal = precioConDescuento + impuesto;
        alert("IIBB Usted pago $" + impuesto);
    }
    else
    {
        importeFinal = precioConDescuento
    }

    document.getElementById("txtIdprecioDescuento").value = importeFinal.toFixed(2);
}