function mostrar() {
    var estacion
    var locacion
    var mensaje

    estacion = document.getElementById("txtIdEstacion").value;
    locacion = document.getElementById("txtIdDestino").value;

    switch (estacion) {
        case "Invierno":
            switch (locacion) {
                case "Bariloche":
                    mensaje = "Se viaja";
                    break;

                default:
                    mensaje = "No se viaja";
                    break;
            }
            break;
        case "Verano":
            switch (locacion) {
                case "Mar del plata":
                case "Cataratas":
                    mensaje = "Se viaja";
                    break;
                default:
                    mensaje = "No se viaja";
                    break;
            }
            break;
        case "Otoño":
            switch (locacion) {
                case "Bariloche":
                case "Mar del plata":
                case "Cataratas":
                case "Cordoba":
                    mensaje = "Se viaja";
                    break;
            }
            break;
        case "Primavera":
            switch (locacion) {
                case "Mar del plata":
                case "Cataratas":
                case "Cordoba":
                    mensaje = "Se viaja";
                    break;
                default:
                    mensaje = "No se viaja";
                    break;
            }
            break;
    }
    alert(mensaje);
}