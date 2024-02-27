import { ListShowingByBranchType } from "../../../../types/cinema";
import { Link } from "react-router-dom";
import moment from "moment";
import { convertVND } from "../../../../util";

type Props = {
  moive: ListShowingByBranchType;
};

const ItemTabMovie = ({ moive }: Props) => {
  return (
    <div className="flex p-5 min-h-44 border-b border-slate-500 items-start">
      <img className="w-28 object-cover object-top" src={moive.poster} alt="" />
      <div className="ml-5 flex-grow">
        <h3 className="text-lg font-bold text-green-500">
          <span className="px-2 py-1 mr-2 rounded text-white bg-orange-500">
            C18
          </span>
          {moive.name}
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 mt-3">
          {moive.listTime.map((time, index) => {
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
                  <div className="flex justify-between items-center text-xs mt-1">
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
