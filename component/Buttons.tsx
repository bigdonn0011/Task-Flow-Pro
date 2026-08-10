import React from "react";
export interface ButtonStyle {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
  className?: string;
}
export const Buttons = ({
  className = "",
  onClick,
  text = "",
  type = "button",
}: ButtonStyle) => {
  return (
    <button
      className={`bg-card shrink-0 text-text btt border border-border rounded-md shadow-md p-4 py-2 active:scale-90 active:ring active:ring-4 hover:bg-card/80 hover:scale-105 transition-all duration-500 ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
