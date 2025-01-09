import Button from "../../../Shared/Components/Button/Button";
import FormComponent from "../Components/FormComponent";
import Input from "../Components/InputComponent";
import { useAuth } from "../Hooks/useAuth";

const SignupPage = () => {
  const { handleSignup, handleChange, formData } = useAuth();

  return (
    <main className="h-screen">
      <header>
        <h1 className="py-10 text-4xl text-accent font-bold text-center">
          Welcome to Trivio
        </h1>
      </header>
      <section className="flex flex-col items-center">
        <h2 className="text-xl font-bold mt-7 text-gray-600">
          Register for an Account
        </h2>
        <form
          onSubmit={handleSignup}
          className="w-full max-w-sm my-7 p-6 bg-white shadow-md rounded-lg"
        >
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-500">
              Name
            </label>
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
      </section>
    </main>
  );
};

export default SignupPage;
