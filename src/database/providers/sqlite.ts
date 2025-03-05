import { enviroment } from "../../utils/env/envinroment.js";
import { Connection } from "./connection.js";
import { DatabaseSync } from "node:sqlite";

class SQLite {
  private static instance: DatabaseSync | null;

  private constructor() {}

  public static getInstance(): DatabaseSync {
    if (!SQLite.instance) {
      SQLite.instance = new DatabaseSync(enviroment.DATABASE_URL);
    }
    return SQLite.instance;
  }
}
