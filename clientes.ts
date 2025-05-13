import { Datos } from "./datos";

export class Clientes extends Datos {

    private visitas: number;
    private vip: boolean;

    public constructor(nombre: string, telefono: number, id: number) {
        super(nombre, telefono, id)
        this.visitas = 0;
        this.vip = false;
    }
    //Método acumulador de visitas:
    public nuevaVisita(): void {
        this.visitas += 1;
        if (this.visitas >= 5) {
            this.setVip(true);
            console.log(`\nEl cliente ${this.getNombre()} ahora es VIP\n`);

        }
    }
    
    //Método para consultar 
    public consultaVIP(): void {
        if (this.getVip() === true) {
            console.log(`\nEl cliente ${this.getNombre()} es un usuario VIP\n`)
        }
        else {
            console.log(`El cliente ${this.getNombre()} NO es un usuario VIP`)
        }
    }
    //Getters y Setters:
    public getVisitas(): number {
        return this.visitas;
    }
    public setVisitas(cantidad: number) {
        this.visitas = cantidad;
    }
    public getVip(): boolean {
        return this.vip;
    }
    public setVip(ingresoVip: boolean): void {
        this.vip = ingresoVip;
    }
}