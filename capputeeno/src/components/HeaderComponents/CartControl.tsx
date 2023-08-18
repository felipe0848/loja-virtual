import { useLocalStorage } from "@/hooks/useLocalStorage";
import styled from "styled-components";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";

const CartCount = styled.span`
    background-color: var(--delete-color);
    color: #fff;

    font-size: 10px;
    font-weight: 500;

    width: 17px;
    line-height: 17px;
    text-align: center;
    border-radius: 100%;

    position: absolute;
    left: 15px;
    top: 50%;
`;

const Container = styled.div`
    position: relative;
`;

interface CartControlProps {}
export default function CartControl(props: CartControlProps) {
    const { value } = useLocalStorage("cart-items", []);
    return (
        <Container>
            <ShoppingBagIcon />
            <CartCount>{value.length}</CartCount>
        </Container>
    );
}
