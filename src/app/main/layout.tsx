import Image from "next/image";
import book from "../../../public/assets/iconBookHeart.svg";
import { ReactNode } from "react";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { Binoculars } from "@phosphor-icons/react/dist/ssr/Binoculars";
import { SignIn } from "@phosphor-icons/react/dist/ssr/SignIn";
import NavLink from "@/components/NavLink";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <section className='flex justify-between p-[20px]'>
      <nav className='fixed flex h-[96vh] w-1/6 flex-col rounded-[12px] bg-image-sidebar bg-cover bg-left-top'>
        <div className='mb-16 mt-10 flex h-min items-center justify-center gap-2'>
          <Image className='h-7 w-7' src={book} alt='book' />
          <h1 className='bg-gradient-horizontal bg-clip-text text-xl font-bold leading-base text-transparent'>
            BookWise
          </h1>
        </div>
        <div className='flex items-center justify-center'>
          <div className='ml-auto flex w-2/3 flex-col gap-8 text-xl text-gray-400'>
            <NavLink path='/main' pathName='Início'>
              <ChartLineUp size={30} />
            </NavLink>
            <NavLink path='/main/explore' pathName='Explorar'>
              <Binoculars size={30} />
            </NavLink>
          </div>
        </div>
        <div className='mx-auto mb-7 mt-auto flex w-max cursor-pointer items-center justify-center gap-3 text-gray-100'>
          <h4 className='text-base font-bold'>Fazer login</h4>
          <SignIn size={24} className='text-green-100' />
        </div>
      </nav>
      <div className='flex w-screen pl-[calc(16.666667%+20px)]'>
        <div className='ml-24 mr-24 mt-16 w-full'>{children}</div>
      </div>
    </section>
  );
}
