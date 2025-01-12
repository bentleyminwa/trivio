import { MdLogout } from "react-icons/md";
import { useAuth } from "../../../Features/Auth/Hooks/useAuth";
import Logo from "../Logo/Logo";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="w-10/12 mx-auto flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold capitalize">{user?.username}</h2>
        <button onClick={logout}>
          <MdLogout className="text-2xl text-red-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
