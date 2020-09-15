function palindrome(str) {
  let normalStr = str
    .split(/[^a-zA-Z\d\s:]/)
    .join("")
    .split(" ")
    .join("")
    .toLowerCase();
  let reverseStr = str
    .split(/[^a-zA-Z\d\s:]/)
    .join("")
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  return normalStr === reverseStr;
}

palindrome("eye");
