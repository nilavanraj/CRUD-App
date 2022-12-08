import connection from "../connections";
import { Request, Response } from "express";

interface row {
  id: number;
  name: string;
}

const Get = (req: Request, res: Response) => {
  connection.query(
    "SELECT * from people",
    (err: any, rows: row, field: any) => {
      if (!err) {
        res.status(200).send(rows);
      } else res.status(500).send(err);
    }
  );
};
const Add = (req: Request, res: Response) => {
  const requestBody = req.body;
  if (requestBody.name)
    connection.query(
      `INSERT INTO people ( name) VALUES ('${requestBody.name}');`,
      (err: any, rows: row, field: any) => {
        if (!err) {
          res.status(200).send("Done");
        } else res.status(500).send(err);
      }
    );
  else res.status(400).send("name missing");
};
const Update = (req: Request, res: Response) => {
  const requestBody = req.body;
  if (requestBody.name && requestBody.id)
    connection.query(
      `UPDATE people SET name = '${requestBody.name}' WHERE id='${requestBody.id}';`,
      (err: any, rows: row, field: any) => {
        if (!err) {
          res.status(200).send("Done");
        } else res.status(500).send(err);
      }
    );
  else res.status(400).send("invalid request");
};

const Delete = (req: Request, res: Response) => {
  const requestBody = req.body;
  if (requestBody.id)
    connection.query(
      `DELETE FROM people WHERE  id='${requestBody.id}';`,
      (err: any, rows: row, field: any) => {
        if (!err) {
          res.status(200).send("Done");
        } else res.status(500).send(err);
      }
    );
  else res.status(400).send("invalid request");
};

export { Get, Add, Update, Delete };
