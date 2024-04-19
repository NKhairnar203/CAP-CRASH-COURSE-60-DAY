let container = document.getElementById("container");

data = [];

fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
.then(function (res) {
    return res.json();
})
.then(function (res) {
    displayData(res);
    console.log(res);
});

function displayData(data){
  data.forEach(function (ele){
    console.log(data);  
    let div = document.createElement("div");
    div.setAttribute("class", "card");

    let p = document.createElement("p");
    p.innerHTML = `Country - ${ele.country}`;

    div.append(p)
    container.append(div);
  });
}
