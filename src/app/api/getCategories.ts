import prisma from "../../../utils/prisma"

export async function GetCategories() {
  const res = await prisma.category.findMany({})
  return res
}