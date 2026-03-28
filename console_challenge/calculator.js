const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the first number: ', (num1) => {
  readline.question('Enter the operator (+, -, *, /): ', (op) => {
    readline.question('Enter the second number: ', (num2) => {
      
      let n1 = parseFloat(num1);
      let n2 = parseFloat(num2);
      let result;

      if (op === "+") result = n1 + n2;
      else if (op === "-") result = n1 - n2;
      else if (op === "*") result = n1 * n2;
      else if (op === "/") result = n2 !== 0 ? n1 / n2 : "Error";
      else result = "Invalid Operator";

      console.log(`Result: ${result}`);
      readline.close();
    });
  });
});