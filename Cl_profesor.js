// Cl_profesor.js
export default class Cl_profesor {
    constructor(nombre, bono, sueldo) {
        this.nombre = nombre;
        this.bono = bono;
        this.sueldo = sueldo;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set bono(b) {
        this._bono = b;
    }

    get bono() {
        return this._bono;
    }

    set sueldo(s) {
        this._sueldo = s;
    }

    get sueldo() {
        return this._sueldo;
    }
}


