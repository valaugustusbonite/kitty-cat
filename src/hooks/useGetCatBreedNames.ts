import axios from 'axios'
import { useQuery } from 'react-query'
import { Cat } from '@/types/Cat'

export const useGetCatBreedNames = () => {
  return useQuery('cat-breeds', getCatBreeds)
}

const getCatBreeds = async (): Promise<Cat[] | undefined> => {
  const { data } = await axios.get('https://api.thecatapi.com/v1/breeds')

  return data
}
