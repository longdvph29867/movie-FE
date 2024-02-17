const RatedMovie = () => {
  return (
    <div>
      <div className="text-sm flex gap-5">
        <img
          className="w-[100px] h-max"
          src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg"
        />
        <div className="text-sm text-[#abb7c4]">
          <h6 className="hover:text-[#dcf836] font-bold text-white uppercase">
            <a className="" href="#">
              oblivion <span className="text-[#abb7c4]">(2012)</span>
            </a>
          </h6>
          <p className="bg-[#233a50] w-[90px] py-1 mt-3 rounded text-center">
            Your rate:
          </p>
          <p className="rate">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <span className="text-base ml-2">8.1</span> /10
          </p>
          <p className="bg-[#233a50] w-[90px] py-1 mt-3 rounded text-center">
            Your reviews:
          </p>
          <h6>Best Marvel movie in my opinion</h6>
          <p className="text-[#4280bf] mt-2">02 April 2017</p>
        </div>
      </div>
    </div>
  );
};

export default RatedMovie;
