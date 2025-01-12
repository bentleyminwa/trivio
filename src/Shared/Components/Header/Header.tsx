import { useAuth } from "../../../Features/Auth/Hooks/useAuth";
import Logo from "../Logo/Logo";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="w-10/12 mx-auto flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div>
        <h2>{user?.username}</h2>
        <h3 onClick={logout}>Logout</h3>
      </div>
    </header>
  );
};

export default Header;
