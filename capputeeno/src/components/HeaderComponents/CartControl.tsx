import { ProductInCart } from "@/types/ProductInCart";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import { useFilter } from "@/hooks/useFilter";

const CartCount = styled.span`
    background-color: var(--delete-color);
    color: var(--shapes-light-primary, #fff);

    font-size: 10px;
    font-weight: 500;

    width: 17px;
    line-height: 17px;
    text-align: center;
    border-radius: 100%;

    position: absolute;
    left: 24px;
    top: 60%;
`;

const Container = styled.div`
    position: relative;
    > div {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 42px;
        height: 42px;
        border-radius: 100%;
        transition: 0.2s;
    }
    div:hover {
        background-color: var(--text-light, #e1e1e6);
    }
`;
interface CartControlProps {
    value: ProductInCart[];
}
export default function CartControl({ value }: CartControlProps) {
    const router = useRouter();
    const { setSearch } = useFilter();
    const handleNavigate = () => {
        router.push("/cart");
        setSearch("");
    };
    return (
        <Container onClick={handleNavigate}>
            <div>
                <ShoppingBagIcon />
            </div>
            <CartCount>{value.length}</CartCount>
        </Container>
    );
}
