"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
var Sucursal = /** @class */ (function () {
    function Sucursal(nombre, direccion, id) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
    }
    Sucursal.prototype.getNombre = function () {
        return this.nombre;
    };
    Sucursal.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Sucursal.prototype.getId = function () {
        return this.id;
    };
    Sucursal.prototype.setId = function (id) {
        this.id = id;
    };
    Sucursal.prototype.getDireccion = function () {
        return this.direccion;
    };
    Sucursal.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    return Sucursal;
}());
exports.Sucursal = Sucursal;
