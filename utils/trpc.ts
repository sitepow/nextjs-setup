import { AppRouter } from '@/server/routers/_app'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { createTRPCContext } from '@trpc/tanstack-react-query'
export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>()

export type InferredInput = inferRouterInputs<AppRouter>
export type InferredOutput = inferRouterOutputs<AppRouter>
