import Card from "@/components/Card";
import CardPop from "@/components/CardPop";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";

export default function Main() {
  return (
    <>
      <header className='flex w-full items-center gap-4 text-white'>
        <ChartLineUp size={32} className='text-green-100' />
        <h3 className='text-2xl'>Início</h3>
      </header>
      <main className='mt-10 flex items-center justify-between leading-base text-white'>
        <div className='flex w-[63%] flex-col justify-center gap-3 text-sm'>
          <div className='flex h-7 w-full items-center'>
            <h6 className=''>Avaliações recentes</h6>
          </div>
          <div className='mb-10 flex flex-col gap-4'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className='w-[30%] self-start text-sm'>
          <div className='flex flex-col items-start justify-between gap-3'>
            <header className='flex h-7 w-full items-center justify-between'>
              <h5 className='flex'>Livros populares</h5>
              <h5 className='flex cursor-pointer gap-2 rounded-sm px-2 py-1 text-purple-100 transition hover:bg-purple-100 hover:bg-opacity-10'>
                Ver todos
                <CaretRight size={20} />
              </h5>
            </header>
            <div className='flex w-full flex-col gap-5'>
              <CardPop />
              <CardPop />
              <CardPop />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
