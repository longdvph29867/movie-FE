import moment from "moment";
import { useEffect, useState } from "react";
import { DetailScheduleType } from "../../../types/movies";
import showingService from "../../../services/showingService";

type Props = {
  idShowing: string;
};

const InfoMovie = ({ idShowing }: Props) => {
  const [detailSchedule, setDetailSchedule] =
    useState<DetailScheduleType | null>(null);
  useEffect(() => {
    showingService
      .getDetailSchedule(idShowing)
      .then((res) => {
        setDetailSchedule(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="text-white font-sans">
      <div>
        <h1 className="text-center text-4xl font-bold text-green-500 mb-5">
          {detailSchedule?.movie.name}
        </h1>
        <div>
          <img
            src={detailSchedule?.movie.imgBanner}
            alt=""
            className="rounded-2xl filter brightness-90"
          />
        </div>
        <div className="border- border-white p-4 rounded-xl">
          <div className="flex justify-between mb-5">
            <h4>Cụm rạp:</h4>
            <p className="w-2/3 text-right">
              {detailSchedule?.cinemaBranch.cinemaBranchName}
            </p>
          </div>
          <div className="flex justify-between mb-5">
            <h4>Địa chỉ:</h4>
            <p className="w-2/3 text-right">
              {detailSchedule?.cinemaBranch.location}
            </p>
          </div>
          {/* <div className="flex justify-between mb-5">
            <h4>Rạp:</h4>
            <p className="w-2/3 text-right">movie</p>
          </div> */}
          <div className="flex justify-between mb-5">
            <h4>Ngày giờ chiếu:</h4>
            <p className="w-2/3 text-right">
              {moment(detailSchedule?.showTime).format("hh:mm ~ DD-MM-YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMovie;
