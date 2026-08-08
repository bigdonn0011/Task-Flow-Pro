export const Buttons = ({
  className = "",
  onClick = undefined,
  text = "",
  type = "button",
}) => {
  return (
    <>
      <button
        className={`bg-card shrink-0 w-full text-text btt border border-border rounded-2xl shadow-md p-4 py-2 active:scale-95 active:ring active:ring-4 hover:bg-card/80 hover:scale-105 transition-all duration-500 ${className}`}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </>
  );
};
