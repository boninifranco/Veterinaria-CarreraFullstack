import * as readline from "readline-sync";

import { ABM } from "./abm-interfaz";

class Veterinarias implements ABM<Veterinarias> {
    private nombre?: string;
    private direccion?: string;
    private id?: number;
    private veterinaria: Veterinarias[];

    public constructor(nombre?: string, direccion?: string, id?: number) {
        if (nombre !== undefined && direccion !== undefined && id !== undefined) {
            this.nombre = nombre;
            this.direccion = direccion;
            this.id = id;
        } else {
            this.veterinaria = [];
            this.generarBaseDeDatos();
        }
    }

    public get getNombre(): string | undefined  {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public get getId(): number | undefined  {
        return this.id
    }

    public setId(id: number): void {
        this.id = id;
    }

    public get getDireccion(): string | undefined {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public get getVeterinarias(): Veterinarias[] {
        return this.veterinaria;
    }

    public setVeterinaria(veterinaria: Veterinarias): void {
        this.veterinaria.push(veterinaria);
    }

    public generarBaseDeDatos(): void {
        console.log(`\n--------Agregar Veterinaria--------\n`);
        let nombre: string = readline.question("Nombre: ");
        let direccion: string = readline.question("Direccion: ");
        let id: number;

        do {
            id = this.generarId();
        } while (!this.esIdUnico(id));
        console.log("Se crea la veterinaria");
        let nuevaVeterinaria: Veterinarias = new Veterinarias(nombre, direccion, id);
        this.darAlta(nuevaVeterinaria);
        this.mostrarInfoVeterinaria();
    }

    public esIdUnico(id: number): boolean {
        for (const veterinaria of this.getVeterinarias) {
            if (veterinaria.getId === id) {
                return false;
            }
        }
        return true;
    }

    public generarId(): number {
        return Math.floor(Math.random() * 100) + 1;
    }

    public mostrarInfoVeterinaria(): void {
        this.veterinaria.forEach((cliente, index) => {
            console.log(`[${index}]  Nombre: ${cliente.getNombre}     Direccion ${cliente.getDireccion}     ID: ${cliente.getId}     `);
        });
    }

    public darAlta(nuevaVeterinaria: Veterinarias): void {
        console.log("\nLa veterinaria se ha agregado con éxito\n");
        this.setVeterinaria(nuevaVeterinaria);
    }

    public darBaja(): void {
        console.log(`\n--------Eliminar Veterinarias--------\n`);
        this.mostrarInfoVeterinaria();
        let opcion: number = readline.questionInt("\nElija la veterinaria que desea eliminar: ");
        this.getVeterinarias.splice(opcion, 1);
        console.log("\nLa veterinaria ha sido eliminado con éxito");
    }

    public modificarDatos(): void {
        console.log(`\n--------Modificar Veterinaria--------\n`);
        this.mostrarInfoVeterinaria();
        let opcion: number = readline.questionInt("\nElija a quien desea modificar: ");
        let nombre: string = readline.question("Nombre: ");
        let direccion: string = readline.question("Direccion: ");
        this.veterinaria[opcion].setNombre(nombre);
        this.veterinaria[opcion].setDireccion(direccion);
        console.log("\nLa veterinaria ha sido modificado con éxito");
        console.log(this.veterinaria);
    }
}

let veterinarias: Veterinarias = new Veterinarias();