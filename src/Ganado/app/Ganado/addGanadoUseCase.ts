import { Ganado } from "../../domain/entities/Ganado";
import { GanadoRepository } from "../../domain/repository/GanadoRepository";

export class AddGanadoUseCase {
    constructor(readonly ganadoRepo: GanadoRepository){}
    async run (ganado: Ganado): Promise<Ganado | null>{
        try {
            const Ganad = await this.ganadoRepo.addGanado(ganado);
            return Ganad;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}