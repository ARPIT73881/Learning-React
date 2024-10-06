import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";

const About = lazy(() =>
  wait(1000).then(() => import("./components/About.jsx"))
);

const Contact = lazy(() =>
  wait(1000).then(() =>
    import("./components/Contact.jsx").then((module) => ({
      default: module.Contact,
    }))
  )
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const wait = (time) => {
  return new Promise((res) => {
    setTimeout(() => res(), time);
  });
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
