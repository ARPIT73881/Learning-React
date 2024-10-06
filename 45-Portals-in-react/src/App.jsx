import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="px-4 py-4 md:px-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;
