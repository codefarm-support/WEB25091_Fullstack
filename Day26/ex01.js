const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  if (!email.trim().length) {
    alert("Email khong duoc de trong");
    return;
  }
  if (!EMAIL_REGEX.test(email)) {
    alert("Email khong hop le");
    return;
  }
  if (password.length <= 6) {
    alert("Password không được để trống & phải lớn hơn 6 ký tự");
  }
  //* validate email khong duoc de trong
  //* email phai dung dinh dang email
  //* Password phai tren 6 ky tu
  const payload = {
    email,
    password,
  };
  console.log("gia lap gui di server", payload);
});
