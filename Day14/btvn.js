function printChristmasTree(n, charector) {
  if (n <= 0 || !charector) {
    console.log("so hoac charector khong hop le");
    return;
  }

  for (let i = 0; i <= n + 1; i++) {
    let result = "";

    if (i == n + 1) {
      for (let j = 0; j <= n - 1; j++) {
        result += " ";
      }
      for (let k = 0; k <= 1; k++) {
        result += charector;
        k++;
      }
      console.log(result);
      return;
    } else {
      for (let j = 0; j <= n - i; j++) {
        result += " ";
      }

      for (let k = 0; k < i * 2 - 1; k++) {
        result += charector;
      }
      console.log(result);
    }
  }
}
printChristmasTree(5, "*");
