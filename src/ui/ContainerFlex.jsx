function ContainerFlex({ children }) {
  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-around">
      {children}
    </div>
  );
}

export default ContainerFlex;

//todo: fix container padding
