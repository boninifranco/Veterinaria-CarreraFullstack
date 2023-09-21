import { Datos } from "./datos";

export class Proveedores extends Datos{
    public constructor(nombre: string, telefono: number, id: number){
        super(nombre,telefono,id);
    }
}