import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/theme-context";

/**
 * @description Context hook that manages theme variables
 */
export function useTheme() {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const documentClassList = document?.documentElement?.classList;
    if (!documentClassList) return;
    themeContext.darkMode
      ? documentClassList.add("dark")
      : documentClassList.remove("dark");
  }, [themeContext.darkMode]);

  return themeContext;
}
