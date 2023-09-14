import { Datos } from "./datos";

export class Clientes extends Datos{

    private visitas: number;

    public constructor(nombre: string, telefono: number, id: number, vip: boolean) {
        super(nombre, id, vip);
        this.visitas = 0;
    }
    public nuveVisita(){
        this.visitas += 1;
        if (this.visitas >= 5){
            this.setVip(true);
            console.log(`El cliente ${this.getNombre} ahora es VIP`);
            
        }
        console.log(`La cantidad de visitas realizadas por ${this.getNombre} es: ${this.visitas}`);
    }
    public cantidadDeVisitas(){
        console.log(`La cantidad de visitas realizadas por ${this.getNombre} es: ${this.visitas}`)
    }
    public consultaVIP(){
        if (this.visitas >= 5){
            console.log(`El cliente ${this.getNombre} es un usuario VIP`)    
        }
        else {
            console.log(`El cliente ${this.getNombre} NO es un usuario VIP`)
        }
    }
}