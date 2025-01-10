import { useNavigate } from "react-router-dom";
import vector from "../../../Assets/Images/vector.png";
import Button from "../../../Shared/Components/Button/Button";
import Logo from "../../../Shared/Components/Logo/Logo";

const WelcomePage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }

  return (
    <main className="h-screen w-10/12 mx-auto overflow-y-hidden">
      <Logo />
      <section className="py-5 font-semibold flex flex-col justify-center items-center">
        <h2 className="text-center">
          Your journey to fun and knowledge begins here. Do you think you have
          what it takes...
        </h2>
        <img src={vector} alt="" className="w-[400px] mb-5" />
        <Button onClick={handleClick}>Get Started</Button>
      </section>
    </main>
  );
};

export default WelcomePage;
