import prisma from "../../../utils/prisma"

export async function GetCategoryName(categoryId: string) {
  const res = await prisma.category.findUnique({
    where: {
      id: categoryId
    }
  })
  return res
}