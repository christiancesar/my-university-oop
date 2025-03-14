import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes.js";
import { interceptErrorMiddleware } from "./shared/middlewares/interceptErrorMiddleware.js";
import { Environment } from "./shared/env/environment.js";
import { prisma } from "./database/providers/prisma/prisma.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(interceptErrorMiddleware);

async function main() {
  const port = Environment.getInstance().PORT;
  await prisma.$connect();
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
