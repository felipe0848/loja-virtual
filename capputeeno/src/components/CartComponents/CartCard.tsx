"use client";
import { formatPriceInReais } from "@/utils/formatPriceInReais";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { styled } from "styled-components";
import TrashIcon from "../icons/TrashIcon";

const Container = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    border-radius: 8px;
    background: var(--shapes-01, #fff);
    height: fit-content;

    img {
        width: 256px;
        height: max-content;
        border-radius: 8px 0 0 8px;
    }
    button {
        position: absolute;
        top: 16px;
        right: 16px;

        cursor: pointer;
        background: transparent;
        border: none;

        svg:hover {
            filter: brightness(0.8);
        }
    }
    select {
        position: absolute;
        bottom: 24px;
        left: 287px;

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
`;

const TextContainer = styled.div`
    color: var(--textos-dark-primary, #41414d);
    font-family: inherit;
    font-weight: 300;
    line-height: 150%;
    padding: 16px 16px 24px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header {
        h3 {
            font-size: 20px;
            margin-bottom: 12px;
        }
        p {
            font-size: 12px;
            font-weight: 400;
        }
    }

    span {
        display: flex;
        justify-content: end;
        align-items: baseline;
        color: var(--shapes-dark, #09090a);
        font-weight: 600;
        font-family: inherit;
        font-size: 16px;
        line-height: 150%;
    }
`;

interface CartListProps {
    image_url: string;
    name: string;
    description: string;
    id: string;
    qtd: number;
    price_in_cents: number;
    updateFn: (id: string, qtd: number) => void;
    deleteFn: (id: string) => void;
}
export default function CartCard(props: CartListProps) {
    const router = useRouter();
    const handleClick = () => {
        router.push("/product?id=" + props.id);
    };
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.updateFn(props.id, Number(e.target.value));
    };
    const handleDelete = () => {
        props.deleteFn(props.id);
    };
    return (
        <Container>
            <img src={props.image_url} alt="" onClick={handleClick} />
            <TextContainer onClick={handleClick}>
                <div className="header">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>

                <span>
                    {formatPriceInReais(props.price_in_cents * props.qtd)}
                </span>
            </TextContainer>

            <button onClick={handleDelete}>
                <TrashIcon />
            </button>

            <select
                name={"qtd-" + props.id}
                defaultValue={props.qtd}
                onChange={handleChange}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </Container>
    );
}
