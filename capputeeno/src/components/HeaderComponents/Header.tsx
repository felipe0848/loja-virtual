"use client";
import styled from "styled-components";

import { useFilter } from "@/hooks/useFilter";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation";
import CartControl from "./CartControl";
import SearchBar from "./SearchBar";

const lato = Lato({
    weight: ["400"],
    subsets: ["latin"],
});

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 12px 48px;
    flex-direction: column;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        img {
            padding-bottom: 8px;
        }
    }

    @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
        padding: 20px 160px;
    }
    @media (min-width: ${(props) => props.theme.tableBreakPoint}) {
        justify-content: space-between;
        flex-direction: row;

        > div {
            gap: 24px;
        }
    }
`;

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 24px;
    line-height: 100%;
    font-weight: 500;

    @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
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
            <span onClick={handleNavigate}>
                <img src="/logo.png" alt="" height={64} />
                <Logo>Smith Store</Logo>
            </span>
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
