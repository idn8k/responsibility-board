import { useNavigate } from "react-router-dom";

function Child({ child: { id: childId, first_name, profile_img: childImg } }) {
  const navigate = useNavigate();

  const childImage = `before:bg-[url('${childImg}')]`;

  return (
    <div
      onClick={() => navigate(`/child_area/${childId}`)}
      className="flex flex-col items-center"
    >
      <div
        className={`container relative h-80 max-h-80 min-h-80 min-w-80 max-w-80 rounded-full bg-gray-200 before:container before:absolute before:left-2/4 before:top-2/4 before:z-10 before:h-[90%] before:w-[90%] before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full	 before:bg-white before:bg-cover ${childImage}`}
      ></div>
      <p className="text-7xl font-bold text-gray-200">{first_name}</p>
    </div>
  );
}

export default Child;

// todo: Fix loaderMini
