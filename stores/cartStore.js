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
      if(!this.items.includes(item)) {
        this.items.push(item);
      } else {
        document.querySelector(".cart").classList.add("shake");
        setTimeout(() => {
          document.querySelector(".cart").classList.remove("shake");
        }, 800);
      }
    },

    removeFromCart(item) {
      // using the uid of the item to remove it from the cart
      this.items = this.items.filter((i) => i !== item);
    }
  },
});