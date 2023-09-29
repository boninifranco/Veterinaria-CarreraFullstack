"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pacientes = void 0;
var Pacientes = /** @class */ (function () {
    function Pacientes(nombre, especie, id) {
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
    }
    Pacientes.prototype.getMascotaNombre = function () {
        return this.nombre;
    };
    Pacientes.prototype.setMascotaNombre = function (nuevaMascota) {
        this.nombre = nuevaMascota;
    };
    Pacientes.prototype.getEspecie = function () {
        return this.clasificarEspecie(this.especie);
    };
    Pacientes.prototype.setEspecie = function (nuevaEspecie) {
        this.especie = nuevaEspecie;
    };
    Pacientes.prototype.getId = function () {
        return this.id;
    };
    Pacientes.prototype.setId = function (id) {
        this.id = id;
    };
    Pacientes.prototype.clasificarEspecie = function (especie) {
        if (especie.toLowerCase() == "perro") {
            return especie.toLowerCase();
        }
        else if (especie.toLowerCase() == "gato") {
            return especie.toLowerCase();
        }
        else {
            return "exótica";
        }
    };
    return Pacientes;
}());
exports.Pacientes = Pacientes;
