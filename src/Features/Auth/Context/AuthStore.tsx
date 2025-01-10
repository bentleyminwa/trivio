import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, signupUser } from "../utils/Auth";

interface AuthContextType {
  formData: {
    name: string;
    email: string;
    password: string;
  };
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignup: (e: React.FormEvent) => void;
  handleLogin: (e: React.FormEvent) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    const result = signupUser(formData.email, formData.password, formData.name);
    if (result.success) {
      navigate("/login");
    } else {
      setError(result.message);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const result = loginUser(formData.email, formData.password);
    if (result.success) {
      navigate("/category");
    } else {
      setError(result.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{ formData, error, handleChange, handleSignup, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
