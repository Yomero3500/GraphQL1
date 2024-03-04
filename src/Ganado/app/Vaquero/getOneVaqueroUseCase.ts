import { Vaquero } from "../../domain/entities/Vaquero";
import { VaqueroRepository } from "../../domain/repository/VaqueroRepository";
import { IBryptServices } from "../services/IBcrypt";
import { ServicesTokensUser } from "../services/TokenService";

export class GetOneVaqueroUseCase{
    constructor(readonly vaqueroRepo: VaqueroRepository, readonly tokenService: ServicesTokensUser, readonly bcrypt: IBryptServices){}
    async run (nombre: string, edad: number): Promise<[Vaquero[], string]|null>{
        try {
            const vaquero = await this.vaqueroRepo.getOneVaquero(nombre, edad);
            if (vaquero) {
                let vaq1: Object = vaquero[0];
                if ("nombre" in vaq1) {
                    let tolkin =  await this.tokenService.run(nombre, String(process.env.TOKEN_SECRETO), 100*100);
                    const data : any = [vaquero, tolkin];
                    return data;
                } else {
                    return null;
                }
            } else {
                return null;
            }
        } catch (error) {
            console.log("Error en el UseCase de GetOneVaquero: " + error);
            return null;
        }
    }
}