type Props = {
  idShowing: string;
};

import { useEffect, useState } from "react";
import chairService from "../../../services/chairService";
import ItemChair from "./ItemChair/ItemChair";
import { ChairType } from "../../../types/chair";

const ListChair = ({ idShowing }: Props) => {
  const dynamicStyles: React.CSSProperties = {
    filter: "drop-shadow(4px 30px 20px rgba(255, 255, 255, 0.5))",
  };
  const [chairList, setChairList] = useState<ChairType[]>([]);

  useEffect(() => {
    chairService
      .getChairByShowing(idShowing)
      .then((res) => {
        setChairList(res.data.seatList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="pr-0 xl:pr-10">
      <h3
        className="
      text-center 
      text-white
      border-b-[50px] 
      border-b-[#ff9f5f]
      border-l-[100px] 
      border-l-transparent
      border-r-[100px] 
      border-r-transparent"
        style={dynamicStyles}
      ></h3>
      <div className="mt-12 grid gap-3 justify-items-center grid-cols-8 md:grid-cols-[repeat(16,_minmax(0,_1fr))]">
        {chairList.map((chair, index) => (
          <ItemChair key={index} chair={chair} />
        ))}
      </div>
      <div className="grid grid-cols-2 mt-10 text-white">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex items-center">
            <span className="inline-block mr-3 w-9 h-9 rounded bg-white"></span>
            <span>Ghế thường</span>
          </div>
          <div className="w-full sm:w-1/2 flex items-center mt-2 sm:mt-0">
            <span className="inline-block mr-3 w-9 h-9 rounded bg-[#F27221]"></span>
            <span>Ghế VIP</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 flex items-center">
            <span className="inline-block mr-3 w-9 h-9 rounded bg-gray-500"></span>
            <span>Ghế đã đặt</span>
          </div>
          <div className="w-full sm:w-1/2 flex items-center mt-2 sm:mt-0">
            <span className="inline-block mr-3 w-9 h-9 rounded bg-green-500"></span>
            <span>Ghế đang chọn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListChair;
