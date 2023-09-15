import Skeleton from "react-loading-skeleton";

interface SkeletonProductCardProps {}
export default function SkeletonProductCard(props: SkeletonProductCardProps) {
    return (
        <div>
            <Skeleton height={300} />

            <div>
                <h3>
                    <Skeleton width={232} />
                </h3>
                <div> </div>
                <p>
                    <Skeleton width={64} />
                </p>
            </div>
        </div>
    );
}
