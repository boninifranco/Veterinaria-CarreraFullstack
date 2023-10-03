"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var proveedores_1 = require("./proveedores");
var veterinarias_1 = require("./veterinarias");
var terminarPrograma = false;
function iniciarPrograma() {
    var veterinaria = new veterinarias_1.Veterinaria();
    var proveedores = new proveedores_1.Proveedores('', 0, 0);
    mensajeIniciarPrograma();
    var option = readline.questionInt("Presione la opcion elegida: ");
    do {
        switchIniciarPrograma(option, veterinaria, proveedores);
        if (option === 0) {
            terminarPrograma = true;
        }
    } while (!terminarPrograma);
}
function mensajeIniciarPrograma() {
    console.log("\n[1]Menu Clientes\n[2]Menu Pacientes\n[3]Menu Proveedores\n[4]Menu Sucursales\n[0]Salir\n");
}
function mensajeSwitches(nombreDelArreglo) {
    console.log("\n[1]Agregar ".concat(nombreDelArreglo, "\n[2]Modificar ").concat(nombreDelArreglo, "\n[3]Eliminar ").concat(nombreDelArreglo, "\n[4]Mostrar ").concat(nombreDelArreglo, "\n[9]Menu Principal\n[0]Salir\n"));
}
function mensajeSwitchCliente() {
    console.log("\n[1]Agregar cliente\n[2]Agregar nueva visita\n[3]Modificar cliente\n[4]Eliminar cliente\n[5]Mostrar clientes\n[9]Menu Principal\n[0]Salir\n");
}
function switchIniciarPrograma(option, veterinaria, proovedores) {
    switch (option) {
        case 1:
            switchClientes(veterinaria);
            break;
        case 2:
            switchPacientes(veterinaria);
            break;
        case 3:
            switchProveedores(proovedores);
            break;
        case 4:
            switchSucursales(veterinaria);
            break;
    }
}
function switchClientes(clientes) {
    mensajeSwitchCliente();
    var option = readline.questionInt("Presione la opcion elegida: ");
    switch (option) {
        case 1:
            clientes.generarBaseDeDatosClientes();
            break;
        case 2:
            clientes.nuevaVisitaACliente();
            break;
        case 3:
            clientes.modificarDatosCliente();
            break;
        case 4:
            clientes.darBajaCliente();
            break;
        case 5:
            clientes.mostrarInfoClientes();
            break;
        case 9:
            iniciarPrograma();
            break;
        case 0:
            terminarPrograma = true;
            break;
    }
}
function switchPacientes(pacientes) {
    mensajeSwitches("paciente");
    var option = readline.questionInt("Presione la opcion elegida: ");
    switch (option) {
        case 1:
            pacientes.nuevoPacienteClienteExistente();
            break;
        case 2:
            pacientes.modificarDatosPacientes();
            break;
        case 3:
            pacientes.darBajaPaciente();
            break;
        case 4:
            pacientes.mostrarInfoPacientes();
        case 9:
            iniciarPrograma();
            break;
        case 0:
            terminarPrograma = true;
            break;
    }
}
function switchProveedores(proveedores) {
    mensajeSwitches("proveedores");
    var option = readline.questionInt("Presione la opcion elegida: ");
    switch (option) {
        case 1:
            proveedores.generarBaseDeDatosProveedores();
            break;
        case 2:
            proveedores.modificarDatosProveedor();
            break;
        case 3:
            proveedores.darBajaProveedor();
            break;
        case 4:
            proveedores.mostrarInfoProveedores();
        case 9:
            iniciarPrograma();
            break;
        case 0:
            terminarPrograma = true;
            break;
    }
}
function switchSucursales(sucursales) {
    mensajeSwitches("sucursales");
    var option = readline.questionInt("Presione la opcion elegida: ");
    switch (option) {
        case 1:
            sucursales.generarBaseDeDatosSucursales();
            break;
        case 2:
            sucursales.modificarDatosSucursal();
            break;
        case 3:
            sucursales.darBajaSucursal();
            break;
        case 4:
            sucursales.mostrarInfoSucursales();
            break;
        case 9:
            iniciarPrograma();
            break;
        case 0:
            terminarPrograma = true;
            break;
    }
}
iniciarPrograma();
