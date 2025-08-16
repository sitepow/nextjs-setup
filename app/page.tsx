'use client'

import { useTRPC } from '@/utils/trpc'
import { useQuery } from '@tanstack/react-query'

const HomePage = () => {
  const trpc = useTRPC()
  useQuery(trpc.user.getUsers.queryOptions())

  return <div></div>
}

export default HomePage
