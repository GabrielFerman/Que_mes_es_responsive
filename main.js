function analizar_numero(){
    var numero_cadena = document.getElementById("numero_entero").value;
    var numero_entero = parseInt(numero_cadena, 10);
    if (numero_entero <= 0 || numero_entero >= 367) {
        alert("Escribe un numero entre 1 y 366");
    } else if ( numero_entero > 0 && numero_entero <= 31 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Enero";
        } else if ( numero_entero > 31 && numero_entero <= 60 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Febrero";
        } else if ( numero_entero > 60 && numero_entero <= 91 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Marzo";
        } else if ( numero_entero > 91 && numero_entero <= 121 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Abril";
        } else if ( numero_entero > 121 && numero_entero <= 152 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Mayo";
        } else if ( numero_entero > 152 && numero_entero <= 182 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Junio";
        } else if ( numero_entero > 182 && numero_entero <= 213 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Julio";
        } else if ( numero_entero > 213 && numero_entero <= 244 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Agosto";
        } else if ( numero_entero > 244 && numero_entero <= 274 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Septiembre";
        } else if ( numero_entero > 274 && numero_entero <= 305 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Octubre";
        } else if ( numero_entero > 305 && numero_entero <= 335 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Noviembre";
        } else if ( numero_entero > 335 && numero_entero <= 366 ){
            var numero_escrito = document.getElementById("numero_introducido");
            numero_escrito.innerHTML = numero_entero;
            var nombre_mes = document.getElementById("mes");
            nombre_mes.innerHTML = "Diciembre";
    }
}
function limpiar(){
    document.getElementById("numero_entero").value = "";
    var numero_escrito = document.getElementById("numero_introducido");
    numero_escrito.innerHTML = "?";
    var nombre_mes = document.getElementById("mes");
    nombre_mes.innerHTML = "?";
}