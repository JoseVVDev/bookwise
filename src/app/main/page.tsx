import CardPop from "@/components/CardPop";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";

import RecentReviews from "./RecentReviews";
import prisma from "../../../utils/prisma";
import dayjs from "dayjs";
import PopularBooks from "./PopularBooks";

export interface PopularBooksInterface {
  average_score: Number,
  name: string,
  author: string,
  book_id: string,
  cover_url: string,
  number_of_reviews: Number
}

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
    },
    orderBy: {
      created_at: "desc"
    }
  })

  const popularBooks: PopularBooksInterface[] = await prisma.$queryRaw
  `SELECT 
      AVG(rate) as average_score, 
      name, 
      author, 
      book_id, 
      cover_url, 
      COUNT(book_id) as number_of_reviews
    FROM 
      Ratings 
    LEFT JOIN 
      Books 
    ON 
      Ratings.book_id = Books.id 
    GROUP BY 
      book_id 
    ORDER BY 
      average_score 
    DESC LIMIT 5`

  popularBooks.forEach((book) => {
    book.number_of_reviews = Number(book.number_of_reviews)
  })


  return (
    <>
      <header className='flex w-full items-center gap-4 text-white'>
        <ChartLineUp size={32} className='text-green-100' />
        <h3 className='text-2xl'>Início</h3>
      </header>
      <main className='mt-10 flex items-center justify-between leading-base text-white'>
        <RecentReviews reviews={recentReview}/>
        <PopularBooks books={popularBooks} />
      </main>
    </>
  );
}
