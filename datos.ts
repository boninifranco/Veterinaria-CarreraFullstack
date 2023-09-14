class Datos{
    private nombre: string;
    private telefono: number;
    private id: number;
    private vip: boolean;

    constructor(nombre: string, telefono: number, id: number, vip: boolean){
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.vip = vip;
    }

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

    public getVip(): boolean{
        return this.vip;
    }
}