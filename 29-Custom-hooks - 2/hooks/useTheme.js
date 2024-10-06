import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () => useContext(ThemeContext);

// export function useTheme() {
//   return useContext(ThemeContext);
// }

// export function useTheme() {
//   const [isDark, setIsDark] = useContext(ThemeContext);
//   return [isDark, setIsDark];
// }
