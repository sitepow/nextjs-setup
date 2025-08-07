import { router } from '../trpc'
import { userRouter } from './user'

const appRouter = router({
  user: userRouter,
})

export { appRouter }
export type AppRouter = typeof appRouter
