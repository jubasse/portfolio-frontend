import { FC, PropsWithChildren, createContext } from "react";
import { useToggle } from "../hooks/use-toggle";

export interface ThemeContextProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    darkMode: localStorage.getItem('darkMode') === 'true' || false,
    toggleDarkMode: () => void 0,
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [darkMode, toggleDarkMode] = useToggle(localStorage.getItem('darkMode') === 'true' || false);

    return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}