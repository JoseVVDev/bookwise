import Card from "@/components/Card";

export interface ReviewsInterface {
    id: string,
    rate: number,
    description: string,
    created_at: Date,
    book_id: string,
    book: {
      cover_url: string,
      author: string,
      name: string
    }
    user_id: string,
    user: {
      avatar_url: string | null,
      name: string
    }
}

interface RecentReviews {
    reviews: ReviewsInterface[]
}

export default function RecentReviews({ reviews }: RecentReviews) {
  return (
    <div className='flex w-[63%] flex-col justify-center gap-3 text-sm'>
      <div className='flex h-7 w-full items-center'>
        <h6 className=''>Avaliações recentes</h6>
      </div>
      <div className='mb-10 flex flex-col gap-4'>
        {
          reviews.map(review => {
            return (
              <Card key={review.id} {...review}/>
            )
          })
        }
      </div>
    </div>
  )
}