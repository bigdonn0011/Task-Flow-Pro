import type { Theme } from "../src/App";
import { Buttons } from "../component/Buttons";
import { Li } from "../component/Li";
interface ThemeStyle {
  openThemeModal: () => void;
  setting: boolean;
  openTheme: boolean;
  settingModal: () => void;
  setTheme: (theme: Theme) => void;
}
export const Themes = ({
  setTheme,
  openTheme,
  openThemeModal,
  setting,
  settingModal,
}: ThemeStyle) => {
  return (
    <>
      {!setting
        ? openTheme && (
            <section className="inset-0 fixed backdrop-blur-md z-10 flex flex-col justify-start items-center p-4 h-screen w-screen gap-4">
              <div className="w-full max-w-2xl relative flex flex-col justify-start items-center gap-4">
                <div className="w-full relative flex justify-start items-center">
                  <Buttons
                    className="material-symbols-rounded"
                    onClick={openThemeModal}
                    text="close"
                  />

                  <span className=" w-full px-4 py-1 block font-bold !text-2xl text-center">
                    Menu
                  </span>
                </div>

                <Li
                  onClick={settingModal}
                  className="bg-transparent"
                  text="Theme"
                />

                <Li className="bg-transparent" text="Login" />

                <Li className="bg-transparent" text="Change Avatar" />
              </div>
            </section>
          )
        : openTheme && (
            <section className="inset-0 fixed backdrop-blur-md z-10 flex flex-col justify-start items-center p-4 h-screen w-screen gap-4">
              <div className="w-full max-w-2xl relative flex flex-col justify-start items-center gap-4">
                <div className="  w-full relative flex justify-start items-center ">
                  <Buttons
                    className="material-symbols-rounded"
                    onClick={settingModal}
                    text="arrow_back"
                  />
                  <span className=" w-full px-4 py-1 block font-bold !text-2xl text-center">
                    Choose Theme
                  </span>
                </div>
                <ul className="max-w-2xl flex flex-col gap-4 rounded-md w-full p-4 justify-start ">
                  <Li text="Ace Dark" onClick={() => setTheme("dark")} />
                  <Li text="pink" onClick={() => setTheme("pink")} />
                  <Li text="Green" onClick={() => setTheme("green")} />
                  <Li text="white" onClick={() => setTheme("light")} />
                </ul>
              </div>
            </section>
          )}
    </>
  );
};
