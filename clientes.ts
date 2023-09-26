import { Datos } from "./datos";

export class Clientes extends Datos{

    private visitas: number;
    private vip: boolean;

    public constructor(nombre: string, telefono: number, id: number) {
        super(nombre, telefono, id)
        this.visitas = 0;
        this.vip = false;
    }
    //Método acumulador de visitas:
    public nuevaVisita(){
        this.visitas += 1;
        if (this.visitas >= 5){
            this.setVip(true);
            console.log(`El cliente ${this.getNombre()} ahora es VIP`);
            
        }
        console.log(this.cantidadDeVisitas());
    }
    //Método que devuelve la cantidad de visitas:
    public cantidadDeVisitas(){
        console.log(`La cantidad de visitas realizadas por ${this.getNombre()} es: ${this.visitas}`)
    }
    //Método para consultar 
    public consultaVIP(){
        if (this.getVip() === true){
            console.log(`El cliente ${this.getNombre()} es un usuario VIP`)    
        }
        else {
            console.log(`El cliente ${this.getNombre()} NO es un usuario VIP`)
        }
    }
    //Getters y Setters:
    public getVisitas(){
        return this.visitas;
    }
    public setVisitas(cantidad: number){
        this.visitas = cantidad;
    }
    public getVip(){
        return this.vip;
    }
    public setVip(ingresoVip: boolean){
        this.vip = ingresoVip;
    }
}