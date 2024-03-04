export class Ganado{
    constructor(
        readonly id:number,
        readonly edad: number,
        readonly peso: number,
        readonly especie: string,
        readonly raza: string,
        readonly parcela: string,
        readonly precioPotencial: number
    ){}
}