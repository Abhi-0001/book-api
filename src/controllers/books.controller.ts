import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();

export async function getBooks(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const books = await prisma.book.findMany();

  console.log(books);
}

export async function addBook(req: Request, res: Response) {
  const result = await prisma.book.create({
    title: "book of love",
    author: "Abhishek",
  });
}
