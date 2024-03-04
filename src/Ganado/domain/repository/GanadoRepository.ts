import { Ganado } from "../entities/Ganado";

export interface GanadoRepository {
    addGanado(ganado: Ganado): Promise <Ganado | null>;
    deleteGanado(id: number):Promise<string | null>;
    getGanadoByID(id: number): Promise<Ganado | null>;
    getRaza(raza:string): Promise<Ganado[] | null>;
    getParcela(parcela: string):Promise<Ganado[] | null>;
    getAllGanado():Promise <Ganado[] | null>;
    putGanadoPrecio(nombre: string, id: number): Promise<Ganado | null>;
}