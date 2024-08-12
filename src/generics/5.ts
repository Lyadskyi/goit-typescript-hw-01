export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const roleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

console.log("Role description:", roleDescription); // Виведе: Role description: {admin: "Admin User", editor: "Editor User",
// guest: "Guest User"}
