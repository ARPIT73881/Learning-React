const { createContext, useState } = require("react");

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <div>
      <ThemeContext.Provider value={[isDark, setIsDark]}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
