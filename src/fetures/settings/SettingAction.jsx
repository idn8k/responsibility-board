import { FaPlus } from "react-icons/fa6";

function SettingAction({ settingName, children }) {
  return (
    <>
      <div className="m-5 flex items-center justify-between rounded-3xl border border-slate-100 bg-white p-5 px-12 shadow-sm">
        <p className="text-2xl">{settingName}</p>
        <FaPlus size="2rem" color="#118AB2" />
      </div>
      {children}
    </>
  );
}

export default SettingAction;
