import { NavLink } from "react-router-dom";

import { GiFruitBowl } from "react-icons/gi";
import { GiCalendar } from "react-icons/gi";
import { GiShinyApple } from "react-icons/gi";
import { MdOutlineTaskAlt } from "react-icons/md";

function SideBar() {
  return (
    <nav className="flex flex-col justify-around py-48 text-3xl text-pokpok-blue">
      <NavLink>
        <MdOutlineTaskAlt size="5rem" color="#118AB2" />
      </NavLink>
      <NavLink>
        <GiShinyApple size="5rem" color="#118AB2" />
      </NavLink>
      <NavLink>
        <GiFruitBowl size="5rem" color="#118AB2" />
      </NavLink>
      <NavLink>
        <GiCalendar size="5rem" color="#118AB2" />
      </NavLink>
    </nav>
  );
}

export default SideBar;
