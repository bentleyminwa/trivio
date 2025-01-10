interface User {
  email: string;
  password: string;
  name?: string;
}

export const signupUser = (email: string, password: string, name: string) => {
  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find((user: User) => user.email === email)) {
    return { success: false, message: "Account already exists" };
  }
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true, message: "Signup successful" };
};

export const loginUser = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const existingUser = users.find(
    (user: User) => user.email === email && user.password === password
  );

  if (!existingUser) {
    return { success: false, message: "Invalid email or password" };
  }

  localStorage.setItem("currentUser", JSON.stringify(existingUser));
  return { success: true, message: "Login successful" };
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
};
