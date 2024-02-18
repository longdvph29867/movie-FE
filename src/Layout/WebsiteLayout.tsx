import { Outlet } from "react-router-dom";

// import Footer from "../../components/Footer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WatchVideo from "../components/WatchVideo/WatchVideo";

const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <WatchVideo />
    </>
  );
};

export default WebsiteLayout;
