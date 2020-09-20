// Palindrome Checker
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

// Roman Numeral Converter
  function convertToRoman(num) {
    return num
      .toString()
      .split("")
      .reverse()
      .map((number, index) => {
        switch (parseInt(number) * 10 ** index) {
          case 1:
            return "I";
          case 2:
            return "II";
          case 3:
            return "III";
          case 4:
            return "IV";
          case 5:
            return "V";
          case 6:
            return "VI";
          case 7:
            return "VII";
          case 8:
            return "VIII";
          case 9:
            return "IX";
          case 10:
            return "X";
          case 20:
            return "XX";
          case 30:
            return "XXX";
          case 40:
            return "XL";
          case 50:
            return "L";
          case 60:
            return "LX";
          case 70:
            return "LXX";
          case 80:
            return "LXXX";
          case 90:
            return "XC";
          case 100:
            return "C";
          case 200:
            return "CC";
          case 300:
            return "CCC";
          case 400:
            return "CD";
          case 500:
            return "D";
          case 600:
            return "DC";
          case 700:
            return "DCC";
          case 800:
            return "DCCC";
          case 900:
            return "CM";
          case 1000:
            return "M";
          case 2000:
            return "MM";
          case 3000:
            return "MMM";
          default:
            return parseInt(number) * 10 ** index;
        }
      })
      .reverse()
      .filter((num) => num !== 0)
      .join("");
  }

  convertToRoman(36);

// Caesars Cipher
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

// Telephone Number Validator
  function telephoneCheck(str) {
    return str.match(/^(1|)(-| |)(\(\d{3}\)|\d{3})(-| |)\d{3}(-| |)\d{4}$/g)
      ? true
      : false;
  }

  telephoneCheck("555-555-5555");

// Cash Register
  function checkCashRegister(price, cash, cid) {
    let dues = cash - price;
    let amountInDrawer = 0;
    cid.forEach((arr) => {
      amountInDrawer += arr[1];
    });
    if (
      price > Number(amountInDrawer.toFixed(2)) &&
      cash - price !== Number(amountInDrawer.toFixed(2))
    ) {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: [],
      };
    } else if (cash - price === Number(amountInDrawer.toFixed(2))) {
      return {
        status: "CLOSED",
        change: cid,
      };
    } else {
      let change = [];
      cid
        .map((arr) => {
          switch (arr[0]) {
            case "PENNY":
              return ["PENNY", 0.01, arr[1]];
            case "NICKEL":
              return ["NICKEL", 0.05, arr[1]];
            case "DIME":
              return ["DIME", 0.1, arr[1]];
            case "QUARTER":
              return ["QUARTER", 0.25, arr[1]];
            case "ONE":
              return ["ONE", 1, arr[1]];
            case "FIVE":
              return ["FIVE", 5, arr[1]];
            case "TEN":
              return ["TEN", 10, arr[1]];
            case "TWENTY":
              return ["TWENTY", 20, arr[1]];
            case "ONE HUNDRED":
              return ["ONE HUNDRED", 100, arr[1]];
          }
        })
        .reverse()
        .forEach((arr) => {
          let index = 0;
          while (Number(dues.toFixed(2)) - arr[1] >= 0 && arr[2] > 0) {
            dues -= arr[1];
            arr[2] -= arr[1];
            index++;
          }
          if (index > 0) {
            change.push([arr[0], index * arr[1]]);
          }
        });
      return {
        status: "OPEN",
        change: change,
      };
    }
  }

  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ]);

