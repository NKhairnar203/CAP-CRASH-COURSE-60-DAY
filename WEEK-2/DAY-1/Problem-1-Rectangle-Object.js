var rectangle = {
  width:23,
  length:20,
  perimeter:function(){
    return 2 * (this.width + this.length);
  },
  area: function() {
     return this.width * this.length;
  }
};

console.log(rectangle.perimeter())
console.log(rectangle.area());
rectangle.length = 10;
rectangle.width = 30;
console.log(rectangle.perimeter());
console.log(rectangle.area());
