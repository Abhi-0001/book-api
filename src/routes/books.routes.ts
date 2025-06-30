import express from "express";
import { addBook, getBooks } from "../controllers";

const router = express.Router();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: List of books
 */
router.get("", getBooks);

router.post("", addBook);

export const bookRouter = router;
