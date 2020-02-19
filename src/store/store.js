import { writable, get } from "svelte/store";

// interface ICard {
//   id: string;
//   name: string;
//   uri?: string;
// }

// const initCard: ICard = {
//   id: "",
//   name: ""
// };

export const cardsStore = writable([], () => {
  console.log("подписка");
});

export function getImage() {
  return (
    fetch("https://www.superheroapi.com/api.php/2304427089625919/1", {
      mode: "cors"
    })
      .then(res => res.json())
      .then(json => {
        console.log("---");
        cardsStore.update(source => {
          return source.push({
            id: json.id,
            name: json.name,
            uri: json.image.url
          });
        });
      })
      // .then(console.log("sss", get(cardsStore)))
      .catch(err => {
        throw new Error(err);
      })
  );
}
