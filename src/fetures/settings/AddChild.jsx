import { FaPlus } from "react-icons/fa6";

function AddChild() {
  return (
    <div
      className={`border-slate-10 container relative flex h-32 max-h-32 min-h-32 min-w-32 max-w-32 flex-col justify-center rounded-full border shadow-sm before:container before:absolute before:left-2/4 before:top-2/4 before:z-10 before:h-[90%] before:w-[90%] before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-gray-200`}
    >
      <div className="absolute left-2/4 top-2/4 z-30 -translate-x-2/4 -translate-y-2/4 ">
        <FaPlus size="2rem" color="#118AB2" />
      </div>
    </div>
  );
}

export default AddChild;
