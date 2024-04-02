import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Signup from "./Signup";
import Login from "./Login";
import Checkout from "./components/Checkout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Menu",
      element: <Menu />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/Checkout",
      element: <Checkout />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
        <NavBar />
        <Footer />
      </RouterProvider>
    </div>
  );
}

export default App;
