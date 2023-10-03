export class Sucursal {
    private nombre: string;
    private direccion: string;
    private id: number;

    public constructor(nombre: string, direccion: string, id: number) {
            this.nombre = nombre;
            this.direccion = direccion;
            this.id = id;
    }
    // Getters y setters:
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getId(): number {
        return this.id
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }
}