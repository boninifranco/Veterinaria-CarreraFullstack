import * as readline from "readline-sync";

import { Sucursal } from './sucursal';
import { Clientes } from './clientes';
import { Pacientes } from './pacientes'

export class Veterinaria {
    private sucursales: Sucursal[];
    private clientes: Clientes[];
    private pacientes: Pacientes[];

    constructor() {
        //carga de datos abm
        let sucursal = new Sucursal("CEPIT", "Tandil", 0);
        let sucursal1 = new Sucursal("El buen refugio", "Chaves", 1);
        let sucursal2 = new Sucursal("El Torito", "De la garma", 2);
        let cliente = new Clientes("Juliana", 45645641, 0);
        let cliente1 = new Clientes("Georgina", 87465465, 1);
        let cliente2 = new Clientes("Nahuel", 92839291, 2);
        let paciente = new Pacientes("Zeus", "Perro", 0);
        let paciente1 = new Pacientes("Sheldon", "Gato", 0);
        let paciente2 = new Pacientes("Lolo", "Perro", 0);
        let paciente3 = new Pacientes("Paco", "Loro", 2);
        let paciente4 = new Pacientes("Manchas", "Perro", 2);
        let paciente5 = new Pacientes("Tito", "Mono", 1);
        let paciente6 = new Pacientes("Pirata", "Perro", 1);
        this.sucursales = [sucursal, sucursal1, sucursal2];
        this.clientes = [cliente, cliente1, cliente2];
        this.pacientes = [paciente, paciente1, paciente2, paciente3, paciente4, paciente5, paciente6];
    }
    //getters y setters:
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

    //Metodos el cual se crea cada instancia guardandose en su arreglo correspondiente.
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
        do {
            this.generarBaseDeDatosPacientes(id);
            console.log("\n[1] Si\n[Cualquier otro numero] No");
            option = readline.questionInt(`\nDesea agregar otra mascota a la lista del cliente ${nuevoCliente.getNombre()}?: `);
        } while (option === 1)
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
    //metodo para generar y comparar ID
    public esIdUnico(id: number): boolean {
        //Se valida si el id generado aleatorio esta entre los id ya generados
        //anteriormente, de ser asi se genera otro hasta que no se igualen
        for (const sucursal of this.sucursales) {
            if (sucursal.getId() === id) {
                return false;
            }
        }
        for (const cliente of this.clientes) {
            if (cliente.getId() === id) {
                return false;
            }
        }
        return true;
    }

    public generarId(): number {
        //Se genera un id aleatorio
        return Math.floor(Math.random() * 10) + 1;
    }

    //Muestra en consola la info de cada arreglo con su index para poder interactuar con el menu
    public mostrarInfoSucursales(): void {
        if (this.getSucursales().length > 0) {
            this.sucursales.forEach((sucursal, index) => {
                console.log(`[${index}]  Nombre: ${sucursal.getNombre()}     Direccion: ${sucursal.getDireccion()}     ID: ${sucursal.getId()}     `);
            });
        } else {
            console.log("**No hay ninguna sucursal en la base de datos**");
        }
    }

    public mostrarInfoClientes(): void {
        if (this.getClientes().length > 0) {
            this.clientes.forEach((cliente, index) => {
                console.log(`[${index}]  Nombre: ${cliente.getNombre()}     Telefono: ${cliente.getTelefono()}     ID: ${cliente.getId()}     Visitas: ${cliente.getVisitas()}     VIP: ${cliente.getVip()}`);
            });
        } else {
            console.log("**No hay ningun cliente en la base de datos**");
        }
    }

    public mostrarInfoPacientes(): void {
        if (this.getPacientes().length > 0) {
            this.pacientes.forEach((pacientes, index) => {
                console.log(`[${index}]  Nombre: ${pacientes.getMascotaNombre()}   Especie: ${pacientes.getEspecie()}     ID: ${pacientes.getId()}`);
            });
        } else {
            console.log("**No hay ningun paciente en la base de datos**");
        }
    }

    //Metodo el cual si se convalidan lo requerido en la base de datos se pushea
    //a su respectivo arereglo
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


    //se agrega una visita al cliente
    public nuevaVisitaACliente(): void {
        this.mostrarInfoClientes();
        let opcion: number = readline.questionInt("\nElija al cliente que desea agregar la visita: ");
        this.getClientes()[opcion].nuevaVisita();
        this.mostrarInfoClientes();
    }
    //se agrega una paciente/mascota a determinado
    public nuevoPacienteClienteExistente(): void {
        this.mostrarInfoClientes();
        let id: number;
        let opcion: number = readline.questionInt("\nElija al cliente que desea agregar el nuevo paciente: ");
        id = this.getClientes()[opcion].getId();
        this.generarBaseDeDatosPacientes(id)
    }


