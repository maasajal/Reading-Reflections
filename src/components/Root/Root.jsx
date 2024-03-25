import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto lg:my-8 px-4 md:px-6">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
export default Root;
