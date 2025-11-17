// boolean, undefined, null

// * Các kiểu dữ liệu nguyên thủy:
/**
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. BigInt
 * 7. Symbol
 */

let isMarried = true;
let isActive = true;
let isBlocked = false;
let isOnline = true;
let isValid1 = new Boolean("true"); // true
let isValid2 = new Boolean("false"); // true
console.log(isValid1);
console.log(isValid2);

console.log(Boolean(false));
console.log(Boolean("")); // true
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean("Hoang"));

/**
 * * Falsy values: Là các giá trị đặc biệt khi bị ép kiểu sang Boolean sẽ nhận kết quả là false, bao gồm 6 giá trị sau:
 * 1. false.
 * 2. ""
 * 3. 0
 * 4. null
 * 5. undefined
 * 6. NaN
 * * Truthy values: Là các giá trị khi ép sang boolean sẽ nhận kết quả true
 */

console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean([] + [])); // "" + "" = "" = false
console.log(Boolean(+[])); // [] = +"" = 0 = false
let a = [];
console.log(Boolean(++a)); // [] = ++0 = 1 = true

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(true + true * (true + false));
// * 1 + 1*(1 + 0) = 2
console.log(Boolean(String(false)));
// console.log(String(true));

//* Các kiểu dữ liệu tham chiếu - reference type /  phức tạp.

/**
 * Object
 * Array
 * Function
 * Date
 * Regex
 * Map
 * Set
 */
