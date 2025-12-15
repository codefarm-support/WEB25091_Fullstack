console.log(String.prototype);

/**
 * * startsWith, endsWith, trim (trimStart, trimEnd, trimRight, trimStart), subString, slice, split, search, replace, replaceAll, repeat, includes, charAt
 *
 * * startsWith, endsWith: Kiểm tra chuỗi có bắt đầu hoặc kết thúc bằng chuỗi kiểm tra không?
 *
 * *includes: tìm chuỗi con có tồn tại trong chuỗi gốc không?
 *
 * * at: lấy ký tự chuỗi theo index, dùng được chỉ số âm
 * * charAt: Như "at" nhưng không dùng chỉ số âm.
 */

const url = "https://codefarm.edu.vn/roadmap/fullstack";

const type = ["txt", "xlsx", "ppt", "pptx", "doc", "docx"];

const imgExample = "nguyenminhhoang.jpg";
const typeImg = ["jpg", "jpeg", "png", "webp", "svg"];

console.log(url.startsWith("https://codefarm.edu.vn"));
console.log(url.startsWith("https://codefarm.edu.vn"));

// typeImg.forEach((element) => {
//   console.log(imgExample.endsWith(element));
// });

console.log(typeImg.some((item) => imgExample.endsWith(item)));

console.log(url.includes("codefarm.edu.vn"));

console.log(url.at());

console.log("   hoang   ".trim());
console.log("   hoang   ".trimEnd());
console.log("   hoang   ".trimStart());
console.log("nguyen minh hoang".substring(-2, 1));
console.log("nguyen minh hoang".substring(-1, -3));

console.log("nguyen minh hoang".slice(2, 4));

/** repeat */

console.log("codefarm".split(""));

console.log("Hom nay la mot ngay nang dep!".split(" ").length);

console.log(
  "JavaScript la mot ngon ngu dac biet, JavaScript kha de hoc cho nguoi moi!".replace(
    "JavaScript",
    "JS"
  )
);

console.log(
  "JavaScript la mot ngon ngu dac biet, JavaScript kha de hoc cho nguoi moi!".replaceAll(
    "JavaScript",
    "JS"
  )
);

console.log(
  "JavaScript la mot ngon ngu dac biet, JavaScript kha de hoc cho nguoi moi!".search(
    "mot"
  )
);
