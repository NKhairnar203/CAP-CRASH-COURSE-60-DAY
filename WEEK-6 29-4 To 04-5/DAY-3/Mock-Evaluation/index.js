let product_container = document.getElementById("product-container");
let sort_price = document.getElementById("sort-price");
let search = document.getElementById("search");


async function getData() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  displayData(data);
  console.log(data);
  // searchProduct(data);
}
getData();

function displayData(arr) {
  arr.forEach(function (el, id) {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    let img = document.createElement("img");
    img.src = el.image;
    let h2 = document.createElement("h2");
    h2.innerText = el.title;  
    let p = document.createElement("p");
    p.innerText = `Price: $ ${el.price}`;
    div.append(img, h2, p);
    product_container.append(div);
  });
}


function searchProduct(arr){
  
}
search.addEventListener("change", function (arr) {
  product_container.innerHTML = null;
  let searchVal = search.value;
  console.log(searchVal);
  arr.forEach(function (ele, i) {
    if (ele.title.toLowerCase() == searchVal) {
      return displayData(ele);
    }
  });
})
// searchProduct();