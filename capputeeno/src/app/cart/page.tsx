"use client";
import CartList from "@/components/CartComponents/CartList";
import Summary from "@/components/CartComponents/Summary";
import ButtonBack from "@/components/ProductComponents/ButtonBack";
import { formatPriceInReais } from "@/utils/formatPriceInReais";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
`;
const Section = styled.section`
    flex-grow: 1;
    height: 100%;
    color: var(--textos-dark-secondary, #41414d);
    font-family: inherit;
    line-height: 150%;
    h2 {
        margin-top: 24px;

        font-size: 24px;
        text-transform: uppercase;
        font-weight: 500;
    }
    h4 {
        margin-top: 6px;

        font-size: 16px;
        font-weight: 300;
        span {
            font-weight: 600;
        }

        margin-bottom: 24px;
    }
`;
interface CartProps {}
export default function Cart(props: CartProps) {
    return (
        <Container>
            <Section>
                <ButtonBack navigate="/" />
                <h2>Seu carrinho</h2>
                <h4>
                    Total ({3} produtos){" "}
                    <span>{formatPriceInReais(16100)}</span>
                </h4>
                <CartList
                    product={{
                        id: "635f4eea-e560-4506-bcfe-69313ad64ae7",
                        qtd: 2,
                    }}
                />
            </Section>
            <Summary subTotal={16100} />
        </Container>
    );
}
