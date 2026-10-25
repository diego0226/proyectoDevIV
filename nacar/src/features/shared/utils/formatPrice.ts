export function formatPrice(price: number) {
  return `USD ${price.toLocaleString("es-CR")}`;
}
