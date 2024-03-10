import { DetailActor } from "../../../types/actors";

type Props = {
  actorDetail: DetailActor;
};

const InfoActorDetail = ({ actorDetail }: Props) => {
  return (
    <div className="flex xl:gap-16 lg:gap-12 gap-10 lg:flex-row flex-col">
      <div className="lg:w-2/5 max-w-xs mx-auto">
        <div>
          <img
            className="rounded-md max-h-[400px] w-full object-cover object-top"
            src={actorDetail?.image}
          />
        </div>
      </div>
      <div className="lg:w-3/5">
        <div>
          <h1 className="text-4xl text-white font-semibold mb-6 capitalize">
            {actorDetail?.name}
          </h1>
          <div className="mt-8 flex flex-col gap-3">
            <div>
              <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                Birthday:
              </h6>
              <p className="text-[#abb7c4]">20/09/1988</p>
            </div>
            <div>
              <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                Nationality:
              </h6>
              <p className="text-[#abb7c4]">Vietnamese</p>
            </div>
            <div>
              <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                Biography:
              </h6>
              <p className="text-[#abb7c4]">
                Hugh Michael Jackman is an Australian actor, singer,
                multi-instrumentalist, dancer and producer. Jackman has won
                international recognition for his roles in major films, notably
                as superhero, period, and romance characters. He is best known
                for his long-running role as Wolverine in the X-Men film series,
                as well as for his lead roles in the romantic-comedy fantasy
                Kate & Leopold (2001),
              </p>
            </div>
            <div>
              <h6 className="text-[#abb7c4] font-semibold capitalize mb-1">
                Plot Keywords:
              </h6>
              <p className="text-[#abb7c4] space-x-1">
                <span className="time">
                  <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
                    superhero
                  </a>
                </span>
                <span className="time">
                  <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
                    marvel universe
                  </a>
                </span>
                <span className="time">
                  <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
                    comic
                  </a>
                </span>
                <span className="time">
                  <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
                    blockbuster
                  </a>
                </span>
                <span className="time">
                  <a href="#" className="py-[2px] px-[5px] bg-[#233a50]">
                    final battle
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoActorDetail;
