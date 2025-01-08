const SignupPage = () => {
  return (
    <div className="h-screen w-10/12 mx-auto">
      <h1 className="py-10 text-3xl text-accent font-bold">
        Welcome to Trivio
      </h1>
      <h2 className="font-semibold">Register for an account</h2>
      <form className="my-5 flex flex-col gap-7 justify-center">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          className="bg-transparent border-b-2 border-b-primary"
        />
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
          Create Account
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">login</a>
      </p>
    </div>
  );
};

export default SignupPage;
