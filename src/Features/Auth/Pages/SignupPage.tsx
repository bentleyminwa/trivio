import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../utils/Auth";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const result = signupUser(formData.email, formData.password, formData.name);
    if (result.success) {
      navigate("/login");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Signup
        </button>
        <p className="mt-5">
          Already have an account? <a href="/login">login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
