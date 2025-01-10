import { motion } from "framer-motion";
import vector from "../../../Assets/Images/vector.svg";
import Button from "../../../Shared/Components/Button/Button";
import { PageVariants } from "../../../Shared/Motion/Motion";
import FormComponent from "../Components/FormComponent";
import { useAuth } from "../Hooks/useAuth";

const LoginPage = () => {
  const { handleLogin } = useAuth();

  return (
    <motion.main
      variants={PageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen grid grid-cols-1 md:grid-cols-2"
    >
      <section className="bg-white w-full hidden md:flex justify-center items-center ">
        <img src={vector} alt="" className="min-w-80" />
      </section>
      <section className="px-10">
        <header>
          <h1 className="py-10 text-4xl text-accent font-bold text-center">
            Welcome to Trivio
          </h1>
        </header>
        <div className="flex flex-col items-center">
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
            Don't have an account?
            <a href="/signup" className="underline">
              signup
            </a>
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default LoginPage;
