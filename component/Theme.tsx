import {Buttons} from "../component/Buttons"
export const Theme = ()=>{
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center p-4 bg-background text-text">
                <button
                    className="bg-card btt border border-text rounded-2xl shadow-xl     p-4 px-2"
                    onClick={() => setCount(count => count + 1)}
                >
                    Count is {count}
                </button>
                <button
                    className="bg-card btt border border-text rounded-2xl shadow-xl p-4 px-2"
                    onClick={() => setTheme("dark")}
                >
                    Dark Mode
                </button>
                <button
                    className="bg-card btt border border-text rounded-2xl shadow-xl p-4 px-2"
                    onClick={() => setTheme("light")}
                >
                    Light Mode
                </button>
                <button
                    className="bg-card btt border border-text rounded-2xl shadow-xl p-4 px-2"
                    onClick={() => setTheme("green")}
                >
                    Green Mode
                </button>
                <button
                    className="bg-card btt border border-text rounded-2xl shadow-xl p-4 px-2"
                    onClick={() => setTheme("pink")}
                >
                    Pink Mode
                </button>
                <Buttons
                    className="bg-pink-600"
                    onClick={() => setTheme("green")}
                    text="Set theme to green"
                />
            </div>
    </>
  )
}