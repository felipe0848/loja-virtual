import { ProductFetchResponse } from "@/types/ProductFetchResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL, { query: query });
};
export function useProduct(id: string) {
    const query = `query{
        Product(id: "${id}")
        {
          id
          name
          image_url
          price_in_cents
          category
          description
        }
      }`;
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ["product-", id],
        enabled: !!id,
    });
    return {
        data: data?.data?.data?.Product,
    };
}
