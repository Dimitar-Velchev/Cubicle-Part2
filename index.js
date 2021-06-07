const express = require("express");
const expressConfig = require("./config/express");
const routesConfig = require("./config/routes");

const { init: storage } = require("./services/storage");
start();

async function start() {
  const port = 3000;
  const app = express();

  app.use(await storage());
  expressConfig(app);
  routesConfig(app);

  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
}
