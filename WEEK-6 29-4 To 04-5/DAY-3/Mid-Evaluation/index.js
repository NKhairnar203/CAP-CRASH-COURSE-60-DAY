let tbody = document.querySelector("tbody");

async function getData() {
  let res = await fetch(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
  );
  let data = await res.json();
  console.log(data);
  // append(data.data)
  displayData(data);
}
getData();

function displayData(arr) {
  tbody.innerHTML = null;
  arr.map(function (el,i) {
    let tr = document.createElement("tr");
    let td0 = document.createElement("td");
    td0.innerText = el.id;
    let td1 = document.createElement("td");
    td1.innerText = el.name;
    let td2 = document.createElement("td");
    td2.innerText = el.gender;
    let td3 = document.createElement("td");
    td3.innerText = el.department;
    let td4 = document.createElement("td");
    td4.innerText = el.salary;
    tr.append(td0, td1, td2, td3, td4);
    tbody.append(tr);
  });
}
