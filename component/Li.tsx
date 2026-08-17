import React from "react";
export interface LiStyle {
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  text?: string;
  className?: string;
}
export const Li = ({ className = "", onClick, text = "" }: LiStyle) => {
  return (
    <li
      className={`text-text text-themeText bg-card rounded-lg p-3 w-full flex justify-center items-center font-medium text-medium bg-li border-2 border-borderLi  text-center
               btt   ${className}`}
      onClick={onClick}
    >
      {text}
    </li>
  );
};
