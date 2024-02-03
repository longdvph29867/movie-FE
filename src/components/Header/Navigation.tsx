
const Navigation = () => {
  return (
<nav className="ml-4 text-[#ABB7C4] uppercase lg:mr-auto">
  <nav className="ml-4 text-[#ABB7C4] uppercase lg:mr-auto">
    <ul className="flex items-center sm:flex-row flex-col sm:gap-0 gap-3">
      <li className="hover:text-[#DCF836]"><a href="#" className="xl:px-4 px-3 py-2.5 font-semibold duration-300">HOME</a></li>
      <li className="relative group/item hover:text-[#DCF836]">
        <a href="#" className="xl:px-4 px-3 py-2.5 font-semibold duration-300">MOVIES <i className="fa-solid fa-chevron-down" /></a>
        <ul className="group-hover/item:visible group-hover/item:opacity-100 z-50 duration-300 invisible opacity-0 absolute top-8 sm:-left-2 left-1/2 sm:translate-x-0 -translate-x-1/2 min-w-[180px] w-auto py-5 bg-white text-gray-700 font-semibold shadow">
          <li><a href="#" className="block px-6 py-2.5 font-semibold hover:text-[#F27221] duration-300">movie
              grid</a></li>
          <li><a href="#" className="block px-6 py-2.5 font-semibold hover:text-[#F27221] duration-300">movie
              list</a></li>
          <li><a href="#" className="block px-6 py-2.5 font-semibold hover:text-[#F27221] duration-300">movie
              grid</a></li>
          <li><a href="#" className="block px-6 py-2.5 font-semibold hover:text-[#F27221] duration-300">movie list
              Lorem, ipsum.</a></li>
        </ul>
      </li>
      <li className="hover:text-[#DCF836]"><a href="#" className="xl:px-4 px-3 py-2.5 font-semibold duration-300">CELEBRITIES</a></li>
      <li className="hover:text-[#DCF836]"><a href="#" className="xl:px-4 px-3 py-2.5 font-semibold duration-300">NEWS</a></li>
      <li className="hover:text-[#DCF836]"><a href="#" className="xl:px-4 px-3 py-2.5 font-semibold duration-300">COMMUNITY</a></li>
    </ul>
  </nav>
</nav>

  );
};

export default Navigation;