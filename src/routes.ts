import { Router, Request, Response } from "express";
import { CreateUniversityUseCase } from "./use-cases/create-university-use-case.js";
import { UniversitiesRepositoryPg } from "./database/repositories/pgsql/universities-repository-pg.js";
import { UniversitiesRepositorySqlite } from "./database/repositories/sqlite/implementations/universities-repository-sqlite.js";

export const routes = Router();

/**
 * Instância de repositórios que serão utilizados pelo caso de uso de criação de universidade.
 * Independente do banco de dados que será utilizado, o caso de uso de criação de universidade
 * não precisa ser alterado, pois ele depende de uma interface que é implementada por cada repositório.
 */
const universitiesRepositorySQlite = new UniversitiesRepositorySqlite();
const universitiesRepositoryPG = new UniversitiesRepositoryPg();

/**
 * Instância do caso de uso de criação de universidade que será utilizado pela rota de criação de universidade.
 * Neste contexto, como temos implementação de fato apenas do SQlite, será utilizado o repositório do SQlite.
 * Mas deixarei o repositório do PG para fins de exemplo.
 */
const createUniversity = new CreateUniversityUseCase(universitiesRepositoryPG);

/**
 * A ideia deste projeto é construir uma "API Restful", portanto precisamos expor rotas que serão acessadas via http,
 * utilizando seus verbos (GET, POST, PUT, DELETE, etc). E retornando respostas em formato JSON, com os devidos códigos
 * de status HTTP. Como 100, 200, 300, 400, 500. Veja abaixo alguns links que podem te ajudar a entender melhor sobre
 * o que é uma API Restful e qual o objetivo de se construir uma.
 * * O que é REST e RESTful: você sabe qual a diferença entre elas?
 * @link https://www.linkedin.com/pulse/api-rest-e-restful-voc%C3%AA-sabe-qual-diferen%C3%A7a-entre-elas-gomes-rocha/
 * @link https://pt.stackoverflow.com/questions/45783/o-que-%C3%A9-rest-e-restful
 * @link https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api
 *
 * * Verbos HTTP e códigos de status HTTP
 * @link https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
 * @link https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
 *
 * @example
 * * Exemplo de como acessar parâmetros de rota (params), query params e corpo da requisição (body)
 *
 * routes.post("/universities", (request: Request, response: Response) => {
 *   const { name, location } = request.body; // Acessando o corpo da requisição
 *   response.json({
 *     message: "Universidade criada com sucesso",
 *     name,
 *     location,
 *   });
 * });
 *
 * routes.get("/universities/:id", (request: Request, response: Response) => {
 *   const { id } = request.params; // Acessando parâmetros de rota
 *   const { name } = request.query; // Acessando query params
 *   response.json({
 *     message: "Detalhes da universidade",
 *     id,
 *     name,
 *   });
 * });
 */

/**
 * Rota para criação de uma nova universidade.
 * Utiliza o método POST para enviar os dados da nova universidade no corpo da requisição.
 */
routes.post("/universities", async (request: Request, response: Response) => {
  const { name, location } = request.body;
  try {
    await createUniversity.execute({ name, addressId: location });
    response.status(201).json({ message: "Universidade criada com sucesso" });
  } catch (error) {
    response.status(400).json({ message: "Erro ao criar universidade", error });
  }
});

/**
 * Rota para deletar uma universidade existente.
 * Utiliza o método DELETE e o id da universidade é passado como parâmetro de rota.
 */
routes.delete(
  "/universities/:id",
  async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
      // Aqui você chamaria o caso de uso de deletar universidade
      response
        .status(200)
        .json({ message: `Universidade com id ${id} deletada com sucesso` });
    } catch (error) {
      response
        .status(400)
        .json({ message: "Erro ao deletar universidade", error });
    }
  }
);

/**
 * Rota para atualizar uma universidade existente.
 * Utiliza o método PATCH para enviar os dados a serem atualizados no corpo da requisição.
 */
routes.patch(
  "/universities/:id",
  async (request: Request, response: Response) => {
    const { id } = request.params;
    const { name, location } = request.body;
    try {
      // Aqui você chamaria o caso de uso de atualizar universidade
      response
        .status(200)
        .json({ message: `Universidade com id ${id} atualizada com sucesso` });
    } catch (error) {
      response
        .status(400)
        .json({ message: "Erro ao atualizar universidade", error });
    }
  }
);

/**
 * Rota para substituir uma universidade existente.
 * Utiliza o método PUT para enviar os dados completos da universidade no corpo da requisição.
 */
routes.put(
  "/universities/:id",
  async (request: Request, response: Response) => {
    const { id } = request.params;
    const { name, location } = request.body;
    try {
      // Aqui você chamaria o caso de uso de substituir universidade
      response
        .status(200)
        .json({ message: `Universidade com id ${id} substituída com sucesso` });
    } catch (error) {
      response
        .status(400)
        .json({ message: "Erro ao substituir universidade", error });
    }
  }
);

/**
 * Rota para listar todas as universidades.
 * Utiliza o método GET para retornar uma lista de universidades.
 */
routes.get("/universities", async (request: Request, response: Response) => {
  try {
    // Aqui você chamaria o caso de uso de listar universidades
    response
      .status(200)
      .json({ message: "Lista de universidades", universities: [] });
  } catch (error) {
    response
      .status(400)
      .json({ message: "Erro ao listar universidades", error });
  }
});
