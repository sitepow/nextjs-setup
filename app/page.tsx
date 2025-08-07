'use client'

import { useTRPC } from '@/utils/trpc'
import { useQuery } from '@tanstack/react-query'

const HomePage = () => {
  const trpc = useTRPC()
  const { data: user } = useQuery(trpc.user.getUser.queryOptions())

  return (
    <div className='flex flex-col'>
      <span>
        {user?.id} {user?.first_name} {user?.email}
      </span>
    </div>
  )
}

export default HomePage
