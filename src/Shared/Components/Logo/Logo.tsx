import { Link } from "react-router-dom";
import { useAuth } from "../../../Features/Auth/Hooks/useAuth";

const Logo = () => {
  const { user, logout } = useAuth();

  function handleLogout() {
    if (user) {
      logout();
    }
  }

  return (
    <Link to="/">
      <h1
        onClick={handleLogout}
        className="py-10 text-4xl text-accent font-bold"
      >
        Trivio
      </h1>
    </Link>
  );
};

export default Logo;
