function rot13(str) {
  return str
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter) => {
          if (letter.charCodeAt(0) > 77 && letter.charCodeAt(0) < 91) {
            return String.fromCharCode(letter.charCodeAt(0) - 13);
          } else if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 78) {
            return String.fromCharCode(letter.charCodeAt(0) + 13);
          } else {
            return letter;
          }
        })
        .join("");
    })
    .join(" ");
}

rot13("SERR PBQR PNZC");
