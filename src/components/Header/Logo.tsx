
const Logo = () => {
  return (
 <div className="flex items-center justify-between">
  <img className="w-40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png"  />
  {/* mobile */}
  <div className="block lg:hidden">
    <button type="button" className="h-11 w-11 text-xl text-white bg-[#F27221] rounded-lg"><i className="fa-solid fa-bars" /></button>
  </div>
</div>

  );
};

export default Logo;
