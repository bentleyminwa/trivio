import { useAuth } from "../Hooks/useAuth";
import Input from "./InputComponent";

const FormComponent = () => {
  const { formData, error, handleChange } = useAuth();

  return (
    <>
      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-500">Email</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. Khan@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-500">
          Password
        </label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
    </>
  );
};

export default FormComponent;
