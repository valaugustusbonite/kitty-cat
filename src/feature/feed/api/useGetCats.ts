import { Cat } from '@/types/Cat'
import axios from 'axios'
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
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=10&order=ASC&breed_ids=${breedId}&page=${pageParam}`,
  )

  return data
}
