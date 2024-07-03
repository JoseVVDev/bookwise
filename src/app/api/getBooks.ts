import prisma from "../../../utils/prisma"

export async function GetBooks() {

  const books = await prisma.book.findMany({
    include: {
      categories: {
        select: {
          category: true
        }
      }
    }
  })
  const res = books.map(book => {
    //converte ids das categorias de Objeto => Array => string
    const dataCategories = book.categories.map(cat => {
      return Object.values(cat)
    })

    const categoryIds = dataCategories.map(dc => {
      return dc[0].id
    })

    const categoryNames = dataCategories.map(dc => {
      return dc[0].name
    })

    const newbook = {
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      created_at: book.created_at,
      categoryIds: categoryIds,
      categoryNames: categoryNames
    }
    return newbook
  })
  return res
}