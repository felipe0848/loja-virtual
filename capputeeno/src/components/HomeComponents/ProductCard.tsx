import { useFilter } from "@/hooks/useFilter";
import { formatPriceInReais } from "@/utils/formatPriceInReais";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface ProductCardProps {
    title: string;
    price: number;
    url: string;
    id: string;
}

const CardContainer = styled.div`
    display: flex;
    width: 256px;
    height: 378px;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    cursor: pointer;
    img {
        border-radius: 4px 4px 0 0;
        width: 256px;
        height: 300px;
    }
`;

const CardDescription = styled.div`
    border-radius: 0 0 4px 4px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    padding: 8px 12px;
    width: 256px;

    h3 {
        color: var(--textos-dark-primary);
        font-family: inherit;
        font-size: 16px;
        font-weight: 300;
        line-height: 150%;
        margin-bottom: 8px;
    }
    p {
        color: var(--shapes-dark);
        font-family: inherit;
        font-size: 14px;
        font-weight: 600;
        line-height: 150%;
        margin-bottom: 8px;
    }
    > div {
        width: 228px;
        height: 1px;
        fill: var(--shapes-light-secondary);
    }
`;

export default function ProductCard(props: ProductCardProps) {
    const router = useRouter();
    const { setSearch } = useFilter();
    const formattedPrice = formatPriceInReais(props.price);
    const handleClick = () => {
        router.push("/product?id=" + props.id);
        setSearch("");
    };
    return (
        <CardContainer onClick={handleClick}>
            <img src={props.url} alt={props.title} />
            <CardDescription>
                <h3>{props.title}</h3>
                <div></div>
                <p>{formattedPrice}</p>
            </CardDescription>
        </CardContainer>
    );
}
