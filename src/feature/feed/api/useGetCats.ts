import axios from "axios";
import { useQuery } from "react-query";

export const useGetCats = () => {
 return useQuery("cats", async () => {
   const { data } = await axios.get("https://reqres.in/api/users?page=1");

   return data;
 });
};

