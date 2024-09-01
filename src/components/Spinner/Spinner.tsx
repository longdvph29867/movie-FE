import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

const Spinner = () => {
  const isLoading = useSelector((state: any) => state.spinnerSlice.loading);
  return isLoading ? (
    <>
      <div className="fixed z-50 bg-slate-800/80 min-h-screen min-w-full top-0 left-0 flex items-center justify-center">
        <HashLoader color="#F27221" />
      </div>
    </>
  ) : (
    <></>
  );
};

export default Spinner;
