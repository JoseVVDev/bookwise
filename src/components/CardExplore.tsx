import Image from "next/image";
import RatingRead from "./RatingRead";

export default function CardExplore() {
  return (
    <div className='flex cursor-pointer gap-4 rounded-[0.5rem] border-2 border-gray-700 bg-gray-700 px-5 py-4 transition hover:border-gray-600'>
      <Image
        className='h-full w-4/6 rounded-sm'
        src='/assets/sacred.png'
        width={200}
        height={300}
        alt='a'
      />
      <header className='flex w-full flex-col overflow-hidden'>
        <h5 className='line-clamp-2 w-full text-base font-bold leading-base text-gray-100'>
          Sacred and terrible air Sacred and terrible air Sacred and terrible
          air Sacred and{" "}
        </h5>
        <p className='text-sm leading-base text-gray-400'>Robert Kurvitz</p>
        <div className='mt-auto flex text-purple-100'>
          <RatingRead score={4.5} />
        </div>
      </header>
    </div>
  );
}
