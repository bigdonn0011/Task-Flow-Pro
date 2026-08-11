import { Buttons } from "../component/Buttons";
import type { Theme } from "../src/App";
interface ThemeStyle {
  openTheme: boolean;
  openThemeModal: () => void;
  setTheme: (theme: Theme) => void;
}
export const Themes = ({ openTheme, setTheme, openThemeModal }: ThemeStyle) => {
  return (
    <>
      {openTheme && (
        <div className="inset-0 backdrop-blur-md z-10 flex flex-col justify-center items-center p-4 min-h-screen min-w-screen">
          <Buttons text="close" onClick={openThemeModal} />
          <div className="flex flex-col gap-2 rounded-md border border-border bg-case w-full">
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
        </div>
      )}
    </>
  );
};
