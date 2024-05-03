import prisma from "../../../../utils/prisma";
import BooksDisplay from "./BooksDisplay";


export default async function Explore() {
  const books = await prisma.book.findMany()

  return (
    <BooksDisplay books={books}/>
  );
}
