import Child from "./Child";
import { useChild, useChildren } from "./useChildren";
import { useUser, useJoin } from "../users/useUser";
import Loader from "../../ui/Loader";
import ContainerGrid from "../../ui/ContainerGrid";
import ContainerFlex from "../../ui/ContainerFlex";

function ChildrenTable() {
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

  return (
    <ContainerGrid>
      <ContainerFlex>
        {currentChildren.map((child) => (
          <Child child={child} key={child.id} />
        ))}
      </ContainerFlex>
    </ContainerGrid>
  );
}

export default ChildrenTable;

// className="flex h-full w-full flex-wrap items-center justify-around gap-x-10 overflow-hidden bg-center pt-32"