    //Metodo el cual se muestra por consola la informacion de las propiedades de cada arreglo
    //correspondiente, el cual por medio de una interaccion con el menu se elige cual elemento
    //se desea borrar
    public darBajaSucursal(): void {
        if (this.getSucursales().length > 0) {
            console.log(`\n--------Eliminar Sucursal--------\n`);
            this.mostrarInfoSucursales();
            let opcion: number = readline.questionInt("\nElija la sucursal que desea eliminar: ");
            this.getSucursales().splice(opcion, 1);
            this.mostrarInfoSucursales();
            console.log("\n---La sucursal ha sido eliminado con éxito---");
        } else {
            console.log("No hay ninguna sucursal en la base de datos");
        }
    }

    public darBajaCliente(): void {
        if (this.getClientes().length > 0) {
            console.log(`\n--------Eliminar Cliente--------\n`);
            this.mostrarInfoClientes();
            let opcion: number = readline.questionInt("\nElija el cliente que desea eliminar: ");
            this.getClientes().splice(opcion, 1);
            this.mostrarInfoClientes();
            console.log("\n---El cliente ha sido eliminado con éxito---");
        } else {
            console.log("No hay ningun cliente en la base de datos");
        }

    }

    public darBajaPaciente(): void {
        if (this.getPacientes().length > 0) {
            console.log(`\n--------Eliminar Paciente--------\n`);
            this.mostrarInfoPacientes();
            let opcion: number = readline.questionInt("\nElija el paciente que desea eliminar: ");
            this.getPacientes().splice(opcion, 1);
            this.mostrarInfoPacientes();
            console.log("\n---El paciente ha sido eliminado con éxito---");
        } else {
            console.log("No hay ningun paciente en la base de datos");
        }
    }

    //Metodo en el que por medio de la consola se muestran todos los elementos del arreglo y
    //se elige cual se desea modificar
    public modificarDatosSucursal(): void {
        if (this.getSucursales().length > 0) {
            console.log(`\n--------Modificar Sucursal--------\n`);
            this.mostrarInfoSucursales();
            let opcion: number = readline.questionInt("\nElija cual desea modificar: ");
            let nombre: string = readline.question("Nombre: ");
            let direccion: string = readline.question("Direccion: ");
            this.sucursales[opcion].setNombre(nombre);
            this.sucursales[opcion].setDireccion(direccion);
            this.mostrarInfoSucursales();
            console.log("\n---La sucursal ha sido modificada con éxito---");
        } else {
            console.log("**No hay ninguna sucursal en la base de datos**");
        }
      
    }

    public modificarDatosCliente(): void {
        if (this.getClientes().length > 0) {
            console.log(`\n--------Modificar Cliente--------\n`);
            this.mostrarInfoClientes();
            let opcionCliente: number = readline.questionInt("\nElija cual desea modificar: ");
            let nombre: string = readline.question("Nombre: ");
            let telefono: number = readline.questionInt("Telefono: ");
            let id: number = this.clientes[opcionCliente].getId();
            this.clientes[opcionCliente].setNombre(nombre);
            this.clientes[opcionCliente].setTelefono(telefono);
            this.mostrarInfoClientes();
            console.log("\n[1] Si\n[Cualquier otro numero] No");
            let opcionMascota: number = readline.questionInt("Desea agregar otra mascota a la base de datos del cliente?: ");
            if (opcionMascota === 1) {
                this.generarBaseDeDatosPacientes(id);
            } else {
                console.log("\n---El cliente ha sido modificada con éxito---");
            }
        } else {
            console.log("**No hay ningun cliente en la base de datos**");
        }
    }

    public modificarDatosPacientes(): void {
        if (this.getPacientes().length > 0) {
            console.log(`\n--------Modificar Paciente--------\n`);
            this.mostrarInfoPacientes();
            let opcion: number = readline.questionInt("\nElija cual desea modificar: ");
            let nombre: string = readline.question("Nombre: ");
            let especie: string = readline.question("Especie: ");
            this.pacientes[opcion].setMascotaNombre(nombre);
            this.pacientes[opcion].setEspecie(especie);
            this.mostrarInfoPacientes();
            console.log("\n---El paciente ha sido modificada con éxito---");
        } else {
            console.log("**No hay ningun paciente en la base de datos**");
        }
    }
}