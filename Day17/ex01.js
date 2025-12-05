/**
 * * foreach, map, reduce, sort
 *
 * * forEach(callback)
 * * duyệt qua từng phần tử của mảng.
 * * không trả về
 *
 *
 *
 * */

const students = ["Thinh", "Huy", "Dam"];
const students2 = [
  { id: 1, name: "Thinh", age: 22, gender: "male", score: 7.6 },
  { id: 2, name: "Huy", age: 24, gender: "male", score: 6.6 },
  { id: 3, name: "Dam", age: 23, gender: "male", score: 9.6 },
];

let content = /*html */ `<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Score</th>
      <th>Perf</th>
    </tr>
  </thead>
<tbody>`;

function perf(score) {
  if (score < 7) return "average";
  if (score >= 9) return "excellent";
  return "good";
}

students2.forEach((item, index) => {
  content += /*html */ `<tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.gender}</td>
    <td>${item.score}</td>
    <td>${perf(item.score)}</td> //??
  </tr>`;
});

content += /*html*/ `
    </tbody>
  </table>
`;

document.write(content);

/**
 * ? 1. Dùng forEach để hiển thị students2 thành 1 bảng sinh viên trên giao diện có đầy đủ thông tin.
 * ? 2. Bổ sung 1 cột "Perf" với 3 giá trị như sau:
 * * nếu điểm dưới 7 thì là "average",
 * * nếu điểm từ đủ 7 đến dưới 9: "good"
 * * nếu điểm từ đủ 9: "excellent"
 * */
