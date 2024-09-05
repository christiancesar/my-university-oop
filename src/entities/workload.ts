export class Workload {
  private pratical: number;
  private theorical: number;

  constructor(pratical: number, theorical: number) {
    this.pratical = pratical;
    this.theorical = theorical;
  }

  public getPratical(): number {
    return this.pratical;
  }

  public getTheorical(): number {
    return this.theorical;
  }

  public getTotal(): number {
    return this.pratical + this.theorical;
  }

  setPratical(pratical: number): void {
    this.pratical += pratical;
  }

  setTheorical(theorical: number): void {
    this.theorical += theorical;
  }
}
