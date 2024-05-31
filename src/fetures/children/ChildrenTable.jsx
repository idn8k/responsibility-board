import Child from "./Child";
import ContainerGrid from "../../ui/ContainerGrid";
import ContainerFlex from "../../ui/ContainerFlex";
import { useCurrentChildren } from "./useChildren";

function ChildrenTable() {
  const children = useCurrentChildren();

  if (children === undefined) return;

  const { currentChildren } = children;

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
