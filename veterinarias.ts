import * as readline from "readline-sync";

import { Sucursal } from './sucursal';
import { Clientes } from './clientes';
import { Proveedores } from './proveedores';
import { Pacientes } from './pacientes'

class Veterinaria {
    private sucursales: Sucursal[];
    private clientes: Clientes[];
    private pacientes: Pacientes[];

    constructor() {
        this.sucursales = [];
        this.clientes = [];
        this.pacientes = [];
    }

    public getSucursales(): Sucursal[] {
        return this.sucursales;
    }

    public setSucursal(sucursal: Sucursal): void {
        this.sucursales.push(sucursal);
    }

    public getClientes(): Clientes[] {
        return this.clientes;
    }

    public setClientes(cliente: Clientes): void {
        this.clientes.push(cliente);
    }

    public getPacientes(): Pacientes[] {
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
        let nuevaSucursal: Sucursal = new Sucursal(nombre, direccion, id);
        this.darAltaSucursal(nuevaSucursal);
        this.mostrarInfoSucursales();
    }

    public generarBaseDeDatosClientes(): void {
        console.log(`\n--------Agregar Clientes--------\n`);
        let nombre: string = readline.question("Nombre: ");
        let telefono: number = readline.questionInt("Telefono ");
        let id: number;
        let option: number;
        do {
            id = this.generarId();
        } while (!this.esIdUnico(id));
        let nuevoCliente: Clientes = new Clientes(nombre, telefono, id);
        this.darAltaCliente(nuevoCliente);
        do{
            this.generarBaseDeDatosPacientes(id);
            console.log("\n[1] Si\n[Cualquier otro numero] No");
            option = readline.questionInt(`\nDesea agregar otra mascota a la lista del cliente ${nuevoCliente.getNombre()}?: `);
        }while(option === 1)
        this.mostrarInfoClientes();

    }

    private generarBaseDeDatosPacientes(id: number): void {
        console.log(`\n--------Agregar Paciente--------\n`);
        let nombre: string = readline.question("Nombre: ");
        let especie: string = readline.question("Especie: ");
        let nuevoPaciente: Pacientes = new Pacientes(nombre, especie, id);
        this.darAltaPaciente(nuevoPaciente);
        this.mostrarInfoPacientes();
    }

    public esIdUnico(id: number): boolean {
        for (const sucursal of this.sucursales) {
            if (sucursal.getId() === id) {
                return false;
            }
        }
        for (const cliente of this.clientes){
            if (cliente.getId() === id){
                return false;
            }
        }
        return true;
    }

    public generarId(): number {
        return Math.floor(Math.random() * 5) + 1;
    }

    public mostrarInfoSucursales(): void {
        if(this.getSucursales().length > 0){
            this.sucursales.forEach((sucursal, index) => {
                console.log(`[${index}]  Nombre: ${sucursal.getNombre()}     Direccion: ${sucursal.getDireccion()}     ID: ${sucursal.getId()}     `);
            });
        } else {
            console.log("No hay ninguna sucursal en la base de datos");
        }
    }

    public mostrarInfoClientes(): void {
        if(this.getClientes().length > 0){
            this.clientes.forEach((cliente, index) => {
                console.log(`[${index}]  Nombre: ${cliente.getNombre()}     Telefono: ${cliente.getTelefono()}     ID: ${cliente.getId()}     Visitas: ${cliente.getVisitas()}     VIP: ${cliente.getVip()}`);
            });
        }else {
            console.log("No hay ningun cliente en la base de datos");
        }
    }

    public mostrarInfoPacientes(): void {
        if(this.getPacientes().length > 0){
            this.pacientes.forEach((pacientes, index) => {
                console.log(`[${index}]  Nombre: ${pacientes.getMascotaNombre()}   Especie: ${pacientes.getEspecie()}     ID: ${pacientes.getId()}`);
            });
        } else {
            console.log("No hay ningun paciente en la base de datos");
        }
    }

    public darAltaSucursal(nuevaSucursal: Sucursal): void {
        console.log("\nLa sucursal se ha agregado con éxito\n");
        this.setSucursal(nuevaSucursal);
    }

    public darAltaCliente(nuevoCliente: Clientes): void {
        console.log("\nEl cliente se ha agregado con éxito\n");
        this.setClientes(nuevoCliente);
    }

    public darAltaPaciente(nuevoPaciente: Pacientes): void {
        console.log("\nEl paciente se ha agregado con éxito\n");
        this.setPacientes(nuevoPaciente);
    }

    public darBajaSucursal(): void {
        console.log(`\n--------Eliminar Sucursal--------\n`);
        this.mostrarInfoSucursales();
        let opcion: number = readline.questionInt("\nElija la sucursal que desea eliminar: ");
        this.getSucursales().splice(opcion, 1);
        console.log("\n---La sucursal ha sido eliminado con éxito---");
    }

    public darBajaCliente(): void {
        console.log(`\n--------Eliminar Cliente--------\n`);
        this.mostrarInfoClientes();
        let opcion: number = readline.questionInt("\nElija el cliente que desea eliminar: ");
        this.getClientes().splice(opcion, 1);
        console.log("\n---El cliente ha sido eliminado con éxito---");
    }

    public darBajaPaciente(): void {
        console.log(`\n--------Eliminar Paciente--------\n`);
        this.mostrarInfoPacientes();
        let opcion: number = readline.questionInt("\nElija el paciente que desea eliminar: ");
        this.getPacientes().splice(opcion, 1);
        console.log("\n---El paciente ha sido eliminado con éxito---");
    }

    public modificarDatosSucursal(): void {
        console.log(`\n--------Modificar Sucursal--------\n`);
        this.mostrarInfoSucursales();
        let opcion: number = readline.questionInt("\nElija cual desea modificar: ");
        let nombre: string = readline.question("Nombre: ");
        let direccion: string = readline.question("Direccion: ");
        this.sucursales[opcion].setNombre(nombre);
        this.sucursales[opcion].setDireccion(direccion);
        this.mostrarInfoSucursales();
        console.log("\n---La sucursal ha sido modificada con éxito---");
    }

    public modificarDatosCliente(): void {
        console.log(`\n--------Modificar Cliente--------\n`);
        this.mostrarInfoClientes();
        let opcionCliente: number = readline.questionInt("\nElija cual desea modificar: ");
        let nombre: string = readline.question("Nombre: ");
        let telefono: number = readline.questionInt("Telefono: ");
        let id : number = this.clientes[opcionCliente].getId();
        this.clientes[opcionCliente].setNombre(nombre);
        this.clientes[opcionCliente].setTelefono(telefono);
        this.mostrarInfoClientes();
        console.log("\n[1] Si\n[Cualquier otro numero] No");
        let opcionMascota : number = readline.questionInt("Desea agregar otra mascota a la base de datos del cliente?: ");
        if(opcionMascota === 1){
            this.generarBaseDeDatosPacientes(id);
        }else {
            console.log("\n---El cliente ha sido modificada con éxito---");
        }
    }

    public modificarDatosPacientes(): void {
        console.log(`\n--------Modificar Paciente--------\n`);
        this.mostrarInfoPacientes();
        let opcion: number = readline.questionInt("\nElija cual desea modificar: ");
        let nombre: string = readline.question("Nombre: ");
        let especie: string = readline.question("Especie: ");
        this.pacientes[opcion].setMascotaNombre(nombre);
        this.pacientes[opcion].setEspecie(especie);
        this.mostrarInfoPacientes();
        console.log("\n---El paciente ha sido modificada con éxito---");
    }
}