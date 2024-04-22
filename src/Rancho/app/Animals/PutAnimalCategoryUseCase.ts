import { Animals } from "../../domain/entities/Animals";
import { AnimalsRepository } from "../../domain/repository/AnimalsRepository";

export class PutAnimalCategoryUseCase {
  constructor(readonly animalsRepository: AnimalsRepository) {}
  async run(id: number, raza: string): Promise<String | null> {
    try {
      const animal = await this.animalsRepository.putAnimalCategory(
        id,
        raza
      );
      return animal;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
