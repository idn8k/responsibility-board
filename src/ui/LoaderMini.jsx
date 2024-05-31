import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center p-2">
      <Circles
        visible={true}
        height="25"
        width="25"
        color="#118AB2"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}

export default Loader;
