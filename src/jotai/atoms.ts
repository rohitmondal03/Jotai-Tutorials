import { atom } from "jotai";
// import { atomWithStorage } from "jotai/utils";


export const counterAtom= atom(0);


export const detailsAtom= atom({
  name: "Rohit",
  age: 21,
})



export const readOnlyAtom= atom("readonly");
export const getReadOnly= () => atom((get) => get(readOnlyAtom).toUpperCase());


// export const themeAtom= atomWithStorage("dark", false);
export const themeAtom= atom("dark");
