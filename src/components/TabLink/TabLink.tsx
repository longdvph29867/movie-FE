
const TabLink = () => {
  return (
    <ul className="flex flex-wrap gap-5 my-6 text-sm font-semibold text-white">
    <li>
      <a href="#" className="text-[#DCF836]">
        #POPULAR
      </a>
    </li>
    <li>
      <a href="#" className="duration-300 hover:text-[#DCF836]">
        #COMING SOON
      </a>
    </li>
    <li>
      <a href="#" className="duration-300 hover:text-[#DCF836]">
        #TOP RATED
      </a>
    </li>
    <li>
      <a href="#" className="duration-300 hover:text-[#DCF836]">
        #MOST REVIEWED
      </a>
    </li>
  </ul>
  )
}

export default TabLink
