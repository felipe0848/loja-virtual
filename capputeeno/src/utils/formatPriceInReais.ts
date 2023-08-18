export function formatPriceInReais(cents: number) {
    const reais = (cents / 100).toFixed(2);
    return `R$ ${reais.replace(".", ",")}`;
}
