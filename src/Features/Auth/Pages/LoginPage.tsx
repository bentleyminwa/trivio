import { motion } from "framer-motion";
import { useState } from "react";
import vector from "../../../Assets/Images/vector.svg";
import Button from "../../../Shared/Components/Button/Button";
import { PageVariants } from "../../../Shared/Motion/Motion";
import Input from "../Components/InputComponent";
import { useAuth } from "../Hooks/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    login(email, password);
  }

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
            <div className="mb-4">
              <label className="block mb-2 font-semibold text-gray-500">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
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
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}

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
