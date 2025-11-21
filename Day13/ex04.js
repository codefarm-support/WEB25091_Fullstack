/**
 * * Hãy viết logic để kiểm tra 1 số là số chẵn hay số lẻ bằng 2 cách (if...else, switch...case)
 */

let x = 11;

// ! Cách 1:
if (x % 2) {
  console.log(`x la so le`);
} else {
  console.log(`x la so chan`);
}

// ! Cách 2:
switch (x % 2 === 0) {
  case true:
    console.log(`x la so chan`);
    break;
  default:
    console.log(`x la so le`);
}

switch (x % 2) {
  case 0:
    console.log(`x la so chan`);
    break;
  default:
    console.log(`x la so le`);
}
