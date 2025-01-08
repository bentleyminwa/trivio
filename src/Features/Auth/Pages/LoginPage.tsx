import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate("/category");
  }

  return (
    <div className="h-screen w-10/12 mx-auto">
      <h1 className="py-10 text-3xl text-accent font-bold">
        Welcome to Trivio
      </h1>
      <h2 className="font-semibold">Login in to your account</h2>
      <form
        onSubmit={handleSubmit}
        className="my-5 flex flex-col gap-7 justify-center"
      >
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="bg-transparent border-b-2 border-b-primary"
        />
        <label htmlFor="fullname">Password</label>
        <input
          type="text"
          className="bg-transparent border-b-2 border-b-primary"
        />
        <button className="my-5 border border-accent rounded-full bg-accent text-bg font-bold px-5 py-3 tracking-wide">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="/signup">signup</a>
      </p>
    </div>
  );
};

export default LoginPage;
