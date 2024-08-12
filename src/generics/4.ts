type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  console.log("User data:", initialValues); // Виведе: User data: {email: "user@mail.com", password: "password123"}
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
