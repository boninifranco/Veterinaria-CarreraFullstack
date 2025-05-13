"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var readline = require("readline-sync");
var sucursal_1 = require("./sucursal");
var clientes_1 = require("./clientes");
var pacientes_1 = require("./pacientes");
var Veterinaria = /** @class */ (function () {
    function Veterinaria() {
        var sucursal = new sucursal_1.Sucursal("CEPIT", "Tandil", 0);
        var sucursal1 = new sucursal_1.Sucursal("El buen refugio", "Chaves", 1);
        var sucursal2 = new sucursal_1.Sucursal("El Torito", "De la garma", 2);
        var cliente = new clientes_1.Clientes("Juliana", 45645641, 0);
        var cliente1 = new clientes_1.Clientes("Georgina", 87465465, 1);
        var cliente2 = new clientes_1.Clientes("Nahuel", 92839291, 2);
        var paciente = new pacientes_1.Pacientes("Zeus", "Perro", 0);
        var paciente1 = new pacientes_1.Pacientes("Sheldon", "Gato", 0);
        var paciente2 = new pacientes_1.Pacientes("Lolo", "Perro", 0);
        var paciente3 = new pacientes_1.Pacientes("Paco", "Loro", 2);
        var paciente4 = new pacientes_1.Pacientes("Manchas", "Perro", 2);
        var paciente5 = new pacientes_1.Pacientes("Tito", "Mono", 1);
        var paciente6 = new pacientes_1.Pacientes("Pirata", "Perro", 1);
        this.sucursales = [sucursal, sucursal1, sucursal2];
        this.clientes = [cliente, cliente1, cliente2];
        this.pacientes = [paciente, paciente1, paciente2, paciente3, paciente4, paciente5, paciente6];
    }
    Veterinaria.prototype.getSucursales = function () {
        return this.sucursales;
    };
    Veterinaria.prototype.setSucursal = function (sucursal) {
        this.sucursales.push(sucursal);
    };
    Veterinaria.prototype.getClientes = function () {
        return this.clientes;
    };
    Veterinaria.prototype.setClientes = function (cliente) {
        this.clientes.push(cliente);
    };
    Veterinaria.prototype.getPacientes = function () {
        return this.pacientes;
    };
    Veterinaria.prototype.setPacientes = function (paciente) {
        this.pacientes.push(paciente);
    };
    //Metodos el cual se crea cada instancia guardandose en su arreglo correspondiente.
    Veterinaria.prototype.generarBaseDeDatosSucursales = function () {
        console.log("\n--------Agregar Sucursal--------\n");
        var nombre = readline.question("Nombre: ");
        var direccion = readline.question("Direccion: ");
        var id;
        do {
            id = this.generarId();
        } while (!this.esIdUnico(id));
        var nuevaSucursal = new sucursal_1.Sucursal(nombre, direccion, id);
        this.darAltaSucursal(nuevaSucursal);
        this.mostrarInfoSucursales();
    };
    Veterinaria.prototype.generarBaseDeDatosClientes = function () {
        console.log("\n--------Agregar Clientes--------\n");
        var nombre = readline.question("Nombre: ");
        var telefono = readline.questionInt("Telefono ");
        var id;
        var option;
        do {
            id = this.generarId();
        } while (!this.esIdUnico(id));
        var nuevoCliente = new clientes_1.Clientes(nombre, telefono, id);
        this.darAltaCliente(nuevoCliente);
        do {
            this.generarBaseDeDatosPacientes(id);
            console.log("\n[1] Si\n[Cualquier otro numero] No");
            option = readline.questionInt("\nDesea agregar otra mascota a la lista del cliente ".concat(nuevoCliente.getNombre(), "?: "));
        } while (option === 1);
        this.mostrarInfoClientes();
    };
    Veterinaria.prototype.generarBaseDeDatosPacientes = function (id) {
        console.log("\n--------Agregar Paciente--------\n");
        var nombre = readline.question("Nombre: ");
        var especie = readline.question("Especie: ");
        var nuevoPaciente = new pacientes_1.Pacientes(nombre, especie, id);
        this.darAltaPaciente(nuevoPaciente);
        this.mostrarInfoPacientes();
    };
    Veterinaria.prototype.esIdUnico = function (id) {
        //Se valida si el id generado aleatorio esta entre los id ya generados
        //anteriormente, de ser asi se genera otro hasta que no se igualen
        for (var _i = 0, _a = this.sucursales; _i < _a.length; _i++) {
            var sucursal = _a[_i];
            if (sucursal.getId() === id) {
                return false;
            }
        }
        for (var _b = 0, _c = this.clientes; _b < _c.length; _b++) {
            var cliente = _c[_b];
            if (cliente.getId() === id) {
                return false;
            }
        }
        return true;
    };
    Veterinaria.prototype.generarId = function () {
        //Se genera un id aleatorio
        return Math.floor(Math.random() * 10) + 1;
    };
    //Muestra en consola la info de cada arreglo con su index para poder interactuar con el menu
    Veterinaria.prototype.mostrarInfoSucursales = function () {
        if (this.getSucursales().length > 0) {
            this.sucursales.forEach(function (sucursal, index) {
                console.log("[".concat(index, "]  Nombre: ").concat(sucursal.getNombre(), "     Direccion: ").concat(sucursal.getDireccion(), "     ID: ").concat(sucursal.getId(), "     "));
            });
        }
        else {
            console.log("**No hay ninguna sucursal en la base de datos**");
        }
    };
    Veterinaria.prototype.mostrarInfoClientes = function () {
        if (this.getClientes().length > 0) {
            this.clientes.forEach(function (cliente, index) {
                console.log("[".concat(index, "]  Nombre: ").concat(cliente.getNombre(), "     Telefono: ").concat(cliente.getTelefono(), "     ID: ").concat(cliente.getId(), "     Visitas: ").concat(cliente.getVisitas(), "     VIP: ").concat(cliente.getVip()));
            });
        }
        else {
            console.log("**No hay ningun cliente en la base de datos**");
        }
    };
    Veterinaria.prototype.mostrarInfoPacientes = function () {
        if (this.getPacientes().length > 0) {
            this.pacientes.forEach(function (pacientes, index) {
                console.log("[".concat(index, "]  Nombre: ").concat(pacientes.getMascotaNombre(), "   Especie: ").concat(pacientes.getEspecie(), "     ID: ").concat(pacientes.getId()));
            });
        }
        else {
            console.log("**No hay ningun paciente en la base de datos**");
        }
    };
    //Metodo el cual si se convalidan lo requerido en la base de datos se pushea
    //a su respectivo arereglo
    Veterinaria.prototype.darAltaSucursal = function (nuevaSucursal) {
        console.log("\nLa sucursal se ha agregado con éxito\n");
        this.setSucursal(nuevaSucursal);
    };
    Veterinaria.prototype.darAltaCliente = function (nuevoCliente) {
        console.log("\nEl cliente se ha agregado con éxito\n");
        this.setClientes(nuevoCliente);
    };
    Veterinaria.prototype.darAltaPaciente = function (nuevoPaciente) {
        console.log("\nEl paciente se ha agregado con éxito\n");
        this.setPacientes(nuevoPaciente);
    };
    Veterinaria.prototype.nuevaVisitaACliente = function () {
        this.mostrarInfoClientes();
        var opcion = readline.questionInt("\nElija al cliente que desea agregar la visita: ");
        this.getClientes()[opcion].nuevaVisita();
        this.mostrarInfoClientes();
    };
    Veterinaria.prototype.nuevoPacienteClienteExistente = function () {
        this.mostrarInfoClientes();
        var id;
        var opcion = readline.questionInt("\nElija al cliente que desea agregar el nuevo paciente: ");
        id = this.getClientes()[opcion].getId();
        this.generarBaseDeDatosPacientes(id);
    };
    //Metodo el cual se muestra por consola la informacion de las propiedades de cada arreglo
    //correspondiente, el cual por medio de una interaccion con el menu se elige cual elemento
    //se desea borrar
    Veterinaria.prototype.darBajaSucursal = function () {
        if (this.getSucursales().length > 0) {
            console.log("\n--------Eliminar Sucursal--------\n");
            this.mostrarInfoSucursales();
            var opcion = readline.questionInt("\nElija la sucursal que desea eliminar: ");
            this.getSucursales().splice(opcion, 1);
            this.mostrarInfoSucursales();
            console.log("\n---La sucursal ha sido eliminado con éxito---");
        }
        else {
            console.log("No hay ninguna sucursal en la base de datos");
        }
    };
    Veterinaria.prototype.darBajaCliente = function () {
        if (this.getClientes().length > 0) {
            console.log("\n--------Eliminar Cliente--------\n");
            this.mostrarInfoClientes();
            var opcion = readline.questionInt("\nElija el cliente que desea eliminar: ");
            this.getClientes().splice(opcion, 1);
            this.mostrarInfoClientes();
            console.log("\n---El cliente ha sido eliminado con éxito---");
        }
        else {
            console.log("No hay ningun cliente en la base de datos");
        }
    };
    Veterinaria.prototype.darBajaPaciente = function () {
        if (this.getPacientes().length > 0) {
            console.log("\n--------Eliminar Paciente--------\n");
            this.mostrarInfoPacientes();
            var opcion = readline.questionInt("\nElija el paciente que desea eliminar: ");
            this.getPacientes().splice(opcion, 1);
            this.mostrarInfoPacientes();
            console.log("\n---El paciente ha sido eliminado con éxito---");
        }
        else {
            console.log("No hay ningun paciente en la base de datos");
        }
    };
    //Metodo en el que por medio de la consola se muestran todos los elementos del arreglo y
    //se elige cual se desea modificar
    Veterinaria.prototype.modificarDatosSucursal = function () {
        if (this.getSucursales().length > 0) {
            console.log("\n--------Modificar Sucursal--------\n");
            this.mostrarInfoSucursales();
            var opcion = readline.questionInt("\nElija cual desea modificar: ");
            var nombre = readline.question("Nombre: ");
            var direccion = readline.question("Direccion: ");
            this.sucursales[opcion].setNombre(nombre);
            this.sucursales[opcion].setDireccion(direccion);
            this.mostrarInfoSucursales();
            console.log("\n---La sucursal ha sido modificada con éxito---");
        }
        else {
            console.log("**No hay ninguna sucursal en la base de datos**");
        }
    };
    Veterinaria.prototype.modificarDatosCliente = function () {
        if (this.getClientes().length > 0) {
            console.log("\n--------Modificar Cliente--------\n");
            this.mostrarInfoClientes();
            var opcionCliente = readline.questionInt("\nElija cual desea modificar: ");
            var nombre = readline.question("Nombre: ");
            var telefono = readline.questionInt("Telefono: ");
            var id = this.clientes[opcionCliente].getId();
            this.clientes[opcionCliente].setNombre(nombre);
            this.clientes[opcionCliente].setTelefono(telefono);
            this.mostrarInfoClientes();
            console.log("\n[1] Si\n[Cualquier otro numero] No");
            var opcionMascota = readline.questionInt("Desea agregar otra mascota a la base de datos del cliente?: ");
            if (opcionMascota === 1) {
                this.generarBaseDeDatosPacientes(id);
            }
            else {
                console.log("\n---El cliente ha sido modificada con éxito---");
            }
        }
        else {
            console.log("**No hay ningun cliente en la base de datos**");
        }
    };
    Veterinaria.prototype.modificarDatosPacientes = function () {
        if (this.getPacientes().length > 0) {
            console.log("\n--------Modificar Paciente--------\n");
            this.mostrarInfoPacientes();
            var opcion = readline.questionInt("\nElija cual desea modificar: ");
            var nombre = readline.question("Nombre: ");
            var especie = readline.question("Especie: ");
            this.pacientes[opcion].setMascotaNombre(nombre);
            this.pacientes[opcion].setEspecie(especie);
            this.mostrarInfoPacientes();
            console.log("\n---El paciente ha sido modificada con éxito---");
        }
        else {
            console.log("**No hay ningun paciente en la base de datos**");
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
