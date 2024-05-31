import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="container mx-auto my-0 grid h-screen w-4/5 grid-cols-[1fr,8fr] justify-items-center">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
