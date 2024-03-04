import { Token } from "graphql";
import { Vaquero } from "../entities/Vaquero";

export interface VaqueroRepository{
    addVaquero(vaquero:Vaquero):Promise<Vaquero|null>;
    getOneVaquero(nombre:string, edad: number):Promise<[vaquero:Vaquero[], token:string]|null>;
}