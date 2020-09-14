function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map((obj) => {
    var orbitsLengthPower3 = Math.pow(obj.avgAlt + earthRadius, 3);
    var rightHand = Math.pow(orbitsLengthPower3 / GM, 0.5);
    var orbitalPer = Math.round(2 * Math.PI * rightHand);
    obj.orbitalPeriod = orbitalPer;
    delete obj.avgAlt;
    return obj;
  });
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
