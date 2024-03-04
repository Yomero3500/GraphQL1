import { Ganado } from "../../domain/entities/Ganado";
import { GanadoRepository } from "../../domain/repository/GanadoRepository";

export class DeleteGanadoUseCase{
    constructor(readonly ganadoRepo: GanadoRepository){}
        async run(id:number):Promise<string|null>{
            try {
                const ganado = await this.ganadoRepo.deleteGanado(id);
                if (ganado) {
                    return "Se ha eliminado el registro"
                } else {
                    return "No se elimino el registro";
                }
            } catch (error) {
                console.log("Error en el UseCase de DeleteGanado:",error);
                return null;
            }
        }

}