import React from "react";
import { Link } from "react-router-dom";
import Genre from "../../types/genre";
interface NavigationProps {
  categories: Genre[];
}
const Navigation: React.FC<NavigationProps> = ({ categories }) => {
 
  return (
    <nav className="ml-4 text-[#ABB7C4] uppercase lg:mr-auto">
      <nav className="ml-4 text-[#ABB7C4] uppercase lg:mr-auto">
        <ul className="flex flex-col items-center gap-3 sm:flex-row sm:gap-0">
          <li className="hover:text-[#DCF836]">
            <a
              href="#"
              className="xl:px-4 px-3 py-2.5 font-semibold duration-300"
            >
              HOME
            </a>
          </li>
          <li className="relative group/item hover:text-[#DCF836]">
            <a
              href="#"
              className="xl:px-4 px-3 py-2.5 font-semibold duration-300"
            >
              MOVIES <i className="fa-solid fa-chevron-down" />
            </a>
            <ul className="group-hover/item:visible group-hover/item:opacity-100 z-50 duration-300 invisible opacity-0 absolute top-8 sm:-left-2 left-1/2 sm:translate-x-0 -translate-x-1/2 min-w-[180px] w-auto py-5 bg-white text-gray-700 font-semibold shadow">
              {categories.slice(0, 8).map((category, index) => {
                return (
                  <li key={index} className="px-2">
                    <Link
                      className="block text-black px-6 py-2.5 font-semibold hover:text-[#F27221] duration-300"
                      to={`/products?category=${category.categorySlug}`}
                    >
                      {category.categoryName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="hover:text-[#DCF836]">
            <a
              href="#"
              className="xl:px-4 px-3 py-2.5 font-semibold duration-300"
            >
              CELEBRITIES
            </a>
          </li>
          <li className="hover:text-[#DCF836]">
            <a
              href="#"
              className="xl:px-4 px-3 py-2.5 font-semibold duration-300"
            >
              NEWS
            </a>
          </li>
          <li className="hover:text-[#DCF836]">
            <a
              href="#"
              className="xl:px-4 px-3 py-2.5 font-semibold duration-300"
            >
              COMMUNITY
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navigation;
