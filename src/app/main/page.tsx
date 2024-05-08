import CardPop from "@/components/CardPop";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";

import RecentReviews from "./RecentReviews";
import prisma from "../../../utils/prisma";
import dayjs from "dayjs";

export default async function Main() {
  const recentReview = await prisma.rating.findMany({
    where: {
      created_at: {
        lte: dayjs().format(),
        gt: dayjs("2023-01-01").format()
      }
    },
    include: {
      book: {
        select: {
          cover_url: true,
          author: true,
          name: true
        }
      },
      user: {
        select: {
          avatar_url: true,
          name: true
        }
      }
    }
  })

  return (
    <>
      <header className='flex w-full items-center gap-4 text-white'>
        <ChartLineUp size={32} className='text-green-100' />
        <h3 className='text-2xl'>Início</h3>
      </header>
      <main className='mt-10 flex items-center justify-between leading-base text-white'>
        <RecentReviews reviews={recentReview}/>
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
