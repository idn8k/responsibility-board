import ContainerGrid from "../ui/ContainerGrid";
import SetChild from "../fetures/settings/SetChild";
import { useCurrentChildren } from "../fetures/children/useChildren";
import ChildContext from "../fetures/children/ChildContext";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

function UserDashboard() {
  const [childIdx, setChildIdx] = useState(0);
  const children = useCurrentChildren();

  function onChildSelected(childIdx) {
    setChildIdx(childIdx);
  }

  // useEffect(
  //   function () {
  //     onChildSelected(childIdx);
  //   },
  //   [childIdx, children, onChildSelected],
  // );

  if (children === undefined) return;
  const { currentChildren } = children;
  const currChild = children.currentChildren[childIdx + 1];

  console.log("🚀 ~ UserDashboard ~ childIdx:", childIdx);
  console.log("🚀 ~ UserDashboard ~ currChild:", currChild);

  return (
    <ContainerGrid>
      <ChildContext.ChildrenItemsMini
        onChildSelected={onChildSelected}
        selectedIdx={childIdx}
        setChildIdx={setChildIdx}
        currentChildren={currentChildren}
      />

      <SetChild currChild={currChild} />
    </ContainerGrid>
  );
}

export default UserDashboard;

{
  /* <ChildrenTableMini currentChildren={currentChildren} /> */
}
