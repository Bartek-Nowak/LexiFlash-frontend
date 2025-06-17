export interface FlashcardType {
  id: string;
  question: {
    text?: string;
    imageUrl?: string;
    mathLatex?: string;
  };
  answer: {
    text?: string;
    imageUrl?: string;
    mathLatex?: string;
  };
}
