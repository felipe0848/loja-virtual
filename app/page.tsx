import Link from "next/link";

export default function Home() {
    return (
        <>
            <main style={{ height: "100vh" }}>
                <h1> Lorem, ipsum dolor.</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam itaque non veritatis iusto aspernatur ipsum minus
                    nihil earum incidunt voluptatum?
                </p>

                <Link href="./products"> Produtos </Link>
                <Link href="./cart"> Carrinho </Link>
            </main>
        </>
    );
}
