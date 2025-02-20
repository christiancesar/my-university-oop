import { Student } from "../entities/student.js";

/**
 * Repositório de Estudantes em Memória
 */
export class InMemoryStudentsRepository {
  private students: Student[] = [];

  /**
   * Salva um estudante no repositório.
   * @param student - O estudante a ser salvo.
   */
  save(student: Student): void {
    this.students.push(student);
  }

  /**
   * Encontra um estudante pelo ID.
   * @param id - O ID do estudante.
   * @returns O estudante encontrado ou undefined se não encontrado.
   */
  findById(id: string): Student | undefined {
    return this.students.find((student) => student.getId() === id);
  }

  /**
   * Encontra estudantes pelo nome.
   * @param name - O nome do estudante.
   * @returns Uma lista de estudantes encontrados ou undefined se nenhum for encontrado.
   */
  findByName(name: string): Student[] | undefined {
    return this.students.filter(
      (student) => student.getName().toLocaleLowerCase().search(name) !== -1
    );
  }

  /**
   * Retorna todos os estudantes no repositório.
   * @returns Uma lista de todos os estudantes.
   */
  findAll(): Student[] {
    return this.students;
  }
}
