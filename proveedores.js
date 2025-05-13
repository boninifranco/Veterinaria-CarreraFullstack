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
exports.Proveedores = void 0;
var readline = require("readline-sync");
var datos_1 = require("./datos");
var Proveedores = /** @class */ (function (_super) {
    __extends(Proveedores, _super);
    function Proveedores(nombre, telefono, id) {
        var _this = _super.call(this, nombre, telefono, id) || this;
        _this.proveedores = [];
        return _this;
    }
    //Getters y Setters:
    Proveedores.prototype.getProveedores = function () {
        return this.proveedores;
    };
    Proveedores.prototype.setProveedores = function (proveedor) {
        this.proveedores.push(proveedor);
    };
    //ABM Proovedores:
    Proveedores.prototype.generarBaseDeDatosProveedores = function () {
        console.log("\n--------Agregar Proveedor--------\n");
        var nombre = readline.question("Nombre: ");
        var telefono = readline.questionInt("Telefono: ");
        var id;
        do {
            id = this.generarId();
        } while (!this.esIdUnico(id));
        var nuevoProveedor = new Proveedores(nombre, telefono, id);
        this.darAltaProveedor(nuevoProveedor);
        this.mostrarInfoProveedores();
    };
    Proveedores.prototype.mostrarInfoProveedores = function () {
        if (this.getProveedores().length > 0) {
            this.proveedores.forEach(function (proveedor, index) {
                console.log("[".concat(index, "]  Nombre: ").concat(proveedor.getNombre(), "     Telefono: ").concat(proveedor.getTelefono(), "     ID: ").concat(proveedor.getId(), " "));
            });
        }
        else {
            console.log("**No hay ningun proveedor en la base de datos**");
        }
    };
    Proveedores.prototype.darAltaProveedor = function (nuevoProveedor) {
        console.log("\nEl Proveedor se ha agregado con éxito\n");
        this.setProveedores(nuevoProveedor);
    };
    Proveedores.prototype.darBajaProveedor = function () {
        if (this.getProveedores().length > 0) {
            console.log("\n--------Eliminar Proveedor--------\n");
            this.mostrarInfoProveedores();
            var opcion = readline.questionInt("\nElija el proveedor que desea eliminar: ");
            this.getProveedores().splice(opcion, 1);
            console.log("\n---El proveedor ha sido eliminado con éxito---");
        }
        else {
            console.log("**No hay ningun proveedor en la base de datos**");
        }
    };
    Proveedores.prototype.modificarDatosProveedor = function () {
        if (this.getProveedores().length > 0) {
            console.log("\n--------Modificar Proveedor--------\n");
            this.mostrarInfoProveedores();
            var opcion = readline.questionInt("\nElija cual desea modificar: ");
            var nombre = readline.question("Nombre: ");
            var telefono = readline.questionInt("Telefono: ");
            this.proveedores[opcion].setNombre(nombre);
            this.proveedores[opcion].setTelefono(telefono);
            console.log("\n---El proveedor ha sido modificada con éxito---");
        }
        else {
            console.log("**No hay ningun proveedor en la base de datos**");
        }
    };
    //ID:
    Proveedores.prototype.generarId = function () {
        return Math.floor(Math.random() * 10) + 1;
    };
    Proveedores.prototype.esIdUnico = function (id) {
        for (var _i = 0, _a = this.proveedores; _i < _a.length; _i++) {
            var proveedor = _a[_i];
            if (proveedor.getId() === id) {
                return false;
            }
        }
        return true;
    };
    return Proveedores;
}(datos_1.Datos));
exports.Proveedores = Proveedores;
