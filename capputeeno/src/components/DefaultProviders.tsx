"use client";
import { FilterContextProvider } from "@/context/FilterContext";
import { theme } from "@/context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode;
}
export default function DefaultProviders({ children }: DefaultProvidersProps) {
    const client = new QueryClient();
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={client}>
                <FilterContextProvider>{children}</FilterContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
