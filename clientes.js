"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
var datos_1 = require("./datos");
var Clientes = /** @class */ (function (_super) {
    __extends(Clientes, _super);
    function Clientes(nombre, telefono, id) {
        var _this = _super.call(this, nombre, telefono, id) || this;
        _this.visitas = 0;
        _this.vip = false;
        return _this;
    }
    //Método acumulador de visitas:
    Clientes.prototype.nuevaVisita = function () {
        this.visitas += 1;
        if (this.visitas >= 5) {
            this.setVip(true);
            console.log("\nEl cliente ".concat(this.getNombre(), " ahora es VIP\n"));
        }
    };
    //Método para consultar 
    Clientes.prototype.consultaVIP = function () {
        if (this.getVip() === true) {
            console.log("\nEl cliente ".concat(this.getNombre(), " es un usuario VIP\n"));
        }
        else {
            console.log("El cliente ".concat(this.getNombre(), " NO es un usuario VIP"));
        }
    };
    //Getters y Setters:
    Clientes.prototype.getVisitas = function () {
        return this.visitas;
    };
    Clientes.prototype.setVisitas = function (cantidad) {
        this.visitas = cantidad;
    };
    Clientes.prototype.getVip = function () {
        return this.vip;
    };
    Clientes.prototype.setVip = function (ingresoVip) {
        this.vip = ingresoVip;
    };
    return Clientes;
}(datos_1.Datos));
exports.Clientes = Clientes;
