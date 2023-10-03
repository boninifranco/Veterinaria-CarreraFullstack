export class Datos{
    private nombre: string;
    private telefono: number;
    private id: number;

    constructor(nombre: string, telefono: number, id: number){
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
    }
    // Getters y setters:
    public getNombre(): string{
        return this.nombre;
    }

    public setNombre(nuevoNombre: string){
        this.nombre = nuevoNombre;
    }

    public getTelefono(): number{
        return this.telefono;
    }

    public setTelefono(nuevoTelefono: number){
        this.telefono = nuevoTelefono;
    }

    public getId(): number{
        return this.id;
    }

    public setId(nuevoId: number){
        this.id = nuevoId;
    }
}