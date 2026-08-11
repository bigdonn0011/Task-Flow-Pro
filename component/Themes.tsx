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
        <div className="inset-0 fixed backdrop-blur-md z-10 flex flex-col justify-center items-center p-4 h-screen w-screen gap-4">
          <div className="  w-full relative flex justify-start items-center">
            <span
              className="block p-4 items-center w-full !text-3xl font-black  absolute left-4  border-none material-symbols-rounded"
              onClick={openThemeModal}
            >
              close
            </span>
            <span className=" w-full px-4 py-1 block font-bold !text-2xl text-center">
              Menu
            </span>
          </div>
          <ul className="max-w-2xl flex flex-col gap-4 rounded-md w-full p-4 justify-start ">
            <li
              className=" text-text bg-card rounded-lg p-3 w-full flex justify-center items-center font-medium text-medium bg-slate-700 border-2 border-slate-200
               btt     "
              onClick={() => setTheme("dark")}
            >
              Ace Dark
            </li>
            <li
              className=" text-text bg-card rounded-lg p-3 w-full flex justify-center items-center font-medium text-medium bg-pink-100 border-2 border-pink-400
                   btt "
              onClick={() => setTheme("pink")}
            >
              Prevalent Pink
            </li>
            <li
              className=" text-text bg-card rounded-lg p-3 w-full flex justify-center items-center font-medium text-medium bg-slate-100  border-2 border-slate-700
                  btt  "
              onClick={() => setTheme("light")}
            >
              Lustrous White
            </li>
            <li
              className=" text-text bg-card rounded-lg p-3 w-full flex justify-center items-center font-medium bg-green-100 text-medium  border-2 border-green-300
                  btt  "
              onClick={() => setTheme("green")}
            >
              Feverent Green
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
