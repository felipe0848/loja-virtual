"use client";
import styled from "styled-components";
import FilterByPriority from "./FIlterByPriority";
import FilterByType from "./FilterByType";

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: fit-content;
    row-gap: 12px;
    margin: auto;

    @media (min-width: ${(props) => props.theme.filterBreakPoint}) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;

interface FilterBarProps {}
export default function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType />

            <FilterByPriority />
        </FilterContainer>
    );
}
