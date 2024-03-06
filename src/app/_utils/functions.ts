export function breakText(text: string | undefined): string[] {
  const paragraphs = text?.split(". ").map((paragraph, index, array) => {
    if (index < array.length - 1) {
      paragraph += ".";
    }
    return paragraph;
  });
  return paragraphs || [];
}

export function convertDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
