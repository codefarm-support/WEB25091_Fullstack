const animals = [
  "dog",
  "elephent",
  "cat",
  "mongoose",
  "cat",
  "mongoose",
  "ant",
  "cat",
  "ant",
  "horse",
];

const sumaryAnimals = animals.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(sumaryAnimals);

/**
 * ? Loại bỏ các phần tử trùng lặp trong mảng animals để tạo ra mảng mới uniqueAnimals
 */

const uniqueAnimals = animals.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(uniqueAnimals);
