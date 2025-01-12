import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { loginUser, signupUser } from "../utils/Auth";h

interface User {
  email: string;
  password: string;
  username?: string;
}

interface AuthContextType {
  user: User | null;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  signup: (username: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // persists the user login even after refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(
      (user: User) => user.email === email && user.password === password
    );

    if (!existingUser) {
      setError("Invalid username or password");
    } else {
      setUser(existingUser);
      localStorage.setItem("currentUser", JSON.stringify(existingUser));
      alert("Login Successful");
      navigate("/category");
    }
  }

  function signup(username: string, email: string, password: string) {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((user: User) => user.email === email)) {
      setError("Account already exists");
    } else {
      users.push({ username, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful");
      navigate("/login");
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{ user, error, setError, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
