function translatePigLatin(str) {
  let wordArr = str.split("");
  if (
    wordArr[0] === "a" ||
    wordArr[0] === "e" ||
    wordArr[0] === "i" ||
    wordArr[0] === "o" ||
    wordArr[0] === "u"
  ) {
    return str + "way";
  } else {
    return (
      str.slice(str.match(/[^aeiou]+/)[0].length) +
      str.match(/[^aeiou]+/)[0] +
      "ay"
    );
  }
}

translatePigLatin("consonant");
