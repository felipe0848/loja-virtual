"use client";
import CartCard from "@/components/CartComponents/CartCard";
import Summary from "@/components/CartComponents/Summary";
import ButtonBack from "@/components/ProductComponents/ButtonBack";
import { useFilter } from "@/hooks/useFilter";
import useProductsInCart from "@/hooks/useProductsInCart";
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

const CartList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    transition: 200ms;
    > div:hover {
        transform: scale(1.01);
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`;
interface CartProps {}
export default function Cart(props: CartProps) {
    const { cart, updateCart } = useFilter();
    const { inCart, setInCart } = useProductsInCart();

    const qtdTotal = inCart?.reduce((acc, p) => (acc += p.qtd), 0);
    const subTotal = inCart?.reduce(
        (acc, p) => (acc += p.qtd * p.price_in_cents),
        0
    );

    const handleUpdateQtd = (id: string, qtd: number) => {
        const newCart = cart.map((p) => {
            if (p.id !== id) return p;
            return { ...p, qtd: qtd };
        });
        updateCart(newCart);

        const newInCart = inCart.map((p) => {
            if (p.id !== id) return p;
            return { ...p, qtd: qtd };
        });

        setInCart(newInCart);
    };

    const handleDelete = (id: string) => {
        const newCart = cart.filter((p) => p.id !== id);

        updateCart(newCart);

        const newInCart = inCart.filter((p) => p.id !== id);
        setInCart(newInCart);
    };

    return (
        <Container>
            <Section>
                <ButtonBack navigate="/" />
                <h2>Seu carrinho</h2>
                <h4>
                    Total ({qtdTotal} produtos)
                    <span> {formatPriceInReais(subTotal ?? 0)}</span>
                </h4>
                <CartList>
                    {inCart?.map((p) => (
                        <CartCard
                            key={p.id}
                            id={p.id}
                            description={p.description}
                            image_url={p.image_url}
                            name={p.name}
                            price_in_cents={p.price_in_cents}
                            qtd={p.qtd}
                            updateFn={handleUpdateQtd}
                            deleteFn={handleDelete}
                        />
                    ))}
                </CartList>
            </Section>
            <Summary subTotal={subTotal ?? 0} />
        </Container>
    );
}
