class Pacientes{
    private nombre: string;
    private especie: string;

    constructor(nombre: string, especie: string){
        this.nombre = nombre;
        this.setEspecie(especie); // # setEspecie para validar la especie #
    }

    public getMascotaNombre(): string{
        return this.nombre;
    }

    public setMascotaNombre(nuevaMascota: string){
        this.nombre = nuevaMascota;
    }

    public getEspecie(): string{
        return this.clasificarEspecie(); // # metodo para obtener la especie #
    }

    public setEspecie(nuevaEspecie: string){
        this.especie = nuevaEspecie;
    }

    private clasificarEspecie(): string{
        let perros: string[] = ["perro", "perrito", "can"];
        let gatos: string[] = ["gato", "gatito", "felino"];
        let especieLowerCase: string = this.especie.toLowerCase();
        if (perros.includes(especieLowerCase)) {
            return "Es un perro";
        } else if (gatos.includes(especieLowerCase)) {
            return "Es un gato";
        } else {
            return "Es una especie exótica";
        }
    }
}