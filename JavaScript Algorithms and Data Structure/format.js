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
