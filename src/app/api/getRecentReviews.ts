import dayjs from "dayjs";
import prisma from "../../../utils/prisma";

export async function GetRecentReviews() {
  const res = await prisma.rating.findMany({
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

  return res
}