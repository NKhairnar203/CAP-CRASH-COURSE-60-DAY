let container = document.getElementById("container");
let selection = document.getElementById("select-opt");

selection.addEventListener("change", () => {
  let select = selection.value;
  getData(select);
});

data = [];

// fetch(
//   "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
// )
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (res) {
//     displayData(res.data);
//     console.log(res.data);
//   });

async function getData(order) {
  let API =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";

  if (order != undefined) {
    API += "?sort=population&order=" + order ;
  }
  try {
    let res = await fetch(API);

    let data = await res.json();
    displayData(data.data);
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
}

getData();

function displayData(data) {
  container.innerHTML = null;
  data.forEach(function (ele) {
    console.log(data);
    let div = document.createElement("div");
    div.setAttribute("class", "card");

    let h4 = document.createElement("h4");
    h4.innerText = `Country - ${ele.country}`;

    let p = document.createElement("p");
    p.innerText = `Rank - ${ele.Rank}`;

    let h6 = document.createElement("h5");
    h6.innerText = `Population - ${ele.population}`;

    div.append(h4, p, h6);
    container.append(div);
  });
}
