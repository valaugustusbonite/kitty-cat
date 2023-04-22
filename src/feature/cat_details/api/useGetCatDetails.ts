import axios from "axios";
import { QueryFunctionContext, QueryKey, useQuery } from "react-query";
import { CatDetailsInfo } from "../types";

export const useGetCatDetails = (catId: string) => {
    return useQuery(["cat-details", catId], getCatDetails);
};


const getCatDetails = async ({queryKey} : QueryFunctionContext<[string, string]>): Promise<CatDetailsInfo> => {
    const [_, catId] = queryKey
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/${catId}`);

    return data;
}