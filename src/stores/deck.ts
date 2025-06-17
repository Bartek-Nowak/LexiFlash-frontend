import { defineStore } from 'pinia';
import axios from 'axios';
import type { DeckType } from '@/types';

export const useDeckStore = defineStore('deck', {
  state: () => ({
    decks: [] as DeckType[],
  }),
  actions: {
    async fetchDecks() {
      if (this.decks.length === 0) {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/decks`);
        this.decks = res.data;
      }
    },
    addDeck(newDeck: DeckType) {
      this.decks.push(newDeck);
    },
  },
});
