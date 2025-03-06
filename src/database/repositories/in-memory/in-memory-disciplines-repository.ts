import { Discipline } from "../../../entities/discipline.js";

/**
 * Repositório de Disciplinas em Memória
 */
export class InMemoryDisciplinesRepository {
  private disciplines: Discipline[] = [];

  /**
   * Salva uma disciplina no repositório.
   * @param discipline - A disciplina a ser salva.
   */
  save(discipline: Discipline): void {
    this.disciplines.push(discipline);
  }

  /**
   * Encontra uma disciplina pelo ID.
   * @param id - O ID da disciplina.
   * @returns A disciplina encontrada ou undefined se não encontrada.
   */
  findById(id: string): Discipline | undefined {
    return this.disciplines.find((discipline) => discipline.getId() === id);
  }

  /**
   * Retorna todas as disciplinas no repositório.
   * @returns Uma lista de todas as disciplinas.
   */
  findAll(): Discipline[] {
    return this.disciplines;
  }

  /**
   * Encontra uma disciplina pelo ID curto.
   * @param shortId - O ID curto da disciplina.
   * @returns A disciplina encontrada ou undefined se não encontrada.
   */
  findByShortId(shortId: number): Discipline | undefined {
    return this.disciplines.find(
      (discipline) => discipline.shortId === shortId
    );
  }

  /**
   * Encontra disciplinas pelo nome.
   * @param name - O nome da disciplina.
   * @returns Uma lista de disciplinas encontradas ou undefined se nenhuma for encontrada.
   */
  findByName(name: string): Discipline[] | undefined {
    return this.disciplines.filter(
      (discipline) => discipline.name.toLocaleLowerCase().search(name) !== -1
    );
  }
}
