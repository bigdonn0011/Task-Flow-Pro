import { useEffect, useState } from "react";

import { Buttons } from "../component/Buttons";
import { Form } from "../component/Form";

type Theme = "light" | "pink" | "dark" | "green";

//saves to local storage for theme
function App() {
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
    <section className="container min-h-screen min-w-screen bg-background flex flex-col items-center justify-center">
      <Form />
      <Buttons
        className=" border-border"
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
    </section>
  );
}
export default App;
