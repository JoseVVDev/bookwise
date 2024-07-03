import { GetBooks } from "@/app/api/getBooks";
import BooksDisplay from "./BooksDisplay";
import { GetCategories } from "@/app/api/getCategories";


export default async function Explore() {
  const books = await GetBooks()
  const categories = await GetCategories()

  return (
    <BooksDisplay categories={categories} books={books}/>
  );
}
