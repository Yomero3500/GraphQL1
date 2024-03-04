import { Ganado } from "../../domain/entities/Ganado";
import { GanadoRepository } from "../../domain/repository/GanadoRepository";

export class GetRazaUseCase {
    constructor (readonly ganadoRepo: GanadoRepository){}
    async run(raza: string): Promise<Ganado[] | null>{
        try {
            const ganado = await this.ganadoRepo.getRaza(raza);
            return ganado;
        } catch (error) {
            console.log("Error en el UseCase de GetRaza", error);
            return null;
        }
    }
}