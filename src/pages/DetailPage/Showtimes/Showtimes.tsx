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
            className="mx-auto mb-1"
            width={30}
            height={30}
            src={cinema.logo}
          />
          <p>{cinema.cinemaName}</p>
        </div>
      ),
      children: (
        <Collapse
          className="bg-white"
          items={cinema.listBranch.map((branch) => {
            return {
              key: branch.idBranch,
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
                      <Link key={index} to={`/booking/${time.idShowing}`}>
                        <div
                          key={time.idShowing}
                          className="border border-gray-300 shadow rounded-lg text-center p-2 hover:shadow-2xl hover:bg-gray-200 cursor-pointer"
                        >
                          <p className="font-bold">
                            {moment(time.showTime).format("DD-MM-YYYY")}
                          </p>
                          <p className="font-bold">
                            {moment(time.showTime)
                              .utcOffset("+00:00")
                              .format("HH:mm")}
                          </p>
                          <div className="flex justify-between items-center text-sm">
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
              ),
            };
          })}
          defaultActiveKey={cinema.listBranch.map((branch) => branch.idBranch)}
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
      <h1 className="font-bold text-xl">Lịch chiếu</h1>
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
