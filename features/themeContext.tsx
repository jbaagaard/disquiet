import { Colors, themes, Themes } from "../styles/theme";
import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeContextProps {
  themes: Themes;
  setTheme: (theme: string) => void;
  currentTheme: string;
}

export const ThemeContext = createContext<ThemeContextProps>(null!);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<string>("train");
  useEffect(() => {
    setCurrentTheme(localStorage.getItem("theme") || "train");
  }, []);
  const value: ThemeContextProps = {
    currentTheme: currentTheme,
    setTheme(theme: string): void {
      if (themes[theme]) {
        setCurrentTheme(theme);
        localStorage.setItem("theme", theme);
      }
    },
    themes: themes,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
