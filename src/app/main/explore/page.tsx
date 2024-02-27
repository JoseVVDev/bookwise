"use client";

import CardExplore from "@/components/CardExplore";
import ExploreTags from "@/components/ExploreTags";
import { Binoculars } from "@phosphor-icons/react/dist/ssr/Binoculars";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";

export default function Explore() {
  return (
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
        <CardExplore />
        <CardExplore />
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
  );
}
