// console.log("task A");

// * Việc C cần đợi việc B xong mới chạy.
// console.log("task C");

/**
 * JS xử lý lệnh đồng bộ, trừ các nghiệp vụ thuộc WEB API, Effect, v.v.(fetch, timer)
 *
 * ? Có 3 cách để xử lý bất đồng bộ.
 */

// console.log(window);

// * Việc C cần đợi việc B xong mới chạy.
// function taskB(callback) {
//   console.time("timer");
//   setTimeout(() => {
//     console.log("task B");
//     callback();
//   }, 1000);
// }

// function taskC(callback) {
//   setTimeout(() => {
//     console.log("task C");
//     callback();
//   }, 2000);
// }

// function taskD() {
//   setTimeout(() => {
//     console.log("Task D");
//     console.timeEnd("timer");
//   }, 3000);
// }

// taskB(() => taskC(taskD));

const myPromise = new Promise((resolve, reject) => {
  /**
   * * resolve là hàm được gọi khi lời hứa được thực hiện, resolve để truyền dữ liệu sau khi xử lý promise đi đến việc tiếp theo.
   * * reject là hàm được gọi khi promise thất bại.
   */

  // resolve("Thanh cong!");
  reject("That bai!");
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Ket thuc, don dep!");
  });
