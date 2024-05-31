import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="col-span-2 flex h-screen w-full items-center justify-center">
      <Circles
        visible={true}
        height="80"
        width="80"
        color="#fe8ab2"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}

export default Loader;
