import React from "react";
import { useState } from "react";
export const Avatar = () => {
  const [openAvatar, setopenAvatar] = useState(false);
  const [userName, setUserName] = useState("Guest");
  const user = () => {
    const prompte = window.prompt("Who is logging in today?");
    prompte ? setUserName(prompte) : window.alert("Add a username");
  };
  const showName = () => {
    if (userName !== "Guest") {
      return `Welcome back ${userName}`;
    }
    return `Currently logged in as ${userName}`;
  };

  return (
    <>
      <section
        onClick={user}
        className="items-center w-full cursor-pointer justify-center p-2 flex"
      >
        <div className=" Avatar-setting bg-card items-center p-2 flex">
          <span
            className="select-none !text-4xl material-symbols-rounded"
            onClick={openAvatar}
          >
            menu
          </span>
        </div>
        <div
          className="
              px-4 py-1 !font-bold !text-3xl !text-center w-full"
        >
          <span>{showName()}</span>
        </div>
      </section>
    </>
  );
};
