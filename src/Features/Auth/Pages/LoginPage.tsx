import Button from "../../../Shared/Components/Button/Button";
import FormComponent from "../Components/FormComponent";
import { useAuth } from "../Hooks/useAuth";

const LoginPage = () => {
  const { handleLogin } = useAuth();

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg"
      >
        <FormComponent />
        <Button>Login</Button>
      </form>
      <p>
        Don't have an account? <a href="/signup">signup</a>
      </p>
    </div>
  );
};

export default LoginPage;
