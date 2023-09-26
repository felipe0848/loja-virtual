"use client";
import styled from "styled-components";
import FilterByPriority from "./FIlterByPriority";
import FilterByType from "./FilterByType";

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    row-gap: 12px;
    @media (min-width: ${(props) => props.theme.tableBreakPoint}) {
        flex-direction: row;
        justify-content: space-between;
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
