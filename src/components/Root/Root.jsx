import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto lg:my-8">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
export default Root;