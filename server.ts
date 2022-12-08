import express from "express";
import bodyParser from "body-parser";
import PeopleRoute from "./src/routes/peopleRoute";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CURD APP",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/peopleRoute.ts"],
};
const swaggerSpec = swaggerJSDoc(options);

var app = express();
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/people", PeopleRoute);
app.listen(3000);

export { app };
