let data = [
  { name: "Nrupul", age: 32 },
  { name: "Prateek", age: 30 },
  { name: "Aman", age: 26 },
  { name: "Albert", age: 28 },
  { name: "Yogesh", age: 44 },
];


data.filter(function(ele, i) {
  if(ele.age > 30){
    console.log(ele.name);
  }

})
