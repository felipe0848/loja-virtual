import { useFilter } from "@/hooks/useFilter";
import { ProductInCart } from "@/types/ProductInCart";
import { Products } from "@/types/Products";
import { toast } from "react-toastify";
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

interface ButtonBuyProps {
    product: Products;
}

export default function ButtonBuy({ product }: ButtonBuyProps) {
    const { cart, updateCart } = useFilter();
    const handleAddCart = () => {
        toast.success("Produto adicionado no carrinho!");

        const productCart: ProductInCart = {
            id: product.id,
            qtd: 1,
        };
        if (cart.length == 0) {
            // console.log([productCart]);
            updateCart([productCart]);
        } else {
            const InCart = cart.find((p) => p.id == product.id);
            if (InCart?.qtd) {
                InCart.qtd += 1;
                // console.log(cart);
                updateCart(cart);
            } else {
                // console.log([productCart, ...cart]);
                updateCart([productCart, ...cart]);
            }
        }
    };
    return (
        <Button onClick={handleAddCart}>
            <ShoppingBagIcon />
            Adicionar ao Carrinho
        </Button>
    );
}
