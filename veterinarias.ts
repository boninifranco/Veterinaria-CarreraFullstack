import * as readline from "readline-sync";

import { Sucursal } from './sucursal';
import { Clientes } from './clientes';
import { Proveedores } from './proveedores';
import { Pacientes } from './pacientes'

class Veterinaria {
    private sucursales: Sucursal[];
    private clientes: Clientes[];
    private pacientes: Pacientes[];
    private proveedores: Proveedores[];

    constructor() {
        this.sucursales = [];
        this.clientes = [];
        this.pacientes = [];
    }

    public get getSucursales(): Sucursal[] {
        return this.sucursales;
    }

    public setSucursal(sucursal: Sucursal): void {
        this.sucursales.push(sucursal);
    }

    public get getClientes(): Clientes[] {
        return this.clientes;
    }

    public setClientes(cliente: Clientes): void {
        this.clientes.push(cliente);
    }

    public get getPacientes(): Pacientes[] {
        return this.pacientes;
    }

    public setPacientes(paciente: Pacientes): void {
        this.pacientes.push(paciente);
    }

    public generarBaseDeDatosSucursales(): void {
        console.log(`\n--------Agregar Sucursal--------\n`);
        let nombre: string = readline.question("Nombre: ");
        let direccion: string = readline.question("Direccion: ");
        let id: number;
        do {
            id = this.generarId();
        } while (!this.esIdUnico(id));
        console.log("Se crea la sucursal");
        let nuevaSucursal: Sucursal = new Sucursal(nombre, direccion, id);
        this.darAltaSucursal(nuevaSucursal);
        this.mostrarInfoSucursales();
    }

    public generarBaseDeDatosClientes(): void {
        console.log(`\n--------Agregar Clientes--------\n`);
        let nombre: string = readline.question("Nombre: ");
        let telefono: number = readline.questionInt("Telefono ");
        let id: number;
        do {
            id = this.generarId();
        } while (!this.esIdUnico(id));
        let nuevoCliente: Clientes = new Clientes(nombre, telefono, id);
        this.darAltaCliente(nuevoCliente);
        this.mostrarInfoClientes();
    }

    public esIdUnico(id: number): boolean {
        for (const veterinaria of this.sucursales) {
            if (veterinaria.getId === id) {
                return false;
            }
        }
        return true;
    }

    public generarId(): number {
        return Math.floor(Math.random() * 10) + 1;
    }

    public mostrarInfoSucursales(): void {
        this.sucursales.forEach((sucursal, index) => {
            console.log(`[${index}]  Nombre: ${sucursal.getNombre}     Direccion: ${sucursal.getDireccion}     ID: ${sucursal.getId}     `);
        });
    }

    public mostrarInfoClientes(): void {
        this.clientes.forEach((cliente, index) => {
            console.log(`[${index}]  Nombre: ${cliente.getNombre()}     Telefono: ${cliente.getTelefono()}     ID: ${cliente.getId()}     Visitas: ${cliente.getVisitas()}     VIP: ${cliente.getVip()}`);
        });
    }

    public darAltaSucursal(nuevaSucursal: Sucursal): void {
        console.log("\nLa sucursal se ha agregado con éxito\n");
        this.setSucursal(nuevaSucursal);
    }

    public darAltaCliente(nuevoCliente: Clientes): void {
        console.log("\nEl cliente se ha agregado con éxito\n");
        this.setClientes(nuevoCliente);
    }

    public darBajaSucursal(): void {
        console.log(`\n--------Eliminar Sucursal--------\n`);
        this.mostrarInfoSucursales();
        let opcion: number = readline.questionInt("\nElija la sucursal que desea eliminar: ");
        this.getSucursales.splice(opcion, 1);
        console.log("\nLa sucursal ha sido eliminado con éxito");
    }

    public darBajaCliente(): void {
        console.log(`\n--------Eliminar Cliente--------\n`);
        this.mostrarInfoClientes();
        let opcion: number = readline.questionInt("\nElija el cliente que desea eliminar: ");
        this.getClientes.splice(opcion, 1);
        console.log("\nEl cliente ha sido eliminado con éxito");
    }

    public modificarDatosSucursal(): void {
        console.log(`\n--------Modificar Sucursal--------\n`);
        this.mostrarInfoSucursales();
        let opcion: number = readline.questionInt("\nElija cual desea modificar: ");
        let nombre: string = readline.question("Nombre: ");
        let direccion: string = readline.question("Direccion: ");
        this.sucursales[opcion].setNombre(nombre);
        this.sucursales[opcion].setDireccion(direccion);
        console.log("\nLa sucursal ha sido modificada con éxito");
    }

    public modificarDatosCliente(): void {
        console.log(`\n--------Modificar Cliente--------\n`);
        this.mostrarInfoClientes();
        let opcion: number = readline.questionInt("\nElija cual desea modificar: ");
        let nombre: string = readline.question("Nombre: ");
        let telefono: number = readline.questionInt("Telefono: ");
        this.clientes[opcion].setNombre(nombre);
        this.clientes[opcion].setTelefono(telefono);
        console.log("\nEl cliente ha sido modificada con éxito");
    }
}