var sales = [
  { item: "PS4 Pro", stock: 3, original: 399.99 },
  { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
  { item: "Nintendo Switch", stock: 4, original: 299.99 },
  { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
  { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 },
];

for (let i = 0; i < sales.length; i++) {
  if (sales[i].discount == undefined) {
    sales[i].discount = 0;
  }

  let sale = sales[i].original - sales[i].original * sales[i].discount;
  let total = sales[i].stock * sale;
  sales[i].total = total
}


console.log(sales)