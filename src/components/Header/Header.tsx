// Header.tsx
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Search from './Search';
import Login from './Login';
import movieServices from '../../services/moviesSevices';
import genre from '../../types/genre';

const Header = () => {
  const [categories, setCategories] = useState<genre[]>([]);

  useEffect(() => {
    movieServices.getCategories()
      .then(response => response.data)
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <header className="py-8 absolute w-full left-0 top-0 z-40 lg:bg-transparent bg-[#0f2133]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <Logo />
          <div className="flex-col items-center justify-center hidden gap-4 mt-5 lg:flex grow lg:flex-row lg:mt-0 lg:gap-0">
            <Navigation categories={categories} />
            <Search />
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
