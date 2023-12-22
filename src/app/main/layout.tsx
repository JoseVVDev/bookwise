import Image from 'next/image';
import book from '../../../public/assets/iconBookHeart.svg'
import { ReactNode } from 'react';
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr/ChartLineUp';
import { Binoculars } from '@phosphor-icons/react/dist/ssr/Binoculars';
import { SignIn } from '@phosphor-icons/react/dist/ssr/SignIn';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <section className='flex justify-between p-[20px]'>
      <nav className='flex flex-col w-1/6 h-[96vh] fixed rounded-[12px] bg-image-sidebar bg-cover bg-left-top'>
        <div className='flex h-min justify-center items-center gap-2 mt-10 mb-16'>
          <Image className='w-7 h-7' src={book} alt='book' />
          <h1 className='text-xl font-bold text-transparent bg-gradient-horizontal bg-clip-text leading-base'>BookWise</h1>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='flex flex-col text-gray-400 gap-8 text-xl ml-4'>
            <li
              data-currentpage='true'
              className='flex group gap-3 data-[currentPage=true]:font-bold data-[currentPage=true]:text-gray-100 cursor-pointer hover:text-gray-100 relative'
            >
              <span className='absolute -left-5 group-data-[currentPage=true]:w-1 h-full rounded-lg bg-gradient-vertical'></span>
              <ChartLineUp size={30}/>
              Início
            </li>
            <li
              data-currentpage='false'
              className='flex group gap-3 data-[currentPage=true]:font-bold data-[currentPage=true]:text-gray-100 cursor-pointer hover:text-gray-100 relative'
            >
              <span className='absolute -left-5 group-data-[currentPage=true]:w-1 h-full rounded-lg bg-gradient-vertical'></span>
              <Binoculars size={30}/> Explorar</li>
          </ul>
        </div>
        <div className='mt-auto mb-7 w-max mx-auto flex justify-center items-center text-gray-100 gap-3 cursor-pointer'>
          <h4 className='font-bold text-base'>Fazer login</h4>
          <SignIn size={24} className='text-green-100' />
        </div>
      </nav>
      <div className='flex w-screen pl-[calc(16.666667%+20px)]'>
        <div className='mt-16 ml-24 mr-24 w-full'>
          { children }
        </div>
      </div>
    </section>
  )
}