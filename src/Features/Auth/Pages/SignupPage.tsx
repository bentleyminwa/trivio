import { useContext } from "react";
import Button from "../../../Shared/Components/Button/Button";
import FormComponent from "../Components/FormComponent";
import { AuthContext } from "../Context/AuthStore";

const SignupPage = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { handleSignup, handleChange, formData } = context;

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
        <FormComponent />
        <Button>Create Account</Button>
      </form>
      <p>
        Already have an account? <a href="/login">login</a>
      </p>
    </div>
  );
};

export default SignupPage;
