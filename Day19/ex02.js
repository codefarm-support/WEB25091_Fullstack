const obj = {
  fullname: "Nguyen Minh Hoang",
};

const obj2 = new Object(1);
// console.log(obj);
// console.log(obj2);

// console.log(obj.valueOf());
// console.log(obj2.valueOf());

class User {
  constructor(email, password, level) {
    this.email = email;
    this.password = password;
    this.level = level;
    this.hello = function () {
      console.log(`xin chao, minh la ${this.email} day!`);
    };
  }
  learn() {
    console.log(`Toi dang hoc cap ${this.level}`);
  }
}

const userB = new User("nguyenvanb@gmail.com", "123456", "dai hoc");

console.log(userB);
userB.learn();
userB.hello();

// console.log(User.learn());

// * userA, userB được gọi là các nguyên mẫu (instance) của hàm tạo User, chúng kế thừa được các phương thức trong User.prototype

// User.learn(userB);
// User.hello(userB);

const obj3 = {
  fullname: "Nguyen Minh Hoang",
  age: 34,
  email: "hoang@gmail.com",
};

console.log({ Object });

console.log("keys", Object.keys(obj3));
console.log("values", Object.values(obj3));
console.log("entries", Object.entries(obj3));
// console.log("entries", Object.hello(obj3));

/**
 * freeze: làm cho key, value của object bị đóng băng, không thể xoá hoặc thay đổi
 * seal: khoá cứng các keys, nhưng thay đổi được value
 * create, assign
 */

// console.log(Object.freeze(obj3));

// obj3.email = "quoc@gmail.com";
// console.log(obj3);

// delete obj3.email;

// console.log(obj3);

Object.seal(obj3);
obj3.email = "quoc@gmail.com";
console.log(obj3);
delete obj3.email;
console.log(obj3);

obj3.address = "HN";
console.log(obj3);
