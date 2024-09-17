import { Student } from "../entities/inheritance-examples/student-inheritance.js";
import { StudentFactory } from "../factories/student-factory.js";

export class StudentsSeed {
  static execute(): Student[] {
    return [
      StudentFactory.make({
        name: "Alysson Eduardo Sobrinho Rodrigues",
      }),
      StudentFactory.make({
        name: "Anna Beatriz Fernandes Araujo",
      }),
      StudentFactory.make({
        name: "Antonio Gabriel de Souza Silva Fernandes",
      }),
      StudentFactory.make({
        name: "Bruno Gabriel Palmeira da Costa Paniago",
      }),
      StudentFactory.make({
        name: "Carla Cintra",
      }),
      StudentFactory.make({
        name: "Cristhian Gabriel Padim Araujo",
      }),
      StudentFactory.make({
        name: "Daniel Castilho de Oliveira",
      }),
      StudentFactory.make({
        name: "Danielly Santos Nunes de Oliveira",
      }),
      StudentFactory.make({
        name: "Daniel Veloso da Silva",
      }),
      StudentFactory.make({
        name: "Douglas Pereira de Godoy",
      }),
      StudentFactory.make({
        name: "Eagles de Amorim Oliveira",
      }),
      StudentFactory.make({
        name: "Edson Tasca Porto Neto",
      }),
      StudentFactory.make({
        name: "Fellipp e Victorio Meciano Fernandes",
      }),
      StudentFactory.make({
        name: "Gabriel de Sousa",
      }),
      StudentFactory.make({
        name: "Gabriel Eduardo Dembinski",
      }),
      StudentFactory.make({
        name: "Gabriella da Silva Nunes",
      }),
      StudentFactory.make({
        name: "Gabriel Ribeiro Vitor",
      }),
      StudentFactory.make({
        name: "Guilherme Antony Sousa Rizzi",
      }),
      StudentFactory.make({
        name: "Guilherme Ribeiro Barros",
      }),
      StudentFactory.make({
        name: "Guilherme Ricardo Pires Nunes",
      }),
      StudentFactory.make({
        name: "Henrique Pedrôso Morais Loiola",
      }),
      StudentFactory.make({
        name: "Hugo Adriano de Oliveira",
      }),
      StudentFactory.make({
        name: "Ian Clei Eichler Cecilio",
      }),
      StudentFactory.make({
        name: "Iasmyn Gabriely de Melo Matos",
      }),
      StudentFactory.make({
        name: "Isaac Pierry Farias Ferreira",
      }),
      StudentFactory.make({
        name: "Jaylson Medeiros da Silva",
      }),
      StudentFactory.make({
        name: "Jhuan Sales Silva",
      }),
      StudentFactory.make({
        name: "Joabe dos Santos Nogueira",
      }),
      StudentFactory.make({
        name: "João Pedro Franco Brocuá de Carvalho",
      }),
      StudentFactory.make({
        name: "Joao Vitor da Veiga Lafourcade",
      }),
      StudentFactory.make({
        name: "Joni de Oliveira Gamarra",
      }),
      StudentFactory.make({
        name: "Jordana Bezerra de Almeida",
      }),
      StudentFactory.make({
        name: "Kamila Noely Cardoso Tavares",
      }),
      StudentFactory.make({
        name: "Kazuo Vitor Moraes Aiura",
      }),
      StudentFactory.make({
        name: "Leonardo Cavalcante Araujo Borchardt",
      }),
      StudentFactory.make({
        name: "Luan dos Santos Souza",
      }),
      StudentFactory.make({
        name: "Maria Luisa Figueiredo Dias de Santana",
      }),
    ];
  }
}
