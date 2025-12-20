// Bài 1 (2 điểm): Viết hàm tạo ra id ngẫu nhiên với yêu cầu sau:
// Hàm generateId(length, prefix) sẽ trả về một chuỗi id ngẫu nhiên với độ dài length nối với tiền tố prefix (lưu ý độ dài length không tính prefix). (0.5đ)
// Kiểm tra length phải là số nguyên dương nhỏ hơn 100 (0.5đ).
// Chuỗi id ngẫu nhiên được tạo ra (trừ phần prefix) thì chỉ được phép chứa các ký tự trong listCharacters bao gồm các ký tự chữ cái và số. (0.5đ)
// Nếu người dùng không truyền prefix thì mặc định prefix là chuỗi rỗng. (0.5đ)

// const listCharacters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// function generatorId(length, prefix="") {
//   if (!Number.isInteger(length) || length < 0 || length > 100) {
//     return "Invalid";
//   }
//   let randomPart = "";
//   for (let i = 0; i < length; i++) {
//     const RandomIndex = Math.floor(Math.random() * listCharacters.length);
//     randomPart += listCharacters[RandomIndex];
//   }
//   return prefix + randomPart;
// }
// console.log(generatorId(5, "pb"));

// function highlightKeyword(content, keywork) {
//   if (typeof content !== "string" || typeof keywork !== "string") {
//     return "invalid";
//   }
//   const regex = new RegExp(`(${keywork})`, "ig");
//   if (!keyword) return content;
//   return content.replace(regex, "<strong>$1</strong>");
// }

const categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];
function buildOption(categories, level = 0) {
  return categories
    .map((item) => {
      const prefix = "--|".repeat(level);
      let option = `<option value="${item.id}">${prefix}${item.name}</option>`;
      if (item.children && item.children.length > 0) {
        option += buildOption(item.children, level + 1);
      }
      return option;
    })
    .join("");
}
const content = ` <select>${buildOption(categories)}</select>`;
document.write(content);

function findSecondLargestNumber(arr) {
  if (!Array.isArray(arr) || arr.length == 0) {
    return "invalid";
  }
  const first = Math.max(...arr);
  const filtered = arr.filter((num) => num !== first);
  if (filtered.length === 0) return null;
  return Math.max(...filtered);
}
