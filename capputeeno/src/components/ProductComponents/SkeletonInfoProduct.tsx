import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 22px;

    display: flex;
    gap: 16px;
    border-radius: 4px;
    width: 100%;

    font-family: inherit;
    font-weight: 400;
    line-height: 150%;
    color: var(--textos-dark-primary, #41414d);
`;

const Wrapper1 = styled.div`
    width: 50%;
    max-width: 640px;
    max-height: 580px;
    gap: 32px;
`;
const Wrapper2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;

    > p {
        margin-bottom: 12px;
        font-size: 16px;
    }
    h3 {
        margin-bottom: 4px;
        font-size: 32px;
        font-weight: 300;
    }
    span {
        margin-bottom: 24px;
        color: var(--shapes-dark, #09090a);
        font-size: 20px;
        font-weight: 600;
    }
    p:nth-child(2) {
        font-size: 12px;
    }
    h4 {
        margin-top: 24px;
        margin-bottom: 8px;
        color: var(--textos-dark-secondary, #737380);
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
    }
    p:nth-child(3) {
        font-size: 12px;
        font-weight: 400;
    }
`;

interface SkeletonInfoProductProps {}
export default function SkeletonInfoProduct(props: SkeletonInfoProductProps) {
    return (
        <Container>
            <Wrapper1>
                <Skeleton width={640} height={580} wrapper={Wrapper1} />
            </Wrapper1>

            <Wrapper2>
                <div>
                    <p>
                        <Skeleton width={100} height={24} />
                    </p>
                    <h3>
                        <Skeleton width={600} height={48} />
                    </h3>
                    <span>
                        <Skeleton width={150} height={30} />
                    </span>
                    <p>
                        <Skeleton width={430} height={18} />
                    </p>
                    <h4>
                        <Skeleton width={150} height={24} />
                    </h4>
                    <p>
                        <Skeleton width={600} height={24} count={3} />
                    </p>
                </div>
                <Skeleton width={448} height={54} />
            </Wrapper2>
        </Container>
    );
}
