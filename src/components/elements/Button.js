export const Button = ({ children, onClick }) => {
  return (
    <button
      className="btn px-3.5 py-2.5 rounded-lg bg-amber-500 w-32"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
