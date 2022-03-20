function mostrar() {
    const ESTADIA_BASE = 15000;
    var estacion;
    var localidad;
    var aumento = 0;
    var descuento = 0;
    var totalAumento;
    var totalDescuento;
    var finalAumento;
    var finalDescuento;
    var total;

    estacion = document.getElementById("txtIdEstacion").value;
    localidad = document.getElementById("txtIdDestino").value;
 
    switch (estacion) {
        case "Invierno":
            switch (localidad) {
                case "Bariloche":
                    aumento = 20;
                    break;
                case "Cataratas":
                case "Cordoba":
                    descuento = 10;
                    break;
                case "Mar del plata":
                    descuento = 20;
                    break;
            }
            break;
        case "Verano":
            switch (localidad) {
                case "Bariloche":
                    descuento = 20;
                    break;
                case "Cataratas":
                case "Cordoba":
                    aumento = 10;
                    break;
                case "Mar del plata":
                    aumento = 20;
                    break;
            }
            break;
        case "Otoño":
        case "Primavera":
            switch (localidad) {
                case "Bariloche":
                case "Cataratas":
                case "Mar del plata":
                    aumento = 10;
                    break;
                case "Cordoba":
                    aumento = 0;
                    break;
            }
    }
    switch (aumento) {
        case 0:
        case 10:
        case 20:
            total = ESTADIA_BASE + ESTADIA_BASE * aumento / 100;
            break;
    }
    switch (descuento) {
        case 10:
        case 20:
            total = ESTADIA_BASE - ESTADIA_BASE * descuento / 100;
            break;
    }
    alert("Precio final: $" + total);
}