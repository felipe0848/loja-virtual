"use client";
import { ProductInCart } from "@/types/ProductInCart";
import { formatPriceInReais } from "@/utils/formatPriceInReais";
import { styled } from "styled-components";
import TrashIcon from "../icons/TrashIcon";

const Container = styled.div`
    position: relative;
    display: flex;
    gap: 32px;
    border-radius: 8px;
    background: var(--shapes-01, #fff);
    height: 211px;

    img {
        width: 256px;
        border-radius: 8px 0 0 8px;
    }
    svg {
        position: absolute;
        top: 16px;
        right: 16px;
    }
    div {
        color: var(--textos-dark-primary, #41414d);
        font-family: inherit;
        font-weight: 300;
        line-height: 150%;
        padding: 16px 16px 24px 0;
        h3 {
            font-size: 20px;
            margin-bottom: 12px;
        }
        p {
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 24px;
        }
        div {
            display: flex;
            justify-content: space-between;
            align-items: baseline;

            select {
                width: 65px;
                height: 40px;
                border-radius: 8px;
                border: 1px solid var(--textos-dark-textos, #a8a8b3);
                background: var(--secondary-color, #f3f5f6);

                color: var(--textos-dark-secondary, #737380);
                text-align: center;
                font-weight: 400;
                text-transform: uppercase;
                font-family: inherit;
                font-size: 16px;
                line-height: 150%;
            }
            span {
                color: var(--shapes-dark, #09090a);
                font-weight: 600;
                font-family: inherit;
                font-size: 16px;
                line-height: 150%;
            }
        }
    }
`;

interface CartListProps {
    product: ProductInCart;
}
export default function CartList({ product }: CartListProps) {
    return (
        <Container>
            <img
                src="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg"
                alt=""
            />
            <div>
                <h3>produto</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iste, voluptate quaerat! Sed ipsam facere reiciendis?
                </p>
                <div>
                    <select name={"qtd-" + product.id}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <span>{formatPriceInReais(4000)}</span>
                </div>
            </div>
            <TrashIcon />
        </Container>
    );
}
