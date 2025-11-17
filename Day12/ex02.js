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

/**
 * Khái báo với var:
 * - Có thể khai báo lại.
 * - Có thể gán lại.
 * - Có thể gọi trước khi khai báo (hoisting) nhưng không nhận được giá trị (undefined).
 * - var có phạm vi sử dụng là global scope.
 */
