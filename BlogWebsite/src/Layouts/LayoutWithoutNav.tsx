import { Outlet } from "react-router-dom";

export const LayoutWithoutNav = () => {
  return (
    <main style={{ height: "100%", width: "100%", position: "absolute" }}>
      <Outlet />
    </main>
  );
};
