import Image from "next/image";
import RatingRead from "./RatingRead";
import { book } from "@/app/main/explore/BooksDisplay";
import BookUrlFix from "../../utils/bookUrlfix";


export default function CardExplore(props: book) {
  return (
    <div className='flex cursor-pointer gap-4 rounded-[0.5rem] border-2 border-gray-700 bg-gray-700 px-5 py-4 transition hover:border-gray-600'>
      <Image
        className='h-[9.5rem] w-[6.75rem] rounded-sm'
        src={BookUrlFix(props.cover_url)}
        width={200}
        height={300}
        alt='a'
      />
      <header className='flex w-full flex-col overflow-hidden text-start'>
        <h5 className='line-clamp-2 w-full text-base font-bold leading-base text-gray-100'>
          {props.name}
        </h5>
        <p className='text-sm leading-base text-gray-400'>{props.author}</p>
        <div className='mt-auto flex gap-1 text-purple-100'>
          <RatingRead score={4.5} />
        </div>
      </header>
    </div>
  );
}
