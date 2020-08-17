/* * */
/* IMPORTS */
const express = require("express");

const app = express();
const helmet = require("helmet");
const compression = require("compression");

const database = require("./services/database");
const auth_router = require("./routes/auth");
const websites_router = require("./routes/websites");
const error = require("./services/error");

/* * *
 * INIT
 */
(async () => {
  console.log();
  console.log("* * * * * * * * * * * * * * * * * * * *");
  console.log("* * * * * * PING WHEN DOWN * * * * * *");
  console.log("* * * * * * * * * * * * * * * * * * * *");
  console.log();

  // Connect to the database
  await database.connect();

  console.log();
  console.log("* * * * * * * * * * * * * * * * * * * *");
  console.log("> Module: API");

  console.log("> Starting Plugins...");
  // app.use(cors());
  // app.options("*", cors());
  app.use(express.json());

  console.log("> Starting Express Router...");
  app.use("/auth", auth_router);
  app.use("/websites", websites_router);

  console.log("> Starting Error Reporting...");
  app.use(error);

  console.log("> Starting Production Modules...");
  app.use(helmet());
  app.use(compression());

  console.log("> Opening TCP Port...");
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`> Port ${port} is open.`);
    console.log("> PingWhenDown API is operational.");
    console.log("* * * * * * * * * * * * * * * * * * * *");
    console.log();
  });
})();
