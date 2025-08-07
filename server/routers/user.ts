import { publicProcedure, router } from '../trpc'

export const userRouter = router({
  getUser: publicProcedure.query(() => {
    return {
      id: '155a7461-c2e2-4823-bcd6-e6b067a826cf',
      first_name: 'Teeraphat Saengkum',
      email: 'kteeraphatt@gmail.com',
    }
  }),
})
