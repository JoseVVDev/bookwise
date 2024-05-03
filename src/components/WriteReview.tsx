import Image from "next/image";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import RatingWrite from "./RatingWrite";

export default function WriteReview() {
  return (
    <div className='flex flex-wrap justify-between rounded-[0.5rem] border-2 border-gray-700 bg-gray-700 p-6 transition'>
      <div className='flex items-center justify-between gap-3'>
        <div className='flex gap-4 items-center h-11 w-11 rounded-full bg-gradient-vertical p-0.5'>
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
        </div>
      </div>
      <div className='flex self-start text-purple-100 gap-1 items-center'>
        <RatingWrite/>
      </div>
      <div className='flex flex-col w-full mt-6'>
        <textarea
          className='w-full bg-gray-800 rounded border-2 transition text-sm placeholder:text-gray-400 text-gray-200 border-gray-500 outline-none resize-none active:border-gray-500 focus-within:border-green-100 py-[0.875rem] px-5'
          rows={7}
          placeholder='Escreva sua avaliação'
        >

        </textarea>
        <div className='flex justify-end mt-3 gap-2'>
          <button className='flex h-10 w-10 justify-center items-center text-purple-100 cursor-pointer p-2 bg-gray-600 hover:bg-gray-500 rounded-sm transition'>
            <X size={24}/>
          </button>
          <button className='flex h-10 w-10 justify-center items-center text-green-100 cursor-pointer p-2 bg-gray-600 hover:bg-gray-500 rounded-sm transition'>
            <Check size={24}/>
          </button>
        </div>
      </div>

    </div>
  )
}