// var (variable):
console.log(a);

var a = 10;

var a = "Hoang";

console.log(a);

a = 20;

{
  {
    {
      var myNumber = 1000;
    }
  }
}
// block scope

if (true) {
  var x = "CodeFarm";
}

console.log(x);

console.log(myNumber);
