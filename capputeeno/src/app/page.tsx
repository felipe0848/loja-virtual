"use client";
import FilterBar from "@/components/HomeComponents/FilterBar";
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
            <ProductsList />
        </MainContainer>
    );
}
