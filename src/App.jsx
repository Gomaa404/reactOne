import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";


import Layout from "./componets/layout/Layout";
import Home from "./componets/home/Home";
import About from "./componets/about/About";
import Portfilo from "./componets/portflio/Portfilo";
import Contact from "./componets/contact/Contact";
import Not from "./componets/not/Not";

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About/> },
      { path: "portfolio", element: <Portfilo /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Not /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
