import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
// import FooterA from "./Components/FooterA/FooterA";
// import FooterB from "./Components/FooterB/FooterB";
import Home from "./Components/Home/Home";
// import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/NotFound/Notfound";

function App() {

  const router = createHashRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { path: "", element: <Home /> },
          { path: "home", element: <Navigate to={"/"} /> },
          { path: "about", element: <About /> },
          { path: "portfolio", element: <Portfolio /> },
          { path: "contact", element: <Contact /> },
          { path: "*", element: <Notfound /> },
        ],
      },
    ],
  );

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
