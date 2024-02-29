import { ListShowingByBranchType } from "../../../../types/cinema";
import { Link } from "react-router-dom";
import moment from "moment";
import { convertVND } from "../../../../util";

type Props = {
  movie: ListShowingByBranchType;
};

const ItemTabMovie = ({ movie }: Props) => {
  return (
    <div className="flex items-start p-5 border-b min-h-44 border-slate-500">
      <img className="object-cover object-top w-28" src={movie.poster} alt="" />
      <div className="flex-grow ml-5">
        <h3 className="text-lg font-bold text-green-500">
          <span className="px-2 py-1 mr-2 text-white bg-orange-500 rounded">
            C18
          </span>
          {movie.name}
        </h3>
        <div className="grid gap-4 mt-3 sm:grid-cols-2">
          {movie.listTime.map((time, index) => {
            return (
              <Link key={index} to={`/booking/${time.idShowing}`}>
                <div className="border max-w-[180px] border-gray-300 text-white shadow rounded-lg text-center p-2 hover:shadow-2xl hover:bg-slate-400">
                  <div className="text-sm">
                    <span className="text-orange-500">
                      {moment(time.showTime).format("hh:mm ")}
                    </span>
                    ~
                    <span className="text-green-500">
                      {moment(time.showTime).format(" DD-MM-YYYY")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-xs">
                    <div>
                      <p>Vé thường</p>
                      <span>{convertVND(time.normalPrice)}</span>
                    </div>
                    <div>
                      <p>Vé Vip</p>
                      <span>{convertVND(time.vipPrice)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemTabMovie;
