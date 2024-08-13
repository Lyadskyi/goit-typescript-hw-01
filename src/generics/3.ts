function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: "Dmytro" };
const obj2 = { age: 40 };

const mergedObj = merge(obj1, obj2);

console.log("Merjed object:", mergedObj); // Виведе: Merjed object: {name: "Dmytro", age: 40}
