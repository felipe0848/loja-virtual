"use client";
import styled from "styled-components";
import FilterByPriority from "./FIlterByPriority";
import FilterByType from "./FilterByType";

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
`;
const PrioritAndPagination = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    row-gap: 24px;
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
