"use client";
import { ProductsFetchResponse } from "@/types/ProductsFetchResponse";
import { montQuery } from "@/utils/graphQLSources";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useDeferredValue } from "react";
import { useFilter } from "./useFilter";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, { query });
};

export function useProducts() {
    const { type, priority, search } = useFilter();
    const searchDeffer = useDeferredValue(search);
    const query = montQuery(type, priority);
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ["products-", type, priority],
        staleTime: 1000 * 60, // 1 minutes
    });

    const products = data?.data?.data?.allProducts;
    const filteredProducts = products?.filter((product) =>
        product.name
            .toLocaleLowerCase()
            .includes(searchDeffer.toLocaleLowerCase())
    );

    return { data: filteredProducts };
}
