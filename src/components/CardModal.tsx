import Image from "next/image";
import RatingRead from "./RatingRead";
import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr/BookmarkSimple";
import { BookOpen } from "@phosphor-icons/react/dist/ssr/BookOpen";
import LoginModal from "./LoginModal";
import WriteReview from "./WriteReview";
import CardReview from "./CardReview";
import { book } from "@/app/main/explore/BooksDisplay";
import BookUrlFix from "../../utils/bookUrlfix";

interface bookModalData {
  bookModal: book
}


function handleFindCategoryNames( bookIds: string[] ) {
  const names = bookIds.map(bookId => {
    console.log(bookId)
  })
}

export default function CardModal({ bookModal }: bookModalData) {
  return (
    <>
      <div className='flex flex-wrap gap-8 gap-y-10 rounded-[0.5rem] border-2 border-gray-700 bg-gray-700 px-8 py-6 transition'>
        <Image
          className='h-64 w-44 rounded-sm'
          src={BookUrlFix(bookModal.cover_url)}
          width={200}
          height={300}
          alt='a'
        />
        <header className='flex flex-[60%] flex-col overflow-hidden text-start'>
          <h5 className='line-clamp-2 w-full text-base font-bold leading-base text-gray-100'>
            {bookModal.name}
          </h5>
          <p className='text-sm leading-base text-gray-400'>{bookModal.author}</p>
          <div className='mt-auto flex text-purple-100'>
            <RatingRead score={4.5} />
          </div>
          <span className='text-gray-400 text-sm mt-2'>???????? Avaliações</span>
        </header>
        <div className='flex flex-[100%] justify-between py-6 border-t-2 border-gray-600'>
          <div className='flex items-center gap-3 w-1/2'>
            <BookmarkSimple size={24} className='text-green-100'/>
            <div>
              <h5 className='text-gray-300 text-sm'>Categoria</h5>
              <h3 className='text-gray-200 text-base'>{ bookModal.categoryNames.map(((category, index) => (index ? ", ": "") + category )) }</h3>
            </div>
          </div>

          <div className='flex items-center gap-3 w-1/2'>
            <BookOpen size={24} className='text-green-100'/>
            <div>
              <h5 className='text-gray-300 text-sm'>Páginas</h5>
              <h3 className='text-gray-200 text-base'>{bookModal.total_pages}</h3>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}
