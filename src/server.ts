import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes.js";
import { interceptErrorMiddleware } from "./middlewares/interceptErrorMiddleware.js";
import { sqlite } from "./database/providers/sqlite-connection-database.js";
import { verifyIntegrityDatabase } from "./database/repositories/sqlite/helper/verify-integrity-database-tables.js";
import { Environment } from "./utils/env/environment.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(interceptErrorMiddleware);

async function main() {
  const port = Environment.getInstance().PORT;
  // await prisma.$connect();
  sqlite;
  verifyIntegrityDatabase;
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    // await prisma.$disconnect();
    sqlite.close();
  });
