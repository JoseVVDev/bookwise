import prisma from "../../../../utils/prisma";
import BooksDisplay from "./BooksDisplay";


export default async function Explore() {
  const books = await prisma.book.findMany()
  const categories = await prisma.category.findMany()

  return (
    <BooksDisplay books={books} categories={categories}/>
  );
}
