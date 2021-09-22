export interface Publicacion {
    id?: number,
    usuario: number,
    curso?: number,
    catedratico?: number,
    fecha: Date,
    titulo: string,
    texto: string
}