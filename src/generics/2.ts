// Завдання 2

// Виконуйте це завдання у файлі src/generics/2.ts.

// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання - використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType. Функція compare повинна повертати AllType.

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number
// }

// function compare (top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }

type User10 = {
  id: number;
  name: string;
  email: string;
};

type UserBasicInfo = Pick<User10, "id" | "name">;

let user10: User10 = {
  id: 1,
  name: "John Doe",
  email: "john@example.com", // Error: Property "email" does not exist on type "UserBasicInfo" // Объектный литерал может
  // использовать только известные свойства. "email" не существует в типе "UserBasicInfo"
};

let userBasicInfo: UserBasicInfo = {
  id: 2,
  name: "Sally",
};

console.log(user10);
console.log(userBasicInfo);

export {};
