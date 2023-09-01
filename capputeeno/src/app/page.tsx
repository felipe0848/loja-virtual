"use client";
import FilterBar from "@/components/HomeComponents/FilterBar";
import Pagination from "@/components/HomeComponents/Pagination";
import ProductsList from "@/components/HomeComponents/ProductsList";
import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Home() {
    return (
        <MainContainer>
            <FilterBar />
            <Pagination />
            <ProductsList />
            <Pagination />
        </MainContainer>
    );
}
