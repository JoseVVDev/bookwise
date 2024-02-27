import Image from "next/image";
import RatingRead from "./RatingRead";

export default function Card() {
  return (
    <div className='flex h-80 w-full cursor-pointer flex-col justify-between rounded-md border-2 border-gray-600 bg-gray-600 p-6 transition hover:border-gray-500'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='h-11 w-11 rounded-full bg-gradient-vertical p-0.5'>
            <Image
              className='h-10 w-10 rounded-full'
              src='/assets/peepoSit.png'
              width={100}
              height={100}
              alt='avatar'
            />
          </div>
          <div className='flex flex-col'>
            <h5 className='text-base leading-base'>peepoSit</h5>
            <p className='text-sm leading-base text-gray-400'>Hoje</p>
          </div>
        </div>
        <div className='flex self-start'>
          <RatingRead score={4.5} />
        </div>
      </header>
      <main className='flex gap-5'>
        <Image
          className='h-[12rem] w-[8rem] rounded-sm'
          src='/assets/sacred.png'
          width={200}
          height={300}
          alt='a'
        />
        <div className='flex flex-col gap-5'>
          <header>
            <h5 className='text-base font-bold leading-base text-gray-100'>
              Sacred and terrible air
            </h5>
            <p className='text-sm leading-base text-gray-400'>Robert Kurvitz</p>
          </header>
          <main>
            <p className='line-clamp-5 text-sm leading-base text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </main>
        </div>
      </main>
    </div>
  );
}
