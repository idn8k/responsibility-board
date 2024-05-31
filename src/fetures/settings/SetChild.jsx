import ChildInfo from "./ChildInfo";

function SetChild({ currChild, setChildIdx }) {
  return (
    <div className="container my-10 h-full w-full">
      <ChildInfo setChildIdx={setChildIdx} currChild={currChild} />
    </div>
  );
}

export default SetChild;
