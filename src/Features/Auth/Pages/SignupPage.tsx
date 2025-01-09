import Button from "../../../Shared/Components/Button/Button";
import FormComponent from "../Components/FormComponent";
import Input from "../Components/InputComponent";
import { useAuth } from "../Hooks/useAuth";

const SignupPage = () => {
  const { handleSignup, handleChange, formData } = useAuth();

  return (
    <main className="h-screen grid grid-cols-1 md:grid-cols-2">
      <section className="bg-white w-full hidden md:flex justify-center items-center ">
        <img src="./src/Assets/Images/vector.png" alt="" className="min-w-80" />
      </section>
      <section className="px-10">
        <header>
          <h1 className="py-10 text-4xl text-accent font-bold text-center">
            Welcome to Trivio
          </h1>
        </header>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mt-7 text-gray-500">
            Register for an Account
          </h2>
          <form
            onSubmit={handleSignup}
            className="w-full max-w-sm my-7 p-10 bg-white shadow-lg rounded-lg"
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
                placeholder="e.g. Kotal Khan"
              />
            </div>
            <FormComponent />
            <Button>Create Account</Button>
          </form>
          <p className="text-sm font-semibold text-gray-500 ">
            Already have an account?{" "}
            <a href="/login" className="underline">
              login
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
