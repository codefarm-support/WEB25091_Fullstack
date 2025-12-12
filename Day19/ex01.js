/**
 * * Object và làm việc với Objec (CRUD)
 * * Vòng lặp với Object.
 * * Các phương thức tĩnh (keys, values, entries, frezze, ..)
 * * Prototype
 * * Cơ chế auto boxing
 * * So sánh và sao chép object
 */

const myInfor = {
  fullname: "Nguyen Minh Hoang",
  age: 34,
  address: "Bắc Bling",
};

myInfor.gender = "male";

// myInfor.age = undefiner; // Cách này chỉ có thể áp dụng khi chuyển object này đi với JSON

delete myInfor.age;

console.log(myInfor);

for (const key in myInfor) {
  if (Object.hasOwnProperty.call(myInfor, key)) {
    const element = myInfor[key];
    console.log(`${key}: ${element}`);
  }
}

for (key in myInfor) {
  console.log(`${key}: ${myInfor[key]}`);
}

/**
 * * Sử dụng hộp prompt để mời người dùng nhập vào key mà người dùng muốn lây value từ object myInfor, in ra value bằng alert.
 */

const promptValue = window.prompt("Moi nhap vao:");

alert(myInfor[promptValue]);
