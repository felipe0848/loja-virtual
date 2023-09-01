"use client";
import { FilterType } from "@/types/FilterTypes";
import { PriorityType } from "@/types/PriorityTypes";
import { ProductInCart } from "@/types/ProductInCart";
import { ReactNode, createContext, useEffect, useState } from "react";

export const FilterContext = createContext({
    search: "",
    page: 0,
    type: FilterType.ALL,
    priority: PriorityType.POPULARITY,
    cart: [{ id: "", qtd: 0 }],
    updateCart: (value: ProductInCart[]) => {},
    setPriority: (value: PriorityType) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
});

interface ProviderProps {
    children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(PriorityType.NEWS);
    const [cart, setCart] = useState<ProductInCart[]>([]);

    const updateCart = (value: ProductInCart[]) => {
        setCart(value);
        localStorage.setItem("cart-items", JSON.stringify(value));
    };

    useEffect(() => {
        const cartItemsData = JSON.parse(
            localStorage.getItem("cart-items") ?? "[]"
        );

        if (cartItemsData) {
            setCart(cartItemsData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart-items", JSON.stringify(cart));
    }, [cart]);

    return (
        <FilterContext.Provider
            value={{
                search,
                page,
                type,
                priority,
                cart,
                updateCart,
                setPriority,
                setSearch,
                setPage,
                setType,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}
