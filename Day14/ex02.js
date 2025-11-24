const sum = (a, b) => {
  return a + b;
};
// console.log(sum2(1, 2));
const sum2 = (a, b) => a + b;

const showObj = () => ({ name: "Hoang" });
const showArr = () => [1, 2, 3, 4];

// * input => output

const user = {
  fullname: "Nguyen Minh Hoang",
  hello: function () {
    console.log(`xin chao, toi la ${this.fullname}`);
  },
};

user.hello();

const user2 = {
  fullname: "Nguyen Minh Hoang",
  hello: () => {
    console.log(`xin chao, toi la ${this.fullname}`);
  },

  // * arrow function không có this, không có context riêng, không nhớ được nơi sinh ra (closure).
};

user2.hello();
