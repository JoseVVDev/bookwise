import Image from "next/image";
import RatingRead from "./RatingRead";
import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr/BookmarkSimple";
import { BookOpen } from "@phosphor-icons/react/dist/ssr/BookOpen";

export default function CardModal() {
  return (
    <div className='flex flex-wrap gap-8 gap-y-10 rounded-[0.5rem] border-2 border-gray-700 bg-gray-700 px-8 py-6 transition'>
      <Image
        className='h-64 w-44 rounded-sm'
        src='/assets/sacred.png'
        width={200}
        height={300}
        alt='a'
      />
      <header className='flex flex-[60%] flex-col overflow-hidden text-start'>
        <h5 className='line-clamp-2 w-full text-base font-bold leading-base text-gray-100'>
          Sacred and terrible air Sacred and terrible air Sacred and terrible
          air Sacred and{" "}
        </h5>
        <p className='text-sm leading-base text-gray-400'>Robert Kurvitz</p>
        <div className='mt-auto flex text-purple-100'>
          <RatingRead score={4.5} />
        </div>
        <span className='text-gray-400 text-sm mt-2'>4 Avaliações</span>
      </header>
      <div className='flex flex-[100%] justify-between py-6 border-t-2 border-gray-600'>
        <div className='flex items-center gap-3 w-1/2'>
          <BookmarkSimple size={24} className='text-green-100'/>
          <div>
            <h5 className='text-gray-300 text-sm'>Categoria</h5>
            <h3 className='text-gray-200 text-base'>Computação, educação</h3>
          </div>
        </div>

        <div className='flex items-center gap-3 w-1/2'>
          <BookOpen size={24} className='text-green-100'/>
          <div>
            <h5 className='text-gray-300 text-sm'>Páginas</h5>
            <h3 className='text-gray-200 text-base'>160</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
