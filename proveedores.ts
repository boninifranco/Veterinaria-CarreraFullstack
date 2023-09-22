import * as readline from "readline-sync";

import { Datos } from "./datos";

export class Proveedores extends Datos{

    private proveedores: Proveedores[];

    public constructor(nombre: string, telefono: number, id: number){
        super(nombre,telefono,id);
        
        this.proveedores = [];
    }
    //Getters y Setters:
    public get getProveedores(): Proveedores[]{
        return this.proveedores;
    }
    public setProveedores(proveedor: Proveedores): void{
        this.proveedores.push(proveedor);
    }

    //ABM Proovedores:
    public generarBaseDeDatosProveedores(): void {
        console.log(`\n--------Agregar Proveedor--------\n`);
        let nombre: string = readline.question("Nombre: ");
        let telefono: number = readline.questionInt("Telefono: ");
        let id: number;
        do {
            id = this.generarId();
        } while (!this.esIdUnico(id));
        console.log("Se crea el proveedor");
        let nuevoProveedor: Proveedores = new Proveedores(nombre, telefono, id);
        this.darAltaProveedor(nuevoProveedor);
        this.mostrarInfoProveedores();
    }

    public mostrarInfoProveedores(): void {
        this.proveedores.forEach((proveedor, index) => {
            console.log(`[${index}]  Nombre: ${proveedor.getNombre()}     Telefono: ${proveedor.getTelefono()}     ID: ${proveedor.getId()} `);
        });
    }

    public darAltaProveedor(nuevoProveedor: Proveedores): void {
        console.log("\nEl Proveedor se ha agregado con éxito\n");
        this.setProveedores(nuevoProveedor);
    }

    public darBajaProveedor(): void {
        console.log(`\n--------Eliminar Proveedor--------\n`);
        this.mostrarInfoProveedores();
        let opcion: number = readline.questionInt("\nElija el proveedor que desea eliminar: ");
        this.getProveedores.splice(opcion, 1);
        console.log("\nEl proveedor ha sido eliminado con éxito");
    }

    public modificarDatosProveedor(): void {
        console.log(`\n--------Modificar Proveedor--------\n`);
        this.mostrarInfoProveedores();
        let opcion: number = readline.questionInt("\nElija cual desea modificar: ");
        let nombre: string = readline.question("Nombre: ");
        let telefono: number = readline.questionInt("Telefono: ");
        this.proveedores[opcion].setNombre(nombre);
        this.proveedores[opcion].setTelefono(telefono);
        console.log("\nEl proveedor ha sido modificada con éxito");
    }

    //ID:
    public generarId(): number {
        return Math.floor(Math.random() * 10) + 1;
    }
    public esIdUnico(id: number): boolean {
        for (const proveedor of this.proveedores) {
            if (proveedor.getId() === id) {
                return false;
            }
        }
        return true;
    }
}