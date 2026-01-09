const form = document.getElementById("register-form");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formdata = new FormData(form);
  //   const data = {};
  //   * cach 1 dung forEach
  //   formdata.forEach((value, key) => {
  //     data[key] = value;
  //   });
  const payload = Object.fromEntries(formdata);
  // * validate email hop le & khong dc de trong, userName khong dc de trong, phone khong dc de trong, password khong duoc de trong & > 6 ky tu
  const { email, userName, password, phone } = payload;
  if (!email.trim().length) {
    alert("Email khong duoc de trong");
    return;
  }
  if (!EMAIL_REGEX.test(email)) {
    alert("Email khong hop le");
    return;
  }
  if (!userName.trim().length) {
    alert("Ten nguoin dung khong dc de trong");
    return;
  }
  if (!phone.trim().length) {
    alert("So dien thoai khong duoc de trong");
    return;
  }
  if (!password.trim().length) {
    alert("Password khong dc de trong");
    return;
  }
  if (password.trim().length <= 6) {
    alert("password phai lon hon 6 ky tu");
    return;
  }
  form.reset();
});
