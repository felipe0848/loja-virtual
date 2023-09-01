import { useFilter } from "@/hooks/useFilter";
import { styled } from "styled-components";
import { ArrowIcon, directionEnum } from "../icons/ArrowIcon";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    align-self: flex-end;
    margin-top: 24px;
    button:hover {
        filter: brightness(0.95);
    }
`;

const Button = styled.button<{ selected: boolean }>`
    width: 32px;
    height: 32px;

    border-radius: 8px;
    border: ${(props) =>
        props.selected ? "1px solid var(--orange-low, #FFA585);" : "none;"};
    background: ${(props) =>
        props.selected
            ? "var(--shapes-light-background, #F5F5FA);"
            : "var(--shapes-light-88-gray, #e9e9f0;)"};

    color: ${(props) =>
        props.selected
            ? "var(--orange-low, #FFA585);"
            : "var(--textos-dark-secondary, #737380);"};

    font-family: inherit;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-transform: uppercase;

    cursor: pointer;
    transition: 100ms;

    svg {
        height: 100%;
    }
`;

interface PaginationProps {}
export default function Pagination(props: PaginationProps) {
    const { page, setPage } = useFilter();
    const handleClick = (value: number) => {
        setPage(value);
    };

    return (
        <Container>
            <Button onClick={() => handleClick(0)} selected={page == 0}>
                1
            </Button>
            <Button onClick={() => handleClick(1)} selected={page == 1}>
                2
            </Button>
            <Button onClick={() => handleClick(2)} selected={page == 2}>
                3
            </Button>
            <Button onClick={() => handleClick(3)} selected={page == 3}>
                4
            </Button>
            <Button onClick={() => handleClick(4)} selected={page == 4}>
                5
            </Button>
            <Button
                onClick={() => handleClick(page > 0 ? page - 1 : page)}
                selected={false}
            >
                <ArrowIcon direction={directionEnum.LEFT} />
            </Button>
            <Button
                onClick={() => handleClick(page < 4 ? page + 1 : page)}
                selected={false}
            >
                <ArrowIcon direction={directionEnum.RIGHT} />
            </Button>
        </Container>
    );
}
