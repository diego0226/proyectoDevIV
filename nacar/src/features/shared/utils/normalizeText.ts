// Pasa el texto a minúsculas y le quita las tildes,
// así "jaco" encuentra "Jacó" y "ESCAZU" encuentra "Escazú"
export function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}
