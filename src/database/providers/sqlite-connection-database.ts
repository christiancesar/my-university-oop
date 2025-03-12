import { DatabaseSync } from "node:sqlite";
import { Environment } from "../../shared/env/environment.js";

class SQLite {
  private static instance: DatabaseSync | null = null;
  private constructor() {}
  public static getInstance(): DatabaseSync {
    const databasePath = Environment.getInstance().DATABASE_URL;
    if (!SQLite.instance) {
      SQLite.instance = new DatabaseSync(databasePath);
    }
    return SQLite.instance;
  }
}

export const sqlite = SQLite.getInstance();
