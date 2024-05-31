import Child from "./Child";
import { useChildren } from "./useChildren";
import { useUser, useJoin } from "../users/useUser";
import Loader from "../../ui/Loader";
import ContainerGrid from "../../ui/ContainerGrid";
import ChildMini from "./ChildMini";
import ContainerFlex from "../../ui/ContainerFlex";
import AddChild from "../settings/AddChild";

function ChildrenTableMini() {
  const { children, isPending: isLoadingChildren } = useChildren();
  const { user, isPending: isLoadingUser } = useUser();
  const { join, isPending: isLoadingJoin } = useJoin();

  if (isLoadingChildren || isLoadingUser || isLoadingJoin) return <Loader />;

  const userId = user.id;
  const userToChildren = join.filter((item) => item.user_id === userId);
  const myChildrenIds = userToChildren.map((item) => item.child_id);
  const currentChildren = children.filter((child) =>
    myChildrenIds.includes(child.id),
  );

  // 0px 5px 0px 0px #000000

  return (
    <div className="flex-start container mx-auto w-4/5 flex-col items-center border-b-2 border-gray-100 py-5">
      <div className="container mx-auto mb-2 flex h-fit w-full justify-between px-10">
        {currentChildren.map((child) => (
          <ChildMini child={child} key={child.id} />
        ))}
        <AddChild />
      </div>
    </div>
  );
}

export default ChildrenTableMini;
