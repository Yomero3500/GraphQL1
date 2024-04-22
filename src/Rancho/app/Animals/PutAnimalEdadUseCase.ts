import { Animals } from "../../domain/entities/Animals";
import { AnimalsRepository } from "../../domain/repository/AnimalsRepository";

export class putAnimalEdadUseCase {
  constructor(readonly animalsRepository: AnimalsRepository) {}
  async run(nombreGanado: string, edad: number): Promise<String | null> {
    try {
      const animal = await this.animalsRepository.putAnimalEdad(nombreGanado, edad);
      return animal;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
