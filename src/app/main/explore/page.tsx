"use client";

import CardExplore from "@/components/CardExplore";
import CardModal from "@/components/CardModal";
import CardReview from "@/components/CardReview";
import ExploreTags from "@/components/ExploreTags";
import LoginModal from "@/components/LoginModal";
import { Binoculars } from "@phosphor-icons/react/dist/ssr/Binoculars";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import * as Dialog from "@radix-ui/react-dialog";

export default function Explore() {
  return (
    <>
      <Dialog.Root>

        <div className='flex flex-wrap gap-10'>
          <div className='flex gap-3'>
            <Binoculars size={32} className='text-green-100' />
            <h1 className='text-2xl text-gray-100'>Explorar</h1>
          </div>
          <div className=' group ml-auto flex w-96 items-center gap-5 rounded border border-gray-500 px-5 py-4 transition focus-within:border-green-100'>
            <input
              className='group flex flex-grow bg-gray-800 text-sm leading-base text-gray-200 outline-none transition placeholder:text-gray-400'
              placeholder='Buscar livro ou autor'
              type='text'
              name=''
              id=''
            />
            <MagnifyingGlass
              size={20}
              className='group cursor-pointer text-gray-500 transition group-focus-within:text-green-100'
            />
          </div>
          <div className='flex basis-full items-center gap-3 text-purple-100'>
            <ExploreTags />
          </div>
          <div className='grid w-full grid-cols-3 gap-5'>
            <Dialog.Trigger>
              <CardExplore />
            </Dialog.Trigger>
            <Dialog.Trigger>
              <CardExplore />
            </Dialog.Trigger>
            <CardExplore />
            <CardExplore />
            <CardExplore />
            <CardExplore />
            <CardExplore />
            <CardExplore />
            <CardExplore />
            <CardExplore />
            <CardExplore />
          </div>
        </div>


        <Dialog.Portal>
          <Dialog.Overlay className='bg-black opacity-60 fixed inset-0' />
          <Dialog.Content>
            <div className='flex flex-col py-7 px-12 fixed top-0 right-0 bg-gray-800 w-5/12 h-screen overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-corner-rounded-md'>
              <Dialog.Close className='text-gray-400 self-end mb-4 hover:bg-gray-700 p-1 rounded-sm transition'>
                <X size={24}/>
              </Dialog.Close>
              <CardModal/>
              <div className='w-full flex cursor-pointer py-1 mt-10 mb-4 text-sm justify-between items-center'>
                <span className='text-gray-200'>Avaliações</span>
                <LoginModal />
              </div>
              <div className='flex flex-col gap-3'>
                <CardReview/>
                <CardReview/>
                <CardReview/>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
