import { Link, useNavigate } from "react-router-dom";
import Logout from "../Authentication/Logout";
import ButtonIcon from "./Button";

import { TbMoon, TbUser } from "react-icons/tb";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="col-span-2 flex w-full items-center justify-between bg-white">
      <Link to="/">
        <h1 className="w-44 p-5 text-center text-7xl font-bold text-pokpok-blue">
          AO
        </h1>
      </Link>
      <div className="flex items-center justify-between gap-8">
        <ButtonIcon onClick={() => navigate("/user_dashboard")}>
          <TbUser size="2rem" color="#118AB2" />
        </ButtonIcon>

        <ButtonIcon>
          <TbMoon size="2rem" color="#118AB2" />
        </ButtonIcon>

        <Logout />
      </div>
    </div>
  );
}

export default Header;

//todo: resolve streching to the right header
