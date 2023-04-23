import { ApiException } from '@/common/exception'
import { Cat } from '@/common/types/Cat'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

export const useGetCatBreedNames = () => {
  return useQuery('cat-breeds', getCatBreeds)
}

const getCatBreeds = async (): Promise<Cat[] | undefined> => {
  try {
    const { data } = await api.get('/breeds')

    return data
  } catch (e: any) {
    throw new ApiException(e.message)
  }
}
