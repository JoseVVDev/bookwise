import Image from "next/image";
import RatingRead from "./RatingRead";

export default function CardProfile() {
  return (
    <>
      <span className='mt-4 mb-2 text-gray-300 text-sm'>
        Há 3 Dias
      </span>
      <div className='flex w-full cursor-pointer flex-col justify-between rounded-md border-2 border-gray-700 bg-gray-700 p-6 mb-7 transition hover:border-gray-500'>
        <main className='flex gap-6 flex-wrap'>
          <Image
            className='h-36 w-24 rounded-sm'
            src='/assets/sacred.png'
            width={200}
            height={300}
            alt='a'
          />
          <div className='flex flex-col justify-between gap-5'>
            <header>
              <h5 className='text-base font-bold leading-base text-gray-100'>
              Sacred and terrible air
              </h5>
              <p className='text-sm leading-base text-gray-400'>Robert Kurvitz</p>
            </header>
            <div className='flex text-purple-100 gap-1'>
              <RatingRead score={4.5} />
            </div>
          </div>
          <div>
            <p className='text-sm leading-base text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
