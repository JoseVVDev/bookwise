import Image from "next/image";
import RatingRead from "./RatingRead";

export default function CardReview() {
  return (
    <div className='flex w-full cursor-pointer flex-col justify-between rounded-md border-2 border-gray-700 bg-gray-700 p-6 transition hover:border-gray-600 hover:bg-gray-600'>
      <main className='flex gap-6 justify-between flex-wrap'>
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
            <h5 className='text-base text-gray-100 leading-base'>peepoSit</h5>
            <p className='text-sm leading-base text-gray-400'>Hoje</p>
          </div>
        </div>
        <div className='flex self-start text-purple-100 gap-1'>
          <RatingRead score={4.5} />
        </div>
        <div className='text-sm leading-base text-gray-300'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </main>
    </div>
  );
}