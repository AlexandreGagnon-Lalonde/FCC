function addTogether() {
  let args = Array.from(arguments);
  console.log(args);
  return args.some((arg) => typeof arg !== "number")
    ? undefined
    : args.length > 1
    ? args[0] + args[1]
    : (n) => (typeof n !== "number" ? undefined : n + args[0]);
}

addTogether(2, 3);
