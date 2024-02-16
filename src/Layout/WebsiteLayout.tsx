import { Outlet } from "react-router-dom";

// import Footer from "../../components/Footer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
    
      <Footer />
     
      </>
   
  );
};

export default WebsiteLayout;