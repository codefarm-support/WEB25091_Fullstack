let myString = "   Hoang  ";
let myString2 = String(10); // ep kieu sang chuoi
let myString3 = new String(10); // khởi tạo 1 đối tượng chuỗi.
// boxing
console.log(myString);
console.log(myString2);
console.log(typeof myString3);
console.log(myString3);

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.trim());
console.log(myString.charAt(5));

let string = "Toi la cong dan VietNam, toi khong phai cong dan Campuchia";
console.log(string.replace("cong dan", "nguoi"));
console.log(string.replaceAll("cong dan", "nguoi"));

console.log("CodeFarm" + " " + "-" + "Hoc lap trinh!");

let companyName = "CodeFarm";
let companySlogan = "Hoc lap trinh cung doanh nghiep!";
console.log(`${companyName} - \n ${companySlogan}`);
// template string

// * repeat, replace, replaceAll, concat, split, slice...
