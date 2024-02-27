import Image from "next/image";
import RatingRead from "./RatingRead";

export default function CardPop() {
  return (
    <div className='flex h-36 w-full cursor-pointer gap-5 rounded-md border-2 border-gray-700 bg-gray-700 px-5 py-[1.125rem] transition hover:border-gray-600'>
      <Image
        className='h-full w-[4.5rem] rounded-sm'
        src='/assets/sacred.png'
        width={200}
        height={300}
        alt='a'
      />
      <main className='flex flex-col justify-between'>
        <header className='w-full overflow-hidden'>
          <h5 className='line-clamp-2 w-full text-base font-bold leading-base text-gray-100'>
            Sacred and terrible air Sacred and terrible air Sacred and terrible
            air Sacred and{" "}
          </h5>
          <p className='text-sm leading-base text-gray-400'>Robert Kurvitz</p>
        </header>
        <div className='flex'>
          <RatingRead score={3.5} />
        </div>
      </main>
    </div>
  );
}
