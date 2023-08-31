import { ProductInCart } from "@/types/ProductInCart";
import { Products } from "@/types/Products";
import { ProductsFetchResponse } from "@/types/ProductsFetchResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "./useFilter";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, { query });
};

export default function useProductsInCart() {
    const { cart } = useFilter();
    const [inCart, setInCart] = useState<(ProductInCart & Products)[]>([]);
    const ids = cart.reduce(
        (acc: string[], product) => [...acc, product.id],
        []
    );
    const query = `query{
        allProducts(filter: {ids:${JSON.stringify(ids)}})
        {
            id
            name
            image_url
            price_in_cents
            description
        }
    }`;

    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: [ids],
    });

    const allProducts = data?.data?.data?.allProducts;
    useEffect(() => {
        const InCart = cart.map((item) =>
            Object.assign(
                {},
                item,
                allProducts?.find((product) => product.id == item.id)
            )
        );
        setInCart(InCart);
    }, [data]);
    return { inCart, setInCart };
}
