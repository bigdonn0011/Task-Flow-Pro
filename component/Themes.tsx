import { Buttons } from "../component/Buttons";

export const Themes = ({ openTheme, setTheme }) => {
  return (
    <>
      {openTheme && (
        <div className="flex flex-col gap-2">
          <Buttons
            className="border-border"
            onClick={() => setTheme("dark")}
            text="dark"
          />
          <Buttons
            className=" border-border"
            onClick={() => setTheme("green")}
            text="green"
          />
          <Buttons
            className=" border-border"
            onClick={() => setTheme("pink")}
            text="pink"
          />
          <Buttons
            className=" border-border"
            onClick={() => setTheme("light")}
            text="light"
          />
        </div>
      )}
    </>
  );
};
