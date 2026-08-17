import type { Theme } from "../src/App";
import { Buttons } from "../component/Buttons";
import { Li } from "../component/Li";
interface ThemeStyle {
  openTheme: boolean;
  openThemeModal: () => void;
  setting: boolean;
  settingModal: () => void;
  setTheme: (theme: Theme) => void;
}
export const Themes = ({
  openTheme,
  setTheme,
  openThemeModal,
  setting,
  settingModal,
}: ThemeStyle) => {
  return (
    <>
      {openTheme && (
        <div className="inset-0 fixed backdrop-blur-md z-10 flex flex-col justify-center items-center p-4 h-screen w-screen gap-4">
          {!setting && (
            <div
              className={`w-full relative flex justify-start items-center ${setting ? "hidden" : ""}`}
            >
              <Buttons
                className="block p-4 items-center !text-3xl font-black  absolute left-4  border-none material-symbols-rounded"
                onClick={openThemeModal}
                text="close"
              />

              <span className=" w-full px-4 py-1 block font-bold !text-2xl text-center">
                Menu
              </span>
            </div>
          )}

          <section
            className={` text-bold ${setting ? "hidden" : ""}`}
            onClick={settingModal}
          >
            <span className=" w-full px-4 py-1 block font-bold !text-2xl text-center">
              Select Theme
            </span>
          </section>
          {setting && (
            <div className="  w-full relative flex justify-start items-center ">
              <Buttons
                className="block p-4 items-center !text-3xl font-black  absolute left-4  border-none material-symbols-rounded bg-red-500"
                onClick={settingModal}
                text="Menu"
              />
              <span className=" w-full px-4 py-1 block font-bold !text-2xl text-center">
                Choose Theme
              </span>
              <ul className="max-w-2xl flex flex-col gap-4 rounded-md w-full p-4 justify-start ">
                <Li text="Ace Dark" onClick={() => setTheme("dark")} />
                <Li text="pink" onClick={() => setTheme("pink")} />
                <Li text="Green" onClick={() => setTheme("green")} />
                <Li text="white" onClick={() => setTheme("light")} />
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};
