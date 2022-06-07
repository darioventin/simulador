alert("Bienvenidos")

alert("La siguiente herramienta le permitirá conocer cuánto podrá deducir en impuestos, por haber adquirido un curso de capacitación profesional")

let neto = 500;
let tasaImpositiva = 0.21;

//*Función para calcular el importe a deducir si es Responsable Inscripto:
function iva(neto, iva) {
    return neto * tasaImpositiva;
}
let resultadoRI = iva(neto, iva);
let resultadoMonotributista = neto + resultadoRI;


let condicionFiscal = prompt("Ingrese su condición fiscal: Responsable Inscripto, Monotributista o Consumidor Final, para conocer el monto imputable en su declaración de impuestos:");

switch(condicionFiscal){
    case "Responsable Inscripto":
        alert("Usted puede utilizar " + resultadoRI + " pesos en su posición mensual de IVA, como crédito fiscal")
        break;
    case "Monotributista":
        alert("Usted puede utilizar " + resultadoMonotributista + " pesos para deducir gastos en Impuesto a las Ganancias, en concepto de capacitaciones")
        break;
    case "Consumidor Final":
        alert("Usted no se encuentra inscripto en ningún impuesto, por lo tanto, no es posible deducir el gasto")
        break;
    default:
        alert("Por favor, escriba su condición fiscal de manera correcta")
        break;
};

alert("Muchas gracias")