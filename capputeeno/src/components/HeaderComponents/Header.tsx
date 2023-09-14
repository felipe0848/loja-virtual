"use client";
import styled from "styled-components";

import { useFilter } from "@/hooks/useFilter";
import { Saira_Stencil_One } from "next/font/google";
import { useRouter } from "next/navigation";
import CartControl from "./CartControl";
import SearchBar from "./SearchBar";

const sairaStencil = Saira_Stencil_One({
    weight: ["400"],
    subsets: ["latin"],
});

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 48px;
    > div {
        display: flex;
        gap: 24px;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
        padding: 20px 160px;
    }
`;

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 24px;
    line-height: 150%;
    cursor: pointer;

    @media (min-width: ${(props) => props.theme.tableBreakPoint}) {
        font-size: 40px;
    }
`;

export default function Header() {
    const { setPage, setSearch, search, cart } = useFilter();
    const router = useRouter();
    const handleNavigate = () => {
        setPage(0);
        router.push("/");
    };
    return (
        <TagHeader id="root2">
            <Logo className={sairaStencil.className} onClick={handleNavigate}>
                capputeeno
            </Logo>
            <div>
                <SearchBar
                    placeholder="Procurando por algo específico?"
                    $handleChange={setSearch}
                    value={search}
                ></SearchBar>
                <CartControl value={cart} />
            </div>
        </TagHeader>
    );
}
