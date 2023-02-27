import { Outlet } from "react-router-dom";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import TopBar from "./topbar";
const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="">
        <TopBar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
