import * as readline from "readline-sync";

import { Sucursal } from './sucursal';

class Veterinaria {
    private sucursales: Sucursal[];

    constructor() {
        this.sucursales = [];
    }

    public get getSucursales(): Sucursal[] {
        return this.sucursales;
    }

    public setSucursal(sucursal: Sucursal): void {
        this.sucursales.push(sucursal);
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
        this.mostrarInfoSucursal();
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

    public mostrarInfoSucursal(): void {
        this.sucursales.forEach((sucursal, index) => {
            console.log(`[${index}]  Nombre: ${sucursal.getNombre}     Direccion ${sucursal.getDireccion}     ID: ${sucursal.getId}     `);
        });
    }

    public darAltaSucursal(nuevaSucursal: Sucursal): void {
        console.log("\nLa sucursal se ha agregado con éxito\n");
        this.setSucursal(nuevaSucursal);
    }

    public darBajaSucursal(): void {
        console.log(`\n--------Eliminar Sucursal--------\n`);
        this.mostrarInfoSucursal();
        let opcion: number = readline.questionInt("\nElija la sucursal que desea eliminar: ");
        this.getSucursales.splice(opcion, 1);
        console.log("\nLa sucursal ha sido eliminado con éxito");
    }

    public modificarDatosSucursal(): void {
        console.log(`\n--------Modificar Sucursal--------\n`);
        this.mostrarInfoSucursal();
        let opcion: number = readline.questionInt("\nElija cual desea modificar: ");
        let nombre: string = readline.question("Nombre: ");
        let direccion: string = readline.question("Direccion: ");
        this.sucursales[opcion].setNombre(nombre);
        this.sucursales[opcion].setDireccion(direccion);
        console.log("\nLa sucursal ha sido modificada con éxito");
    }
}