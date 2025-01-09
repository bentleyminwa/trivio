import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="w-10/12 mx-auto flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div>
        <h3>username</h3>
        <h3>Logout</h3>
      </div>
    </header>
  );
};

export default Header;
