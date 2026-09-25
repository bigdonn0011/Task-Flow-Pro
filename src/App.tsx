import { useEffect, useState } from "react";

import { Form } from "../component/Form";
import { Themes } from "../component/Themes";

export type Theme = "light" | "pink" | "dark" | "green";

//saves to local storage for theme
function App() {
  const [openTheme, setOpenTheme] = useState(false);
  const openThemeModal = () => setOpenTheme((prev) => !prev);
  const [setting, setSetting] = useState(false);
  const settingModal = () => setSetting((prev) => !prev);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme;
      if (
        saved === "dark" ||
        saved === "light" ||
        saved === "green" ||
        saved === "pink"
      ) {
        return saved;
      }
    }
    return "light";
  });
  //controls username switching
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

  //controls theme switch
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("green", "pink", "dark");

    if (theme !== "light") {
      root.classList.add(theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <section className="font-['Inter'] container min-h-screen min-w-screen bg-background flex flex-col gap-2 items-center justify-center">
        <Form openThemeModal={openThemeModal} user={user} showName={showName} />
        <Themes
          user={user}
          openThemeModal={openThemeModal}
          openTheme={openTheme}
          setTheme={setTheme}
          setting={setting}
          settingModal={settingModal}
        />
      </section>
    </>
  );
}
export default App;
