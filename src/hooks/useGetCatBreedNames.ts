import axios from 'axios'
import { useQuery } from 'react-query'
import { Cat } from '@/common/types/Cat'
import { ApiException } from '@/common/exception'

export const useGetCatBreedNames = () => {
  return useQuery('cat-breeds', getCatBreeds)
}

const getCatBreeds = async (): Promise<Cat[] | undefined> => {
  try {
    const { data } = await axios.get('https://api.thecatapi.com/v1/breeds')

    return data
  } catch (e: any) {
    throw new ApiException(e.message)
  }
}
