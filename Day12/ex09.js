console.log(typeof null);

/**
 * ! null
 * * đại diện cho không có gì.
 * * thường được dev chủ động gán khi chờ giá trị thật.
 * * typeof null = objec (day la 1 lỗi lịch sử)
 *
 * ! undefined
 * * đại diện cho không có gì
 * * thường tự xuất hiện khi truy cập 1 biến chưa được gán giá trị, 1 key của object không tồn tại, 1 index của array không tồn tại,
 */

const myInfor = {
  username: "hoangnm",
};

console.log(myInfor.password);
console.log(typeof undefined);

const myList = [1, 2, 3, 4];
console.log(myList[100]);
