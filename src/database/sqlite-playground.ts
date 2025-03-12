import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

type SQLiteMaster = {
  type: string;
  name: string;
  tbl_name: string;
  rootpage: number;
  sql: string;
};

type AddressResult = {
  id: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  created_at: string;
  updated_at: null;
};

// dirname retorna o diretório do arquivo atual neste formato -> C:\Users\ccrs\Documents\devlopemnets\my-university-oop\src\database
const __dirname = import.meta.dirname;
// console.log(__dirname);

const sqlite_db_path = path.resolve(__dirname, "..", "..", "university.db");
const loadSqlAddress = fs.readFileSync(
  path.resolve(__dirname, "sql", "address.sql"),
  "utf-8"
);
const loadSqlUniversity = fs.readFileSync(
  path.resolve(__dirname, "sql", "university.sql"),
  "utf-8"
);
const loadSqlPerson = fs.readFileSync(
  path.resolve(__dirname, "sql", "person.sql"),
  "utf-8"
);
const database = new DatabaseSync(sqlite_db_path);

const tables = ["addresses", "universities", "persons"] as const;

type TableName = "addresses" | "universities" | "persons";

const verifyTablesSql = database.prepare(
  "SELECT * FROM sqlite_master WHERE type='table'"
);

const verifyTablesSqlResult = verifyTablesSql.all() as SQLiteMaster[];

if (verifyTablesSqlResult.length === 0) {
  console.log("Creating database");
  database.exec(loadSqlAddress);
  database.exec(loadSqlUniversity);
  database.exec(loadSqlPerson);
} else if (verifyTablesSqlResult.length === 3) {
  console.log("Database already exists");
} else {
  const tablesExists = verifyTablesSqlResult.map((result) => result.name);
  tables.forEach((table) => {
    if (!tablesExists.includes(table)) {
      if (table === "addresses") {
        database.exec(loadSqlAddress);
        console.log("Created table addresses");
      } else if (table === "universities") {
        database.exec(loadSqlUniversity);
        console.log("Created table universities");
      } else if (table === "persons") {
        database.exec(loadSqlPerson);
        console.log("Created table persons");
      }
    }
  });
}
const createAddressBaseQuery = database.prepare(
  "INSERT INTO addresses ( id, street, number, complement, neighborhood, city, state, country, zipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) "
);

const createUniversityBaseQuery = database.prepare(
  "INSERT INTO universities (id, name) VALUES (?, ?) RETURNING *"
);

const createUniversityWithAddressIdBaseQuery = database.prepare(
  "INSERT INTO universities (id, name, address_id) VALUES (?, ?, ?)"
);

export function selectLastRowIdBaseSql<T>(
  instace: DatabaseSync,
  tableName: TableName,
  rowId: number | bigint
): T {
  return instace
    .prepare(`SELECT * FROM ${tableName} WHERE rowid = ${rowId}`)
    .get() as T;
}

const createAddressUniversityQuery = createAddressBaseQuery.run(
  randomUUID(),
  "Av. dos Estudantes",
  "5055",
  "",
  "Cidade Universitária",
  "Rondonópolis",
  "MT",
  "Brasil",
  "78736-900"
);

/**
 *  Select sem abstração
 */
// const getCreatedAddress = database
//   .prepare(
//     `SELECT * FROM addresses WHERE rowid = ${createAddressUniversityQuery.lastInsertRowid}`
//   )
//   .get() as AddressResult | undefined;

/**
 * Select com abstração, fazendo uso de Generics
 */

const getCreatedAddress = selectLastRowIdBaseSql<AddressResult>(
  database,
  "addresses",
  createAddressUniversityQuery.lastInsertRowid
);

if (getCreatedAddress) {
  const createUniversityWithAddressIdQuery =
    createUniversityWithAddressIdBaseQuery.run(
      randomUUID(),
      "Universidade Federal de Rondonópolis",
      null
    );

  const university = selectLastRowIdBaseSql<any>(
    database,
    "universities",
    createUniversityWithAddressIdQuery.lastInsertRowid
  );

  console.log("result 1:", university);

  const result = createUniversityBaseQuery.get(
    randomUUID(),
    "Universidade Federal de Rondonópolis"
  );

  // const university2 = selectLastRowIdBaseSql<any>(
  //   database,
  //   "universities",
  //   result.lastInsertRowid
  // );

  console.log("result 2:", result);

  const selectUniversityWithIdNotExist = database
    .prepare(`SELECT * FROM universities where id = ?`)
    .get("c18c4153-4b1d-4bcc-b5b6-0216834d7eeb");
  console.log(selectUniversityWithIdNotExist);

  const tableName = "universities";
  const tableExistResult = database
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?")
    .get(tableName);

  console.log(`Table ${tableName} exist?`, tableExistResult);

  const selectUniversityAddressBaseQuery = database.prepare(
    "SELECT u.*, a.* FROM universities u LEFT JOIN addresses a ON u.address_id = a.id WHERE u.id = 'fa57e5f7-fc57-470d-bf49-a6cdc170e882'"
  );
  console.log(selectUniversityAddressBaseQuery.get());
}

// createAddressBaseQuery.run(
//   randomUUID(),
//   "Rua A",
//   "123",
//   "Apto 101",
//   "Centro",
//   "São Paulo",
//   "SP",
//   "Brasil"
// );

// const result = database.prepare("SELECT * FROM addresses").all();

// console.log(result);
