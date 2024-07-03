import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";

import RecentReviews from "./RecentReviews";
import PopularBooks from "./PopularBooks";
import { GetPopularBooks } from "../api/getPopularBooks";
import { GetRecentReviews } from "../api/getRecentReviews";

export default async function Main() {

  const recentReview = await GetRecentReviews()
  const popularBooks = await GetPopularBooks()

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
