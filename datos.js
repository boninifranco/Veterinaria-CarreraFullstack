"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datos = void 0;
var Datos = /** @class */ (function () {
    function Datos(nombre, telefono, id) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
    }
    Datos.prototype.getNombre = function () {
        return this.nombre;
    };
    Datos.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Datos.prototype.getTelefono = function () {
        return this.telefono;
    };
    Datos.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Datos.prototype.getId = function () {
        return this.id;
    };
    Datos.prototype.setId = function (nuevoId) {
        this.id = nuevoId;
    };
    return Datos;
}());
exports.Datos = Datos;
