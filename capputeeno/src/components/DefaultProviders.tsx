"use client";
import { FilterContextProvider } from "@/context/FilterContext";
import { theme } from "@/context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode;
}
export default function DefaultProviders({ children }: DefaultProvidersProps) {
    const client = new QueryClient();
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={client}>
                <FilterContextProvider>
                    {children}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={500}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable={false}
                        pauseOnHover={false}
                        theme="light"
                    />
                </FilterContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
