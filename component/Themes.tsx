import { Buttons } from "../component/Buttons";
import type { Theme } from "../src/App";
interface ThemeStyle {
  openTheme: boolean;
  setTheme: (theme: Theme) => void;
}
export const Themes = ({ openTheme, setTheme }: ThemeStyle) => {
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
