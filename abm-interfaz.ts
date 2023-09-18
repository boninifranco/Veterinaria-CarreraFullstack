export interface ABM<T> {
    darAlta(item: T): void;
    darBaja(): void;
    modificarDatos(): void;
}