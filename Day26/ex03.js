const form = document.getElementById("register-form");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formdata = new FormData(form);
  const payload = Object.fromEntries(formdata);
  const { email, name, age, major } = payload;
  if (!email.trim().length) {
    alert("Email khong duoc de trong");
    return;
  }
  if (!EMAIL_REGEX.test(email)) {
    alert("Email khong hop le");
    return;
  }

  if (!name.trim().length || name.trim() <= 3) {
    alert("Ten nguoin dung khong dc de trong va phai tren 3 ky tu");
    return;
  }
  if (Number.isNaN(age) || age < 16 || !age) {
    alert("Tuổi không hợp lệ và tuổi phải lớn hơn 16");
    return;
  }
  if (!major) {
    alert("Chuyên ngành không đc để trống");
    return;
  }
  // * Kiểm tra email đã tồn tại trong hệ thống hay chưa nếu chưa cho phép đi tiếp còn nếu tồn tại thì chặn lại và báo lên email đã tồn tại
  // * Kiểm tra trong mảng students đã có email mình truyền vào tồn tại hay chưa
  // * Nếu tồn tại thì chặn lại và báo lỗi
  // * Không tồn tại thì đi tiếp để tạo mới sinh viên
  form.reset();
  fetch("https://api-class-o1lo.onrender.com/api/dungvh/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  showStudent();
});

const studentTable = document.getElementById("students-table");

async function showStudent() {
  const response = await fetch(
    "https://api-class-o1lo.onrender.com/api/dungvh/user",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  studentTable.innerHTML = data.data.map(
    (item, index) =>
      `
        <tr>
          <td>${index + 1}</td>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.age}</td>
          <td>${item.major}</td>
          <td><button onclick="deleteStudent('${item._id}')">Xoa</button></td>
        </tr>
    `
  );
}
showStudent();

function deleteStudent(id) {
  fetch(`https://api-class-o1lo.onrender.com/api/dungvh/user/${id}`, {
    method: "DELETE",
  }).then(() => showStudent());
}
