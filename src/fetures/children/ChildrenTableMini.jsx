import ChildMini from "./ChildMini";
import AddChild from "../settings/AddChild";

function ChildrenTableMini({ currentChildren, onClick }) {
  return (
    <div className="flex-start container mx-auto w-4/5 flex-col items-center border-b-2 border-gray-100 py-5">
      <div className="container mx-auto mb-2 flex h-fit w-full justify-between px-10">
        {currentChildren.map((child) => (
          <ChildMini onclick={onClick} child={child} key={child.id} />
        ))}
        <AddChild />
      </div>
    </div>
  );
}

export default ChildrenTableMini;
