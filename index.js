import Cl_fijo from "./Cl_fijo.js";

let f1 = new Cl_fijo("Carlos", 25, 100);
let f2 = new Cl_fijo("Carolina", 40, 90);

let ingresoF1 = f1.calcIngreso();
let ingresoF2 = f2.calcIngreso();

let salida = document.getElementById("salida");

salida.innerHTML = `
    Nombre del profesor fijo: ${f1.nombre}<br>
    Monto del bono: $${f1.bono}<br>
    Monto del sueldo: $${f1.sueldo}<br>
    Ingreso total del profesor ${f1.nombre}: $${ingresoF1}<br><br>
    
    Nombre del profesor fijo: ${f2.nombre}<br>
    Monto del bono: $${f2.bono}<br>
    Monto del sueldo: $${f2.sueldo}<br>
    Ingreso total del profesor ${f2.nombre}: $${ingresoF2}<br>
`;
