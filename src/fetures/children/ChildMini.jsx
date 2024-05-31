import { useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";

function ChildMini({
  onclick,
  child: { id: childId, first_name, profile_img: childImg },
}) {
  const navigate = useNavigate();

  const childImage = `before:bg-[url('${childImg}')]`;

  return (
    <div>
      <div
        onClick={() => onclick(childId)}
        className={`border-slate-10 container relative flex h-32 max-h-32 min-h-32 min-w-32 max-w-32 flex-col justify-center rounded-full border shadow-sm before:container before:absolute before:left-2/4 before:top-2/4 before:z-10 before:h-[90%] before:w-[90%] before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full	 before:bg-gray-200 before:bg-cover ${childImage}`}
      >
        <p className="absolute left-2/4 top-2/4 z-20 -translate-x-2/4 -translate-y-2/4  pt-2 text-xl font-bold text-pokpok-blue">
          {first_name}
        </p>
      </div>
    </div>
  );
}

export default ChildMini;

// todo: Fix loaderMini

//onClick={() => navigate(`/child_area/${childId}`)}
