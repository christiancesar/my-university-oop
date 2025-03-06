import { DatabaseSync } from "node:sqlite";
import { sqlite } from "../../../providers/sqlite-connection-database.js";

type Table = Record<string, string>;

const tablesRecord: Table = {
  addresses: `CREATE TABLE IF NOT EXISTS addresses (
    id TEXT PRIMARY KEY,
    street TEXT NOT NULL,
    number TEXT NOT NULL,
    complement TEXT,
    neighborhood TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    country TEXT NOT NULL,
    zipcode TEXT NOT NULL
  )`,
  universities: `CREATE TABLE IF NOT EXISTS universities (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    address_id TEXT,
    FOREIGN KEY (address_id) REFERENCES addresses (id)
  )`,
  disciplines: `CREATE TABLE IF NOT EXISTS disciplines (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    short_id TEXT NOT NULL,
    period INTEGER NOT NULL,
    pre_requisite_id TEXT,
    workload_pratical INTEGER NOT NULL,
    workload_theoretical INTEGER NOT NULL,
    university_id TEXT,
    FOREIGN KEY (pre_requisite_id) REFERENCES disciplines (id)
    FOREIGN KEY (university_id) REFERENCES universities (id)
  )`,
};

class VerifyIntegrityDatabaseTables {
  constructor() {}
  public verifyIntegrityDatabase(): void {
    console.log("Verifying integrity database tables...");
    try {
      const tablesNames = Object.keys(tablesRecord);
      tablesNames.forEach((tableName) => {
        const tableExist = this.verifyTableExists(tableName);
        if (!tableExist) {
          console.log(`Table ${tableName} not found. Creating...`);
          this.createTable(tableName);
        }
      });
    } catch (error: any) {
      throw new Error("Error while verify integrity database tables.", {
        cause: error,
      });
    }
  }

  private verifyTableExists(tableName: string): boolean {
    try {
      const table = sqlite
        .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?")
        .get(tableName) as { name: string } | undefined;
      return table ? true : false;
    } catch (error: any) {
      throw new Error("Error while verify table exists.", { cause: error });
    }
  }

  private createTable(tableName: string): void {
    try {
      if (tablesRecord[tableName]) {
        sqlite.exec(tablesRecord[tableName]);
        console.log(`Table ${tableName} created.`);
      }
    } catch (error: any) {
      throw new Error("Error while create table.", { cause: error });
    }
  }

  private createAllTables(): void {
    try {
      sqlite.exec(tablesRecord.addresses);
      sqlite.exec(tablesRecord.universities);
      sqlite.exec(tablesRecord.disciplines);

      console.log("Tables created.");
    } catch (error: any) {
      throw new Error("Error while createTables integrity database tables.", {
        cause: error,
      });
    }
  }

  private dropAllTables(): void {
    try {
      sqlite.exec("DROP TABLE IF EXISTS addresses");
      sqlite.exec("DROP TABLE IF EXISTS universities");
      sqlite.exec("DROP TABLE IF EXISTS disciplines");

      console.log("All tables dropped.");
    } catch (error: any) {
      throw new Error("Error while drop all tables.", { cause: error });
    }
  }

  private dropTable(tableName: string): void {
    try {
      sqlite.exec(`DROP TABLE IF EXISTS ${tableName}`);

      console.log(`Table ${tableName} dropped.`);
    } catch (error: any) {
      throw new Error("Error while drop table.", { cause: error });
    }
  }
}

export const verifyIntegrityDatabase =
  new VerifyIntegrityDatabaseTables().verifyIntegrityDatabase();
