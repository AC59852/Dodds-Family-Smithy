import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [
      "mace"
    ],
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
    addToCart(item) {
      this.items.push(item);
    },

    removeFromCart(item) {
      // using the uid of the item to remove it from the cart
      this.items = this.items.filter((i) => i !== item);
    }
  },
});