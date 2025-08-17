'use client'

import { useQuery } from '@tanstack/react-query'

import { useTRPC } from '@/utils/trpc'

const HomePage = () => {
  const trpc = useTRPC()
  useQuery(trpc.user.getUsers.queryOptions())

  return <div />
}

export default HomePage
