// JavaScript код:

// const age = 50;
// const username = "Max";
// const toggle = true;
// const empty = null;
// const callback = (a) => {
//   return 100 + a;
// };

// TypeScript з відповідними типами для всіх змінних:

const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
  return 100 + a;
};

console.log(
  `Types of variables: \nage: ${age},\nusername: ${username},\ntoggle: ${toggle},\nempty: ${empty},\ncallback: ${callback}`
); // Виведе:
// Types of variables:
// age: 50,
// username: Max,
// toggle: true,
// empty: null,
// callback: (a) => {
//   return 100 + a;
// }
