import { writable, get } from "svelte/store";

export const cardsStore = writable([], () => {
  console.log("подписка");
});
