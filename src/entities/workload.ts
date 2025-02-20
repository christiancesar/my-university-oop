/**
 * Classe que representa a carga horária de uma disciplina.
 */
export class Workload {
  private pratical: number;
  private theorical: number;

  /**
   * Construtor da classe Workload.
   * @param pratical - Carga horária prática.
   * @param theorical - Carga horária teórica.
   */
  constructor(pratical: number, theorical: number) {
    this.pratical = pratical;
    this.theorical = theorical;
  }

  /**
   * Obtém a carga horária prática.
   * @returns A carga horária prática.
   */
  public getPratical(): number {
    return this.pratical;
  }

  /**
   * Obtém a carga horária teórica.
   * @returns A carga horária teórica.
   */
  public getTheorical(): number {
    return this.theorical;
  }

  /**
   * Obtém a carga horária total (prática + teórica).
   * @returns A carga horária total.
   */
  public getTotal(): number {
    return this.pratical + this.theorical;
  }

  /**
   * Define a carga horária prática.
   * @param pratical - Nova carga horária prática.
   */
  public setPratical(pratical: number): void {
    this.pratical = this.pratical + pratical;
  }

  /**
   * Define a carga horária teórica.
   * @param theorical - Nova carga horária teórica.
   */
  public setTheorical(theorical: number): void {
    this.theorical = this.theorical + theorical;
  }
}
