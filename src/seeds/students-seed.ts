import { Student } from "../entities/student.js";
import { StudentsFactory } from "../factories/students-factory.js";

export class StudentsSeed {
  static execute(): Student[] {
    return [
      StudentsFactory.make({
        name: "Alysson Eduardo Sobrinho Rodrigues",
      }),
      StudentsFactory.make({
        name: "Anna Beatriz Fernandes Araujo",
      }),
      StudentsFactory.make({
        name: "Antonio Gabriel de Souza Silva Fernandes",
      }),
      StudentsFactory.make({
        name: "Bruno Gabriel Palmeira da Costa Paniago",
      }),
      StudentsFactory.make({
        name: "Carla Cintra",
      }),
      StudentsFactory.make({
        name: "Cristhian Gabriel Padim Araujo",
      }),
      StudentsFactory.make({
        name: "Daniel Castilho de Oliveira",
      }),
      StudentsFactory.make({
        name: "Danielly Santos Nunes de Oliveira",
      }),
      StudentsFactory.make({
        name: "Daniel Veloso da Silva",
      }),
      StudentsFactory.make({
        name: "Douglas Pereira de Godoy",
      }),
      StudentsFactory.make({
        name: "Eagles de Amorim Oliveira",
      }),
      StudentsFactory.make({
        name: "Edson Tasca Porto Neto",
      }),
      StudentsFactory.make({
        name: "Fellipp e Victorio Meciano Fernandes",
      }),
      StudentsFactory.make({
        name: "Gabriel de Sousa",
      }),
      StudentsFactory.make({
        name: "Gabriel Eduardo Dembinski",
      }),
      StudentsFactory.make({
        name: "Gabriella da Silva Nunes",
      }),
      StudentsFactory.make({
        name: "Gabriel Ribeiro Vitor",
      }),
      StudentsFactory.make({
        name: "Guilherme Antony Sousa Rizzi",
      }),
      StudentsFactory.make({
        name: "Guilherme Ribeiro Barros",
      }),
      StudentsFactory.make({
        name: "Guilherme Ricardo Pires Nunes",
      }),
      StudentsFactory.make({
        name: "Henrique Pedrôso Morais Loiola",
      }),
      StudentsFactory.make({
        name: "Hugo Adriano de Oliveira",
      }),
      StudentsFactory.make({
        name: "Ian Clei Eichler Cecilio",
      }),
      StudentsFactory.make({
        name: "Iasmyn Gabriely de Melo Matos",
      }),
      StudentsFactory.make({
        name: "Isaac Pierry Farias Ferreira",
      }),
      StudentsFactory.make({
        name: "Jaylson Medeiros da Silva",
      }),
      StudentsFactory.make({
        name: "Jhuan Sales Silva",
      }),
      StudentsFactory.make({
        name: "Joabe dos Santos Nogueira",
      }),
      StudentsFactory.make({
        name: "João Pedro Franco Brocuá de Carvalho",
      }),
      StudentsFactory.make({
        name: "Joao Vitor da Veiga Lafourcade",
      }),
      StudentsFactory.make({
        name: "Joni de Oliveira Gamarra",
      }),
      StudentsFactory.make({
        name: "Jordana Bezerra de Almeida",
      }),
      StudentsFactory.make({
        name: "Kamila Noely Cardoso Tavares",
      }),
      StudentsFactory.make({
        name: "Kazuo Vitor Moraes Aiura",
      }),
      StudentsFactory.make({
        name: "Leonardo Cavalcante Araujo Borchardt",
      }),
      StudentsFactory.make({
        name: "Luan dos Santos Souza",
      }),
      StudentsFactory.make({
        name: "Maria Luisa Figueiredo Dias de Santana",
      }),
    ];
  }
}
