import { Metadata } from "next";
import Link from "next/link";

interface CartProps {}

export const metadata: Metadata = {
    title: "Carrinho",
    description: "Meu carrinho de compras",
};
export default function Cart(props: CartProps) {
    return (
        <main style={{ height: "100vh" }}>
            <h1>Carrinho</h1>
            <Link href="./"> HOME </Link>
            <Link href="./products"> Produtos </Link>
        </main>
    );
}
