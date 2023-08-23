"use client";
import { formatPriceInReais } from "@/utils/formatPriceInReais";
import { styled } from "styled-components";

const Container = styled.aside`
    background: var(--shapes-01, #fff);
    min-width: 352px;
    height: 700px;
    padding: 16px 24px 24px 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const OrderSummary = styled.ul`
    list-style: none;
    color: var(--textos-dark-primary, #41414d);
    font-family: inherit;
    line-height: 150%;
    h3 {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 30px;
    }
    li {
        display: flex;
        justify-content: space-between;
        width: 100%;

        font-size: 16px;
        font-weight: 400;
        margin-bottom: 12px;
    }
    .total {
        font-weight: 600;
        margin-bottom: 0;
    }
    button {
        margin-top: 40px;
        width: 100%;
        height: 44px;
        border-radius: 4px;
        background: var(--others-green, #51b853);
        border: none;
        cursor: pointer;

        color: var(--shapes-light-background, #f5f5fa);
        text-align: center;
        font-family: inherit;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        transition: 0.2s;
    }
    button:hover {
        filter: brightness(1.1);
    }
`;

const Divider = styled.div`
    height: 1px;
    background: var(--shapes-02, #dce2e5);
    margin: 12px 0 8px 0;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;

    color: var(--textos-dark-secondary, #737380);
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    text-decoration-line: underline;
    text-transform: uppercase;
    cursor: pointer;

    margin-top: 12px;
`;

interface SummaryProps {
    subTotal: number;
}
export default function Summary(props: SummaryProps) {
    const deliveryFee = props.subTotal >= 90000 ? 0 : 4000;
    return (
        <Container>
            <OrderSummary>
                <h3>Resumo do Pedido</h3>
                <li>
                    <p>Subtotal de produtos</p>
                    <span>{formatPriceInReais(props.subTotal)}</span>
                </li>
                <li>
                    <p>Entrega</p>
                    <span>{formatPriceInReais(deliveryFee)}</span>
                </li>
                <Divider />
                <li className="total">
                    <p>Total</p>
                    <span>
                        {formatPriceInReais(props.subTotal + deliveryFee)}
                    </span>
                </li>
                <button>Finalizar a Compra</button>
            </OrderSummary>
            <LinksContainer>
                <a>Ajuda</a>
                <a>Reembolsos</a>
                <a>Entregas e Frete</a>
                <a>Trocas e Devoluções</a>
            </LinksContainer>
        </Container>
    );
}
