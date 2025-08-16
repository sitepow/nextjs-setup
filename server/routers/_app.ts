import { router } from '../trpc'
import { demoRouter } from './user'

const appRouter = router({
  demo: demoRouter,
})

export { appRouter }
export type AppRouter = typeof appRouter
