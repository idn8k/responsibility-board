import { createContext, useContext, useState } from "react";
import { useCurrentChildren } from "./useChildren";
import ChildrenTableMini from "./ChildrenTableMini";

const Context = createContext();

function ChildContext({ setChildIdx, selectedIdx, children, onChildSelected }) {
  let [id, setId] = useState();

  const { currentChildren } = useCurrentChildren();

  if (currentChildren === undefined) return;

  return (
    <Context.Provider
      value={{
        setChildIdx,
        onChildSelected,
        selectedIdx,
        id,
        currentChildren,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function ChildrenItemsMini({
  setChildIdx,
  onChildSelected,
  selectedIdx,
  currentChildren,
  handleClick,
  id,
}) {
  function _handleClick(i) {
    onChildSelected(i);
    setChildIdx(i);
  }

  return (
    <ChildrenTableMini
      onClick={_handleClick}
      currentChildren={currentChildren}
    ></ChildrenTableMini>
  );
}

ChildContext.ChildrenItemsMini = ChildrenItemsMini;

export default ChildContext;
