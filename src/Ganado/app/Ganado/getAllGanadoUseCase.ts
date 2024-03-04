import { Ganado } from "../../domain/entities/Ganado";
import { GanadoRepository } from "../../domain/repository/GanadoRepository";

export class GetAllGanadoUseCase{
    constructor (readonly ganadoRepo: GanadoRepository){}
    async run():Promise<Ganado[]|null>{
        try {
            const ganados= await this.ganadoRepo.getAllGanado();
            return ganados;
        } catch (error) {
            console.log("Error en el UseCase de GetAllGanado", error);
            return null;
        }
    }
}