"use client";

import { Products } from "@/types/Products";
import { formatPriceInReais } from "@/utils/formatPriceInReais";
import styled from "styled-components";
import ButtonBuy from "./ButtonBuy";

const Container = styled.div`
    margin-top: 22px;

    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 4px;
    width: 100%;

    font-family: inherit;
    font-weight: 400;
    line-height: 150%;
    color: var(--textos-dark-primary, #41414d);

    img {
        width: 100%;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
    }
    button {
        font-size: 14px;
    }
    @media (min-width: ${(props) => props.theme.tableBreakPoint}) {
        flex-direction: row;
        img {
            width: 50%;
            max-width: 640px;
            max-height: 580px;
            gap: 32px;
        }
        button {
            font-size: 16px;
        }
    }
`;

const TextDiv = styled.div`
    > p {
        margin-bottom: 12px;
        font-size: 16px;
    }
    h3 {
        margin-bottom: 4px;
        font-size: 32px;
        font-weight: 300;
    }
    span {
        margin-bottom: 24px;
        color: var(--shapes-dark, #09090a);
        font-size: 20px;
        font-weight: 600;
    }
    p:nth-child(2) {
        font-size: 12px;
    }
    h4 {
        margin-top: 24px;
        margin-bottom: 8px;
        color: var(--textos-dark-secondary, #737380);
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
    }
    p:nth-child(3) {
        font-size: 12px;
        font-weight: 400;
    }
    @media (min-width: ${(props) => props.theme.tableBreakPoint}) {
        h4 {
            margin-top: 58px;
        }
        p:nth-child(3) {
            font-size: 14px;
        }
    }
`;

interface InfoProductProps {
    product: Products;
}
export default function InfoProduct({ product }: InfoProductProps) {
    return (
        <Container>
            <img src={product?.image_url} alt="" />
            <div>
                <TextDiv>
                    <p>{product?.category == "mugs" ? "Caneca" : "Camiseta"}</p>
                    <h3>{product?.name}</h3>
                    <span>
                        {formatPriceInReais(product?.price_in_cents ?? 0)}
                    </span>
                    <p>
                        *Frete de R$40,00 para todo o Brasil. Grátis para
                        compras acima de R$900,00.
                    </p>
                    <h4>Descrição</h4>
                    <p>{product?.description}</p>
                </TextDiv>
                <ButtonBuy product={product} />
            </div>
        </Container>
    );
}
