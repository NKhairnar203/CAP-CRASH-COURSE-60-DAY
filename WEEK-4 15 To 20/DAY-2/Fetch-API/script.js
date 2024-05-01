let btn = document.getElementById("btn");


btn.addEventListener("click",function(){
  getData();
})



async function getData(){
  let res = await fetch("https://reqres.in/api/users");

  let data = await res.json();

  displayData(data.data)
  console.log(data)
}




function displayData(arr){
  arr.forEach((ele,i)=>{
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.avatar;

    let h4 = document.createElement("h4");
    h4.innerText ="Name: " + ele.first_name +" "+ ele.last_name;

    let h5 = document.createElement("h5");
    h5.innerText = "E-mail: " + ele.email;

    div.append(img, h4, h5);

    document.getElementById("container").append(div);
  })
}