import { publicProcedure, router } from '../trpc'

export const demoRouter = router({
  demo: publicProcedure.query(() => {
    return {
      message: 'hello word!',
    }
  }),
})
