import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [lightTheme, setDarkTheme] = useState(function () {
    const storedValue = JSON.parse(localStorage.getItem("socialScheme"));
    console.log(storedValue);
    return storedValue && storedValue === "light"
      ? true
      : storedValue && storedValue === "dark"
      ? false
      : true;
  });

  function handleThemeChange() {
    setDarkTheme((curr) => !curr);
  }

  useEffect(
    function () {
      localStorage.setItem(
        "socialScheme",
        JSON.stringify(lightTheme ? "light" : "dark")
      );
    },
    [lightTheme]
  );

  return (
    <ThemeContext.Provider value={{ lightTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) throw new Error("Irrelevant use of CitiesContext");
  return context;
}

export { ThemeProvider, useTheme };
