class Pacientes{
    private nombre: string;
    private especie: string;

    constructor(nombre: string, especie: string){
        this.nombre = nombre;
        this.especie = especie;
    }

    public getMascotaNombre(): string{
        return this.nombre;
    }

    public setMascotaNombre(nuevaMascota: string){
        this.nombre = nuevaMascota;
    }

    public getEspecie(): string{
        return this.especie;
    }

    public setEspecie(nuevaEspecie: string){
        this.especie = nuevaEspecie;
    }
}