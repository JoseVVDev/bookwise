import prisma from "../../../utils/prisma"

export interface PopularBooksInterface {
    average_score: number,
    name: string,
    author: string,
    book_id: string,
    cover_url: string,
    number_of_reviews: number
  }

export async function GetPopularBooks() {
  const res: PopularBooksInterface[] = await prisma.$queryRaw
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

  res.forEach((book) => {
    book.number_of_reviews = Number(book.number_of_reviews)
  })

  return res
}