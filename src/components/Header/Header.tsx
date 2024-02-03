
import Logo from './Logo';
import Navigation from './Navigation';
import Search from './Search';
import Login from './Login';

const Header = () => {
  return (
    <header className="py-8 absolute w-full left-0 top-0 z-40 lg:bg-transparent bg-[#0f2133]">
      <div className="container mx-auto">
        <div className="flex lg:items-center lg:flex-row flex-col">
          <Logo />
          <div className="lg:flex hidden items-center grow justify-center lg:flex-row flex-col lg:mt-0 mt-5 lg:gap-0 gap-4">
            <Navigation />
            <Search />
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;