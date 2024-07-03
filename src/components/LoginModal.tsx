"use client"

import { X } from "@phosphor-icons/react";
import google from "#/assets/google.svg";
import github from "#/assets/github.svg";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

export default function LoginModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <span className='rounded-sm px-2 py-1 text-purple-100 transition hover:bg-purple-100 hover:bg-opacity-10 '>Avaliar</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black opacity-60 fixed inset-0' />
        <Dialog.Content>
          <div className='flex flex-col fixed left-[35%] top-1/3 w-[30%] py-14 px-[4.5rem] bg-gray-700 rounded-xl'>
            <Dialog.Close className='text-gray-400 self-end mb-4 absolute top-4 right-4 hover:bg-gray-600 p-1 rounded-sm transition'>
              <X size={24}/>
            </Dialog.Close>
            <h5 className='text-gray-200 w-full text-center text-base mb-10'>Faça login para deixar sua avaliação</h5>
            <button className='flex h-[72px] flex-row mb-3 items-center gap-5 rounded-[8px] bg-gray-600 px-6 py-5 text-[1.125rem] text-gray-200'>
              <Image className='h-8 w-8' src={google} alt='google' />
              <p className='text-lg'>Entrar com Google</p>
            </button>
            <button className='flex h-[72px] flex-row items-center gap-5 rounded-[8px] bg-gray-600 px-6 py-5 text-[1.125rem] text-gray-200'>
              <Image className='h-8 w-8' src={github} alt='github' />
              <p className='text-lg'>Entrar com GitHub</p>
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}