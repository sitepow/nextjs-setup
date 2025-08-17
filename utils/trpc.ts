import { createTRPCContext } from '@trpc/tanstack-react-query'

import type { AppRouter } from '@/server/routers/_app'
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>()

export type InferredInput = inferRouterInputs<AppRouter>
export type InferredOutput = inferRouterOutputs<AppRouter>
