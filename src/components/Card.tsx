import Image from "next/image";
import RatingRead from "./RatingRead";
import { ReviewsInterface } from "@/app/main/RecentReviews";
import BookUrlFix from "../../utils/bookUrlfix";
import calcDate from "../../utils/calcDate";

export default function Card({ book, created_at, description, rate, user, id }: ReviewsInterface) {
  return (
    <div className='flex h-80 w-full cursor-pointer flex-col justify-between rounded-md border-2 border-gray-600 bg-gray-600 p-6 transition hover:border-gray-500'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='h-11 w-11 rounded-full bg-gradient-vertical p-0.5'>
            <Image
              className='h-10 w-10 rounded-full'
              src={user.avatar_url!}
              width={100}
              height={100}
              alt='avatar'
            />
          </div>
          <div className='flex flex-col'>
            <h5 className='text-base leading-base'>{user.name}</h5>
            <p className='text-sm leading-base text-gray-400'>{calcDate(created_at)}</p>
          </div>
        </div>
        <div className='flex self-start text-purple-100 gap-1'>
          <RatingRead score={rate} />
        </div>
      </header>
      <main className='flex gap-5'>
        <Image
          className='h-[12rem] w-[8rem] rounded-sm'
          src={BookUrlFix(book.cover_url)}
          width={200}
          height={300}
          alt='a'
        />
        <div className='flex flex-col gap-5'>
          <header>
            <h5 className='text-base font-bold leading-base text-gray-100'>
              {book.name}
            </h5>
            <p className='text-sm leading-base text-gray-400'>{book.author}</p>
          </header>
          <main>
            <p className='line-clamp-5 text-sm leading-base text-gray-300'>
              {description}
            </p>
          </main>
        </div>
      </main>
    </div>
  );
}
