"use client";
import ButtonBack from "@/components/ProductComponents/ButtonBack";
import InfoProduct from "@/components/ProductComponents/InfoProduct";
import SkeletonInfoProduct from "@/components/ProductComponents/SkeletonInfoProduct";
import { useProduct } from "@/hooks/useProduct";

export default function PageProduct(params: { searchParams: { id: string } }) {
    const product = useProduct(params.searchParams.id);

    return (
        <div>
            <ButtonBack />
            {product.data ? (
                <InfoProduct product={product.data} />
            ) : (
                <SkeletonInfoProduct />
            )}
        </div>
    );
}
