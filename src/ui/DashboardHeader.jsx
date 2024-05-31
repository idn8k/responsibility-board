import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";

function DashboardHeader({ partOfDay }) {
  return (
    <div className=" flex justify-center">
      {partOfDay === "morning" ? (
        <WiSunrise size="10em" color="pokpok-yellow" />
      ) : (
        <TbSunset2 />
      )}
    </div>
  );
}

export default DashboardHeader;
