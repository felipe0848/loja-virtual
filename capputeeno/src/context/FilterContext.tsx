"use client";
import { FilterType } from "@/types/FilterTypes";
import { PriorityType } from "@/types/PriorityTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: "",
    page: 0,
    type: FilterType.ALL,
    priority: PriorityType.POPULARITY,
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

    return (
        <FilterContext.Provider
            value={{
                search,
                page,
                type,
                priority,
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
