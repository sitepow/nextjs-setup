import { publicProcedure, router } from '../trpc'

import { PrismaClient } from '@/generated/prisma'
const prisma = new PrismaClient()

export const userRouter = router({
  getUsers: publicProcedure.query(async () => {
    return await prisma.user.findMany()
  }),
})
