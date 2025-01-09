import { useContext } from "react";
import Button from "../../../Shared/Components/Button/Button";
import FormComponent from "../Components/FormComponent";
import { AuthContext } from "../Context/AuthStore";

const LoginPage = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { handleLogin } = context;

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
