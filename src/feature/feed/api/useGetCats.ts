import { ApiException } from '@/common/exception'
import { Cat } from '@/common/types/Cat'
import { api } from '@/lib/axios'
import { useInfiniteQuery } from 'react-query'

export const useGetCats = (breedId: string) => {
  const query = useInfiniteQuery(
    ['get-cats', breedId],
    ({ pageParam = 1 }) => getCats(pageParam, breedId),
    {
      enabled: false,
      getNextPageParam: (lastPage: Cat[], allPages) => {
        return lastPage.length === 10 ? allPages.length + 1 : undefined
      },
    },
  )
  return query
}

const getCats = async (pageParam = 1, breedId: string): Promise<Cat[]> => {
  try {
      const { data } = await api.get(
        `/images/search?limit=10&order=ASC&breed_ids=${breedId}&page=${pageParam}`,
      )

      return data
  } catch (e: any) {
    throw new ApiException(e.message)
  }
}
