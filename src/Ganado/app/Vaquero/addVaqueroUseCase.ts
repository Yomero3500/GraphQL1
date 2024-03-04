import { Vaquero } from "../../domain/entities/Vaquero";
import { VaqueroRepository } from "../../domain/repository/VaqueroRepository";

export class AddVaqueroUseCase{
    constructor (readonly vaqueroRepo: VaqueroRepository){}
    async run(vaquero: Vaquero): Promise<Vaquero|null>{
        try {
            const vaq = await this.vaqueroRepo.addVaquero(vaquero);
            return vaq;
        } catch (error) {
            console.log("Error en el UseCase de AddVaquero: ", error);
            return null;
        }
    }
}