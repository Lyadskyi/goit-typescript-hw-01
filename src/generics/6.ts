type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const formParams: Params = {
  email: "example@mail.com",
  firstName: "Denis",
  lastName: "Queid",
  phone: "555-55-55",
};

console.log("Form Params:", formParams);
