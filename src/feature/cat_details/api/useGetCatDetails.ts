import { QueryFunctionContext, useQuery } from 'react-query'
import { CatDetailsInfo } from '../types'
import { ApiException } from '@/common/exception'
import { api } from '@/lib/axios'

export const useGetCatDetails = (catId: string) => {
  return useQuery(['cat-details', catId], getCatDetails)
}

const getCatDetails = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<CatDetailsInfo> => {
  try {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [_, catId] = queryKey
    const { data } = await api.get(`/images/${catId}`)

    return data
  } catch (e: any) {
    throw new ApiException(e.message)
  }
}
