"use client"

import CardExplore from "@/components/CardExplore";
import CardModal from "@/components/CardModal";
import CardReview from "@/components/CardReview";
import ExploreTags from "@/components/ExploreTags";
import LoginModal from "@/components/LoginModal";
import WriteReview from "@/components/WriteReview";
import { Binoculars } from "@phosphor-icons/react/dist/ssr/Binoculars";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import * as Dialog from "@radix-ui/react-dialog";

export interface book {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: Date;
}

interface books {
  books: book[],
  categories: {
    id: string,
    name: string
  }[]
}


export default function BooksDisplay({ books, categories }: books) {

  return(
    <>
      <Dialog.Root>
        <div className='flex flex-wrap gap-10'>
          <div className='flex gap-3'>
            <Binoculars size={32} className='text-green-100' />
            <h1 className='text-2xl text-gray-100'>Explorar</h1>
          </div>
          <div className=' group ml-auto flex w-96 items-center gap-5 rounded border border-gray-500 px-5 py-4 transition focus-within:border-green-100'>
            <input
              className='group flex flex-grow bg-gray-800 text-sm leading-base text-gray-200 outline-none transition placeholder:text-gray-400'
              placeholder='Buscar livro ou autor'
              type='text'
              name=''
              id=''
            />
            <MagnifyingGlass
              size={20}
              className='group cursor-pointer text-gray-500 transition group-focus-within:text-green-100'
            />
          </div>
          <div className='flex basis-full items-center gap-3 text-purple-100'>
            { categories.map(category => {
              return <ExploreTags key={category.id} id={category.id} name={category.name}/>
            }) }

          </div>
          <div className='grid w-full grid-cols-3 gap-5'>
            {
              books.map(book => {
                return (
                  <Dialog.Trigger key={book.id}>
                    <CardExplore
                      id={book.id}
                      author={book.author}
                      name={book.name}
                      summary={book.summary}
                      cover_url={book.cover_url}
                      total_pages={book.total_pages}
                      created_at={book.created_at}
                    />
                  </Dialog.Trigger>
                )
              })
            }
          </div>
        </div>


        <Dialog.Portal>
          <Dialog.Overlay className='bg-black opacity-60 fixed inset-0' />
          <Dialog.Content>
            <div className='flex flex-col py-7 px-12 fixed top-0 right-0 bg-gray-800 w-5/12 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-corner-rounded-md'>
              <Dialog.Close className='text-gray-400 self-end mb-4 hover:bg-gray-700 p-1 rounded-sm transition'>
                <X size={24}/>
              </Dialog.Close>
              <CardModal/>
              <div className='w-full flex cursor-pointer py-1 mt-10 mb-4 text-sm justify-between items-center'>
                <span className='text-gray-200'>Avaliações</span>
                <LoginModal />
              </div>
              <div className='flex flex-col gap-3'>
                <WriteReview/>
                <CardReview/>
                <CardReview/>
                <CardReview/>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}