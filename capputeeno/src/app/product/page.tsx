"use client";
import ButtonBack from "@/components/ProductComponents/ButtonBack";
import InfoProduct from "@/components/ProductComponents/InfoProduct";
import { useProduct } from "@/hooks/useProduct";

export default function PageProduct(params: { searchParams: { id: string } }) {
    const product = useProduct(params.searchParams.id);

    return (
        <div>
            <ButtonBack navigate="/" />
            <InfoProduct product={product?.data} />
        </div>
    );
}
