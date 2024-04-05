let arr1 = ["Rice", "Dal", "Salt"];
let arr2 = [2, 3, 1];
let arr3 = [60, 50, 20];


let data = [];
for (let i = 0; i < arr1.length; i++) {
  let obj = {};
  obj.name = arr1[i];
  obj.quantity = arr2[i];
  obj.price = arr3[i];
  data.push(obj);
}
console.log(data);


let total = 0
for(let i=0;i<data.length;i++){
  total += data[i].price * data[i].quantity;
}

console.log(total)




// }

// let data1 = data(arr1, arr2, arr3)
