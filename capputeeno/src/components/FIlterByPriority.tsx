import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from "@/types/PriorityTypes";
import { useState } from "react";
import styled from "styled-components";
import { ArrowIcon } from "./icons/ArrowIcon";

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    position: relative;

    button {
        background: transparent;
        border: none;
        cursor: pointer;

        display: flex;
        align-items: center;
        font-family: inherit;
        font-size: 12px;
        line-height: 22px;
        color: var(--text-dark-secondary);

        @media (min-width: ${(props) => props.theme.tableBreakPoint}) {
            font-size: 14px;
        }
        svg {
            margin-left: 8px;
        }
    }
`;

const FilterItems = styled.ul`
    list-style: none;
    width: 176px;

    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    color: var(--text-dark-secondary);

    position: absolute;
    top: 100%;

    li {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`;

interface FilterByPriorityProps {}
export default function FilterByPriority(props: FilterByPriorityProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const handleUpdatePriority = (value: PriorityType) => {
        setPriority(value);
        setIsOpen(false);
    };
    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon />
            </button>
            {isOpen && (
                <FilterItems>
                    <li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>
                        Novidades
                    </li>
                    <li
                        onClick={() =>
                            handleUpdatePriority(PriorityType.BIGGEST_PRICE)
                        }
                    >
                        Preço: Maior - menor
                    </li>
                    <li
                        onClick={() =>
                            handleUpdatePriority(PriorityType.MINOR_PRICE)
                        }
                    >
                        Preço: Menor - maior
                    </li>
                    <li
                        onClick={() =>
                            handleUpdatePriority(PriorityType.POPULARITY)
                        }
                    >
                        Mais vendidos
                    </li>
                </FilterItems>
            )}
        </FilterContainer>
    );
}
