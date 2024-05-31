function Button({ children, onClick, isPending, variation }) {
  const BtnVariations = {
    full: "py-2 px-5 bg-pokpok-blue rounded-md text-white",
    empty: "py-2 px-5 rounded-md text-white",
    default: "rounded-md text-pokpok-blue",
  };
  return (
    <button
      className={`border-none bg-transparent ${BtnVariations.variation}`}
      disabled={isPending}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

// todo: fix variation input bug
