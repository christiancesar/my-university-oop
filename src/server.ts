import "dotenv/config";
import { enviroment } from "./utils/env/envinroment.js";
import express from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes.js";
import { interceptErrorMiddleware } from "./middlewares/interceptErrorMiddleware.js";
const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(interceptErrorMiddleware);

async function main() {
  // await prisma.$connect();
  server.listen(enviroment.PORT, () => {
    console.log("Server is running on port 3000");
  });
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    // await prisma.$disconnect();
  });
