import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [],
  }),

  getters: {
    allItems(state) {
      return state.items;
    },

    totalItems(state) {
      return state.items.length;
    },
  },

  actions: {
    fetchItems() {
      this.items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ];
    },

    addToCart(item) {
      this.items.push(item);
    },

    removeItem(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
    },
  },
});