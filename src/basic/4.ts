// Функції JavaScript:

// function showMessage(message) {
//   console.log(message);
// }

function showMessage(message: string): void {
  console.log(message); // Виведе: "Hello, TypeScript!"
}

showMessage("Hello, TypeScript!");

// function calc(num1, num2) {
//   return num1 + num2;
// }

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

const result = calc(5, 10);
console.log(result); // Виведе: 15

// function customError() {
//   throw new Error("Error");
// }

function customError(): never {
  throw new Error("Error");
}

customError();
