"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import BackIcon from "../icons/BackIcon";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border: none;
    background-color: transparent;
    cursor: pointer;

    color: var(--textos-textos, #617480);
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
`;
interface ButtonBackProps {
    navigate?: string;
}
export default function ButtonBack({ navigate }: ButtonBackProps) {
    const router = useRouter();
    const handleNavigate = () => {
        if (navigate) {
            router.push(navigate);
        } else {
            router.back();
        }
    };
    return (
        <Button onClick={handleNavigate}>
            <BackIcon />
            Voltar
        </Button>
    );
}
