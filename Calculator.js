if (process.argv.length !== 5) {
  console.log("Insuffcient argument");
  process.exit();
}

const commands = ["add", "mul", "sub", "div", "pow"];

const command = process.argv[2].toLowerCase();

if (!commands.includes(command)) {
  console.log("Wrong entered command");
  process.exit();
}

const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Entered values are not numbers");
  process.exit();
}

switch (command) {
  case "add":
    console.log(num1 + num2);
    break;
  case "mul":
    console.log(num1 * num2);
    break;
  case "sub":
    console.log(num1 - num2);
    break;
  case "div":
    console.log(num1 / num2);
    break;
  case "pow":
    console.log(num1 ** num2);
    break;
}
