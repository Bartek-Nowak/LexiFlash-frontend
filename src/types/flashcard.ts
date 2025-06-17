export interface FlashcardType {
  id: string;
  question: {
    text?: string;
    image?: {
      url: string;
      altText?: string;
    };
    mathLatex?: string;
  };
  answer: {
    text: string;
    imageUrl?: string;
    mathLatex?: string;
  };
}
