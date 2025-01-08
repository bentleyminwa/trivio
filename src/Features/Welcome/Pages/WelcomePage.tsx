import { useNavigate } from "react-router-dom";
import Logo from "../../../Shared/Components/Logo/Logo";

const WelcomePage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }

  return (
    <main className="h-screen w-10/12 mx-auto">
      <Logo />
      <section className="py-5 font-semibold flex flex-col justify-center items-center">
        <h2 className="text-center">
          Your journey to fun and knowledge begins here. Do you think you have
          what it takes...
        </h2>
        <img
          src="./src/Assets/Images/vector.png"
          alt=""
          className="w-[500px] mb-5"
        />
        <button
          onClick={handleClick}
          className="border border-accent rounded-full bg-accent text-bg font-bold px-5 py-3 tracking-wide"
        >
          Get Started
        </button>
      </section>
    </main>
  );
};

export default WelcomePage;
