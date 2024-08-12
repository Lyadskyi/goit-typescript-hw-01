// function merge (objA, objB) {
//   return Object.assign(objA, objB);
// }

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: "Dmytro" };
const obj2 = { age: 40 };

const mergedObj = merge(obj1, obj2);

console.log(mergedObj); // Виведе: {name: "Dmytro", age: 40}
