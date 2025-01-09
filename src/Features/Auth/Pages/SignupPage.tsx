import Button from "../../../Shared/Components/Button/Button";
import FormComponent from "../Components/FormComponent";
import Input from "../Components/InputComponent";
import { useAuth } from "../Hooks/useAuth";

const SignupPage = () => {
  const { handleSignup, handleChange, formData } = useAuth();

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
