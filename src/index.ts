import { Discipline } from "./entities/discipline.js";
import { Workload } from "./entities/workload.js";

function main() {
  const disciplines: Discipline[] = [
    new Discipline(
      "Estrutura de Dados",
      new Workload(32, 32),
      null,
      true
    ),
  ];

  const fds = new Discipline(
    "Fundamentos de Engenharia de Software",
    new Workload(32, 32),
    null,
    true
  );

  const poo = new Discipline(
    "Programação Orientada a Objetos",
    new Workload(32, 32),
    fds,
    true
  );

  disciplines.push(fds);
  disciplines.push(poo);

  console.log(JSON.stringify(disciplines, null, 2));
  
}

main();
