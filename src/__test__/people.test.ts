const request = require("supertest");
import { app } from "../../server";

describe("Api testing", () => {
  it("Get all users", (done) => {
    request(app)
      .get("/people")
      .expect(200)
      .end((err: any, res: any) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ id: 3 }),
            expect.objectContaining({ id: 2 }),
          ])
        );
        done();
      });
  });
  it("To add users", (done) => {
    const insertUser = { name: "Username" };
    request(app)
      .post("/people")
      .send(insertUser)
      .expect(200)
      .end((err: any, res: any) => {
        expect(res.text).toEqual("Done");
        done();
      });
  });
  it("To update users", (done) => {
    const updateUser = {
      id: 4,
      name: "newName",
    };
    request(app)
      .put("/people")
      .send(updateUser)
      .expect(200)
      .end((err: any, res: any) => {
        expect(res.text).toEqual("Done");
        done();
      });
  });
  it("To delete users", (done) => {
    const updateUser = {
      id: 5,
    };
    request(app)
      .delete("/people")
      .send(updateUser)
      .expect(200)
      .end((err: any, res: any) => {
        expect(res.text).toEqual("Done");
        done();
      });
  });
});
