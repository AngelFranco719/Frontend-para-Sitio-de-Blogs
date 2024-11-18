import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Global Components/Navbar/Navbar";

export const LayoutWithNav = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
