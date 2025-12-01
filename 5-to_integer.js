const firstArg = 5;
const number = Number(firstArg);

if (Number.isInteger(number)) {
  console.log("My number: " + number);
} else {
  console.log("Not a number");
}