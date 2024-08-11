// Змінна, яка може містити або рядок, або число:

let mixedType: string | number;

mixedType = "test"; // OK
mixedType = 10; // OK

// Змінна, яка може містити лише одне з двох можливих рядкових значень:

let status: "enable" | "disable";

status = "enable"; // OK
status = "disable"; // OK
