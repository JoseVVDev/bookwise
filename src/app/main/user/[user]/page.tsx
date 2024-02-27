import Image from "next/image";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { User } from "@phosphor-icons/react/dist/ssr/User";
import { Book } from "@phosphor-icons/react/dist/ssr/Book";

export default function Profile() {
  return (
    <div className='flex flex-wrap gap-x-16 gap-y-10'>
      <header className='flex w-full flex-grow items-center text-white'>
        <User size={32} className='text-green-100' />
        <h3 className='text-2xl'>Perfil</h3>
      </header>
      <div className='w-[63%]'>
        <div className=' group flex w-full items-center gap-5 rounded border  border-gray-500 px-5 py-4 transition focus-within:border-green-100'>
          <input
            className='group flex flex-grow bg-gray-800 text-sm leading-base text-gray-200 outline-none transition placeholder:text-gray-400'
            placeholder='Buscar livro avaliado'
            type='text'
            name=''
            id=''
          />
          <MagnifyingGlass
            size={20}
            className='group cursor-pointer text-gray-500 transition group-focus-within:text-green-100'
          />
        </div>
      </div>
      <div className='flex w-[30%] flex-col items-center justify-center border-l border-gray-600'>
        <div className='flex h-[5rem] w-[5rem] items-center justify-center rounded-full bg-gradient-vertical p-0.5 mb-5'>
          <Image
            className='h-[4.5rem] w-[4.5rem] rounded-full'
            src='/assets/peepoSit.png'
            width={100}
            height={100}
            alt='avatar'
          />
        </div>
        <h3 className='text-xl font-bold text-gray-100'>Peepo Sit</h3>
        <h5 className='text-sm text-gray-400'>membro desde 2018</h5>
        <div className='h-1 w-8 bg-gradient-horizontal rounded-full my-8'></div>
        <div className='flex flex-col gap-10'>
          <div>
            <Book size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
}
