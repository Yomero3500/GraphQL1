import { Ganado } from "../../domain/entities/Ganado";
import { GanadoRepository } from "../../domain/repository/GanadoRepository";

export class GetParcelaUseCase{
    constructor (readonly ganadoRepo: GanadoRepository){}
    async run(parcela: string): Promise<Ganado[] | null>{
        try {
            const ganado = await this.ganadoRepo.getParcela(parcela);
            return ganado;
        } catch (error) {
            console.log("Error en el UseCase de GetParcela", error);
            return null;
        }
    }
}