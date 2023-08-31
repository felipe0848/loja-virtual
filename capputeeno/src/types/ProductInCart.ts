export interface ProductInCart {
    id: string;
    qtd: number;
}

export interface InCartResponse extends ProductInCart {
    name: string;
    image_url: string;
    price_in_cents: number;
    category: string;
    description: string;
}
