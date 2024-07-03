import CardPop from "@/components/CardPop";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { PopularBooksInterface } from "../api/getPopularBooks";

interface popularBooksArray {
  books: PopularBooksInterface[]
}

export default function PopularBooks({ books }: popularBooksArray) {
  return (
    <div className='w-[30%] self-start text-sm'>
      <div className='flex flex-col items-start justify-between gap-3'>
        <header className='flex h-7 w-full items-center justify-between'>
          <h5 className='flex'>Livros populares</h5>
          <h5 className='flex cursor-pointer gap-2 rounded-sm px-2 py-1 text-purple-100 transition hover:bg-purple-100 hover:bg-opacity-10'>
                Ver todos
            <CaretRight size={20} />
          </h5>
        </header>
        <div className='flex w-full flex-col gap-5'>
          {
            books.map(book => {
              return (
                <CardPop key={book.book_id} author={book.author} cover_url={book.cover_url} score={book.average_score} title={book.name} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}