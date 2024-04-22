import { Animals } from "../entities/Animals";

export interface AnimalsRepository {
  getAll(): Promise<Animals[] | null>;
  getById(id:number,): Promise<Animals | null>;
  getEspecie(especie: string): Promise<Animals[] | null>;
  putAnimalEdad(nombreGanado: string, edad: number): Promise<String | null>;
  createAnimal(animal: Animals): Promise<Animals | null>;
  putAnimalCategory(
    id: number,
    raza: string
  ): Promise<String | null>;
  deleteAnimal(id: number): Promise<string | null>
}
