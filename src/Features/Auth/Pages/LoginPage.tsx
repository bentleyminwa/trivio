import Button from "../../../Shared/Components/Button/Button";
import FormComponent from "../Components/FormComponent";
import { useAuth } from "../Hooks/useAuth";

const LoginPage = () => {
  const { handleLogin } = useAuth();

  return (
    <main className="h-screen">
      <header>
        <h1 className="py-10 text-4xl text-accent font-bold text-center">
          Welcome to Trivio
        </h1>
      </header>
      <section className="flex flex-col items-center">
        <h2 className="text-xl font-bold mt-7 text-gray-500">
          Sign in to your Account
        </h2>
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm my-7 p-10 bg-white shadow-lg rounded-lg"
        >
          <FormComponent />
          <Button className="px-10">Login</Button>
        </form>
        <p className="text-sm font-semibold text-gray-500 ">
          Don't have an account?{" "}
          <a href="/signup" className="underline">
            signup
          </a>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
