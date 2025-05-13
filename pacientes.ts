export class Pacientes {
    private nombre: string;
    private especie: string;
    private id: number;

    constructor(nombre: string, especie: string, id: number){
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
    }
    // Getters y setters:
    public getMascotaNombre(): string {
        return this.nombre;
    }

    public setMascotaNombre(nuevaMascota: string) {
        this.nombre = nuevaMascota;
    }

    public getEspecie(): string {
        return this.clasificarEspecie(this.especie);
    }

    public setEspecie(nuevaEspecie: string) {
        this.especie = nuevaEspecie;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }
    // Se crea metodo para clasificar el tipo de especie:
    // Se usa "toLowerCase" para no tener conflictos a la hora de ingresar datos por consola. (Devuelve el valor en minusculas):
    public clasificarEspecie(especie: string): string {

        if (especie.toLowerCase() == "perro") {
            return especie.toLowerCase();
        } else if (especie.toLowerCase() == "gato") {
            return especie.toLowerCase();
        } else {
            return "exótica";
        }
    }
}
