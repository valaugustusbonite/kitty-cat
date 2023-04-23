import axios from 'axios'
import { QueryFunctionContext, useQuery } from 'react-query'
import { CatDetailsInfo } from '../types'
import { ApiException } from '@/common/exception'

export const useGetCatDetails = (catId: string) => {
  return useQuery(['cat-details', catId], getCatDetails)
}

const getCatDetails = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<CatDetailsInfo> => {
  try {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [_, catId] = queryKey
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/${catId}`)

    return data
  } catch (e: any) {
    throw new ApiException(e.message)
  }
}
