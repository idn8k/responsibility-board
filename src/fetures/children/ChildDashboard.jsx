import Loader from "../../ui/Loader";
import {
  useChildrenResposibilities,
  useResponsibilitiesPool,
} from "../responsibilitis/useChildrenResposibilities";
import Responsibility from "../responsibilitis/Responsibility";
import { useParams } from "react-router-dom";
import SideBar from "../../ui/SideBar";
import ContainerFlex from "../../ui/ContainerFlex";

function ChildDashboard() {
  const { id: childId } = useParams();

  const { data: responsibilities, isPending: isLoadingResponsibilities } =
    useResponsibilitiesPool();
  const {
    data: joinResponsibilitiesToChildren,
    isPending: isLoadingJoinResponsibilitiesToChildren,
  } = useChildrenResposibilities();

  if (isLoadingJoinResponsibilitiesToChildren || isLoadingResponsibilities)
    return <Loader />;

  const filteredJoin = joinResponsibilitiesToChildren.filter(
    (join) => join.child_id === parseInt(childId),
  );
  const respoIds = filteredJoin.map((item) => item.responsibilities_pool_id);
  const currentRespons = responsibilities.filter((item) =>
    respoIds.includes(item.id),
  );

  return (
    <>
      <SideBar />
      <ContainerFlex>
        <div className="flex h-full w-full flex-wrap items-center justify-around overflow-hidden">
          {currentRespons.map((responsibility) => (
            <Responsibility
              key={responsibility.id}
              responsibilityName={responsibility.responsibility_name}
            />
          ))}
        </div>
      </ContainerFlex>
    </>
  );
}

export default ChildDashboard;
