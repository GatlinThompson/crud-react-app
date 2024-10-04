import { configureRoutes } from "./server/config/routes.js";

import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());

//Routing
configureRoutes(app);

app.listen(port, () => {
  console.log(`Server Running on Port:${port}`);
});
