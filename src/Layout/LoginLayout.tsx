import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <>
      <div
        className="relative min-h-screen"
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
      >
        <div className="absolute w-full h-full" />
        <div className="relative flex flex-col justify-center min-h-screen px-6 py-12 lg:px-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
