const products = [
  { name: "Speakers", arrivalDate: new Date("2021-06-15") },
  { name: "Gaming mouse", arrivalDate: new Date("2021-05-02") },
  { name: "Keyboard", arrivalDate: new Date("2021-05-17") },
  { name: "Headphones", arrivalDate: new Date("2021-07-01") },
];

const orderedProducts = products
  .slice()
  .sort((a, b) => b.arrivalDate - a.arrivalDate);

console.log(orderedProducts);
