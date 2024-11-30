export const countWords = (text: string): number => {
  const trimmedText = text.trim();
  const words = trimmedText === "" ? [] : trimmedText.split(/\s+/);
  return words.length;
};
