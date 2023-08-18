import { useProducts } from "@/hooks/useProducts";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;

    margin-top: 32px;
`;

export default function ProductsList() {
    const { data } = useProducts();

    return (
        <ListContainer>
            {data?.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    price={product.price_in_cents}
                    url={product.image_url}
                />
            ))}
        </ListContainer>
    );
}
