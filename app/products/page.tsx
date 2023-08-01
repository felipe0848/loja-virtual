import { NextPage } from "next";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nossos Produtos",
    description: "conheça todos os nossos produtos",
};

const Products: NextPage = () => {
    return (
        <main style={{ height: "100vh" }}>
            <h1>Nossos Produtos</h1>
            <Link href="./"> HOME </Link>
            <Link href="./cart"> Carrinho </Link>
        </main>
    );
};

export default Products;
