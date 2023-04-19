import axios from "axios";
import { useQuery } from "react-query";
import { CatBreed } from "../feature/feed/types";

export const useGetCatBreedNames = () => {
  return useQuery("cat-breeds", getCatBreeds);
 };


 const getCatBreeds = async () => {
    const { data } = await axios.get("https://api.thecatapi.com/v1/breeds");

    return data;
 }