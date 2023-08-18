import styled from "styled-components";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    width: 100%;
    padding: 10px 0;
    border-radius: 4px;
    background: var(--brand-blue, #115d8c);
    border: none;
    cursor: pointer;

    color: var(--shapes-light-background, #f5f5fa);
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;

    svg > g > path {
        stroke: #f5f5fa;
    }
`;

export default function ButtonBuy() {
    return (
        <Button>
            <ShoppingBagIcon />
            Adicionar ao Carrinho
        </Button>
    );
}
