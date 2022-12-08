import express from "express";
import { Add, Get, Update, Delete } from "../controllers/peopleController";

const Router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: 0
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 */

/**
 * @swagger
 * /people:
 *   get:
 *     summary: Get People.
 *     description: To Get People in DB.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *
 */
Router.get("/", Get);
/**
 * @swagger
 * /people:
 *   post:
 *     summary: Add People.
 *     description: To Add People in DB.
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: user name.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Added People in db.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *
 */
Router.post("/", Add);

/**
 * @swagger
 * /people:
 *   put:
 *     summary: Update People.
 *     description: To Update People in DB.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of user.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: name
 *         required: true
 *         description: user name.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Updated People in db.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *
 */
Router.put("/", Update);

/**
 * @swagger
 * /people:
 *   delete:
 *     summary: Delete People.
 *     description: To Delete People in DB.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of user.
 *         schema:
 *           type: integer

 *     responses:
 *       200:
 *         description: Deleted People in db.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *                  
 */
Router.delete("/", Delete);
export default Router;
