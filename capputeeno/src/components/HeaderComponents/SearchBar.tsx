import { InputHTMLAttributes, useRef } from "react";
import styled from "styled-components";
import SearchIcon from "../icons/SearchIcon";

const PrimaryInput = styled.input`
    font-family: inherit;
    color: var(--text-dark-secondary);
    font-weight: 400;
    background-color: var(--secondary-color);

    width: 268px;
    font-size: 12px;
    padding: 8px 14px;

    border-radius: 8px;
    border: none;

    @media (min-width: ${(props) => props.theme.tableBreakPoint}) {
        width: 352px;
        font-size: 14px;
        padding: 10px 16px;
    }
`;

const InputContainer = styled.div`
    position: relative;
    width: 268px;
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);

        cursor: pointer;
    }
    @media (min-width: ${(props) => props.theme.tableBreakPoint}) {
        width: 352px;
    }
`;

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    $handleChange: (value: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <InputContainer>
            <PrimaryInput
                onChange={(event) => props.$handleChange(event.target.value)}
                {...props}
                ref={inputRef}
            />
            <SearchIcon onClick={() => handleClick()} />
        </InputContainer>
    );
}
