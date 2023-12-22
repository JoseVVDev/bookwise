import Card from '@/components/Card';
import { CaretRight } from '@phosphor-icons/react/dist/ssr/CaretRight';
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr/ChartLineUp';

export default function Main() {
  return (
    <>
      <header className='text-white flex items-center gap-4 w-full'>
        <ChartLineUp size={32} className='text-green-100'/>
        <h3 className='text-xl font-bold'>Início</h3>
      </header>
      <main className='flex mt-10 justify-between text-white leading-base items-center'>
        <div className='w-[63%] h-11 text-sm items-center'>
          <h6 className='mb-4'>Avaliações recentes</h6>
          <Card />
        </div>
        <div className='w-[30%] h-11 text-sm items-center'>
          <div className='flex justify-between items-center'>
            <h5 className='flex'>Livros populares</h5>
            <h5 className='flex gap-2 text-purple-100 cursor-pointer rounded-sm hover:bg-purple-100 hover:bg-opacity-10 py-1 px-2 transition'>Ver todos<CaretRight size={20}/></h5>
          </div>
        </div>
      </main>
    </>
  )
}