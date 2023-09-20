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
        return this.clasificarEspecie(this.especie);
    }

    public setEspecie(nuevaEspecie: string){
        this.especie = nuevaEspecie;
    }

    public clasificarEspecie(especie): string{
        if (especie.toLowerCase() == "perro") {
            return especie.toLowerCase();
        } else if (especie.toLowerCase() == "gato") {
            return especie.toLowerCase();
        } else {
            return "exótica";
        }
    }
}
