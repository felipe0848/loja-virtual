import DefaultProviders from "@/components/DefaultProviders";
import Header from "@/components/HeaderComponents/Header";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
    weight: ["300", "400", "500", "600"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={saira.className}>
                <DefaultProviders>
                    <Header />
                    <PageWrapper>{children}</PageWrapper>
                </DefaultProviders>
            </body>
        </html>
    );
}
