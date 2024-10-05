import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </>
  );
};

export default App;
