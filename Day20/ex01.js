let a = 10;
console.log(a);
let b = new Number(2000007667.255);
console.log(b);

// console.log(Number.toFixed(b));
console.log(b.toFixed(2));
console.log(b.toPrecision(4));
console.log(b.toLocaleString() + "VND");

console.log({ Number });

function MyNumber() {
  this.EPSILON = 2.222983293829839823;
  this.isFinite = function () {};

  // * Phương thức tĩnh.
}

MyNumber.prototype.toFixed = function () {};
