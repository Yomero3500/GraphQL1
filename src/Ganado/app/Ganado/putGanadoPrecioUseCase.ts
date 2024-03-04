import { Ganado } from "../../domain/entities/Ganado";
import { GanadoRepository } from "../../domain/repository/GanadoRepository";

export class PutGanadoPrecioUseCase{
    constructor(readonly ganadoRepo:GanadoRepository){}
    async run(nombre: string, id: number): Promise<Ganado|null>{
        try {
            const ganado = await this.ganadoRepo.putGanadoPrecio(nombre, id);
            return ganado;
        } catch (error) {
            console.log("Error en el UseCase de PutGanado:", error);
            return null;
        }
    }
}