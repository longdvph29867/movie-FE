import moment from "moment";
import { Collapse, Tabs, TabsProps } from "antd";
import { Showing } from "../../../types/showing";
import { convertVND } from "../../../util";
import { Link } from "react-router-dom";

type Props = {
  cinemasShowing: Showing[];
};

const Showtimes = ({ cinemasShowing }: Props) => {
  const onChangeTabs = (key: string) => {
    console.log(key);
  };
  const onChangeCollape = (key: string | string[]) => {
    console.log(key);
  };
  const items: TabsProps["items"] = cinemasShowing.map((cinema) => {
    return {
      key: cinema.id,
      label: (
        <div className="text-white group">
          <img
            className="mx-auto mb-1 rounded-full"
            width={50}
            height={50}
            src={cinema.logo}
          />
          <p>{cinema.cinemaName}</p>
        </div>
      ),
      children: (
        <Collapse
          className="bg-white"
          items={cinema.listBranch.map((branch, index) => {
            return {
              key: index,
              label: (
                <div>
                  <p className="font-bold text-[#F27221]">
                    {branch.cinemaBranchName}
                  </p>
                  <p className="text-sm">{branch.location}</p>
                </div>
              ),
              children: (
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 ">
                  {branch.listTime.map((time, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/booking/${time.idShowing}`}
                        className="group cursor-pointer"
                      >
                        <div
                          key={time.idShowing}
                          className="border border-gray-300 shadow rounded-lg text-center p-2 group-hover:hover:bg-slate-400/30 "
                        >
                          <div className="flex items-center justify-center">
                            <p className="text-orange-500">
                              {moment(time.showTime)
                                .utcOffset("+00:00")
                                .format("HH:mm")}
                            </p>
                            <p> ~ </p>
                            <p className="text-green-500">
                              {moment(time.showTime).format("DD-MM-YYYY")}
                            </p>
                          </div>
                          <div className="text-xs text-black mt-2">
                            <div>
                              <p className="font-semibold">Price Tickets</p>
                              <span>{convertVND(time.normalPrice)}</span>
                              <span className="mx-1"> - </span>
                              <span>{convertVND(time.vipPrice)}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ),
            };
          })}
          defaultActiveKey={["0"]}
          onChange={onChangeCollape}
        />
      ),
    };
  });
  return (
    <div
      id="booking-tabs"
      className="bg-[#152a3e] p-5 mt-10 text-white rounded-md"
    >
      <h1 className="font-bold text-xl">Show time</h1>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChangeTabs}
        className="text-white"
      />
    </div>
  );
};

export default Showtimes;
