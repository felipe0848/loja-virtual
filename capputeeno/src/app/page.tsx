"use client";
import FilterBar from "@/components/FilterBar";
import ProductsList from "@/components/ProductsList";
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
