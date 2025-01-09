import { useContext } from "react";
import { AuthContext } from "../Context/AuthStore";

const FormComponent = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { formData, error, handleChange } = context;

  return (
    <>
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
    </>
  );
};

export default FormComponent;
